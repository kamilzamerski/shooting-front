import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {MemberListComponent} from './components/member-list/member-list.component';
import {MemberFormComponent} from './forms/member-form/member-form.component';
import {ClubListComponent} from './components/club-list/club-list.component';
import {ShooterListComponent} from './components/shooter-list/shooter-list.component';
import {ClubFormComponent} from './forms/club-form/club-form.component';
import {ShooterFormComponent} from './forms/shooter-form/shooter-form.component';
import {LicenseListComponent} from './components/license-list/license-list.component';
import {LicenseFormComponent} from './forms/license-form/license-form.component';
import {SettlementsComponent} from './components/settlements/settlements.component';


const routes: Routes = [
    {path: '', redirectTo: '/dashboard', 'pathMatch': 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'members', component: MemberListComponent},
    {path: 'members/page/:page', component: MemberListComponent},
    {path: 'members/new', component: MemberFormComponent},
    {path: 'members/edit/:id', component: MemberFormComponent},
    {path: 'members/settlements/:memberId', component: SettlementsComponent},
    {path: 'clubs', component: ClubListComponent},
    {path: 'clubs/page/:page', component: ClubListComponent},
    {path: 'clubs/new', component: ClubFormComponent},
    {path: 'clubs/edit/:id', component: ClubFormComponent},
    {path: 'shooters', component: ShooterListComponent},
    {path: 'shooters/page/:page', component: ShooterListComponent},
    {path: 'shooters/new', component: ShooterFormComponent},
    {path: 'shooters/edit/:id', component: ShooterFormComponent},
    {path: 'shooters/licenses/:id', component: LicenseListComponent},
    {path: 'shooters/licenses/:id/page/:page', component: LicenseListComponent},
    {path: 'shooters/licenses/new/:shooter', component: LicenseFormComponent},
    {path: 'shooters/licenses/edit/:shooter/:id', component: LicenseFormComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
