import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { WhatWeDoComponent } from './pages/what-we-do/what-we-do.component';
import { MediaComponent } from './pages/media/media.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { MainComponent } from './pages/main/main.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'what-we-do', component: WhatWeDoComponent },
      { path: 'media', component: MediaComponent },
      { path: 'contact-us', component: ContactUsComponent },
    ],
  },

  { path: 'login', component: LoginComponent },

  { path: 'sign-up', component: SignUpComponent },

  { path: '**', redirectTo: '' },
];
