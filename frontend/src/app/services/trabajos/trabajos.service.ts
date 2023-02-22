import { Injectable } from '@angular/core';
import { ProviderService } from '../api/provider.service';

@Injectable({
  providedIn: 'root',
})
export class TrabajosService {

  constructor(private service: ProviderService) { }

  async getTrabajo(id: number){
    let res = await this.service.requestGet(`trabajo/${id}`);
    return res['trabajo'];
  }

  async getTrabajos(){
    let res = await this.service.requestGet("trabajo");
    return res['trabajo'];
  }

  async postTrabajos(body: any){
    let res = await this.service.requestPost("trabajo", body);
  }

  async patchTrabajos(id:number, body: any){
    let res = await this.service.requestPatch(`trabajo/${id}`, body);
  }

  async deleteTrabajos(id:number, body: any){
    let res = await this.service.requestDelete(`trabajo/${id}`, body);
  }
}

