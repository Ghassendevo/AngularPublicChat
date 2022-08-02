import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { LoginComponent } from './component/login/login.component';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ChatComponent } from './component/chat/chat.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config : SocketIoConfig = {url:'http://localhost:3000', options:{}}
const appRoutes : Routes = [
  {path:'',component:LoginComponent},
  {path:'chat/:username',component:ChatComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ChatComponent,
  ],
  imports:[
    BrowserModule,
    MdbCheckboxModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true}),
    FormsModule,
    SocketIoModule.forRoot(config),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
