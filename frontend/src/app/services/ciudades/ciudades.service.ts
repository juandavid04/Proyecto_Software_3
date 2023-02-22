import { Injectable } from '@angular/core';
import { ProviderService } from '../api/provider.service';

@Injectable({
  providedIn: 'root'
})
export class CiudadesService {

  constructor(private apiService: ProviderService) { }

  async getCiudades(){
    let res = await this.apiService.requestGet("ciudad");
    return res['ciudad'];
  }
}
