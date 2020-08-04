import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonService } from '../common.service';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'at-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Header1Component implements OnInit {
  items = [
    { title: 'Profile' },
    { title: 'Logout' },
  ];

  resitem=[
    { title:'Cart'},
    { title:'Profile'},
    { title:'Logout'},

  ]
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
