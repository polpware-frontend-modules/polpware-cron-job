import { OnInit } from '@angular/core';
import { ObservableModalAbstractComponent, IHasChildModal, IChildModalState } from '@polpware/bs-components';
import { AlertDefaultImpl, IHasAlertFeature } from '@polpware/ngx-alert';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { IScheduleTime } from '../interfaces';
import { ISettings } from '../schedule-time-picker/schedule-time-picker.component';
import * as i0 from "@angular/core";
export interface IScheduleTimeModalInput {
    title: string;
    initSettings: ISettings;
    initValue: IScheduleTime;
    extraClasses: string;
    onConfirmAsync: (data: IScheduleTime) => Promise<any>;
}
export declare class ScheduleTimeModalComponent extends ObservableModalAbstractComponent<IScheduleTimeModalInput, IScheduleTime> implements OnInit, IHasAlertFeature, IHasChildModal {
    readonly bsModalRef: BsModalRef;
    protected readonly bsModalService: BsModalService;
    faSpinner: import("@fortawesome/fontawesome-common-types").IconDefinition;
    title: string;
    initSettings: ISettings;
    initValue: IScheduleTime;
    onConfirmAsync: (data: IScheduleTime) => Promise<any>;
    extraClasses: string;
    outputValue: IScheduleTime;
    isValid: boolean;
    isSaving: boolean;
    alertProvider: AlertDefaultImpl;
    showBackdrop: boolean;
    constructor(bsModalRef: BsModalRef, bsModalService: BsModalService);
    get alerts(): import("@polpware/ngx-alert").IAlertItem[];
    ngOnInit(): void;
    close(): void;
    updateScheduler(evt: IScheduleTime): void;
    validateScheduler(evt: {
        valid: boolean;
    }): void;
    updateStyle(evt: IChildModalState): void;
    confirmAsync(): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScheduleTimeModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ScheduleTimeModalComponent, "polp-bs-schedule-time-modal", never, { "title": "title"; "initSettings": "initSettings"; "initValue": "initValue"; "onConfirmAsync": "onConfirmAsync"; "extraClasses": "extraClasses"; }, {}, never, never>;
}
