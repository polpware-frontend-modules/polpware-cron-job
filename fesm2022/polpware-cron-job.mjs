import { DayOfWeekEnum, MonthEnum, IntervalEnum, safeParseInt, getDaysOfWeek, getMonthsOfYear, getDaysOfMonth } from '@polpware/fe-utilities';
import * as i0 from '@angular/core';
import { Injectable, Pipe, Component, Input, EventEmitter, Output, NgModule } from '@angular/core';
import { AlertDefaultImpl } from '@polpware/ngx-alert';
import { DefaultFormBaseComponent } from '@polpware/ngx-form-common';
import { parseString, parseExpression } from 'cron-parser';
import * as i1 from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ObservableModalAbstractComponent } from '@polpware/bs-components';
import * as i1$1 from 'ngx-bootstrap/modal';
import { ModalModule } from 'ngx-bootstrap/modal';
import * as i2$1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i3$1 from 'ngx-bootstrap/alert';
import { AlertModule } from 'ngx-bootstrap/alert';
import * as i4 from '@polpware/modal-directives';
import { PolpDraggableModule } from '@polpware/modal-directives';
import * as i2 from 'ngx-bootstrap/datepicker';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import * as i3 from 'ngx-chips';
import { TagInputModule } from 'ngx-chips';
import { NgxTranslatorImplService, HyperTranslatePipeBase, NgxI18nModule } from '@polpware/ngx-i18n';
import * as i6 from 'ngx-bootstrap/timepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import * as i7 from '@40three/ngx-autofocus-directive';
import { FtAutofocusModule } from '@40three/ngx-autofocus-directive';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

const defaultDict = {
    polpCronJob: {
        asap: 'ASAP',
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
    ScheduleTypeEnum[ScheduleTypeEnum["Asap"] = 3] = "Asap";
})(ScheduleTypeEnum || (ScheduleTypeEnum = {}));
function getDefaultScheduleTime(startFromToday = false) {
    const today = new Date();
    let tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));
    if (startFromToday) {
        tomorrow = new Date(today.getTime() + (60 * 60 * 1000));
    }
    return {
        isRecurrent: false,
        recurrence: IntervalEnum.Day,
        holidays: '',
        excludeWeekends: false,
        otherDays: '',
        customExpr: '',
        startDate: tomorrow,
        endDate: null,
        time: tomorrow,
        monthOfYear: MonthEnum.January,
        dayOfMonth: 1,
        dayOfWeek: DayOfWeekEnum.Monday
    };
}
function isEqualString(left, right) {
    if (!left && !right) {
        return true;
    }
    return left == right;
}
function isEqualDate(left, right) {
    if (!left && !right) {
        return true;
    }
    if (!left || !right) {
        return false;
    }
    return left.getFullYear() == right.getFullYear() &&
        left.getMonth() == right.getMonth() &&
        left.getDate() == right.getDate();
}
function isEqualTime(left, right) {
    if (!left && !right) {
        return true;
    }
    if (!left || !right) {
        return false;
    }
    return left.getHours() == right.getHours() &&
        left.getMinutes() == right.getMinutes();
}
function isEqualBool(left, right) {
    if (!left && !right) {
        return true;
    }
    return left === right;
}
function isEqualScheduleTime(left, right) {
    if (!left && !right) {
        return true;
    }
    if (!left || !right) {
        return false;
    }
    if (left.isRecurrent && right.isRecurrent) {
        if (!isEqualString(left.customExpr, right.customExpr)) {
            return false;
        }
        if (!isEqualString(left.holidays, right.holidays)) {
            return false;
        }
        if (!isEqualBool(left.excludeWeekends, right.excludeWeekends)) {
            return false;
        }
        if (!isEqualString(left.otherDays, right.otherDays)) {
            return false;
        }
        if (!isEqualDate(left.endDate, right.endDate) || !isEqualTime(left.endDate, right.endDate)) {
            return false;
        }
        return true;
    }
    if (!left.isRecurrent && !right.isRecurrent) {
        if (!isEqualDate(left.startDate, right.startDate) || !isEqualTime(left.time, right.time)) {
            return false;
        }
        return true;
    }
    return false;
}

// On purpose do not make it injectable 
class CronJobTranslatorService extends NgxTranslatorImplService {
    constructor() {
        super();
        this._dict = defaultDict;
    }
    static { this.ɵfac = function CronJobTranslatorService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CronJobTranslatorService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CronJobTranslatorService, factory: CronJobTranslatorService.ɵfac }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CronJobTranslatorService, [{
        type: Injectable
    }], () => [], null); })();

class CronJobHyperTransPipe extends HyperTranslatePipeBase {
    constructor(_translate, _ref) {
        super();
        this._translate = _translate;
        this._ref = _ref;
    }
    static { this.ɵfac = function CronJobHyperTransPipe_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CronJobHyperTransPipe)(i0.ɵɵdirectiveInject(CronJobTranslatorService, 16), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef, 16)); }; }
    static { this.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "cronJobHyperTrans", type: CronJobHyperTransPipe, pure: false, standalone: false }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CronJobHyperTransPipe, [{
        type: Pipe,
        args: [{
                name: 'cronJobHyperTrans',
                pure: false,
                standalone: false
            }]
    }], () => [{ type: CronJobTranslatorService }, { type: i0.ChangeDetectorRef }], null); })();

const _c0$1 = () => ({ adaptivePosition: true });
const _c1 = () => ({ standalone: true });
function getFormattedDate(date) {
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    return month + '/' + day;
}
const formValidator$1 = (control) => {
    let v = control.get('chips').value;
    if (v) {
        if (!Array.isArray(v)) {
            v = [v];
        }
        const someWrong = v.some(a => {
            const b = a.value;
            if (!b) {
                return true;
            }
            const c = b.split('/');
            if (c.length != 2) {
                return true;
            }
            const m = safeParseInt(c[0]);
            if (m < 1 || m > 12) {
                return true;
            }
            const d = safeParseInt(c[1]);
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
class MultiDatePickerComponent extends DefaultFormBaseComponent {
    constructor(_builder) {
        super();
        this._builder = _builder;
        this.initValue = [];
        this.prefix = 'mdp-' + (new Date).getTime() + '-';
        this.bsValue = new Date();
        this.items = [];
        this.form = this._builder.group({
            'chips': []
        }, { validators: [formValidator$1] });
    }
    ngOnInit() {
        if (this.initValue) {
            const items = this.initValue.map(a => {
                return {
                    display: a,
                    value: a
                };
            });
            setTimeout(() => {
                this.form.setValue({
                    chips: items
                });
            });
        }
        this._subr = this.form.valueChanges.subscribe(a => {
            this.notifyValidation();
            this.notifyValueChanges(a.chips);
        });
    }
    ngOnDestroy() {
        this._subr.unsubscribe();
    }
    confirm() {
        if (this.bsValue) {
            const items = this.form.value.chips || [];
            const v = getFormattedDate(this.bsValue);
            const newItems = [...items, {
                    display: v,
                    value: v
                }];
            this.form.setValue({
                chips: newItems
            });
        }
    }
    static { this.ɵfac = function MultiDatePickerComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MultiDatePickerComponent)(i0.ɵɵdirectiveInject(i1.UntypedFormBuilder)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MultiDatePickerComponent, selectors: [["polp-bs-multi-date-picker"]], inputs: { initValue: "initValue" }, standalone: false, features: [i0.ɵɵInheritDefinitionFeature], decls: 12, vars: 15, consts: [[3, "ngSubmit"], [1, "mb-4"], [1, "form-label", 3, "for"], [1, "input-group"], ["type", "text", "bsDatepicker", "", 1, "form-control", 3, "ngModelChange", "id", "bsConfig", "ngModelOptions", "ngModel"], ["type", "submit", 1, "btn", "btn-info"], [3, "formGroup"], [3, "formControlName"]], template: function MultiDatePickerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "form", 0);
            i0.ɵɵlistener("ngSubmit", function MultiDatePickerComponent_Template_form_ngSubmit_0_listener() { return ctx.confirm(); });
            i0.ɵɵelementStart(1, "div", 1)(2, "label", 2);
            i0.ɵɵtext(3);
            i0.ɵɵpipe(4, "cronJobHyperTrans");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div", 3)(6, "input", 4);
            i0.ɵɵtwoWayListener("ngModelChange", function MultiDatePickerComponent_Template_input_ngModelChange_6_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.bsValue, $event) || (ctx.bsValue = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "button", 5);
            i0.ɵɵtext(8);
            i0.ɵɵpipe(9, "cronJobHyperTrans");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(10, "form", 6);
            i0.ɵɵelement(11, "tag-input", 7);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵpropertyInterpolate("for", ctx.prefix + "tag-input");
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(4, 9, "polpCronJob.inputDate"), " ");
            i0.ɵɵadvance(3);
            i0.ɵɵpropertyInterpolate("id", ctx.prefix + "tag-input");
            i0.ɵɵproperty("bsConfig", i0.ɵɵpureFunction0(13, _c0$1))("ngModelOptions", i0.ɵɵpureFunction0(14, _c1));
            i0.ɵɵtwoWayProperty("ngModel", ctx.bsValue);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(9, 11, "polpCronJob.confirmBtn"), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance();
            i0.ɵɵproperty("formControlName", "chips");
        } }, dependencies: [i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.NgModel, i1.NgForm, i1.FormGroupDirective, i1.FormControlName, i2.BsDatepickerDirective, i2.BsDatepickerInputDirective, i3.TagInputComponent, CronJobHyperTransPipe], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MultiDatePickerComponent, [{
        type: Component,
        args: [{ selector: 'polp-bs-multi-date-picker', standalone: false, template: "<form (ngSubmit)=\"confirm()\">\n    <div class=\"mb-4\">\n        <label class=\"form-label\"\n               for=\"{{prefix + 'tag-input'}}\">\n            {{'polpCronJob.inputDate' | cronJobHyperTrans}}\n        </label>\n        \n        <div class=\"input-group\">\n            <input type=\"text\"\n                   class=\"form-control\"\n                   id=\"{{prefix + 'tag-input'}}\"\n                   bsDatepicker\n                   [bsConfig]=\"{ adaptivePosition: true }\"\n                   [ngModelOptions]=\"{standalone: true}\"\n                   [(ngModel)]=\"bsValue\">\n            <button type=\"submit\" class=\"btn btn-info\">\n                {{'polpCronJob.confirmBtn' | cronJobHyperTrans}}\n            </button>\n        </div>\n    </div>\n</form>\n\n\n\n<form [formGroup]=\"form\">\n    <tag-input\n        [formControlName]=\"'chips'\">\n    </tag-input>\n</form>    \n" }]
    }], () => [{ type: i1.UntypedFormBuilder }], { initValue: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MultiDatePickerComponent, { className: "MultiDatePickerComponent", filePath: "lib/multi-date-picker/multi-date-picker.component.ts", lineNumber: 58 }); })();

function MultiDateModalComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "alert", 9);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "cronJobHyperTrans");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const a_r1 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("type", a_r1.type)("dismissOnTimeout", a_r1.timeout);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 3, a_r1.message), " ");
} }
function MultiDateModalComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵlistener("click", function MultiDateModalComponent_button_12_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.confirm()); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "cronJobHyperTrans");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "polpCronJob.confirmBtn"), " ");
} }
class MultiDateModalComponent extends ObservableModalAbstractComponent {
    constructor(bsModalRef, bsModalService) {
        super();
        this.bsModalRef = bsModalRef;
        this.bsModalService = bsModalService;
        this.title = '';
        this.initValue = [];
        this.isValid = false;
        this.alertProvider = new AlertDefaultImpl();
    }
    get alerts() {
        return this.alertProvider.data;
    }
    ngOnInit() {
    }
    close() {
        this.closeModal(null);
    }
    updateValue(evt) {
        if (evt) {
            this.outputValue = evt.map(a => a.value);
        }
    }
    validate(evt) {
        if (evt) {
            this.isValid = evt.valid;
        }
    }
    confirm() {
        if (this.isValid) {
            this.closeModal(this.outputValue);
        }
    }
    static { this.ɵfac = function MultiDateModalComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MultiDateModalComponent)(i0.ɵɵdirectiveInject(i1$1.BsModalRef), i0.ɵɵdirectiveInject(i1$1.BsModalService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MultiDateModalComponent, selectors: [["polp-bs-multi-date-modal"]], inputs: { title: "title", initValue: "initValue" }, standalone: false, features: [i0.ɵɵInheritDefinitionFeature], decls: 13, vars: 9, consts: [["polpModalDraggable", "", 1, "modal-header"], [1, "modal-title"], [1, "modal-body"], [3, "onValidation", "onValueChanged", "initValue"], [4, "ngFor", "ngForOf"], [1, "modal-footer"], [1, "d-flex", "justify-content-end"], [1, "btn", "btn-secondary", "me-2", 3, "click"], ["type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"], [3, "type", "dismissOnTimeout"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function MultiDateModalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "h4", 1);
            i0.ɵɵtext(2);
            i0.ɵɵpipe(3, "cronJobHyperTrans");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(4, "div", 2)(5, "polp-bs-multi-date-picker", 3);
            i0.ɵɵlistener("onValidation", function MultiDateModalComponent_Template_polp_bs_multi_date_picker_onValidation_5_listener($event) { return ctx.validate($event); })("onValueChanged", function MultiDateModalComponent_Template_polp_bs_multi_date_picker_onValueChanged_5_listener($event) { return ctx.updateValue($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(6, MultiDateModalComponent_ng_container_6_Template, 4, 5, "ng-container", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 5)(8, "div", 6)(9, "button", 7);
            i0.ɵɵlistener("click", function MultiDateModalComponent_Template_button_click_9_listener() { return ctx.close(); });
            i0.ɵɵtext(10);
            i0.ɵɵpipe(11, "cronJobHyperTrans");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(12, MultiDateModalComponent_button_12_Template, 3, 3, "button", 8);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, ctx.title));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("initValue", ctx.initValue);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.alerts);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(11, 7, "polpCronJob.cancelBtn"), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.isValid);
        } }, dependencies: [i2$1.NgForOf, i2$1.NgIf, i3$1.AlertComponent, i4.polpModalDraggableDirective, MultiDatePickerComponent, CronJobHyperTransPipe], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MultiDateModalComponent, [{
        type: Component,
        args: [{ selector: 'polp-bs-multi-date-modal', standalone: false, template: "<div class=\"modal-header\" polpModalDraggable>\n    <h4 class=\"modal-title\">{{title | cronJobHyperTrans}}</h4>\n</div>\n<div class=\"modal-body\">\n    <polp-bs-multi-date-picker [initValue]=\"initValue\"\n                               (onValidation)=\"validate($event)\"\n                               (onValueChanged)=\"updateValue($event)\">\n    </polp-bs-multi-date-picker>\n    \n    <ng-container *ngFor=\"let a of alerts\">\n        <alert [type]=\"a.type\" [dismissOnTimeout]=\"a.timeout\">\n            {{a.message | cronJobHyperTrans}}\n        </alert>\n    </ng-container>\n    \n</div>\n<div class=\"modal-footer\">\n    <div class=\"d-flex justify-content-end\">\n        <button class=\"btn btn-secondary me-2\" (click)=\"close()\">\n            {{'polpCronJob.cancelBtn' | cronJobHyperTrans}}\n        </button>\n        <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"isValid\"\n                (click)=\"confirm()\">\n            {{'polpCronJob.confirmBtn' | cronJobHyperTrans}}\n        </button>\n    </div>\n</div>\n" }]
    }], () => [{ type: i1$1.BsModalRef }, { type: i1$1.BsModalService }], { title: [{
            type: Input
        }], initValue: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MultiDateModalComponent, { className: "MultiDateModalComponent", filePath: "lib/multi-date-modal/multi-date-modal.component.ts", lineNumber: 18 }); })();

class LowLevelUtilsService {
    constructor(_modalService) {
        this._modalService = _modalService;
    }
    showMultiDateEditorAsync(input) {
        const modalRef = this._modalService.show(MultiDateModalComponent, {
            animated: true,
            ignoreBackdropClick: true,
            initialState: Object.assign({}, input),
            keyboard: false,
            class: 'modal-dialog-centered'
        });
        return modalRef.content.result.toPromise();
    }
    static { this.ɵfac = function LowLevelUtilsService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LowLevelUtilsService)(i0.ɵɵinject(i1$1.BsModalService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LowLevelUtilsService, factory: LowLevelUtilsService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LowLevelUtilsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1$1.BsModalService }], null); })();

const _c0 = () => ({ adaptivePosition: true });
function ScheduleTimePickerComponent_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelement(1, "input", 10);
    i0.ɵɵelementStart(2, "label", 11);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "cronJobHyperTrans");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const opt_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("id", ctx_r2.prefix + "schedule-type-opt-" + i_r2);
    i0.ɵɵpropertyInterpolate("value", opt_r1.value);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", ctx_r2.prefix + "schedule-type-opt-" + i_r2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(4, 4, opt_r1.text), " ");
} }
function ScheduleTimePickerComponent_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "cronJobHyperTrans");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "polpCronJob.errors.scheduleTypeRequired"), " ");
} }
function ScheduleTimePickerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4)(1, "label", 5);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "cronJobHyperTrans");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 6);
    i0.ɵɵtemplate(5, ScheduleTimePickerComponent_div_1_div_5_Template, 5, 6, "div", 7)(6, ScheduleTimePickerComponent_div_1_div_6_Template, 3, 3, "div", 8);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 3, "polpCronJob.scheduleType"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r2.scheduleTypeOptions);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.form.hasError("scheduleType") && (ctx_r2.form.get("scheduleType").dirty || ctx_r2.form.get("scheduleType").touched));
} }
function ScheduleTimePickerComponent_div_2_option_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 17);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "cronJobHyperTrans");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r4 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("value", opt_r4.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, opt_r4.text), " ");
} }
function ScheduleTimePickerComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4)(1, "label", 13);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "cronJobHyperTrans");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 6)(5, "select", 14)(6, "option", 15);
    i0.ɵɵtext(7);
    i0.ɵɵpipe(8, "cronJobHyperTrans");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, ScheduleTimePickerComponent_div_2_option_9_Template, 3, 4, "option", 16);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", ctx_r2.prefix + "schedule-recurrence");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 5, "polpCronJob.recurrence"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("id", ctx_r2.prefix + "schedule-recurrence");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(8, 7, "polpCronJob.selectOne"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r2.recurrenceOptions);
} }
function ScheduleTimePickerComponent_div_3_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "cronJobHyperTrans");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("id", ctx_r2.prefix + "schedule-custom-expr-helper");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, "polpCronJob.errors.customExprInvalid"), " ");
} }
function ScheduleTimePickerComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4)(1, "label", 13);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "cronJobHyperTrans");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 6);
    i0.ɵɵelement(5, "input", 18);
    i0.ɵɵtemplate(6, ScheduleTimePickerComponent_div_3_div_6_Template, 3, 4, "div", 19);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", ctx_r2.prefix + "schedule-custom-expr");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 6, "polpCronJob.customExpr"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("id", ctx_r2.prefix + "schedule-custom-expr");
    i0.ɵɵpropertyInterpolate("aria-describedby", ctx_r2.prefix + "schedule-custom-expr-helper");
    i0.ɵɵproperty("autofocus", true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.form.hasError("customExpr") && (ctx_r2.form.get("customExpr").dirty || ctx_r2.form.get("customExpr").touched));
} }
function ScheduleTimePickerComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4)(1, "label", 13);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "cronJobHyperTrans");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 6);
    i0.ɵɵelement(5, "input", 21);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", ctx_r2.prefix + "schedule-start-date");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 4, "polpCronJob.startDate"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("id", ctx_r2.prefix + "schedule-start-date");
    i0.ɵɵproperty("bsConfig", i0.ɵɵpureFunction0(6, _c0));
} }
function ScheduleTimePickerComponent_div_5_option_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 17);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "cronJobHyperTrans");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r5 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("value", opt_r5.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, opt_r5.text), " ");
} }
function ScheduleTimePickerComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4)(1, "label", 13);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "cronJobHyperTrans");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 6)(5, "select", 22)(6, "option", 23);
    i0.ɵɵtext(7, "...");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, ScheduleTimePickerComponent_div_5_option_8_Template, 3, 4, "option", 16);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", ctx_r2.prefix + "schedule-month-of-year");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 4, "polpCronJob.monthOfYear"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("id", ctx_r2.prefix + "schedule-month-of-year");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r2.monthsOfYearOptions);
} }
function ScheduleTimePickerComponent_div_6_option_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r6 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("value", opt_r6.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", opt_r6.text, " ");
} }
function ScheduleTimePickerComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4)(1, "label", 13);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "cronJobHyperTrans");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 6)(5, "select", 24)(6, "option", 15);
    i0.ɵɵtext(7, "...");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, ScheduleTimePickerComponent_div_6_option_8_Template, 2, 2, "option", 16);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", ctx_r2.prefix + "schedule-day-of-month");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 4, "polpCronJob.dayOfMonth"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("id", ctx_r2.prefix + "schedule-day-of-month");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r2.daysOfMonthOptions);
} }
function ScheduleTimePickerComponent_div_7_option_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 17);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "cronJobHyperTrans");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r7 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("value", opt_r7.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, opt_r7.text), " ");
} }
function ScheduleTimePickerComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4)(1, "label", 13);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "cronJobHyperTrans");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 6)(5, "select", 25)(6, "option", 15);
    i0.ɵɵtext(7, "...");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, ScheduleTimePickerComponent_div_7_option_8_Template, 3, 4, "option", 16);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", ctx_r2.prefix + "schedule-day-of-week");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 4, "polpCronJob.dayOfWeek"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("id", ctx_r2.prefix + "schedule-day-of-week");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r2.daysOfWeekOptions);
} }
function ScheduleTimePickerComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4)(1, "label", 13);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "cronJobHyperTrans");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 6);
    i0.ɵɵelement(5, "timepicker", 26);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", ctx_r2.prefix + "schedule-time");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 3, "polpCronJob.time"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("id", ctx_r2.prefix + "schedule-time");
} }
function ScheduleTimePickerComponent_div_9_div_7_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "cronJobHyperTrans");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "polpCronJob.notSetYet"));
} }
function ScheduleTimePickerComponent_div_9_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, ScheduleTimePickerComponent_div_9_div_7_span_2_Template, 3, 3, "span", 29);
    i0.ɵɵelementStart(3, "button", 30);
    i0.ɵɵlistener("click", function ScheduleTimePickerComponent_div_9_div_7_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.updateHolidaysAsync()); });
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "cronJobHyperTrans");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.holidays, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.holidays);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(5, 3, "polpCronJob.editBtn"), " ");
} }
function ScheduleTimePickerComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4)(1, "label", 13);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "cronJobHyperTrans");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 6)(5, "div", 27);
    i0.ɵɵelement(6, "input", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, ScheduleTimePickerComponent_div_9_div_7_Template, 6, 5, "div", 29);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", ctx_r2.prefix + "schedule-exclude-holidays");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 4, "polpCronJob.excludeHolidays"), " ");
    i0.ɵɵadvance(4);
    i0.ɵɵpropertyInterpolate("id", ctx_r2.prefix + "schedule-exclude-holidays");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.isHolidaysExcluded);
} }
function ScheduleTimePickerComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4)(1, "label", 13);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "cronJobHyperTrans");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 6)(5, "div", 27);
    i0.ɵɵelement(6, "input", 31);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", ctx_r2.prefix + "schedule-exclude-weekends");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 3, "polpCronJob.excludeWeekends"), " ");
    i0.ɵɵadvance(4);
    i0.ɵɵpropertyInterpolate("id", ctx_r2.prefix + "schedule-exclude-weekends");
} }
function ScheduleTimePickerComponent_div_11_div_7_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "cronJobHyperTrans");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "polpCronJob.notSetYet"));
} }
function ScheduleTimePickerComponent_div_11_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, ScheduleTimePickerComponent_div_11_div_7_span_2_Template, 3, 3, "span", 29);
    i0.ɵɵelementStart(3, "button", 30);
    i0.ɵɵlistener("click", function ScheduleTimePickerComponent_div_11_div_7_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r9); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.updateOtherDaysAsync()); });
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "cronJobHyperTrans");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.otherDays, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.otherDays);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(5, 3, "polpCronJob.editBtn"), " ");
} }
function ScheduleTimePickerComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4)(1, "label", 13);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "cronJobHyperTrans");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 6)(5, "div", 27);
    i0.ɵɵelement(6, "input", 32);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, ScheduleTimePickerComponent_div_11_div_7_Template, 6, 5, "div", 29);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", ctx_r2.prefix + "schedule-exclude-others");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 4, "polpCronJob.excludeOthers"), " ");
    i0.ɵɵadvance(4);
    i0.ɵɵpropertyInterpolate("id", ctx_r2.prefix + "schedule-exclude-others");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.isOthersExcluded);
} }
function ScheduleTimePickerComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4)(1, "label", 13);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "cronJobHyperTrans");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 6);
    i0.ɵɵelement(5, "input", 33);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", ctx_r2.prefix + "schedule-end-date");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 4, "polpCronJob.endDate"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("id", ctx_r2.prefix + "schedule-end-date");
    i0.ɵɵproperty("bsConfig", i0.ɵɵpureFunction0(6, _c0));
} }
function ScheduleTimePickerComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "alert", 34);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "cronJobHyperTrans");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const a_r10 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("type", a_r10.type)("dismissOnTimeout", a_r10.timeout);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 3, a_r10.message), " ");
} }
function ScheduleTimePickerComponent_div_14_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 38);
    i0.ɵɵlistener("click", function ScheduleTimePickerComponent_div_14_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.cancel()); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "cronJobHyperTrans");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "polpCronJob.cancelBtn"), " ");
} }
function ScheduleTimePickerComponent_div_14_button_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 39);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "cronJobHyperTrans");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "polpCronJob.submitBtn"), " ");
} }
function ScheduleTimePickerComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35);
    i0.ɵɵtemplate(1, ScheduleTimePickerComponent_div_14_button_1_Template, 3, 3, "button", 36)(2, ScheduleTimePickerComponent_div_14_button_2_Template, 3, 3, "button", 37);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.hideCancelBtn);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.hideSubmitBtn);
} }
const defaultSettings = {
    hideSubmitBtn: false,
    hideCancelBtn: true,
    enableAsap: false
};
const formValidator = (control) => {
    const scheduleTypeVal = safeParseInt(control.get('scheduleType').value);
    if (scheduleTypeVal == 0) {
        return { scheduleType: true };
    }
    if (scheduleTypeVal == 2) { // Recurrent
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
class ScheduleTimePickerComponent extends DefaultFormBaseComponent {
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
        this._stopEventPropagation = false;
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
        if (this.settings.enableAsap) {
            this.scheduleTypeOptions = [{
                    value: ScheduleTypeEnum.Asap,
                    text: 'polpCronJob.asap'
                }, ...this.scheduleTypeOptions];
        }
        const fields = mapToFormFields(this.initValue);
        this.form = this._builder.group(fields, { validators: [formValidator] });
        this.updateFieldVisibility(this.form.value);
        if (this.initValue) {
            this.holidays = this.initValue.holidays || this.defaultHolidays || '';
            this.otherDays = this.initValue.otherDays || '';
        }
        this._subr = this.form.valueChanges.subscribe(a => {
            this.updateFieldVisibility(a);
            if (!this._stopEventPropagation) {
                this.notifyValidation();
                this.notifyValueChanges(this.computeOutValue(a));
            }
        });
    }
    ngOnDestroy() {
        this._subr.unsubscribe();
    }
    ngOnChanges(data) {
        if (data && data.initValue && !data.initValue.firstChange) {
            this._stopEventPropagation = true;
            this.updateFormData(data.initValue.currentValue);
            this._stopEventPropagation = false;
        }
    }
    updateFormData(data) {
        const changes = mapToFormFields(data);
        this.holidays = data.holidays || this.defaultHolidays || '';
        this.otherDays = data.otherDays || '';
        this.form.patchValue(changes, {
            emitEvent: false // No need to emit event,
            // Even in this case, the onValueChange will be trigger.
            // so that we can get the validation change.
            // the client should compare the received value and the old value to decide if
            // any data has been changed. 
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
        else if (scheduleTypeVal == 2) {
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
        // When the type is 3, nothing is visible.
    }
    computeOutValue(a) {
        const scheduleTypeVal = safeParseInt(a.scheduleType);
        if (scheduleTypeVal == ScheduleTypeEnum.OneTime) {
            return this.getOneTimeValue(a);
        }
        if (scheduleTypeVal == ScheduleTypeEnum.Recurrent) {
            return this.getRecurrentValue(a);
        }
        if (scheduleTypeVal == ScheduleTypeEnum.Asap) {
            return this.getAsapValue();
        }
    }
    getAsapValue() {
        return {
            isRecurrent: false
        };
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
    async updateHolidaysAsync() {
        this.childStateChanged.emit({ opened: true });
        const ret = await this._utils.showMultiDateEditorAsync({
            title: 'polpCronJob.holidaysEditorTitle',
            initValue: (this.holidays || '').split(',').filter(a => !!a)
        });
        this.childStateChanged.emit({ opened: false });
        if (ret) {
            this.holidays = ret.join(',');
            this.notifyValidation();
            this.notifyValueChanges(this.computeOutValue(this.form.value));
        }
    }
    async updateOtherDaysAsync() {
        this.childStateChanged.emit({ opened: true });
        const ret = await this._utils.showMultiDateEditorAsync({
            title: 'polpCronJob.othersEditorTitle',
            initValue: (this.otherDays || '').split(',').filter(a => !!a)
        });
        this.childStateChanged.emit({ opened: false });
        if (ret) {
            this.otherDays = ret.join(',');
            this.notifyValidation();
            this.notifyValueChanges(this.computeOutValue(this.form.value));
        }
    }
    static { this.ɵfac = function ScheduleTimePickerComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ScheduleTimePickerComponent)(i0.ɵɵdirectiveInject(i1.UntypedFormBuilder), i0.ɵɵdirectiveInject(LowLevelUtilsService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ScheduleTimePickerComponent, selectors: [["polp-bs-schedule-time-picker"]], inputs: { initSettings: "initSettings", initValue: "initValue", defaultHolidays: "defaultHolidays" }, outputs: { childStateChanged: "childStateChanged" }, standalone: false, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 15, vars: 15, consts: [[3, "ngSubmit", "formGroup"], ["class", "mb-3 row", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-end mb-4", 4, "ngIf"], [1, "mb-3", "row"], [1, "col-12", "col-md-4", "col-form-label"], [1, "col-12", "col-md-8"], ["class", "form-check form-check-inline", 4, "ngFor", "ngForOf"], ["class", "d-block form-text text-warning my-1", 4, "ngIf"], [1, "form-check", "form-check-inline"], ["formControlName", "scheduleType", "type", "radio", 1, "form-check-input", 3, "id", "value"], [1, "form-check-label", 3, "for"], [1, "d-block", "form-text", "text-warning", "my-1"], [1, "col-12", "col-md-4", "col-form-label", 3, "for"], ["formControlName", "recurrence", 1, "form-control", 3, "id"], ["selected", "", "value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["type", "text", "formControlName", "customExpr", 1, "form-control", 3, "autofocus", "id", "aria-describedby"], ["class", "form-text text-warning d-block my-1", 3, "id", 4, "ngIf"], [1, "form-text", "text-warning", "d-block", "my-1", 3, "id"], ["type", "text", "bsDatepicker", "", "formControlName", "startDate", 1, "form-control", 3, "id", "bsConfig"], ["formControlName", "monthOfYear", 1, "form-control", 3, "id"], ["selected", ""], ["formControlName", "dayOfMonth", 1, "form-control", 3, "id"], ["formControlName", "dayOfWeek", 1, "form-control", 3, "id"], ["formControlName", "time", 3, "id"], [1, "form-check"], ["type", "checkbox", "formControlName", "excludeHolidays", 1, "form-check-input", "position-static", 3, "id"], [4, "ngIf"], [1, "btn", "btn-link", "text-info", 3, "click"], ["type", "checkbox", "formControlName", "excludeWeekends", 1, "form-check-input", "position-static", 3, "id"], ["type", "checkbox", "formControlName", "excludeOthers", 1, "form-check-input", "position-static", 3, "id"], ["type", "text", "bsDatepicker", "", "formControlName", "endDate", 1, "form-control", 3, "id", "bsConfig"], [3, "type", "dismissOnTimeout"], [1, "d-flex", "justify-content-end", "mb-4"], ["type", "button", "class", "btn btn-warning", 3, "click", 4, "ngIf"], ["type", "submit", "class", "btn btn-success", 4, "ngIf"], ["type", "button", 1, "btn", "btn-warning", 3, "click"], ["type", "submit", 1, "btn", "btn-success"]], template: function ScheduleTimePickerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "form", 0);
            i0.ɵɵlistener("ngSubmit", function ScheduleTimePickerComponent_Template_form_ngSubmit_0_listener() { return ctx.confirm(); });
            i0.ɵɵtemplate(1, ScheduleTimePickerComponent_div_1_Template, 7, 5, "div", 1)(2, ScheduleTimePickerComponent_div_2_Template, 10, 9, "div", 1)(3, ScheduleTimePickerComponent_div_3_Template, 7, 8, "div", 1)(4, ScheduleTimePickerComponent_div_4_Template, 6, 7, "div", 1)(5, ScheduleTimePickerComponent_div_5_Template, 9, 6, "div", 1)(6, ScheduleTimePickerComponent_div_6_Template, 9, 6, "div", 1)(7, ScheduleTimePickerComponent_div_7_Template, 9, 6, "div", 1)(8, ScheduleTimePickerComponent_div_8_Template, 6, 5, "div", 1)(9, ScheduleTimePickerComponent_div_9_Template, 8, 6, "div", 1)(10, ScheduleTimePickerComponent_div_10_Template, 7, 5, "div", 1)(11, ScheduleTimePickerComponent_div_11_Template, 8, 6, "div", 1)(12, ScheduleTimePickerComponent_div_12_Template, 6, 7, "div", 1)(13, ScheduleTimePickerComponent_ng_container_13_Template, 4, 5, "ng-container", 2)(14, ScheduleTimePickerComponent_div_14_Template, 3, 2, "div", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.visibiltyCfg.scheduleType);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.visibiltyCfg.recurrence);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.visibiltyCfg.recurrence && ctx.visibiltyCfg.customExpr);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.visibiltyCfg.startDate);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.visibiltyCfg.monthOfYear);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.visibiltyCfg.dayOfMonth);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.visibiltyCfg.dayOfWeek);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.visibiltyCfg.time);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.visibiltyCfg.excludeHolidays);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.visibiltyCfg.excludeWeekends);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.visibiltyCfg.excludeOthers);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.visibiltyCfg.endDate);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.alerts);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.hideSubmitBtn || !ctx.hideCancelBtn);
        } }, dependencies: [i2$1.NgForOf, i2$1.NgIf, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.CheckboxControlValueAccessor, i1.SelectControlValueAccessor, i1.RadioControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, i3$1.AlertComponent, i2.BsDatepickerDirective, i2.BsDatepickerInputDirective, i6.TimepickerComponent, i7.AutofocusDirective, CronJobHyperTransPipe], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ScheduleTimePickerComponent, [{
        type: Component,
        args: [{ selector: 'polp-bs-schedule-time-picker', standalone: false, template: "<form [formGroup]=\"form\" (ngSubmit)=\"confirm()\">\n    <div class=\"mb-3 row\" *ngIf=\"visibiltyCfg.scheduleType\">\n        <label class=\"col-12 col-md-4 col-form-label\">\n            {{'polpCronJob.scheduleType' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <div class=\"form-check form-check-inline\"\n                 *ngFor=\"let opt of scheduleTypeOptions;let i=index\">\n                <input class=\"form-check-input\"\n                       formControlName=\"scheduleType\"\n                       type=\"radio\"\n                       id=\"{{prefix + 'schedule-type-opt-' + i}}\"\n                       value=\"{{opt.value}}\">\n                <label class=\"form-check-label\"\n                       for=\"{{prefix + 'schedule-type-opt-' + i}}\">\n                    {{opt.text | cronJobHyperTrans}}\n                </label>\n            </div>\n            <div class=\"d-block form-text text-warning my-1\"\n                 *ngIf=\"form.hasError('scheduleType') && (form.get('scheduleType').dirty || form.get('scheduleType').touched)\">\n                {{'polpCronJob.errors.scheduleTypeRequired' | cronJobHyperTrans}}\n            </div>\n        </div>\n    </div>\n    \n    <div class=\"mb-3 row\" *ngIf=\"visibiltyCfg.recurrence\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-recurrence'}}\">\n            {{'polpCronJob.recurrence' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <select class=\"form-control\"\n                    id=\"{{prefix + 'schedule-recurrence'}}\"\n                    formControlName=\"recurrence\">\n                <option selected value=\"\">{{'polpCronJob.selectOne' | cronJobHyperTrans}}</option>\n                <option value=\"{{opt.value}}\" *ngFor=\"let opt of recurrenceOptions\">\n                    {{opt.text | cronJobHyperTrans}}\n                </option>\n            </select>\n        </div>\n    </div>\n\n    <div class=\"mb-3 row\" *ngIf=\"visibiltyCfg.recurrence && visibiltyCfg.customExpr\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-custom-expr'}}\">\n            {{'polpCronJob.customExpr' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <input class=\"form-control\"\n                   type=\"text\"\n                   [autofocus]=\"true\"\n                   id=\"{{prefix + 'schedule-custom-expr'}}\"\n                   aria-describedby=\"{{prefix + 'schedule-custom-expr-helper'}}\"\n                   formControlName=\"customExpr\">\n            <div id=\"{{prefix + 'schedule-custom-expr-helper'}}\"\n                 class=\"form-text text-warning d-block my-1\"\n                 *ngIf=\"form.hasError('customExpr') && (form.get('customExpr').dirty || form.get('customExpr').touched)\">\n                {{'polpCronJob.errors.customExprInvalid' | cronJobHyperTrans}}\n            </div>\n        </div>\n    </div>\n\n    <div class=\"mb-3 row\" *ngIf=\"visibiltyCfg.startDate\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-start-date'}}\">\n            {{'polpCronJob.startDate' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <input class=\"form-control\"\n                   type=\"text\"\n                   id=\"{{prefix + 'schedule-start-date'}}\"\n                   bsDatepicker\n                   [bsConfig]=\"{ adaptivePosition: true }\"\n                   formControlName=\"startDate\">\n        </div>\n    </div>\n\n\n    <div class=\"mb-3 row\" *ngIf=\"visibiltyCfg.monthOfYear\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-month-of-year'}}\">\n            {{'polpCronJob.monthOfYear' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <select class=\"form-control\"\n                    id=\"{{prefix + 'schedule-month-of-year'}}\"\n                    formControlName=\"monthOfYear\">\n                <option selected>...</option>\n                <option value=\"{{opt.value}}\" *ngFor=\"let opt of monthsOfYearOptions\">\n                    {{opt.text | cronJobHyperTrans}}\n                </option>\n            </select>\n        </div>\n    </div>\n\n    <div class=\"mb-3 row\" *ngIf=\"visibiltyCfg.dayOfMonth\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-day-of-month'}}\">\n            {{'polpCronJob.dayOfMonth' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <select class=\"form-control\"\n                    id=\"{{prefix + 'schedule-day-of-month'}}\"\n                    formControlName=\"dayOfMonth\">\n                <option selected value=\"\">...</option>\n                <option value=\"{{opt.value}}\" *ngFor=\"let opt of daysOfMonthOptions\">\n                    {{opt.text}}\n                </option>\n            </select>\n        </div>\n    </div>\n\n\n    <div class=\"mb-3 row\" *ngIf=\"visibiltyCfg.dayOfWeek\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-day-of-week'}}\">\n            {{'polpCronJob.dayOfWeek' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <select class=\"form-control\"\n                    id=\"{{prefix + 'schedule-day-of-week'}}\"\n                    formControlName=\"dayOfWeek\">\n                <option selected value=\"\">...</option>\n                <option value=\"{{opt.value}}\" *ngFor=\"let opt of daysOfWeekOptions\">\n                    {{opt.text | cronJobHyperTrans}}\n                </option>\n            </select>\n        </div>\n    </div>\n\n    <div class=\"mb-3 row\" *ngIf=\"visibiltyCfg.time\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-time'}}\">\n            {{'polpCronJob.time' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <timepicker id=\"{{prefix + 'schedule-time'}}\"\n                        formControlName=\"time\">\n            </timepicker>\n        </div>\n    </div>\n\n    <div class=\"mb-3 row\" *ngIf=\"visibiltyCfg.excludeHolidays\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-exclude-holidays'}}\">\n            {{'polpCronJob.excludeHolidays' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <div class=\"form-check\">\n                <input class=\"form-check-input position-static\"\n                       type=\"checkbox\"\n                       id=\"{{prefix + 'schedule-exclude-holidays'}}\"\n                       formControlName=\"excludeHolidays\">\n            </div>\n            <div *ngIf=\"isHolidaysExcluded\">\n                {{holidays}}\n                <span *ngIf=\"!holidays\">{{'polpCronJob.notSetYet' | cronJobHyperTrans}}</span>\n                <button class=\"btn btn-link text-info\" (click)=\"updateHolidaysAsync()\">\n                    {{'polpCronJob.editBtn' | cronJobHyperTrans}}\n                </button>\n            </div>\n        </div>\n    </div>\n    <div class=\"mb-3 row\" *ngIf=\"visibiltyCfg.excludeWeekends\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-exclude-weekends'}}\">\n            {{'polpCronJob.excludeWeekends' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <div class=\"form-check\">\n                <input class=\"form-check-input position-static\"\n                       type=\"checkbox\"\n                       id=\"{{prefix + 'schedule-exclude-weekends'}}\"\n                       formControlName=\"excludeWeekends\">\n            </div>\n        </div>\n    </div>\n    <div class=\"mb-3 row\" *ngIf=\"visibiltyCfg.excludeOthers\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-exclude-others'}}\">\n            {{'polpCronJob.excludeOthers' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <div class=\"form-check\">\n                <input class=\"form-check-input position-static\"\n                       id=\"{{prefix + 'schedule-exclude-others'}}\"\n                       type=\"checkbox\"\n                       formControlName=\"excludeOthers\">\n            </div>\n            <div *ngIf=\"isOthersExcluded\">\n                {{otherDays}}\n                <span *ngIf=\"!otherDays\">{{'polpCronJob.notSetYet' | cronJobHyperTrans}}</span>\n                <button class=\"btn btn-link text-info\" (click)=\"updateOtherDaysAsync()\">\n                    {{'polpCronJob.editBtn' | cronJobHyperTrans}}\n                </button>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"mb-3 row\" *ngIf=\"visibiltyCfg.endDate\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-end-date'}}\">\n            {{'polpCronJob.endDate' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <input class=\"form-control\"\n                   type=\"text\"\n                   id=\"{{prefix + 'schedule-end-date'}}\"\n                   bsDatepicker\n                   [bsConfig]=\"{ adaptivePosition: true }\"\n                   formControlName=\"endDate\">\n        </div>\n    </div>\n\n    <ng-container *ngFor=\"let a of alerts\">\n        <alert [type]=\"a.type\" [dismissOnTimeout]=\"a.timeout\">\n            {{a.message | cronJobHyperTrans}}\n        </alert>\n    </ng-container>\n    \n    <div class=\"d-flex justify-content-end mb-4\" *ngIf=\"!hideSubmitBtn || !hideCancelBtn\">\n        <button type=\"button\" class=\"btn btn-warning\"\n                (click)=\"cancel()\" *ngIf=\"!hideCancelBtn\">\n            {{'polpCronJob.cancelBtn' | cronJobHyperTrans}}\n        </button>\n        <button type=\"submit\" class=\"btn btn-success\"\n                *ngIf=\"!hideSubmitBtn\">\n            {{'polpCronJob.submitBtn' | cronJobHyperTrans}}\n        </button>\n    </div>\n</form>\n" }]
    }], () => [{ type: i1.UntypedFormBuilder }, { type: LowLevelUtilsService }], { initSettings: [{
            type: Input
        }], initValue: [{
            type: Input
        }], defaultHolidays: [{
            type: Input
        }], childStateChanged: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ScheduleTimePickerComponent, { className: "ScheduleTimePickerComponent", filePath: "lib/schedule-time-picker/schedule-time-picker.component.ts", lineNumber: 90 }); })();

function ScheduleTimeModalComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "alert", 9);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "cronJobHyperTrans");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const a_r1 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("type", a_r1.type)("dismissOnTimeout", a_r1.timeout);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 3, a_r1.message), " ");
} }
function ScheduleTimeModalComponent_button_12_fa_icon_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "fa-icon", 12);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("icon", ctx_r2.faSpinner)("spin", true);
} }
function ScheduleTimeModalComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵlistener("click", function ScheduleTimeModalComponent_button_12_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.confirmAsync()); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "cronJobHyperTrans");
    i0.ɵɵtemplate(3, ScheduleTimeModalComponent_button_12_fa_icon_3_Template, 1, 2, "fa-icon", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, "polpCronJob.confirmBtn"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.isSaving);
} }
class ScheduleTimeModalComponent extends ObservableModalAbstractComponent {
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
        this.closeModal(null);
    }
    updateScheduler(evt) {
        this.outputValue = evt;
    }
    validateScheduler(evt) {
        if (evt) {
            this.isValid = evt.valid;
        }
    }
    updateStyle(evt) {
        if (evt && evt.opened) {
            const newClasses = this.extraClasses ? `${this.extraClasses} has-child-modal` : 'has-child-modal';
            this.bsModalRef.setClass(newClasses);
        }
        else {
            const newClasses = this.extraClasses || '';
            this.bsModalRef.setClass(newClasses);
        }
    }
    async confirmAsync() {
        this.alertProvider.clean();
        if (!this.isValid) {
            this.alertProvider.warning('polpCronJob.general');
            return;
        }
        this.isSaving = true;
        this.alertProvider.info('polpCronJob.messages.working');
        try {
            if (this.onConfirmAsync) {
                await this.onConfirmAsync(this.outputValue);
            }
            this.closeModal(this.outputValue);
        }
        catch (ex) {
            this.alertProvider.clean();
            this.alertProvider.danger('polpCronJob.errors.somethingWrong');
        }
        finally {
            this.isSaving = false;
        }
    }
    static { this.ɵfac = function ScheduleTimeModalComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ScheduleTimeModalComponent)(i0.ɵɵdirectiveInject(i1$1.BsModalRef), i0.ɵɵdirectiveInject(i1$1.BsModalService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ScheduleTimeModalComponent, selectors: [["polp-bs-schedule-time-modal"]], inputs: { title: "title", initSettings: "initSettings", initValue: "initValue", onConfirmAsync: "onConfirmAsync", extraClasses: "extraClasses" }, standalone: false, features: [i0.ɵɵInheritDefinitionFeature], decls: 13, vars: 10, consts: [["polpModalDraggable", "", 1, "modal-header"], [1, "modal-title"], [1, "modal-body"], [3, "childStateChanged", "onValidation", "onValueChanged", "initSettings", "initValue"], [4, "ngFor", "ngForOf"], [1, "modal-footer"], [1, "d-flex", "justify-content-end"], [1, "btn", "btn-secondary", "me-2", 3, "click"], ["type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"], [3, "type", "dismissOnTimeout"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["class", "ms-1", 3, "icon", "spin", 4, "ngIf"], [1, "ms-1", 3, "icon", "spin"]], template: function ScheduleTimeModalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "h4", 1);
            i0.ɵɵtext(2);
            i0.ɵɵpipe(3, "cronJobHyperTrans");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(4, "div", 2)(5, "polp-bs-schedule-time-picker", 3);
            i0.ɵɵlistener("childStateChanged", function ScheduleTimeModalComponent_Template_polp_bs_schedule_time_picker_childStateChanged_5_listener($event) { return ctx.updateStyle($event); })("onValidation", function ScheduleTimeModalComponent_Template_polp_bs_schedule_time_picker_onValidation_5_listener($event) { return ctx.validateScheduler($event); })("onValueChanged", function ScheduleTimeModalComponent_Template_polp_bs_schedule_time_picker_onValueChanged_5_listener($event) { return ctx.updateScheduler($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(6, ScheduleTimeModalComponent_ng_container_6_Template, 4, 5, "ng-container", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 5)(8, "div", 6)(9, "button", 7);
            i0.ɵɵlistener("click", function ScheduleTimeModalComponent_Template_button_click_9_listener() { return ctx.close(); });
            i0.ɵɵtext(10);
            i0.ɵɵpipe(11, "cronJobHyperTrans");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(12, ScheduleTimeModalComponent_button_12_Template, 4, 4, "button", 8);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 6, ctx.title));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("initSettings", ctx.initSettings)("initValue", ctx.initValue);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.alerts);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(11, 8, "polpCronJob.closeBtn"), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.isValid);
        } }, dependencies: [i2$1.NgForOf, i2$1.NgIf, i3$1.AlertComponent, i4.polpModalDraggableDirective, ScheduleTimePickerComponent, CronJobHyperTransPipe], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ScheduleTimeModalComponent, [{
        type: Component,
        args: [{ selector: 'polp-bs-schedule-time-modal', standalone: false, template: "<div class=\"modal-header\" polpModalDraggable>\n    <h4 class=\"modal-title\">{{title | cronJobHyperTrans}}</h4>\n</div>\n<div class=\"modal-body\">\n    <polp-bs-schedule-time-picker [initSettings]=\"initSettings\"\n                                  [initValue]=\"initValue\"\n                                  (childStateChanged)=\"updateStyle($event)\"\n                                  (onValidation)=\"validateScheduler($event)\"\n                                  (onValueChanged)=\"updateScheduler($event)\">\n    </polp-bs-schedule-time-picker>\n    \n    <ng-container *ngFor=\"let a of alerts\">\n        <alert [type]=\"a.type\" [dismissOnTimeout]=\"a.timeout\">\n            {{a.message | cronJobHyperTrans}}\n        </alert>\n    </ng-container>\n    \n</div>\n<div class=\"modal-footer\">\n    <div class=\"d-flex justify-content-end\">\n        <button class=\"btn btn-secondary me-2\" (click)=\"close()\">\n            {{'polpCronJob.closeBtn' | cronJobHyperTrans}}\n        </button>\n        <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"isValid\"\n                (click)=\"confirmAsync()\">\n            {{'polpCronJob.confirmBtn' | cronJobHyperTrans}}\n            <fa-icon [icon]=\"faSpinner\" [spin]=\"true\" class=\"ms-1\" *ngIf=\"isSaving\"></fa-icon>\n        </button>\n    </div>\n</div>\n" }]
    }], () => [{ type: i1$1.BsModalRef }, { type: i1$1.BsModalService }], { title: [{
            type: Input
        }], initSettings: [{
            type: Input
        }], initValue: [{
            type: Input
        }], onConfirmAsync: [{
            type: Input
        }], extraClasses: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ScheduleTimeModalComponent, { className: "ScheduleTimeModalComponent", filePath: "lib/schedule-time-modal/schedule-time-modal.component.ts", lineNumber: 23 }); })();

class CronJobService {
    constructor() { }
    parseCronExpr(source, target) {
        // Above is the UTC representation        
        const a = parseExpression(source);
        // Case 1 (every year)
        if (a.fields.month.length == 1 && a.fields.dayOfMonth.length == 1) {
            target.recurrence = IntervalEnum.Year;
            // utc time
            const today = new Date();
            const timeInUtc = new Date(Date.UTC(today.getFullYear(), a.fields.month[0], parseInt(a.fields.dayOfMonth[0].toString(), 10), a.fields.hour[0] || 0, a.fields.minute[0] || 0));
            // Time
            target.dayOfMonth = timeInUtc.getDate();
            target.monthOfYear = timeInUtc.getMonth();
            target.time = timeInUtc;
        }
        else if (a.fields.month.length == 12 &&
            a.fields.dayOfMonth.length == 1 &&
            a.fields.dayOfWeek.length == 8) {
            target.recurrence = IntervalEnum.Month;
            // utc time
            const today = new Date();
            const timeInUtc = new Date(Date.UTC(today.getFullYear(), today.getMonth(), parseInt(a.fields.dayOfMonth[0].toString(), 10), a.fields.hour[0] || 0, a.fields.minute[0] || 0));
            // Time
            target.dayOfMonth = timeInUtc.getDate();
            target.time = timeInUtc;
        }
        else if (a.fields.month.length == 12 &&
            a.fields.dayOfMonth.length == 31 &&
            a.fields.dayOfWeek.length == 1) {
            target.recurrence = IntervalEnum.Week;
            // utc time
            const today = new Date();
            const weekOfDay = a.fields.dayOfWeek[0];
            const daysToAdd = weekOfDay - today.getDay();
            today.setDate(today.getDate() + daysToAdd);
            const timeInUtc = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate(), a.fields.hour[0] || 0, a.fields.minute[0] || 0));
            // Time
            target.dayOfWeek = timeInUtc.getDay();
            target.time = timeInUtc;
        }
        else if (a.fields.month.length == 12 &&
            a.fields.dayOfMonth.length == 31 &&
            a.fields.dayOfWeek.length == 8) {
            target.recurrence = IntervalEnum.Day;
            // utc time
            const today = new Date();
            const timeInUtc = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate(), a.fields.hour[0] || 0, a.fields.minute[0] || 0));
            // Time
            target.time = timeInUtc;
        }
        else {
            target.recurrence = IntervalEnum.Custom;
            // todo:
            // A utc time 
            const today = new Date();
            const timeInUtc = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate(), a.fields.hour[0] || 0, a.fields.minute[0] || 0));
            target.time = timeInUtc;
        }
    }
    composeCronExpr(source) {
        // IsRecurrent true
        if (source.recurrence == IntervalEnum.Year) {
            // Convert it into Utc time
            const localTime = new Date(source.time);
            localTime.setDate(source.dayOfMonth);
            localTime.setMonth(source.monthOfYear);
            const min = localTime.getUTCMinutes();
            const hour = localTime.getUTCHours();
            const dayOfMonth = localTime.getUTCDate();
            const monthOfYear = localTime.getUTCMonth();
            // The difference of hours can lead to the change of the other things.
            return `${min} ${hour} ${dayOfMonth} ${monthOfYear} *`;
        }
        else if (source.recurrence == IntervalEnum.Month) {
            // Convert it into Utc time
            const localTime = new Date(source.time);
            localTime.setDate(source.dayOfMonth);
            const min = localTime.getUTCMinutes();
            const hour = localTime.getUTCHours();
            const dayOfMonth = localTime.getUTCDate();
            return `${min} ${hour} ${dayOfMonth} * *`;
        }
        else if (source.recurrence == IntervalEnum.Week) {
            // Convert it into Utc time
            const localTime = new Date(source.time);
            let sourceDayOfWeek = source.dayOfWeek;
            let currentDay = localTime.getDay();
            let distance = sourceDayOfWeek - currentDay;
            localTime.setDate(localTime.getDate() + distance);
            const min = localTime.getUTCMinutes();
            const hour = localTime.getUTCHours();
            const dayOfWeek = localTime.getUTCDay();
            return `${min} ${hour} * * ${dayOfWeek}`;
        }
        else if (source.recurrence == IntervalEnum.Day) {
            const localTime = new Date(source.time);
            const min = localTime.getUTCMinutes();
            const hour = localTime.getUTCHours();
            return `${min} ${hour} * * *`;
        }
        else if (source.recurrence == IntervalEnum.Custom) {
            return source.customExpr;
        }
        return '';
    }
    static { this.ɵfac = function CronJobService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CronJobService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CronJobService, factory: CronJobService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CronJobService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [], null); })();

class UtilsService {
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
    static { this.ɵfac = function UtilsService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || UtilsService)(i0.ɵɵinject(i1$1.BsModalService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: UtilsService, factory: UtilsService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UtilsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1$1.BsModalService }], null); })();

class PolpBsCronJobModule {
    static { this.ɵfac = function PolpBsCronJobModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PolpBsCronJobModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PolpBsCronJobModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
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
            TagInputModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PolpBsCronJobModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PolpBsCronJobModule, { declarations: [ScheduleTimePickerComponent,
        ScheduleTimeModalComponent,
        CronJobHyperTransPipe,
        MultiDatePickerComponent,
        MultiDateModalComponent], imports: [CommonModule,
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
        TagInputModule], exports: [ScheduleTimePickerComponent,
        ScheduleTimeModalComponent,
        CronJobHyperTransPipe,
        MultiDatePickerComponent,
        MultiDateModalComponent] }); })();

/*
 * Public API Surface of cron-job
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CronJobHyperTransPipe, CronJobService, CronJobTranslatorService, LowLevelUtilsService, MultiDateModalComponent, MultiDatePickerComponent, PolpBsCronJobModule, ScheduleTimeModalComponent, ScheduleTimePickerComponent, ScheduleTypeEnum, UtilsService, defaultDict, getDefaultScheduleTime, isEqualBool, isEqualDate, isEqualScheduleTime, isEqualString, isEqualTime };
//# sourceMappingURL=polpware-cron-job.mjs.map
