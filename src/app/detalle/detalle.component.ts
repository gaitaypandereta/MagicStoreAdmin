import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator } from '@angular/material';
import {User} from '../models/user';
import { Cuki } from '../models/cuki';

const ELEMENT_DATA: User[] = [
  { id:'23er34' ,nombre:"Ana Belén" ,email: "yyemail@gmail.com", telefono:"987656565" , edad:"13" ,sexo: "chica", facebook:"amyfacebook.com", twitter:"mytwitter.com", instagram:"cmyinstagram.com", estado:"PENALIZADO", direccion:"C/ Aalero 56" }];

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})

export class DetalleComponent implements OnInit {
  cuki:Cuki;
  public edited = false;

  saveTodos(){
   this.edited = false;
   //wait 3 Seconds and hide
   setTimeout(function() {
       this.edited = false;
       console.log(this.edited);
   }.bind(this), 50);

   alert("You Clicked Me!");
  }

  displayedColumns: string[] = ['id', 'nombre', 'email', 'telefono', 'edad', 'sexo', 'facebook', 'twitter', 'instagram', 'estado','direccion'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }

  verCarnet(net: boolean) {
    this.edited = net;
  }
}
