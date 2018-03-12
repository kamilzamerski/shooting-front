import {Component, OnInit} from '@angular/core';
import {RestService} from '../../rest.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
    selector: 'app-member-list',
    templateUrl: './member-list.component.html',
    styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {

    membersList: any;
    countAll: number;

    constructor(private restHttp: RestService) {
    }

    ngOnInit() {
        this.getMembersList();
    }

    getMembersList() {
        this.restHttp.get('/member').subscribe(response => {
            this.membersList = response.body.data;
            this.countAll = response.body.count;
        });
    }

}
