import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DefaultFormBaseComponent } from '@polpware/ngx-form-common';
import * as i0 from "@angular/core";
export declare class MultiDatePickerComponent extends DefaultFormBaseComponent implements OnInit {
    private _builder;
    initValue: string[];
    prefix: string;
    bsValue: Date;
    items: Array<{
        display: any;
        value: any;
    }>;
    form: FormGroup;
    private _subr;
    constructor(_builder: FormBuilder);
    ngOnInit(): void;
    ngOnDestroy(): void;
    confirm(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MultiDatePickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MultiDatePickerComponent, "polp-bs-multi-date-picker", never, { "initValue": "initValue"; }, {}, never, never>;
}
