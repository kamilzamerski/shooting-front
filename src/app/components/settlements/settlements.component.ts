import {Component, OnInit} from '@angular/core';
import {RestService} from '../../rest.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Member} from '../../models/member';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
    selector: 'app-settlements',
    templateUrl: './settlements.component.html',
    styleUrls: ['./settlements.component.scss']
})
export class SettlementsComponent implements OnInit {
    size: number;
    page: number;
    memberId: number;
    settlementsList: any;
    member: Member;

    constructor(protected router: Router,
                private route: ActivatedRoute,
                private restHttp: RestService) {
        this.size = 10;
        this.page = 1;
    }

    ngOnInit() {
        this.member = new Member();
        const page = this.route.snapshot.paramMap.get('page');
        const memberId = this.route.snapshot.paramMap.get('memberId');
        if (page) {
            this.page = parseInt(page);
        }
        if (memberId) {
            this.memberId = parseInt(memberId);
        }
        this.getSettlementsList();
        this.getMember();
    }

    getSettlementsList() {
        this.restHttp.get('/settlement/' + this.memberId, {size: this.size, page: this.page}).subscribe((response: any) => {
            this.settlementsList = response.body.data;
        });
    }

    getMember() {
        this.restHttp.get('/member/' + this.memberId).subscribe((response: any) => {
            this.member = response.body.data;
        });
    }

    onChange() {
        this.getSettlementsList();
    }

    setPage(page: number) {
        this.page = page;
        this.router.navigate(['/settlement/' + this.memberId + '/page/', page, {size: this.size}]);
        this.getSettlementsList();
    }

    confirmDelete(url: string, restHttp: RestService, flashMessagesService: FlashMessagesService) {
        restHttp.delete(url).subscribe((response: any) => {
            flashMessagesService.show('Rozliczenie zostało usunięte!', {
                cssClass: 'alert-success',
                timeout: 5000
            });
        });
    }

}
