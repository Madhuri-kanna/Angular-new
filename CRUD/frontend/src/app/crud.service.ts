import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private hc:HttpClient) { }
  getData()
  {
    return this.hc.get('http://localhost:3000/books');
    return this.hc.get('http://localhost:3000/movies');
  }
  deleteData(id:number)
  {
    return this.hc.delete(`http://localhost:3000/books/${id}`);
    return this.hc.delete(`http://localhost:3000/movies/${id}`);
  }
}
