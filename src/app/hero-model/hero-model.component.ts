import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

const IDLE_RESUME_MS = 3000;
const AUTO_ROTATE_SPEED = 1.6;

@Component({
  selector: 'app-hero-model',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-model.component.html',
  styleUrl: './hero-model.component.css'
})
export class HeroModelComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('canvas') private canvasRef?: ElementRef<HTMLCanvasElement>;
  @ViewChild('stage') private stageRef?: ElementRef<HTMLDivElement>;

  supported = true;
  ready = false;

  private renderer: any;
  private scene: any;
  private camera: any;
  private controls: any;
  private model: any;
  private frameId = 0;
  private resizeObserver?: ResizeObserver;
  private reducedMotion = false;
  private idleTimer?: ReturnType<typeof setTimeout>;
  private disposed = false;

  ngOnInit() {
    this.supported = this.hasWebGL();
  }

  async ngAfterViewInit() {
    if (!this.supported || !this.canvasRef || !this.stageRef) {
      return;
    }

    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    try {
      const THREE = await import('three');
      const { GLTFLoader } = await import('three/addons/loaders/GLTFLoader.js');
      const { RoomEnvironment } = await import('three/addons/environments/RoomEnvironment.js');
      const { OrbitControls } = await import('three/addons/controls/OrbitControls.js');

      if (this.disposed) return;

      const canvas = this.canvasRef.nativeElement;
      const stage = this.stageRef.nativeElement;

      const scene = new THREE.Scene();
      this.scene = scene;

      const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
      this.camera = camera;

      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.1;
      this.renderer = renderer;

      const pmrem = new THREE.PMREMGenerator(renderer);
      scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
      pmrem.dispose();

      const keyLight = new THREE.DirectionalLight(0xffffff, 1.6);
      keyLight.position.set(2.5, 3, 2);
      scene.add(keyLight);
      const fillLight = new THREE.DirectionalLight(0xffffff, 0.5);
      fillLight.position.set(-2.5, 1, -2);
      scene.add(fillLight);
      scene.add(new THREE.AmbientLight(0xffffff, 0.45));

      // fit renderer/camera aspect to the current container size before framing the model
      this.resize();

      const loader = new GLTFLoader();
      const gltf = await loader.loadAsync('3d/1/base_basic_pbr.glb');
      if (this.disposed) return;

      const model = gltf.scene;
      scene.add(model);
      this.model = model;

      const box = new THREE.Box3().setFromObject(model);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());

      const controls = new OrbitControls(camera, canvas);
      controls.target.copy(center);
      controls.enablePan = false;
      controls.enableDamping = true;
      controls.dampingFactor = 0.08;
      controls.minPolarAngle = Math.PI * 0.15;
      controls.maxPolarAngle = Math.PI * 0.85;
      controls.autoRotate = !this.reducedMotion;
      controls.autoRotateSpeed = AUTO_ROTATE_SPEED;
      this.controls = controls;

      const distance = this.frameCameraToBox(THREE, camera, size, center, 1.15);
      controls.minDistance = distance * 0.6;
      controls.maxDistance = distance * 1.7;
      controls.update();

      controls.addEventListener('start', () => {
        controls.autoRotate = false;
        if (this.idleTimer) clearTimeout(this.idleTimer);
      });
      controls.addEventListener('end', () => {
        if (this.reducedMotion) return;
        if (this.idleTimer) clearTimeout(this.idleTimer);
        this.idleTimer = setTimeout(() => { controls.autoRotate = true; }, IDLE_RESUME_MS);
      });

      this.resizeObserver = new ResizeObserver(() => this.resize());
      this.resizeObserver.observe(stage);

      requestAnimationFrame(() => { this.ready = true; });
      this.frameId = requestAnimationFrame(this.animate);
    } catch (err) {
      console.error('HeroModel: failed to load 3D scene', err);
      this.supported = false;
    }
  }

  private frameCameraToBox(THREE: any, camera: any, size: any, center: any, fitOffset = 1.2): number {
    const maxSize = Math.max(size.x, size.y, size.z);
    const fitHeightDistance = maxSize / (2 * Math.atan((Math.PI * camera.fov) / 360));
    const fitWidthDistance = fitHeightDistance / camera.aspect;
    const distance = fitOffset * Math.max(fitHeightDistance, fitWidthDistance);

    const direction = new THREE.Vector3(0, 0.12, 1).normalize();
    camera.position.copy(center).addScaledVector(direction, distance);
    camera.near = distance / 100;
    camera.far = distance * 100;
    camera.updateProjectionMatrix();
    camera.lookAt(center);
    return distance;
  }

  private hasWebGL(): boolean {
    try {
      const canvas = document.createElement('canvas');
      return !!(canvas.getContext('webgl2') || canvas.getContext('webgl'));
    } catch {
      return false;
    }
  }

  private resize() {
    if (!this.renderer || !this.camera || !this.stageRef) return;
    const { clientWidth, clientHeight } = this.stageRef.nativeElement;
    if (!clientWidth || !clientHeight) return;
    this.renderer.setSize(clientWidth, clientHeight, false);
    this.camera.aspect = clientWidth / clientHeight;
    this.camera.updateProjectionMatrix();
  }

  private animate = () => {
    if (this.disposed) return;
    this.frameId = requestAnimationFrame(this.animate);
    this.controls?.update();
    this.renderer.render(this.scene, this.camera);
  };

  ngOnDestroy() {
    this.disposed = true;
    cancelAnimationFrame(this.frameId);
    if (this.idleTimer) clearTimeout(this.idleTimer);
    this.resizeObserver?.disconnect();
    this.controls?.dispose();

    if (this.model) {
      this.model.traverse((obj: any) => {
        obj.geometry?.dispose?.();
        if (obj.material) {
          const materials = Array.isArray(obj.material) ? obj.material : [obj.material];
          materials.forEach((mat: any) => {
            Object.values(mat).forEach((value: any) => {
              if (value && typeof value.dispose === 'function') value.dispose();
            });
            mat.dispose();
          });
        }
      });
    }

    this.scene?.environment?.dispose?.();
    this.renderer?.dispose();
  }
}
