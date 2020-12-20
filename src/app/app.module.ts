import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PubgPageComponent } from './pubg-page/pubg-page.component';
import { StartGamePageComponent } from './start-game-page/start-game-page.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { ToolsPageComponent } from './tools-page/tools-page.component';
import { DonatePageComponent } from './donate-page/donate-page.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootNavComponent } from './root-nav/root-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

const routes = [
  {
    path: '', component: HomePageComponent
  },
  {
    path: 'pubg', component: PubgPageComponent
  },
  {
    path: 'start', component: StartGamePageComponent
  },
  {
    path: 'info', component: InfoPageComponent
  },
  {
    path: 'tools', component: ToolsPageComponent
  },
  {
    path: 'donate', component: DonatePageComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PubgPageComponent,
    StartGamePageComponent,
    InfoPageComponent,
    ToolsPageComponent,
    DonatePageComponent,
    RootNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
