import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';

import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, RouterModule, withComponentInputBinding } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MonacoEditorModule.forRoot(),
    DropdownModule,
    ButtonModule,
    ToastModule,
    RouterModule
  ],
  providers: [
    provideClientHydration(),
    MessageService,
    provideHttpClient(),
    provideRouter(routes, withComponentInputBinding())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
