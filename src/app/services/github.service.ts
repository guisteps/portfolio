import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GithubRet } from "../model/GithubRet.model";

@Injectable({
    providedIn: 'root',
})
export class GithubService {

    constructor(private http: HttpClient) { }

    getRepos() {
        return this.http.get<GithubRet[]>('https://api.github.com/users/guisteps/repos');
    }
}