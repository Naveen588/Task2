import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Posts } from "./post";

@Injectable()
export class PostService{
    constructor(private _http:HttpClient){

    }
    url='https://jsonplaceholder.typicode.com/posts'

    getPostData(){
        return this._http.get<Posts>(this.url)
      }
}