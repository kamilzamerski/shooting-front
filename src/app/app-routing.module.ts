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
import {SettlementFormComponent} from './forms/settlement-form/settlement-form.component';
import {AuthGuard} from './auth/auth.guard';
import {LoginComponent} from './auth/login/login.component';


const routes: Routes = [
    {path: '', redirectTo: '/dashboard', 'pathMatch': 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    {path: 'members', component: MemberListComponent, canActivate: [AuthGuard]},
    {path: 'members/page/:page', component: MemberListComponent, canActivate: [AuthGuard]},
    {path: 'members/new', component: MemberFormComponent, canActivate: [AuthGuard]},
    {path: 'members/edit/:id', component: MemberFormComponent, canActivate: [AuthGuard]},
    {path: 'members/settlements/:memberId', component: SettlementsComponent, canActivate: [AuthGuard]},
    {path: 'members/settlements/new/:memberId', component: SettlementFormComponent, canActivate: [AuthGuard]},
    {path: 'members/settlements/edit/:memberId/:settlementId', component: SettlementFormComponent, canActivate: [AuthGuard]},
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
