import { NgModule, ModuleWithProviders } from '@angular/core';
import { HeaderComponent } from './header.component';
import { Header1Component } from './header1/header1.component';
import { HeaderService } from './header.service';
import { NbThemeModule, NbMenuModule, NbLayoutModule, NbButtonModule, NbInputModule, NbIconModule, NbSelectModule, NbTabsetModule, NbContextMenuModule, NbActionsModule, NbBadgeModule, NbFormFieldModule, NbUserModule, NbOptionModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { Header2Component } from './header2/header2.component';
import { Header3Component } from './header3/header3.component';


@NgModule({
  declarations: [
    HeaderComponent,
    Header1Component,
    Header2Component,
    Header3Component
  ],
  imports: [  NbThemeModule.forRoot({ name: 'default' }),
  NbMenuModule.forRoot(),
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
        HeaderService
      ]
    };
  }
}
