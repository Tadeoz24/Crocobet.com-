import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  /* როუტები რომლის მიხედვითაც იმოძრავებს მომხმარებელი გვერდიდან გვერდზე*/
  /* Routes according to which the user will move from page to page */
  { path: 'Users', component: UsersComponent },

  /* როუტს დინამიურად გადაეცემა პარამეტრი id */
  /* The route id is dynamically passed to the root */
  { path: 'UserInfo/:id', component: UserInfoComponent },

  /* როუტს დინამიურად გადაეცემა პარამეტრი id */
  /* The route id is dynamically passed to the root */
  { path: 'UserPosts/:id', component: UserPostsComponent },

  /* როუტი არის ცარიელი urlისთვის როდესაც არანაირი პარამეტრი არ გადაეცემა როუტს
  */
  /* The route is an empty url when no parameter is passed to the root
  */
  { path: '', redirectTo: 'Users', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
