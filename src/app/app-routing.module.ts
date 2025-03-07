import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MateriaisComponent } from './materiais/materiais/materiais.component';
import { HomeComponent } from './home/home/home.component';
import { LoginScreenComponent } from './layout/login-screen/login-screen.component';
import { RegisterScreenComponent } from './layout/register-screen/register-screen.component';
import { NavbarTodoComponent } from './todolist/navbar-todo/navbar-todo.component';
import { FormTodoComponent } from './components/form-todo/form-todo.component';
import { AuthGuard } from './auth.guard';
import { MeusMateriaisComponent } from './meus-materiais/meus-materiais/meus-materiais.component';
import { FormMaterialComponent } from './components/form-material/form-material.component';

const routes: Routes = [
  { path: '', component: LoginScreenComponent }, // Página inicial é a tela de login
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard] }, // Home protegida
  { path: 'materiais', component: MateriaisComponent, canActivate:[AuthGuard] }, // Materiais protegida
  { path: 'todolist', component: NavbarTodoComponent, canActivate:[AuthGuard] }, // NavbarTodo protegida
  { path: 'formtodo', component: FormTodoComponent},
  { path: 'formtodo/:id', component: FormTodoComponent },
  {path: 'form-material', component: FormMaterialComponent},
  {path: 'form-material/:id', component: FormMaterialComponent},
  { path: 'login', component: LoginScreenComponent },
  { path: 'register', component: RegisterScreenComponent },
  {path: 'meus-materiais', component: MeusMateriaisComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
