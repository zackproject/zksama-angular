import { Component, Input } from '@angular/core';
// agafa el producte creat en models
import { Product } from './../../models/products.models'
//NgOptimizedImage > ngimg, CommonModule> ngif, ngfor
import { NgOptimizedImage, CommonModule } from '@angular/common';
@Component({
  // el pare es standalone
  standalone: true,
  //al ser standalone a d'importar el que necesita ell
  imports: [NgOptimizedImage, CommonModule],
  //El selector es per cridar en html
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

//Crida de 'models/products.models.ts'
export class ProductComponent {
  //Inicialitza el valor el buit, sino es queixa
  //@Input() product: string = '';

  //Inicialitza in OBJ product buit
  // Forma 1: @Input() product: Product = { title: '', price: 0, images: [], id: 0 };
  // Forma 2: Exclamation, ja el faré encara que no inicialitza ara
  @Input() product!: Product;

}
