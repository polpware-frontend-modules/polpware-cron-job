import { MonthEnum, DayOfWeekEnum, safeParseInt, IntervalEnum, getDaysOfWeek, getMonthsOfYear, getDaysOfMonth } from '@polpware/fe-utilities';
import { __decorate, __metadata, __awaiter } from 'tslib';
import { Input, Component, ɵɵdefineInjectable, Injectable, ɵɵinject, NgModule } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertDefaultImpl } from '@polpware/ngx-alert';
import { DefaultFormBaseComponent } from '@polpware/ngx-form-common';
import { parseString, parseExpression } from 'cron-parser';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { ObservableModalAbstractComponent } from '@polpware/bs-components';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import * as moment from 'moment';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FtAutofocusModule } from '@40three/ngx-autofocus-directive';
import { NgxI18nModule } from '@polpware/ngx-i18n';
import { PolpDraggableModule } from '@polpware/modal-directives';

const defaultDict = {
    polpCronJob: {
        scheduleType: 'Schedule Type',
        recurrence: 'Recurrence',
        customExpr: 'Custom CRON expression',
        startDate: 'Start date',
        monthOfYear: 'Month',
        dayOfMonth: 'Day',
        dayOfWeek: 'Day',
        time: 'Time',
        excludeHolidays: 'Exclude holidays',
        holidayLabel: 'Define the list of holidays',
        excludeWeekends: 'Exclude weekends',
        excludeOthers: 'Other exceptions',
        otherLabel: 'Define the list of exceptions',
        endDate: 'End date',
        cancelBtn: 'Cancel',
        submitBtn: 'Submit',
        oneTimeSchedule: 'One time',
        recurrentSchedule: 'Recurrent',
        everyDay: 'Every day',
        everyWeek: 'Every week',
        everyMonth: 'Every month',
        everyYear: 'Every year',
        customInterval: 'Custom',
        January: 'January',
        February: 'February',
        March: 'March',
        April: 'April',
        May: 'May',
        June: 'June',
        July: 'July',
        August: 'August',
        September: 'September',
        October: 'October',
        November: 'November',
        December: 'December',
        Sunday: 'Sunday',
        Monday: 'Monday',
        Tuesday: 'Tuesday',
        Wednesday: 'Wednesday',
        Thursday: 'Thursday',
        Friday: 'Friday',
        Saturday: 'Saturday',
        errors: {
            general: 'Some of your inputs are not valid. Please check them!',
            customExprInvalid: 'Invalid CRON expression',
            scheduleTypeRequired: 'Please select one schedule type!'
        }
    }
};

var ScheduleTypeEnum;
(function (ScheduleTypeEnum) {
    ScheduleTypeEnum[ScheduleTypeEnum["OneTime"] = 1] = "OneTime";
    ScheduleTypeEnum[ScheduleTypeEnum["Recurrent"] = 2] = "Recurrent";
})(ScheduleTypeEnum || (ScheduleTypeEnum = {}));
function getDefaultScheduleTime() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return {
        isRecurrent: false,
        recurrence: 0,
        holidays: '',
        excludeWeekends: false,
        otherDays: '',
        customExpr: '',
        startDate: tomorrow,
        endDate: null,
        time: today,
        monthOfYear: MonthEnum.January,
        dayOfMonth: 1,
        dayOfWeek: DayOfWeekEnum.Monday
    };
}

const defaultSettings = {
    hideSubmitBtn: false,
    hideCancelBtn: true
};
const formValidator = (control) => {
    const scheduleTypeVal = safeParseInt(control.get('scheduleType').value);
    if (scheduleTypeVal == 0) {
        return { scheduleType: true };
    }
    if (scheduleTypeVal == 2) { // one time
        const recurrenceVal = safeParseInt(control.get('recurrence').value);
        if (recurrenceVal == 0) {
            return { recurrence: true };
        }
        else if (recurrenceVal == IntervalEnum.Custom) {
            const customExprVal = control.get('customExpr').value;
            if (!customExprVal) {
                return { customExpr: true };
            }
            else {
                // validate
                const r = parseString(customExprVal);
                if (r.errors && Object.keys(r.errors).length) {
                    return { customExpr: true };
                }
            }
        }
    }
};
const ɵ0 = formValidator;
function mapToFormFields(data) {
    const defaultData = getDefaultScheduleTime();
    data = Object.assign({}, defaultData, data || {});
    return {
        // The value for the radio button is type of string.
        scheduleType: (data.isRecurrent ? ScheduleTypeEnum.Recurrent : ScheduleTypeEnum.OneTime).toString(),
        recurrence: data.recurrence,
        excludeHolidays: !!data.holidays,
        holidays: data.holidays,
        excludeWeekends: data.excludeWeekends,
        excludeOthers: !!data.otherDays,
        otherDays: data.otherDays,
        customExpr: data.customExpr,
        startDate: data.startDate,
        endDate: data.endDate,
        time: data.time,
        monthOfYear: data.monthOfYear,
        dayOfWeek: data.dayOfWeek,
        dayOfMonth: data.dayOfMonth
    };
}
let ScheduleTimePickerComponent = class ScheduleTimePickerComponent extends DefaultFormBaseComponent {
    constructor(_builder) {
        super();
        this._builder = _builder;
        this.initSettings = {};
        this.initValue = null;
        this.settings = {};
        this.defaultRes = defaultDict;
        this.scheduleTypeOptions = [{
                value: ScheduleTypeEnum.OneTime,
                text: 'polpCronJob.oneTimeSchedule'
            }, {
                value: ScheduleTypeEnum.Recurrent,
                text: 'polpCronJob.recurrentSchedule'
            }];
        this.recurrenceOptions = [{
                value: IntervalEnum.Day,
                text: 'polpCronJob.everyDay'
            }, {
                value: IntervalEnum.Week,
                text: 'polpCronJob.everyWeek'
            }, {
                value: IntervalEnum.Month,
                text: 'polpCronJob.everyMonth'
            }, {
                value: IntervalEnum.Year,
                text: 'polpCronJob.everyYear'
            }, {
                value: IntervalEnum.Custom,
                text: 'polpCronJob.customInterval'
            }];
        this.daysOfWeekOptions = getDaysOfWeek();
        this.monthsOfYearOptions = getMonthsOfYear();
        this.daysOfMonthOptions = getDaysOfMonth();
        this.visibiltyCfg = {
            scheduleType: true,
            recurrence: false,
            customExpr: false,
            excludeHolidays: false,
            excludeWeekends: false,
            excludeOthers: false,
            startDate: false,
            endDate: false,
            time: false,
            monthOfYear: false,
            dayOfMonth: false,
            dayOfWeek: false
        };
        this.alertProvider = new AlertDefaultImpl();
    }
    get alerts() {
        return this.alertProvider.data;
    }
    ngOnInit() {
        this.settings = Object.assign({}, defaultSettings, this.initSettings);
        this.hideCancelBtn = this.settings.hideCancelBtn;
        this.hideSubmitBtn = this.settings.hideSubmitBtn;
        const fields = mapToFormFields(this.initValue);
        this.form = this._builder.group(fields, { validators: [formValidator] });
        this.updateFieldVisibility(this.form.value);
        this._subr = this.form.valueChanges.subscribe(a => {
            this.updateFieldVisibility(a);
            this.notifyValidation();
            this.notifyValueChanges(this.computeOutValue(a));
        });
    }
    ngOnDestroy() {
        this._subr.unsubscribe();
    }
    ngOnChanges(data) {
        if (data && data.initValue && !data.initValue.firstChange) {
            this.updateFormData(data.initValue.currentValue);
        }
    }
    updateFormData(data) {
        const changes = mapToFormFields(data);
        this.form.setValue(changes, {
            emitEvent: true
        });
    }
    updateFieldVisibility(a) {
        for (let k in this.visibiltyCfg) {
            if (this.visibiltyCfg.hasOwnProperty(k)) {
                this.visibiltyCfg[k] = false;
            }
        }
        this.visibiltyCfg.scheduleType = true;
        const scheduleTypeVal = safeParseInt(a.scheduleType);
        if (scheduleTypeVal == 1) {
            this.visibiltyCfg.startDate = true;
            this.visibiltyCfg.time = true;
        }
        else {
            this.visibiltyCfg.recurrence = true;
            this.visibiltyCfg.excludeHolidays = true;
            this.visibiltyCfg.excludeWeekends = true;
            this.visibiltyCfg.excludeOthers = true;
            this.visibiltyCfg.endDate = true;
            this.visibiltyCfg.time = true;
            const recurrentVal = safeParseInt(a.recurrence);
            if (recurrentVal == IntervalEnum.Year) {
                this.visibiltyCfg.monthOfYear = true;
                this.visibiltyCfg.dayOfMonth = true;
            }
            else if (recurrentVal == IntervalEnum.Month) {
                this.visibiltyCfg.dayOfMonth = true;
            }
            else if (recurrentVal == IntervalEnum.Week) {
                this.visibiltyCfg.dayOfWeek = true;
            }
            else if (recurrentVal == IntervalEnum.Custom) {
                this.visibiltyCfg.time = false;
                this.visibiltyCfg.customExpr = true;
            }
        }
    }
    computeOutValue(a) {
        const scheduleTypeVal = safeParseInt(a.scheduleType);
        const output = scheduleTypeVal == ScheduleTypeEnum.OneTime ?
            this.getOneTimeValue(a) : this.getRecurrentValue(a);
        return output;
    }
    getOneTimeValue(a) {
        return {
            isRecurrent: false,
            startDate: a.startDate,
            time: a.time
        };
    }
    getRecurrentValue(a) {
        const recurrence = safeParseInt(a.recurrence);
        return {
            isRecurrent: true,
            recurrence: recurrence,
            holidays: a.excludeHolidays ? a.holidays : '',
            excludeWeekends: a.excludeWeekends,
            otherDays: a.excludeOthers ? a.otherDays : '',
            startDate: a.startDate,
            endDate: a.endDate,
            time: a.time,
            monthOfYear: a.monthOfYear,
            dayOfMonth: a.dayOfMonth,
            dayOfWeek: a.dayOfWeek
        };
    }
    confirm() {
        if (!this.form.valid) {
            this.alertProvider.warning('polpCronJob.errors.general', 5000);
            return;
        }
        const output = this.computeOutValue(this.form.value);
        this.onSave.emit(output);
    }
    cancel() {
        this.onCancel.emit();
    }
};
ScheduleTimePickerComponent.ctorParameters = () => [
    { type: FormBuilder }
];
__decorate([
    Input(),
    __metadata("design:type", Object)
], ScheduleTimePickerComponent.prototype, "initSettings", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ScheduleTimePickerComponent.prototype, "initValue", void 0);
ScheduleTimePickerComponent = __decorate([
    Component({
        selector: 'polp-bs-schedule-time-picker',
        template: "<form [formGroup]=\"form\" (ngSubmit)=\"confirm()\">\n    <div class=\"form-group row\" *ngIf=\"visibiltyCfg.scheduleType\">\n        <label class=\"col-12 col-md-4 col-form-label\">\n            {{'polpCronJob.scheduleType' | hyperTrans:null:null:defaultRes}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <div class=\"form-check form-check-inline\"\n                 *ngFor=\"let opt of scheduleTypeOptions;let i=index\">\n                <input class=\"form-check-input\"\n                       formControlName=\"scheduleType\"\n                       type=\"radio\"\n                       id=\"{{'schedule-type-opt-' + i}}\"\n                       value=\"{{opt.value}}\">\n                <label class=\"form-check-label\"\n                       for=\"{{'schedule-type-opt-' + i}}\">\n                    {{opt.text | hyperTrans:null:null:defaultRes}}\n                </label>\n            </div>\n            <span class=\"text-warning d-block my-1 small\" *ngIf=\"form.hasError('scheduleType') && (form.get('scheduleType').dirty || form.get('scheduleType').touched)\">\n                {{'polpCronJob.errors.scheduleTypeRequired' | hyperTrans:null:null:defaultRes}}\n            </span>\n        </div>\n    </div>\n    \n    <div class=\"form-group row\" *ngIf=\"visibiltyCfg.recurrence\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"schedule-recurrence\">\n            {{'polpCronJob.recurrence' | hyperTrans:null:null:defaultRes}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <select class=\"form-control\"\n                    id=\"schedule-recurrence\"\n                    formControlName=\"recurrence\">\n                <option selected value=\"\">...</option>\n                <option value=\"{{opt.value}}\" *ngFor=\"let opt of recurrenceOptions\">\n                    {{opt.text | hyperTrans:null:null:defaultRes}}\n                </option>\n            </select>\n        </div>\n    </div>\n\n    <div class=\"form-group row\" *ngIf=\"visibiltyCfg.recurrence && visibiltyCfg.customExpr\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"schedule-custom-expr\">\n            {{'polpCronJob.customExpr' | hyperTrans:null:null:defaultRes}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <input class=\"form-control\"\n                   type=\"text\"\n                   [autofocus]=\"true\"\n                   id=\"schedule-custom-expr\"\n                   formControlName=\"customExpr\">\n            <span class=\"text-warning d-block my-1 small\" *ngIf=\"form.hasError('customExpr') && (form.get('customExpr').dirty || form.get('customExpr').touched)\">\n                {{'polpCronJob.errors.customExprInvalid' | hyperTrans:null:null:defaultRes}}\n            </span>\n        </div>\n    </div>\n\n    <div class=\"form-group row\" *ngIf=\"visibiltyCfg.startDate\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"schedule-start-date\">\n            {{'polpCronJob.startDate' | hyperTrans:null:null:defaultRes}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <input class=\"form-control\"\n                   type=\"text\"\n                   id=\"schedule-start-date\"\n                   bsDatepicker\n                   [bsConfig]=\"{ adaptivePosition: true }\"\n                   formControlName=\"startDate\">\n        </div>\n    </div>\n\n\n    <div class=\"form-group row\" *ngIf=\"visibiltyCfg.monthOfYear\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"schedule-month-of-year\">\n            {{'polpCronJob.monthOfYear' | hyperTrans:null:null:defaultRes}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <select class=\"form-control\"\n                    id=\"schedule-month-of-year\"\n                    formControlName=\"monthOfYear\">\n                <option selected value=\"\">...</option>\n                <option value=\"{{opt.value}}\" *ngFor=\"let opt of monthsOfYearOptions\">\n                    {{opt.text | hyperTrans:null:null:defaultRes}}\n                </option>\n            </select>\n        </div>\n    </div>\n\n    <div class=\"form-group row\" *ngIf=\"visibiltyCfg.dayOfMonth\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"schedule-day-of-month\">\n            {{'polpCronJob.dayOfMonth' | hyperTrans:null:null:defaultRes}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <select class=\"form-control\"\n                    id=\"schedule-day-of-month\"\n                    formControlName=\"dayOfMonth\">\n                <option selected value=\"\">...</option>\n                <option value=\"{{opt.value}}\" *ngFor=\"let opt of daysOfMonthOptions\">\n                    {{opt.text}}\n                </option>\n            </select>\n        </div>\n    </div>\n\n\n    <div class=\"form-group row\" *ngIf=\"visibiltyCfg.dayOfWeek\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"schedule-day-of-week\">\n            {{'polpCronJob.dayOfWeek' | hyperTrans:null:null:defaultRes}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <select class=\"form-control\"\n                    id=\"schedule-day-of-week\"\n                    formControlName=\"dayOfWeek\">\n                <option selected value=\"\">...</option>\n                <option value=\"{{opt.value}}\" *ngFor=\"let opt of daysOfWeekOptions\">\n                    {{opt.text | hyperTrans:null:null:defaultRes}}\n                </option>\n            </select>\n        </div>\n    </div>\n\n    <div class=\"form-group row\" *ngIf=\"visibiltyCfg.time\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"schedule-time\">\n            {{'polpCronJob.time' | hyperTrans:null:null:defaultRes}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <timepicker id=\"schedule-time\"\n                        formControlName=\"time\">\n            </timepicker>\n        </div>\n    </div>\n\n    <div class=\"form-group row\" *ngIf=\"visibiltyCfg.excludeHolidays\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"schedule-exclude-holidays\">\n            {{'polpCronJob.excludeHolidays' | hyperTrans:null:null:defaultRes}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <div class=\"form-check\">\n                <input class=\"form-check-input position-static\"\n                       type=\"checkbox\"\n                       id=\"schedule-exclude-holidays\"\n                       formControlName=\"excludeHolidays\">\n            </div>\n            <div>\n                {{'polpCronJob.holidayLabel' | hyperTrans:null:null:defaultRes}}\n            </div>\n        </div>\n    </div>\n    <div class=\"form-group row\" *ngIf=\"visibiltyCfg.excludeWeekends\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"schedule-exclude-weekends\">\n            {{'polpCronJob.excludeWeekends' | hyperTrans:null:null:defaultRes}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <div class=\"form-check\">\n                <input class=\"form-check-input position-static\"\n                       type=\"checkbox\"\n                       id=\"schedule-exclude-weekends\"\n                       formControlName=\"excludeWeekends\">\n            </div>\n        </div>\n    </div>\n    <div class=\"form-group row\" *ngIf=\"visibiltyCfg.excludeOthers\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"schedule-exclude-others\">\n            {{'polpCronJob.excludeOthers' | hyperTrans:null:null:defaultRes}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <div class=\"form-check\">\n                <input class=\"form-check-input position-static\"\n                       id=\"schedule-exclude-others\"\n                       type=\"checkbox\"\n                       formControlName=\"excludeOthers\">\n            </div>\n            <div>\n                {{'polpCronJob.otherLabel' | hyperTrans:null:null:defaultRes}}\n            </div>\n        </div>\n    </div>\n\n    <div class=\"form-group row\" *ngIf=\"visibiltyCfg.endDate\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"schedule-end-date\">\n            {{'polpCronJob.endDate' | hyperTrans:null:null:defaultRes}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <input class=\"form-control\"\n                   type=\"text\"\n                   id=\"schedule-end-date\"\n                   bsDatepicker\n                   [bsConfig]=\"{ adaptivePosition: true }\"\n                   formControlName=\"endDate\">\n        </div>\n    </div>\n\n    <ng-container *ngFor=\"let a of alerts\">\n        <alert [type]=\"a.type\" [dismissOnTimeout]=\"a.timeout\">\n            {{a.message | hyperTrans:null:null:defaultRes}}\n        </alert>\n    </ng-container>\n    \n    <div class=\"d-flex justify-content-end mb-4\" *ngIf=\"!hideSubmitBtn || !hideCancelBtn\">\n        <button type=\"button\" class=\"btn btn-warning\"\n                (click)=\"cancel()\" *ngIf=\"!hideCancelBtn\">\n            {{'polpCronJob.cancelBtn' | hyperTrans:null:null:defaultRes}}\n        </button>\n        <button type=\"submit\" class=\"btn btn-success\"\n                *ngIf=\"!hideSubmitBtn\">\n            {{'polpCronJob.submitBtn' | hyperTrans:null:null:defaultRes}}\n        </button>\n    </div>\n</form>\n",
        styles: [""]
    }),
    __metadata("design:paramtypes", [FormBuilder])
], ScheduleTimePickerComponent);

let ScheduleTimeModalComponent = class ScheduleTimeModalComponent extends ObservableModalAbstractComponent {
    constructor(bsModalRef, bsModalService) {
        super();
        this.bsModalRef = bsModalRef;
        this.bsModalService = bsModalService;
        this.faSpinner = faSpinner;
        this.title = '';
        this.alertProvider = new AlertDefaultImpl();
    }
    get alerts() {
        return this.alertProvider.data;
    }
    ngOnInit() {
    }
    close() {
        this.closeModal(this.outputValue);
    }
    updateScheduler(evt) {
        this.outputValue = evt;
    }
    validateScheduler(evt) {
        if (evt) {
            this.isValid = evt.valid;
        }
    }
    confirmAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            this.alertProvider.clean();
            if (!this.isValid) {
                this.alertProvider.warning('Data is not valid!');
                return;
            }
            this.isSaving = true;
            this.alertProvider.warning('Working ....');
            try {
                yield this.onConfirmAsync(this.outputValue);
                this.closeModal(this.outputValue);
            }
            catch (ex) {
                this.alertProvider.clean();
                this.alertProvider.danger('Something went wrong. Please try later!');
            }
            finally {
                this.isSaving = false;
            }
        });
    }
};
ScheduleTimeModalComponent.ctorParameters = () => [
    { type: BsModalRef },
    { type: BsModalService }
];
__decorate([
    Input(),
    __metadata("design:type", String)
], ScheduleTimeModalComponent.prototype, "title", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ScheduleTimeModalComponent.prototype, "initSettings", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ScheduleTimeModalComponent.prototype, "initValue", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], ScheduleTimeModalComponent.prototype, "onConfirmAsync", void 0);
ScheduleTimeModalComponent = __decorate([
    Component({
        selector: 'polp-bs-schedule-time-modal',
        template: "<div class=\"modal-header\" polpModalDraggable>\n    <h4 class=\"modal-title\">{{title}}</h4>\n</div>\n<div class=\"modal-body\">\n    <polp-bs-schedule-time-picker [initSettings]=\"initSettings\"\n                                  [initValue]=\"initValue\"\n                                  (onValidation)=\"validateScheduler($event)\"\n                                  (onValueChanged)=\"updateScheduler($event)\">\n    </polp-bs-schedule-time-picker>\n    \n    <ng-container *ngFor=\"let a of alerts\">\n        <alert [type]=\"a.type\" [dismissOnTimeout]=\"a.timeout\">\n            {{a.message}}\n        </alert>\n    </ng-container>\n    \n</div>\n<div class=\"modal-footer\">\n    <div class=\"d-flex justify-content-end\">\n        <button class=\"btn btn-secondary mr-2\" (click)=\"close()\">\n            Close\n        </button>\n        <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"isValid\"\n                (click)=\"confirmAsync()\">\n            Confirm\n            <fa-icon [icon]=\"faSpinner\" [spin]=\"true\" class=\"ml-1\" *ngIf=\"isSaving\"></fa-icon>\n        </button>\n    </div>\n</div>\n",
        styles: [""]
    }),
    __metadata("design:paramtypes", [BsModalRef,
        BsModalService])
], ScheduleTimeModalComponent);

let CronJobService = class CronJobService {
    constructor() { }
    parseCronExpr(source, target) {
        const a = parseExpression(source);
        // Case 1 (every year)
        if (a.fields.month.length == 1 && a.fields.dayOfMonth.length == 1) {
            target.recurrence = IntervalEnum.Year;
        }
        else if (a.fields.month.length == 12 &&
            a.fields.dayOfMonth.length == 1 &&
            a.fields.dayOfWeek.length == 8) {
            target.recurrence = IntervalEnum.Month;
        }
        else if (a.fields.month.length == 12 &&
            a.fields.dayOfMonth.length == 31 &&
            a.fields.dayOfWeek.length == 1) {
            target.recurrence = IntervalEnum.Week;
        }
        else if (a.fields.month.length == 12 &&
            a.fields.dayOfMonth.length == 31 &&
            a.fields.dayOfWeek.length == 8) {
            target.recurrence == IntervalEnum.Day;
        }
        else {
            target.recurrence = IntervalEnum.Custom;
        }
        // A utc time 
        const today = new Date();
        const timeInUtc = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate(), a.fields.hour[0] || 0, a.fields.minute[0] || 0));
        // Time
        target.time = timeInUtc;
    }
    composeCronExpr(source) {
        // IsRecurrent true
        // Convert it into Utc time
        const utc = new Date(source.time);
        const timeWrapper = moment(utc);
        const hour = timeWrapper.utc().hour();
        if (source.recurrence == IntervalEnum.Year) {
            return `${utc.getMinutes()} ${hour} ${source.dayOfMonth} ${source.monthOfYear} *`;
        }
        else if (source.recurrence == IntervalEnum.Month) {
            return `${utc.getMinutes()} ${hour} ${source.dayOfMonth} * *`;
        }
        else if (source.recurrence == IntervalEnum.Week) {
            return `${utc.getMinutes()} ${hour} * * ${source.dayOfWeek}`;
        }
        else if (source.recurrence == IntervalEnum.Day) {
            return `${utc.getMinutes()} ${hour} * * *`;
        }
        else if (source.recurrence == IntervalEnum.Custom) {
            return source.customExpr;
        }
        return '';
    }
};
CronJobService.ɵprov = ɵɵdefineInjectable({ factory: function CronJobService_Factory() { return new CronJobService(); }, token: CronJobService, providedIn: "root" });
CronJobService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], CronJobService);

let UtilsService = class UtilsService {
    constructor(_modalService) {
        this._modalService = _modalService;
    }
    showScheduleTimeEditorAsync(input) {
        const modalRef = this._modalService.show(ScheduleTimeModalComponent, {
            animated: true,
            ignoreBackdropClick: true,
            initialState: Object.assign({}, input),
            keyboard: false,
            class: 'modal-dialog-centered'
        });
        return modalRef.content.result.toPromise();
    }
};
UtilsService.ctorParameters = () => [
    { type: BsModalService }
];
UtilsService.ɵprov = ɵɵdefineInjectable({ factory: function UtilsService_Factory() { return new UtilsService(ɵɵinject(BsModalService)); }, token: UtilsService, providedIn: "root" });
UtilsService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [BsModalService])
], UtilsService);

let PolpBsCronJobModule = class PolpBsCronJobModule {
};
PolpBsCronJobModule = __decorate([
    NgModule({
        declarations: [
            ScheduleTimePickerComponent,
            ScheduleTimeModalComponent
        ],
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            BsDropdownModule,
            TabsModule,
            PaginationModule,
            ModalModule,
            AccordionModule,
            PopoverModule,
            TooltipModule,
            CarouselModule,
            AlertModule,
            BsDatepickerModule,
            ButtonsModule,
            CollapseModule,
            ProgressbarModule,
            TimepickerModule,
            FtAutofocusModule,
            NgxI18nModule,
            PolpDraggableModule
        ],
        exports: [
            ScheduleTimePickerComponent,
            ScheduleTimeModalComponent
        ]
    })
], PolpBsCronJobModule);

/*
 * Public API Surface of cron-job
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CronJobService, PolpBsCronJobModule, ScheduleTimeModalComponent, ScheduleTimePickerComponent, ScheduleTypeEnum, UtilsService, defaultDict, getDefaultScheduleTime, ɵ0 };
//# sourceMappingURL=polpware-cron-job.js.map
