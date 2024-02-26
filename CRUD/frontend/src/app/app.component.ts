import { Component } from '@angular/core';
import { CrudService } from './crud.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  books:any[]=[]
  movies:any[]=[]
  constructor(private cs:CrudService)
  {
    this.cs.getData().subscribe((data:any)=>this.books=data)
    this.cs.getData().subscribe((data:any)=>this.movies=data)

  }
  remove(id:number)
  {
    this.cs.deleteData(id).subscribe((data:any)=>{
    this.books=data;
    window.location.reload()
  })
  }
}
