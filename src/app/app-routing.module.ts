import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms'
import { ViewCompileResult } from '@angular/compiler/src/view_compiler/view_compiler';
import { AddComponent } from './components//device/add/add.component'
import {AddUserComponent} from './components/user/add-user/add-user.component'
import { AddServiceComponent } from './components/service/add-service/add-service.component';
import { AddPatientComponent } from './components/patient/add-patient/add-patient.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { GuardsGuard } from './guards.guard';
import { ViewComponent } from './components/device/view/view.component';
import { ViewPatientComponent } from './components/patient/view-patient/view-patient.component';
import { ViewServiceComponent } from './components/service/view-service/view-service.component';
import { ViewUserComponent } from './components/user/view-user/view-user.component';
import {AddMapComponent} from './components/mapping/add-map/add-map.component'
import { ViewMapComponent } from './components/mapping/view-map/view-map.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MaintanenceComponent} from './components/maintanence/maintanence.component'
import { AddAssignComponent } from './components/assigndevice/add-assign/add-assign.component';
import { ViewAssignComponent } from './components/assigndevice/view-assign/view-assign.component';
import { HomeComponent } from './components/home/home.component';
import {UpdateUserComponent} from './components/user/update-user/update-user.component'
import { AddCountryComponent } from './components/countrycode/add-country/add-country.component';
import { ViewCountryComponent } from './components/countrycode/view-country/view-country.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';
import { HelpandsupportComponent } from './components/helpandsupport/helpandsupport.component';
import { DocumentComponent } from './components/document/document.component';
import { AreaComponent } from './components/area/area.component';
import {UpdateComponent} from './components/device/update/update.component'
import { UpdateServiceComponent } from './components/service/update-service/update-service.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
 
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  
  },
//   {
//     path:'dashboard',
//     component:DashboardComponent,
//     data:{breadcrumbs:"dashboard"},
 
// },
  
  {
    path:'add-assign',
    component:AddAssignComponent
  },
 {
   path:'myprofile',
   component:MyprofileComponent
 },
 {
   path:'area',
   component:AreaComponent
 },
 {
   path:'helpandsupport',
   component:HelpandsupportComponent
 }
 ,
 {
   path:'document',
   component:DocumentComponent
 },
  {
    path:'add',
    component:AddComponent,
    canActivate:[GuardsGuard]
  },
  {
    path:'update/:id',
    component:UpdateComponent },
    {
      path:'update-service/:id',
      component:UpdateServiceComponent },
 
  {
    path: "",
    children: [
      {
        path: "dashboard",
        data: { breadcrumb: "Dashboard" },
        component: DashboardComponent,
      },
      {
        path: "view-user",
        data: { breadcrumb: "user" },
        children: 
        [{ path: "", component: ViewUserComponent},
     ],
      },

      
          {
            path:'view-service',
            data: { breadcrumb: "organisation unit" },
            children: [{ path: "", component: ViewServiceComponent}],
            canActivate:[GuardsGuard]
          },
          {
            path:'view-map',
           data:{breadcrumb:"allocation device to service provider"},
           children: [{ path: "", component: ViewMapComponent}],
            canActivate:[GuardsGuard]
          },
          {
            path:'view',
            data:{breadcrumb:"Devices"},
           children: [{ path: "", component: ViewComponent}],
            canActivate:[GuardsGuard]
          },
          {
            path:'view-assign',
            data:{breadcrumb:"Assign Devices"},
            children: [{ path: "", component: ViewAssignComponent}],
          },
          {
            path:'maintanence',
            data:{breadcrumb:"Maintanence"},
            children: [{ path: "", component: MaintanenceComponent}],
          },
      
    ],
  },
{ 
  path:'home',
  component:HomeComponent,

},

  {
    path:'add-user',
    component:AddUserComponent,
    canActivate:[GuardsGuard]
  },
  {
    path:'update-user/:id',
    component:UpdateUserComponent  },
 
  {
    path:'add-service',
    component: AddServiceComponent,
    canActivate:[GuardsGuard]
  },
  
  {
    path:'add-patient',
    component:AddPatientComponent,
    canActivate:[GuardsGuard]
  },
  {
    path:'view-patient',
    component:ViewPatientComponent,
    canActivate:[GuardsGuard]
  },
  {
    path:'add-map',
    component:AddMapComponent,
    canActivate:[GuardsGuard]
  },
  {
    path:'add-country',
    component:AddCountryComponent,
    canActivate:[GuardsGuard]
  },
  {
    path:'view-country',
    component:ViewCountryComponent,
    canActivate:[GuardsGuard]
  }
 
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
