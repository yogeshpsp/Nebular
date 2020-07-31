import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'at-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.scss']
})
export class Header1Component implements OnInit {
  items = [
    { title: 'Profile' },
    { title: 'Logout' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
