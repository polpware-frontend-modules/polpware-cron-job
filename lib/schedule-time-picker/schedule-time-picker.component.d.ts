import { OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IntervalEnum } from '@polpware/fe-utilities';
import { AlertDefaultImpl, IHasAlertFeature } from '@polpware/ngx-alert';
import { DefaultFormBaseComponent, IDefaultFormInputs } from '@polpware/ngx-form-common';
import { IScheduleTime, ScheduleTypeEnum } from '../interfaces';
import * as i0 from "@angular/core";
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
    defaultRes: {
        polpCronJob: {
            scheduleType: string;
            recurrence: string;
            customExpr: string;
            startDate: string;
            monthOfYear: string;
            dayOfMonth: string;
            dayOfWeek: string;
            time: string;
            excludeHolidays: string;
            holidayLabel: string;
            excludeWeekends: string;
            excludeOthers: string;
            otherLabel: string;
            endDate: string;
            cancelBtn: string;
            submitBtn: string;
            oneTimeSchedule: string;
            recurrentSchedule: string;
            everyDay: string;
            everyWeek: string;
            everyMonth: string;
            everyYear: string;
            customInterval: string;
            January: string;
            February: string;
            March: string;
            April: string;
            May: string;
            June: string;
            July: string;
            August: string;
            September: string;
            October: string;
            November: string;
            December: string;
            Sunday: string;
            Monday: string;
            Tuesday: string;
            Wednesday: string;
            Thursday: string;
            Friday: string;
            Saturday: string;
            errors: {
                general: string;
                customExprInvalid: string;
                scheduleTypeRequired: string;
            };
        };
    };
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
    static ɵfac: i0.ɵɵFactoryDef<ScheduleTimePickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ScheduleTimePickerComponent, "polp-bs-schedule-time-picker", never, { "initSettings": "initSettings"; "initValue": "initValue"; }, {}, never, never>;
}
