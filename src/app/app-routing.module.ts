import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductsComponent } from './pages/products/products.component';
//Creacio de rutes per a components
const routes: Routes = [
  {
    //el title es el del header html <title>
    title: 'Contacto',
    path: 'contact',
    component: ContactComponent,
  },
  {
    title: 'Productos',
    path: 'products',
    component: ProductsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
