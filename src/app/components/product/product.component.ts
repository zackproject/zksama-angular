import { Component, Input } from '@angular/core';

@Component({
  //El selector es per cridar en html
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

//Crida de 'models/products.models.ts'
export class ProductComponent {
  //Inicialitza el valor el buit, sino es queixa
  @Input() title: string = '';
}
