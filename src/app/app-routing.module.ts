import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {MemberListComponent} from './components/member-list/member-list.component';
import {MemberFormComponent} from './forms/member-form/member-form.component';


const routes: Routes = [
    {path: '', redirectTo: '/dashboard', 'pathMatch': 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'members', component: MemberListComponent},
    {path: 'members/page/:page', component: MemberListComponent},
    {path: 'members/new', component: MemberFormComponent},
    {path: 'members/edit/:id', component: MemberFormComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
