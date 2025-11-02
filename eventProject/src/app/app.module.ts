import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './layout/home/home.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { DatePersPipe } from './shared-module/pipes/date-pers.pipe';
import { NgHoverDirective } from './shared-module/directives/ng-hover.directive';
import { EuroPipe } from './shared-module/pipes/euro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
