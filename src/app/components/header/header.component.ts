import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  burgerShow = false;
  burgerClick() {

    if (this.burgerShow) {
      this.burgerShow = false;
    } else {
      this.burgerShow = true;
    }
  }
  constructor() { }
  ngOnInit(): void {
  }



}