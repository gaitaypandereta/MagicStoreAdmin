import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator } from '@angular/material';
import {User} from '../models/user';

const ELEMENT_DATA: User[] = [
  { id:'23er34' ,nombre:"Ana Belén" ,email: "yyemail@gmail.com", telefono:"987656565" , edad:"13" ,sexo: "chica", facebook:"amyfacebook.com", twitter:"mytwitter.com", instagram:"cmyinstagram.com", estado:"PENALIZADO", direccion:"C/ Aalero 56" },
  { id:'13er34' ,nombre:"Many Belén" ,email: "syemail@gmail.com", telefono:"957656565" , edad:"53" ,sexo: "chico", facebook:"dmyfacebook.com", twitter:"mytwitter.com", instagram:"vmyinstagram.com", estado:"PENALIZADO", direccion:"C/ Salero 56" },
  { id:'23er34' ,nombre:"Ana Belén" ,email: "yyemail@gmail.com", telefono:"987656565" , edad:"13" ,sexo: "chica", facebook:"amyfacebook.com", twitter:"mytwitter.com", instagram:"cmyinstagram.com", estado:"PENALIZADO", direccion:"C/ Aalero 56" },
  { id:'13er34' ,nombre:"Many Belén" ,email: "syemail@gmail.com", telefono:"957656565" , edad:"53" ,sexo: "chico", facebook:"dmyfacebook.com", twitter:"mytwitter.com", instagram:"vmyinstagram.com", estado:"PENALIZADO", direccion:"C/ Salero 56" },
  { id:'53er34' ,nombre:"Sara Belén" ,email: "ayemail@gmail.com", telefono:"687656565" , edad:"23" ,sexo: "0tro", facebook:"jmyfacebook.com", twitter:"mytwitter.com", instagram:"myinstagram.com", estado:"PREMIADO", direccion:"C/ Calero 56" },
  { id:'23er34' ,nombre:"Ana Belén" ,email: "yyemail@gmail.com", telefono:"987656565" , edad:"13" ,sexo: "chica", facebook:"amyfacebook.com", twitter:"mytwitter.com", instagram:"cmyinstagram.com", estado:"PENALIZADO", direccion:"C/ Aalero 56" },
  { id:'13er34' ,nombre:"Many Belén" ,email: "syemail@gmail.com", telefono:"957656565" , edad:"53" ,sexo: "chico", facebook:"dmyfacebook.com", twitter:"mytwitter.com", instagram:"vmyinstagram.com", estado:"PENALIZADO", direccion:"C/ Salero 56" },
  { id:'53er34' ,nombre:"Sara Belén" ,email: "ayemail@gmail.com", telefono:"687656565" , edad:"23" ,sexo: "0tro", facebook:"jmyfacebook.com", twitter:"mytwitter.com", instagram:"myinstagram.com", estado:"PREMIADO", direccion:"C/ Calero 56" },
  { id:'23er34' ,nombre:"Ana Belén" ,email: "yyemail@gmail.com", telefono:"987656565" , edad:"13" ,sexo: "chica", facebook:"amyfacebook.com", twitter:"mytwitter.com", instagram:"cmyinstagram.com", estado:"PENALIZADO", direccion:"C/ Aalero 56" },
  { id:'13er34' ,nombre:"Many Belén" ,email: "syemail@gmail.com", telefono:"957656565" , edad:"53" ,sexo: "chico", facebook:"dmyfacebook.com", twitter:"mytwitter.com", instagram:"vmyinstagram.com", estado:"PENALIZADO", direccion:"C/ Salero 56" },
  { id:'53er34' ,nombre:"Sara Belén" ,email: "ayemail@gmail.com", telefono:"687656565" , edad:"23" ,sexo: "0tro", facebook:"jmyfacebook.com", twitter:"mytwitter.com", instagram:"myinstagram.com", estado:"PREMIADO", direccion:"C/ Calero 56" },
  { id:'23er34' ,nombre:"Ana Belén" ,email: "yyemail@gmail.com", telefono:"987656565" , edad:"13" ,sexo: "chica", facebook:"amyfacebook.com", twitter:"mytwitter.com", instagram:"cmyinstagram.com", estado:"PENALIZADO", direccion:"C/ Aalero 56" },
  { id:'13er34' ,nombre:"Many Belén" ,email: "syemail@gmail.com", telefono:"957656565" , edad:"53" ,sexo: "chico", facebook:"dmyfacebook.com", twitter:"mytwitter.com", instagram:"vmyinstagram.com", estado:"PENALIZADO", direccion:"C/ Salero 56" },
  { id:'53er34' ,nombre:"Sara Belén" ,email: "ayemail@gmail.com", telefono:"687656565" , edad:"23" ,sexo: "0tro", facebook:"jmyfacebook.com", twitter:"mytwitter.com", instagram:"myinstagram.com", estado:"PREMIADO", direccion:"C/ Calero 56" },
  { id:'23er34' ,nombre:"Ana Belén" ,email: "yyemail@gmail.com", telefono:"987656565" , edad:"13" ,sexo: "chica", facebook:"amyfacebook.com", twitter:"mytwitter.com", instagram:"cmyinstagram.com", estado:"PENALIZADO", direccion:"C/ Aalero 56" },
  { id:'13er34' ,nombre:"Many Belén" ,email: "syemail@gmail.com", telefono:"957656565" , edad:"53" ,sexo: "chico", facebook:"dmyfacebook.com", twitter:"mytwitter.com", instagram:"vmyinstagram.com", estado:"PENALIZADO", direccion:"C/ Salero 56" },
  { id:'53er34' ,nombre:"Sara Belén" ,email: "ayemail@gmail.com", telefono:"687656565" , edad:"23" ,sexo: "0tro", facebook:"jmyfacebook.com", twitter:"mytwitter.com", instagram:"myinstagram.com", estado:"PREMIADO", direccion:"C/ Calero 56" },
  { id:'23er34' ,nombre:"Ana Belén" ,email: "yyemail@gmail.com", telefono:"987656565" , edad:"13" ,sexo: "chica", facebook:"amyfacebook.com", twitter:"mytwitter.com", instagram:"cmyinstagram.com", estado:"PENALIZADO", direccion:"C/ Aalero 56" },
  { id:'13er34' ,nombre:"Many Belén" ,email: "syemail@gmail.com", telefono:"957656565" , edad:"53" ,sexo: "chico", facebook:"dmyfacebook.com", twitter:"mytwitter.com", instagram:"vmyinstagram.com", estado:"PENALIZADO", direccion:"C/ Salero 56" },
  { id:'53er34' ,nombre:"Sara Belén" ,email: "ayemail@gmail.com", telefono:"687656565" , edad:"23" ,sexo: "0tro", facebook:"jmyfacebook.com", twitter:"mytwitter.com", instagram:"myinstagram.com", estado:"PREMIADO", direccion:"C/ Calero 56" },
  { id:'53er34' ,nombre:"Sara Belén" ,email: "ayemail@gmail.com", telefono:"687656565" , edad:"23" ,sexo: "0tro", facebook:"jmyfacebook.com", twitter:"mytwitter.com", instagram:"myinstagram.com", estado:"PREMIADO", direccion:"C/ Calero 56" },
];


@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})


export class AdministratorComponent   implements OnInit {
  mostrar_todo:boolean=false;
 // Table User
  displayedColumns: string[] = ['id', 'nombre', 'email', 'telefono', 'edad', 'sexo', 'facebook', 'twitter', 'instagram', 'estado','direccion'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }

hiddePartes() {
    var x = document.getElementById("participantes");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
}











