// src/app/document/document.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DocumentService } from '../services/document.service';

@Component({
  selector: 'app-document',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './document.component.html'
})
export class DocumentComponent implements OnInit {
  documents: any[] = [];
  docForm: any = { title: '', description: '' };
  isEdit = false;
  editId: number | null = null;

  constructor(private documentService: DocumentService) {}

  ngOnInit(): void {
    this.loadDocuments();
  }

  loadDocuments(): void {
    this.documentService.getAll().subscribe(data => this.documents = data);
  }

  saveDocument(): void {
    if (this.isEdit && this.editId !== null) {
      this.documentService.update(this.editId, this.docForm).subscribe(() => {
        this.resetForm();
        this.loadDocuments();
      });
    } else {
      this.documentService.add(this.docForm).subscribe(() => {
        this.resetForm();
        this.loadDocuments();
      });
    }
  }

  editDocument(doc: any): void {
    this.docForm = { ...doc };
    this.editId = doc.id;
    this.isEdit = true;
  }

  deleteDocument(id: number): void {
    if (confirm('Are you sure to delete?')) {
      this.documentService.delete(id).subscribe(() => this.loadDocuments());
    }
  }

  resetForm(): void {
    this.docForm = { title: '', description: '' };
    this.isEdit = false;
    this.editId = null;
  }
}
