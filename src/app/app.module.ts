import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { InstallationComponent } from './installation/installation.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { StructureComponent } from './structure/structure.component';

const routes: Routes = [
  { path: 'GettingStarted', component: GettingStartedComponent },
  {path: 'Installation' , component: InstallationComponent},
  {path:'CreateProject' ,component:CreateProjectComponent},
  {path:'Structure', component:StructureComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    GettingStartedComponent,
    InstallationComponent,
    CreateProjectComponent,
    StructureComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
