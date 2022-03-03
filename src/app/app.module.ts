import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { DevTemporaryComponent } from './dev-temporary/dev-temporary.component';
import { GeneralComponent } from './general/general.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ComponentsComponent } from './components/components.component';
import { OnepageuiComponent } from './onepageui/onepageui.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DemoLayoutComponent } from './demo-layout/demo-layout.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    DevTemporaryComponent,
    GeneralComponent,
    HeaderComponent,
    FooterComponent,
    ComponentsComponent,
    OnepageuiComponent,
    DemoLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    BsDatepickerModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
