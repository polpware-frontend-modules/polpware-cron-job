import { __awaiter, __decorate, __metadata } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { getDaysOfMonth, getDaysOfWeek, getMonthsOfYear, IntervalEnum, safeParseInt } from '@polpware/fe-utilities';
import { AlertDefaultImpl } from '@polpware/ngx-alert';
import { DefaultFormBaseComponent } from '@polpware/ngx-form-common';
import { parseString } from 'cron-parser';
import { getDefaultScheduleTime, ScheduleTypeEnum } from '../interfaces';
import { UtilsService } from '../utils.service';
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
        excludeWeekends: data.excludeWeekends,
        excludeOthers: !!data.otherDays,
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
    constructor(_builder, _utils) {
        super();
        this._builder = _builder;
        this._utils = _utils;
        this.initSettings = {};
        this.initValue = null;
        // todo: We use the company-specific settings ....
        this.defaultHolidays = '';
        this.childStateChanged = new EventEmitter();
        this.settings = {};
        this.prefix = 'stp-' + (new Date).getTime() + '-';
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
        this.holidays = '';
        this.otherDays = '';
        this.alertProvider = new AlertDefaultImpl();
    }
    get alerts() {
        return this.alertProvider.data;
    }
    get isHolidaysExcluded() {
        return this.form.controls['excludeHolidays'].value;
    }
    get isOthersExcluded() {
        return this.form.controls['excludeOthers'].value;
    }
    ngOnInit() {
        this.settings = Object.assign({}, defaultSettings, this.initSettings);
        this.hideCancelBtn = this.settings.hideCancelBtn;
        this.hideSubmitBtn = this.settings.hideSubmitBtn;
        const fields = mapToFormFields(this.initValue);
        this.form = this._builder.group(fields, { validators: [formValidator] });
        this.updateFieldVisibility(this.form.value);
        if (this.initValue) {
            this.holidays = this.initValue.holidays || this.defaultHolidays || '';
            this.otherDays = this.initValue.otherDays || '';
        }
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
        this.holidays = data.holidays || this.defaultHolidays || '';
        this.otherDays = data.otherDays || '';
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
            holidays: a.excludeHolidays ? this.holidays : '',
            excludeWeekends: a.excludeWeekends,
            otherDays: a.excludeOthers ? this.otherDays : '',
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
    updateHolidaysAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            this.childStateChanged.emit({ opened: true });
            const ret = yield this._utils.showMultiDateEditorAsync({
                title: 'polpCronJob.holidaysEditorTitle',
                initValue: (this.holidays || '').split(',').filter(a => !!a)
            });
            this.childStateChanged.emit({ opened: false });
            if (ret) {
                this.holidays = ret.join(',');
                this.notifyValidation();
                this.notifyValueChanges(this.computeOutValue(this.form.value));
            }
        });
    }
    updateOtherDaysAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            this.childStateChanged.emit({ opened: true });
            const ret = yield this._utils.showMultiDateEditorAsync({
                title: 'polpCronJob.othersEditorTitle',
                initValue: (this.otherDays || '').split(',').filter(a => !!a)
            });
            this.childStateChanged.emit({ opened: false });
            if (ret) {
                this.otherDays = ret.join(',');
                this.notifyValidation();
                this.notifyValueChanges(this.computeOutValue(this.form.value));
            }
        });
    }
};
ScheduleTimePickerComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: UtilsService }
];
__decorate([
    Input(),
    __metadata("design:type", Object)
], ScheduleTimePickerComponent.prototype, "initSettings", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ScheduleTimePickerComponent.prototype, "initValue", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ScheduleTimePickerComponent.prototype, "defaultHolidays", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ScheduleTimePickerComponent.prototype, "childStateChanged", void 0);
ScheduleTimePickerComponent = __decorate([
    Component({
        selector: 'polp-bs-schedule-time-picker',
        template: "<form [formGroup]=\"form\" (ngSubmit)=\"confirm()\">\n    <div class=\"form-group row\" *ngIf=\"visibiltyCfg.scheduleType\">\n        <label class=\"col-12 col-md-4 col-form-label\">\n            {{'polpCronJob.scheduleType' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <div class=\"form-check form-check-inline\"\n                 *ngFor=\"let opt of scheduleTypeOptions;let i=index\">\n                <input class=\"form-check-input\"\n                       formControlName=\"scheduleType\"\n                       type=\"radio\"\n                       id=\"{{prefix + 'schedule-type-opt-' + i}}\"\n                       value=\"{{opt.value}}\">\n                <label class=\"form-check-label\"\n                       for=\"{{prefix + 'schedule-type-opt-' + i}}\">\n                    {{opt.text | cronJobHyperTrans}}\n                </label>\n            </div>\n            <span class=\"text-warning d-block my-1 small\" *ngIf=\"form.hasError('scheduleType') && (form.get('scheduleType').dirty || form.get('scheduleType').touched)\">\n                {{'polpCronJob.errors.scheduleTypeRequired' | cronJobHyperTrans}}\n            </span>\n        </div>\n    </div>\n    \n    <div class=\"form-group row\" *ngIf=\"visibiltyCfg.recurrence\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-recurrence'}}\">\n            {{'polpCronJob.recurrence' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <select class=\"form-control\"\n                    id=\"{{prefix + 'schedule-recurrence'}}\"\n                    formControlName=\"recurrence\">\n                <option selected value=\"\">{{'polpCronJob.selectOne' | cronJobHyperTrans}}</option>\n                <option value=\"{{opt.value}}\" *ngFor=\"let opt of recurrenceOptions\">\n                    {{opt.text | cronJobHyperTrans}}\n                </option>\n            </select>\n        </div>\n    </div>\n\n    <div class=\"form-group row\" *ngIf=\"visibiltyCfg.recurrence && visibiltyCfg.customExpr\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-custom-expr'}}\">\n            {{'polpCronJob.customExpr' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <input class=\"form-control\"\n                   type=\"text\"\n                   [autofocus]=\"true\"\n                   id=\"{{prefix + 'schedule-custom-expr'}}\"\n                   formControlName=\"customExpr\">\n            <span class=\"text-warning d-block my-1 small\" *ngIf=\"form.hasError('customExpr') && (form.get('customExpr').dirty || form.get('customExpr').touched)\">\n                {{'polpCronJob.errors.customExprInvalid' | cronJobHyperTrans}}\n            </span>\n        </div>\n    </div>\n\n    <div class=\"form-group row\" *ngIf=\"visibiltyCfg.startDate\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-start-date'}}\">\n            {{'polpCronJob.startDate' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <input class=\"form-control\"\n                   type=\"text\"\n                   id=\"{{prefix + 'schedule-start-date'}}\"\n                   bsDatepicker\n                   [bsConfig]=\"{ adaptivePosition: true }\"\n                   formControlName=\"startDate\">\n        </div>\n    </div>\n\n\n    <div class=\"form-group row\" *ngIf=\"visibiltyCfg.monthOfYear\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-month-of-year'}}\">\n            {{'polpCronJob.monthOfYear' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <select class=\"form-control\"\n                    id=\"{{prefix + 'schedule-month-of-year'}}\"\n                    formControlName=\"monthOfYear\">\n                <option selected value=\"\">...</option>\n                <option value=\"{{opt.value}}\" *ngFor=\"let opt of monthsOfYearOptions\">\n                    {{opt.text | cronJobHyperTrans}}\n                </option>\n            </select>\n        </div>\n    </div>\n\n    <div class=\"form-group row\" *ngIf=\"visibiltyCfg.dayOfMonth\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-day-of-month'}}\">\n            {{'polpCronJob.dayOfMonth' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <select class=\"form-control\"\n                    id=\"{{prefix + 'schedule-day-of-month'}}\"\n                    formControlName=\"dayOfMonth\">\n                <option selected value=\"\">...</option>\n                <option value=\"{{opt.value}}\" *ngFor=\"let opt of daysOfMonthOptions\">\n                    {{opt.text}}\n                </option>\n            </select>\n        </div>\n    </div>\n\n\n    <div class=\"form-group row\" *ngIf=\"visibiltyCfg.dayOfWeek\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-day-of-week'}}\">\n            {{'polpCronJob.dayOfWeek' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <select class=\"form-control\"\n                    id=\"{{prefix + 'schedule-day-of-week'}}\"\n                    formControlName=\"dayOfWeek\">\n                <option selected value=\"\">...</option>\n                <option value=\"{{opt.value}}\" *ngFor=\"let opt of daysOfWeekOptions\">\n                    {{opt.text | cronJobHyperTrans}}\n                </option>\n            </select>\n        </div>\n    </div>\n\n    <div class=\"form-group row\" *ngIf=\"visibiltyCfg.time\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-time'}}\">\n            {{'polpCronJob.time' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <timepicker id=\"{{prefix + 'schedule-time'}}\"\n                        formControlName=\"time\">\n            </timepicker>\n        </div>\n    </div>\n\n    <div class=\"form-group row\" *ngIf=\"visibiltyCfg.excludeHolidays\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-exclude-holidays'}}\">\n            {{'polpCronJob.excludeHolidays' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <div class=\"form-check\">\n                <input class=\"form-check-input position-static\"\n                       type=\"checkbox\"\n                       id=\"{{prefix + 'schedule-exclude-holidays'}}\"\n                       formControlName=\"excludeHolidays\">\n            </div>\n            <div *ngIf=\"isHolidaysExcluded\">\n                {{holidays}}\n                <span *ngIf=\"!holidays\">{{'polpCronJob.notSetYet' | cronJobHyperTrans}}</span>\n                <button class=\"btn btn-link text-info\" (click)=\"updateHolidaysAsync()\">\n                    {{'polpCronJob.editBtn' | cronJobHyperTrans}}\n                </button>\n            </div>\n        </div>\n    </div>\n    <div class=\"form-group row\" *ngIf=\"visibiltyCfg.excludeWeekends\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-exclude-weekends'}}\">\n            {{'polpCronJob.excludeWeekends' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <div class=\"form-check\">\n                <input class=\"form-check-input position-static\"\n                       type=\"checkbox\"\n                       id=\"{{prefix + 'schedule-exclude-weekends'}}\"\n                       formControlName=\"excludeWeekends\">\n            </div>\n        </div>\n    </div>\n    <div class=\"form-group row\" *ngIf=\"visibiltyCfg.excludeOthers\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-exclude-others'}}\">\n            {{'polpCronJob.excludeOthers' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <div class=\"form-check\">\n                <input class=\"form-check-input position-static\"\n                       id=\"{{prefix + 'schedule-exclude-others'}}\"\n                       type=\"checkbox\"\n                       formControlName=\"excludeOthers\">\n            </div>\n            <div *ngIf=\"isOthersExcluded\">\n                {{otherDays}}\n                <span *ngIf=\"!otherDays\">{{'polpCronJob.notSetYet' | cronJobHyperTrans}}</span>\n                <button class=\"btn btn-link text-info\" (click)=\"updateOtherDaysAsync()\">\n                    {{'polpCronJob.editBtn' | cronJobHyperTrans}}\n                </button>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"form-group row\" *ngIf=\"visibiltyCfg.endDate\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-end-date'}}\">\n            {{'polpCronJob.endDate' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <input class=\"form-control\"\n                   type=\"text\"\n                   id=\"{{prefix + 'schedule-end-date'}}\"\n                   bsDatepicker\n                   [bsConfig]=\"{ adaptivePosition: true }\"\n                   formControlName=\"endDate\">\n        </div>\n    </div>\n\n    <ng-container *ngFor=\"let a of alerts\">\n        <alert [type]=\"a.type\" [dismissOnTimeout]=\"a.timeout\">\n            {{a.message | cronJobHyperTrans}}\n        </alert>\n    </ng-container>\n    \n    <div class=\"d-flex justify-content-end mb-4\" *ngIf=\"!hideSubmitBtn || !hideCancelBtn\">\n        <button type=\"button\" class=\"btn btn-warning\"\n                (click)=\"cancel()\" *ngIf=\"!hideCancelBtn\">\n            {{'polpCronJob.cancelBtn' | cronJobHyperTrans}}\n        </button>\n        <button type=\"submit\" class=\"btn btn-success\"\n                *ngIf=\"!hideSubmitBtn\">\n            {{'polpCronJob.submitBtn' | cronJobHyperTrans}}\n        </button>\n    </div>\n</form>\n",
        styles: [""]
    }),
    __metadata("design:paramtypes", [FormBuilder,
        UtilsService])
], ScheduleTimePickerComponent);
export { ScheduleTimePickerComponent };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUtdGltZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2Nyb24tam9iLyIsInNvdXJjZXMiOlsibGliL3NjaGVkdWxlLXRpbWUtcGlja2VyL3NjaGVkdWxlLXRpbWUtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQStDLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEgsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BHLE9BQU8sRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEgsT0FBTyxFQUFFLGdCQUFnQixFQUFvQixNQUFNLHFCQUFxQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSx3QkFBd0IsRUFBc0IsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxzQkFBc0IsRUFBaUIsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBUWhELE1BQU0sZUFBZSxHQUFjO0lBQy9CLGFBQWEsRUFBRSxLQUFLO0lBQ3BCLGFBQWEsRUFBRSxJQUFJO0NBQ3RCLENBQUE7QUFFRCxNQUFNLGFBQWEsR0FBZ0IsQ0FBQyxPQUFrQixFQUEyQixFQUFFO0lBRS9FLE1BQU0sZUFBZSxHQUFHLFlBQVksQ0FBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6RixJQUFJLGVBQWUsSUFBSSxDQUFDLEVBQUU7UUFDdEIs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O1lBN0tpQyxXQUFXO1lBQ1osWUFBWTs7QUFsRWhDO0lBQVIsS0FBSyxFQUFFOztpRUFBOEI7QUFDN0I7SUFBUixLQUFLLEVBQUU7OzhEQUFpQztBQUVoQztJQUFSLEtBQUssRUFBRTs7b0VBQThCO0FBRTVCO0lBQVQsTUFBTSxFQUFFOztzRUFBMEQ7QUFSMUQsMkJBQTJCO0lBTHZDLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSw4QkFBOEI7UUFDeEMsd2lVQUFvRDs7S0FFdkQsQ0FBQztxQ0FxRWdDLFdBQVc7UUFDWixZQUFZO0dBckVoQywyQkFBMkIsQ0FpUHZDO1NBalBZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIFNpbXBsZUNoYW5nZXMsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgVmFsaWRhdGlvbkVycm9ycywgVmFsaWRhdG9yRm4gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBnZXREYXlzT2ZNb250aCwgZ2V0RGF5c09mV2VlaywgZ2V0TW9udGhzT2ZZZWFyLCBJbnRlcnZhbEVudW0sIHNhZmVQYXJzZUludCB9IGZyb20gJ0Bwb2xwd2FyZS9mZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgQWxlcnREZWZhdWx0SW1wbCwgSUhhc0FsZXJ0RmVhdHVyZSB9IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtYWxlcnQnO1xuaW1wb3J0IHsgRGVmYXVsdEZvcm1CYXNlQ29tcG9uZW50LCBJRGVmYXVsdEZvcm1JbnB1dHMgfSBmcm9tICdAcG9scHdhcmUvbmd4LWZvcm0tY29tbW9uJztcbmltcG9ydCB7IHBhcnNlU3RyaW5nIH0gZnJvbSAnY3Jvbi1wYXJzZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBnZXREZWZhdWx0U2NoZWR1bGVUaW1lLCBJU2NoZWR1bGVUaW1lLCBTY2hlZHVsZVR5cGVFbnVtIH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBVdGlsc1NlcnZpY2UgfSBmcm9tICcuLi91dGlscy5zZXJ2aWNlJztcbmltcG9ydCB7IElIYXNDaGlsZE1vZGFsLCBJQ2hpbGRNb2RhbFN0YXRlIH0gZnJvbSAnQHBvbHB3YXJlL2JzLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTZXR0aW5ncyBleHRlbmRzIElEZWZhdWx0Rm9ybUlucHV0cyB7XG4gICAgaGlkZVN1Ym1pdEJ0bj86IGJvb2xlYW47XG4gICAgaGlkZUNhbmNlbEJ0bj86IGJvb2xlYW47XG59XG5cbmNvbnN0IGRlZmF1bHRTZXR0aW5nczogSVNldHRpbmdzID0ge1xuICAgIGhpZGVTdWJtaXRCdG46IGZhbHNlLFxuICAgIGhpZGVDYW5jZWxCdG46IHRydWVcbn1cblxuY29uc3QgZm9ybVZhbGlkYXRvcjogVmFsaWRhdG9yRm4gPSAoY29udHJvbDogRm9ybUdyb3VwKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xuXG4gICAgY29uc3Qgc2NoZWR1bGVUeXBlVmFsID0gc2FmZVBhcnNlSW50KChjb250cm9sLmdldCgnc2NoZWR1bGVUeXBlJykgYXMgRm9ybUNvbnRyb2wpLnZhbHVlKTtcbiAgICBpZiAoc2NoZWR1bGVUeXBlVmFsID09IDApIHtcbiAgICAgICAgcmV0dXJuIHsgc2NoZWR1bGVUeXBlOiB0cnVlIH07XG4gICAgfVxuICAgIGlmIChzY2hlZHVsZVR5cGVWYWwgPT0gMikgeyAvLyBvbmUgdGltZVxuICAgICAgICBjb25zdCByZWN1cnJlbmNlVmFsID0gc2FmZVBhcnNlSW50KChjb250cm9sLmdldCgncmVjdXJyZW5jZScpIGFzIEZvcm1Db250cm9sKS52YWx1ZSk7XG4gICAgICAgIGlmIChyZWN1cnJlbmNlVmFsID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB7IHJlY3VycmVuY2U6IHRydWUgfVxuICAgICAgICB9IGVsc2UgaWYgKHJlY3VycmVuY2VWYWwgPT0gSW50ZXJ2YWxFbnVtLkN1c3RvbSkge1xuICAgICAgICAgICAgY29uc3QgY3VzdG9tRXhwclZhbCA9IChjb250cm9sLmdldCgnY3VzdG9tRXhwcicpIGFzIEZvcm1Db250cm9sKS52YWx1ZTtcbiAgICAgICAgICAgIGlmICghY3VzdG9tRXhwclZhbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IGN1c3RvbUV4cHI6IHRydWUgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gdmFsaWRhdGVcbiAgICAgICAgICAgICAgICBjb25zdCByID0gcGFyc2VTdHJpbmcoY3VzdG9tRXhwclZhbCk7XG4gICAgICAgICAgICAgICAgaWYgKHIuZXJyb3JzICYmIE9iamVjdC5rZXlzKHIuZXJyb3JzKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgY3VzdG9tRXhwcjogdHJ1ZSB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZvcm1GaWVsZHMge1xuICAgIHNjaGVkdWxlVHlwZTogbnVtYmVyO1xuICAgIHJlY3VycmVuY2U6IG51bWJlcjtcbiAgICBleGNsdWRlSG9saWRheXM6IGJvb2xlYW47XG4gICAgZXhjbHVkZVdlZWtlbmRzOiBib29sZWFuO1xuICAgIGV4Y2x1ZGVPdGhlcnM6IGJvb2xlYW47XG4gICAgY3VzdG9tRXhwcjogc3RyaW5nO1xuICAgIHN0YXJ0RGF0ZTogRGF0ZTtcbiAgICBlbmREYXRlOiBEYXRlO1xuICAgIG1vbnRoT2ZZZWFyOiBudW1iZXI7XG4gICAgZGF5T2ZNb250aDogbnVtYmVyO1xuICAgIGRheU9mV2VlazogbnVtYmVyO1xuICAgIHRpbWU6IERhdGU7XG59XG5cbmZ1bmN0aW9uIG1hcFRvRm9ybUZpZWxkcyhkYXRhOiBJU2NoZWR1bGVUaW1lKSB7XG4gICAgY29uc3QgZGVmYXVsdERhdGEgPSBnZXREZWZhdWx0U2NoZWR1bGVUaW1lKCk7XG4gICAgZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHREYXRhLCBkYXRhIHx8IHt9KTtcbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBUaGUgdmFsdWUgZm9yIHRoZSByYWRpbyBidXR0b24gaXMgdHlwZSBvZiBzdHJpbmcuXG4gICAgICAgIHNjaGVkdWxlVHlwZTogKGRhdGEuaXNSZWN1cnJlbnQgPyBTY2hlZHVsZVR5cGVFbnVtLlJlY3VycmVudCA6IFNjaGVkdWxlVHlwZUVudW0uT25lVGltZSkudG9TdHJpbmcoKSxcbiAgICAgICAgcmVjdXJyZW5jZTogZGF0YS5yZWN1cnJlbmNlLFxuICAgICAgICBleGNsdWRlSG9saWRheXM6ICEhZGF0YS5ob2xpZGF5cyxcbiAgICAgICAgZXhjbHVkZVdlZWtlbmRzOiBkYXRhLmV4Y2x1ZGVXZWVrZW5kcyxcbiAgICAgICAgZXhjbHVkZU90aGVyczogISFkYXRhLm90aGVyRGF5cyxcbiAgICAgICAgY3VzdG9tRXhwcjogZGF0YS5jdXN0b21FeHByLFxuICAgICAgICBzdGFydERhdGU6IGRhdGEuc3RhcnREYXRlLFxuICAgICAgICBlbmREYXRlOiBkYXRhLmVuZERhdGUsXG4gICAgICAgIHRpbWU6IGRhdGEudGltZSxcbiAgICAgICAgbW9udGhPZlllYXI6IGRhdGEubW9udGhPZlllYXIsXG4gICAgICAgIGRheU9mV2VlazogZGF0YS5kYXlPZldlZWssXG4gICAgICAgIGRheU9mTW9udGg6IGRhdGEuZGF5T2ZNb250aFxuICAgIH07XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncG9scC1icy1zY2hlZHVsZS10aW1lLXBpY2tlcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NjaGVkdWxlLXRpbWUtcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9zY2hlZHVsZS10aW1lLXBpY2tlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2NoZWR1bGVUaW1lUGlja2VyQ29tcG9uZW50IGV4dGVuZHMgRGVmYXVsdEZvcm1CYXNlQ29tcG9uZW50XG4gICAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBJSGFzQWxlcnRGZWF0dXJlIHtcblxuICAgIEBJbnB1dCgpIGluaXRTZXR0aW5nczogSVNldHRpbmdzID0ge307XG4gICAgQElucHV0KCkgaW5pdFZhbHVlOiBJU2NoZWR1bGVUaW1lID0gbnVsbDtcbiAgICAvLyB0b2RvOiBXZSB1c2UgdGhlIGNvbXBhbnktc3BlY2lmaWMgc2V0dGluZ3MgLi4uLlxuICAgIEBJbnB1dCgpIGRlZmF1bHRIb2xpZGF5czogc3RyaW5nID0gJyc7XG5cbiAgICBAT3V0cHV0KCkgY2hpbGRTdGF0ZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPElDaGlsZE1vZGFsU3RhdGU+KCk7XG5cbiAgICBzZXR0aW5nczogSVNldHRpbmdzID0ge307XG5cbiAgICBwcmVmaXggPSAnc3RwLScgKyAobmV3IERhdGUpLmdldFRpbWUoKSArICctJztcblxuICAgIC8vIFNjaGVkdWxlIG1vZGxlXG4gICAgZm9ybTogRm9ybUdyb3VwO1xuICAgIHNjaGVkdWxlVHlwZU9wdGlvbnMgPSBbe1xuICAgICAgICB2YWx1ZTogU2NoZWR1bGVUeXBlRW51bS5PbmVUaW1lLFxuICAgICAgICB0ZXh0OiAncG9scENyb25Kb2Iub25lVGltZVNjaGVkdWxlJ1xuICAgIH0sIHtcbiAgICAgICAgdmFsdWU6IFNjaGVkdWxlVHlwZUVudW0uUmVjdXJyZW50LFxuICAgICAgICB0ZXh0OiAncG9scENyb25Kb2IucmVjdXJyZW50U2NoZWR1bGUnXG4gICAgfV07XG5cbiAgICByZWN1cnJlbmNlT3B0aW9ucyA9IFt7XG4gICAgICAgIHZhbHVlOiBJbnRlcnZhbEVudW0uRGF5LFxuICAgICAgICB0ZXh0OiAncG9scENyb25Kb2IuZXZlcnlEYXknXG4gICAgfSwge1xuICAgICAgICB2YWx1ZTogSW50ZXJ2YWxFbnVtLldlZWssXG4gICAgICAgIHRleHQ6ICdwb2xwQ3JvbkpvYi5ldmVyeVdlZWsnXG4gICAgfSwge1xuICAgICAgICB2YWx1ZTogSW50ZXJ2YWxFbnVtLk1vbnRoLFxuICAgICAgICB0ZXh0OiAncG9scENyb25Kb2IuZXZlcnlNb250aCdcbiAgICB9LCB7XG4gICAgICAgIHZhbHVlOiBJbnRlcnZhbEVudW0uWWVhcixcbiAgICAgICAgdGV4dDogJ3BvbHBDcm9uSm9iLmV2ZXJ5WWVhcidcbiAgICB9LCB7XG4gICAgICAgIHZhbHVlOiBJbnRlcnZhbEVudW0uQ3VzdG9tLFxuICAgICAgICB0ZXh0OiAncG9scENyb25Kb2IuY3VzdG9tSW50ZXJ2YWwnXG4gICAgfV07XG5cbiAgICBkYXlzT2ZXZWVrT3B0aW9ucyA9IGdldERheXNPZldlZWsoKTtcbiAgICBtb250aHNPZlllYXJPcHRpb25zID0gZ2V0TW9udGhzT2ZZZWFyKCk7XG4gICAgZGF5c09mTW9udGhPcHRpb25zID0gZ2V0RGF5c09mTW9udGgoKTtcblxuICAgIHZpc2liaWx0eUNmZyA9IHtcbiAgICAgICAgc2NoZWR1bGVUeXBlOiB0cnVlLFxuICAgICAgICByZWN1cnJlbmNlOiBmYWxzZSxcbiAgICAgICAgY3VzdG9tRXhwcjogZmFsc2UsXG4gICAgICAgIGV4Y2x1ZGVIb2xpZGF5czogZmFsc2UsXG4gICAgICAgIGV4Y2x1ZGVXZWVrZW5kczogZmFsc2UsXG4gICAgICAgIGV4Y2x1ZGVPdGhlcnM6IGZhbHNlLFxuICAgICAgICBzdGFydERhdGU6IGZhbHNlLFxuICAgICAgICBlbmREYXRlOiBmYWxzZSxcbiAgICAgICAgdGltZTogZmFsc2UsXG4gICAgICAgIG1vbnRoT2ZZZWFyOiBmYWxzZSxcbiAgICAgICAgZGF5T2ZNb250aDogZmFsc2UsXG4gICAgICAgIGRheU9mV2VlazogZmFsc2VcbiAgICB9O1xuXG4gICAgaG9saWRheXM6IHN0cmluZyA9ICcnO1xuICAgIG90aGVyRGF5czogc3RyaW5nID0gJyc7XG5cbiAgICBpc1NhdmluZzogYm9vbGVhbjtcbiAgICBhbGVydFByb3ZpZGVyID0gbmV3IEFsZXJ0RGVmYXVsdEltcGwoKTtcblxuICAgIHByaXZhdGUgX3N1YnI6IFN1YnNjcmlwdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2J1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF91dGlsczogVXRpbHNTZXJ2aWNlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG5cbiAgICBnZXQgYWxlcnRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hbGVydFByb3ZpZGVyLmRhdGE7XG4gICAgfVxuXG4gICAgZ2V0IGlzSG9saWRheXNFeGNsdWRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1snZXhjbHVkZUhvbGlkYXlzJ10udmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGlzT3RoZXJzRXhjbHVkZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbJ2V4Y2x1ZGVPdGhlcnMnXS52YWx1ZTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRTZXR0aW5ncywgdGhpcy5pbml0U2V0dGluZ3MpO1xuICAgICAgICB0aGlzLmhpZGVDYW5jZWxCdG4gPSB0aGlzLnNldHRpbmdzLmhpZGVDYW5jZWxCdG47XG4gICAgICAgIHRoaXMuaGlkZVN1Ym1pdEJ0biA9IHRoaXMuc2V0dGluZ3MuaGlkZVN1Ym1pdEJ0bjtcblxuICAgICAgICBjb25zdCBmaWVsZHMgPSBtYXBUb0Zvcm1GaWVsZHModGhpcy5pbml0VmFsdWUpO1xuICAgICAgICB0aGlzLmZvcm0gPSB0aGlzLl9idWlsZGVyLmdyb3VwKGZpZWxkcywgeyB2YWxpZGF0b3JzOiBbZm9ybVZhbGlkYXRvcl0gfSk7XG4gICAgICAgIHRoaXMudXBkYXRlRmllbGRWaXNpYmlsaXR5KHRoaXMuZm9ybS52YWx1ZSk7XG5cbiAgICAgICAgaWYgKHRoaXMuaW5pdFZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmhvbGlkYXlzID0gdGhpcy5pbml0VmFsdWUuaG9saWRheXMgfHwgdGhpcy5kZWZhdWx0SG9saWRheXMgfHwgJyc7XG4gICAgICAgICAgICB0aGlzLm90aGVyRGF5cyA9IHRoaXMuaW5pdFZhbHVlLm90aGVyRGF5cyB8fCAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3N1YnIgPSB0aGlzLmZvcm0udmFsdWVDaGFuZ2VzLnN1YnNjcmliZShhID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRmllbGRWaXNpYmlsaXR5KGEpO1xuXG4gICAgICAgICAgICB0aGlzLm5vdGlmeVZhbGlkYXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5VmFsdWVDaGFuZ2VzKHRoaXMuY29tcHV0ZU91dFZhbHVlKGEpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuX3N1YnIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhkYXRhOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEuaW5pdFZhbHVlICYmICFkYXRhLmluaXRWYWx1ZS5maXJzdENoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVGb3JtRGF0YShkYXRhLmluaXRWYWx1ZS5jdXJyZW50VmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHVwZGF0ZUZvcm1EYXRhKGRhdGE6IElTY2hlZHVsZVRpbWUpIHtcbiAgICAgICAgY29uc3QgY2hhbmdlcyA9IG1hcFRvRm9ybUZpZWxkcyhkYXRhKTtcbiAgICAgICAgdGhpcy5mb3JtLnNldFZhbHVlKGNoYW5nZXMsIHtcbiAgICAgICAgICAgIGVtaXRFdmVudDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ob2xpZGF5cyA9IGRhdGEuaG9saWRheXMgfHwgdGhpcy5kZWZhdWx0SG9saWRheXMgfHwgJyc7XG4gICAgICAgIHRoaXMub3RoZXJEYXlzID0gZGF0YS5vdGhlckRheXMgfHwgJyc7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHVwZGF0ZUZpZWxkVmlzaWJpbGl0eShhOiBJRm9ybUZpZWxkcykge1xuXG4gICAgICAgIGZvciAobGV0IGsgaW4gdGhpcy52aXNpYmlsdHlDZmcpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnZpc2liaWx0eUNmZy5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJpbHR5Q2ZnW2tdID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcuc2NoZWR1bGVUeXBlID0gdHJ1ZTtcblxuICAgICAgICBjb25zdCBzY2hlZHVsZVR5cGVWYWwgPSBzYWZlUGFyc2VJbnQoYS5zY2hlZHVsZVR5cGUpO1xuXG4gICAgICAgIGlmIChzY2hlZHVsZVR5cGVWYWwgPT0gMSkge1xuICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcuc3RhcnREYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudmlzaWJpbHR5Q2ZnLnRpbWUgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcucmVjdXJyZW5jZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnZpc2liaWx0eUNmZy5leGNsdWRlSG9saWRheXMgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcuZXhjbHVkZVdlZWtlbmRzID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudmlzaWJpbHR5Q2ZnLmV4Y2x1ZGVPdGhlcnMgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcuZW5kRGF0ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnZpc2liaWx0eUNmZy50aW1lID0gdHJ1ZTtcblxuICAgICAgICAgICAgY29uc3QgcmVjdXJyZW50VmFsID0gc2FmZVBhcnNlSW50KGEucmVjdXJyZW5jZSk7XG4gICAgICAgICAgICBpZiAocmVjdXJyZW50VmFsID09IEludGVydmFsRW51bS5ZZWFyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcubW9udGhPZlllYXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJpbHR5Q2ZnLmRheU9mTW9udGggPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZWN1cnJlbnRWYWwgPT0gSW50ZXJ2YWxFbnVtLk1vbnRoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcuZGF5T2ZNb250aCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlY3VycmVudFZhbCA9PSBJbnRlcnZhbEVudW0uV2Vlaykge1xuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJpbHR5Q2ZnLmRheU9mV2VlayA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlY3VycmVudFZhbCA9PSBJbnRlcnZhbEVudW0uQ3VzdG9tKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcudGltZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJpbHR5Q2ZnLmN1c3RvbUV4cHIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNvbXB1dGVPdXRWYWx1ZShhOiBJRm9ybUZpZWxkcykge1xuICAgICAgICBjb25zdCBzY2hlZHVsZVR5cGVWYWwgPSBzYWZlUGFyc2VJbnQoYS5zY2hlZHVsZVR5cGUpO1xuICAgICAgICBjb25zdCBvdXRwdXQgPSBzY2hlZHVsZVR5cGVWYWwgPT0gU2NoZWR1bGVUeXBlRW51bS5PbmVUaW1lID9cbiAgICAgICAgICAgIHRoaXMuZ2V0T25lVGltZVZhbHVlKGEpIDogdGhpcy5nZXRSZWN1cnJlbnRWYWx1ZShhKTtcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0T25lVGltZVZhbHVlKGE6IElGb3JtRmllbGRzKTogSVNjaGVkdWxlVGltZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc1JlY3VycmVudDogZmFsc2UsXG4gICAgICAgICAgICBzdGFydERhdGU6IGEuc3RhcnREYXRlLFxuICAgICAgICAgICAgdGltZTogYS50aW1lXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldFJlY3VycmVudFZhbHVlKGE6IElGb3JtRmllbGRzKTogSVNjaGVkdWxlVGltZSB7XG4gICAgICAgIGNvbnN0IHJlY3VycmVuY2UgPSBzYWZlUGFyc2VJbnQoYS5yZWN1cnJlbmNlKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXNSZWN1cnJlbnQ6IHRydWUsXG4gICAgICAgICAgICByZWN1cnJlbmNlOiByZWN1cnJlbmNlLFxuICAgICAgICAgICAgaG9saWRheXM6IGEuZXhjbHVkZUhvbGlkYXlzID8gdGhpcy5ob2xpZGF5cyA6ICcnLFxuICAgICAgICAgICAgZXhjbHVkZVdlZWtlbmRzOiBhLmV4Y2x1ZGVXZWVrZW5kcyxcbiAgICAgICAgICAgIG90aGVyRGF5czogYS5leGNsdWRlT3RoZXJzID8gdGhpcy5vdGhlckRheXMgOiAnJyxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogYS5zdGFydERhdGUsXG4gICAgICAgICAgICBlbmREYXRlOiBhLmVuZERhdGUsXG4gICAgICAgICAgICB0aW1lOiBhLnRpbWUsXG4gICAgICAgICAgICBtb250aE9mWWVhcjogYS5tb250aE9mWWVhcixcbiAgICAgICAgICAgIGRheU9mTW9udGg6IGEuZGF5T2ZNb250aCxcbiAgICAgICAgICAgIGRheU9mV2VlazogYS5kYXlPZldlZWtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25maXJtKCkge1xuICAgICAgICBpZiAoIXRoaXMuZm9ybS52YWxpZCkge1xuICAgICAgICAgICAgdGhpcy5hbGVydFByb3ZpZGVyLndhcm5pbmcoJ3BvbHBDcm9uSm9iLmVycm9ycy5nZW5lcmFsJywgNTAwMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvdXRwdXQgPSB0aGlzLmNvbXB1dGVPdXRWYWx1ZSh0aGlzLmZvcm0udmFsdWUpO1xuICAgICAgICB0aGlzLm9uU2F2ZS5lbWl0KG91dHB1dCk7XG4gICAgfVxuXG4gICAgY2FuY2VsKCkge1xuICAgICAgICB0aGlzLm9uQ2FuY2VsLmVtaXQoKTtcbiAgICB9XG5cbiAgICBhc3luYyB1cGRhdGVIb2xpZGF5c0FzeW5jKCkge1xuICAgICAgICB0aGlzLmNoaWxkU3RhdGVDaGFuZ2VkLmVtaXQoeyBvcGVuZWQ6IHRydWUgfSk7XG4gICAgICAgIGNvbnN0IHJldCA9IGF3YWl0IHRoaXMuX3V0aWxzLnNob3dNdWx0aURhdGVFZGl0b3JBc3luYyh7XG4gICAgICAgICAgICB0aXRsZTogJ3BvbHBDcm9uSm9iLmhvbGlkYXlzRWRpdG9yVGl0bGUnLFxuICAgICAgICAgICAgaW5pdFZhbHVlOiAodGhpcy5ob2xpZGF5cyB8fCAnJykuc3BsaXQoJywnKS5maWx0ZXIoYSA9PiAhIWEpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNoaWxkU3RhdGVDaGFuZ2VkLmVtaXQoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgICAgICBpZiAocmV0KSB7XG4gICAgICAgICAgICB0aGlzLmhvbGlkYXlzID0gcmV0LmpvaW4oJywnKTtcblxuICAgICAgICAgICAgdGhpcy5ub3RpZnlWYWxpZGF0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVZhbHVlQ2hhbmdlcyh0aGlzLmNvbXB1dGVPdXRWYWx1ZSh0aGlzLmZvcm0udmFsdWUpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIHVwZGF0ZU90aGVyRGF5c0FzeW5jKCkge1xuICAgICAgICB0aGlzLmNoaWxkU3RhdGVDaGFuZ2VkLmVtaXQoeyBvcGVuZWQ6IHRydWUgfSk7XG4gICAgICAgIGNvbnN0IHJldCA9IGF3YWl0IHRoaXMuX3V0aWxzLnNob3dNdWx0aURhdGVFZGl0b3JBc3luYyh7XG4gICAgICAgICAgICB0aXRsZTogJ3BvbHBDcm9uSm9iLm90aGVyc0VkaXRvclRpdGxlJyxcbiAgICAgICAgICAgIGluaXRWYWx1ZTogKHRoaXMub3RoZXJEYXlzIHx8ICcnKS5zcGxpdCgnLCcpLmZpbHRlcihhID0+ICEhYSlcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2hpbGRTdGF0ZUNoYW5nZWQuZW1pdCh7IG9wZW5lZDogZmFsc2UgfSk7XG4gICAgICAgIGlmIChyZXQpIHtcbiAgICAgICAgICAgIHRoaXMub3RoZXJEYXlzID0gcmV0LmpvaW4oJywnKTtcblxuICAgICAgICAgICAgdGhpcy5ub3RpZnlWYWxpZGF0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVZhbHVlQ2hhbmdlcyh0aGlzLmNvbXB1dGVPdXRWYWx1ZSh0aGlzLmZvcm0udmFsdWUpKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIl19