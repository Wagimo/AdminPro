
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graph1Component } from './graph1/graph1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const routes: Routes = [
    { 
        path:'dashboard', component:PagesComponent,
        children:[
            { path: '', component: DashboardComponent, data:{title:'DashBoard'} },
            { path: 'progress', component: ProgressComponent, data:{title:'Progress Bar'} },
            { path: 'grafica', component: Graph1Component,data:{title:'Grafica'} },
            { path: 'settings', component: AccountSettingsComponent,data:{title:'Settings'} },
            { path: 'promesas', component: PromesasComponent,data:{title:'Promesas'} },
            { path: 'rxjs', component: RxjsComponent,data:{title:'Rxjs'} }
           
        ]
    },  

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}

