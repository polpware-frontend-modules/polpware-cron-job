import { MonthEnum, DayOfWeekEnum, safeParseInt, IntervalEnum, getDaysOfWeek, getMonthsOfYear, getDaysOfMonth } from '@polpware/fe-utilities';
import { __extends, __decorate, __metadata, __awaiter, __generator, __spread } from 'tslib';
import { Input, Component, ɵɵdefineInjectable, ɵɵinject, Injectable, EventEmitter, Output, ChangeDetectorRef, Pipe, NgModule } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertDefaultImpl } from '@polpware/ngx-alert';
import { DefaultFormBaseComponent } from '@polpware/ngx-form-common';
import { parseString, parseExpression } from 'cron-parser';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { ObservableModalAbstractComponent } from '@polpware/bs-components';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import * as moment from 'moment';
import { NgxTranslatorImplService, HyperTranslatePipeBase, NgxI18nModule } from '@polpware/ngx-i18n';
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
import { PolpDraggableModule } from '@polpware/modal-directives';
import { TagInputModule } from 'ngx-chips';

var defaultDict = {
    polpCronJob: {
        scheduleType: 'Schedule Type',
        recurrence: 'Recurrence',
        customExpr: 'Custom CRON expression',
        startDate: 'Start date',
        inputDate: 'Input one date and confirm',
        monthOfYear: 'Month',
        dayOfMonth: 'Day',
        dayOfWeek: 'Day',
        time: 'Time',
        excludeHolidays: 'Exclude holidays',
        holidayLabel: 'Define the list of holidays',
        excludeWeekends: 'Exclude weekends',
        excludeOthers: 'Other exceptions',
        otherLabel: 'Define the list of exceptions',
        selectOne: 'Select one below',
        endDate: 'End date',
        closeBtn: 'Close',
        cancelBtn: 'Cancel',
        submitBtn: 'Submit',
        confirmBtn: 'Confirm',
        editBtn: 'Edit',
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
        messages: {
            working: 'Working ...'
        },
        notSetYet: 'Not set yet',
        holidaysEditorTitle: 'Edit holidays',
        othersEditorTitle: 'Edit others',
        errors: {
            general: 'Some of your inputs are not valid. Please check them!',
            customExprInvalid: 'Invalid CRON expression',
            scheduleTypeRequired: 'Please select one schedule type!',
            somethingWrong: 'Something went wrong. Please try later!'
        }
    }
};

var ScheduleTypeEnum;
(function (ScheduleTypeEnum) {
    ScheduleTypeEnum[ScheduleTypeEnum["OneTime"] = 1] = "OneTime";
    ScheduleTypeEnum[ScheduleTypeEnum["Recurrent"] = 2] = "Recurrent";
})(ScheduleTypeEnum || (ScheduleTypeEnum = {}));
function getDefaultScheduleTime() {
    var today = new Date();
    var tomorrow = new Date(today);
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

var MultiDateModalComponent = /** @class */ (function (_super) {
    __extends(MultiDateModalComponent, _super);
    function MultiDateModalComponent(bsModalRef, bsModalService) {
        var _this = _super.call(this) || this;
        _this.bsModalRef = bsModalRef;
        _this.bsModalService = bsModalService;
        _this.title = '';
        _this.initValue = [];
        _this.isValid = false;
        _this.alertProvider = new AlertDefaultImpl();
        return _this;
    }
    Object.defineProperty(MultiDateModalComponent.prototype, "alerts", {
        get: function () {
            return this.alertProvider.data;
        },
        enumerable: true,
        configurable: true
    });
    MultiDateModalComponent.prototype.ngOnInit = function () {
    };
    MultiDateModalComponent.prototype.close = function () {
        this.closeModal(null);
    };
    MultiDateModalComponent.prototype.updateValue = function (evt) {
        if (evt) {
            this.outputValue = evt.map(function (a) { return a.value; });
        }
    };
    MultiDateModalComponent.prototype.validate = function (evt) {
        if (evt) {
            this.isValid = evt.valid;
        }
    };
    MultiDateModalComponent.prototype.confirm = function () {
        if (this.isValid) {
            this.closeModal(this.outputValue);
        }
    };
    MultiDateModalComponent.ctorParameters = function () { return [
        { type: BsModalRef },
        { type: BsModalService }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], MultiDateModalComponent.prototype, "title", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], MultiDateModalComponent.prototype, "initValue", void 0);
    MultiDateModalComponent = __decorate([
        Component({
            selector: 'polp-bs-multi-date-modal',
            template: "<div class=\"modal-header\" polpModalDraggable>\n    <h4 class=\"modal-title\">{{title | cronJobHyperTrans}}</h4>\n</div>\n<div class=\"modal-body\">\n    <polp-bs-multi-date-picker [initValue]=\"initValue\"\n                               (onValidation)=\"validate($event)\"\n                               (onValueChanged)=\"updateValue($event)\">\n    </polp-bs-multi-date-picker>\n    \n    <ng-container *ngFor=\"let a of alerts\">\n        <alert [type]=\"a.type\" [dismissOnTimeout]=\"a.timeout\">\n            {{a.message | cronJobHyperTrans}}\n        </alert>\n    </ng-container>\n    \n</div>\n<div class=\"modal-footer\">\n    <div class=\"d-flex justify-content-end\">\n        <button class=\"btn btn-secondary mr-2\" (click)=\"close()\">\n            {{'polpCronJob.cancelBtn' | cronJobHyperTrans}}\n        </button>\n        <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"isValid\"\n                (click)=\"confirm()\">\n            {{'polpCronJob.confirmBtn' | cronJobHyperTrans}}\n        </button>\n    </div>\n</div>\n",
            styles: [""]
        }),
        __metadata("design:paramtypes", [BsModalRef,
            BsModalService])
    ], MultiDateModalComponent);
    return MultiDateModalComponent;
}(ObservableModalAbstractComponent));

var ScheduleTimeModalComponent = /** @class */ (function (_super) {
    __extends(ScheduleTimeModalComponent, _super);
    function ScheduleTimeModalComponent(bsModalRef, bsModalService) {
        var _this = _super.call(this) || this;
        _this.bsModalRef = bsModalRef;
        _this.bsModalService = bsModalService;
        _this.faSpinner = faSpinner;
        _this.title = '';
        _this.alertProvider = new AlertDefaultImpl();
        return _this;
    }
    Object.defineProperty(ScheduleTimeModalComponent.prototype, "alerts", {
        get: function () {
            return this.alertProvider.data;
        },
        enumerable: true,
        configurable: true
    });
    ScheduleTimeModalComponent.prototype.ngOnInit = function () {
    };
    ScheduleTimeModalComponent.prototype.close = function () {
        this.closeModal(null);
    };
    ScheduleTimeModalComponent.prototype.updateScheduler = function (evt) {
        this.outputValue = evt;
    };
    ScheduleTimeModalComponent.prototype.validateScheduler = function (evt) {
        if (evt) {
            this.isValid = evt.valid;
        }
    };
    ScheduleTimeModalComponent.prototype.updateStyle = function (evt) {
        if (evt && evt.opened) {
            var newClasses = this.extraClasses ? this.extraClasses + " has-child-modal" : 'has-child-modal';
            this.bsModalRef.setClass(newClasses);
        }
        else {
            var newClasses = this.extraClasses || '';
            this.bsModalRef.setClass(newClasses);
        }
    };
    ScheduleTimeModalComponent.prototype.confirmAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ex_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.alertProvider.clean();
                        if (!this.isValid) {
                            this.alertProvider.warning('polpCronJob.general');
                            return [2 /*return*/];
                        }
                        this.isSaving = true;
                        this.alertProvider.info('polpCronJob.messages.working');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, 5, 6]);
                        if (!this.onConfirmAsync) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.onConfirmAsync(this.outputValue)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        this.closeModal(this.outputValue);
                        return [3 /*break*/, 6];
                    case 4:
                        ex_1 = _a.sent();
                        this.alertProvider.clean();
                        this.alertProvider.danger('polpCronJob.errors.somethingWrong');
                        return [3 /*break*/, 6];
                    case 5:
                        this.isSaving = false;
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ScheduleTimeModalComponent.ctorParameters = function () { return [
        { type: BsModalRef },
        { type: BsModalService }
    ]; };
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
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ScheduleTimeModalComponent.prototype, "extraClasses", void 0);
    ScheduleTimeModalComponent = __decorate([
        Component({
            selector: 'polp-bs-schedule-time-modal',
            template: "<div class=\"modal-header\" polpModalDraggable>\n    <h4 class=\"modal-title\">{{title | cronJobHyperTrans}}</h4>\n</div>\n<div class=\"modal-body\">\n    <polp-bs-schedule-time-picker [initSettings]=\"initSettings\"\n                                  [initValue]=\"initValue\"\n                                  (childStateChanged)=\"updateStyle($event)\"\n                                  (onValidation)=\"validateScheduler($event)\"\n                                  (onValueChanged)=\"updateScheduler($event)\">\n    </polp-bs-schedule-time-picker>\n    \n    <ng-container *ngFor=\"let a of alerts\">\n        <alert [type]=\"a.type\" [dismissOnTimeout]=\"a.timeout\">\n            {{a.message | cronJobHyperTrans}}\n        </alert>\n    </ng-container>\n    \n</div>\n<div class=\"modal-footer\">\n    <div class=\"d-flex justify-content-end\">\n        <button class=\"btn btn-secondary mr-2\" (click)=\"close()\">\n            {{'polpCronJob.closeBtn' | cronJobHyperTrans}}\n        </button>\n        <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"isValid\"\n                (click)=\"confirmAsync()\">\n            {{'polpCronJob.confirmBtn' | cronJobHyperTrans}}\n            <fa-icon [icon]=\"faSpinner\" [spin]=\"true\" class=\"ml-1\" *ngIf=\"isSaving\"></fa-icon>\n        </button>\n    </div>\n</div>\n",
            styles: [""]
        }),
        __metadata("design:paramtypes", [BsModalRef,
            BsModalService])
    ], ScheduleTimeModalComponent);
    return ScheduleTimeModalComponent;
}(ObservableModalAbstractComponent));

var UtilsService = /** @class */ (function () {
    function UtilsService(_modalService) {
        this._modalService = _modalService;
    }
    UtilsService.prototype.showScheduleTimeEditorAsync = function (input) {
        var modalRef = this._modalService.show(ScheduleTimeModalComponent, {
            animated: true,
            ignoreBackdropClick: true,
            initialState: Object.assign({}, input),
            keyboard: false,
            class: 'modal-dialog-centered'
        });
        return modalRef.content.result.toPromise();
    };
    UtilsService.prototype.showMultiDateEditorAsync = function (input) {
        var modalRef = this._modalService.show(MultiDateModalComponent, {
            animated: true,
            ignoreBackdropClick: true,
            initialState: Object.assign({}, input),
            keyboard: false,
            class: 'modal-dialog-centered'
        });
        return modalRef.content.result.toPromise();
    };
    UtilsService.ctorParameters = function () { return [
        { type: BsModalService }
    ]; };
    UtilsService.ɵprov = ɵɵdefineInjectable({ factory: function UtilsService_Factory() { return new UtilsService(ɵɵinject(BsModalService)); }, token: UtilsService, providedIn: "root" });
    UtilsService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [BsModalService])
    ], UtilsService);
    return UtilsService;
}());

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
var ScheduleTimePickerComponent = /** @class */ (function (_super) {
    __extends(ScheduleTimePickerComponent, _super);
    function ScheduleTimePickerComponent(_builder, _utils) {
        var _this = _super.call(this) || this;
        _this._builder = _builder;
        _this._utils = _utils;
        _this.initSettings = {};
        _this.initValue = null;
        // todo: We use the company-specific settings ....
        _this.defaultHolidays = '';
        _this.childStateChanged = new EventEmitter();
        _this.settings = {};
        _this.prefix = 'stp-' + (new Date).getTime() + '-';
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
        _this.holidays = '';
        _this.otherDays = '';
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
    Object.defineProperty(ScheduleTimePickerComponent.prototype, "isHolidaysExcluded", {
        get: function () {
            return this.form.controls['excludeHolidays'].value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScheduleTimePickerComponent.prototype, "isOthersExcluded", {
        get: function () {
            return this.form.controls['excludeOthers'].value;
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
        if (this.initValue) {
            this.holidays = this.initValue.holidays || this.defaultHolidays || '';
            this.otherDays = this.initValue.otherDays || '';
        }
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
        this.holidays = data.holidays || this.defaultHolidays || '';
        this.otherDays = data.otherDays || '';
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
    ScheduleTimePickerComponent.prototype.updateHolidaysAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.childStateChanged.emit({ opened: true });
                        return [4 /*yield*/, this._utils.showMultiDateEditorAsync({
                                title: 'polpCronJob.holidaysEditorTitle',
                                initValue: (this.holidays || '').split(',').filter(function (a) { return !!a; })
                            })];
                    case 1:
                        ret = _a.sent();
                        this.childStateChanged.emit({ opened: false });
                        if (ret) {
                            this.holidays = ret.join(',');
                            this.notifyValidation();
                            this.notifyValueChanges(this.computeOutValue(this.form.value));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ScheduleTimePickerComponent.prototype.updateOtherDaysAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.childStateChanged.emit({ opened: true });
                        return [4 /*yield*/, this._utils.showMultiDateEditorAsync({
                                title: 'polpCronJob.othersEditorTitle',
                                initValue: (this.otherDays || '').split(',').filter(function (a) { return !!a; })
                            })];
                    case 1:
                        ret = _a.sent();
                        this.childStateChanged.emit({ opened: false });
                        if (ret) {
                            this.otherDays = ret.join(',');
                            this.notifyValidation();
                            this.notifyValueChanges(this.computeOutValue(this.form.value));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ScheduleTimePickerComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: UtilsService }
    ]; };
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
    return ScheduleTimePickerComponent;
}(DefaultFormBaseComponent));

function getFormattedDate(date) {
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    return month + '/' + day;
}
var formValidator$1 = function (control) {
    var v = control.get('chips').value;
    if (v) {
        if (!Array.isArray(v)) {
            v = [v];
        }
        var someWrong = v.some(function (a) {
            var b = a.value;
            if (!b) {
                return true;
            }
            var c = b.split('/');
            if (c.length != 2) {
                return true;
            }
            var m = safeParseInt(c[0]);
            if (m < 1 || m > 12) {
                return true;
            }
            var d = safeParseInt(c[1]);
            if (d < 0 || d > 31) {
                return true;
            }
        });
        if (someWrong) {
            return { chips: true };
        }
    }
    return null;
};
var ɵ0$1 = formValidator$1;
var MultiDatePickerComponent = /** @class */ (function (_super) {
    __extends(MultiDatePickerComponent, _super);
    function MultiDatePickerComponent(_builder) {
        var _this = _super.call(this) || this;
        _this._builder = _builder;
        _this.initValue = [];
        _this.prefix = 'mdp-' + (new Date).getTime() + '-';
        _this.bsValue = new Date();
        _this.items = [];
        _this.form = _this._builder.group({
            'chips': []
        }, { validators: [formValidator$1] });
        return _this;
    }
    MultiDatePickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.initValue) {
            var items_1 = this.initValue.map(function (a) {
                return {
                    display: a,
                    value: a
                };
            });
            setTimeout(function () {
                _this.form.setValue({
                    chips: items_1
                });
            });
        }
        this._subr = this.form.valueChanges.subscribe(function (a) {
            _this.notifyValidation();
            _this.notifyValueChanges(a.chips);
        });
    };
    MultiDatePickerComponent.prototype.ngOnDestroy = function () {
        this._subr.unsubscribe();
    };
    MultiDatePickerComponent.prototype.confirm = function () {
        if (this.bsValue) {
            var items = this.form.value.chips || [];
            var v = getFormattedDate(this.bsValue);
            var newItems = __spread(items, [{
                    display: v,
                    value: v
                }]);
            this.form.setValue({
                chips: newItems
            });
        }
    };
    MultiDatePickerComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], MultiDatePickerComponent.prototype, "initValue", void 0);
    MultiDatePickerComponent = __decorate([
        Component({
            selector: 'polp-bs-multi-date-picker',
            template: "<form (ngSubmit)=\"confirm()\">\n    <div class=\"form-group row\">\n        <label class=\"col-12 col-form-label\"\n               for=\"{{prefix + 'tag-input'}}\">\n            {{'polpCronJob.inputDate' | cronJobHyperTrans}}\n        </label>\n        \n        <div class=\"input-group\">\n            <input type=\"text\"\n                   class=\"form-control\"\n                   id=\"{{prefix + 'tag-input'}}\"\n                   bsDatepicker\n                   [bsConfig]=\"{ adaptivePosition: true }\"\n                   [ngModelOptions]=\"{standalone: true}\"\n                   [(ngModel)]=\"bsValue\">\n            <div class=\"input-group-append\">            \n                <button type=\"submit\" class=\"btn btn-info\">\n                    {{'polpCronJob.confirmBtn' | cronJobHyperTrans}}\n                </button>\n            </div>\n        </div>\n    </div>\n</form>\n\n\n\n<form [formGroup]=\"form\">\n    <div class=\"form-group row\">\n        <tag-input\n            [formControlName]=\"'chips'\">\n        </tag-input>\n    </div>\n</form>    \n",
            styles: [""]
        }),
        __metadata("design:paramtypes", [FormBuilder])
    ], MultiDatePickerComponent);
    return MultiDatePickerComponent;
}(DefaultFormBaseComponent));

var CronJobService = /** @class */ (function () {
    function CronJobService() {
    }
    CronJobService.prototype.parseCronExpr = function (source, target) {
        var a = parseExpression(source);
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
            target.recurrence = IntervalEnum.Day;
        }
        else {
            target.recurrence = IntervalEnum.Custom;
        }
        // A utc time 
        var today = new Date();
        var timeInUtc = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate(), a.fields.hour[0] || 0, a.fields.minute[0] || 0));
        // Time
        target.time = timeInUtc;
    };
    CronJobService.prototype.composeCronExpr = function (source) {
        // IsRecurrent true
        // Convert it into Utc time
        var utc = new Date(source.time);
        var timeWrapper = moment(utc);
        var hour = timeWrapper.utc().hour();
        if (source.recurrence == IntervalEnum.Year) {
            return utc.getMinutes() + " " + hour + " " + source.dayOfMonth + " " + source.monthOfYear + " *";
        }
        else if (source.recurrence == IntervalEnum.Month) {
            return utc.getMinutes() + " " + hour + " " + source.dayOfMonth + " * *";
        }
        else if (source.recurrence == IntervalEnum.Week) {
            return utc.getMinutes() + " " + hour + " * * " + source.dayOfWeek;
        }
        else if (source.recurrence == IntervalEnum.Day) {
            return utc.getMinutes() + " " + hour + " * * *";
        }
        else if (source.recurrence == IntervalEnum.Custom) {
            return source.customExpr;
        }
        return '';
    };
    CronJobService.ɵprov = ɵɵdefineInjectable({ factory: function CronJobService_Factory() { return new CronJobService(); }, token: CronJobService, providedIn: "root" });
    CronJobService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CronJobService);
    return CronJobService;
}());

// On purpose do not make it injectable 
var CronJobTranslatorService = /** @class */ (function (_super) {
    __extends(CronJobTranslatorService, _super);
    function CronJobTranslatorService() {
        var _this = _super.call(this) || this;
        _this._dict = defaultDict;
        return _this;
    }
    return CronJobTranslatorService;
}(NgxTranslatorImplService));

var CronJobHyperTransPipe = /** @class */ (function (_super) {
    __extends(CronJobHyperTransPipe, _super);
    function CronJobHyperTransPipe(_translate, _ref) {
        var _this = _super.call(this) || this;
        _this._translate = _translate;
        _this._ref = _ref;
        return _this;
    }
    CronJobHyperTransPipe.ctorParameters = function () { return [
        { type: CronJobTranslatorService },
        { type: ChangeDetectorRef }
    ]; };
    CronJobHyperTransPipe = __decorate([
        Pipe({
            name: 'cronJobHyperTrans',
            pure: false
        }),
        __metadata("design:paramtypes", [CronJobTranslatorService, ChangeDetectorRef])
    ], CronJobHyperTransPipe);
    return CronJobHyperTransPipe;
}(HyperTranslatePipeBase));

var PolpBsCronJobModule = /** @class */ (function () {
    function PolpBsCronJobModule() {
    }
    PolpBsCronJobModule = __decorate([
        NgModule({
            declarations: [
                ScheduleTimePickerComponent,
                ScheduleTimeModalComponent,
                CronJobHyperTransPipe,
                MultiDatePickerComponent,
                MultiDateModalComponent
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
                PolpDraggableModule,
                TagInputModule
            ],
            exports: [
                ScheduleTimePickerComponent,
                ScheduleTimeModalComponent,
                CronJobHyperTransPipe,
                MultiDatePickerComponent,
                MultiDateModalComponent
            ]
        })
    ], PolpBsCronJobModule);
    return PolpBsCronJobModule;
}());

/*
 * Public API Surface of cron-job
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CronJobHyperTransPipe, CronJobService, CronJobTranslatorService, MultiDateModalComponent, MultiDatePickerComponent, PolpBsCronJobModule, ScheduleTimeModalComponent, ScheduleTimePickerComponent, ScheduleTypeEnum, UtilsService, defaultDict, getDefaultScheduleTime, ɵ0 };
//# sourceMappingURL=polpware-cron-job.js.map
