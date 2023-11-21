import { NgModule } from '@angular/core';
import { BrowserModule} from "@angular/platform-browser";
import { CommonModule } from '@angular/common';
import { AppComponent } from "./app.component";
import { BorderCardDirective} from "./border-card.directive";


@NgModule({
  declarations: [
      AppComponent,
      BorderCardDirective
  ],
  imports: [
      BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
