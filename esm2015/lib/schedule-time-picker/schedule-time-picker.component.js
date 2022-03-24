import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { getDaysOfMonth, getDaysOfWeek, getMonthsOfYear, IntervalEnum, safeParseInt } from '@polpware/fe-utilities';
import { AlertDefaultImpl } from '@polpware/ngx-alert';
import { DefaultFormBaseComponent } from '@polpware/ngx-form-common';
import { parseString } from 'cron-parser';
import { defaultDict } from '../i18n';
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
export { ScheduleTimePickerComponent };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUtdGltZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2Nyb24tam9iLyIsInNvdXJjZXMiOlsibGliL3NjaGVkdWxlLXRpbWUtcGlja2VyL3NjaGVkdWxlLXRpbWUtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQStDLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRyxPQUFPLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BILE9BQU8sRUFBRSxnQkFBZ0IsRUFBb0IsTUFBTSxxQkFBcUIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsd0JBQXdCLEVBQXNCLE1BQU0sMkJBQTJCLENBQUM7QUFDekYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUUxQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxzQkFBc0IsRUFBaUIsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPeEYsTUFBTSxlQUFlLEdBQWM7SUFDL0IsYUFBYSxFQUFFLEtBQUs7SUFDcEIsYUFBYSxFQUFFLElBQUk7Q0FDdEIsQ0FBQTtBQUVELE1BQU0sYUFBYSxHQUFnQixDQUFDLE9BQWtCLEVBQTJCLEVBQUU7SUFFL0UsTUFBTSxlQUFlLEdBQUcsWUFBWSxDQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pGLElBQUksZUFBZSxJQUFJLENBQUMsRUFBRTtRQUN0QixPQUFPLEVBQUUsWUFBWSxFQUFFLElB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OEJBQThCO1FBQ3hDLHU3U0FBb0Q7O0tBRXZELENBQUM7cUNBOERnQyxXQUFXO0dBN0RoQywyQkFBMkIsQ0E0THZDO1NBNUxZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBWYWxpZGF0aW9uRXJyb3JzLCBWYWxpZGF0b3JGbiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGdldERheXNPZk1vbnRoLCBnZXREYXlzT2ZXZWVrLCBnZXRNb250aHNPZlllYXIsIEludGVydmFsRW51bSwgc2FmZVBhcnNlSW50IH0gZnJvbSAnQHBvbHB3YXJlL2ZlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBBbGVydERlZmF1bHRJbXBsLCBJSGFzQWxlcnRGZWF0dXJlIH0gZnJvbSAnQHBvbHB3YXJlL25neC1hbGVydCc7XG5pbXBvcnQgeyBEZWZhdWx0Rm9ybUJhc2VDb21wb25lbnQsIElEZWZhdWx0Rm9ybUlucHV0cyB9IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtZm9ybS1jb21tb24nO1xuaW1wb3J0IHsgcGFyc2VTdHJpbmcgfSBmcm9tICdjcm9uLXBhcnNlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlZmF1bHREaWN0IH0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQgeyBnZXREZWZhdWx0U2NoZWR1bGVUaW1lLCBJU2NoZWR1bGVUaW1lLCBTY2hlZHVsZVR5cGVFbnVtIH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNldHRpbmdzIGV4dGVuZHMgSURlZmF1bHRGb3JtSW5wdXRzIHtcbiAgICBoaWRlU3VibWl0QnRuPzogYm9vbGVhbjtcbiAgICBoaWRlQ2FuY2VsQnRuPzogYm9vbGVhbjtcbn1cblxuY29uc3QgZGVmYXVsdFNldHRpbmdzOiBJU2V0dGluZ3MgPSB7XG4gICAgaGlkZVN1Ym1pdEJ0bjogZmFsc2UsXG4gICAgaGlkZUNhbmNlbEJ0bjogdHJ1ZVxufVxuXG5jb25zdCBmb3JtVmFsaWRhdG9yOiBWYWxpZGF0b3JGbiA9IChjb250cm9sOiBGb3JtR3JvdXApOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG5cbiAgICBjb25zdCBzY2hlZHVsZVR5cGVWYWwgPSBzYWZlUGFyc2VJbnQoKGNvbnRyb2wuZ2V0KCdzY2hlZHVsZVR5cGUnKSBhcyBGb3JtQ29udHJvbCkudmFsdWUpO1xuICAgIGlmIChzY2hlZHVsZVR5cGVWYWwgPT0gMCkge1xuICAgICAgICByZXR1cm4geyBzY2hlZHVsZVR5cGU6IHRydWUgfTtcbiAgICB9XG4gICAgaWYgKHNjaGVkdWxlVHlwZVZhbCA9PSAyKSB7IC8vIG9uZSB0aW1lXG4gICAgICAgIGNvbnN0IHJlY3VycmVuY2VWYWwgPSBzYWZlUGFyc2VJbnQoKGNvbnRyb2wuZ2V0KCdyZWN1cnJlbmNlJykgYXMgRm9ybUNvbnRyb2wpLnZhbHVlKTtcbiAgICAgICAgaWYgKHJlY3VycmVuY2VWYWwgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgcmVjdXJyZW5jZTogdHJ1ZSB9XG4gICAgICAgIH0gZWxzZSBpZiAocmVjdXJyZW5jZVZhbCA9PSBJbnRlcnZhbEVudW0uQ3VzdG9tKSB7XG4gICAgICAgICAgICBjb25zdCBjdXN0b21FeHByVmFsID0gKGNvbnRyb2wuZ2V0KCdjdXN0b21FeHByJykgYXMgRm9ybUNvbnRyb2wpLnZhbHVlO1xuICAgICAgICAgICAgaWYgKCFjdXN0b21FeHByVmFsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgY3VzdG9tRXhwcjogdHJ1ZSB9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyB2YWxpZGF0ZVxuICAgICAgICAgICAgICAgIGNvbnN0IHIgPSBwYXJzZVN0cmluZyhjdXN0b21FeHByVmFsKTtcbiAgICAgICAgICAgICAgICBpZiAoci5lcnJvcnMgJiYgT2JqZWN0LmtleXMoci5lcnJvcnMpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBjdXN0b21FeHByOiB0cnVlIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGludGVyZmFjZSBJRm9ybUZpZWxkcyB7XG4gICAgc2NoZWR1bGVUeXBlOiBudW1iZXI7XG4gICAgcmVjdXJyZW5jZTogbnVtYmVyO1xuICAgIGV4Y2x1ZGVIb2xpZGF5czogYm9vbGVhbjtcbiAgICBob2xpZGF5czogc3RyaW5nO1xuICAgIGV4Y2x1ZGVXZWVrZW5kczogYm9vbGVhbjtcbiAgICBleGNsdWRlT3RoZXJzOiBib29sZWFuO1xuICAgIG90aGVyRGF5czogc3RyaW5nO1xuICAgIGN1c3RvbUV4cHI6IHN0cmluZztcbiAgICBzdGFydERhdGU6IERhdGU7XG4gICAgZW5kRGF0ZTogRGF0ZTtcbiAgICBtb250aE9mWWVhcjogbnVtYmVyO1xuICAgIGRheU9mTW9udGg6IG51bWJlcjtcbiAgICBkYXlPZldlZWs6IG51bWJlcjtcbiAgICB0aW1lOiBEYXRlO1xufVxuXG5mdW5jdGlvbiBtYXBUb0Zvcm1GaWVsZHMoZGF0YTogSVNjaGVkdWxlVGltZSkge1xuICAgIGNvbnN0IGRlZmF1bHREYXRhID0gZ2V0RGVmYXVsdFNjaGVkdWxlVGltZSgpO1xuICAgIGRhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0RGF0YSwgZGF0YSB8fCB7fSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gVGhlIHZhbHVlIGZvciB0aGUgcmFkaW8gYnV0dG9uIGlzIHR5cGUgb2Ygc3RyaW5nLlxuICAgICAgICBzY2hlZHVsZVR5cGU6IChkYXRhLmlzUmVjdXJyZW50ID8gU2NoZWR1bGVUeXBlRW51bS5SZWN1cnJlbnQgOiBTY2hlZHVsZVR5cGVFbnVtLk9uZVRpbWUpLnRvU3RyaW5nKCksXG4gICAgICAgIHJlY3VycmVuY2U6IGRhdGEucmVjdXJyZW5jZSxcbiAgICAgICAgZXhjbHVkZUhvbGlkYXlzOiAhIWRhdGEuaG9saWRheXMsXG4gICAgICAgIGhvbGlkYXlzOiBkYXRhLmhvbGlkYXlzLFxuICAgICAgICBleGNsdWRlV2Vla2VuZHM6IGRhdGEuZXhjbHVkZVdlZWtlbmRzLFxuICAgICAgICBleGNsdWRlT3RoZXJzOiAhIWRhdGEub3RoZXJEYXlzLFxuICAgICAgICBvdGhlckRheXM6IGRhdGEub3RoZXJEYXlzLFxuICAgICAgICBjdXN0b21FeHByOiBkYXRhLmN1c3RvbUV4cHIsXG4gICAgICAgIHN0YXJ0RGF0ZTogZGF0YS5zdGFydERhdGUsXG4gICAgICAgIGVuZERhdGU6IGRhdGEuZW5kRGF0ZSxcbiAgICAgICAgdGltZTogZGF0YS50aW1lLFxuICAgICAgICBtb250aE9mWWVhcjogZGF0YS5tb250aE9mWWVhcixcbiAgICAgICAgZGF5T2ZXZWVrOiBkYXRhLmRheU9mV2VlayxcbiAgICAgICAgZGF5T2ZNb250aDogZGF0YS5kYXlPZk1vbnRoXG4gICAgfTtcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb2xwLWJzLXNjaGVkdWxlLXRpbWUtcGlja2VyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vc2NoZWR1bGUtdGltZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3NjaGVkdWxlLXRpbWUtcGlja2VyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTY2hlZHVsZVRpbWVQaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBEZWZhdWx0Rm9ybUJhc2VDb21wb25lbnRcbiAgICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMsIElIYXNBbGVydEZlYXR1cmUge1xuXG4gICAgQElucHV0KCkgaW5pdFNldHRpbmdzOiBJU2V0dGluZ3MgPSB7fTtcbiAgICBASW5wdXQoKSBpbml0VmFsdWU6IElTY2hlZHVsZVRpbWUgPSBudWxsO1xuXG4gICAgc2V0dGluZ3M6IElTZXR0aW5ncyA9IHt9O1xuXG4gICAgZGVmYXVsdFJlcyA9IGRlZmF1bHREaWN0O1xuXG4gICAgLy8gU2NoZWR1bGUgbW9kbGVcbiAgICBmb3JtOiBGb3JtR3JvdXA7XG4gICAgc2NoZWR1bGVUeXBlT3B0aW9ucyA9IFt7XG4gICAgICAgIHZhbHVlOiBTY2hlZHVsZVR5cGVFbnVtLk9uZVRpbWUsXG4gICAgICAgIHRleHQ6ICdwb2xwQ3JvbkpvYi5vbmVUaW1lU2NoZWR1bGUnXG4gICAgfSwge1xuICAgICAgICB2YWx1ZTogU2NoZWR1bGVUeXBlRW51bS5SZWN1cnJlbnQsXG4gICAgICAgIHRleHQ6ICdwb2xwQ3JvbkpvYi5yZWN1cnJlbnRTY2hlZHVsZSdcbiAgICB9XTtcblxuICAgIHJlY3VycmVuY2VPcHRpb25zID0gW3tcbiAgICAgICAgdmFsdWU6IEludGVydmFsRW51bS5EYXksXG4gICAgICAgIHRleHQ6ICdwb2xwQ3JvbkpvYi5ldmVyeURheSdcbiAgICB9LCB7XG4gICAgICAgIHZhbHVlOiBJbnRlcnZhbEVudW0uV2VlayxcbiAgICAgICAgdGV4dDogJ3BvbHBDcm9uSm9iLmV2ZXJ5V2VlaydcbiAgICB9LCB7XG4gICAgICAgIHZhbHVlOiBJbnRlcnZhbEVudW0uTW9udGgsXG4gICAgICAgIHRleHQ6ICdwb2xwQ3JvbkpvYi5ldmVyeU1vbnRoJ1xuICAgIH0sIHtcbiAgICAgICAgdmFsdWU6IEludGVydmFsRW51bS5ZZWFyLFxuICAgICAgICB0ZXh0OiAncG9scENyb25Kb2IuZXZlcnlZZWFyJ1xuICAgIH0sIHtcbiAgICAgICAgdmFsdWU6IEludGVydmFsRW51bS5DdXN0b20sXG4gICAgICAgIHRleHQ6ICdwb2xwQ3JvbkpvYi5jdXN0b21JbnRlcnZhbCdcbiAgICB9XTtcblxuICAgIGRheXNPZldlZWtPcHRpb25zID0gZ2V0RGF5c09mV2VlaygpO1xuICAgIG1vbnRoc09mWWVhck9wdGlvbnMgPSBnZXRNb250aHNPZlllYXIoKTtcbiAgICBkYXlzT2ZNb250aE9wdGlvbnMgPSBnZXREYXlzT2ZNb250aCgpO1xuXG4gICAgdmlzaWJpbHR5Q2ZnID0ge1xuICAgICAgICBzY2hlZHVsZVR5cGU6IHRydWUsXG4gICAgICAgIHJlY3VycmVuY2U6IGZhbHNlLFxuICAgICAgICBjdXN0b21FeHByOiBmYWxzZSxcbiAgICAgICAgZXhjbHVkZUhvbGlkYXlzOiBmYWxzZSxcbiAgICAgICAgZXhjbHVkZVdlZWtlbmRzOiBmYWxzZSxcbiAgICAgICAgZXhjbHVkZU90aGVyczogZmFsc2UsXG4gICAgICAgIHN0YXJ0RGF0ZTogZmFsc2UsXG4gICAgICAgIGVuZERhdGU6IGZhbHNlLFxuICAgICAgICB0aW1lOiBmYWxzZSxcbiAgICAgICAgbW9udGhPZlllYXI6IGZhbHNlLFxuICAgICAgICBkYXlPZk1vbnRoOiBmYWxzZSxcbiAgICAgICAgZGF5T2ZXZWVrOiBmYWxzZVxuICAgIH07XG5cbiAgICBpc1NhdmluZzogYm9vbGVhbjtcbiAgICBhbGVydFByb3ZpZGVyID0gbmV3IEFsZXJ0RGVmYXVsdEltcGwoKTtcblxuICAgIHByaXZhdGUgX3N1YnI6IFN1YnNjcmlwdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2J1aWxkZXI6IEZvcm1CdWlsZGVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG5cbiAgICBnZXQgYWxlcnRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hbGVydFByb3ZpZGVyLmRhdGE7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0U2V0dGluZ3MsIHRoaXMuaW5pdFNldHRpbmdzKTtcbiAgICAgICAgdGhpcy5oaWRlQ2FuY2VsQnRuID0gdGhpcy5zZXR0aW5ncy5oaWRlQ2FuY2VsQnRuO1xuICAgICAgICB0aGlzLmhpZGVTdWJtaXRCdG4gPSB0aGlzLnNldHRpbmdzLmhpZGVTdWJtaXRCdG47XG5cbiAgICAgICAgY29uc3QgZmllbGRzID0gbWFwVG9Gb3JtRmllbGRzKHRoaXMuaW5pdFZhbHVlKTtcbiAgICAgICAgdGhpcy5mb3JtID0gdGhpcy5fYnVpbGRlci5ncm91cChmaWVsZHMsIHsgdmFsaWRhdG9yczogW2Zvcm1WYWxpZGF0b3JdIH0pO1xuICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkVmlzaWJpbGl0eSh0aGlzLmZvcm0udmFsdWUpO1xuXG4gICAgICAgIHRoaXMuX3N1YnIgPSB0aGlzLmZvcm0udmFsdWVDaGFuZ2VzLnN1YnNjcmliZShhID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRmllbGRWaXNpYmlsaXR5KGEpO1xuXG4gICAgICAgICAgICB0aGlzLm5vdGlmeVZhbGlkYXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5VmFsdWVDaGFuZ2VzKHRoaXMuY29tcHV0ZU91dFZhbHVlKGEpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuX3N1YnIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhkYXRhOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEuaW5pdFZhbHVlICYmICFkYXRhLmluaXRWYWx1ZS5maXJzdENoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVGb3JtRGF0YShkYXRhLmluaXRWYWx1ZS5jdXJyZW50VmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHVwZGF0ZUZvcm1EYXRhKGRhdGE6IElTY2hlZHVsZVRpbWUpIHtcbiAgICAgICAgY29uc3QgY2hhbmdlcyA9IG1hcFRvRm9ybUZpZWxkcyhkYXRhKTtcbiAgICAgICAgdGhpcy5mb3JtLnNldFZhbHVlKGNoYW5nZXMsIHtcbiAgICAgICAgICAgIGVtaXRFdmVudDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlRmllbGRWaXNpYmlsaXR5KGE6IElGb3JtRmllbGRzKSB7XG5cbiAgICAgICAgZm9yIChsZXQgayBpbiB0aGlzLnZpc2liaWx0eUNmZykge1xuICAgICAgICAgICAgaWYgKHRoaXMudmlzaWJpbHR5Q2ZnLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmdba10gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZpc2liaWx0eUNmZy5zY2hlZHVsZVR5cGUgPSB0cnVlO1xuXG4gICAgICAgIGNvbnN0IHNjaGVkdWxlVHlwZVZhbCA9IHNhZmVQYXJzZUludChhLnNjaGVkdWxlVHlwZSk7XG5cbiAgICAgICAgaWYgKHNjaGVkdWxlVHlwZVZhbCA9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnZpc2liaWx0eUNmZy5zdGFydERhdGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcudGltZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnZpc2liaWx0eUNmZy5yZWN1cnJlbmNlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudmlzaWJpbHR5Q2ZnLmV4Y2x1ZGVIb2xpZGF5cyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnZpc2liaWx0eUNmZy5leGNsdWRlV2Vla2VuZHMgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcuZXhjbHVkZU90aGVycyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnZpc2liaWx0eUNmZy5lbmREYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudmlzaWJpbHR5Q2ZnLnRpbWUgPSB0cnVlO1xuXG4gICAgICAgICAgICBjb25zdCByZWN1cnJlbnRWYWwgPSBzYWZlUGFyc2VJbnQoYS5yZWN1cnJlbmNlKTtcbiAgICAgICAgICAgIGlmIChyZWN1cnJlbnRWYWwgPT0gSW50ZXJ2YWxFbnVtLlllYXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2liaWx0eUNmZy5tb250aE9mWWVhciA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcuZGF5T2ZNb250aCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlY3VycmVudFZhbCA9PSBJbnRlcnZhbEVudW0uTW9udGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2liaWx0eUNmZy5kYXlPZk1vbnRoID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVjdXJyZW50VmFsID09IEludGVydmFsRW51bS5XZWVrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcuZGF5T2ZXZWVrID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVjdXJyZW50VmFsID09IEludGVydmFsRW51bS5DdXN0b20pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2liaWx0eUNmZy50aW1lID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcuY3VzdG9tRXhwciA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY29tcHV0ZU91dFZhbHVlKGE6IElGb3JtRmllbGRzKSB7XG4gICAgICAgIGNvbnN0IHNjaGVkdWxlVHlwZVZhbCA9IHNhZmVQYXJzZUludChhLnNjaGVkdWxlVHlwZSk7XG4gICAgICAgIGNvbnN0IG91dHB1dCA9IHNjaGVkdWxlVHlwZVZhbCA9PSBTY2hlZHVsZVR5cGVFbnVtLk9uZVRpbWUgP1xuICAgICAgICAgICAgdGhpcy5nZXRPbmVUaW1lVmFsdWUoYSkgOiB0aGlzLmdldFJlY3VycmVudFZhbHVlKGEpO1xuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRPbmVUaW1lVmFsdWUoYTogSUZvcm1GaWVsZHMpOiBJU2NoZWR1bGVUaW1lIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlzUmVjdXJyZW50OiBmYWxzZSxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogYS5zdGFydERhdGUsXG4gICAgICAgICAgICB0aW1lOiBhLnRpbWVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0UmVjdXJyZW50VmFsdWUoYTogSUZvcm1GaWVsZHMpOiBJU2NoZWR1bGVUaW1lIHtcbiAgICAgICAgY29uc3QgcmVjdXJyZW5jZSA9IHNhZmVQYXJzZUludChhLnJlY3VycmVuY2UpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc1JlY3VycmVudDogdHJ1ZSxcbiAgICAgICAgICAgIHJlY3VycmVuY2U6IHJlY3VycmVuY2UsXG4gICAgICAgICAgICBob2xpZGF5czogYS5leGNsdWRlSG9saWRheXMgPyBhLmhvbGlkYXlzIDogJycsXG4gICAgICAgICAgICBleGNsdWRlV2Vla2VuZHM6IGEuZXhjbHVkZVdlZWtlbmRzLFxuICAgICAgICAgICAgb3RoZXJEYXlzOiBhLmV4Y2x1ZGVPdGhlcnMgPyBhLm90aGVyRGF5cyA6ICcnLFxuICAgICAgICAgICAgc3RhcnREYXRlOiBhLnN0YXJ0RGF0ZSxcbiAgICAgICAgICAgIGVuZERhdGU6IGEuZW5kRGF0ZSxcbiAgICAgICAgICAgIHRpbWU6IGEudGltZSxcbiAgICAgICAgICAgIG1vbnRoT2ZZZWFyOiBhLm1vbnRoT2ZZZWFyLFxuICAgICAgICAgICAgZGF5T2ZNb250aDogYS5kYXlPZk1vbnRoLFxuICAgICAgICAgICAgZGF5T2ZXZWVrOiBhLmRheU9mV2Vla1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbmZpcm0oKSB7XG4gICAgICAgIGlmICghdGhpcy5mb3JtLnZhbGlkKSB7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0UHJvdmlkZXIud2FybmluZygncG9scENyb25Kb2IuZXJyb3JzLmdlbmVyYWwnLCA1MDAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG91dHB1dCA9IHRoaXMuY29tcHV0ZU91dFZhbHVlKHRoaXMuZm9ybS52YWx1ZSk7XG4gICAgICAgIHRoaXMub25TYXZlLmVtaXQob3V0cHV0KTtcbiAgICB9XG5cbiAgICBjYW5jZWwoKSB7XG4gICAgICAgIHRoaXMub25DYW5jZWwuZW1pdCgpO1xuICAgIH1cblxufVxuIl19