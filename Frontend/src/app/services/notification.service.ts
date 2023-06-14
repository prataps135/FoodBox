import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private toastrService: ToastrService
  ) { }

  showError(message: string, title: string) {
    this.toastrService.error(message, title);
  }

  showSuccess(message: string, title: string) {
    this.toastrService.success(message, title);
  }

  showWarning(message: string, title: string) {
    this.toastrService.warning(message, title);
  }

  showInfo(message: string, title: string) {
    this.toastrService.info(message, title);
  }
}
