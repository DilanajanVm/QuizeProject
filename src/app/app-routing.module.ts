import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddPaperComponent} from "./add-paper/add-paper.component";

const routes: Routes = [
  {path:'',component:AddPaperComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
