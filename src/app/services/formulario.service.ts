import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Inventario } from "../inventario.model";
import { environment } from '../../environments/environment';


@Injectable()
export class FormularioService {

    private baseUrl: string = environment.baseUrl

    constructor(public http: HttpClient) {
        
        console.log('Servicio Inicializado');
        
    }

    obtenerinventario() {

        let url = 'http://138.121.170.119:3001/inventario';
        return this.http.get (url);
    }

    crearinventario( inventario: Inventario ) {

        console.log("llegué", inventario); 
        let url = 'http://138.121.170.119:3001/inventario';
        url+='?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7InJvbGUiOiJVU0VSX1JPTEUiLCJfaWQiOiI2MjY5YmJhYmYxYTBlOTA1M2RjMjViN2UiLCJub21icmUiOiJOQVRBTElBIExPUEVSQSIsImVtYWlsIjoibmF0YWxpYS5sb3BlcmFAcmVhY2Npb25hcmx0ZGEuY29tIiwicGFzc3dvcmQiOiI6KSIsImZlY2hhQ3JlYWNpb24iOiIyMDIyLTA0LTI3VDIxOjU0OjUxLjQyNloiLCJ1cGRhdGVkQXQiOiIyMDIyLTA0LTI3VDIxOjU0OjUxLjQyNloiLCJfX3YiOjB9LCJpYXQiOjE2NTEyNDQ0MTEsImV4cCI6MTY1MTI3MzIxMX0.e8_z6s6Oe7HFju9E4_SeMbYPC2R6TZQupfQVHydO-f8'
        return this.http.post(url, inventario)
            
  }
}
