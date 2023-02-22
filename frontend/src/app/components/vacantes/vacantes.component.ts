import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoriasService } from 'src/app/services/categorias/categorias.service';
import { CiudadesService } from 'src/app/services/ciudades/ciudades.service';
import { TrabajosService } from 'src/app/services/trabajos/trabajos.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-vacantes',
  templateUrl: './vacantes.component.html',
  styleUrls: ['./vacantes.component.css']
})
export class VacantesComponent implements OnInit {

  displayedColumns: string[] = ["titulo","fechaL","categoria","lugar","estado","creada","editar","eliminar"];

  vacantes: any[] = [];
  categorias: any[] = [];
  ciudades: any[] = [];

  constructor(private trabajosService: TrabajosService, private categoriasService: CategoriasService, 
    private ciudadesService: CiudadesService, public dialog: MatDialog) { }

  async ngOnInit() {
    await this.getCiudades();
    await this.getCategorias();
    await this.getTrabajos();
  }

  public async getTrabajos(){
    let res: any[] = await this.trabajosService.getTrabajos();

    this.vacantes = this.filtrar(res,'categoria');
    this.vacantes = this.filtrar(res,'ciudads');
  }

  public async getCategorias(){
    this.categorias = await this.categoriasService.getCategorias();
  }

  public async getCiudades(){
    this.ciudades = await this.ciudadesService.getCiudades();
  }

  private filtrar(res:any[],tipo:string){

    let opciones: any[];

    if(tipo === "categoria") opciones = this.categorias;
    else if(tipo === "ciudads") opciones = this.ciudades;

    return res.map(vacante => {

      let value = opciones.find(element => element.id == vacante[`${tipo}_Id`])

      vacante[tipo] = value.Nombre; 

      return vacante;
    })
  }

  openDialog(tipo: string, desde: string, vacante?: any): void {
    console.log(tipo)
    const dialogRef = this.dialog.open(DialogComponent, {
      panelClass: 'dialogAdd',
      data: {
        tipo: tipo, 
        desde: desde,
        categorias: this.categorias, 
        ciudades: this.ciudades,
        titulo: vacante?.Nombre,
        descripcion: vacante?.Descripcion,
        requerimientos: vacante?.Requerimientos,
        fechaL: vacante?.Fecha_Limite,
        categoria: vacante?.categoria_Id,
        ciudad: vacante?.ciudads_Id,
        estado: vacante?.Estado
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)

      if(result != undefined && tipo === 'add') this.postTrabajos(result);
      else if(result != undefined && tipo === 'edit') this.patchTrabajos(vacante?.id,result);
      else if(result && tipo === 'delete') this.deleteTrabajos(vacante?.id,result);
    });
  }

  async postTrabajos(data:any){
    await this.trabajosService.postTrabajos(data)
    await this.getTrabajos();
  }

  async patchTrabajos(id: number, data:any){
    await this.trabajosService.patchTrabajos(id,data)
    await this.getTrabajos();
  }

  async deleteTrabajos(id: number, data:any){
    await this.trabajosService.deleteTrabajos(id,data)
    await this.getTrabajos();
  }

}
