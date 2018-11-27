import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RestService} from '../../rest.service';
import {BaseFormComponent} from '../base-form.component';
import {NgForm} from '@angular/forms';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Shooter} from '../../models/shooter';

@Component({
    selector: 'app-shooter-form',
    templateUrl: './shooter-form.component.html',
    styleUrls: ['./shooter-form.component.scss']
})
export class ShooterFormComponent extends BaseFormComponent implements OnInit {
    @ViewChild('f') form: NgForm;
    editForm = false;
    shooter = new Shooter();

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
                this.restHttp.put('/shooter/' + this.shooter.id, this.shooter).subscribe(
                    data => {
                        this._flashMessagesService.show('Dane zawodnika zostały zapisane pomyślnie!', {
                            cssClass: 'alert-success',
                            timeout: 5000
                        });
                        this.router.navigate(['/shooters']);
                    },
                    error => this.handleSubmitError(error)
                );
            } else {
                this.restHttp.post('/shooter', this.shooter).subscribe(
                    data => {
                        this._flashMessagesService.show('Dane zawodnika zostały zapisane pomyślnie!', {
                            cssClass: 'alert-success',
                            timeout: 5000
                        });
                        this.router.navigate(['/shooters']);
                    },
                    error => this.handleSubmitError(error)
                );
            }
        }

    }

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        if (id !== null) {
            this.editForm = true;
            this.loadModel(id);
        }
    }

    loadModel(id: string | number) {
        this.restHttp.get('/shooter/' + id).subscribe((response: any) => {
            this.shooter = response.body.data;
        });
    }


}
