import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegistrationComponent} from '../Registration/Registration.component'
import {ListComponent} from "../list/list.component";
import {JokeComponent} from "../joke/joke.component";

const routes: Routes = [
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'joke',
    component: JokeComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
