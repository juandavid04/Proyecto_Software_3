import { Injectable } from '@angular/core';
import { ProviderService } from '../api/provider.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private service: ProviderService) { }

  async getUsuarios(){
    let res = await this.service.requestGet("persona");
    return res['personas'];
  }

  async postUsuarios(body: any){
    let res = await this.service.requestPost("persona", body);
  }

  async patchUsuarios(id:number, body: any){
    let res = await this.service.requestPatch(`persona/${id}`, body);
  }

  async deleteUsuarios(id:number, body: any){
    let res = await this.service.requestDelete(`persona/${id}`, body);
  }
}
