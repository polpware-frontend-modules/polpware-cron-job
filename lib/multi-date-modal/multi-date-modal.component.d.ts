import { OnInit } from '@angular/core';
import { ObservableModalAbstractComponent } from '@polpware/bs-components';
import { AlertDefaultImpl, IHasAlertFeature } from '@polpware/ngx-alert';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import * as i0 from "@angular/core";
export interface IMultiDateModalInput {
    title: string;
    initValue: string[];
}
export declare class MultiDateModalComponent extends ObservableModalAbstractComponent<IMultiDateModalInput, string[]> implements OnInit, IHasAlertFeature {
    readonly bsModalRef: BsModalRef;
    protected readonly bsModalService: BsModalService;
    title: string;
    initValue: string[];
    outputValue: string[];
    isValid: boolean;
    alertProvider: AlertDefaultImpl;
    constructor(bsModalRef: BsModalRef, bsModalService: BsModalService);
    get alerts(): import("@polpware/ngx-alert").IAlertItem[];
    ngOnInit(): void;
    close(): void;
    updateValue(evt: Array<{
        display: string;
        value: string;
    }>): void;
    validate(evt: {
        valid: boolean;
    }): void;
    confirm(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MultiDateModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MultiDateModalComponent, "polp-bs-multi-date-modal", never, { "title": "title"; "initValue": "initValue"; }, {}, never, never>;
}
