import { __awaiter, __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
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
            const ret = yield this._utils.showMultiDateEditorAsync({
                title: 'polpCronJob.holidaysEditorTitle',
                initValue: (this.holidays || '').split(',').filter(a => !!a)
            });
            if (ret) {
                this.holidays = ret.join(',');
                this.notifyValueChanges(this.computeOutValue(this.form.value));
            }
        });
    }
    updateOtherDaysAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            const ret = yield this._utils.showMultiDateEditorAsync({
                title: 'polpCronJob.othersEditorTitle',
                initValue: (this.otherDays || '').split(',').filter(a => !!a)
            });
            if (ret) {
                this.otherDays = ret.join(',');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUtdGltZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2Nyb24tam9iLyIsInNvdXJjZXMiOlsibGliL3NjaGVkdWxlLXRpbWUtcGlja2VyL3NjaGVkdWxlLXRpbWUtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQStDLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRyxPQUFPLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BILE9BQU8sRUFBRSxnQkFBZ0IsRUFBb0IsTUFBTSxxQkFBcUIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsd0JBQXdCLEVBQXNCLE1BQU0sMkJBQTJCLENBQUM7QUFDekYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUUxQyxPQUFPLEVBQUUsc0JBQXNCLEVBQWlCLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQU9oRCxNQUFNLGVBQWUsR0FBYztJQUMvQixhQUFhLEVBQUUsS0FBSztJQUNwQixhQUFhLEVBQUUsSUFBSTtDQUN0QixDQUFBO0FBRUQsTUFBTSxhQUFhLEdBQWdCLENBQUMsT0FBa0IsRUFBMkIsRUFBRTtJQUUvRSxNQUFNLGVBQWUsR0FBRyxZQUFZLENBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekYsSUFBSSxlQUFlLElBQUksQ0FBQyxFQUFFO1FBQ3RCLE9BQU8sRUFBRSxZQUFZLEVBQUUs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LENBQUMsQ0FBQyxDQUFDO2FBQ2xFO1FBQ0wsQ0FBQztLQUFBO0lBRUssb0JBQW9COztZQUN0QixNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsd0JBQXdCLENBQUM7Z0JBQ25ELEtBQUssRUFBRSwrQkFBK0I7Z0JBQ3RDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDaEUsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxHQUFHLEVBQUU7Z0JBQ0wsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUUvQixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDbEU7UUFDTCxDQUFDO0tBQUE7Q0FFSixDQUFBOztZQXZLaUMsV0FBVztZQUNaLFlBQVk7O0FBaEVoQztJQUFSLEtBQUssRUFBRTs7aUVBQThCO0FBQzdCO0lBQVIsS0FBSyxFQUFFOzs4REFBaUM7QUFFaEM7SUFBUixLQUFLLEVBQUU7O29FQUE4QjtBQU43QiwyQkFBMkI7SUFMdkMsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLDhCQUE4QjtRQUN4Qyx3aVVBQW9EOztLQUV2RCxDQUFDO3FDQW1FZ0MsV0FBVztRQUNaLFlBQVk7R0FuRWhDLDJCQUEyQixDQXlPdkM7U0F6T1ksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIFZhbGlkYXRpb25FcnJvcnMsIFZhbGlkYXRvckZuIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgZ2V0RGF5c09mTW9udGgsIGdldERheXNPZldlZWssIGdldE1vbnRoc09mWWVhciwgSW50ZXJ2YWxFbnVtLCBzYWZlUGFyc2VJbnQgfSBmcm9tICdAcG9scHdhcmUvZmUtdXRpbGl0aWVzJztcbmltcG9ydCB7IEFsZXJ0RGVmYXVsdEltcGwsIElIYXNBbGVydEZlYXR1cmUgfSBmcm9tICdAcG9scHdhcmUvbmd4LWFsZXJ0JztcbmltcG9ydCB7IERlZmF1bHRGb3JtQmFzZUNvbXBvbmVudCwgSURlZmF1bHRGb3JtSW5wdXRzIH0gZnJvbSAnQHBvbHB3YXJlL25neC1mb3JtLWNvbW1vbic7XG5pbXBvcnQgeyBwYXJzZVN0cmluZyB9IGZyb20gJ2Nyb24tcGFyc2VyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdFNjaGVkdWxlVGltZSwgSVNjaGVkdWxlVGltZSwgU2NoZWR1bGVUeXBlRW51bSB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgVXRpbHNTZXJ2aWNlIH0gZnJvbSAnLi4vdXRpbHMuc2VydmljZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNldHRpbmdzIGV4dGVuZHMgSURlZmF1bHRGb3JtSW5wdXRzIHtcbiAgICBoaWRlU3VibWl0QnRuPzogYm9vbGVhbjtcbiAgICBoaWRlQ2FuY2VsQnRuPzogYm9vbGVhbjtcbn1cblxuY29uc3QgZGVmYXVsdFNldHRpbmdzOiBJU2V0dGluZ3MgPSB7XG4gICAgaGlkZVN1Ym1pdEJ0bjogZmFsc2UsXG4gICAgaGlkZUNhbmNlbEJ0bjogdHJ1ZVxufVxuXG5jb25zdCBmb3JtVmFsaWRhdG9yOiBWYWxpZGF0b3JGbiA9IChjb250cm9sOiBGb3JtR3JvdXApOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG5cbiAgICBjb25zdCBzY2hlZHVsZVR5cGVWYWwgPSBzYWZlUGFyc2VJbnQoKGNvbnRyb2wuZ2V0KCdzY2hlZHVsZVR5cGUnKSBhcyBGb3JtQ29udHJvbCkudmFsdWUpO1xuICAgIGlmIChzY2hlZHVsZVR5cGVWYWwgPT0gMCkge1xuICAgICAgICByZXR1cm4geyBzY2hlZHVsZVR5cGU6IHRydWUgfTtcbiAgICB9XG4gICAgaWYgKHNjaGVkdWxlVHlwZVZhbCA9PSAyKSB7IC8vIG9uZSB0aW1lXG4gICAgICAgIGNvbnN0IHJlY3VycmVuY2VWYWwgPSBzYWZlUGFyc2VJbnQoKGNvbnRyb2wuZ2V0KCdyZWN1cnJlbmNlJykgYXMgRm9ybUNvbnRyb2wpLnZhbHVlKTtcbiAgICAgICAgaWYgKHJlY3VycmVuY2VWYWwgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgcmVjdXJyZW5jZTogdHJ1ZSB9XG4gICAgICAgIH0gZWxzZSBpZiAocmVjdXJyZW5jZVZhbCA9PSBJbnRlcnZhbEVudW0uQ3VzdG9tKSB7XG4gICAgICAgICAgICBjb25zdCBjdXN0b21FeHByVmFsID0gKGNvbnRyb2wuZ2V0KCdjdXN0b21FeHByJykgYXMgRm9ybUNvbnRyb2wpLnZhbHVlO1xuICAgICAgICAgICAgaWYgKCFjdXN0b21FeHByVmFsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgY3VzdG9tRXhwcjogdHJ1ZSB9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyB2YWxpZGF0ZVxuICAgICAgICAgICAgICAgIGNvbnN0IHIgPSBwYXJzZVN0cmluZyhjdXN0b21FeHByVmFsKTtcbiAgICAgICAgICAgICAgICBpZiAoci5lcnJvcnMgJiYgT2JqZWN0LmtleXMoci5lcnJvcnMpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBjdXN0b21FeHByOiB0cnVlIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGludGVyZmFjZSBJRm9ybUZpZWxkcyB7XG4gICAgc2NoZWR1bGVUeXBlOiBudW1iZXI7XG4gICAgcmVjdXJyZW5jZTogbnVtYmVyO1xuICAgIGV4Y2x1ZGVIb2xpZGF5czogYm9vbGVhbjtcbiAgICBleGNsdWRlV2Vla2VuZHM6IGJvb2xlYW47XG4gICAgZXhjbHVkZU90aGVyczogYm9vbGVhbjtcbiAgICBjdXN0b21FeHByOiBzdHJpbmc7XG4gICAgc3RhcnREYXRlOiBEYXRlO1xuICAgIGVuZERhdGU6IERhdGU7XG4gICAgbW9udGhPZlllYXI6IG51bWJlcjtcbiAgICBkYXlPZk1vbnRoOiBudW1iZXI7XG4gICAgZGF5T2ZXZWVrOiBudW1iZXI7XG4gICAgdGltZTogRGF0ZTtcbn1cblxuZnVuY3Rpb24gbWFwVG9Gb3JtRmllbGRzKGRhdGE6IElTY2hlZHVsZVRpbWUpIHtcbiAgICBjb25zdCBkZWZhdWx0RGF0YSA9IGdldERlZmF1bHRTY2hlZHVsZVRpbWUoKTtcbiAgICBkYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdERhdGEsIGRhdGEgfHwge30pO1xuICAgIHJldHVybiB7XG4gICAgICAgIC8vIFRoZSB2YWx1ZSBmb3IgdGhlIHJhZGlvIGJ1dHRvbiBpcyB0eXBlIG9mIHN0cmluZy5cbiAgICAgICAgc2NoZWR1bGVUeXBlOiAoZGF0YS5pc1JlY3VycmVudCA/IFNjaGVkdWxlVHlwZUVudW0uUmVjdXJyZW50IDogU2NoZWR1bGVUeXBlRW51bS5PbmVUaW1lKS50b1N0cmluZygpLFxuICAgICAgICByZWN1cnJlbmNlOiBkYXRhLnJlY3VycmVuY2UsXG4gICAgICAgIGV4Y2x1ZGVIb2xpZGF5czogISFkYXRhLmhvbGlkYXlzLFxuICAgICAgICBleGNsdWRlV2Vla2VuZHM6IGRhdGEuZXhjbHVkZVdlZWtlbmRzLFxuICAgICAgICBleGNsdWRlT3RoZXJzOiAhIWRhdGEub3RoZXJEYXlzLFxuICAgICAgICBjdXN0b21FeHByOiBkYXRhLmN1c3RvbUV4cHIsXG4gICAgICAgIHN0YXJ0RGF0ZTogZGF0YS5zdGFydERhdGUsXG4gICAgICAgIGVuZERhdGU6IGRhdGEuZW5kRGF0ZSxcbiAgICAgICAgdGltZTogZGF0YS50aW1lLFxuICAgICAgICBtb250aE9mWWVhcjogZGF0YS5tb250aE9mWWVhcixcbiAgICAgICAgZGF5T2ZXZWVrOiBkYXRhLmRheU9mV2VlayxcbiAgICAgICAgZGF5T2ZNb250aDogZGF0YS5kYXlPZk1vbnRoXG4gICAgfTtcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb2xwLWJzLXNjaGVkdWxlLXRpbWUtcGlja2VyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vc2NoZWR1bGUtdGltZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3NjaGVkdWxlLXRpbWUtcGlja2VyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTY2hlZHVsZVRpbWVQaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBEZWZhdWx0Rm9ybUJhc2VDb21wb25lbnRcbiAgICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMsIElIYXNBbGVydEZlYXR1cmUge1xuXG4gICAgQElucHV0KCkgaW5pdFNldHRpbmdzOiBJU2V0dGluZ3MgPSB7fTtcbiAgICBASW5wdXQoKSBpbml0VmFsdWU6IElTY2hlZHVsZVRpbWUgPSBudWxsO1xuICAgIC8vIHRvZG86IFdlIHVzZSB0aGUgY29tcGFueS1zcGVjaWZpYyBzZXR0aW5ncyAuLi4uXG4gICAgQElucHV0KCkgZGVmYXVsdEhvbGlkYXlzOiBzdHJpbmcgPSAnJztcblxuICAgIHNldHRpbmdzOiBJU2V0dGluZ3MgPSB7fTtcblxuICAgIHByZWZpeCA9ICdzdHAtJyArIChuZXcgRGF0ZSkuZ2V0VGltZSgpICsgJy0nO1xuXG4gICAgLy8gU2NoZWR1bGUgbW9kbGVcbiAgICBmb3JtOiBGb3JtR3JvdXA7XG4gICAgc2NoZWR1bGVUeXBlT3B0aW9ucyA9IFt7XG4gICAgICAgIHZhbHVlOiBTY2hlZHVsZVR5cGVFbnVtLk9uZVRpbWUsXG4gICAgICAgIHRleHQ6ICdwb2xwQ3JvbkpvYi5vbmVUaW1lU2NoZWR1bGUnXG4gICAgfSwge1xuICAgICAgICB2YWx1ZTogU2NoZWR1bGVUeXBlRW51bS5SZWN1cnJlbnQsXG4gICAgICAgIHRleHQ6ICdwb2xwQ3JvbkpvYi5yZWN1cnJlbnRTY2hlZHVsZSdcbiAgICB9XTtcblxuICAgIHJlY3VycmVuY2VPcHRpb25zID0gW3tcbiAgICAgICAgdmFsdWU6IEludGVydmFsRW51bS5EYXksXG4gICAgICAgIHRleHQ6ICdwb2xwQ3JvbkpvYi5ldmVyeURheSdcbiAgICB9LCB7XG4gICAgICAgIHZhbHVlOiBJbnRlcnZhbEVudW0uV2VlayxcbiAgICAgICAgdGV4dDogJ3BvbHBDcm9uSm9iLmV2ZXJ5V2VlaydcbiAgICB9LCB7XG4gICAgICAgIHZhbHVlOiBJbnRlcnZhbEVudW0uTW9udGgsXG4gICAgICAgIHRleHQ6ICdwb2xwQ3JvbkpvYi5ldmVyeU1vbnRoJ1xuICAgIH0sIHtcbiAgICAgICAgdmFsdWU6IEludGVydmFsRW51bS5ZZWFyLFxuICAgICAgICB0ZXh0OiAncG9scENyb25Kb2IuZXZlcnlZZWFyJ1xuICAgIH0sIHtcbiAgICAgICAgdmFsdWU6IEludGVydmFsRW51bS5DdXN0b20sXG4gICAgICAgIHRleHQ6ICdwb2xwQ3JvbkpvYi5jdXN0b21JbnRlcnZhbCdcbiAgICB9XTtcblxuICAgIGRheXNPZldlZWtPcHRpb25zID0gZ2V0RGF5c09mV2VlaygpO1xuICAgIG1vbnRoc09mWWVhck9wdGlvbnMgPSBnZXRNb250aHNPZlllYXIoKTtcbiAgICBkYXlzT2ZNb250aE9wdGlvbnMgPSBnZXREYXlzT2ZNb250aCgpO1xuXG4gICAgdmlzaWJpbHR5Q2ZnID0ge1xuICAgICAgICBzY2hlZHVsZVR5cGU6IHRydWUsXG4gICAgICAgIHJlY3VycmVuY2U6IGZhbHNlLFxuICAgICAgICBjdXN0b21FeHByOiBmYWxzZSxcbiAgICAgICAgZXhjbHVkZUhvbGlkYXlzOiBmYWxzZSxcbiAgICAgICAgZXhjbHVkZVdlZWtlbmRzOiBmYWxzZSxcbiAgICAgICAgZXhjbHVkZU90aGVyczogZmFsc2UsXG4gICAgICAgIHN0YXJ0RGF0ZTogZmFsc2UsXG4gICAgICAgIGVuZERhdGU6IGZhbHNlLFxuICAgICAgICB0aW1lOiBmYWxzZSxcbiAgICAgICAgbW9udGhPZlllYXI6IGZhbHNlLFxuICAgICAgICBkYXlPZk1vbnRoOiBmYWxzZSxcbiAgICAgICAgZGF5T2ZXZWVrOiBmYWxzZVxuICAgIH07XG5cbiAgICBob2xpZGF5czogc3RyaW5nID0gJyc7XG4gICAgb3RoZXJEYXlzOiBzdHJpbmcgPSAnJztcblxuICAgIGlzU2F2aW5nOiBib29sZWFuO1xuICAgIGFsZXJ0UHJvdmlkZXIgPSBuZXcgQWxlcnREZWZhdWx0SW1wbCgpO1xuXG4gICAgcHJpdmF0ZSBfc3VicjogU3Vic2NyaXB0aW9uO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYnVpbGRlcjogRm9ybUJ1aWxkZXIsXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX3V0aWxzOiBVdGlsc1NlcnZpY2UpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cblxuICAgIGdldCBhbGVydHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFsZXJ0UHJvdmlkZXIuZGF0YTtcbiAgICB9XG5cbiAgICBnZXQgaXNIb2xpZGF5c0V4Y2x1ZGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzWydleGNsdWRlSG9saWRheXMnXS52YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgaXNPdGhlcnNFeGNsdWRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1snZXhjbHVkZU90aGVycyddLnZhbHVlO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdFNldHRpbmdzLCB0aGlzLmluaXRTZXR0aW5ncyk7XG4gICAgICAgIHRoaXMuaGlkZUNhbmNlbEJ0biA9IHRoaXMuc2V0dGluZ3MuaGlkZUNhbmNlbEJ0bjtcbiAgICAgICAgdGhpcy5oaWRlU3VibWl0QnRuID0gdGhpcy5zZXR0aW5ncy5oaWRlU3VibWl0QnRuO1xuXG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IG1hcFRvRm9ybUZpZWxkcyh0aGlzLmluaXRWYWx1ZSk7XG4gICAgICAgIHRoaXMuZm9ybSA9IHRoaXMuX2J1aWxkZXIuZ3JvdXAoZmllbGRzLCB7IHZhbGlkYXRvcnM6IFtmb3JtVmFsaWRhdG9yXSB9KTtcbiAgICAgICAgdGhpcy51cGRhdGVGaWVsZFZpc2liaWxpdHkodGhpcy5mb3JtLnZhbHVlKTtcblxuICAgICAgICBpZiAodGhpcy5pbml0VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuaG9saWRheXMgPSB0aGlzLmluaXRWYWx1ZS5ob2xpZGF5cyB8fCB0aGlzLmRlZmF1bHRIb2xpZGF5cyB8fCAnJztcbiAgICAgICAgICAgIHRoaXMub3RoZXJEYXlzID0gdGhpcy5pbml0VmFsdWUub3RoZXJEYXlzIHx8ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc3ViciA9IHRoaXMuZm9ybS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKGEgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVGaWVsZFZpc2liaWxpdHkoYSk7XG5cbiAgICAgICAgICAgIHRoaXMubm90aWZ5VmFsaWRhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlWYWx1ZUNoYW5nZXModGhpcy5jb21wdXRlT3V0VmFsdWUoYSkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5fc3Vici51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGRhdGE6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5pbml0VmFsdWUgJiYgIWRhdGEuaW5pdFZhbHVlLmZpcnN0Q2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZvcm1EYXRhKGRhdGEuaW5pdFZhbHVlLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlRm9ybURhdGEoZGF0YTogSVNjaGVkdWxlVGltZSkge1xuICAgICAgICBjb25zdCBjaGFuZ2VzID0gbWFwVG9Gb3JtRmllbGRzKGRhdGEpO1xuICAgICAgICB0aGlzLmZvcm0uc2V0VmFsdWUoY2hhbmdlcywge1xuICAgICAgICAgICAgZW1pdEV2ZW50OiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmhvbGlkYXlzID0gZGF0YS5ob2xpZGF5cyB8fCB0aGlzLmRlZmF1bHRIb2xpZGF5cyB8fCAnJztcbiAgICAgICAgdGhpcy5vdGhlckRheXMgPSBkYXRhLm90aGVyRGF5cyB8fCAnJztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlRmllbGRWaXNpYmlsaXR5KGE6IElGb3JtRmllbGRzKSB7XG5cbiAgICAgICAgZm9yIChsZXQgayBpbiB0aGlzLnZpc2liaWx0eUNmZykge1xuICAgICAgICAgICAgaWYgKHRoaXMudmlzaWJpbHR5Q2ZnLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmdba10gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZpc2liaWx0eUNmZy5zY2hlZHVsZVR5cGUgPSB0cnVlO1xuXG4gICAgICAgIGNvbnN0IHNjaGVkdWxlVHlwZVZhbCA9IHNhZmVQYXJzZUludChhLnNjaGVkdWxlVHlwZSk7XG5cbiAgICAgICAgaWYgKHNjaGVkdWxlVHlwZVZhbCA9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnZpc2liaWx0eUNmZy5zdGFydERhdGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcudGltZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnZpc2liaWx0eUNmZy5yZWN1cnJlbmNlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudmlzaWJpbHR5Q2ZnLmV4Y2x1ZGVIb2xpZGF5cyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnZpc2liaWx0eUNmZy5leGNsdWRlV2Vla2VuZHMgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcuZXhjbHVkZU90aGVycyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnZpc2liaWx0eUNmZy5lbmREYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudmlzaWJpbHR5Q2ZnLnRpbWUgPSB0cnVlO1xuXG4gICAgICAgICAgICBjb25zdCByZWN1cnJlbnRWYWwgPSBzYWZlUGFyc2VJbnQoYS5yZWN1cnJlbmNlKTtcbiAgICAgICAgICAgIGlmIChyZWN1cnJlbnRWYWwgPT0gSW50ZXJ2YWxFbnVtLlllYXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2liaWx0eUNmZy5tb250aE9mWWVhciA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcuZGF5T2ZNb250aCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlY3VycmVudFZhbCA9PSBJbnRlcnZhbEVudW0uTW9udGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2liaWx0eUNmZy5kYXlPZk1vbnRoID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVjdXJyZW50VmFsID09IEludGVydmFsRW51bS5XZWVrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcuZGF5T2ZXZWVrID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVjdXJyZW50VmFsID09IEludGVydmFsRW51bS5DdXN0b20pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2liaWx0eUNmZy50aW1lID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcuY3VzdG9tRXhwciA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY29tcHV0ZU91dFZhbHVlKGE6IElGb3JtRmllbGRzKSB7XG4gICAgICAgIGNvbnN0IHNjaGVkdWxlVHlwZVZhbCA9IHNhZmVQYXJzZUludChhLnNjaGVkdWxlVHlwZSk7XG4gICAgICAgIGNvbnN0IG91dHB1dCA9IHNjaGVkdWxlVHlwZVZhbCA9PSBTY2hlZHVsZVR5cGVFbnVtLk9uZVRpbWUgP1xuICAgICAgICAgICAgdGhpcy5nZXRPbmVUaW1lVmFsdWUoYSkgOiB0aGlzLmdldFJlY3VycmVudFZhbHVlKGEpO1xuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRPbmVUaW1lVmFsdWUoYTogSUZvcm1GaWVsZHMpOiBJU2NoZWR1bGVUaW1lIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlzUmVjdXJyZW50OiBmYWxzZSxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogYS5zdGFydERhdGUsXG4gICAgICAgICAgICB0aW1lOiBhLnRpbWVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0UmVjdXJyZW50VmFsdWUoYTogSUZvcm1GaWVsZHMpOiBJU2NoZWR1bGVUaW1lIHtcbiAgICAgICAgY29uc3QgcmVjdXJyZW5jZSA9IHNhZmVQYXJzZUludChhLnJlY3VycmVuY2UpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc1JlY3VycmVudDogdHJ1ZSxcbiAgICAgICAgICAgIHJlY3VycmVuY2U6IHJlY3VycmVuY2UsXG4gICAgICAgICAgICBob2xpZGF5czogYS5leGNsdWRlSG9saWRheXMgPyB0aGlzLmhvbGlkYXlzIDogJycsXG4gICAgICAgICAgICBleGNsdWRlV2Vla2VuZHM6IGEuZXhjbHVkZVdlZWtlbmRzLFxuICAgICAgICAgICAgb3RoZXJEYXlzOiBhLmV4Y2x1ZGVPdGhlcnMgPyB0aGlzLm90aGVyRGF5cyA6ICcnLFxuICAgICAgICAgICAgc3RhcnREYXRlOiBhLnN0YXJ0RGF0ZSxcbiAgICAgICAgICAgIGVuZERhdGU6IGEuZW5kRGF0ZSxcbiAgICAgICAgICAgIHRpbWU6IGEudGltZSxcbiAgICAgICAgICAgIG1vbnRoT2ZZZWFyOiBhLm1vbnRoT2ZZZWFyLFxuICAgICAgICAgICAgZGF5T2ZNb250aDogYS5kYXlPZk1vbnRoLFxuICAgICAgICAgICAgZGF5T2ZXZWVrOiBhLmRheU9mV2Vla1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbmZpcm0oKSB7XG4gICAgICAgIGlmICghdGhpcy5mb3JtLnZhbGlkKSB7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0UHJvdmlkZXIud2FybmluZygncG9scENyb25Kb2IuZXJyb3JzLmdlbmVyYWwnLCA1MDAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG91dHB1dCA9IHRoaXMuY29tcHV0ZU91dFZhbHVlKHRoaXMuZm9ybS52YWx1ZSk7XG4gICAgICAgIHRoaXMub25TYXZlLmVtaXQob3V0cHV0KTtcbiAgICB9XG5cbiAgICBjYW5jZWwoKSB7XG4gICAgICAgIHRoaXMub25DYW5jZWwuZW1pdCgpO1xuICAgIH1cblxuICAgIGFzeW5jIHVwZGF0ZUhvbGlkYXlzQXN5bmMoKSB7XG4gICAgICAgIGNvbnN0IHJldCA9IGF3YWl0IHRoaXMuX3V0aWxzLnNob3dNdWx0aURhdGVFZGl0b3JBc3luYyh7XG4gICAgICAgICAgICB0aXRsZTogJ3BvbHBDcm9uSm9iLmhvbGlkYXlzRWRpdG9yVGl0bGUnLFxuICAgICAgICAgICAgaW5pdFZhbHVlOiAodGhpcy5ob2xpZGF5cyB8fCAnJykuc3BsaXQoJywnKS5maWx0ZXIoYSA9PiAhIWEpXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocmV0KSB7XG4gICAgICAgICAgICB0aGlzLmhvbGlkYXlzID0gcmV0LmpvaW4oJywnKTtcblxuICAgICAgICAgICAgdGhpcy5ub3RpZnlWYWx1ZUNoYW5nZXModGhpcy5jb21wdXRlT3V0VmFsdWUodGhpcy5mb3JtLnZhbHVlKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyB1cGRhdGVPdGhlckRheXNBc3luYygpIHtcbiAgICAgICAgY29uc3QgcmV0ID0gYXdhaXQgdGhpcy5fdXRpbHMuc2hvd011bHRpRGF0ZUVkaXRvckFzeW5jKHtcbiAgICAgICAgICAgIHRpdGxlOiAncG9scENyb25Kb2Iub3RoZXJzRWRpdG9yVGl0bGUnLFxuICAgICAgICAgICAgaW5pdFZhbHVlOiAodGhpcy5vdGhlckRheXMgfHwgJycpLnNwbGl0KCcsJykuZmlsdGVyKGEgPT4gISFhKVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJldCkge1xuICAgICAgICAgICAgdGhpcy5vdGhlckRheXMgPSByZXQuam9pbignLCcpO1xuXG4gICAgICAgICAgICB0aGlzLm5vdGlmeVZhbHVlQ2hhbmdlcyh0aGlzLmNvbXB1dGVPdXRWYWx1ZSh0aGlzLmZvcm0udmFsdWUpKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIl19