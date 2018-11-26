import {Component, OnInit} from '@angular/core';
import {RestService} from '../../rest.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-member-list',
    templateUrl: './member-list.component.html',
    styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {
    size: number;
    page: number;
    membersList: any;

    constructor(protected router: Router, private route: ActivatedRoute, private restHttp: RestService) {
        this.size = 10;
        this.page = 1;
    }

    ngOnInit() {
        let page = this.route.snapshot.paramMap.get('page');
        if (page) {
            this.page = parseInt(page);
        }
        this.getMembersList();
    }

    getMembersList() {
        this.restHttp.get('/member', {size: this.size, page: this.page}).subscribe(response => {
            this.membersList = response.body.data;
        });
    }

    onChange() {
        this.getMembersList();
    }

    setPage(page: number) {
        this.page = page;
        this.router.navigate(['/members/page/', page, {size: this.size}]);
        this.getMembersList();
    }

}
