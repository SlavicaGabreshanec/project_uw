import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { DemoLayoutComponent } from './demo-layout/demo-layout.component';
import { DevTemporaryComponent } from './dev-temporary/dev-temporary.component';
import { FooterComponent } from './footer/footer.component';
import { GeneralComponent } from './general/general.component';
import { HeaderComponent } from './header/header.component';
import { OnepageuiComponent } from './onepageui/onepageui.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

const routes: Routes = 
[
  // { path: '', component: GeneralComponent },
   { path: 'general', component: GeneralComponent },
   { path: 'header', component: HeaderComponent },
   { path: 'footer', component: FooterComponent },
   { path: 'components', component: ComponentsComponent },
   { path: 'dev-temporary', component: DevTemporaryComponent },
  { path: 'sidebar', component: SideMenuComponent },
  { path: '', component: OnepageuiComponent },
  { path: 'onepageui', component: OnepageuiComponent },
  { path: 'demo-layout', component: DemoLayoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
