import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './app/layout/layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/HomePapApp',
        pathMatch: 'full',
      },
      {
        path: 'HomePapApp',
        loadChildren: () => import('./app/modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'Register',
        loadChildren: () => import('./app/modules/registro/registro.module').then(m => m.RegistroModule)
      },
      {
        path: 'Login',
        loadChildren: () => import('./app/modules/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'Welcome',
        loadChildren: () => import('./app/modules/welcome/welcome.module').then(m => m.WelcomeModule)
      },
      {
        path: 'Activity',
        loadChildren: () => import('./app/modules/activity/activity.module').then(m => m.ActivityModule)
      },
      {
        path: 'Dashboard',
        loadChildren: () => import('./app/modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      }
  ],
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
