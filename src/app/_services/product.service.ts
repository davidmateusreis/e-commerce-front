import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderDetails } from '../_model/order-details.model';
import { MyOrderDetails } from '../_model/order.model';
import { Product } from '../_model/product.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  API = `${environment.API}`;

  constructor(private httpClient: HttpClient) { }

  public addProduct(product: FormData) {
    return this.httpClient.post<Product>(`${this.API}/addNewProduct`, product);
  }

  public getAllProducts(pageNumber: number, searchKeyword: string = "") {
    return this.httpClient.get<Product[]>(`${this.API}/getAllProducts?pageNumber=` + pageNumber + "&searchKey=" + searchKeyword);
  }

  public getProductDetailsById(productId: string) {
    return this.httpClient.get<Product>(`${this.API}/getProductDetailsById/` + productId);
  }

  public deleteProduct(productId: number) {
    return this.httpClient.delete(`${this.API}/deleteProductDetails/` + productId);
  }

  public getProductDetails(isSingleProductCheckout: any, productId: any) {
    return this.httpClient.get<Product[]>(`${this.API}/getProductDetails/` + isSingleProductCheckout + "/" + productId);
  }

  public placeOrder(orderDetails: OrderDetails, isSingleProductCheckout: string | null) {
    return this.httpClient.post(`${this.API}/placeOrder/` + isSingleProductCheckout, orderDetails);
  }

  public addToCart(productId: number) {
    return this.httpClient.get(`${this.API}/addToCart/` + productId);
  }

  public getCartDetails() {
    return this.httpClient.get(`${this.API}/getCartDetails`);
  }

  public deleteCartItem(cartId: any) {
    return this.httpClient.delete(`${this.API}/deleteCartItem/` + cartId);
  }

  public getMyOrders(): Observable<MyOrderDetails[]> {
    return this.httpClient.get<MyOrderDetails[]>(`${this.API}/getOrderDetails`);
  }

  public getAllOrderDetails(status: string): Observable<OrderDetails[]> {
    return this.httpClient.get<OrderDetails[]>(`${this.API}/getAllOrderDetails/` + status);
  }

  public markAsDelivered(orderId: any) {
    return this.httpClient.get(`${this.API}/markOrderAsDelivered/` + orderId);
  }

  public createTransaction(amount: any) {
    return this.httpClient.get(`${this.API}/createTransaction/` + amount);
  }
}
