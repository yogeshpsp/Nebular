import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'at-header3',
  templateUrl: './header3.component.html',
  styleUrls: ['./header3.component.scss']
})
export class Header3Component implements OnInit {
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
