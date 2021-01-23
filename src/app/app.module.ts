import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pagesComponents/home/home.component';
import { PropertiesComponent } from './pagesComponents/properties/properties.component';
import { PagesComponent } from './pagesComponents/pages/pages.component';
import { AgentsComponent } from './pagesComponents/agents/agents.component';
import { ContactComponent } from './pagesComponents/contact/contact.component';
import { TimerClockComponent } from './components/timer-clock/timer-clock.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'properties', component: PropertiesComponent },
  { path: 'pages', component: PagesComponent },
  { path: 'agents', component: AgentsComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    TimerClockComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
