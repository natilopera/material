import { Component, ɵisBoundToModule, OnInit, ChangeDetectionStrategy, ViewChild, Inject, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { datos } from './formulario';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormularioService } from './services/formulario.service';
import { Inventario } from './inventario.model';
import Swal from 'sweetalert2'
import { MatTable } from '@angular/material/table';


export interface PeriodicElement {

  name: string;
  position: number;

}

const ELEMENT_DATA: PeriodicElement[] = [
  
  { position: 1, name: '1. Laptop'},
  { position: 2, name: '2. Torre'},
  { position: 3, name: '3. Monitor' },
  { position: 4, name: '4. Teclado'},
  { position: 5, name: '5. Mouse'},
  { position: 6, name: '6. Speakers'},
  { position: 7, name: '7. Cámara'},
  { position: 8, name: '8. Celular' },
  { position: 9, name: '9. Impresora' },
  { position: 10, name: '10. Televisor' },
  { position: 11, name: '11. Escáner' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  tabla: Inventario[] = [];
  tabla1: any = [];

  displayedColumns: string[] = ['tipo', 'marca', 'modelo', 'serie', 'ver'];
  dataSource = this.tabla;


  @ViewChild(MatTable) table: any

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

    asignacion.afterClosed().subscribe((respuestaModal) => {

      console.log('si llegue', respuestaModal);
      this.tabla.push(respuestaModal);
      this.table.renderRows();

    })
  }

  detalles(e: any) {
    let detalles = this.dialog.open(ModalDetalles, {
      width: "800px",
      data:{id:e} 
    })

 console.log('id', e);
    
  }
}

export interface DialogData{
  id: string;
}

@Component({
  selector: 'modal-detalles',
  templateUrl: 'modalDetalles.html',
  styleUrls: ['./app.component.css']
})


export class ModalDetalles {

  

  numbers: number[] = []
  tabla: any;

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
  ram = false
  discoduro= false
  nombredeldispositivo = false
  ranurasdisponibles = false 
  procesador = false 
  tarjetagrafica = false
 

  titulo = "";
  nombres = [];

  title = 'prueba';
  tipo = '';

  formulario: FormGroup;

  constructor(

    @Inject(MAT_DIALOG_DATA) public data,
    private _formularioServicee: FormularioService,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<ModalDetalles>

  ) {

    this.formulario= new FormGroup({})

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

  let registro = new Inventario();
    registro.asignado = this.formulario.value.asignado;
    registro.tipo = this.tipo;
    registro.modelo = this.formulario.value.modelo;
    registro.marca = this.formulario.value.marca;
    registro.serie = this.formulario.value.serie;
    registro.sistemaoperativo = this.formulario.value.sistemaoperativo;
    registro.cargador = this.formulario.value.cargador;
    registro.teclado = this.formulario.value.teclado;
    registro.mouse = this.formulario.value.mouse;
    registro.monitor = this.formulario.value.monitor;
    registro.email = this.formulario.value.email;
    registro.numerotelefonico = this.formulario.value.numerotelefonico;
    registro.auriculares = this.formulario.value.auriculares;
    registro.control = this.formulario.value.control;
    registro.descripcion = this.formulario.value.descripcion;
    registro.referencia  = this.formulario.value.referencia;
    registro.marcateclado   = this.formulario.value.marcateclado;
    registro.referenciateclado  = this.formulario.value.referenciateclado;
    registro.numeroserieteclado  = this.formulario.value.numeroserieteclado;
    registro.marcamouse  = this.formulario.value.marcamouse;
    registro.referenciamouse  = this.formulario.value.referenciamouse;
    registro.numeroseriemouse  = this.formulario.value.numeroseriemouse;
    registro.marcamonitor  = this.formulario.value.marcamonitor;
    registro.referenciamonitor  = this.formulario.value.referenciamonitor;
    registro.numeroseriemonitor  = this.formulario.value.numeroseriemonitor;
    registro.ram = this.formulario.value.ram;
    registro.discoduro = this.formulario.value.discoduro;
    registro.nombredeldispositivo = this.formulario.value.nombredeldispositivo;
    registro.ranurasdisponibles = this.formulario.value.ranurasdisponibles;
    registro.procesador = this.formulario.value.procesador;
    registro.tarjetagrafica = this.formulario.value.tarjetagrafica;

    return registro;

  }

  guardar() {

    const registro = this.llenar1();
    
  this._formularioServicee.actualizarinventario(registro, this.data.id)
      .subscribe((inventario: any) => {
        Swal.fire({
          title: '¡Enhorabuena!',
          text: 'El registro fue enviado exitosamente',
          icon: 'success',
          confirmButtonText: 'Ok'
        })

        console.log(inventario);
        this.dialogRef.close(inventario.inventario);
      }, (error) => {
        console.error("ha ocurrido un error", error.error);
        Swal.fire({
          title: '¡Error!',
          text: error.error.mensaje,
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      })
    }

    selection(e: any) {

      const seleccionado = e;
      console.log(seleccionado);
      this.titulo = seleccionado;
      this.formulario.disable();
      this.tipo = seleccionado;
      this.ocultartodos();

      switch (seleccionado) {

        case 'Laptop':
          this.asignado = true;
          this.modelo = true;
          this.serie = true;
          this.sistemaoperativo = true;
          this.accesorios = true;
          this.cargador = true;
          this.teclado = false;
          this.mouse = false;
          this.monitor = false;
          this.boton = true;
          this.email = false;
          this.auriculares = false;
          this.descripcion = true;
          this.marca = true;
          this.referencia = true;
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
          this.control = false;
          this.ram = false;
          this.discoduro = false;
          this.nombredeldispositivo = false;
          this.ranurasdisponibles = false;
          this.procesador = false;
          this.ram = true;
          this.discoduro = true;
          this.nombredeldispositivo = true;
          this.ranurasdisponibles = true;
          this.procesador = true;
          this.tarjetagrafica = true;
          break;

          case 'Torre':
            this.asignado = true;
            this.modelo = true;
            this.serie = true;
            this.sistemaoperativo = true;
            this.cargador = false;
            this.teclado = false;
            this.mouse = false;
            this.monitor = false;
            this.email = false;
            this.numerotelefonico = false;
            this.auriculares = false;
            this.marca = true;
            this.control = false;
            this.accesorios = false;
            this.boton = false;
            this.descripcion = true;
            this.referencia = true;
            this.marcadeaccesorios = false;
            this.numerodeserie = false;
            this.marcateclado = false;
            this.referenciateclado = false;
            this.numeroserieteclado = false;
            this.marcamouse = false;
            this.referenciamouse = false;
            this.numeroseriemouse = false;
            this.marcamonitor = false;
            this. referenciamonitor = false;
            this.numeroseriemonitor = false;
            this.ram = true;
            this.discoduro = true;
            this.nombredeldispositivo = true;
            this.ranurasdisponibles = true;
            this.procesador = true;
            this.tarjetagrafica = true;
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
            this.ram = false;
            this.discoduro = false;
            this.nombredeldispositivo = false;
            this.ranurasdisponibles = false;
            this.procesador = false;
            this.tarjetagrafica = false;
            break;
  
            case 'Teclado':
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
            this.ram = false;
            this.discoduro = false;
            this.nombredeldispositivo = false;
            this.ranurasdisponibles = false;
            this.procesador = false;
            this.tarjetagrafica = false;
            break;

            case 'Mouse':
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
            this.ram = false;
            this.discoduro = false;
            this.nombredeldispositivo = false;
            this.ranurasdisponibles = false;
            this.procesador = false;
            this.tarjetagrafica = false;
            break;

            case 'Speakers':
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
            this.ram = false;
            this.discoduro = false;
            this.nombredeldispositivo = false;
            this.ranurasdisponibles = false;
            this.procesador = false;
            this.tarjetagrafica = false;
            break;

            case 'Cámara':
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
            this.ram = false;
            this.discoduro = false;
            this.nombredeldispositivo = false;
            this.ranurasdisponibles = false;
            this.procesador = false;
            this.tarjetagrafica = false;
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
          this.ram = false;
          this.discoduro = false;
          this.nombredeldispositivo = false;
          this.ranurasdisponibles = false;
          this.procesador = false;
          this.tarjetagrafica = false;
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
          this.ram = false;
          this.discoduro = false;
          this.nombredeldispositivo = false;
          this.ranurasdisponibles = false;
          this.procesador = false;
          this.tarjetagrafica = false;
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
          this.ram = false;
          this.discoduro = false;
          this.nombredeldispositivo = false;
          this.ranurasdisponibles = false;
          this.procesador = false;
          this.tarjetagrafica = false;
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
          this.ram = false;
          this.discoduro = false;
          this.nombredeldispositivo = false;
          this.ranurasdisponibles = false;
          this.procesador = false;
          this.tarjetagrafica = false;
          break;
  
        
      }
    }  


  regresar() { 

    this.dialogRef.close();
   
  }

  editar() { 

    this.formulario.enable();

  }

  bloqueo() {

    this.formulario.disable();
    console.log('soy sebas y soy feo');
    
  }

  modificar() { } 
  
  ngOnInit() {

    this.formulario.disable();
    this._formularioServicee.obtenerdetalles(this.data.id)
      .subscribe((respuesta: any) => {
        console.log('inventario', respuesta);
        this.tabla = respuesta.inventario;
        console.log(this.tabla);
        this.nombres = this.tabla.Asignado;
        console.log('sebas', this.nombres);
        console.log('nombre');
        
        
        if (respuesta.inventario === null) {
          
        } else {

          this.selection(respuesta.inventario.Tipo)

        }
       
        this.formulario = new FormGroup({
          tipo: new FormControl (respuesta.inventario.Tipo , Validators.required),
          asignado: new FormControl(respuesta.inventario.Asignado , Validators.required),
          modelo: new FormControl(respuesta.inventario.Modelo , Validators.required),
          serie: new FormControl(respuesta.inventario.Serie , Validators.required),
          sistemaoperativo: new FormControl(respuesta.inventario.SistemaOperativo , Validators.required),
          cargador: new FormControl(respuesta.inventario.Cargador , Validators.required),
          teclado: new FormControl(respuesta.inventario.Teclado , Validators.required),
          mouse: new FormControl(respuesta.inventario.Mouse , Validators.required),
          monitor: new FormControl(respuesta.inventario.Monitor , Validators.required),
          email: new FormControl(respuesta.inventario.Email , Validators.required),
          numerotelefonico: new FormControl(respuesta.inventario.NumeroTelefonico , Validators.required),
          auriculares: new FormControl(respuesta.inventario.Auriculares , Validators.required),
          marca: new FormControl(respuesta.inventario.Marca , Validators.required),
          control: new FormControl(respuesta.inventario.Control , Validators.required),
          accesorios: new FormControl(respuesta.inventario.Accesorios , Validators.required),
          descripcion: new FormControl(respuesta.inventario.Descripcion , Validators.required),
          referencia: new FormControl(respuesta.inventario.Referencia , Validators.required),
          marcadeaccesorios: new FormControl(respuesta.inventario.MarcaDeAccesorios , Validators.required),
          numerodeserie: new FormControl(respuesta.inventario.NumeroDeSerie , Validators.required),
          marcateclado: new FormControl(respuesta.inventario.MarcaTeclado , Validators.required),
          referenciateclado: new FormControl(respuesta.inventario.ReferenciaTeclado , Validators.required),
          numeroserieteclado: new FormControl(respuesta.inventario.NumeroserieTeclado , Validators.required),
          marcamouse: new FormControl(respuesta.inventario.MarcaMouse , Validators.required),
          referenciamouse: new FormControl(respuesta.inventario.ReferenciaMouse , Validators.required),
          numeroseriemouse: new FormControl(respuesta.inventario.NumeroserieMouse , Validators.required),
          marcamonitor: new FormControl(respuesta.inventario.MarcaMonitor , Validators.required),
          referenciamonitor: new FormControl(respuesta.inventario.ReferenciaMonitor , Validators.required),
          numeroseriemonitor: new FormControl(respuesta.inventario.NumeroserieMonitor , Validators.required),
          ram: new FormControl(respuesta.inventario.Ram , Validators.required),
          discoduro: new FormControl(respuesta.inventario.DiscoDuro , Validators.required),
          nombredeldispositivo: new FormControl(respuesta.inventario.NombreDelDispositivo , Validators.required),
          ranurasdisponibles: new FormControl(respuesta.inventario.RanurasDisponibles , Validators.required),
          procesador: new FormControl(respuesta.inventario.Procesador , Validators.required),
          tarjetagrafica: new FormControl(respuesta.inventario.TarjetaGrafica , Validators.required)
        })

        
        this.formulario.disable();
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
  ram = false
  discoduro= false
  nombredeldispositivo = false
  ranurasdisponibles = false 
  procesador = false 
  tarjetagrafica = false
  disponibles = "";
  titulo = "";

  title = 'prueba';
  tipo = '';

  formulario: FormGroup;



  constructor(
    private dialogRef: MatDialogRef<ModalFormulario>,
    private _formularioService: FormularioService,
    private dialog: MatDialog,
  ) {

    for (let index = 0; index < 10000; index++) {
      this.numbers.push(index);
  }

    this.formulario = new FormGroup({
      tipo: new FormControl(''),
      asignado: new FormControl(''),
      modelo: new FormControl(''),
      serie: new FormControl(''),
      sistemaoperativo: new FormControl(''),
      cargador: new FormControl(''),
      teclado: new FormControl(''),
      mouse: new FormControl(''),
      monitor: new FormControl(''),
      email: new FormControl(''),
      numerotelefonico: new FormControl(''),
      auriculares: new FormControl(''),
      marca: new FormControl(''),
      control: new FormControl(''),
      accesorios: new FormControl(''),
      descripcion: new FormControl(''),
      referencia: new FormControl(''),
      marcadeaccesorios: new FormControl(''),
      numerodeserie: new FormControl(''),
      marcateclado: new FormControl(''),
      referenciateclado: new FormControl(''),
      numeroserieteclado: new FormControl(''),
      marcamouse: new FormControl(''),
      referenciamouse: new FormControl(''),
      numeroseriemouse: new FormControl(''),
      marcamonitor: new FormControl(''),
      referenciamonitor: new FormControl(''),
      numeroseriemonitor: new FormControl(''),
      ram: new FormControl(''),
      discoduro: new FormControl(''),
      nombredeldispositivo: new FormControl(''),
      ranurasdisponibles: new FormControl(''),
      procesador: new FormControl(''),
      tarjetagrafica: new FormControl('')
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

  let registro = new Inventario();
    registro.asignado = this.formulario.value.asignado;
    registro.tipo = this.tipo;
    registro.modelo = this.formulario.value.modelo;
    registro.marca = this.formulario.value.marca;
    registro.serie = this.formulario.value.serie;
    registro.sistemaoperativo = this.formulario.value.sistemaoperativo;
    registro.cargador = this.formulario.value.cargador;
    registro.teclado = this.formulario.value.teclado;
    registro.mouse = this.formulario.value.mouse;
    registro.monitor = this.formulario.value.monitor;
    registro.email = this.formulario.value.email;
    registro.numerotelefonico = this.formulario.value.numerotelefonico;
    registro.auriculares = this.formulario.value.auriculares;
    registro.control = this.formulario.value.control;
    registro.descripcion = this.formulario.value.descripcion;
    registro.referencia  = this.formulario.value.referencia;
    registro.marcateclado   = this.formulario.value.marcateclado;
    registro.referenciateclado  = this.formulario.value.referenciateclado;
    registro.numeroserieteclado  = this.formulario.value.numeroserieteclado;
    registro.marcamouse  = this.formulario.value.marcamouse;
    registro.referenciamouse  = this.formulario.value.referenciamouse;
    registro.numeroseriemouse  = this.formulario.value.numeroseriemouse;
    registro.marcamonitor  = this.formulario.value.marcamonitor;
    registro.referenciamonitor  = this.formulario.value.referenciamonitor;
    registro.numeroseriemonitor  = this.formulario.value.numeroseriemonitor;
    registro.ram = this.formulario.value.ram;
    registro.discoduro = this.formulario.value.discoduro;
    registro.nombredeldispositivo = this.formulario.value.nombredeldispositivo;
    registro.ranurasdisponibles = this.disponibles;
    registro.procesador = this.formulario.value.procesador;
    registro.tarjetagrafica = this.formulario.value.tarjetagrafica;
    
    return registro;

  }

  ranuras(e) {

    this.disponibles = e.value;

  }

  guardar() {

    const registro = this.llenar1();

    console.log('formulari', registro);
    
  this._formularioService.crearinventario(registro)
      .subscribe((inventario: any) => {
        Swal.fire({
          title: '¡Enhorabuena!',
          text: 'El registro fue enviado exitosamente',
          icon: 'success',
          confirmButtonText: 'Ok'
        })

        console.log(inventario);
        this.dialogRef.close(inventario.inventario);
      }, (error) => {
        console.error("ha ocurrido un error", error.error);
        Swal.fire({
          title: '¡Error!',
          text: error.error.mensaje,
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      })
    }

  selection(e: any) {

    const seleccionado = e.value;
    console.log(seleccionado);
    this.titulo = seleccionado;

    
    this.tipo = e.value;

    console.log(this.tipo);

    this.ocultartodos();

    switch (seleccionado) {

      case 'Laptop':
          this.asignado = true;
          this.modelo = true;
          this.serie = true;
          this.sistemaoperativo = true;
          this.accesorios = true;
          this.cargador = true;
          this.teclado = false;
          this.mouse = false;
          this.monitor = false;
          this.boton = true;
          this.email = false;
          this.auriculares = false;
          this.descripcion = true;
          this.marca = true;
          this.referencia = true;
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
          this.control = false;
          this.ram = false;
          this.discoduro = false;
          this.nombredeldispositivo = false;
          this.ranurasdisponibles = false;
          this.procesador = false;
          this.ram = true;
          this.discoduro = true;
          this.nombredeldispositivo = true;
          this.ranurasdisponibles = true;
          this.procesador = true;
          this.tarjetagrafica = true;
          break;

          case 'Torre':
            this.asignado = true;
            this.modelo = true;
            this.serie = true;
            this.sistemaoperativo = true;
            this.cargador = false;
            this.teclado = false;
            this.mouse = false;
            this.monitor = false;
            this.email = false;
            this.numerotelefonico = false;
            this.auriculares = false;
            this.marca = true;
            this.control = false;
            this.accesorios = false;
            this.boton = true;
            this.descripcion = true;
            this.referencia = true;
            this.marcadeaccesorios = false;
            this.numerodeserie = false;
            this.marcateclado = false;
            this.referenciateclado = false;
            this.numeroserieteclado = false;
            this.marcamouse = false;
            this.referenciamouse = false;
            this.numeroseriemouse = false;
            this.marcamonitor = false;
            this. referenciamonitor = false;
            this.numeroseriemonitor = false;
            this.ram = true;
            this.discoduro = true;
            this.nombredeldispositivo = true;
            this.ranurasdisponibles = true;
            this.procesador = true;
            this.tarjetagrafica = true;
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
            this.ram = false;
            this.discoduro = false;
            this.nombredeldispositivo = false;
            this.ranurasdisponibles = false;
            this.procesador = false;
            this.tarjetagrafica = false;
            break;
  
            case 'Teclado':
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
            this.ram = false;
            this.discoduro = false;
            this.nombredeldispositivo = false;
            this.ranurasdisponibles = false;
            this.procesador = false;
            this.tarjetagrafica = false;
            break;

            case 'Mouse':
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
            this.ram = false;
            this.discoduro = false;
            this.nombredeldispositivo = false;
            this.ranurasdisponibles = false;
            this.procesador = false;
            this.tarjetagrafica = false;
            break;

            case 'Speakers':
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
            this.ram = false;
            this.discoduro = false;
            this.nombredeldispositivo = false;
            this.ranurasdisponibles = false;
            this.procesador = false;
            this.tarjetagrafica = false;
            break;

            case 'Cámara':
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
            this.ram = false;
            this.discoduro = false;
            this.nombredeldispositivo = false;
            this.ranurasdisponibles = false;
            this.procesador = false;
            this.tarjetagrafica = false;
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
          this.ram = false;
          this.discoduro = false;
          this.nombredeldispositivo = false;
          this.ranurasdisponibles = false;
          this.procesador = false;
          this.tarjetagrafica = false;
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
          this.ram = false;
        this.discoduro = false;
        this.nombredeldispositivo = false;
        this.ranurasdisponibles = false;
        this.procesador = false;
        this.tarjetagrafica = false;
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
          this.ram = false;
        this.discoduro = false;
        this.nombredeldispositivo = false;
        this.ranurasdisponibles = false;
        this.procesador = false;
        this.tarjetagrafica = false;
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
          this.ram = false;
        this.discoduro = false;
        this.nombredeldispositivo = false;
        this.ranurasdisponibles = false;
        this.procesador = false;
        this.tarjetagrafica = false;
          break;
  
    }
  }
}