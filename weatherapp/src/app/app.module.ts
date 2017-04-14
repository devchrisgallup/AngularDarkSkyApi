import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TvService} from './services/tv.service'; 

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { MinuteComponent } from './minute/minute.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    MinuteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    TvService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
