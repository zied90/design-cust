import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './component/login/login.component';
import {HomeComponent} from './component/home/home.component';
import {ContactUsComponent} from './component/contact-us/contact-us.component';
import {AboutComponent} from './component/about/about.component';
import {ChatComponent} from './component/chat/chat.component';


const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'contact-us', component: ContactUsComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'chats', component: ChatComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
