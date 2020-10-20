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
    DonatePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
