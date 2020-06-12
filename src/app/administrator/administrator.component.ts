import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator } from '@angular/material';
import {User} from '../models/user';
import {UserService} from '../user.service';
import { Observable } from 'rxjs/internal/Observable';

const ELEMENT_DATA: User[] = [

];
@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})


export class
AdministratorComponent   implements OnInit {
  users:User[]

  mostrar_todo:boolean=false;

  displayedColumns: string[] = ['id', 'nombre', 'email', 'telefono', 'edad_compra', 'sexo_compra', 'facebook', 'twitter', 'instagram', 'comenta_admin','direccion'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private userService: UserService) {

  }

  ngOnInit() {
    const obsUser: Observable<User[]> = this.userService.getUsers();
    obsUser.subscribe(
      (user) => {
           this.users = user;
      });

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }

}











