import { __decorate, __extends, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { getDaysOfMonth, getDaysOfWeek, getMonthsOfYear, IntervalEnum, safeParseInt } from '@polpware/fe-utilities';
import { AlertDefaultImpl } from '@polpware/ngx-alert';
import { DefaultFormBaseComponent } from '@polpware/ngx-form-common';
import { parseString } from 'cron-parser';
import { defaultDict } from '../i18n';
import { getDefaultScheduleTime, ScheduleTypeEnum } from '../interfaces';
var defaultSettings = {
    hideSubmitBtn: false,
    hideCancelBtn: true
};
var formValidator = function (control) {
    var scheduleTypeVal = safeParseInt(control.get('scheduleType').value);
    if (scheduleTypeVal == 0) {
        return { scheduleType: true };
    }
    if (scheduleTypeVal == 2) { // one time
        var recurrenceVal = safeParseInt(control.get('recurrence').value);
        if (recurrenceVal == 0) {
            return { recurrence: true };
        }
        else if (recurrenceVal == IntervalEnum.Custom) {
            var customExprVal = control.get('customExpr').value;
            if (!customExprVal) {
                return { customExpr: true };
            }
            else {
                // validate
                var r = parseString(customExprVal);
                if (r.errors && Object.keys(r.errors).length) {
                    return { customExpr: true };
                }
            }
        }
    }
};
var ɵ0 = formValidator;
function mapToFormFields(data) {
    var defaultData = getDefaultScheduleTime();
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
var ScheduleTimePickerComponent = /** @class */ (function (_super) {
    __extends(ScheduleTimePickerComponent, _super);
    function ScheduleTimePickerComponent(_builder) {
        var _this = _super.call(this) || this;
        _this._builder = _builder;
        _this.initSettings = {};
        _this.initValue = null;
        _this.settings = {};
        _this.defaultRes = defaultDict;
        _this.scheduleTypeOptions = [{
                value: ScheduleTypeEnum.OneTime,
                text: 'polpCronJob.oneTimeSchedule'
            }, {
                value: ScheduleTypeEnum.Recurrent,
                text: 'polpCronJob.recurrentSchedule'
            }];
        _this.recurrenceOptions = [{
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
        _this.daysOfWeekOptions = getDaysOfWeek();
        _this.monthsOfYearOptions = getMonthsOfYear();
        _this.daysOfMonthOptions = getDaysOfMonth();
        _this.visibiltyCfg = {
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
        _this.alertProvider = new AlertDefaultImpl();
        return _this;
    }
    Object.defineProperty(ScheduleTimePickerComponent.prototype, "alerts", {
        get: function () {
            return this.alertProvider.data;
        },
        enumerable: true,
        configurable: true
    });
    ScheduleTimePickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.settings = Object.assign({}, defaultSettings, this.initSettings);
        this.hideCancelBtn = this.settings.hideCancelBtn;
        this.hideSubmitBtn = this.settings.hideSubmitBtn;
        var fields = mapToFormFields(this.initValue);
        this.form = this._builder.group(fields, { validators: [formValidator] });
        this.updateFieldVisibility(this.form.value);
        this._subr = this.form.valueChanges.subscribe(function (a) {
            _this.updateFieldVisibility(a);
            _this.notifyValidation();
            _this.notifyValueChanges(_this.computeOutValue(a));
        });
    };
    ScheduleTimePickerComponent.prototype.ngOnDestroy = function () {
        this._subr.unsubscribe();
    };
    ScheduleTimePickerComponent.prototype.ngOnChanges = function (data) {
        if (data && data.initValue && !data.initValue.firstChange) {
            this.updateFormData(data.initValue.currentValue);
        }
    };
    ScheduleTimePickerComponent.prototype.updateFormData = function (data) {
        var changes = mapToFormFields(data);
        this.form.setValue(changes, {
            emitEvent: true
        });
    };
    ScheduleTimePickerComponent.prototype.updateFieldVisibility = function (a) {
        for (var k in this.visibiltyCfg) {
            if (this.visibiltyCfg.hasOwnProperty(k)) {
                this.visibiltyCfg[k] = false;
            }
        }
        this.visibiltyCfg.scheduleType = true;
        var scheduleTypeVal = safeParseInt(a.scheduleType);
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
            var recurrentVal = safeParseInt(a.recurrence);
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
    };
    ScheduleTimePickerComponent.prototype.computeOutValue = function (a) {
        var scheduleTypeVal = safeParseInt(a.scheduleType);
        var output = scheduleTypeVal == ScheduleTypeEnum.OneTime ?
            this.getOneTimeValue(a) : this.getRecurrentValue(a);
        return output;
    };
    ScheduleTimePickerComponent.prototype.getOneTimeValue = function (a) {
        return {
            isRecurrent: false,
            startDate: a.startDate,
            time: a.time
        };
    };
    ScheduleTimePickerComponent.prototype.getRecurrentValue = function (a) {
        var recurrence = safeParseInt(a.recurrence);
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
    };
    ScheduleTimePickerComponent.prototype.confirm = function () {
        if (!this.form.valid) {
            this.alertProvider.warning('polpCronJob.errors.general', 5000);
            return;
        }
        var output = this.computeOutValue(this.form.value);
        this.onSave.emit(output);
    };
    ScheduleTimePickerComponent.prototype.cancel = function () {
        this.onCancel.emit();
    };
    ScheduleTimePickerComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
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
    return ScheduleTimePickerComponent;
}(DefaultFormBaseComponent));
export { ScheduleTimePickerComponent };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUtdGltZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2Nyb24tam9iLyIsInNvdXJjZXMiOlsibGliL3NjaGVkdWxlLXRpbWUtcGlja2VyL3NjaGVkdWxlLXRpbWUtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQStDLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRyxPQUFPLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BILE9BQU8sRUFBRSxnQkFBZ0IsRUFBb0IsTUFBTSxxQkFBcUIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsd0JBQXdCLEVBQXNCLE1BQU0sMkJBQTJCLENBQUM7QUFDekYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUUxQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxzQkFBc0IsRUFBaUIsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPeEYsSUFBTSxlQUFlLEdBQWM7SUFDL0IsYUFBYSxFQUFFLEtBQUs7SUFDcEIsYUFBYSxFQUFFLElBQUk7Q0FDdEIsQ0FBQTtBQUVELElBQU0sYUFBYSxHQUFnQixVQUFDLE9BQWtCO0lBRWxELElBQU0sZUFBZSxHQUFHLFlBQVksQ0FBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6RixJQUFJLGVBQWUsSUFBSSxDQUFDLEVBQUU7UUFDdEIsT0FBTyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FB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SUFKaEMsMkJBQTJCO1FBTHZDLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSw4QkFBOEI7WUFDeEMsdTdTQUFvRDs7U0FFdkQsQ0FBQzt5Q0E4RGdDLFdBQVc7T0E3RGhDLDJCQUEyQixDQTRMdkM7SUFBRCxrQ0FBQztDQUFBLEFBNUxELENBQWlELHdCQUF3QixHQTRMeEU7U0E1TFksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIFZhbGlkYXRpb25FcnJvcnMsIFZhbGlkYXRvckZuIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgZ2V0RGF5c09mTW9udGgsIGdldERheXNPZldlZWssIGdldE1vbnRoc09mWWVhciwgSW50ZXJ2YWxFbnVtLCBzYWZlUGFyc2VJbnQgfSBmcm9tICdAcG9scHdhcmUvZmUtdXRpbGl0aWVzJztcbmltcG9ydCB7IEFsZXJ0RGVmYXVsdEltcGwsIElIYXNBbGVydEZlYXR1cmUgfSBmcm9tICdAcG9scHdhcmUvbmd4LWFsZXJ0JztcbmltcG9ydCB7IERlZmF1bHRGb3JtQmFzZUNvbXBvbmVudCwgSURlZmF1bHRGb3JtSW5wdXRzIH0gZnJvbSAnQHBvbHB3YXJlL25neC1mb3JtLWNvbW1vbic7XG5pbXBvcnQgeyBwYXJzZVN0cmluZyB9IGZyb20gJ2Nyb24tcGFyc2VyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVmYXVsdERpY3QgfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7IGdldERlZmF1bHRTY2hlZHVsZVRpbWUsIElTY2hlZHVsZVRpbWUsIFNjaGVkdWxlVHlwZUVudW0gfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcblxuZXhwb3J0IGludGVyZmFjZSBJU2V0dGluZ3MgZXh0ZW5kcyBJRGVmYXVsdEZvcm1JbnB1dHMge1xuICAgIGhpZGVTdWJtaXRCdG4/OiBib29sZWFuO1xuICAgIGhpZGVDYW5jZWxCdG4/OiBib29sZWFuO1xufVxuXG5jb25zdCBkZWZhdWx0U2V0dGluZ3M6IElTZXR0aW5ncyA9IHtcbiAgICBoaWRlU3VibWl0QnRuOiBmYWxzZSxcbiAgICBoaWRlQ2FuY2VsQnRuOiB0cnVlXG59XG5cbmNvbnN0IGZvcm1WYWxpZGF0b3I6IFZhbGlkYXRvckZuID0gKGNvbnRyb2w6IEZvcm1Hcm91cCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcblxuICAgIGNvbnN0IHNjaGVkdWxlVHlwZVZhbCA9IHNhZmVQYXJzZUludCgoY29udHJvbC5nZXQoJ3NjaGVkdWxlVHlwZScpIGFzIEZvcm1Db250cm9sKS52YWx1ZSk7XG4gICAgaWYgKHNjaGVkdWxlVHlwZVZhbCA9PSAwKSB7XG4gICAgICAgIHJldHVybiB7IHNjaGVkdWxlVHlwZTogdHJ1ZSB9O1xuICAgIH1cbiAgICBpZiAoc2NoZWR1bGVUeXBlVmFsID09IDIpIHsgLy8gb25lIHRpbWVcbiAgICAgICAgY29uc3QgcmVjdXJyZW5jZVZhbCA9IHNhZmVQYXJzZUludCgoY29udHJvbC5nZXQoJ3JlY3VycmVuY2UnKSBhcyBGb3JtQ29udHJvbCkudmFsdWUpO1xuICAgICAgICBpZiAocmVjdXJyZW5jZVZhbCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4geyByZWN1cnJlbmNlOiB0cnVlIH1cbiAgICAgICAgfSBlbHNlIGlmIChyZWN1cnJlbmNlVmFsID09IEludGVydmFsRW51bS5DdXN0b20pIHtcbiAgICAgICAgICAgIGNvbnN0IGN1c3RvbUV4cHJWYWwgPSAoY29udHJvbC5nZXQoJ2N1c3RvbUV4cHInKSBhcyBGb3JtQ29udHJvbCkudmFsdWU7XG4gICAgICAgICAgICBpZiAoIWN1c3RvbUV4cHJWYWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBjdXN0b21FeHByOiB0cnVlIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHZhbGlkYXRlXG4gICAgICAgICAgICAgICAgY29uc3QgciA9IHBhcnNlU3RyaW5nKGN1c3RvbUV4cHJWYWwpO1xuICAgICAgICAgICAgICAgIGlmIChyLmVycm9ycyAmJiBPYmplY3Qua2V5cyhyLmVycm9ycykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGN1c3RvbUV4cHI6IHRydWUgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIElGb3JtRmllbGRzIHtcbiAgICBzY2hlZHVsZVR5cGU6IG51bWJlcjtcbiAgICByZWN1cnJlbmNlOiBudW1iZXI7XG4gICAgZXhjbHVkZUhvbGlkYXlzOiBib29sZWFuO1xuICAgIGhvbGlkYXlzOiBzdHJpbmc7XG4gICAgZXhjbHVkZVdlZWtlbmRzOiBib29sZWFuO1xuICAgIGV4Y2x1ZGVPdGhlcnM6IGJvb2xlYW47XG4gICAgb3RoZXJEYXlzOiBzdHJpbmc7XG4gICAgY3VzdG9tRXhwcjogc3RyaW5nO1xuICAgIHN0YXJ0RGF0ZTogRGF0ZTtcbiAgICBlbmREYXRlOiBEYXRlO1xuICAgIG1vbnRoT2ZZZWFyOiBudW1iZXI7XG4gICAgZGF5T2ZNb250aDogbnVtYmVyO1xuICAgIGRheU9mV2VlazogbnVtYmVyO1xuICAgIHRpbWU6IERhdGU7XG59XG5cbmZ1bmN0aW9uIG1hcFRvRm9ybUZpZWxkcyhkYXRhOiBJU2NoZWR1bGVUaW1lKSB7XG4gICAgY29uc3QgZGVmYXVsdERhdGEgPSBnZXREZWZhdWx0U2NoZWR1bGVUaW1lKCk7XG4gICAgZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHREYXRhLCBkYXRhIHx8IHt9KTtcbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBUaGUgdmFsdWUgZm9yIHRoZSByYWRpbyBidXR0b24gaXMgdHlwZSBvZiBzdHJpbmcuXG4gICAgICAgIHNjaGVkdWxlVHlwZTogKGRhdGEuaXNSZWN1cnJlbnQgPyBTY2hlZHVsZVR5cGVFbnVtLlJlY3VycmVudCA6IFNjaGVkdWxlVHlwZUVudW0uT25lVGltZSkudG9TdHJpbmcoKSxcbiAgICAgICAgcmVjdXJyZW5jZTogZGF0YS5yZWN1cnJlbmNlLFxuICAgICAgICBleGNsdWRlSG9saWRheXM6ICEhZGF0YS5ob2xpZGF5cyxcbiAgICAgICAgaG9saWRheXM6IGRhdGEuaG9saWRheXMsXG4gICAgICAgIGV4Y2x1ZGVXZWVrZW5kczogZGF0YS5leGNsdWRlV2Vla2VuZHMsXG4gICAgICAgIGV4Y2x1ZGVPdGhlcnM6ICEhZGF0YS5vdGhlckRheXMsXG4gICAgICAgIG90aGVyRGF5czogZGF0YS5vdGhlckRheXMsXG4gICAgICAgIGN1c3RvbUV4cHI6IGRhdGEuY3VzdG9tRXhwcixcbiAgICAgICAgc3RhcnREYXRlOiBkYXRhLnN0YXJ0RGF0ZSxcbiAgICAgICAgZW5kRGF0ZTogZGF0YS5lbmREYXRlLFxuICAgICAgICB0aW1lOiBkYXRhLnRpbWUsXG4gICAgICAgIG1vbnRoT2ZZZWFyOiBkYXRhLm1vbnRoT2ZZZWFyLFxuICAgICAgICBkYXlPZldlZWs6IGRhdGEuZGF5T2ZXZWVrLFxuICAgICAgICBkYXlPZk1vbnRoOiBkYXRhLmRheU9mTW9udGhcbiAgICB9O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BvbHAtYnMtc2NoZWR1bGUtdGltZS1waWNrZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zY2hlZHVsZS10aW1lLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vc2NoZWR1bGUtdGltZS1waWNrZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNjaGVkdWxlVGltZVBpY2tlckNvbXBvbmVudCBleHRlbmRzIERlZmF1bHRGb3JtQmFzZUNvbXBvbmVudFxuICAgIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgSUhhc0FsZXJ0RmVhdHVyZSB7XG5cbiAgICBASW5wdXQoKSBpbml0U2V0dGluZ3M6IElTZXR0aW5ncyA9IHt9O1xuICAgIEBJbnB1dCgpIGluaXRWYWx1ZTogSVNjaGVkdWxlVGltZSA9IG51bGw7XG5cbiAgICBzZXR0aW5nczogSVNldHRpbmdzID0ge307XG5cbiAgICBkZWZhdWx0UmVzID0gZGVmYXVsdERpY3Q7XG5cbiAgICAvLyBTY2hlZHVsZSBtb2RsZVxuICAgIGZvcm06IEZvcm1Hcm91cDtcbiAgICBzY2hlZHVsZVR5cGVPcHRpb25zID0gW3tcbiAgICAgICAgdmFsdWU6IFNjaGVkdWxlVHlwZUVudW0uT25lVGltZSxcbiAgICAgICAgdGV4dDogJ3BvbHBDcm9uSm9iLm9uZVRpbWVTY2hlZHVsZSdcbiAgICB9LCB7XG4gICAgICAgIHZhbHVlOiBTY2hlZHVsZVR5cGVFbnVtLlJlY3VycmVudCxcbiAgICAgICAgdGV4dDogJ3BvbHBDcm9uSm9iLnJlY3VycmVudFNjaGVkdWxlJ1xuICAgIH1dO1xuXG4gICAgcmVjdXJyZW5jZU9wdGlvbnMgPSBbe1xuICAgICAgICB2YWx1ZTogSW50ZXJ2YWxFbnVtLkRheSxcbiAgICAgICAgdGV4dDogJ3BvbHBDcm9uSm9iLmV2ZXJ5RGF5J1xuICAgIH0sIHtcbiAgICAgICAgdmFsdWU6IEludGVydmFsRW51bS5XZWVrLFxuICAgICAgICB0ZXh0OiAncG9scENyb25Kb2IuZXZlcnlXZWVrJ1xuICAgIH0sIHtcbiAgICAgICAgdmFsdWU6IEludGVydmFsRW51bS5Nb250aCxcbiAgICAgICAgdGV4dDogJ3BvbHBDcm9uSm9iLmV2ZXJ5TW9udGgnXG4gICAgfSwge1xuICAgICAgICB2YWx1ZTogSW50ZXJ2YWxFbnVtLlllYXIsXG4gICAgICAgIHRleHQ6ICdwb2xwQ3JvbkpvYi5ldmVyeVllYXInXG4gICAgfSwge1xuICAgICAgICB2YWx1ZTogSW50ZXJ2YWxFbnVtLkN1c3RvbSxcbiAgICAgICAgdGV4dDogJ3BvbHBDcm9uSm9iLmN1c3RvbUludGVydmFsJ1xuICAgIH1dO1xuXG4gICAgZGF5c09mV2Vla09wdGlvbnMgPSBnZXREYXlzT2ZXZWVrKCk7XG4gICAgbW9udGhzT2ZZZWFyT3B0aW9ucyA9IGdldE1vbnRoc09mWWVhcigpO1xuICAgIGRheXNPZk1vbnRoT3B0aW9ucyA9IGdldERheXNPZk1vbnRoKCk7XG5cbiAgICB2aXNpYmlsdHlDZmcgPSB7XG4gICAgICAgIHNjaGVkdWxlVHlwZTogdHJ1ZSxcbiAgICAgICAgcmVjdXJyZW5jZTogZmFsc2UsXG4gICAgICAgIGN1c3RvbUV4cHI6IGZhbHNlLFxuICAgICAgICBleGNsdWRlSG9saWRheXM6IGZhbHNlLFxuICAgICAgICBleGNsdWRlV2Vla2VuZHM6IGZhbHNlLFxuICAgICAgICBleGNsdWRlT3RoZXJzOiBmYWxzZSxcbiAgICAgICAgc3RhcnREYXRlOiBmYWxzZSxcbiAgICAgICAgZW5kRGF0ZTogZmFsc2UsXG4gICAgICAgIHRpbWU6IGZhbHNlLFxuICAgICAgICBtb250aE9mWWVhcjogZmFsc2UsXG4gICAgICAgIGRheU9mTW9udGg6IGZhbHNlLFxuICAgICAgICBkYXlPZldlZWs6IGZhbHNlXG4gICAgfTtcblxuICAgIGlzU2F2aW5nOiBib29sZWFuO1xuICAgIGFsZXJ0UHJvdmlkZXIgPSBuZXcgQWxlcnREZWZhdWx0SW1wbCgpO1xuXG4gICAgcHJpdmF0ZSBfc3VicjogU3Vic2NyaXB0aW9uO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYnVpbGRlcjogRm9ybUJ1aWxkZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cblxuICAgIGdldCBhbGVydHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFsZXJ0UHJvdmlkZXIuZGF0YTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRTZXR0aW5ncywgdGhpcy5pbml0U2V0dGluZ3MpO1xuICAgICAgICB0aGlzLmhpZGVDYW5jZWxCdG4gPSB0aGlzLnNldHRpbmdzLmhpZGVDYW5jZWxCdG47XG4gICAgICAgIHRoaXMuaGlkZVN1Ym1pdEJ0biA9IHRoaXMuc2V0dGluZ3MuaGlkZVN1Ym1pdEJ0bjtcblxuICAgICAgICBjb25zdCBmaWVsZHMgPSBtYXBUb0Zvcm1GaWVsZHModGhpcy5pbml0VmFsdWUpO1xuICAgICAgICB0aGlzLmZvcm0gPSB0aGlzLl9idWlsZGVyLmdyb3VwKGZpZWxkcywgeyB2YWxpZGF0b3JzOiBbZm9ybVZhbGlkYXRvcl0gfSk7XG4gICAgICAgIHRoaXMudXBkYXRlRmllbGRWaXNpYmlsaXR5KHRoaXMuZm9ybS52YWx1ZSk7XG5cbiAgICAgICAgdGhpcy5fc3ViciA9IHRoaXMuZm9ybS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKGEgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVGaWVsZFZpc2liaWxpdHkoYSk7XG5cbiAgICAgICAgICAgIHRoaXMubm90aWZ5VmFsaWRhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlWYWx1ZUNoYW5nZXModGhpcy5jb21wdXRlT3V0VmFsdWUoYSkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5fc3Vici51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGRhdGE6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5pbml0VmFsdWUgJiYgIWRhdGEuaW5pdFZhbHVlLmZpcnN0Q2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZvcm1EYXRhKGRhdGEuaW5pdFZhbHVlLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlRm9ybURhdGEoZGF0YTogSVNjaGVkdWxlVGltZSkge1xuICAgICAgICBjb25zdCBjaGFuZ2VzID0gbWFwVG9Gb3JtRmllbGRzKGRhdGEpO1xuICAgICAgICB0aGlzLmZvcm0uc2V0VmFsdWUoY2hhbmdlcywge1xuICAgICAgICAgICAgZW1pdEV2ZW50OiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB1cGRhdGVGaWVsZFZpc2liaWxpdHkoYTogSUZvcm1GaWVsZHMpIHtcblxuICAgICAgICBmb3IgKGxldCBrIGluIHRoaXMudmlzaWJpbHR5Q2ZnKSB7XG4gICAgICAgICAgICBpZiAodGhpcy52aXNpYmlsdHlDZmcuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2liaWx0eUNmZ1trXSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudmlzaWJpbHR5Q2ZnLnNjaGVkdWxlVHlwZSA9IHRydWU7XG5cbiAgICAgICAgY29uc3Qgc2NoZWR1bGVUeXBlVmFsID0gc2FmZVBhcnNlSW50KGEuc2NoZWR1bGVUeXBlKTtcblxuICAgICAgICBpZiAoc2NoZWR1bGVUeXBlVmFsID09IDEpIHtcbiAgICAgICAgICAgIHRoaXMudmlzaWJpbHR5Q2ZnLnN0YXJ0RGF0ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnZpc2liaWx0eUNmZy50aW1lID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmlzaWJpbHR5Q2ZnLnJlY3VycmVuY2UgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcuZXhjbHVkZUhvbGlkYXlzID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudmlzaWJpbHR5Q2ZnLmV4Y2x1ZGVXZWVrZW5kcyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnZpc2liaWx0eUNmZy5leGNsdWRlT3RoZXJzID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudmlzaWJpbHR5Q2ZnLmVuZERhdGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcudGltZSA9IHRydWU7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlY3VycmVudFZhbCA9IHNhZmVQYXJzZUludChhLnJlY3VycmVuY2UpO1xuICAgICAgICAgICAgaWYgKHJlY3VycmVudFZhbCA9PSBJbnRlcnZhbEVudW0uWWVhcikge1xuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJpbHR5Q2ZnLm1vbnRoT2ZZZWFyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2liaWx0eUNmZy5kYXlPZk1vbnRoID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVjdXJyZW50VmFsID09IEludGVydmFsRW51bS5Nb250aCkge1xuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJpbHR5Q2ZnLmRheU9mTW9udGggPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZWN1cnJlbnRWYWwgPT0gSW50ZXJ2YWxFbnVtLldlZWspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2liaWx0eUNmZy5kYXlPZldlZWsgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZWN1cnJlbnRWYWwgPT0gSW50ZXJ2YWxFbnVtLkN1c3RvbSkge1xuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJpbHR5Q2ZnLnRpbWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2liaWx0eUNmZy5jdXN0b21FeHByID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBjb21wdXRlT3V0VmFsdWUoYTogSUZvcm1GaWVsZHMpIHtcbiAgICAgICAgY29uc3Qgc2NoZWR1bGVUeXBlVmFsID0gc2FmZVBhcnNlSW50KGEuc2NoZWR1bGVUeXBlKTtcbiAgICAgICAgY29uc3Qgb3V0cHV0ID0gc2NoZWR1bGVUeXBlVmFsID09IFNjaGVkdWxlVHlwZUVudW0uT25lVGltZSA/XG4gICAgICAgICAgICB0aGlzLmdldE9uZVRpbWVWYWx1ZShhKSA6IHRoaXMuZ2V0UmVjdXJyZW50VmFsdWUoYSk7XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldE9uZVRpbWVWYWx1ZShhOiBJRm9ybUZpZWxkcyk6IElTY2hlZHVsZVRpbWUge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXNSZWN1cnJlbnQ6IGZhbHNlLFxuICAgICAgICAgICAgc3RhcnREYXRlOiBhLnN0YXJ0RGF0ZSxcbiAgICAgICAgICAgIHRpbWU6IGEudGltZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRSZWN1cnJlbnRWYWx1ZShhOiBJRm9ybUZpZWxkcyk6IElTY2hlZHVsZVRpbWUge1xuICAgICAgICBjb25zdCByZWN1cnJlbmNlID0gc2FmZVBhcnNlSW50KGEucmVjdXJyZW5jZSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlzUmVjdXJyZW50OiB0cnVlLFxuICAgICAgICAgICAgcmVjdXJyZW5jZTogcmVjdXJyZW5jZSxcbiAgICAgICAgICAgIGhvbGlkYXlzOiBhLmV4Y2x1ZGVIb2xpZGF5cyA/IGEuaG9saWRheXMgOiAnJyxcbiAgICAgICAgICAgIGV4Y2x1ZGVXZWVrZW5kczogYS5leGNsdWRlV2Vla2VuZHMsXG4gICAgICAgICAgICBvdGhlckRheXM6IGEuZXhjbHVkZU90aGVycyA/IGEub3RoZXJEYXlzIDogJycsXG4gICAgICAgICAgICBzdGFydERhdGU6IGEuc3RhcnREYXRlLFxuICAgICAgICAgICAgZW5kRGF0ZTogYS5lbmREYXRlLFxuICAgICAgICAgICAgdGltZTogYS50aW1lLFxuICAgICAgICAgICAgbW9udGhPZlllYXI6IGEubW9udGhPZlllYXIsXG4gICAgICAgICAgICBkYXlPZk1vbnRoOiBhLmRheU9mTW9udGgsXG4gICAgICAgICAgICBkYXlPZldlZWs6IGEuZGF5T2ZXZWVrXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29uZmlybSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmZvcm0udmFsaWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWxlcnRQcm92aWRlci53YXJuaW5nKCdwb2xwQ3JvbkpvYi5lcnJvcnMuZ2VuZXJhbCcsIDUwMDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb3V0cHV0ID0gdGhpcy5jb21wdXRlT3V0VmFsdWUodGhpcy5mb3JtLnZhbHVlKTtcbiAgICAgICAgdGhpcy5vblNhdmUuZW1pdChvdXRwdXQpO1xuICAgIH1cblxuICAgIGNhbmNlbCgpIHtcbiAgICAgICAgdGhpcy5vbkNhbmNlbC5lbWl0KCk7XG4gICAgfVxuXG59XG4iXX0=