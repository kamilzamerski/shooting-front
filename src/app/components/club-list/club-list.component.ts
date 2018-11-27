import {Component, OnInit} from '@angular/core';
import {RestService} from '../../rest.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-club-list',
    templateUrl: './club-list.component.html',
    styleUrls: ['./club-list.component.scss']
})
export class ClubListComponent implements OnInit {
    size: number;
    page: number;
    clubList: any;

    constructor(protected router: Router, private route: ActivatedRoute, private restHttp: RestService) {
        this.size = 10;
        this.page = 1;
    }

    ngOnInit() {
        let page = this.route.snapshot.paramMap.get('page');
        if (page) {
            this.page = parseInt(page);
        }
        this.getClubList();
    }

    getClubList() {
        this.restHttp.get('/club', {size: this.size, page: this.page}).subscribe((response: any) => {
            this.clubList = response.body.data;
        });
    }

    onChange() {
        this.getClubList();
    }

    setPage(page: number) {
        this.page = page;
        this.router.navigate(['/club/page/', page, {size: this.size}]);
        this.getClubList();
    }

}
