import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {MemberListComponent} from './components/member-list/member-list.component';
import {MemberFormComponent} from './forms/member-form/member-form.component';
import {ClubListComponent} from './components/club-list/club-list.component';
import {ShooterListComponent} from './components/shooter-list/shooter-list.component';
import {ClubFormComponent} from './forms/club-form/club-form.component';
import {ShooterFormComponent} from './forms/shooter-form/shooter-form.component';


const routes: Routes = [
    {path: '', redirectTo: '/dashboard', 'pathMatch': 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'members', component: MemberListComponent},
    {path: 'members/page/:page', component: MemberListComponent},
    {path: 'members/new', component: MemberFormComponent},
    {path: 'members/edit/:id', component: MemberFormComponent},
    {path: 'clubs', component: ClubListComponent},
    {path: 'clubs/page/:page', component: ClubListComponent},
    {path: 'clubs/new', component: ClubFormComponent},
    {path: 'clubs/edit/:id', component: ClubFormComponent},
    {path: 'shooters', component: ShooterListComponent},
    {path: 'shooters/page/:page', component: ShooterListComponent},
    {path: 'shooters/new', component: ShooterFormComponent},
    {path: 'shooters/edit/:id', component: ShooterFormComponent},
    {path: 'shooters/license/:id', component: ShooterListComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
