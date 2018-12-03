import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RestService} from '../../rest.service';
import {BaseFormComponent} from '../base-form.component';
import {NgForm} from '@angular/forms';
import {FlashMessagesService} from 'angular2-flash-messages';
import {License} from '../../models/license';

@Component({
    selector: 'app-license-form',
    templateUrl: './license-form.component.html',
    styleUrls: ['./license-form.component.scss']
})
export class LicenseFormComponent extends BaseFormComponent implements OnInit {
    @ViewChild('f') form: NgForm;
    editForm = false;
    license = new License();
    shooter_id = null;

    constructor(protected router: Router,
                protected restHttp: RestService,
                private route: ActivatedRoute,
                private _flashMessagesService: FlashMessagesService) {
        super(router, restHttp);
    }

    onSubmit() {
        super.onSubmit();
        if (this.form.valid) {
            if (this.editForm) {
                this.restHttp.put('/license/' + this.shooter_id + '/' + this.license.id, this.license).subscribe(
                    data => {
                        this._flashMessagesService.show('Dane licencji zostały zapisane pomyślnie!', {
                            cssClass: 'alert-success',
                            timeout: 5000
                        });
                        this.router.navigate(['/shooters/licenses/' + this.shooter_id]);
                    },
                    error => this.handleSubmitError(error)
                );
            } else {
                this.restHttp.post('/license/' + this.shooter_id, this.license).subscribe(
                    data => {
                        this._flashMessagesService.show('Dane licencji zostały zapisane pomyślnie!', {
                            cssClass: 'alert-success',
                            timeout: 5000
                        });
                        this.router.navigate(['/shooters/licenses/' + this.shooter_id]);
                    },
                    error => this.handleSubmitError(error)
                );
            }
        }

    }

    ngOnInit() {
        this.shooter_id = this.route.snapshot.paramMap.get('shooter');
        const id = this.route.snapshot.paramMap.get('id');
        if (this.shooter_id !== null && id !== null) {
            this.editForm = true;
            this.loadModel(this.shooter_id, id);
        }
    }

    loadModel(shooter_id: string | number, id: string | number) {
        this.restHttp.get('/license/' + shooter_id + '/' + id).subscribe((response: any) => {
            this.license = response.body.data;
        });
    }


}
