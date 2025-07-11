import { OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
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
    form: UntypedFormGroup;
    private _subr;
    constructor(_builder: UntypedFormBuilder);
    ngOnInit(): void;
    ngOnDestroy(): void;
    confirm(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MultiDatePickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MultiDatePickerComponent, "polp-bs-multi-date-picker", never, { "initValue": "initValue"; }, {}, never, never, false>;
}
//# sourceMappingURL=multi-date-picker.component.d.ts.map