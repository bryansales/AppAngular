import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PessoasService } from './pessoas.service';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http"

import { ReactiveFormsModule } from '@angular/forms';

import {ModalModule} from 'ngx-bootstrap/modal';
import { PessoasComponent } from './Components/pessoas/pessoas.component';
import { UiButtonComponent } from './Components/Shared/ui-button/ui-button/ui-button.component';
import { PipesComponent } from './Components/pipes/pipes.component';
import { FiltroArrayPipe } from './Components/pipes/filtro-array.pipe'

@NgModule({
  declarations: [
    AppComponent,
    PessoasComponent,
    UiButtonComponent,
    PipesComponent,
    FiltroArrayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [HttpClientModule,PessoasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
