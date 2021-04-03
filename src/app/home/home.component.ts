import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public imgSrc:string = 'assets/images/dn.png';
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  gotoJSUtility() {
    this.router.navigate(['/js-utility'])
  }
}
