import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { DocumentUploadComponent } from './document-upload/document-upload.component';
import { DragDropUploadComponent } from './drag-drop-upload/drag-drop-upload.component';
import { DocumentViewerComponent } from './document-viewer/document-viewer.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent }
    ]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'user-registration', component: UserRegistrationComponent },
      { path: 'document-upload', component: DocumentUploadComponent },
      { path: 'drag-drop-upload', component: DragDropUploadComponent },
      { path: 'document-viewer', component: DocumentViewerComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
