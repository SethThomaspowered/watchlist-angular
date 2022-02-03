import { Injectable, TemplateRef } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService {
  toasts: any[] = [];

  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }

  remove(toast: any) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
  showSuccess(msg: any) {
    this.show(msg, { classname: 'bg-success text-light', delay: 3000 });
  }
  showError(msg: any) {
    this.show(msg, { classname: 'bg-danger text-light', delay: 3000 });
  }
}