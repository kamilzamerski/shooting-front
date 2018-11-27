import {Component, OnInit} from '@angular/core';
import {RestService} from '../../rest.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-shooter-list',
    templateUrl: './shooter-list.component.html',
    styleUrls: ['./shooter-list.component.scss']
})
export class ShooterListComponent implements OnInit {
    size: number;
    page: number;
    shooterList: any;

    constructor(protected router: Router, private route: ActivatedRoute, private restHttp: RestService) {
        this.size = 10;
        this.page = 1;
    }

    ngOnInit() {
        let page = this.route.snapshot.paramMap.get('page');
        if (page) {
            this.page = parseInt(page);
        }
        this.getShooterList();
    }

    getShooterList() {
        this.restHttp.get('/shooter', {size: this.size, page: this.page}).subscribe((response: any) => {
            this.shooterList = response.body.data;
        });
    }

    onChange() {
        this.getShooterList();
    }

    setPage(page: number) {
        this.page = page;
        this.router.navigate(['/shooter/page/', page, {size: this.size}]);
        this.getShooterList();
    }

}
