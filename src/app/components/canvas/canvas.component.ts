import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbOffcanvasConfig, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  constructor(config: NgbOffcanvasConfig, private offcanvasService: NgbOffcanvas,private route: Router) {
    config.position = 'end';
		config.backdropClass = 'bg-info';
		config.keyboard = false;
   }

  ngOnInit(): void {
  }

  open(content:any) {
		this.offcanvasService.open(content);
	}

  getcompo(val:any){
    this.route.navigate([`/${val}`])
  }

  signout(){
    window.location.replace("http://localhost:4200")
    sessionStorage.clear()
  }
}
