import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Inventario } from "../inventario.model";
import { environment } from '../../environments/environment';


@Injectable()

export class FormularioService {

    private baseUrl: string = environment.baseUrl
    token = '?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7InJvbGUiOiJVU0VSX1JPTEUiLCJfaWQiOiI2MjY5YmJhYmYxYTBlOTA1M2RjMjViN2UiLCJub21icmUiOiJOQVRBTElBIExPUEVSQSIsImVtYWlsIjoibmF0YWxpYS5sb3BlcmFAcmVhY2Npb25hcmx0ZGEuY29tIiwicGFzc3dvcmQiOiI6KSIsImZlY2hhQ3JlYWNpb24iOiIyMDIyLTA0LTI3VDIxOjU0OjUxLjQyNloiLCJ1cGRhdGVkQXQiOiIyMDIyLTA0LTI3VDIxOjU0OjUxLjQyNloiLCJfX3YiOjB9LCJpYXQiOjE2NTE4NzYyNDksImV4cCI6MTY1MTkwNTA0OX0.H_lOfIBIL_rGgW-wga8Xua5dHEGIhc-D9rjhuH_NhG0'
    constructor(public http: HttpClient) {
        
        console.log('Servicio Inicializado');
        
    }

    obtenerinventario() {

        let url = 'http://138.121.170.119:3001/inventario';
        return this.http.get (url);

    }

    obtenerdetalles(id) {

        let url = 'http://138.121.170.119:3001/inventario/' + id ;
        url+= this.token;
        return this.http.get (url);

    }


    crearinventario( inventario: Inventario ) {

        console.log("llegué", inventario); 
        let url = 'http://138.121.170.119:3001/inventario';
        url+= this.token;
        return this.http.post(url, inventario);
   }
}