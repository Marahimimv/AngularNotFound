import { NgModule } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { C1Component } from './component/c1/c1.component';
import { C2Component } from './component/c2/c2.component';
import { C3Component } from './component/c3/c3.component';
import {SharedModule} from "./shared.module";
import { NotFoundComponent } from './component/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    C2Component,
    C3Component,
    NotFoundComponent
  ],
  imports: [
    SharedModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
