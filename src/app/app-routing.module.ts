import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JsUtilityComponent } from './js-utility/js-utility.component';

const routes: Routes = [{
    path: '',  redirectTo: '/home', pathMatch: 'full'
  },{
    path: 'home', component: HomeComponent
  },{
    path: 'js-utility', component: JsUtilityComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
