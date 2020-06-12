import { Component, OnInit} from '@angular/core';
import {Cuki} from '../models/cuki';
import { CukisService } from '../cukis.service';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../models/user';

@Component({
  selector: 'app-cukis',
  templateUrl: './cukis.component.html',
  styleUrls: ['./cukis.component.css']
})
export class CukisComponent implements OnInit {
  cukis: Observable<Cuki[]>;
  cuki:Cuki[];
  user:User[];
  myCuki:Cuki;
  public netedited = true;
  public edited = true;


  saveButtons(){
    this.edited=true;
    setTimeout(function() {
        this.edited=true;
    }.bind(this), 50);

   }

   displayedColumns: string[] = ['id', 'fecha', 'campanya', 'fecha_fin', 'email', 'aportaciones', 'facebook', 'twitter', 'instagram', 'acumuladas',  'total', 'admin'];


  constructor(private cukisService: CukisService) {

   }

  ngOnInit() {
   this.cargarCukis();
  }



  deleteCuki(cuki: Cuki){

   var mensaje;
   var opcion = confirm("¿Eliminar esta Cuki?");
        if (opcion == true) {

        this.cukisService.deleteCuki(cuki).subscribe(
             () => {
        this.cukis = this.cukisService.getCukis();
        }
   );

   this.cargarCukis();

  } else {
      mensaje = "No se eliminará esta Cuki";
  }

  }

  cargarCukis(){

    const obsCukis: Observable<Cuki[]> = this.cukisService.getCukis();
    obsCukis.subscribe(
      (cukis) => {
           this.cuki = cukis;

   });

  }

}

