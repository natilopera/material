import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, ModalDetalles, ModalFormulario } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatDialogModule } from '@angular/material/dialog';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormularioService } from './services/formulario.service';
import { InventarioformularioComponent } from './inventarioformulario/inventarioformulario.component';
import { MatCell, MatTableModule } from '@angular/material/table'
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';


@NgModule({

  declarations: [
    AppComponent,
    ModalFormulario,
    InventarioformularioComponent,
    ModalDetalles
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatPseudoCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule,
    ScrollingModule,
    MatTableModule,
    MatTooltipModule,
    HttpClientModule,
    MatIconModule
  ],

  providers: [
    FormularioService
  ],

  bootstrap: [AppComponent]

})

export class AppModule { }
