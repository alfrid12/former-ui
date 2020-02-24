import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormRendererComponent } from './form-renderer/form-renderer.component';
import { FormCreatorComponent } from './form-creator/form-creator.component';


const routes: Routes = [{
  path: 'create-form',
  component: FormCreatorComponent
}, {
  path: 'forms/:formId',
  component: FormRendererComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
