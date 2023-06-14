import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPageComponent } from './list-page/list-page.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { DetailsPageComponent } from './details-page/details-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ListPageComponent, data: { text: 'Home' } },
  { path: 'info', component: InfoPageComponent, data: { text: 'info' } },
  { path: 'details', component: DetailsPageComponent, data: { text: 'details' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
