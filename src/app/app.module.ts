import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CreatePageComponent} from './contenet/create-page/create-page.component';
import {EditPageComponent} from './contenet/edit-page/edit-page.component';
import {PostPageComponent} from './contenet/post-page/post-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import {QuillModule} from 'ngx-quill';
import { AppRoutingModule } from './app-routing.module';
import {MainLayoutComponent} from './contenet/main-layout/main-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePageComponent,
    EditPageComponent,
    PostPageComponent,
    MainLayoutComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
