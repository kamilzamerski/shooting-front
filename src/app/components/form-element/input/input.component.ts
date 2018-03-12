import {Component, ElementRef, forwardRef, Input, OnInit, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, NgModel} from '@angular/forms';
declare var jQuery: any;
@Component({
    selector: 'app-form-input',
    templateUrl: './input.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputComponent),
            multi: true,
        }
    ]
})
export class InputComponent implements ControlValueAccessor, OnInit {
    @ViewChild('input') element: ElementRef;
    @ViewChild(NgModel) model: NgModel;
    @Input() required = false;
    @Input() dateFormat = 'yyyy-mm-dd';
    @Input() datepicker = false;
    @Input() type = 'text';
    @Input() name = '';
    @Input() id = '';
    @Input() label = '';
    @Input() value = '';
    @Input() form;
    @Input() errors;

    private propagateChange = (value: any) => {
        this.value = value;
    }

    public registerOnTouched() {
    }

    private onChange(event) {
        this.propagateChange(event.target.value);
    }

    public writeValue(obj: any) {
        if (obj) {
            this.value = obj;
        }
    }

    public registerOnChange(fn: any) {
        this.propagateChange = fn;
    }

    public ngOnInit() {
        if (this.datepicker) {
            jQuery(this.element.nativeElement).datepicker({autoclose: true, format: this.dateFormat, language: 'pl'});
        }
    }
}
