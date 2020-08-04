import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonService } from '../common.service';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'at-header3',
  templateUrl: './header3.component.html',
  styleUrls: ['./header3.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Header3Component implements OnInit {

  constructor(
    public commonService: CommonService,
    public sidebarService: NbSidebarService
  ) {
    this.commonService.layoutClass.subscribe((res) => {
      console.error(res);
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
