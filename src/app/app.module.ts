import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActiveUserComponent } from './activeUserComponent/active-user/active-user.component';
import { InactiveUserComponent } from './inactiveUserComponent/inactive-user/inactive-user.component';
import { AddUserComponent } from './addUserComponent/add-user/add-user.component';
import { SetStatusComponent } from './setStatusComponent/set-status/set-status.component';
import { UserService } from './services/user.service'
import { CounterService } from './services/counter.service';
import { HeaderComponent } from './header/header/header.component';
import { RemoveUserComponent } from './removeUserComponent/remove-user/remove-user.component';
import { CounterComponent } from './counterComponent/counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    ActiveUserComponent,
    InactiveUserComponent,
    AddUserComponent,
    SetStatusComponent,
    HeaderComponent,
    RemoveUserComponent,
    CounterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserService, CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
