import { OnInit } from '@angular/core';
import { ObservableModalAbstractComponent } from '@polpware/bs-components';
import { AlertDefaultImpl, IHasAlertFeature } from '@polpware/ngx-alert';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { IScheduleTime } from '../interfaces';
import { ISettings } from '../schedule-time-picker/schedule-time-picker.component';
export interface IScheduleTimeModalInput {
    title: string;
    initSettings: ISettings;
    initValue: IScheduleTime;
    onConfirmAsync: (data: IScheduleTime) => Promise<any>;
}
export declare class ScheduleTimeModalComponent extends ObservableModalAbstractComponent<IScheduleTimeModalInput, IScheduleTime> implements OnInit, IHasAlertFeature {
    readonly bsModalRef: BsModalRef;
    protected readonly bsModalService: BsModalService;
    faSpinner: import("@fortawesome/fontawesome-common-types").IconDefinition;
    title: string;
    initSettings: ISettings;
    initValue: IScheduleTime;
    onConfirmAsync: (data: IScheduleTime) => Promise<any>;
    outputValue: IScheduleTime;
    isValid: boolean;
    isSaving: boolean;
    alertProvider: AlertDefaultImpl;
    constructor(bsModalRef: BsModalRef, bsModalService: BsModalService);
    get alerts(): import("@polpware/ngx-alert").IAlertItem[];
    ngOnInit(): void;
    close(): void;
    updateScheduler(evt: IScheduleTime): void;
    validateScheduler(evt: {
        valid: boolean;
    }): void;
    confirmAsync(): Promise<void>;
}
