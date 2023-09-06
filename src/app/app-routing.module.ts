import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './ui/layout/layout.component';
import { HomeComponent } from './ui/components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'cryptocurrencies',
        loadChildren: () =>
          import('../app/ui/components/cryptocurrencies/cryptocurrencies.module').then(
            (m) => m.CryptocurrenciesModule
          ),
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('../app/ui/components/auth/auth.module').then(
            (m) => m.AuthModule
          ),
      },
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
