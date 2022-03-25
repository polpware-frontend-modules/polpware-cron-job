import { OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IntervalEnum } from '@polpware/fe-utilities';
import { AlertDefaultImpl, IHasAlertFeature } from '@polpware/ngx-alert';
import { DefaultFormBaseComponent, IDefaultFormInputs } from '@polpware/ngx-form-common';
import { IScheduleTime, ScheduleTypeEnum } from '../interfaces';
export interface ISettings extends IDefaultFormInputs {
    hideSubmitBtn?: boolean;
    hideCancelBtn?: boolean;
}
export interface IFormFields {
    scheduleType: number;
    recurrence: number;
    excludeHolidays: boolean;
    holidays: string;
    excludeWeekends: boolean;
    excludeOthers: boolean;
    otherDays: string;
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
    initSettings: ISettings;
    initValue: IScheduleTime;
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
    isSaving: boolean;
    alertProvider: AlertDefaultImpl;
    private _subr;
    constructor(_builder: FormBuilder);
    get alerts(): import("@polpware/ngx-alert").IAlertItem[];
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
}
