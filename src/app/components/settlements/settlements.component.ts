import {Component, OnInit} from '@angular/core';
import {RestService} from '../../rest.service';
import {ActivatedRoute, Router} from '@angular/router';

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

    constructor(protected router: Router, private route: ActivatedRoute, private restHttp: RestService) {
        this.size = 10;
        this.page = 1;
    }

    ngOnInit() {
        let page = this.route.snapshot.paramMap.get('page');
        let memberId = this.route.snapshot.paramMap.get('memberId');
        if (page) {
            this.page = parseInt(page);
        }
        if (memberId) {
            this.memberId = parseInt(memberId);
        }
        this.getSettlementsList();
    }

    getSettlementsList() {
        this.restHttp.get('/settlement/' + this.memberId, {size: this.size, page: this.page}).subscribe((response: any) => {
            this.settlementsList = response.body.data;
        });
    }

    onChange() {
        this.getSettlementsList();
    }

    setPage(page: number) {
        this.page = page;
        this.router.navigate(['/settlements/' + this.memberId + '/page/', page, {size: this.size}]);
        this.getSettlementsList();
    }

}
