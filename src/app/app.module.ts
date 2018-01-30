import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SetupComponent } from './setup/setup.component';
import { RoutesComponent } from './routes/routes.component';
import {HttpClientModule} from '@angular/common/http';
import {DigitransitService} from './services/digitransit.service';
import {FormsModule} from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { RouteDirectionPipe } from './pipes/route-direction.pipe';



@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SetupComponent,
    RoutesComponent,
    RouteDirectionPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      HttpClientModule,
      FormsModule,
      AgmCoreModule.forRoot({
          apiKey: 'AIzaSyCy4H4LMxlt57LQHCLh71lpBvf3GYp1Ebo'})
  ],
  providers: [DigitransitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
