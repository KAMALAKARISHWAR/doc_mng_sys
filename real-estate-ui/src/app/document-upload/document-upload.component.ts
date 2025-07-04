import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // ✅ Import HttpClient

@Component({
  selector: 'app-document-upload',
  standalone: true,
  imports: [],
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.less']
})
export class DocumentUploadComponent {

  constructor(private http: HttpClient) {} // ✅ Inject HttpClient

  uploadDocument(fileInput: any, documentType: string) {
    const file = fileInput.files[0];
    if (!file || !documentType) {
      alert("Please select a document type and file.");
      return;
    }

    const formData = new FormData();
    formData.append("DocumentType", documentType);
    formData.append("File", file);

    this.http.post('https://localhost:7015/api/documentupload/upload', formData).subscribe({
      next: (res) => console.log("Success:", res),
      error: (err) => console.error("Upload error:", err)
    });
  }

}
