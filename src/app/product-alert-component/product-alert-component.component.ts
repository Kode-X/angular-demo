import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-product-alert-component',
  templateUrl: './product-alert-component.component.html',
  styleUrls: ['./product-alert-component.component.css']
})
export class ProductAlertComponentComponent implements OnInit {
  @Input() product;
  constructor() { }

  ngOnInit() {
  }

}