import { Component, OnInit } from '@angular/core';
import {Cuki} from '../models/cuki';
import {User} from '../models/user';
import {CukisService} from '../cukis.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { UserService } from '../user.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-detallescuki',
  templateUrl: './detallescuki.component.html',
  styleUrls: ['./detallescuki.component.css']
})
export class DetallescukiComponent implements OnInit {
  displayedColumns: string[] = ['id', 'fecha', 'campanya', 'fecha_fin', 'email', 'aportaciones', 'facebook', 'twitter', 'instagram', 'acumuladas',  'total', 'admin'];


  cukis: Observable<Cuki[]>;
  cuki: Observable<Cuki>;
  user: Observable<User>;
  public edited=false;
  public btn_user=true;

  constructor( private route: ActivatedRoute,
    private router: Router,
    private cukiService: CukisService, private userService:UserService) {

    }

  ngOnInit() {

    console.log('Iniciando componente...');
    this.user= this.route.paramMap.pipe(
      switchMap(
        (params: ParamMap) =>
          this.userService.getUser(params.get('id')))
    );

    this.cargarCuki();
  }

   updateCuki(cuki){
    this.cukiService.updateCuki(cuki).pipe(
      map(status=> {
        return this.cukiService.getCukis();
      })
    ).subscribe(response=>{
      console.log(response);
    })
    this.cargarCuki();
  }

  saveButtons(){
    if(this.edited==true){
      this.edited=false;
      this.btn_user=true;
    }
    else if(this.edited==false){
      this.edited=true;
      this.btn_user=false;
    }
   }

   cargarCuki(){
    this.cuki= this.route.paramMap.pipe(
      switchMap(
        (params: ParamMap) =>
          this.cukiService.getCuki(params.get('id')))
    );
   }

}
