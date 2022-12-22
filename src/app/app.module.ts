import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //for imports -> THIS SENDS ALERT

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { PostsComponent } from './component/posts/posts.component';
import { HomeComponent } from './component/home/home.component';
import { PostComponent } from './component/post/post.component';
import { HttpClientModule } from '@angular/common/http'; //manual import
import { CreatepostComponent } from './component/createpost/createpost.component'; //manual import

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostsComponent,
    HomeComponent,
    PostComponent,
    CreatepostComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule], //DON'T FORGET FORMSMODULE
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
