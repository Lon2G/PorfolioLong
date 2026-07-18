import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css'
})
export class ProjectModalComponent implements OnChanges, OnDestroy {
  @Input() project: any = null;
  @Output() closed = new EventEmitter<void>();

  displayProject: any = null;
  isOpen = false;
  activeTab: 'content' | 'gallery' = 'content';

  ngOnChanges(changes: SimpleChanges) {
    if (!changes['project']) return;

    if (this.project) {
      this.displayProject = this.project;
      this.activeTab = 'content';
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => { this.isOpen = true; });
    } else {
      this.isOpen = false;
      document.body.style.overflow = '';
    }
  }

  ngOnDestroy() {
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.isOpen) this.closed.emit();
  }

  onOverlayClick() {
    this.closed.emit();
  }
}
