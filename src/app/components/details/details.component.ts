import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from '../../models/iproduct';
import { StaticProductService } from '../../services/static-product.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  currentId:number=0;
  product: Iproduct|null=null;
  constructor(private _activatedRoute:ActivatedRoute,private _staticService:StaticProductService){

  }
  ngOnInit() {
   this.currentId= Number(this._activatedRoute.snapshot.paramMap.get('id'));
   this.product=this._staticService.getProductById(this.currentId)
   
  }
}
