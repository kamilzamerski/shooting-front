import {Component, OnInit, Input} from '@angular/core';
import {RestService} from '../../rest.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
    selector: 'app-confirmation-delete',
    templateUrl: './confirmation-delete.component.html',
    styleUrls: ['./confirmation-delete.component.scss']
})
export class ConfirmationDeleteComponent implements OnInit {

    @Input() url: string;
    @Input() deleteFunction;
    public popoverTitle: string = 'Potwierdzenie usunięcia';
    public popoverMessage: string = 'Czy napewno chcesz usunąć to rozliczenie?';

    constructor(private restHttp: RestService, private flashMessagesService: FlashMessagesService) {
    }

    ngOnInit() {
    }

    confirmDelete() {
        this.deleteFunction(this.url, this.restHttp, this.flashMessagesService);
    }

}
