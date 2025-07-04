// src/app/property/property.component.ts
import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../services/property.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html'
})
export class PropertyComponent implements OnInit {
  properties: any[] = [];
  newProperty = { name: '' };

  constructor(private service: PropertyService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.service.getAll().subscribe(data => this.properties = data as any[]);
  }

  addProperty() {
    this.service.add(this.newProperty).subscribe(() => {
      this.newProperty.name = '';
      this.load();
    });
  }

  deleteProperty(id: number) {
    this.service.delete(id).subscribe(() => this.load());
  }
}
