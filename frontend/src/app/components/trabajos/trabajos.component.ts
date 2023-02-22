import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoriasService } from 'src/app/services/categorias/categorias.service';
import { CiudadesService } from 'src/app/services/ciudades/ciudades.service';
import { TrabajosService } from 'src/app/services/trabajos/trabajos.service';
import { UsuariosService } from 'src/app/services/ususarios/usuarios.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent implements OnInit {

  displayedColumns: string[] = ["titulo","fechaL","categoria","lugar","activa","creada"]

  vacantes: any[] = [];
  categorias: any[] = [];
  ciudades: any[] = [];

  constructor(private trabajosService: TrabajosService, private categoriasService: CategoriasService,
    private ciudadesService: CiudadesService, public dialog: MatDialog, public usuarioService: UsuariosService) { }

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
    console.log(this.categorias)
  }

  public async getCiudades(){
    this.ciudades = await this.ciudadesService.getCiudades();
    console.log(this.ciudades)
  }

  private filtrar(res:any[],tipo:string){

    let opciones: any[];

    if(tipo === "categoria") opciones = this.categorias;
    else if(tipo === "ciudads") opciones = this.ciudades;

    return res.map(vacante => {

      let value = opciones.find(element => element.id == vacante[`${tipo}_Id`])

      vacante[tipo] = value.Nombre;

      console.log('value', value)

      return vacante;
    })
  }

  openDialog(trabajo: number): void {
    console.log('id: '+ trabajo)
    const dialogRef = this.dialog.open(DialogComponent, {
      panelClass: 'dialogAdd',
      data: {tipo: 'add', desde: 'trabajos',categorias: this.categorias, ciudades: this.ciudades, id: trabajo},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
      if(result) this.postCliente(result);
    });
  }

  async postCliente(data:any){
    await this.usuarioService.postUsuarios(data)
  }
}
