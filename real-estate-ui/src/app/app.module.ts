import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { DocumentUploadComponent } from './document-upload/document-upload.component';
import { DragDropUploadComponent } from './drag-drop-upload/drag-drop-upload.component';
import { DocumentViewerComponent } from './document-viewer/document-viewer.component';

import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    AuthComponent,
    DashboardComponent,
    UserRegistrationComponent,
    DocumentUploadComponent,
    DragDropUploadComponent,
    DocumentViewerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
