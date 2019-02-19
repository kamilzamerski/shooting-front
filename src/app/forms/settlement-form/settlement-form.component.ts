import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RestService} from '../../rest.service';
import {BaseFormComponent} from '../base-form.component';
import {NgForm} from '@angular/forms';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Settlement} from '../../models/settlement';

@Component({
    selector: 'app-settlement-form',
    templateUrl: './settlement-form.component.html',
    styleUrls: ['./settlement-form.component.scss']
})
export class SettlementFormComponent extends BaseFormComponent implements OnInit {
    @ViewChild('f') form: NgForm;
    editForm = false;
    memberId = null;
    settlement = new Settlement();

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
                this.restHttp.put('/settlement/' + this.memberId + '/' + this.settlement.id, this.settlement).subscribe(
                    data => {
                        this._flashMessagesService.show('Dane zawodnika zostały zapisane pomyślnie!', {
                            cssClass: 'alert-success',
                            timeout: 5000
                        });
                        this.router.navigate(['/members/settlements/' + this.memberId]);
                    },
                    error => this.handleSubmitError(error)
                );
            } else {
                this.restHttp.post('/settlement/' + this.memberId, this.settlement).subscribe(
                    data => {
                        this._flashMessagesService.show('Rozliczenie zostało zapisane pomyślnie!', {
                            cssClass: 'alert-success',
                            timeout: 5000
                        });
                        this.router.navigate(['/members/settlements/' + this.memberId]);
                    },
                    error => this.handleSubmitError(error)
                );
            }
        }

    }

    ngOnInit() {
        this.memberId = this.route.snapshot.paramMap.get('memberId');
        const settlementId = this.route.snapshot.paramMap.get('settlementId');
        if (settlementId !== null) {
            this.editForm = true;
            this.loadModel(settlementId, this.memberId);
        }
    }

    loadModel(settlementId: string | number, memberId: string | number) {
        this.restHttp.get('/settlement/' + memberId + '/' + settlementId).subscribe((response: any) => {
            this.settlement = response.body.data;
        });
    }


}
