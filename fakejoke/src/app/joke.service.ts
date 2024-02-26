import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private nna:HttpClient) { } ;

  getData() {
    return this.nna.get('http://api.sampleapis.com/jokes/goodJokes');
  }
}
