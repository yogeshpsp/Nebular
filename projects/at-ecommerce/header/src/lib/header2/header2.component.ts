import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'at-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.scss']
})
export class Header2Component implements OnInit {
  selectedItem;
  items = [
    { title: 'Profile' },
    { title: 'Logout' },
  ];
  cart=[
    {title:"1 item"},
    {title:"2 item"},
    {title:"3 item"},
    {title:"4 item"},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
