import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'menu', component: MenuListComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'login', component: LoginDialogComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
