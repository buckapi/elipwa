import { Component, OnInit } from '@angular/core';
import { Yeoman } from '@app/services/yeoman.service';
@Component({
  selector: 'app-hdr',
  templateUrl: './hdr.component.html',
  styleUrls: ['./hdr.component.css']
})
export class HdrComponent implements OnInit {

  constructor(
    public yeoman:Yeoman
  ) { }
  setRoute(par:any){
    let parametro=par;
  this.yeoman.virtualRoute=parametro;
  }
  ngOnInit(): void {
  }

}
