import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';


export interface DialogData {
  tipo: 'add' | 'edit' | 'delete';
  desde: 'vacantes' | 'trabajos'   //agrega desde donde llama el dialog
  id? : number ,
  categorias?: any[],
  ciudades?: any[],
  vacantes?: any[]
  titulo?: string,
  descripcion?: string,
  requerimientos?: string,
  fechaL?:string,
  categoria?: string,
  ciudad?: string,
  estado?: boolean
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  form: FormGroup;
  categorias: any[] = [];
  ciudades: any[] = [];
  archivos: any[] = [];

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {

    console.log('DATA',this.data)

    this.form = new FormGroup({});

    if(data.desde === 'vacantes'){
      this.form.addControl('titulo',new FormControl(data.titulo, Validators.required))
      this.form.addControl('descripcion',new FormControl(data.descripcion, Validators.required))
      this.form.addControl('requerimientos',new FormControl(data.requerimientos, Validators.required))
      this.form.addControl('fechaL',new FormControl(data.fechaL, Validators.required))
      this.form.addControl('categoria',new FormControl(data.categoria,Validators.required))
      this.form.addControl('ciudad',new FormControl(data.ciudad, Validators.required))
      this.form.addControl('estado',new FormControl(data.estado))

      this.form.get('categoria')?.setValue(data.categoria);
      this.form.get('ciudad')?.patchValue(data.ciudad);
      this.form.addControl('Close', new FormControl(''))
    } else if (data.desde === 'trabajos'){
      this.form.addControl('Nombre', new FormControl('', Validators.required))
      this.form.addControl('Apellido', new FormControl('', Validators.required))
      this.form.addControl('Telefono', new FormControl('', Validators.required))
      this.form.addControl('Correo', new FormControl('', Validators.required))
      this.form.addControl('HojaVida',new FormControl(''))
      this.form.addControl('Cerrar', new FormControl(''))
    }
  }

  ngOnInit(): void {
    this.categorias = this.data.categorias ?? [];
    this.ciudades = this.data.ciudades ?? [];
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  close(){
    let fechaCreacion = new Date();
    let fecha = new Date(this.form.get('fechaL')?.value);

    this.dialogRef.close({
      Nombre: this.form.get('titulo')?.value,
      Descripcion: this.form.get('descripcion')?.value,
      Requerimientos: this.form.get('requerimientos')?.value,
      Fecha_Limite: this.formatearFecha(fecha),
      Fecha_Creacion: this.formatearFecha(fechaCreacion),
      categoria_Id: this.form.get('categoria')?.value,
      ciudads_Id: this.form.get('ciudad')?.value,
      Estado: this.form.get('estado')?.value ? 1 : 0
    });


  }

  cerrar(){
    let fechaCreacion = new Date();
    this.dialogRef.close({
      Nombre: this.form.get('Nombre')?.value,
      Apellido: this.form.get('Apellido')?.value,
      CV: this.archivos[0],
      Telefono: this.form.get('Telefono')?.value,
      Email: this.form.get('Correo')?.value,
      trabajos_Id: this.data.id,
      Fecha_Creado: this.formatearFecha(fechaCreacion),
      Estado: this.form.get('estado')?.value ? 1 : 0
    });
  }

  formatearFecha(date : Date): string{
    return date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDay();
  }

  Capturarcv(event: any): any {
    const archivo = event.target.files
    this.archivos.push(archivo)
  }

}
