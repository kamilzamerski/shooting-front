import {Router} from '@angular/router';
import {RestService} from '../rest.service';
import {NgForm} from '@angular/forms';
import {ViewChild} from '@angular/core';

export abstract class BaseFormComponent {
    @ViewChild('f') form: NgForm;
    submitted = false;
    public errors = [];

    constructor(protected router: Router,
                protected restHttp: RestService) {
    }

    protected handleSubmitError(error: any) {
        if (error.status === 422) {
            this.errors = error.error;
        }
    }
    onSubmit() {
        this.submitted = true;
    }
}
