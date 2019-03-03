import {Component, ViewChild} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {RestService} from '../../rest.service';
import {BaseFormComponent} from '../../forms/base-form.component';
import {NgForm} from '@angular/forms';
import {User} from '../../models/user';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseFormComponent {

    @ViewChild('f') form: NgForm;
    user = new User();

    constructor(protected router: Router,
                protected restHttp: RestService,
                protected authService: AuthService) {
        super(router, restHttp);
        document.body.className = 'hold-transition login-page skin-purple';
    }

    onSubmit() {
        super.onSubmit();
        if (this.form.valid) {
                this.restHttp.post('/login', this.user).subscribe(
                    (response: any)  => {
                        const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/';
                        this.authService.login(response.body.token);
                        this.router.navigate([redirect]);
                    },
                    error => this.handleSubmitError(error)
                );
            }
    }
}
