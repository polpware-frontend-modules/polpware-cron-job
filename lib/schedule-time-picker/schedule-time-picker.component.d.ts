import { OnChanges, OnDestroy, OnInit, SimpleChanges, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IntervalEnum } from '@polpware/fe-utilities';
import { AlertDefaultImpl, IHasAlertFeature } from '@polpware/ngx-alert';
import { DefaultFormBaseComponent, IDefaultFormInputs } from '@polpware/ngx-form-common';
import { IScheduleTime, ScheduleTypeEnum } from '../interfaces';
import { UtilsService } from '../utils.service';
import { IChildModalState } from '@polpware/bs-components';
export interface ISettings extends IDefaultFormInputs {
    hideSubmitBtn?: boolean;
    hideCancelBtn?: boolean;
}
export interface IFormFields {
    scheduleType: number;
    recurrence: number;
    excludeHolidays: boolean;
    excludeWeekends: boolean;
    excludeOthers: boolean;
    customExpr: string;
    startDate: Date;
    endDate: Date;
    monthOfYear: number;
    dayOfMonth: number;
    dayOfWeek: number;
    time: Date;
}
export declare class ScheduleTimePickerComponent extends DefaultFormBaseComponent implements OnInit, OnDestroy, OnChanges, IHasAlertFeature {
    private _builder;
    private readonly _utils;
    initSettings: ISettings;
    initValue: IScheduleTime;
    defaultHolidays: string;
    childStateChanged: EventEmitter<IChildModalState>;
    settings: ISettings;
    prefix: string;
    form: FormGroup;
    scheduleTypeOptions: {
        value: ScheduleTypeEnum;
        text: string;
    }[];
    recurrenceOptions: {
        value: IntervalEnum;
        text: string;
    }[];
    daysOfWeekOptions: any[];
    monthsOfYearOptions: any[];
    daysOfMonthOptions: any[];
    visibiltyCfg: {
        scheduleType: boolean;
        recurrence: boolean;
        customExpr: boolean;
        excludeHolidays: boolean;
        excludeWeekends: boolean;
        excludeOthers: boolean;
        startDate: boolean;
        endDate: boolean;
        time: boolean;
        monthOfYear: boolean;
        dayOfMonth: boolean;
        dayOfWeek: boolean;
    };
    holidays: string;
    otherDays: string;
    isSaving: boolean;
    alertProvider: AlertDefaultImpl;
    private _subr;
    constructor(_builder: FormBuilder, _utils: UtilsService);
    get alerts(): import("@polpware/ngx-alert").IAlertItem[];
    get isHolidaysExcluded(): any;
    get isOthersExcluded(): any;
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(data: SimpleChanges): void;
    protected updateFormData(data: IScheduleTime): void;
    protected updateFieldVisibility(a: IFormFields): void;
    protected computeOutValue(a: IFormFields): IScheduleTime;
    protected getOneTimeValue(a: IFormFields): IScheduleTime;
    protected getRecurrentValue(a: IFormFields): IScheduleTime;
    confirm(): void;
    cancel(): void;
    updateHolidaysAsync(): Promise<void>;
    updateOtherDaysAsync(): Promise<void>;
}
