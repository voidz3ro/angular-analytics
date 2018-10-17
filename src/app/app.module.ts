import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { RouteoneComponent } from './routeone/routeone.component';
import { RoutetwoComponent } from './routetwo/routetwo.component';

@NgModule({
  declarations: [
    AppComponent,
    RouteoneComponent,
    RoutetwoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'routeone', component: RouteoneComponent},
      {path: 'routetwo', component: RoutetwoComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
