import { __extends } from 'tslib';
import { ɵɵelementStart, ɵɵelement, ɵɵtext, ɵɵpipe, ɵɵelementEnd, ɵɵnextContext, ɵɵadvance, ɵɵpropertyInterpolate, ɵɵtextInterpolate1, ɵɵpipeBind4, ɵɵtemplate, ɵɵproperty, ɵɵpureFunction0, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵɵgetCurrentView, ɵɵlistener, ɵɵrestoreView, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature, ɵsetClassMetadata, Component, Input, ɵɵdefineInjectable, Injectable, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { FormBuilder, ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, DefaultValueAccessor, RadioControlValueAccessor, NgControlStatus, FormControlName, SelectControlValueAccessor, NgSelectOption, ɵangular_packages_forms_forms_x, NumberValueAccessor, CheckboxControlValueAccessor, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { safeParseInt } from '@polpware/fe-utilities';
import { AlertDefaultImpl } from '@polpware/ngx-alert';
import { DefaultFormBaseComponent } from '@polpware/ngx-form-common';
import { parseString, parseExpression } from 'cron-parser';
import { NgIf, NgForOf, CommonModule } from '@angular/common';
import { AutofocusDirective, FtAutofocusModule } from '@40three/ngx-autofocus-directive';
import { BsDatepickerInputDirective, BsDatepickerDirective, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerComponent, TimepickerModule } from 'ngx-bootstrap/timepicker';
import { AlertComponent, AlertModule } from 'ngx-bootstrap/alert';
import { HyperTranslatePipe, NgxI18nModule } from '@polpware/ngx-i18n';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

var defaultDict = {
    polpCronJob: {
        scheduleType: 'Schedule Type',
        recurrence: 'Recurrence',
        customExpr: 'Custom CRON expression',
        startDate: 'Start date',
        monthOfYear: 'Month',
        dayOfMonth: 'Day',
        dayOfWeek: 'Day',
        timezone: 'Timezone',
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
            timezoneInvalid: 'Timezone is not valid. Only a number from -10 to 12 is accepted. ',
            scheduleTypeRequired: 'Please select one schedule type!'
        }
    }
};

/**
 Get the timezone offset between the local time and Utc
 */
function getTimezoneOffset() {
    var d = new Date();
    var n = d.getTimezoneOffset();
    return -Math.floor(n / 60);
}
var IntervalEnum;
(function (IntervalEnum) {
    IntervalEnum[IntervalEnum["Day"] = 10] = "Day";
    IntervalEnum[IntervalEnum["Week"] = 50] = "Week";
    IntervalEnum[IntervalEnum["Month"] = 100] = "Month";
    IntervalEnum[IntervalEnum["Year"] = 500] = "Year";
    IntervalEnum[IntervalEnum["Custom"] = 10000] = "Custom";
})(IntervalEnum || (IntervalEnum = {}));
var ScheduleTypeEnum;
(function (ScheduleTypeEnum) {
    ScheduleTypeEnum[ScheduleTypeEnum["OneTime"] = 1] = "OneTime";
    ScheduleTypeEnum[ScheduleTypeEnum["Recurrent"] = 2] = "Recurrent";
})(ScheduleTypeEnum || (ScheduleTypeEnum = {}));
var MonthEnum;
(function (MonthEnum) {
    MonthEnum[MonthEnum["January"] = 1] = "January";
    MonthEnum[MonthEnum["February"] = 2] = "February";
    MonthEnum[MonthEnum["March"] = 3] = "March";
    MonthEnum[MonthEnum["April"] = 4] = "April";
    MonthEnum[MonthEnum["May"] = 5] = "May";
    MonthEnum[MonthEnum["June"] = 6] = "June";
    MonthEnum[MonthEnum["July"] = 7] = "July";
    MonthEnum[MonthEnum["August"] = 8] = "August";
    MonthEnum[MonthEnum["September"] = 9] = "September";
    MonthEnum[MonthEnum["October"] = 10] = "October";
    MonthEnum[MonthEnum["November"] = 11] = "November";
    MonthEnum[MonthEnum["December"] = 12] = "December";
})(MonthEnum || (MonthEnum = {}));
function getMonthsOfYear() {
    var ret = [];
    for (var enumMember in MonthEnum) {
        var isValueProperty = parseInt(enumMember, 10) >= 0;
        if (isValueProperty) {
            ret.push({
                value: enumMember,
                text: 'polpCronJob.' + MonthEnum[enumMember]
            });
        }
    }
    return ret;
}
var DayOfWeekEnum;
(function (DayOfWeekEnum) {
    DayOfWeekEnum[DayOfWeekEnum["Sunday"] = 0] = "Sunday";
    DayOfWeekEnum[DayOfWeekEnum["Monday"] = 1] = "Monday";
    DayOfWeekEnum[DayOfWeekEnum["Tuesday"] = 2] = "Tuesday";
    DayOfWeekEnum[DayOfWeekEnum["Wednesday"] = 3] = "Wednesday";
    DayOfWeekEnum[DayOfWeekEnum["Thursday"] = 4] = "Thursday";
    DayOfWeekEnum[DayOfWeekEnum["Friday"] = 5] = "Friday";
    DayOfWeekEnum[DayOfWeekEnum["Saturday"] = 6] = "Saturday";
})(DayOfWeekEnum || (DayOfWeekEnum = {}));
function getDaysOfWeek() {
    var ret = [];
    for (var enumMember in DayOfWeekEnum) {
        var isValueProperty = parseInt(enumMember, 10) >= 0;
        if (isValueProperty) {
            ret.push({
                value: enumMember,
                text: 'polpCronJob.' + DayOfWeekEnum[enumMember]
            });
        }
    }
    return ret;
}
function getDaysOfMonth() {
    var ret = [];
    for (var i = 1; i < 32; i++) {
        ret.push({
            value: i,
            text: i.toString()
        });
    }
    return ret;
}
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
        timezone: getTimezoneOffset(),
        startDate: tomorrow,
        endDate: null,
        time: today,
        monthOfYear: MonthEnum.January,
        dayOfMonth: 1,
        dayOfWeek: DayOfWeekEnum.Monday
    };
}

function ScheduleTimePickerComponent_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵelement(1, "input", 10);
    ɵɵelementStart(2, "label", 11);
    ɵɵtext(3);
    ɵɵpipe(4, "hyperTrans");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var opt_r17 = ctx.$implicit;
    var i_r18 = ctx.index;
    var ctx_r15 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("id", "schedule-type-opt-" + i_r18);
    ɵɵpropertyInterpolate("value", opt_r17.value);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("for", "schedule-type-opt-" + i_r18);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind4(4, 4, opt_r17.text, null, null, ctx_r15.defaultRes), " ");
} }
function ScheduleTimePickerComponent_div_1_span_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 12);
    ɵɵtext(1);
    ɵɵpipe(2, "hyperTrans");
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r16 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind4(2, 1, "polpCronJob.errors.scheduleTypeRequired", null, null, ctx_r16.defaultRes), " ");
} }
function ScheduleTimePickerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵelementStart(1, "label", 5);
    ɵɵtext(2);
    ɵɵpipe(3, "hyperTrans");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 6);
    ɵɵtemplate(5, ScheduleTimePickerComponent_div_1_div_5_Template, 5, 9, "div", 7);
    ɵɵtemplate(6, ScheduleTimePickerComponent_div_1_span_6_Template, 3, 6, "span", 8);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind4(3, 3, "polpCronJob.scheduleType", null, null, ctx_r0.defaultRes), " ");
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ctx_r0.scheduleTypeOptions);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.form.hasError("scheduleType") && (ctx_r0.form.get("scheduleType").dirty || ctx_r0.form.get("scheduleType").touched));
} }
function ScheduleTimePickerComponent_div_2_option_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "option", 17);
    ɵɵtext(1);
    ɵɵpipe(2, "hyperTrans");
    ɵɵelementEnd();
} if (rf & 2) {
    var opt_r20 = ctx.$implicit;
    var ctx_r19 = ɵɵnextContext(2);
    ɵɵpropertyInterpolate("value", opt_r20.value);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind4(2, 2, opt_r20.text, null, null, ctx_r19.defaultRes), " ");
} }
function ScheduleTimePickerComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵelementStart(1, "label", 13);
    ɵɵtext(2);
    ɵɵpipe(3, "hyperTrans");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 6);
    ɵɵelementStart(5, "select", 14);
    ɵɵelementStart(6, "option", 15);
    ɵɵtext(7, "...");
    ɵɵelementEnd();
    ɵɵtemplate(8, ScheduleTimePickerComponent_div_2_option_8_Template, 3, 7, "option", 16);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind4(3, 2, "polpCronJob.recurrence", null, null, ctx_r1.defaultRes), " ");
    ɵɵadvance(6);
    ɵɵproperty("ngForOf", ctx_r1.recurrenceOptions);
} }
function ScheduleTimePickerComponent_div_3_span_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 12);
    ɵɵtext(1);
    ɵɵpipe(2, "hyperTrans");
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r21 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind4(2, 1, "polpCronJob.errors.customExprInvalid", null, null, ctx_r21.defaultRes), " ");
} }
function ScheduleTimePickerComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵelementStart(1, "label", 18);
    ɵɵtext(2);
    ɵɵpipe(3, "hyperTrans");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 6);
    ɵɵelement(5, "input", 19);
    ɵɵtemplate(6, ScheduleTimePickerComponent_div_3_span_6_Template, 3, 6, "span", 8);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind4(3, 3, "polpCronJob.customExpr", null, null, ctx_r2.defaultRes), " ");
    ɵɵadvance(3);
    ɵɵproperty("autofocus", true);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.form.hasError("customExpr") && (ctx_r2.form.get("customExpr").dirty || ctx_r2.form.get("customExpr").touched));
} }
var _c0 = function () { return { adaptivePosition: true }; };
function ScheduleTimePickerComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵelementStart(1, "label", 20);
    ɵɵtext(2);
    ɵɵpipe(3, "hyperTrans");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 6);
    ɵɵelement(5, "input", 21);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind4(3, 2, "polpCronJob.startDate", null, null, ctx_r3.defaultRes), " ");
    ɵɵadvance(3);
    ɵɵproperty("bsConfig", ɵɵpureFunction0(7, _c0));
} }
function ScheduleTimePickerComponent_div_5_option_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "option", 17);
    ɵɵtext(1);
    ɵɵpipe(2, "hyperTrans");
    ɵɵelementEnd();
} if (rf & 2) {
    var opt_r23 = ctx.$implicit;
    var ctx_r22 = ɵɵnextContext(2);
    ɵɵpropertyInterpolate("value", opt_r23.value);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind4(2, 2, opt_r23.text, null, null, ctx_r22.defaultRes), " ");
} }
function ScheduleTimePickerComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵelementStart(1, "label", 22);
    ɵɵtext(2);
    ɵɵpipe(3, "hyperTrans");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 6);
    ɵɵelementStart(5, "select", 23);
    ɵɵelementStart(6, "option", 15);
    ɵɵtext(7, "...");
    ɵɵelementEnd();
    ɵɵtemplate(8, ScheduleTimePickerComponent_div_5_option_8_Template, 3, 7, "option", 16);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind4(3, 2, "polpCronJob.monthOfYear", null, null, ctx_r4.defaultRes), " ");
    ɵɵadvance(6);
    ɵɵproperty("ngForOf", ctx_r4.monthsOfYearOptions);
} }
function ScheduleTimePickerComponent_div_6_option_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "option", 17);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var opt_r25 = ctx.$implicit;
    ɵɵpropertyInterpolate("value", opt_r25.value);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", opt_r25.text, " ");
} }
function ScheduleTimePickerComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵelementStart(1, "label", 24);
    ɵɵtext(2);
    ɵɵpipe(3, "hyperTrans");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 6);
    ɵɵelementStart(5, "select", 25);
    ɵɵelementStart(6, "option", 15);
    ɵɵtext(7, "...");
    ɵɵelementEnd();
    ɵɵtemplate(8, ScheduleTimePickerComponent_div_6_option_8_Template, 2, 2, "option", 16);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r5 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind4(3, 2, "polpCronJob.dayOfMonth", null, null, ctx_r5.defaultRes), " ");
    ɵɵadvance(6);
    ɵɵproperty("ngForOf", ctx_r5.daysOfMonthOptions);
} }
function ScheduleTimePickerComponent_div_7_option_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "option", 17);
    ɵɵtext(1);
    ɵɵpipe(2, "hyperTrans");
    ɵɵelementEnd();
} if (rf & 2) {
    var opt_r27 = ctx.$implicit;
    var ctx_r26 = ɵɵnextContext(2);
    ɵɵpropertyInterpolate("value", opt_r27.value);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind4(2, 2, opt_r27.text, null, null, ctx_r26.defaultRes), " ");
} }
function ScheduleTimePickerComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵelementStart(1, "label", 26);
    ɵɵtext(2);
    ɵɵpipe(3, "hyperTrans");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 6);
    ɵɵelementStart(5, "select", 27);
    ɵɵelementStart(6, "option", 15);
    ɵɵtext(7, "...");
    ɵɵelementEnd();
    ɵɵtemplate(8, ScheduleTimePickerComponent_div_7_option_8_Template, 3, 7, "option", 16);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r6 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind4(3, 2, "polpCronJob.dayOfWeek", null, null, ctx_r6.defaultRes), " ");
    ɵɵadvance(6);
    ɵɵproperty("ngForOf", ctx_r6.daysOfWeekOptions);
} }
function ScheduleTimePickerComponent_div_8_span_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 12);
    ɵɵtext(1);
    ɵɵpipe(2, "hyperTrans");
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r28 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind4(2, 1, "polpCronJob.errors.timezoneInvalid", null, null, ctx_r28.defaultRes), " ");
} }
function ScheduleTimePickerComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵelementStart(1, "label", 28);
    ɵɵtext(2);
    ɵɵpipe(3, "hyperTrans");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 6);
    ɵɵelement(5, "input", 29);
    ɵɵtemplate(6, ScheduleTimePickerComponent_div_8_span_6_Template, 3, 6, "span", 8);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r7 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind4(3, 2, "polpCronJob.timezone", null, null, ctx_r7.defaultRes), " ");
    ɵɵadvance(4);
    ɵɵproperty("ngIf", ctx_r7.form.hasError("timezone") && (ctx_r7.form.get("timezone").dirty || ctx_r7.form.get("timezone").touched));
} }
function ScheduleTimePickerComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵelementStart(1, "label", 30);
    ɵɵtext(2);
    ɵɵpipe(3, "hyperTrans");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 6);
    ɵɵelement(5, "timepicker", 31);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r8 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind4(3, 1, "polpCronJob.time", null, null, ctx_r8.defaultRes), " ");
} }
function ScheduleTimePickerComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵelementStart(1, "label", 32);
    ɵɵtext(2);
    ɵɵpipe(3, "hyperTrans");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 6);
    ɵɵelementStart(5, "div", 33);
    ɵɵelement(6, "input", 34);
    ɵɵelementEnd();
    ɵɵelementStart(7, "div");
    ɵɵtext(8);
    ɵɵpipe(9, "hyperTrans");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r9 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind4(3, 2, "polpCronJob.excludeHolidays", null, null, ctx_r9.defaultRes), " ");
    ɵɵadvance(6);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind4(9, 7, "polpCronJob.holidayLabel", null, null, ctx_r9.defaultRes), " ");
} }
function ScheduleTimePickerComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵelementStart(1, "label", 35);
    ɵɵtext(2);
    ɵɵpipe(3, "hyperTrans");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 6);
    ɵɵelementStart(5, "div", 33);
    ɵɵelement(6, "input", 36);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r10 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind4(3, 1, "polpCronJob.excludeWeekends", null, null, ctx_r10.defaultRes), " ");
} }
function ScheduleTimePickerComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵelementStart(1, "label", 37);
    ɵɵtext(2);
    ɵɵpipe(3, "hyperTrans");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 6);
    ɵɵelementStart(5, "div", 33);
    ɵɵelement(6, "input", 38);
    ɵɵelementEnd();
    ɵɵelementStart(7, "div");
    ɵɵtext(8);
    ɵɵpipe(9, "hyperTrans");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r11 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind4(3, 2, "polpCronJob.excludeOthers", null, null, ctx_r11.defaultRes), " ");
    ɵɵadvance(6);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind4(9, 7, "polpCronJob.otherLabel", null, null, ctx_r11.defaultRes), " ");
} }
function ScheduleTimePickerComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵelementStart(1, "label", 39);
    ɵɵtext(2);
    ɵɵpipe(3, "hyperTrans");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 6);
    ɵɵelement(5, "input", 40);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r12 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind4(3, 2, "polpCronJob.endDate", null, null, ctx_r12.defaultRes), " ");
    ɵɵadvance(3);
    ɵɵproperty("bsConfig", ɵɵpureFunction0(7, _c0));
} }
function ScheduleTimePickerComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "alert", 41);
    ɵɵtext(2);
    ɵɵpipe(3, "hyperTrans");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var a_r29 = ctx.$implicit;
    var ctx_r13 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("type", a_r29.type)("dismissOnTimeout", a_r29.timeout);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind4(3, 3, a_r29.message, null, null, ctx_r13.defaultRes), " ");
} }
function ScheduleTimePickerComponent_div_15_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r33 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 45);
    ɵɵlistener("click", function ScheduleTimePickerComponent_div_15_button_1_Template_button_click_0_listener() { ɵɵrestoreView(_r33); var ctx_r32 = ɵɵnextContext(2); return ctx_r32.cancel(); });
    ɵɵtext(1);
    ɵɵpipe(2, "hyperTrans");
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r30 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind4(2, 1, "polpCronJob.cancelBtn", null, null, ctx_r30.defaultRes), " ");
} }
function ScheduleTimePickerComponent_div_15_button_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "button", 46);
    ɵɵtext(1);
    ɵɵpipe(2, "hyperTrans");
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r31 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind4(2, 1, "polpCronJob.submitBtn", null, null, ctx_r31.defaultRes), " ");
} }
function ScheduleTimePickerComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 42);
    ɵɵtemplate(1, ScheduleTimePickerComponent_div_15_button_1_Template, 3, 6, "button", 43);
    ɵɵtemplate(2, ScheduleTimePickerComponent_div_15_button_2_Template, 3, 6, "button", 44);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r14 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r14.hideCancelBtn);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r14.hideSubmitBtn);
} }
var defaultSettings = {
    hideSubmitBtn: false,
    hideCancelBtn: true
};
var formValidator = function (control) {
    var scheduleTypeVal = safeParseInt(control.get('scheduleType').value);
    if (scheduleTypeVal == 0) {
        return { scheduleType: true };
    }
    var timezoneVal = safeParseInt(control.get('timezone').value);
    if (timezoneVal > 13 || timezoneVal < -11) {
        return { timezone: true };
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
        timezone: data.timezone,
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
            timezone: false,
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
        if (!data.initValue.firstChange) {
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
            this.visibiltyCfg.timezone = true;
        }
        else {
            this.visibiltyCfg.recurrence = true;
            this.visibiltyCfg.excludeHolidays = true;
            this.visibiltyCfg.excludeWeekends = true;
            this.visibiltyCfg.excludeOthers = true;
            this.visibiltyCfg.endDate = true;
            this.visibiltyCfg.time = true;
            this.visibiltyCfg.timezone = true;
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
        var timezone = safeParseInt(a.timezone);
        return {
            isRecurrent: false,
            timezone: timezone,
            startDate: a.startDate,
            time: a.time
        };
    };
    ScheduleTimePickerComponent.prototype.getRecurrentValue = function (a) {
        var recurrence = safeParseInt(a.recurrence);
        var timezone = safeParseInt(a.timezone);
        return {
            isRecurrent: true,
            recurrence: recurrence,
            holidays: a.excludeHolidays ? a.holidays : '',
            excludeWeekends: a.excludeWeekends,
            otherDays: a.excludeOthers ? a.otherDays : '',
            timezone: timezone,
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
    ScheduleTimePickerComponent.ɵfac = function ScheduleTimePickerComponent_Factory(t) { return new (t || ScheduleTimePickerComponent)(ɵɵdirectiveInject(FormBuilder)); };
    ScheduleTimePickerComponent.ɵcmp = ɵɵdefineComponent({ type: ScheduleTimePickerComponent, selectors: [["polp-bs-schedule-time-picker"]], inputs: { initSettings: "initSettings", initValue: "initValue" }, features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature], decls: 16, vars: 16, consts: [[3, "formGroup", "ngSubmit"], ["class", "form-group row", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-end mb-4", 4, "ngIf"], [1, "form-group", "row"], [1, "col-12", "col-md-4", "col-form-label"], [1, "col-12", "col-md-8"], ["class", "form-check form-check-inline", 4, "ngFor", "ngForOf"], ["class", "text-warning d-block my-1 small", 4, "ngIf"], [1, "form-check", "form-check-inline"], ["formControlName", "scheduleType", "type", "radio", 1, "form-check-input", 3, "id", "value"], [1, "form-check-label", 3, "for"], [1, "text-warning", "d-block", "my-1", "small"], ["for", "schedule-recurrence", 1, "col-12", "col-md-4", "col-form-label"], ["id", "schedule-recurrence", "formControlName", "recurrence", 1, "form-control"], ["selected", "", "value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["for", "schedule-custom-expr", 1, "col-12", "col-md-4", "col-form-label"], ["type", "text", "id", "schedule-custom-expr", "formControlName", "customExpr", 1, "form-control", 3, "autofocus"], ["for", "schedule-start-date", 1, "col-12", "col-md-4", "col-form-label"], ["type", "text", "id", "schedule-start-date", "bsDatepicker", "", "formControlName", "startDate", 1, "form-control", 3, "bsConfig"], ["for", "schedule-month-of-year", 1, "col-12", "col-md-4", "col-form-label"], ["id", "schedule-month-of-year", "formControlName", "monthOfYear", 1, "form-control"], ["for", "schedule-day-of-month", 1, "col-12", "col-md-4", "col-form-label"], ["id", "schedule-day-of-month", "formControlName", "dayOfMonth", 1, "form-control"], ["for", "schedule-day-of-week", 1, "col-12", "col-md-4", "col-form-label"], ["id", "schedule-day-of-week", "formControlName", "dayOfWeek", 1, "form-control"], ["for", "schedule-timezone", 1, "col-12", "col-md-4", "col-form-label"], ["type", "number", "id", "schedule-timezone", "formControlName", "timezone", 1, "form-control"], ["for", "schedule-time", 1, "col-12", "col-md-4", "col-form-label"], ["id", "schedule-time", "formControlName", "time"], ["for", "schedule-exclude-holidays", 1, "col-12", "col-md-4", "col-form-label"], [1, "form-check"], ["type", "checkbox", "id", "schedule-exclude-holidays", "formControlName", "excludeHolidays", 1, "form-check-input", "position-static"], ["for", "schedule-exclude-weekends", 1, "col-12", "col-md-4", "col-form-label"], ["type", "checkbox", "id", "schedule-exclude-weekends", "formControlName", "excludeWeekends", 1, "form-check-input", "position-static"], ["for", "schedule-exclude-others", 1, "col-12", "col-md-4", "col-form-label"], ["id", "schedule-exclude-others", "type", "checkbox", "formControlName", "excludeOthers", 1, "form-check-input", "position-static"], ["for", "schedule-end-date", 1, "col-12", "col-md-4", "col-form-label"], ["type", "text", "id", "schedule-end-date", "bsDatepicker", "", "formControlName", "endDate", 1, "form-control", 3, "bsConfig"], [3, "type", "dismissOnTimeout"], [1, "d-flex", "justify-content-end", "mb-4"], ["type", "button", "class", "btn btn-warning", 3, "click", 4, "ngIf"], ["type", "submit", "class", "btn btn-success", 4, "ngIf"], ["type", "button", 1, "btn", "btn-warning", 3, "click"], ["type", "submit", 1, "btn", "btn-success"]], template: function ScheduleTimePickerComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "form", 0);
            ɵɵlistener("ngSubmit", function ScheduleTimePickerComponent_Template_form_ngSubmit_0_listener() { return ctx.confirm(); });
            ɵɵtemplate(1, ScheduleTimePickerComponent_div_1_Template, 7, 8, "div", 1);
            ɵɵtemplate(2, ScheduleTimePickerComponent_div_2_Template, 9, 7, "div", 1);
            ɵɵtemplate(3, ScheduleTimePickerComponent_div_3_Template, 7, 8, "div", 1);
            ɵɵtemplate(4, ScheduleTimePickerComponent_div_4_Template, 6, 8, "div", 1);
            ɵɵtemplate(5, ScheduleTimePickerComponent_div_5_Template, 9, 7, "div", 1);
            ɵɵtemplate(6, ScheduleTimePickerComponent_div_6_Template, 9, 7, "div", 1);
            ɵɵtemplate(7, ScheduleTimePickerComponent_div_7_Template, 9, 7, "div", 1);
            ɵɵtemplate(8, ScheduleTimePickerComponent_div_8_Template, 7, 7, "div", 1);
            ɵɵtemplate(9, ScheduleTimePickerComponent_div_9_Template, 6, 6, "div", 1);
            ɵɵtemplate(10, ScheduleTimePickerComponent_div_10_Template, 10, 12, "div", 1);
            ɵɵtemplate(11, ScheduleTimePickerComponent_div_11_Template, 7, 6, "div", 1);
            ɵɵtemplate(12, ScheduleTimePickerComponent_div_12_Template, 10, 12, "div", 1);
            ɵɵtemplate(13, ScheduleTimePickerComponent_div_13_Template, 6, 8, "div", 1);
            ɵɵtemplate(14, ScheduleTimePickerComponent_ng_container_14_Template, 4, 8, "ng-container", 2);
            ɵɵtemplate(15, ScheduleTimePickerComponent_div_15_Template, 3, 2, "div", 3);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵproperty("formGroup", ctx.form);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.visibiltyCfg.scheduleType);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.visibiltyCfg.recurrence);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.visibiltyCfg.recurrence && ctx.visibiltyCfg.customExpr);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.visibiltyCfg.startDate);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.visibiltyCfg.monthOfYear);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.visibiltyCfg.dayOfMonth);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.visibiltyCfg.dayOfWeek);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.visibiltyCfg.timezone);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.visibiltyCfg.time);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.visibiltyCfg.excludeHolidays);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.visibiltyCfg.excludeWeekends);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.visibiltyCfg.excludeOthers);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.visibiltyCfg.endDate);
            ɵɵadvance(1);
            ɵɵproperty("ngForOf", ctx.alerts);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", !ctx.hideSubmitBtn || !ctx.hideCancelBtn);
        } }, directives: [ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, NgIf, NgForOf, DefaultValueAccessor, RadioControlValueAccessor, NgControlStatus, FormControlName, SelectControlValueAccessor, NgSelectOption, ɵangular_packages_forms_forms_x, AutofocusDirective, BsDatepickerInputDirective, BsDatepickerDirective, NumberValueAccessor, TimepickerComponent, CheckboxControlValueAccessor, AlertComponent], pipes: [HyperTranslatePipe], styles: [""] });
    return ScheduleTimePickerComponent;
}(DefaultFormBaseComponent));
/*@__PURE__*/ (function () { ɵsetClassMetadata(ScheduleTimePickerComponent, [{
        type: Component,
        args: [{
                selector: 'polp-bs-schedule-time-picker',
                templateUrl: './schedule-time-picker.component.html',
                styleUrls: ['./schedule-time-picker.component.css']
            }]
    }], function () { return [{ type: FormBuilder }]; }, { initSettings: [{
            type: Input
        }], initValue: [{
            type: Input
        }] }); })();

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
            target.recurrence == IntervalEnum.Day;
        }
        else {
            target.recurrence = IntervalEnum.Custom;
        }
        // A utc time 
        var today = new Date();
        today.setHours(a.fields.hour[0] || 0);
        today.setMinutes(a.fields.minute[0] || 0);
        // Timezone
        today.setHours((today.getHours() + target.timezone + 24) % 24);
        // Time
        target.time = today;
    };
    CronJobService.prototype.composeCronExpr = function (source) {
        // IsRecurrent true
        // Convert it into Utc time
        var utc = new Date(source.time);
        utc.setHours((utc.getHours() - source.timezone + 24) % 24);
        if (source.recurrence == IntervalEnum.Year) {
            return utc.getMinutes() + " " + utc.getHours() + " " + source.dayOfMonth + " " + source.monthOfYear + " *";
        }
        else if (source.recurrence == IntervalEnum.Month) {
            return utc.getMinutes() + " " + utc.getHours() + " " + source.dayOfMonth + " * *";
        }
        else if (source.recurrence == IntervalEnum.Week) {
            return utc.getMinutes() + " " + utc.getHours() + " * * " + source.dayOfWeek;
        }
        else if (source.recurrence == IntervalEnum.Day) {
            return utc.getMinutes() + " " + utc.getHours() + " * * *";
        }
        else if (source.recurrence == IntervalEnum.Custom) {
            return source.customExpr;
        }
        return '';
    };
    CronJobService.ɵfac = function CronJobService_Factory(t) { return new (t || CronJobService)(); };
    CronJobService.ɵprov = ɵɵdefineInjectable({ token: CronJobService, factory: CronJobService.ɵfac, providedIn: 'root' });
    return CronJobService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(CronJobService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

var PolpBsCronJobModule = /** @class */ (function () {
    function PolpBsCronJobModule() {
    }
    PolpBsCronJobModule.ɵmod = ɵɵdefineNgModule({ type: PolpBsCronJobModule });
    PolpBsCronJobModule.ɵinj = ɵɵdefineInjector({ factory: function PolpBsCronJobModule_Factory(t) { return new (t || PolpBsCronJobModule)(); }, imports: [[
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
                NgxI18nModule
            ]] });
    return PolpBsCronJobModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PolpBsCronJobModule, { declarations: [ScheduleTimePickerComponent], imports: [CommonModule,
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
        NgxI18nModule], exports: [ScheduleTimePickerComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PolpBsCronJobModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    ScheduleTimePickerComponent
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
                    NgxI18nModule
                ],
                exports: [
                    ScheduleTimePickerComponent
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of cron-job
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CronJobService, DayOfWeekEnum, IntervalEnum, MonthEnum, PolpBsCronJobModule, ScheduleTimePickerComponent, ScheduleTypeEnum, defaultDict, getDaysOfMonth, getDaysOfWeek, getDefaultScheduleTime, getMonthsOfYear, getTimezoneOffset };
//# sourceMappingURL=polpware-cron-job.js.map
