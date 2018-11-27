import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RestService} from '../../rest.service';
import {BaseFormComponent} from '../base-form.component';
import {NgForm} from '@angular/forms';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Club} from '../../models/club';

@Component({
    selector: 'app-club-form',
    templateUrl: './club-form.component.html',
    styleUrls: ['./club-form.component.scss']
})
export class ClubFormComponent extends BaseFormComponent implements OnInit {
    @ViewChild('f') form: NgForm;
    editForm = false;
    club = new Club();

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
                this.restHttp.put('/club/' + this.club.id, this.club).subscribe(
                    data => {
                        this._flashMessagesService.show('Dane klubu zostały zapisane pomyślnie!', {
                            cssClass: 'alert-success',
                            timeout: 5000
                        });
                        this.router.navigate(['/clubs']);
                    },
                    error => this.handleSubmitError(error)
                );
            } else {
                this.restHttp.post('/club', this.club).subscribe(
                    data => {
                        this._flashMessagesService.show('Dane klubu zostały zapisane pomyślnie!', {
                            cssClass: 'alert-success',
                            timeout: 5000
                        });
                        this.router.navigate(['/clubs']);
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
        this.restHttp.get('/club/' + id).subscribe((response: any) => {
            this.club = response.body.data;
        });
    }


}
