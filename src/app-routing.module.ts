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
        redirectTo: '/login-PapApp',
        pathMatch: 'full',
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
      },
      {
        path: 'Contacto',
        loadChildren: () => import('./app/modules/contacto/contacto.module').then(m => m.ContactoModule)
      },
      {
        path: "auth",
        children: [
          {
            path: 'login-PapApp',
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
        ],
      },
  ],
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
