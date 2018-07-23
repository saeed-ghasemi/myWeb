import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RegistrationComponent} from './Registration/Registration.component';
import {ListComponent} from './list/list.component';
import {JokeComponent} from './joke/joke.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    ListComponent,
    JokeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  exports:[
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
