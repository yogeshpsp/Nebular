import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'at-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items = [
    { title: 'Profile' },
    { title: 'Logout' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
