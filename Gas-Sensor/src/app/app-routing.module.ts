import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './pages/history/history.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: 'chart', loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule), component : MainComponent
  },
  {
    path: 'history', loadChildren: () => import('./pages/history/history.module').then(m => m.HistoryModule), component :HistoryComponent
  },
  {
    path: '', component : HomepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
