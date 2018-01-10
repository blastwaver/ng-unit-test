import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VoteComponent } from './03-setup-and-teardown/vote.component';
import { FormsModule } from '@angular/forms';
import { TodoFormComponent } from './04-forms/todo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    VoteComponent,
    TodoFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
