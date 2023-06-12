import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class EmailService {

    constructor(private http: HttpClient) { }

    send(bodyParams: {}) {
        return this.http.post('https://formspree.io/f/xpzevzaz', bodyParams);
    }
}