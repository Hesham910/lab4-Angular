import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductComponent } from './components/product/product.component';
import { VisionComponent } from './components/vision/vision.component';
import { ValuesComponent } from './components/values/values.component';
import { DetailsComponent } from './components/details/details.component';

export const routes: Routes = [
    {path:'',redirectTo: 'home', pathMatch: 'full'},
    {path:'home',component:HomeComponent},
    {path:'products',component:ProductComponent},
    {path:'details/:id',component:DetailsComponent},
    {path:'about',component:AboutComponent,children:[
        {path:'', redirectTo:"vision", pathMatch:"full"},
        {path:'vision',component:VisionComponent},
        {path:'values',component:ValuesComponent}
    ]},
    {path:'contact',component:ContactComponent},
    {path:'**',component:NotFoundComponent},
];
