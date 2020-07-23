import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ AppRoutingModule } from './app-routing.modulo';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { PagesnotfountComponent } from './pagesnotfount/pagesnotfount.component';



@NgModule({
  declarations: [
    AppComponent,    
    PagesnotfountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
