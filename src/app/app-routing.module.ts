import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SamplesComponent } from './samples/samples.component';
import { SectionOneComponent } from './section-one/section-one.component';

const routes: Routes = [
  {path:'About', component:AboutComponent},
  {path:'Samples', component:SamplesComponent},
  {path:'Contact', component:ContactComponent},
  {path:"",component:SectionOneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
