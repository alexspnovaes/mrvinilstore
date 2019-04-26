import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class DataService {
    private serviceUrl: string = 'https://localhost:5001/';

    constructor(private http: Http) { }

    createUser(data: any) {
        return this.http
            .post(environment.serviceUrl + 'v1/customers', data)
            .map((res: Response) => res.json());
    }

    authenticate(data: any) {
        var dt = "grant_type=password&username=" + data.username + "&password=" + data.password;
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.serviceUrl + 'v1/authenticate', dt, options).map((res: Response) => res.json());
    }

    getProducts() {
        return this.http
            .get(this.serviceUrl + 'v1/disks')
            .map((res: Response) => res.json());
    }

    getOrdersByClient(clientId: string) {
        return this.http
            .get(this.serviceUrl + 'v1/orders/client/' + clientId)
            .map((res: Response) => res.json());
    }

    getProductsByGenre(genre) {
        return this.http
            .get(this.serviceUrl + 'v1/disks/' + genre)
            .map((res: Response) => res.json());
    }

    createOrder(data: any) {
        var token = localStorage.getItem('mws.token');
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', `Bearer ${token}`); Headers
        let options = new RequestOptions({ headers: headers });
        return this.http
            .post(this.serviceUrl + 'v1/orders/newOrder', data, options)
            .map((res: Response) => res.json());
    }
}