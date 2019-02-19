import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RestService} from '../../rest.service';
import {BaseFormComponent} from '../base-form.component';
import {NgForm} from '@angular/forms';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Member} from '../../models/member';

@Component({
    selector: 'app-member-form',
    templateUrl: './member-form.component.html',
    styleUrls: ['./member-form.component.scss']
})
export class MemberFormComponent extends BaseFormComponent implements OnInit {
    @ViewChild('f') form: NgForm;
    editForm = false;
    member = new Member();

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
                this.restHttp.put('/member/' + this.member.id, this.member).subscribe(
                    data => {
                        this._flashMessagesService.show('Dane klubowicza zostały zapisane pomyślnie!', {
                            cssClass: 'alert-success',
                            timeout: 5000
                        });
                        this.router.navigate(['/members']);
                    },
                    error => this.handleSubmitError(error)
                );
            } else {
                this.restHttp.post('/member', this.member).subscribe(
                    data => {
                        this._flashMessagesService.show('Dane klubowicza zostały zapisane pomyślnie!', {
                            cssClass: 'alert-success',
                            timeout: 5000
                        });
                        this.router.navigate(['/members']);
                    },
                    error => this.handleSubmitError(error)
                );
            }
        }

    }

    ngOnInit() {
        let id = this.route.snapshot.paramMap.get('id');
        if (id !== null) {
            this.editForm = true;
            this.loadModel(id);
        }
    }

    loadModel(id: string | number) {
        this.restHttp.get('/member/' + id).subscribe((response: any) => {
            this.member = response.body.data;
        });
    }


}
