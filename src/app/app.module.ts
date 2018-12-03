import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app.component';
import {AppRoutingModule} from './app-routing.module';
import {HeaderComponent} from './components/header/header.component';
import {MenuComponent} from './components/menu/menu.component';
import {FooterComponent} from './components/footer/footer.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ContentComponent} from './components/content/content.component';
import {MemberListComponent} from './components/member-list/member-list.component';
import {PaginationComponent} from './components/pagination/pagination.component';
import {HttpClientModule} from '@angular/common/http';
import {RestService} from './rest.service';
import { MemberFormComponent } from './forms/member-form/member-form.component';
import {FormsModule} from '@angular/forms';
import {InputComponent} from './components/form-element/input/input.component';
import {InputGroupComponent} from './components/form-element/input-group/input-group.component';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {ClubListComponent} from './components/club-list/club-list.component';
import {ShooterListComponent} from './components/shooter-list/shooter-list.component';
import {ClubFormComponent} from './forms/club-form/club-form.component';
import {ShooterFormComponent} from './forms/shooter-form/shooter-form.component';
import {LicenseListComponent} from './components/license-list/license-list.component';
import {LicenseFormComponent} from './forms/license-form/license-form.component';
import {SettlementsComponent} from './components/settlements/settlements.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MenuComponent,
        FooterComponent,
        DashboardComponent,
        ContentComponent,
        MemberListComponent,
        PaginationComponent,
        MemberFormComponent,
        InputComponent,
        InputGroupComponent,
        ClubListComponent,
        ShooterListComponent,
        ClubFormComponent,
        ShooterFormComponent,
        LicenseListComponent,
        LicenseFormComponent,
        SettlementsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        FlashMessagesModule.forRoot()
    ],
    providers: [
        RestService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
