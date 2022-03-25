import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { getDaysOfMonth, getDaysOfWeek, getMonthsOfYear, IntervalEnum, safeParseInt } from '@polpware/fe-utilities';
import { AlertDefaultImpl } from '@polpware/ngx-alert';
import { DefaultFormBaseComponent } from '@polpware/ngx-form-common';
import { parseString } from 'cron-parser';
import { getDefaultScheduleTime, ScheduleTypeEnum } from '../interfaces';
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
        template: "<form [formGroup]=\"form\" (ngSubmit)=\"confirm()\">\n    <div class=\"form-group row\" *ngIf=\"visibiltyCfg.scheduleType\">\n        <label class=\"col-12 col-md-4 col-form-label\">\n            {{'polpCronJob.scheduleType' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <div class=\"form-check form-check-inline\"\n                 *ngFor=\"let opt of scheduleTypeOptions;let i=index\">\n                <input class=\"form-check-input\"\n                       formControlName=\"scheduleType\"\n                       type=\"radio\"\n                       id=\"{{prefix + 'schedule-type-opt-' + i}}\"\n                       value=\"{{opt.value}}\">\n                <label class=\"form-check-label\"\n                       for=\"{{prefix + 'schedule-type-opt-' + i}}\">\n                    {{opt.text | cronJobHyperTrans}}\n                </label>\n            </div>\n            <span class=\"text-warning d-block my-1 small\" *ngIf=\"form.hasError('scheduleType') && (form.get('scheduleType').dirty || form.get('scheduleType').touched)\">\n                {{'polpCronJob.errors.scheduleTypeRequired' | cronJobHyperTrans}}\n            </span>\n        </div>\n    </div>\n    \n    <div class=\"form-group row\" *ngIf=\"visibiltyCfg.recurrence\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-recurrence'}}\">\n            {{'polpCronJob.recurrence' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <select class=\"form-control\"\n                    id=\"{{prefix + 'schedule-recurrence'}}\"\n                    formControlName=\"recurrence\">\n                <option selected value=\"\">{{'polpCronJob.selectOne' | cronJobHyperTrans}}</option>\n                <option value=\"{{opt.value}}\" *ngFor=\"let opt of recurrenceOptions\">\n                    {{opt.text | cronJobHyperTrans}}\n                </option>\n            </select>\n        </div>\n    </div>\n\n    <div class=\"form-group row\" *ngIf=\"visibiltyCfg.recurrence && visibiltyCfg.customExpr\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-custom-expr'}}\">\n            {{'polpCronJob.customExpr' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <input class=\"form-control\"\n                   type=\"text\"\n                   [autofocus]=\"true\"\n                   id=\"{{prefix + 'schedule-custom-expr'}}\"\n                   formControlName=\"customExpr\">\n            <span class=\"text-warning d-block my-1 small\" *ngIf=\"form.hasError('customExpr') && (form.get('customExpr').dirty || form.get('customExpr').touched)\">\n                {{'polpCronJob.errors.customExprInvalid' | cronJobHyperTrans}}\n            </span>\n        </div>\n    </div>\n\n    <div class=\"form-group row\" *ngIf=\"visibiltyCfg.startDate\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-start-date'}}\">\n            {{'polpCronJob.startDate' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <input class=\"form-control\"\n                   type=\"text\"\n                   id=\"{{prefix + 'schedule-start-date'}}\"\n                   bsDatepicker\n                   [bsConfig]=\"{ adaptivePosition: true }\"\n                   formControlName=\"startDate\">\n        </div>\n    </div>\n\n\n    <div class=\"form-group row\" *ngIf=\"visibiltyCfg.monthOfYear\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-month-of-year'}}\">\n            {{'polpCronJob.monthOfYear' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <select class=\"form-control\"\n                    id=\"{{prefix + 'schedule-month-of-year'}}\"\n                    formControlName=\"monthOfYear\">\n                <option selected value=\"\">...</option>\n                <option value=\"{{opt.value}}\" *ngFor=\"let opt of monthsOfYearOptions\">\n                    {{opt.text | cronJobHyperTrans}}\n                </option>\n            </select>\n        </div>\n    </div>\n\n    <div class=\"form-group row\" *ngIf=\"visibiltyCfg.dayOfMonth\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-day-of-month'}}\">\n            {{'polpCronJob.dayOfMonth' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <select class=\"form-control\"\n                    id=\"{{prefix + 'schedule-day-of-month'}}\"\n                    formControlName=\"dayOfMonth\">\n                <option selected value=\"\">...</option>\n                <option value=\"{{opt.value}}\" *ngFor=\"let opt of daysOfMonthOptions\">\n                    {{opt.text}}\n                </option>\n            </select>\n        </div>\n    </div>\n\n\n    <div class=\"form-group row\" *ngIf=\"visibiltyCfg.dayOfWeek\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-day-of-week'}}\">\n            {{'polpCronJob.dayOfWeek' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <select class=\"form-control\"\n                    id=\"{{prefix + 'schedule-day-of-week'}}\"\n                    formControlName=\"dayOfWeek\">\n                <option selected value=\"\">...</option>\n                <option value=\"{{opt.value}}\" *ngFor=\"let opt of daysOfWeekOptions\">\n                    {{opt.text | cronJobHyperTrans}}\n                </option>\n            </select>\n        </div>\n    </div>\n\n    <div class=\"form-group row\" *ngIf=\"visibiltyCfg.time\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-time'}}\">\n            {{'polpCronJob.time' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <timepicker id=\"{{prefix + 'schedule-time'}}\"\n                        formControlName=\"time\">\n            </timepicker>\n        </div>\n    </div>\n\n    <div class=\"form-group row\" *ngIf=\"visibiltyCfg.excludeHolidays\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-exclude-holidays'}}\">\n            {{'polpCronJob.excludeHolidays' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <div class=\"form-check\">\n                <input class=\"form-check-input position-static\"\n                       type=\"checkbox\"\n                       id=\"{{prefix + 'schedule-exclude-holidays'}}\"\n                       formControlName=\"excludeHolidays\">\n            </div>\n            <div>\n                {{'polpCronJob.holidayLabel' | cronJobHyperTrans}}\n            </div>\n        </div>\n    </div>\n    <div class=\"form-group row\" *ngIf=\"visibiltyCfg.excludeWeekends\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-exclude-weekends'}}\">\n            {{'polpCronJob.excludeWeekends' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <div class=\"form-check\">\n                <input class=\"form-check-input position-static\"\n                       type=\"checkbox\"\n                       id=\"{{prefix + 'schedule-exclude-weekends'}}\"\n                       formControlName=\"excludeWeekends\">\n            </div>\n        </div>\n    </div>\n    <div class=\"form-group row\" *ngIf=\"visibiltyCfg.excludeOthers\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-exclude-others'}}\">\n            {{'polpCronJob.excludeOthers' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <div class=\"form-check\">\n                <input class=\"form-check-input position-static\"\n                       id=\"{{prefix + 'schedule-exclude-others'}}\"\n                       type=\"checkbox\"\n                       formControlName=\"excludeOthers\">\n            </div>\n            <div>\n                {{'polpCronJob.otherLabel' | cronJobHyperTrans}}\n            </div>\n        </div>\n    </div>\n\n    <div class=\"form-group row\" *ngIf=\"visibiltyCfg.endDate\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-end-date'}}\">\n            {{'polpCronJob.endDate' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <input class=\"form-control\"\n                   type=\"text\"\n                   id=\"{{prefix + 'schedule-end-date'}}\"\n                   bsDatepicker\n                   [bsConfig]=\"{ adaptivePosition: true }\"\n                   formControlName=\"endDate\">\n        </div>\n    </div>\n\n    <ng-container *ngFor=\"let a of alerts\">\n        <alert [type]=\"a.type\" [dismissOnTimeout]=\"a.timeout\">\n            {{a.message | cronJobHyperTrans}}\n        </alert>\n    </ng-container>\n    \n    <div class=\"d-flex justify-content-end mb-4\" *ngIf=\"!hideSubmitBtn || !hideCancelBtn\">\n        <button type=\"button\" class=\"btn btn-warning\"\n                (click)=\"cancel()\" *ngIf=\"!hideCancelBtn\">\n            {{'polpCronJob.cancelBtn' | cronJobHyperTrans}}\n        </button>\n        <button type=\"submit\" class=\"btn btn-success\"\n                *ngIf=\"!hideSubmitBtn\">\n            {{'polpCronJob.submitBtn' | cronJobHyperTrans}}\n        </button>\n    </div>\n</form>\n",
        styles: [""]
    }),
    __metadata("design:paramtypes", [FormBuilder])
], ScheduleTimePickerComponent);
export { ScheduleTimePickerComponent };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUtdGltZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2Nyb24tam9iLyIsInNvdXJjZXMiOlsibGliL3NjaGVkdWxlLXRpbWUtcGlja2VyL3NjaGVkdWxlLXRpbWUtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQStDLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRyxPQUFPLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BILE9BQU8sRUFBRSxnQkFBZ0IsRUFBb0IsTUFBTSxxQkFBcUIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsd0JBQXdCLEVBQXNCLE1BQU0sMkJBQTJCLENBQUM7QUFDekYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUUxQyxPQUFPLEVBQUUsc0JBQXNCLEVBQWlCLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3hGLE1BQU0sZUFBZSxHQUFjO0lBQy9CLGFBQWEsRUFBRSxLQUFLO0lBQ3BCLGFBQWEsRUFBRSxJQUFJO0NBQ3RCLENBQUE7QUFFRCxNQUFNLGFBQWEsR0FBZ0IsQ0FBQyxPQUFrQixFQUEyQixFQUFFO0lBRS9FLE1BQU0sZUFBZSxHQUFHLFlBQVksQ0FBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6RixJQUFJLGVBQWUsSUFBSSxDQUFDLEVBQUU7UUFDdEIsT0FBTyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQztLQUNqQztJQUNELElBQUksZUFBZSxJQUFJLENB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QUFRLEVBQUUsOEJBQThCO1FBQ3hDLDYvU0FBb0Q7O0tBRXZELENBQUM7cUNBOERnQyxXQUFXO0dBN0RoQywyQkFBMkIsQ0E0THZDO1NBNUxZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBWYWxpZGF0aW9uRXJyb3JzLCBWYWxpZGF0b3JGbiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGdldERheXNPZk1vbnRoLCBnZXREYXlzT2ZXZWVrLCBnZXRNb250aHNPZlllYXIsIEludGVydmFsRW51bSwgc2FmZVBhcnNlSW50IH0gZnJvbSAnQHBvbHB3YXJlL2ZlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBBbGVydERlZmF1bHRJbXBsLCBJSGFzQWxlcnRGZWF0dXJlIH0gZnJvbSAnQHBvbHB3YXJlL25neC1hbGVydCc7XG5pbXBvcnQgeyBEZWZhdWx0Rm9ybUJhc2VDb21wb25lbnQsIElEZWZhdWx0Rm9ybUlucHV0cyB9IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtZm9ybS1jb21tb24nO1xuaW1wb3J0IHsgcGFyc2VTdHJpbmcgfSBmcm9tICdjcm9uLXBhcnNlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGdldERlZmF1bHRTY2hlZHVsZVRpbWUsIElTY2hlZHVsZVRpbWUsIFNjaGVkdWxlVHlwZUVudW0gfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcblxuZXhwb3J0IGludGVyZmFjZSBJU2V0dGluZ3MgZXh0ZW5kcyBJRGVmYXVsdEZvcm1JbnB1dHMge1xuICAgIGhpZGVTdWJtaXRCdG4/OiBib29sZWFuO1xuICAgIGhpZGVDYW5jZWxCdG4/OiBib29sZWFuO1xufVxuXG5jb25zdCBkZWZhdWx0U2V0dGluZ3M6IElTZXR0aW5ncyA9IHtcbiAgICBoaWRlU3VibWl0QnRuOiBmYWxzZSxcbiAgICBoaWRlQ2FuY2VsQnRuOiB0cnVlXG59XG5cbmNvbnN0IGZvcm1WYWxpZGF0b3I6IFZhbGlkYXRvckZuID0gKGNvbnRyb2w6IEZvcm1Hcm91cCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcblxuICAgIGNvbnN0IHNjaGVkdWxlVHlwZVZhbCA9IHNhZmVQYXJzZUludCgoY29udHJvbC5nZXQoJ3NjaGVkdWxlVHlwZScpIGFzIEZvcm1Db250cm9sKS52YWx1ZSk7XG4gICAgaWYgKHNjaGVkdWxlVHlwZVZhbCA9PSAwKSB7XG4gICAgICAgIHJldHVybiB7IHNjaGVkdWxlVHlwZTogdHJ1ZSB9O1xuICAgIH1cbiAgICBpZiAoc2NoZWR1bGVUeXBlVmFsID09IDIpIHsgLy8gb25lIHRpbWVcbiAgICAgICAgY29uc3QgcmVjdXJyZW5jZVZhbCA9IHNhZmVQYXJzZUludCgoY29udHJvbC5nZXQoJ3JlY3VycmVuY2UnKSBhcyBGb3JtQ29udHJvbCkudmFsdWUpO1xuICAgICAgICBpZiAocmVjdXJyZW5jZVZhbCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4geyByZWN1cnJlbmNlOiB0cnVlIH1cbiAgICAgICAgfSBlbHNlIGlmIChyZWN1cnJlbmNlVmFsID09IEludGVydmFsRW51bS5DdXN0b20pIHtcbiAgICAgICAgICAgIGNvbnN0IGN1c3RvbUV4cHJWYWwgPSAoY29udHJvbC5nZXQoJ2N1c3RvbUV4cHInKSBhcyBGb3JtQ29udHJvbCkudmFsdWU7XG4gICAgICAgICAgICBpZiAoIWN1c3RvbUV4cHJWYWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBjdXN0b21FeHByOiB0cnVlIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHZhbGlkYXRlXG4gICAgICAgICAgICAgICAgY29uc3QgciA9IHBhcnNlU3RyaW5nKGN1c3RvbUV4cHJWYWwpO1xuICAgICAgICAgICAgICAgIGlmIChyLmVycm9ycyAmJiBPYmplY3Qua2V5cyhyLmVycm9ycykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGN1c3RvbUV4cHI6IHRydWUgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIElGb3JtRmllbGRzIHtcbiAgICBzY2hlZHVsZVR5cGU6IG51bWJlcjtcbiAgICByZWN1cnJlbmNlOiBudW1iZXI7XG4gICAgZXhjbHVkZUhvbGlkYXlzOiBib29sZWFuO1xuICAgIGhvbGlkYXlzOiBzdHJpbmc7XG4gICAgZXhjbHVkZVdlZWtlbmRzOiBib29sZWFuO1xuICAgIGV4Y2x1ZGVPdGhlcnM6IGJvb2xlYW47XG4gICAgb3RoZXJEYXlzOiBzdHJpbmc7XG4gICAgY3VzdG9tRXhwcjogc3RyaW5nO1xuICAgIHN0YXJ0RGF0ZTogRGF0ZTtcbiAgICBlbmREYXRlOiBEYXRlO1xuICAgIG1vbnRoT2ZZZWFyOiBudW1iZXI7XG4gICAgZGF5T2ZNb250aDogbnVtYmVyO1xuICAgIGRheU9mV2VlazogbnVtYmVyO1xuICAgIHRpbWU6IERhdGU7XG59XG5cbmZ1bmN0aW9uIG1hcFRvRm9ybUZpZWxkcyhkYXRhOiBJU2NoZWR1bGVUaW1lKSB7XG4gICAgY29uc3QgZGVmYXVsdERhdGEgPSBnZXREZWZhdWx0U2NoZWR1bGVUaW1lKCk7XG4gICAgZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHREYXRhLCBkYXRhIHx8IHt9KTtcbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBUaGUgdmFsdWUgZm9yIHRoZSByYWRpbyBidXR0b24gaXMgdHlwZSBvZiBzdHJpbmcuXG4gICAgICAgIHNjaGVkdWxlVHlwZTogKGRhdGEuaXNSZWN1cnJlbnQgPyBTY2hlZHVsZVR5cGVFbnVtLlJlY3VycmVudCA6IFNjaGVkdWxlVHlwZUVudW0uT25lVGltZSkudG9TdHJpbmcoKSxcbiAgICAgICAgcmVjdXJyZW5jZTogZGF0YS5yZWN1cnJlbmNlLFxuICAgICAgICBleGNsdWRlSG9saWRheXM6ICEhZGF0YS5ob2xpZGF5cyxcbiAgICAgICAgaG9saWRheXM6IGRhdGEuaG9saWRheXMsXG4gICAgICAgIGV4Y2x1ZGVXZWVrZW5kczogZGF0YS5leGNsdWRlV2Vla2VuZHMsXG4gICAgICAgIGV4Y2x1ZGVPdGhlcnM6ICEhZGF0YS5vdGhlckRheXMsXG4gICAgICAgIG90aGVyRGF5czogZGF0YS5vdGhlckRheXMsXG4gICAgICAgIGN1c3RvbUV4cHI6IGRhdGEuY3VzdG9tRXhwcixcbiAgICAgICAgc3RhcnREYXRlOiBkYXRhLnN0YXJ0RGF0ZSxcbiAgICAgICAgZW5kRGF0ZTogZGF0YS5lbmREYXRlLFxuICAgICAgICB0aW1lOiBkYXRhLnRpbWUsXG4gICAgICAgIG1vbnRoT2ZZZWFyOiBkYXRhLm1vbnRoT2ZZZWFyLFxuICAgICAgICBkYXlPZldlZWs6IGRhdGEuZGF5T2ZXZWVrLFxuICAgICAgICBkYXlPZk1vbnRoOiBkYXRhLmRheU9mTW9udGhcbiAgICB9O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BvbHAtYnMtc2NoZWR1bGUtdGltZS1waWNrZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zY2hlZHVsZS10aW1lLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vc2NoZWR1bGUtdGltZS1waWNrZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNjaGVkdWxlVGltZVBpY2tlckNvbXBvbmVudCBleHRlbmRzIERlZmF1bHRGb3JtQmFzZUNvbXBvbmVudFxuICAgIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgSUhhc0FsZXJ0RmVhdHVyZSB7XG5cbiAgICBASW5wdXQoKSBpbml0U2V0dGluZ3M6IElTZXR0aW5ncyA9IHt9O1xuICAgIEBJbnB1dCgpIGluaXRWYWx1ZTogSVNjaGVkdWxlVGltZSA9IG51bGw7XG5cbiAgICBzZXR0aW5nczogSVNldHRpbmdzID0ge307XG5cbiAgICBwcmVmaXggPSAnc3RwLScgKyAobmV3IERhdGUpLmdldFRpbWUoKSArICctJztcblxuICAgIC8vIFNjaGVkdWxlIG1vZGxlXG4gICAgZm9ybTogRm9ybUdyb3VwO1xuICAgIHNjaGVkdWxlVHlwZU9wdGlvbnMgPSBbe1xuICAgICAgICB2YWx1ZTogU2NoZWR1bGVUeXBlRW51bS5PbmVUaW1lLFxuICAgICAgICB0ZXh0OiAncG9scENyb25Kb2Iub25lVGltZVNjaGVkdWxlJ1xuICAgIH0sIHtcbiAgICAgICAgdmFsdWU6IFNjaGVkdWxlVHlwZUVudW0uUmVjdXJyZW50LFxuICAgICAgICB0ZXh0OiAncG9scENyb25Kb2IucmVjdXJyZW50U2NoZWR1bGUnXG4gICAgfV07XG5cbiAgICByZWN1cnJlbmNlT3B0aW9ucyA9IFt7XG4gICAgICAgIHZhbHVlOiBJbnRlcnZhbEVudW0uRGF5LFxuICAgICAgICB0ZXh0OiAncG9scENyb25Kb2IuZXZlcnlEYXknXG4gICAgfSwge1xuICAgICAgICB2YWx1ZTogSW50ZXJ2YWxFbnVtLldlZWssXG4gICAgICAgIHRleHQ6ICdwb2xwQ3JvbkpvYi5ldmVyeVdlZWsnXG4gICAgfSwge1xuICAgICAgICB2YWx1ZTogSW50ZXJ2YWxFbnVtLk1vbnRoLFxuICAgICAgICB0ZXh0OiAncG9scENyb25Kb2IuZXZlcnlNb250aCdcbiAgICB9LCB7XG4gICAgICAgIHZhbHVlOiBJbnRlcnZhbEVudW0uWWVhcixcbiAgICAgICAgdGV4dDogJ3BvbHBDcm9uSm9iLmV2ZXJ5WWVhcidcbiAgICB9LCB7XG4gICAgICAgIHZhbHVlOiBJbnRlcnZhbEVudW0uQ3VzdG9tLFxuICAgICAgICB0ZXh0OiAncG9scENyb25Kb2IuY3VzdG9tSW50ZXJ2YWwnXG4gICAgfV07XG5cbiAgICBkYXlzT2ZXZWVrT3B0aW9ucyA9IGdldERheXNPZldlZWsoKTtcbiAgICBtb250aHNPZlllYXJPcHRpb25zID0gZ2V0TW9udGhzT2ZZZWFyKCk7XG4gICAgZGF5c09mTW9udGhPcHRpb25zID0gZ2V0RGF5c09mTW9udGgoKTtcblxuICAgIHZpc2liaWx0eUNmZyA9IHtcbiAgICAgICAgc2NoZWR1bGVUeXBlOiB0cnVlLFxuICAgICAgICByZWN1cnJlbmNlOiBmYWxzZSxcbiAgICAgICAgY3VzdG9tRXhwcjogZmFsc2UsXG4gICAgICAgIGV4Y2x1ZGVIb2xpZGF5czogZmFsc2UsXG4gICAgICAgIGV4Y2x1ZGVXZWVrZW5kczogZmFsc2UsXG4gICAgICAgIGV4Y2x1ZGVPdGhlcnM6IGZhbHNlLFxuICAgICAgICBzdGFydERhdGU6IGZhbHNlLFxuICAgICAgICBlbmREYXRlOiBmYWxzZSxcbiAgICAgICAgdGltZTogZmFsc2UsXG4gICAgICAgIG1vbnRoT2ZZZWFyOiBmYWxzZSxcbiAgICAgICAgZGF5T2ZNb250aDogZmFsc2UsXG4gICAgICAgIGRheU9mV2VlazogZmFsc2VcbiAgICB9O1xuXG4gICAgaXNTYXZpbmc6IGJvb2xlYW47XG4gICAgYWxlcnRQcm92aWRlciA9IG5ldyBBbGVydERlZmF1bHRJbXBsKCk7XG5cbiAgICBwcml2YXRlIF9zdWJyOiBTdWJzY3JpcHRpb247XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9idWlsZGVyOiBGb3JtQnVpbGRlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuXG4gICAgZ2V0IGFsZXJ0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxlcnRQcm92aWRlci5kYXRhO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdFNldHRpbmdzLCB0aGlzLmluaXRTZXR0aW5ncyk7XG4gICAgICAgIHRoaXMuaGlkZUNhbmNlbEJ0biA9IHRoaXMuc2V0dGluZ3MuaGlkZUNhbmNlbEJ0bjtcbiAgICAgICAgdGhpcy5oaWRlU3VibWl0QnRuID0gdGhpcy5zZXR0aW5ncy5oaWRlU3VibWl0QnRuO1xuXG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IG1hcFRvRm9ybUZpZWxkcyh0aGlzLmluaXRWYWx1ZSk7XG4gICAgICAgIHRoaXMuZm9ybSA9IHRoaXMuX2J1aWxkZXIuZ3JvdXAoZmllbGRzLCB7IHZhbGlkYXRvcnM6IFtmb3JtVmFsaWRhdG9yXSB9KTtcbiAgICAgICAgdGhpcy51cGRhdGVGaWVsZFZpc2liaWxpdHkodGhpcy5mb3JtLnZhbHVlKTtcblxuICAgICAgICB0aGlzLl9zdWJyID0gdGhpcy5mb3JtLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoYSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkVmlzaWJpbGl0eShhKTtcblxuICAgICAgICAgICAgdGhpcy5ub3RpZnlWYWxpZGF0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVZhbHVlQ2hhbmdlcyh0aGlzLmNvbXB1dGVPdXRWYWx1ZShhKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLl9zdWJyLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoZGF0YTogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmluaXRWYWx1ZSAmJiAhZGF0YS5pbml0VmFsdWUuZmlyc3RDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRm9ybURhdGEoZGF0YS5pbml0VmFsdWUuY3VycmVudFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCB1cGRhdGVGb3JtRGF0YShkYXRhOiBJU2NoZWR1bGVUaW1lKSB7XG4gICAgICAgIGNvbnN0IGNoYW5nZXMgPSBtYXBUb0Zvcm1GaWVsZHMoZGF0YSk7XG4gICAgICAgIHRoaXMuZm9ybS5zZXRWYWx1ZShjaGFuZ2VzLCB7XG4gICAgICAgICAgICBlbWl0RXZlbnQ6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHVwZGF0ZUZpZWxkVmlzaWJpbGl0eShhOiBJRm9ybUZpZWxkcykge1xuXG4gICAgICAgIGZvciAobGV0IGsgaW4gdGhpcy52aXNpYmlsdHlDZmcpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnZpc2liaWx0eUNmZy5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJpbHR5Q2ZnW2tdID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcuc2NoZWR1bGVUeXBlID0gdHJ1ZTtcblxuICAgICAgICBjb25zdCBzY2hlZHVsZVR5cGVWYWwgPSBzYWZlUGFyc2VJbnQoYS5zY2hlZHVsZVR5cGUpO1xuXG4gICAgICAgIGlmIChzY2hlZHVsZVR5cGVWYWwgPT0gMSkge1xuICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcuc3RhcnREYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudmlzaWJpbHR5Q2ZnLnRpbWUgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcucmVjdXJyZW5jZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnZpc2liaWx0eUNmZy5leGNsdWRlSG9saWRheXMgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcuZXhjbHVkZVdlZWtlbmRzID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudmlzaWJpbHR5Q2ZnLmV4Y2x1ZGVPdGhlcnMgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcuZW5kRGF0ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnZpc2liaWx0eUNmZy50aW1lID0gdHJ1ZTtcblxuICAgICAgICAgICAgY29uc3QgcmVjdXJyZW50VmFsID0gc2FmZVBhcnNlSW50KGEucmVjdXJyZW5jZSk7XG4gICAgICAgICAgICBpZiAocmVjdXJyZW50VmFsID09IEludGVydmFsRW51bS5ZZWFyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcubW9udGhPZlllYXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJpbHR5Q2ZnLmRheU9mTW9udGggPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZWN1cnJlbnRWYWwgPT0gSW50ZXJ2YWxFbnVtLk1vbnRoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcuZGF5T2ZNb250aCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlY3VycmVudFZhbCA9PSBJbnRlcnZhbEVudW0uV2Vlaykge1xuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJpbHR5Q2ZnLmRheU9mV2VlayA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlY3VycmVudFZhbCA9PSBJbnRlcnZhbEVudW0uQ3VzdG9tKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcudGltZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJpbHR5Q2ZnLmN1c3RvbUV4cHIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNvbXB1dGVPdXRWYWx1ZShhOiBJRm9ybUZpZWxkcykge1xuICAgICAgICBjb25zdCBzY2hlZHVsZVR5cGVWYWwgPSBzYWZlUGFyc2VJbnQoYS5zY2hlZHVsZVR5cGUpO1xuICAgICAgICBjb25zdCBvdXRwdXQgPSBzY2hlZHVsZVR5cGVWYWwgPT0gU2NoZWR1bGVUeXBlRW51bS5PbmVUaW1lID9cbiAgICAgICAgICAgIHRoaXMuZ2V0T25lVGltZVZhbHVlKGEpIDogdGhpcy5nZXRSZWN1cnJlbnRWYWx1ZShhKTtcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0T25lVGltZVZhbHVlKGE6IElGb3JtRmllbGRzKTogSVNjaGVkdWxlVGltZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc1JlY3VycmVudDogZmFsc2UsXG4gICAgICAgICAgICBzdGFydERhdGU6IGEuc3RhcnREYXRlLFxuICAgICAgICAgICAgdGltZTogYS50aW1lXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldFJlY3VycmVudFZhbHVlKGE6IElGb3JtRmllbGRzKTogSVNjaGVkdWxlVGltZSB7XG4gICAgICAgIGNvbnN0IHJlY3VycmVuY2UgPSBzYWZlUGFyc2VJbnQoYS5yZWN1cnJlbmNlKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXNSZWN1cnJlbnQ6IHRydWUsXG4gICAgICAgICAgICByZWN1cnJlbmNlOiByZWN1cnJlbmNlLFxuICAgICAgICAgICAgaG9saWRheXM6IGEuZXhjbHVkZUhvbGlkYXlzID8gYS5ob2xpZGF5cyA6ICcnLFxuICAgICAgICAgICAgZXhjbHVkZVdlZWtlbmRzOiBhLmV4Y2x1ZGVXZWVrZW5kcyxcbiAgICAgICAgICAgIG90aGVyRGF5czogYS5leGNsdWRlT3RoZXJzID8gYS5vdGhlckRheXMgOiAnJyxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogYS5zdGFydERhdGUsXG4gICAgICAgICAgICBlbmREYXRlOiBhLmVuZERhdGUsXG4gICAgICAgICAgICB0aW1lOiBhLnRpbWUsXG4gICAgICAgICAgICBtb250aE9mWWVhcjogYS5tb250aE9mWWVhcixcbiAgICAgICAgICAgIGRheU9mTW9udGg6IGEuZGF5T2ZNb250aCxcbiAgICAgICAgICAgIGRheU9mV2VlazogYS5kYXlPZldlZWtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25maXJtKCkge1xuICAgICAgICBpZiAoIXRoaXMuZm9ybS52YWxpZCkge1xuICAgICAgICAgICAgdGhpcy5hbGVydFByb3ZpZGVyLndhcm5pbmcoJ3BvbHBDcm9uSm9iLmVycm9ycy5nZW5lcmFsJywgNTAwMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvdXRwdXQgPSB0aGlzLmNvbXB1dGVPdXRWYWx1ZSh0aGlzLmZvcm0udmFsdWUpO1xuICAgICAgICB0aGlzLm9uU2F2ZS5lbWl0KG91dHB1dCk7XG4gICAgfVxuXG4gICAgY2FuY2VsKCkge1xuICAgICAgICB0aGlzLm9uQ2FuY2VsLmVtaXQoKTtcbiAgICB9XG5cbn1cbiJdfQ==