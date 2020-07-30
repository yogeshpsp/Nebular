import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbButtonModule, NbInputModule, NbIconModule, NbSelectModule, NbTabsetModule, NbFormFieldModule, NbUserModule, NbActionsModule, NbBadgeModule, NbMenuModule, NbContextMenuModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { Header2Component } from './header2/header2.component';
import { Header3Component } from './header3/header3.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Header2Component,
    Header3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbMenuModule.forRoot(),
    NbLayoutModule,NbButtonModule,NbInputModule,NbIconModule,NbSelectModule,NbTabsetModule,NbContextMenuModule,NbActionsModule,NbBadgeModule,NbTabsetModule,NbFormFieldModule,NbUserModule,
    NbEvaIconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
