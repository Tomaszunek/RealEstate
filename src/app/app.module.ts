import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { HomeComponent } from './pagesComponents/home/home.component';
import { PropertiesComponent } from './pagesComponents/properties/properties.component';
import { PagesComponent } from './pagesComponents/pages/pages.component';
import { AgentsComponent } from './pagesComponents/agents/agents.component';
import { ContactComponent } from './pagesComponents/contact/contact.component';

import { TimerClockComponent } from './components/timer-clock/timer-clock.component';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';

import { NavigationComponent } from './navigation/navigation.component';
import { SideNavigationComponent } from './navigation/side-navigation/side-navigation.component';
import { ToolbarComponent } from './navigation/toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';

import { ThemeService } from './services/theme.service';
import { StyleManagerService } from './services/style-manager.service';

import { AppMaterialModule } from './app-material.module';
import { HttpClientModule } from '@angular/common/http';

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
    SideNavigationComponent,
    ToolbarComponent,
    NavigationComponent,
    FooterComponent,
    TimerClockComponent,
    ThemeSwitcherComponent,
  ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [ThemeService, StyleManagerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
