import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
    @Input() data: any;
    @Input() route: string;
    @Output() goToPage = new EventEmitter<number>();
    elements: any;

    ngOnInit() {
        if (this.data !== undefined) {
            this.elements = [];
            if (this.data.current_page === 1) {
                for (let i = 1; i <= this.data.last_page; i++) {
                    if (i >= 5) {
                        break;
                    }
                    this.elements.push(i);
                }
            } else if (this.data.current_page === 2) {
                this.elements.push(1);
                for (let i = 2; i <= this.data.last_page; i++) {
                    if (i >= 5) {
                        break;
                    }
                    this.elements.push(i);
                }
            } else {
                this.elements.push(this.data.current_page - 2);
                this.elements.push(this.data.current_page - 1);
                this.elements.push(this.data.current_page);
                for (let i = this.data.current_page + 1; i <= this.data.last_page; i++) {
                    if (i >= this.data.current_page + 4) {
                        break;
                    }
                    this.elements.push(i);
                }
            }
        }
    }

    setPage(page: number) {
        this.goToPage.emit(page);
    }

}
