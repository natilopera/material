import { Component, ɵisBoundToModule, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { datos } from './formulario';
import { MatDialog } from "@angular/material/dialog";
import { FormularioService } from './services/formulario.service';
import { Inventario } from './inventario.model';

export interface PeriodicElement {
  name: string;
  position: number;

}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: '1. Computador' },
  { position: 2, name: '2. Celular' },
  { position: 3, name: '3. Impresora' },
  { position: 4, name: '4. Televisor' },
  { position: 5, name: '5. Escáner' },
  { position: 6, name: '6. Monitor' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  tabla: Inventario[] = [];
  tabla1: any = [];

  // displayedColumns: string[] = ['Observacion', 'DiasVacaciones'];
  displayedColumns: string[] = ['tipo', 'marca', 'modelo', 'serie'];
  dataSource = this.tabla;

  constructor(
    private dialog: MatDialog,
    private formularioService: FormularioService,
  ) { }

  ngOnInit(): void {


    this.formularioService.obtenerinventario()
      .subscribe((respuesta: any) => {
        console.log('inventario', respuesta);
        this.tabla = respuesta.inventario;
      })
  }

  abrir() {

    let asignacion = this.dialog.open(ModalFormulario, {
      width: "500px"

    })

  }
  
}

@Component({
  selector: 'modal-formulario',
  templateUrl: 'modalFormulario.html',
  styleUrls: ['./app.component.css']
})
export class ModalFormulario {
  numbers: number[] = [];
  formularioapp = {
    select: ''

  };

  asignado = false
  modelo = false
  serie = false
  sistemaoperativo = false
  cargador = false
  teclado = false
  mouse = false
  monitor = false
  email = false
  numerotelefonico = false
  auriculares = false
  marca = false
  control = false
  accesorios = false
  boton = false
  descripcion = false
  referencia = false
  marcadeaccesorios = false
  numerodeserie = false
  marcateclado = false
  referenciateclado = false
  numeroserieteclado = false
  marcamouse = false
  referenciamouse = false
  numeroseriemouse = false
  marcamonitor = false
  referenciamonitor = false
  numeroseriemonitor = false
  titulo = "";

  title = 'prueba';


  formulario: FormGroup;

  e: Inventario = new Inventario();
  form = new datos();

  constructor(
    private formularioService: FormularioService,
    private dialog: MatDialog,
  ) {

    for (let index = 0; index < 10000; index++) {
      this.numbers.push(index);

    }

    this.formulario = new FormGroup({
      asignado: new FormControl(this.form.asignado),
      modelo: new FormControl(this.form.modelo),
      serie: new FormControl(this.form.serie),
      sistemaoperativo: new FormControl(this.form.sistemaoperativo),
      cargador: new FormControl(this.form.cargador),
      teclado: new FormControl(this.form.teclado),
      mouse: new FormControl(this.form.mouse),
      monitor: new FormControl(this.form.monitor),
      email: new FormControl(this.form.email),
      numerotelefonico: new FormControl(this.form.numerotelefonico),
      auriculares: new FormControl(this.form.auriculares),
      marca: new FormControl(this.form.marca),
      control: new FormControl(this.form.control),
      accesorios: new FormControl(this.form.accesorios),
      descripcion: new FormControl(this.form.descripcion),
      referencia: new FormControl(this.form.referencia),
      marcadeaccesorios: new FormControl(this.form.marcadeaccesorios),
      numerodeserie: new FormControl(this.form.numerodeserie),
      marcateclado: new FormControl(this.form.marcateclado),
      referenciateclado: new FormControl(this.form.referenciateclado),
      numeroserieteclado: new FormControl(this.form.numeroserieteclado),
      marcamouse: new FormControl(this.form.marcamouse),
      referenciamouse: new FormControl(this.form.referenciamouse),
      numeroseriemouse: new FormControl(this.form.numeroseriemouse),
      marcamonitor: new FormControl(this.form.marcamonitor),
      referenciamonitor: new FormControl(this.form.referenciamonitor),
      numeroseriemonitor: new FormControl(this.form.numeroseriemonitor),
    })

  }

  
  abrir() {
    let asignacion = this.dialog.open(ModalFormulario, {
      width: "500px"
    })
  }

  ocultartodos() {
    this.asignado = false
    this.modelo = false
    this.serie = false
    this.numerotelefonico = false
    this.auriculares = false
  }

  llenar1() {

    

    if (this.formulario.value.asignado !== null)
      this.e.asignado = this.formulario.value.asignado;
    if (this.formulario.value.modelo !== null)
    this.e.modelo = this.formulario.value.modelo;
    if (this.formulario.value.marca !== null)
    this.e.marca = this.formulario.value.marca;
    if (this.formulario.value.descripcion !== null)
    this.e.descripcion = this.formulario.value.descripcion;
    if (this.formulario.value.serie !== null)
    this.e.serie = this.formulario.value.serie;
    if (this.formulario.value.sistemaoperativo !== null)
    this.e.sistemaoperativo = this.formulario.value.sistemaoperativo;
    if (this.formulario.value.cargador !== null)
    this.e.cargador = this.formulario.value.cargador;
    if (this.formulario.value.teclado !== null)
    this.e.teclado = this.formulario.value.teclado;
    if (this.formulario.value.mouse !== null)
    this.e.mouse = this.formulario.value.mouse;
    if (this.formulario.value.monitor !== null)
    this.e.monitor = this.formulario.value.monitor;
    if (this.formulario.value.email !== null)
    this.e.email = this.formulario.value.email;
    if (this.formulario.value.numerotelefonico !== null)
    this.e.numerotelefonico = this.formulario.value.numerotelefonico;
    if (this.formulario.value.auriculares !== null)
    this.e.auriculares = this.formulario.value.auriculares;
    if (this.formulario.value.control !== null)
    this.e.control = this.formulario.value.control;
    if (this.formulario.value.referencia !== null)
    this.e.referencia = this.formulario.value.referencia;
    if (this.formulario.value.marcateclado !== null)
    this.e.marcateclado = this.formulario.value.marcateclado;
    if (this.formulario.value.referenciateclado !== null)
    this.e.referenciateclado = this.formulario.value.referenciateclado;
    if (this.formulario.value.numeroserieteclado !== null)
    this.e.numeroserieteclado = this.formulario.value.numeroserieteclado;
    if (this.formulario.value.marcamouse !== null)
    this.e.marcamouse = this.formulario.value.marcamouse;
    if (this.formulario.value.referenciamouse !== null)
    this.e.referenciamouse = this.formulario.value.referenciamouse;
    if (this.formulario.value.numeroseriemouse !== null)
    this.e.numeroseriemouse = this.formulario.value.numeroseriemouse;
    if (this.formulario.value.marcamonitor !== null)
    this.e.marcamonitor = this.formulario.value.marcamonitor;
    if (this.formulario.value.referenciamonitor !== null)
    this.e.referenciamonitor = this.formulario.value.referenciamonitor;
    if (this.formulario.value.numeroseriemonitor !== null)
    this.e.numeroseriemonitor = this.formulario.value.numeroseriemonitor;
    console.log(this.e);


  }

  llenar() {
    this.form.asignado = this.formulario.value.asignado;
    this.form.modelo = this.formulario.value.modelo;
    this.form.serie = this.formulario.value.serie;
    this.form.sistemaoperativo = this.formulario.value.sistemaoperativo;
    this.form.cargador = this.formulario.value.cargador;
    this.form.teclado = this.formulario.value.teclado;
    this.form.mouse = this.formulario.value.mouse;
    this.form.monitor = this.formulario.value.monitor;
    this.form.email = this.formulario.value.email;
    this.form.numerotelefonico = this.formulario.value.numerotelefonico;
    this.form.auriculares = this.formulario.value.auriculares;
    this.form.marca = this.formulario.value.marca;
    this.form.control = this.formulario.value.control;
    this.form.accesorios = this.formulario.value.accesorios;
    this.form.descripcion = this.formulario.value.descripcion;
    this.form.referencia = this.formulario.value.referencia;
    this.form.marcadeaccesorios = this.formulario.value.marcadeaccesorios;
    this.form.numerodeserie = this.formulario.value.numerodeserie;
    this.form.marcateclado = this.formulario.value.marcateclado;
    this.form.referenciateclado = this.formulario.value.referenciateclado;
    this.form.numeroserieteclado = this.formulario.value.numeroserieteclado;
    this.form.marcamouse = this.formulario.value.marcamouse;
    this.form.referenciamouse = this.formulario.value.referenciamouse;
    this.form.numeroseriemouse = this.formulario.value.numeroseriemouse;
    this.form.marcamonitor = this.formulario.value.marcamonitor;
    this.form.referenciamonitor = this.formulario.value.referenciamonitor;
    this.form.numeroseriemonitor = this.formulario.value.numeroseriemonitor;
  }

  guardar() {
    this.llenar1();
    // console.log(this.form);

    this.formularioService.crearinventario(this.e);
    console.log(this.e);
    
  }

  selection(e: any) {

    const seleccionado = e.value;
    console.log(seleccionado);
    this.titulo = seleccionado;

    this.ocultartodos();

    switch (seleccionado) {

      case 'Computador':
        this.asignado = true;
        this.modelo = true;
        this.serie = true;
        this.sistemaoperativo = true;
        this.accesorios = true;
        this.cargador = true;
        this.teclado = true;
        this.mouse = true;
        this.monitor = true;
        this.boton = true;
        this.email = false;
        this.auriculares = false;
        this.descripcion = true;
        this.marca = true;
        this.referencia = true;
        this.marcadeaccesorios = true;
        this.numerodeserie = true;
        this.marcateclado = true;
        this.referenciateclado = true;
        this.numeroserieteclado = true;
        this.marcamouse = true;
        this.referenciamouse = true;
        this.numeroseriemouse = true;
        this.marcamonitor = true;
        this.referenciamonitor = true;
        this.numeroseriemonitor = true;
        this.control = false;
        break;

      case 'Celular':
        this.asignado = true;
        this.modelo = true;
        this.email = true;
        this.numerotelefonico = true;
        this.accesorios = true;
        this.auriculares = true;
        this.cargador = true;
        this.sistemaoperativo = false;
        this.boton = true;
        this.teclado = false;
        this.mouse = false;
        this.monitor = false;
        this.descripcion = true;
        this.marca = true;
        this.marcadeaccesorios = false;
        this.numerodeserie = false;
        this.referencia = false;
        this.marcateclado = false;
        this.referenciateclado = false;
        this.numeroserieteclado = false;
        this.marcamouse = false;
        this.referenciamouse = false;
        this.numeroseriemouse = false;
        this.marcamonitor = false;
        this.referenciamonitor = false;
        this.numeroseriemonitor = false;
        break;

      case 'Impresora':
        this.modelo = true;
        this.marca = true;
        this.serie = true;
        this.descripcion = true;
        this.boton = true;
        this.email = false;
        this.accesorios = false;
        this.cargador = false;
        this.sistemaoperativo = false;
        this.teclado = false;
        this.monitor = false;
        this.mouse = false;
        this.numerodeserie = false;
        this.marcateclado = false;
        this.referenciateclado = false;
        this.numeroserieteclado = false;
        this.marcamouse = false;
        this.referenciamouse = false;
        this.numeroseriemouse = false;
        this.marcamonitor = false;
        this.referenciamonitor = false;
        this.numeroseriemonitor = false;
        break;

      case 'Televisor':
        this.serie = true;
        this.marca = true;
        this.modelo = true;
        this.descripcion = true;
        this.boton = true;
        this.accesorios = true;
        this.control = true;
        this.marcateclado = false;
        this.referenciateclado = false;
        this.numeroserieteclado = false;
        this.marcamouse = false;
        this.referenciamouse = false;
        this.numeroseriemouse = false;
        this.marcamonitor = false;
        this.referenciamonitor = false;
        this.numeroseriemonitor = false;
        break;

      case 'Escáner':
        this.marca = true;
        this.modelo = true;
        this.serie = true;
        this.descripcion = true;
        this.boton = true;
        this.accesorios = false;
        this.control = false;
        this.marcateclado = false;
        this.referenciateclado = false;
        this.numeroserieteclado = false;
        this.marcamouse = false;
        this.referenciamouse = false;
        this.numeroseriemouse = false;
        this.marcamonitor = false;
        this.referenciamonitor = false;
        this.numeroseriemonitor = false;
        break;

      case 'Monitor':
        this.marca = true;
        this.modelo = true;
        this.serie = true;
        this.descripcion = true;
        this.boton = true;
        this.accesorios = false;
        this.control = false;
        this.asignado = true;
        this.sistemaoperativo = false;
        this.cargador = false;
        this.teclado = false;
        this.mouse = false;
        this.monitor = false;
        this.email = false;
        this.numerotelefonico = false;
        this.auriculares = false;
        this.referencia = false;
        this.marcadeaccesorios = false;
        this.numerodeserie = false;
        this.marcateclado = false;
        this.referenciateclado = false;
        this.numeroserieteclado = false;
        this.marcamouse = false;
        this.referenciamouse = false;
        this.numeroseriemouse = false;
        this.marcamonitor = false;
        this.referenciamonitor = false;
        this.numeroseriemonitor = false;
        break;
    }
  }
}