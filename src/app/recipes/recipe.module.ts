import { NgModule } from '@angular/core';
import { RecipeListComponent } from './recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { RecipeDetailGuard } from './recipe-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeDetailComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    RouterModule.forChild([
      { path: 'recipes', component: RecipeListComponent },
      { path: 'recipes/:id',
        canActivate: [RecipeDetailGuard],
        component: RecipeDetailComponent }
    ]),
    SharedModule
  ]
})
export class RecipeModule {}
