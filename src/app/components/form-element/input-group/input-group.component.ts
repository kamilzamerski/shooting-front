import {Component, forwardRef, Input} from '@angular/core';
import {InputComponent} from '../input/input.component';
import {NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
    selector: 'app-form-input-group',
    templateUrl: './input-group.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputGroupComponent),
            multi: true,
        }
    ]
})
export class InputGroupComponent extends InputComponent {
    @Input() icon = '';

    constructor() {
        super();
    }
}
