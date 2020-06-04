import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator } from '@angular/material';
import {Cuki} from '../models/cuki';
import { CukisService } from '../cukis.service';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';
import {DataSource} from '@angular/cdk/collections';
import {DetalleComponent} from '../detalle/detalle.component';

/*const ELEMENT_DATA: Cuki[] = [
  {id:"1KqqCO6k4gNKwrDmmsJMxuCRz1", fecha:"04/04/20", campanya:"A cuadros", fecha_fin:"05/05/2020" , email:"manuel@gmail.com", aportaciones:10, facebook:3, twitter:2, instagram:0, acumuladas:3, total:18},
  {id:"12234", fecha:"03/12/20", campanya:"A cuadros" , email:"myenmail@gmail.com", aportaciones:30, facebook:3, twitter:2, instagram:0, acumuladas:28,estado:"PREMIADO",total:43},
  {id:"12234", fecha:"03/12/19", campanya:"A cuadros" , email:"myenmail@gmail.com", aportaciones:10, facebook:1, twitter:2, instagram:0, acumuladas:8, estado:"PREMIADO", total:43},
  {id:"12234", fecha:"03/12/19", campanya:"A cuadros" , email:"myenmail@gmail.com", aportaciones:10, facebook:3, twitter:2, instagram:0, acumuladas:18, estado:"PREMIADO",total:43},
  {id:"12234", fecha:"03/12/19", campanya:"A cuadros" , email:"myenmail@gmail.com", aportaciones:70, facebook:3, twitter:4, instagram:0, acumuladas:28, estado:"PREMIADO",total:43},
  {id:"12234", fecha:"03/12/19", campanya:"A cuadros" , email:"xmyenmail@gmail.com", aportaciones:10, facebook:5, twitter:2, instagram:1, acumuladas:28,estado:"PENALIZADO", total:43},
  {id:"12234", fecha:"03/12/19", campanya:"A cuadros" , email:"amyenmail@gmail.com", aportaciones:10, facebook:3, twitter:2, instagram:0, acumuladas:58, estado:"PENALIZADO", total:43},
  {id:"12234", fecha:"03/12/19", campanya:"A cuadros" , email:"myenmail@gmail.com", aportaciones:10, facebook:3, twitter:2, instagram:0, acumuladas:28, estado:"PENALIZADO", total:43},
  {id:"12234", fecha:"03/12/19", campanya:"A cuadros" , email:"myenmail@gmail.com", aportaciones:90, facebook:3, twitter:5, instagram:0, acumuladas:28, estado:"PENALIZADO", total:43},
  {id:"12234", fecha:"03/12/19", campanya:"A cuadros" , email:"Juanimodmyenmail@gmail.com", aportaciones:10, facebook:3, twitter:2, instagram:3, acumuladas:28,estado:"PENALIZADO", total:43},
  {id:"12234", fecha:"03/12/19", campanya:"A cuadros" , email:"myenmail@gmail.com", aportaciones:10, facebook:3, twitter:2, instagram:0, acumuladas:28, estado:"PENALIZADO",total:43},
  {id:"12234", fecha:"03/12/19", campanya:"A cuadros" , email:"myenmail@gmail.com", aportaciones:10, facebook:3, twitter:3, instagram:0, acumuladas:28, estado:"PENALIZADO",total:43},
  {id:"12234", fecha:"03/12/19", campanya:"A cuadros" , email:"bmyenmail@gmail.com", aportaciones:10, facebook:8, twitter:2, instagram:0, acumuladas:28,estado:"PENALIZADO", total:43},
  {id:"12234", fecha:"03/12/19", campanya:"A cuadros" , email:"myenmail@gmail.com", aportaciones:10, facebook:3, twitter:2, instagram:5, acumuladas:28, estado:"PENALIZADO",total:43},
  {id:"12234", fecha:"03/12/19", campanya:"A cuadros" , email:"myenmail@gmail.com", aportaciones:80, facebook:7, twitter:7, instagram:0, acumuladas:28, estado:"PENALIZADO",total:43},
  {id:"12234", fecha:"03/12/19", campanya:"A cuadros" , email:"myenmail@gmail.com", aportaciones:10, facebook:3, twitter:2, instagram:0, acumuladas:3,estado:"PENALIZADO", total:43},
  {id:"12234", fecha:"03/12/19", campanya:"A cuadros" , email:"myenmail@gmail.com", aportaciones:10, facebook:3, twitter:2, instagram:9, acumuladas:8,estado:"PENALIZADO", total:43},
  {id:"12234", fecha:"03/12/19", campanya:"A cuadros" , email:"myenmail@gmail.com", aportaciones:10, facebook:6, twitter:1, instagram:0, acumuladas:28,estado:"PENALIZADO", total:43},
  {id:"12234", fecha:"03/12/19", campanya:"A cuadros" , email:"myenmail@gmail.com", aportaciones:10, facebook:3, twitter:2, instagram:0, acumuladas:28,estado:"PENALIZADO", total:43}
];
 */

@Component({
  selector: 'app-cukis',
  templateUrl: './cukis.component.html',
  styleUrls: ['./cukis.component.css']
})
export class CukisComponent implements OnInit {
  cukis: Observable<Cuki[]>;
  cuki:Cuki[];
  public netedited = true;
  public edited = true;

  @ViewChild(DetalleComponent) carnet: DetalleComponent;

  saveButtons(){
    this.edited=true;
    setTimeout(function() {
        this.edited=true;
    }.bind(this), 50);
    this.carnet.verCarnet(this.edited);
   }

   displayedColumns: string[] = ['id', 'fecha', 'campanya', 'fecha_fin', 'email', 'aportaciones', 'facebook', 'twitter', 'instagram', 'acumuladas',  'total', 'admin'];

  constructor(private cukisService: CukisService) {

   }

  ngOnInit() {
   // this.dataSource.sort = this.sort;
   // this.dataSource.paginator = this.paginator;
    const obsCukis: Observable<Cuki[]> = this.cukisService.getCukis();
    obsCukis.subscribe(
      (cukis) => {
           this.cuki = cukis;

   });



  }

  deletecuki(cuki: Cuki){
    this.cukisService.deleteCuki(cuki).subscribe(
    () => {
      this.cukis = this.cukisService.getCukis();
    }
   );
  }

}
