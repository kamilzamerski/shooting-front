import {Component, OnInit} from '@angular/core';
import {RestService} from '../../rest.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-license-list',
    templateUrl: './license-list.component.html',
    styleUrls: ['./license-list.component.scss']
})
export class LicenseListComponent implements OnInit {
    size: number;
    page: number;
    shooter: number;
    licenseList: any;

    constructor(protected router: Router, private route: ActivatedRoute, private restHttp: RestService) {
        this.size = 10;
        this.page = 1;
        this.shooter = parseInt(this.route.snapshot.paramMap.get('id'));
    }

    ngOnInit() {
        let page = this.route.snapshot.paramMap.get('page');
        if (page) {
            this.page = parseInt(page);
        }
        this.getLicenseList();
    }

    getLicenseList() {
        this.restHttp.get('/license/' + this.shooter, {size: this.size, page: this.page}).subscribe((response: any) => {
            this.licenseList = response.body.data;
        });
    }

    onChange() {
        this.getLicenseList();
    }

    setPage(page: number) {
        this.page = page;
        this.router.navigate(['/shooters/licenses/' + this.shooter + '/page/', page, {size: this.size}]);
        this.getLicenseList();
    }

}
