import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Todos } from "./todos";

@Injectable()
export class TodoService{
    url='https://jsonplaceholder.typicode.com/todos'
    constructor(private _http:HttpClient){}

    todoData():Observable<Todos[]>{
        return this._http.get<Todos[]>(this.url)
    }
}