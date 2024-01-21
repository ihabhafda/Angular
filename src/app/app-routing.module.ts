import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { ParentComponent } from './components/parent/parent.component';
import { ProductsComponent } from './components/products/products.component';
import { ObservableTestComponent } from './components/observable-test/observable-test.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { FormTestComponent } from './components/form-test/form-test.component';

const routes: Routes = [
  // { path: "**", component: UserComponent}, // chu makatab bye5do 3ala Page UserComponent
  { path: "users", component: UserComponent},
  { path: "register", component: RegisterComponent},
  { path: "parent", component: ParentComponent},
  { path: "products", component: ProductsComponent},
  { path: "observable", component: ObservableTestComponent},
  { path: "pipe", component: PipeComponent},
  { path: "form", component: FormTestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
