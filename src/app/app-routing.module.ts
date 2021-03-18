import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelsComponent } from './channels/channels.component';
import { FilmsComponent } from './films/films.component';

const routes: Routes = [
  { path: 'channels', component: ChannelsComponent },
  { path: 'films', component: FilmsComponent },
  { path: '',   redirectTo: '/films', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
