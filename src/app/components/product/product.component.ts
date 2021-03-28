import { Component, OnInit } from '@angular/core';
import {Product} from 'src/app/models/product';
import {HttpClient} from '@angular/common/http'
import { ProductResponseModel } from 'src/app/models/productResponseModel';

//HttpClient ile backend teki data ya ulaşıyoruz.
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {

  products:Product[] = [];
  apiUrl="https://localhost:44363/api/products/getall"
  //productResponseModel:ProductResponseModel={};
  constructor(private httpClient:HttpClient) {}

  ngOnInit(): void {
    console.log("İnit çalıştı");
  }

  getProducts(){
    this.httpClient.get(this.apiUrl)

  }
}
