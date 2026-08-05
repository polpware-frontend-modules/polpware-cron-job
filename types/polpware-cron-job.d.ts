import { IntervalEnum } from '@polpware/fe-utilities';
import * as _polpware_ngx_alert from '@polpware/ngx-alert';
import { IHasAlertFeature, AlertDefaultImpl } from '@polpware/ngx-alert';
import * as i0 from '@angular/core';
import { OnInit, OnDestroy, OnChanges, EventEmitter, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import * as i7 from '@angular/forms';
import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
import { ObservableModalAbstractComponent, IChildModalState, IHasChildModal } from '@polpware/bs-components';
import { IDefaultFormInputs, DefaultFormBaseComponent } from '@polpware/ngx-form-common';
import * as i11 from 'ngx-bootstrap/modal';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import * as _fortawesome_fontawesome_common_types from '@fortawesome/fontawesome-common-types';
import * as _polpware_cron_job from '@polpware/cron-job';
import * as i23 from '@polpware/ngx-i18n';
import { NgxTranslatorImplService, HyperTranslatePipeBase } from '@polpware/ngx-i18n';
import * as i6 from '@angular/common';
import * as i8 from 'ngx-bootstrap/dropdown';
import * as i9 from 'ngx-bootstrap/tabs';
import * as i10 from 'ngx-bootstrap/pagination';
import * as i12 from 'ngx-bootstrap/accordion';
import * as i13 from 'ngx-bootstrap/popover';
import * as i14 from 'ngx-bootstrap/tooltip';
import * as i15 from 'ngx-bootstrap/carousel';
import * as i16 from 'ngx-bootstrap/alert';
import * as i17 from 'ngx-bootstrap/datepicker';
import * as i18 from 'ngx-bootstrap/buttons';
import * as i19 from 'ngx-bootstrap/collapse';
import * as i20 from 'ngx-bootstrap/progressbar';
import * as i21 from 'ngx-bootstrap/timepicker';
import * as i22 from '@40three/ngx-autofocus-directive';
import * as i24 from '@polpware/modal-directives';
import * as i25 from 'ngx-chips';

declare const defaultDict: {
    polpCronJob: {
        asap: string;
        scheduleType: string;
        recurrence: string;
        customExpr: string;
        startDate: string;
        inputDate: string;
        monthOfYear: string;
        dayOfMonth: string;
        dayOfWeek: string;
        time: string;
        excludeHolidays: string;
        holidayLabel: string;
        excludeWeekends: string;
        excludeOthers: string;
        otherLabel: string;
        selectOne: string;
        endDate: string;
        closeBtn: string;
        cancelBtn: string;
        submitBtn: string;
        confirmBtn: string;
        editBtn: string;
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
        messages: {
            working: string;
        };
        notSetYet: string;
        holidaysEditorTitle: string;
        othersEditorTitle: string;
        errors: {
            general: string;
            customExprInvalid: string;
            scheduleTypeRequired: string;
            somethingWrong: string;
        };
    };
};

declare enum ScheduleTypeEnum {
    OneTime = 1,
    Recurrent = 2,
    Asap = 3
}
interface IScheduleTime {
    isRecurrent: boolean;
    recurrence?: IntervalEnum;
    holidays?: string;
    excludeWeekends?: boolean;
    otherDays?: string;
    customExpr?: string;
    startDate?: Date;
    endDate?: Date;
    time?: Date;
    monthOfYear?: number;
    dayOfMonth?: number;
    dayOfWeek?: number;
}
declare function getDefaultScheduleTime(startFromToday?: boolean): IScheduleTime;
declare function isEqualString(left: string, right: string): boolean;
declare function isEqualDate(left: Date, right: Date): boolean;
declare function isEqualTime(left: Date, right: Date): boolean;
declare function isEqualBool(left: boolean, right: boolean): boolean;
declare function isEqualScheduleTime(left: IScheduleTime, right: IScheduleTime): boolean;

interface IMultiDateModalInput {
    title: string;
    initValue: string[];
}
declare class MultiDateModalComponent extends ObservableModalAbstractComponent<IMultiDateModalInput, string[]> implements OnInit, IHasAlertFeature {
    readonly bsModalRef: BsModalRef;
    protected readonly bsModalService: BsModalService;
    title: string;
    initValue: string[];
    outputValue: string[];
    isValid: boolean;
    alertProvider: AlertDefaultImpl;
    constructor(bsModalRef: BsModalRef, bsModalService: BsModalService);
    get alerts(): _polpware_ngx_alert.IAlertItem[];
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
    static ɵcmp: i0.ɵɵComponentDeclaration<MultiDateModalComponent, "polp-bs-multi-date-modal", never, { "title": { "alias": "title"; "required": false; }; "initValue": { "alias": "initValue"; "required": false; }; }, {}, never, never, false, never>;
}

declare class LowLevelUtilsService {
    private readonly _modalService;
    constructor(_modalService: BsModalService);
    showMultiDateEditorAsync(input: IMultiDateModalInput): Promise<string[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LowLevelUtilsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LowLevelUtilsService>;
}

interface ISettings extends IDefaultFormInputs {
    hideSubmitBtn?: boolean;
    hideCancelBtn?: boolean;
    enableAsap?: boolean;
}
interface IFormFields {
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
declare class ScheduleTimePickerComponent extends DefaultFormBaseComponent implements OnInit, OnDestroy, OnChanges, IHasAlertFeature {
    private _builder;
    private readonly _utils;
    initSettings: ISettings;
    initValue: IScheduleTime;
    defaultHolidays: string;
    childStateChanged: EventEmitter<IChildModalState>;
    settings: ISettings;
    prefix: string;
    form: UntypedFormGroup;
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
    private _stopEventPropagation;
    constructor(_builder: UntypedFormBuilder, _utils: LowLevelUtilsService);
    get alerts(): _polpware_ngx_alert.IAlertItem[];
    get isHolidaysExcluded(): any;
    get isOthersExcluded(): any;
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(data: SimpleChanges): void;
    protected updateFormData(data: IScheduleTime): void;
    protected updateFieldVisibility(a: IFormFields): void;
    protected computeOutValue(a: IFormFields): IScheduleTime;
    protected getAsapValue(): IScheduleTime;
    protected getOneTimeValue(a: IFormFields): IScheduleTime;
    protected getRecurrentValue(a: IFormFields): IScheduleTime;
    confirm(): void;
    cancel(): void;
    updateHolidaysAsync(): Promise<void>;
    updateOtherDaysAsync(): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScheduleTimePickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ScheduleTimePickerComponent, "polp-bs-schedule-time-picker", never, { "initSettings": { "alias": "initSettings"; "required": false; }; "initValue": { "alias": "initValue"; "required": false; }; "defaultHolidays": { "alias": "defaultHolidays"; "required": false; }; }, { "childStateChanged": "childStateChanged"; }, never, never, false, never>;
}

interface IScheduleTimeModalInput {
    title: string;
    initSettings: ISettings;
    initValue: IScheduleTime;
    extraClasses: string;
    onConfirmAsync: (data: IScheduleTime) => Promise<any>;
}
declare class ScheduleTimeModalComponent extends ObservableModalAbstractComponent<IScheduleTimeModalInput, IScheduleTime> implements OnInit, IHasAlertFeature, IHasChildModal {
    readonly bsModalRef: BsModalRef;
    protected readonly bsModalService: BsModalService;
    faSpinner: _fortawesome_fontawesome_common_types.IconDefinition;
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
    get alerts(): _polpware_ngx_alert.IAlertItem[];
    ngOnInit(): void;
    close(): void;
    updateScheduler(evt: IScheduleTime): void;
    validateScheduler(evt: {
        valid: boolean;
    }): void;
    updateStyle(evt: IChildModalState): void;
    confirmAsync(): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScheduleTimeModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ScheduleTimeModalComponent, "polp-bs-schedule-time-modal", never, { "title": { "alias": "title"; "required": false; }; "initSettings": { "alias": "initSettings"; "required": false; }; "initValue": { "alias": "initValue"; "required": false; }; "onConfirmAsync": { "alias": "onConfirmAsync"; "required": false; }; "extraClasses": { "alias": "extraClasses"; "required": false; }; }, {}, never, never, false, never>;
}

declare class MultiDatePickerComponent extends DefaultFormBaseComponent implements OnInit {
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
    static ɵcmp: i0.ɵɵComponentDeclaration<MultiDatePickerComponent, "polp-bs-multi-date-picker", never, { "initValue": { "alias": "initValue"; "required": false; }; }, {}, never, never, false, never>;
}

declare class CronJobService {
    constructor();
    parseCronExpr(source: string, target: IScheduleTime): void;
    composeCronExpr(source: IScheduleTime): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<CronJobService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CronJobService>;
}

declare class UtilsService {
    private readonly _modalService;
    constructor(_modalService: BsModalService);
    showScheduleTimeEditorAsync(input: IScheduleTimeModalInput): Promise<_polpware_cron_job.IScheduleTime>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UtilsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UtilsService>;
}

declare class CronJobTranslatorService extends NgxTranslatorImplService {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<CronJobTranslatorService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CronJobTranslatorService>;
}

declare class CronJobHyperTransPipe extends HyperTranslatePipeBase {
    protected _translate: CronJobTranslatorService;
    protected _ref: ChangeDetectorRef;
    constructor(_translate: CronJobTranslatorService, _ref: ChangeDetectorRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<CronJobHyperTransPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<CronJobHyperTransPipe, "cronJobHyperTrans", false>;
}

declare class PolpBsCronJobModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<PolpBsCronJobModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<PolpBsCronJobModule, [typeof ScheduleTimePickerComponent, typeof ScheduleTimeModalComponent, typeof CronJobHyperTransPipe, typeof MultiDatePickerComponent, typeof MultiDateModalComponent], [typeof i6.CommonModule, typeof i7.FormsModule, typeof i7.ReactiveFormsModule, typeof i8.BsDropdownModule, typeof i9.TabsModule, typeof i10.PaginationModule, typeof i11.ModalModule, typeof i12.AccordionModule, typeof i13.PopoverModule, typeof i14.TooltipModule, typeof i15.CarouselModule, typeof i16.AlertModule, typeof i17.BsDatepickerModule, typeof i18.ButtonsModule, typeof i19.CollapseModule, typeof i20.ProgressbarModule, typeof i21.TimepickerModule, typeof i22.FtAutofocusModule, typeof i23.NgxI18nModule, typeof i24.PolpDraggableModule, typeof i25.TagInputModule], [typeof ScheduleTimePickerComponent, typeof ScheduleTimeModalComponent, typeof CronJobHyperTransPipe, typeof MultiDatePickerComponent, typeof MultiDateModalComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<PolpBsCronJobModule>;
}

export { CronJobHyperTransPipe, CronJobService, CronJobTranslatorService, LowLevelUtilsService, MultiDateModalComponent, MultiDatePickerComponent, PolpBsCronJobModule, ScheduleTimeModalComponent, ScheduleTimePickerComponent, ScheduleTypeEnum, UtilsService, defaultDict, getDefaultScheduleTime, isEqualBool, isEqualDate, isEqualScheduleTime, isEqualString, isEqualTime };
export type { IFormFields, IMultiDateModalInput, IScheduleTime, IScheduleTimeModalInput, ISettings };
//# sourceMappingURL=polpware-cron-job.d.ts.map
