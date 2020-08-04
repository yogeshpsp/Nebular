import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonService } from '../common.service';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'at-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.scss'],
  encapsulation: ViewEncapsulation.None
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
  constructor(
    public commonService: CommonService,
    public sidebarService: NbSidebarService
  ) {
    this.commonService.layoutClass.subscribe((res) => {

    })
   }
   toggle() {
    this.sidebarService.toggle(false, 'left');
  }

  toggleCompact() {
    this.sidebarService.toggle(true, 'right');
  }
  ngOnInit(): void {
  }

}
