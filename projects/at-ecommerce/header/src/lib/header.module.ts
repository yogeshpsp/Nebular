import { NgModule, ModuleWithProviders } from '@angular/core';
import { HeaderComponent } from './header.component';
import { Header1Component } from './header1/header1.component';
import { HeaderService } from './header.service';
import { CommonService } from './common.service';
import { NbThemeModule, NbMenuModule, NbSidebarModule, NbLayoutModule, NbButtonModule, NbInputModule, NbIconModule, NbSelectModule, NbTabsetModule, NbContextMenuModule, NbActionsModule, NbBadgeModule, NbFormFieldModule, NbUserModule, NbOptionModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { Header2Component } from './header2/header2.component';
import { Header3Component } from './header3/header3.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    HeaderComponent,
    Header1Component,
    Header2Component,
    Header3Component
  ],
  imports: [ CommonModule, NbThemeModule, NbSidebarModule.forRoot(),
  NbMenuModule,
  NbLayoutModule,NbButtonModule,NbInputModule,NbIconModule,NbSelectModule,NbTabsetModule,NbContextMenuModule,NbActionsModule,NbBadgeModule,NbTabsetModule,NbFormFieldModule,NbUserModule,
  NbEvaIconsModule,NbOptionModule],
  exports: [
    HeaderComponent,
    Header1Component,
    Header2Component,
    Header3Component
  ]
})
export class HeaderModule {
  static forRoot(): ModuleWithProviders<HeaderModule> {
    return {
      ngModule: HeaderModule,
      providers: [
        HeaderService,
        CommonService
      ]
    };
  }
}
