// // import { Component } from '@angular/core';
// // import { UserRegistrationComponent } from '../user-registration/user-registration.component';
// // import { DocumentUploadComponent } from '../document-upload/document-upload.component';
// // import { DragDropUploadComponent } from '../drag-drop-upload/drag-drop-upload.component';
// // import { DocumentViewerComponent } from '../document-viewer/document-viewer.component';

// // @Component({
// //   selector: 'app-dashboard',
// //   standalone: true,
// //   imports: [
// //     UserRegistrationComponent,
// //     DocumentUploadComponent,
// //     DragDropUploadComponent,
// //     DocumentViewerComponent
// //   ],
// //   templateUrl: './dashboard.component.html',
// //   styleUrls: ['./dashboard.component.less']
// // })
// // export class DashboardComponent {}
// import { Component } from '@angular/core';
// import { UserRegistrationComponent } from '../user-registration/user-registration.component';
// import { DocumentUploadComponent } from '../document-upload/document-upload.component';
// import { DragDropUploadComponent } from '../drag-drop-upload/drag-drop-upload.component';
// import { DocumentViewerComponent } from '../document-viewer/document-viewer.component';

// @Component({
//   selector: 'app-dashboard',
//   standalone: true,
//   imports: [
//     UserRegistrationComponent,
//     DocumentUploadComponent,
//     DragDropUploadComponent,
//     DocumentViewerComponent
//   ],
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.less']
// })
// export class DashboardComponent {
//   selectedSection: string = 'user';

//   selectSection(section: string) {
//     this.selectedSection = section;
//   }
// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegistrationComponent } from '../user-registration/user-registration.component';
import { DocumentUploadComponent } from '../document-upload/document-upload.component';
import { DragDropUploadComponent } from '../drag-drop-upload/drag-drop-upload.component';
import { DocumentViewerComponent } from '../document-viewer/document-viewer.component';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    UserRegistrationComponent,
    DocumentUploadComponent,
    DragDropUploadComponent,
    DocumentViewerComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent {
  selectedSection: string = 'user';

  constructor(private authService: AuthService) {}

  selectSection(section: string) {
    this.selectedSection = section;
  }

  logout() {
    this.authService.logout();
  }
}
