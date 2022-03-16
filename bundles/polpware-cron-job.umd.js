(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@polpware/fe-utilities'), require('@polpware/ngx-alert'), require('cron-parser'), require('@angular/common'), require('@40three/ngx-autofocus-directive'), require('ngx-bootstrap/datepicker'), require('ngx-bootstrap/timepicker'), require('ngx-bootstrap/alert'), require('@polpware/ngx-i18n'), require('ngx-bootstrap/accordion'), require('ngx-bootstrap/buttons'), require('ngx-bootstrap/carousel'), require('ngx-bootstrap/collapse'), require('ngx-bootstrap/dropdown'), require('ngx-bootstrap/modal'), require('ngx-bootstrap/pagination'), require('ngx-bootstrap/popover'), require('ngx-bootstrap/progressbar'), require('ngx-bootstrap/tabs'), require('ngx-bootstrap/tooltip')) :
    typeof define === 'function' && define.amd ? define('@polpware/cron-job', ['exports', '@angular/core', '@angular/forms', '@polpware/fe-utilities', '@polpware/ngx-alert', 'cron-parser', '@angular/common', '@40three/ngx-autofocus-directive', 'ngx-bootstrap/datepicker', 'ngx-bootstrap/timepicker', 'ngx-bootstrap/alert', '@polpware/ngx-i18n', 'ngx-bootstrap/accordion', 'ngx-bootstrap/buttons', 'ngx-bootstrap/carousel', 'ngx-bootstrap/collapse', 'ngx-bootstrap/dropdown', 'ngx-bootstrap/modal', 'ngx-bootstrap/pagination', 'ngx-bootstrap/popover', 'ngx-bootstrap/progressbar', 'ngx-bootstrap/tabs', 'ngx-bootstrap/tooltip'], factory) :
    (global = global || self, factory((global.polpware = global.polpware || {}, global.polpware['cron-job'] = {}), global.ng.core, global.ng.forms, global.feUtilities, global.ngxAlert, global.cronParser, global.ng.common, global.ngxAutofocusDirective, global.datepicker, global.timepicker, global.alert, global.ngxI18n, global.accordion, global.buttons, global.carousel, global.collapse, global.dropdown, global.modal, global.pagination, global.popover, global.progressbar, global.tabs, global.tooltip));
}(this, (function (exports, core, forms, feUtilities, ngxAlert, cronParser, common, ngxAutofocusDirective, datepicker, timepicker, alert, ngxI18n, accordion, buttons, carousel, collapse, dropdown, modal, pagination, popover, progressbar, tabs, tooltip) { 'use strict';

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

    (function (IntervalEnum) {
        IntervalEnum[IntervalEnum["Day"] = 10] = "Day";
        IntervalEnum[IntervalEnum["Week"] = 50] = "Week";
        IntervalEnum[IntervalEnum["Month"] = 100] = "Month";
        IntervalEnum[IntervalEnum["Year"] = 500] = "Year";
        IntervalEnum[IntervalEnum["Custom"] = 10000] = "Custom";
    })(exports.IntervalEnum || (exports.IntervalEnum = {}));

    (function (ScheduleTypeEnum) {
        ScheduleTypeEnum[ScheduleTypeEnum["OneTime"] = 1] = "OneTime";
        ScheduleTypeEnum[ScheduleTypeEnum["Recurrent"] = 2] = "Recurrent";
    })(exports.ScheduleTypeEnum || (exports.ScheduleTypeEnum = {}));

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
    })(exports.MonthEnum || (exports.MonthEnum = {}));
    function getMonthsOfYear() {
        var ret = [];
        for (var enumMember in exports.MonthEnum) {
            var isValueProperty = parseInt(enumMember, 10) >= 0;
            if (isValueProperty) {
                ret.push({
                    value: enumMember,
                    text: 'polpCronJob.' + exports.MonthEnum[enumMember]
                });
            }
        }
        return ret;
    }

    (function (DayOfWeekEnum) {
        DayOfWeekEnum[DayOfWeekEnum["Sunday"] = 0] = "Sunday";
        DayOfWeekEnum[DayOfWeekEnum["Monday"] = 1] = "Monday";
        DayOfWeekEnum[DayOfWeekEnum["Tuesday"] = 2] = "Tuesday";
        DayOfWeekEnum[DayOfWeekEnum["Wednesday"] = 3] = "Wednesday";
        DayOfWeekEnum[DayOfWeekEnum["Thursday"] = 4] = "Thursday";
        DayOfWeekEnum[DayOfWeekEnum["Friday"] = 5] = "Friday";
        DayOfWeekEnum[DayOfWeekEnum["Saturday"] = 6] = "Saturday";
    })(exports.DayOfWeekEnum || (exports.DayOfWeekEnum = {}));
    function getDaysOfWeek() {
        var ret = [];
        for (var enumMember in exports.DayOfWeekEnum) {
            var isValueProperty = parseInt(enumMember, 10) >= 0;
            if (isValueProperty) {
                ret.push({
                    value: enumMember,
                    text: 'polpCronJob.' + exports.DayOfWeekEnum[enumMember]
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
            monthOfYear: exports.MonthEnum.January,
            dayOfMonth: 1,
            dayOfWeek: exports.DayOfWeekEnum.Monday
        };
    }

    function ScheduleTimePickerComponent_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 9);
        core.ɵɵelement(1, "input", 10);
        core.ɵɵelementStart(2, "label", 11);
        core.ɵɵtext(3);
        core.ɵɵpipe(4, "hyperTrans");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var opt_r17 = ctx.$implicit;
        var i_r18 = ctx.index;
        var ctx_r15 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵpropertyInterpolate("id", "schedule-type-opt-" + i_r18);
        core.ɵɵpropertyInterpolate("value", opt_r17.value);
        core.ɵɵadvance(1);
        core.ɵɵpropertyInterpolate("for", "schedule-type-opt-" + i_r18);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind4(4, 4, opt_r17.text, null, null, ctx_r15.defaultRes), " ");
    } }
    function ScheduleTimePickerComponent_div_1_span_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", 12);
        core.ɵɵtext(1);
        core.ɵɵpipe(2, "hyperTrans");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r16 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind4(2, 1, "polpCronJob.errors.scheduleTypeRequired", null, null, ctx_r16.defaultRes), " ");
    } }
    function ScheduleTimePickerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 4);
        core.ɵɵelementStart(1, "label", 5);
        core.ɵɵtext(2);
        core.ɵɵpipe(3, "hyperTrans");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "div", 6);
        core.ɵɵtemplate(5, ScheduleTimePickerComponent_div_1_div_5_Template, 5, 9, "div", 7);
        core.ɵɵtemplate(6, ScheduleTimePickerComponent_div_1_span_6_Template, 3, 6, "span", 8);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r0 = core.ɵɵnextContext();
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind4(3, 3, "polpCronJob.scheduleType", null, null, ctx_r0.defaultRes), " ");
        core.ɵɵadvance(3);
        core.ɵɵproperty("ngForOf", ctx_r0.scheduleTypeOptions);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r0.form.hasError("scheduleType") && (ctx_r0.form.get("scheduleType").dirty || ctx_r0.form.get("scheduleType").touched));
    } }
    function ScheduleTimePickerComponent_div_2_option_8_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "option", 17);
        core.ɵɵtext(1);
        core.ɵɵpipe(2, "hyperTrans");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var opt_r20 = ctx.$implicit;
        var ctx_r19 = core.ɵɵnextContext(2);
        core.ɵɵpropertyInterpolate("value", opt_r20.value);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind4(2, 2, opt_r20.text, null, null, ctx_r19.defaultRes), " ");
    } }
    function ScheduleTimePickerComponent_div_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 4);
        core.ɵɵelementStart(1, "label", 13);
        core.ɵɵtext(2);
        core.ɵɵpipe(3, "hyperTrans");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "div", 6);
        core.ɵɵelementStart(5, "select", 14);
        core.ɵɵelementStart(6, "option", 15);
        core.ɵɵtext(7, "...");
        core.ɵɵelementEnd();
        core.ɵɵtemplate(8, ScheduleTimePickerComponent_div_2_option_8_Template, 3, 7, "option", 16);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1 = core.ɵɵnextContext();
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind4(3, 2, "polpCronJob.recurrence", null, null, ctx_r1.defaultRes), " ");
        core.ɵɵadvance(6);
        core.ɵɵproperty("ngForOf", ctx_r1.recurrenceOptions);
    } }
    function ScheduleTimePickerComponent_div_3_span_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", 12);
        core.ɵɵtext(1);
        core.ɵɵpipe(2, "hyperTrans");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r21 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind4(2, 1, "polpCronJob.errors.customExprInvalid", null, null, ctx_r21.defaultRes), " ");
    } }
    function ScheduleTimePickerComponent_div_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 4);
        core.ɵɵelementStart(1, "label", 18);
        core.ɵɵtext(2);
        core.ɵɵpipe(3, "hyperTrans");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "div", 6);
        core.ɵɵelement(5, "input", 19);
        core.ɵɵtemplate(6, ScheduleTimePickerComponent_div_3_span_6_Template, 3, 6, "span", 8);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r2 = core.ɵɵnextContext();
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind4(3, 3, "polpCronJob.customExpr", null, null, ctx_r2.defaultRes), " ");
        core.ɵɵadvance(3);
        core.ɵɵproperty("autofocus", true);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r2.form.hasError("customExpr") && (ctx_r2.form.get("customExpr").dirty || ctx_r2.form.get("customExpr").touched));
    } }
    var _c0 = function () { return { adaptivePosition: true }; };
    function ScheduleTimePickerComponent_div_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 4);
        core.ɵɵelementStart(1, "label", 20);
        core.ɵɵtext(2);
        core.ɵɵpipe(3, "hyperTrans");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "div", 6);
        core.ɵɵelement(5, "input", 21);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r3 = core.ɵɵnextContext();
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind4(3, 2, "polpCronJob.startDate", null, null, ctx_r3.defaultRes), " ");
        core.ɵɵadvance(3);
        core.ɵɵproperty("bsConfig", core.ɵɵpureFunction0(7, _c0));
    } }
    function ScheduleTimePickerComponent_div_5_option_8_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "option", 17);
        core.ɵɵtext(1);
        core.ɵɵpipe(2, "hyperTrans");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var opt_r23 = ctx.$implicit;
        var ctx_r22 = core.ɵɵnextContext(2);
        core.ɵɵpropertyInterpolate("value", opt_r23.value);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind4(2, 2, opt_r23.text, null, null, ctx_r22.defaultRes), " ");
    } }
    function ScheduleTimePickerComponent_div_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 4);
        core.ɵɵelementStart(1, "label", 22);
        core.ɵɵtext(2);
        core.ɵɵpipe(3, "hyperTrans");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "div", 6);
        core.ɵɵelementStart(5, "select", 23);
        core.ɵɵelementStart(6, "option", 15);
        core.ɵɵtext(7, "...");
        core.ɵɵelementEnd();
        core.ɵɵtemplate(8, ScheduleTimePickerComponent_div_5_option_8_Template, 3, 7, "option", 16);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r4 = core.ɵɵnextContext();
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind4(3, 2, "polpCronJob.monthOfYear", null, null, ctx_r4.defaultRes), " ");
        core.ɵɵadvance(6);
        core.ɵɵproperty("ngForOf", ctx_r4.monthsOfYearOptions);
    } }
    function ScheduleTimePickerComponent_div_6_option_8_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "option", 17);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var opt_r25 = ctx.$implicit;
        core.ɵɵpropertyInterpolate("value", opt_r25.value);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", opt_r25.text, " ");
    } }
    function ScheduleTimePickerComponent_div_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 4);
        core.ɵɵelementStart(1, "label", 24);
        core.ɵɵtext(2);
        core.ɵɵpipe(3, "hyperTrans");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "div", 6);
        core.ɵɵelementStart(5, "select", 25);
        core.ɵɵelementStart(6, "option", 15);
        core.ɵɵtext(7, "...");
        core.ɵɵelementEnd();
        core.ɵɵtemplate(8, ScheduleTimePickerComponent_div_6_option_8_Template, 2, 2, "option", 16);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r5 = core.ɵɵnextContext();
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind4(3, 2, "polpCronJob.dayOfMonth", null, null, ctx_r5.defaultRes), " ");
        core.ɵɵadvance(6);
        core.ɵɵproperty("ngForOf", ctx_r5.daysOfMonthOptions);
    } }
    function ScheduleTimePickerComponent_div_7_option_8_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "option", 17);
        core.ɵɵtext(1);
        core.ɵɵpipe(2, "hyperTrans");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var opt_r27 = ctx.$implicit;
        var ctx_r26 = core.ɵɵnextContext(2);
        core.ɵɵpropertyInterpolate("value", opt_r27.value);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind4(2, 2, opt_r27.text, null, null, ctx_r26.defaultRes), " ");
    } }
    function ScheduleTimePickerComponent_div_7_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 4);
        core.ɵɵelementStart(1, "label", 26);
        core.ɵɵtext(2);
        core.ɵɵpipe(3, "hyperTrans");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "div", 6);
        core.ɵɵelementStart(5, "select", 27);
        core.ɵɵelementStart(6, "option", 15);
        core.ɵɵtext(7, "...");
        core.ɵɵelementEnd();
        core.ɵɵtemplate(8, ScheduleTimePickerComponent_div_7_option_8_Template, 3, 7, "option", 16);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r6 = core.ɵɵnextContext();
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind4(3, 2, "polpCronJob.dayOfWeek", null, null, ctx_r6.defaultRes), " ");
        core.ɵɵadvance(6);
        core.ɵɵproperty("ngForOf", ctx_r6.daysOfWeekOptions);
    } }
    function ScheduleTimePickerComponent_div_8_span_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", 12);
        core.ɵɵtext(1);
        core.ɵɵpipe(2, "hyperTrans");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r28 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind4(2, 1, "polpCronJob.errors.timezoneInvalid", null, null, ctx_r28.defaultRes), " ");
    } }
    function ScheduleTimePickerComponent_div_8_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 4);
        core.ɵɵelementStart(1, "label", 28);
        core.ɵɵtext(2);
        core.ɵɵpipe(3, "hyperTrans");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "div", 6);
        core.ɵɵelement(5, "input", 29);
        core.ɵɵtemplate(6, ScheduleTimePickerComponent_div_8_span_6_Template, 3, 6, "span", 8);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r7 = core.ɵɵnextContext();
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind4(3, 2, "polpCronJob.timezone", null, null, ctx_r7.defaultRes), " ");
        core.ɵɵadvance(4);
        core.ɵɵproperty("ngIf", ctx_r7.form.hasError("timezone") && (ctx_r7.form.get("timezone").dirty || ctx_r7.form.get("timezone").touched));
    } }
    function ScheduleTimePickerComponent_div_9_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 4);
        core.ɵɵelementStart(1, "label", 30);
        core.ɵɵtext(2);
        core.ɵɵpipe(3, "hyperTrans");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "div", 6);
        core.ɵɵelement(5, "timepicker", 31);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r8 = core.ɵɵnextContext();
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind4(3, 1, "polpCronJob.time", null, null, ctx_r8.defaultRes), " ");
    } }
    function ScheduleTimePickerComponent_div_10_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 4);
        core.ɵɵelementStart(1, "label", 32);
        core.ɵɵtext(2);
        core.ɵɵpipe(3, "hyperTrans");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "div", 6);
        core.ɵɵelementStart(5, "div", 33);
        core.ɵɵelement(6, "input", 34);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(7, "div");
        core.ɵɵtext(8);
        core.ɵɵpipe(9, "hyperTrans");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r9 = core.ɵɵnextContext();
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind4(3, 2, "polpCronJob.excludeHolidays", null, null, ctx_r9.defaultRes), " ");
        core.ɵɵadvance(6);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind4(9, 7, "polpCronJob.holidayLabel", null, null, ctx_r9.defaultRes), " ");
    } }
    function ScheduleTimePickerComponent_div_11_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 4);
        core.ɵɵelementStart(1, "label", 35);
        core.ɵɵtext(2);
        core.ɵɵpipe(3, "hyperTrans");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "div", 6);
        core.ɵɵelementStart(5, "div", 33);
        core.ɵɵelement(6, "input", 36);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r10 = core.ɵɵnextContext();
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind4(3, 1, "polpCronJob.excludeWeekends", null, null, ctx_r10.defaultRes), " ");
    } }
    function ScheduleTimePickerComponent_div_12_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 4);
        core.ɵɵelementStart(1, "label", 37);
        core.ɵɵtext(2);
        core.ɵɵpipe(3, "hyperTrans");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "div", 6);
        core.ɵɵelementStart(5, "div", 33);
        core.ɵɵelement(6, "input", 38);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(7, "div");
        core.ɵɵtext(8);
        core.ɵɵpipe(9, "hyperTrans");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r11 = core.ɵɵnextContext();
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind4(3, 2, "polpCronJob.excludeOthers", null, null, ctx_r11.defaultRes), " ");
        core.ɵɵadvance(6);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind4(9, 7, "polpCronJob.otherLabel", null, null, ctx_r11.defaultRes), " ");
    } }
    function ScheduleTimePickerComponent_div_13_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 4);
        core.ɵɵelementStart(1, "label", 39);
        core.ɵɵtext(2);
        core.ɵɵpipe(3, "hyperTrans");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "div", 6);
        core.ɵɵelement(5, "input", 40);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r12 = core.ɵɵnextContext();
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind4(3, 2, "polpCronJob.endDate", null, null, ctx_r12.defaultRes), " ");
        core.ɵɵadvance(3);
        core.ɵɵproperty("bsConfig", core.ɵɵpureFunction0(7, _c0));
    } }
    function ScheduleTimePickerComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "alert", 41);
        core.ɵɵtext(2);
        core.ɵɵpipe(3, "hyperTrans");
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var a_r29 = ctx.$implicit;
        var ctx_r13 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("type", a_r29.type)("dismissOnTimeout", a_r29.timeout);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind4(3, 3, a_r29.message, null, null, ctx_r13.defaultRes), " ");
    } }
    function ScheduleTimePickerComponent_div_15_button_1_Template(rf, ctx) { if (rf & 1) {
        var _r33 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "button", 45);
        core.ɵɵlistener("click", function ScheduleTimePickerComponent_div_15_button_1_Template_button_click_0_listener() { core.ɵɵrestoreView(_r33); var ctx_r32 = core.ɵɵnextContext(2); return ctx_r32.cancel(); });
        core.ɵɵtext(1);
        core.ɵɵpipe(2, "hyperTrans");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r30 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind4(2, 1, "polpCronJob.cancelBtn", null, null, ctx_r30.defaultRes), " ");
    } }
    function ScheduleTimePickerComponent_div_15_button_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "button", 46);
        core.ɵɵtext(1);
        core.ɵɵpipe(2, "hyperTrans");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r31 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind4(2, 1, "polpCronJob.submitBtn", null, null, ctx_r31.defaultRes), " ");
    } }
    function ScheduleTimePickerComponent_div_15_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 42);
        core.ɵɵtemplate(1, ScheduleTimePickerComponent_div_15_button_1_Template, 3, 6, "button", 43);
        core.ɵɵtemplate(2, ScheduleTimePickerComponent_div_15_button_2_Template, 3, 6, "button", 44);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r14 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !ctx_r14.settings.hideCancel);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !ctx_r14.settings.hideConfirm);
    } }
    var defaultSettings = {
        hideConfirm: false,
        hideCancel: true
    };
    var formValidator = function (control) {
        var scheduleTypeVal = feUtilities.safeParseInt(control.get('scheduleType').value);
        if (scheduleTypeVal == 0) {
            return { scheduleType: true };
        }
        var timezoneVal = feUtilities.safeParseInt(control.get('timezone').value);
        if (timezoneVal > 13 || timezoneVal < -11) {
            return { timezone: true };
        }
        if (scheduleTypeVal == 2) { // one time
            var recurrenceVal = feUtilities.safeParseInt(control.get('recurrence').value);
            if (recurrenceVal == 0) {
                return { recurrence: true };
            }
            else if (recurrenceVal == exports.IntervalEnum.Custom) {
                var customExprVal = control.get('customExpr').value;
                if (!customExprVal) {
                    return { customExpr: true };
                }
                else {
                    // validate
                    var r = cronParser.parseString(customExprVal);
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
            scheduleType: (data.isRecurrent ? exports.ScheduleTypeEnum.Recurrent : exports.ScheduleTypeEnum.OneTime).toString(),
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
    var ScheduleTimePickerComponent = /** @class */ (function () {
        function ScheduleTimePickerComponent(_builder) {
            this._builder = _builder;
            this.initSettings = {};
            this.initValue = null;
            this.onConfirm = new core.EventEmitter();
            this.onCancel = new core.EventEmitter();
            this.settings = {};
            this.defaultRes = defaultDict;
            this.scheduleTypeOptions = [{
                    value: exports.ScheduleTypeEnum.OneTime,
                    text: 'polpCronJob.oneTimeSchedule'
                }, {
                    value: exports.ScheduleTypeEnum.Recurrent,
                    text: 'polpCronJob.recurrentSchedule'
                }];
            this.recurrenceOptions = [{
                    value: exports.IntervalEnum.Day,
                    text: 'polpCronJob.everyDay'
                }, {
                    value: exports.IntervalEnum.Week,
                    text: 'polpCronJob.everyWeek'
                }, {
                    value: exports.IntervalEnum.Month,
                    text: 'polpCronJob.everyMonth'
                }, {
                    value: exports.IntervalEnum.Year,
                    text: 'polpCronJob.everyYear'
                }, {
                    value: exports.IntervalEnum.Custom,
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
                timezone: false,
                startDate: false,
                endDate: false,
                time: false,
                monthOfYear: false,
                dayOfMonth: false,
                dayOfWeek: false
            };
            this.alertProvider = new ngxAlert.AlertDefaultImpl();
        }
        Object.defineProperty(ScheduleTimePickerComponent.prototype, "oneTimeValue", {
            get: function () {
                var a = this.form.value;
                var timezone = feUtilities.safeParseInt(a.timezone);
                return {
                    isRecurrent: false,
                    timezone: timezone,
                    startDate: a.startDate,
                    time: a.time
                };
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScheduleTimePickerComponent.prototype, "recurrentValue", {
            get: function () {
                var a = this.form.value;
                var recurrence = feUtilities.safeParseInt(a.recurrence);
                var timezone = feUtilities.safeParseInt(a.timezone);
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
            },
            enumerable: true,
            configurable: true
        });
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
            var fields = mapToFormFields(this.initValue);
            this.form = this._builder.group(fields, { validators: [formValidator] });
            this.updateFieldVisibility(this.form.value);
            this._subr = this.form.valueChanges.subscribe(function (a) {
                console.log(a);
                _this.updateFieldVisibility(a);
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
            var scheduleTypeVal = feUtilities.safeParseInt(a.scheduleType);
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
                var recurrentVal = feUtilities.safeParseInt(a.recurrence);
                if (recurrentVal == exports.IntervalEnum.Year) {
                    this.visibiltyCfg.monthOfYear = true;
                    this.visibiltyCfg.dayOfMonth = true;
                }
                else if (recurrentVal == exports.IntervalEnum.Month) {
                    this.visibiltyCfg.dayOfMonth = true;
                }
                else if (recurrentVal == exports.IntervalEnum.Week) {
                    this.visibiltyCfg.dayOfWeek = true;
                }
                else if (recurrentVal == exports.IntervalEnum.Custom) {
                    this.visibiltyCfg.time = false;
                    this.visibiltyCfg.customExpr = true;
                }
            }
        };
        ScheduleTimePickerComponent.prototype.confirm = function () {
            if (!this.form.valid) {
                this.alertProvider.warning('polpCronJob.errors.general', 5000);
                return;
            }
            var a = this.form.value;
            var scheduleTypeVal = feUtilities.safeParseInt(a.scheduleType);
            var output = scheduleTypeVal == exports.ScheduleTypeEnum.OneTime ? this.oneTimeValue : this.recurrentValue;
            this.onConfirm.emit(output);
        };
        ScheduleTimePickerComponent.prototype.cancel = function () {
            this.onCancel.emit();
        };
        ScheduleTimePickerComponent.ɵfac = function ScheduleTimePickerComponent_Factory(t) { return new (t || ScheduleTimePickerComponent)(core.ɵɵdirectiveInject(forms.FormBuilder)); };
        ScheduleTimePickerComponent.ɵcmp = core.ɵɵdefineComponent({ type: ScheduleTimePickerComponent, selectors: [["polp-bs-schedule-time-picker"]], inputs: { initSettings: "initSettings", initValue: "initValue" }, outputs: { onConfirm: "onConfirm", onCancel: "onCancel" }, features: [core.ɵɵNgOnChangesFeature], decls: 16, vars: 16, consts: [[3, "formGroup", "ngSubmit"], ["class", "form-group row", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-end mb-4", 4, "ngIf"], [1, "form-group", "row"], [1, "col-12", "col-md-4", "col-form-label"], [1, "col-12", "col-md-8"], ["class", "form-check form-check-inline", 4, "ngFor", "ngForOf"], ["class", "text-warning d-block my-1 small", 4, "ngIf"], [1, "form-check", "form-check-inline"], ["formControlName", "scheduleType", "type", "radio", 1, "form-check-input", 3, "id", "value"], [1, "form-check-label", 3, "for"], [1, "text-warning", "d-block", "my-1", "small"], ["for", "schedule-recurrence", 1, "col-12", "col-md-4", "col-form-label"], ["id", "schedule-recurrence", "formControlName", "recurrence", 1, "form-control"], ["selected", "", "value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["for", "schedule-custom-expr", 1, "col-12", "col-md-4", "col-form-label"], ["type", "text", "id", "schedule-custom-expr", "formControlName", "customExpr", 1, "form-control", 3, "autofocus"], ["for", "schedule-start-date", 1, "col-12", "col-md-4", "col-form-label"], ["type", "text", "id", "schedule-start-date", "bsDatepicker", "", "formControlName", "startDate", 1, "form-control", 3, "bsConfig"], ["for", "schedule-month-of-year", 1, "col-12", "col-md-4", "col-form-label"], ["id", "schedule-month-of-year", "formControlName", "monthOfYear", 1, "form-control"], ["for", "schedule-day-of-month", 1, "col-12", "col-md-4", "col-form-label"], ["id", "schedule-day-of-month", "formControlName", "dayOfMonth", 1, "form-control"], ["for", "schedule-day-of-week", 1, "col-12", "col-md-4", "col-form-label"], ["id", "schedule-day-of-week", "formControlName", "dayOfWeek", 1, "form-control"], ["for", "schedule-timezone", 1, "col-12", "col-md-4", "col-form-label"], ["type", "number", "id", "schedule-timezone", "formControlName", "timezone", 1, "form-control"], ["for", "schedule-time", 1, "col-12", "col-md-4", "col-form-label"], ["id", "schedule-time", "formControlName", "time"], ["for", "schedule-exclude-holidays", 1, "col-12", "col-md-4", "col-form-label"], [1, "form-check"], ["type", "checkbox", "id", "schedule-exclude-holidays", "formControlName", "excludeHolidays", 1, "form-check-input", "position-static"], ["for", "schedule-exclude-weekends", 1, "col-12", "col-md-4", "col-form-label"], ["type", "checkbox", "id", "schedule-exclude-weekends", "formControlName", "excludeWeekends", 1, "form-check-input", "position-static"], ["for", "schedule-exclude-others", 1, "col-12", "col-md-4", "col-form-label"], ["id", "schedule-exclude-others", "type", "checkbox", "formControlName", "excludeOthers", 1, "form-check-input", "position-static"], ["for", "schedule-end-date", 1, "col-12", "col-md-4", "col-form-label"], ["type", "text", "id", "schedule-end-date", "bsDatepicker", "", "formControlName", "endDate", 1, "form-control", 3, "bsConfig"], [3, "type", "dismissOnTimeout"], [1, "d-flex", "justify-content-end", "mb-4"], ["type", "button", "class", "btn btn-warning", 3, "click", 4, "ngIf"], ["type", "submit", "class", "btn btn-success", 4, "ngIf"], ["type", "button", 1, "btn", "btn-warning", 3, "click"], ["type", "submit", 1, "btn", "btn-success"]], template: function ScheduleTimePickerComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "form", 0);
                core.ɵɵlistener("ngSubmit", function ScheduleTimePickerComponent_Template_form_ngSubmit_0_listener() { return ctx.confirm(); });
                core.ɵɵtemplate(1, ScheduleTimePickerComponent_div_1_Template, 7, 8, "div", 1);
                core.ɵɵtemplate(2, ScheduleTimePickerComponent_div_2_Template, 9, 7, "div", 1);
                core.ɵɵtemplate(3, ScheduleTimePickerComponent_div_3_Template, 7, 8, "div", 1);
                core.ɵɵtemplate(4, ScheduleTimePickerComponent_div_4_Template, 6, 8, "div", 1);
                core.ɵɵtemplate(5, ScheduleTimePickerComponent_div_5_Template, 9, 7, "div", 1);
                core.ɵɵtemplate(6, ScheduleTimePickerComponent_div_6_Template, 9, 7, "div", 1);
                core.ɵɵtemplate(7, ScheduleTimePickerComponent_div_7_Template, 9, 7, "div", 1);
                core.ɵɵtemplate(8, ScheduleTimePickerComponent_div_8_Template, 7, 7, "div", 1);
                core.ɵɵtemplate(9, ScheduleTimePickerComponent_div_9_Template, 6, 6, "div", 1);
                core.ɵɵtemplate(10, ScheduleTimePickerComponent_div_10_Template, 10, 12, "div", 1);
                core.ɵɵtemplate(11, ScheduleTimePickerComponent_div_11_Template, 7, 6, "div", 1);
                core.ɵɵtemplate(12, ScheduleTimePickerComponent_div_12_Template, 10, 12, "div", 1);
                core.ɵɵtemplate(13, ScheduleTimePickerComponent_div_13_Template, 6, 8, "div", 1);
                core.ɵɵtemplate(14, ScheduleTimePickerComponent_ng_container_14_Template, 4, 8, "ng-container", 2);
                core.ɵɵtemplate(15, ScheduleTimePickerComponent_div_15_Template, 3, 2, "div", 3);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵproperty("formGroup", ctx.form);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.visibiltyCfg.scheduleType);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.visibiltyCfg.recurrence);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.visibiltyCfg.recurrence && ctx.visibiltyCfg.customExpr);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.visibiltyCfg.startDate);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.visibiltyCfg.monthOfYear);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.visibiltyCfg.dayOfMonth);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.visibiltyCfg.dayOfWeek);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.visibiltyCfg.timezone);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.visibiltyCfg.time);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.visibiltyCfg.excludeHolidays);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.visibiltyCfg.excludeWeekends);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.visibiltyCfg.excludeOthers);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.visibiltyCfg.endDate);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngForOf", ctx.alerts);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", !ctx.settings.hideConfirm || !ctx.settings.hideCancel);
            } }, directives: [forms.ɵangular_packages_forms_forms_y, forms.NgControlStatusGroup, forms.FormGroupDirective, common.NgIf, common.NgForOf, forms.DefaultValueAccessor, forms.RadioControlValueAccessor, forms.NgControlStatus, forms.FormControlName, forms.SelectControlValueAccessor, forms.NgSelectOption, forms.ɵangular_packages_forms_forms_x, ngxAutofocusDirective.AutofocusDirective, datepicker.BsDatepickerInputDirective, datepicker.BsDatepickerDirective, forms.NumberValueAccessor, timepicker.TimepickerComponent, forms.CheckboxControlValueAccessor, alert.AlertComponent], pipes: [ngxI18n.HyperTranslatePipe], styles: [""] });
        return ScheduleTimePickerComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(ScheduleTimePickerComponent, [{
            type: core.Component,
            args: [{
                    selector: 'polp-bs-schedule-time-picker',
                    templateUrl: './schedule-time-picker.component.html',
                    styleUrls: ['./schedule-time-picker.component.css']
                }]
        }], function () { return [{ type: forms.FormBuilder }]; }, { initSettings: [{
                type: core.Input
            }], initValue: [{
                type: core.Input
            }], onConfirm: [{
                type: core.Output
            }], onCancel: [{
                type: core.Output
            }] }); })();

    var CronJobService = /** @class */ (function () {
        function CronJobService() {
        }
        CronJobService.prototype.parseCronExpr = function (source, target) {
            var a = cronParser.parseExpression(source);
            // Case 1 (every year)
            if (a.fields.month.length == 1 && a.fields.dayOfMonth.length == 1) {
                target.recurrence = exports.IntervalEnum.Year;
            }
            else if (a.fields.month.length == 12 &&
                a.fields.dayOfMonth.length == 1 &&
                a.fields.dayOfWeek.length == 8) {
                target.recurrence = exports.IntervalEnum.Month;
            }
            else if (a.fields.month.length == 12 &&
                a.fields.dayOfMonth.length == 31 &&
                a.fields.dayOfWeek.length == 1) {
                target.recurrence = exports.IntervalEnum.Week;
            }
            else if (a.fields.month.length == 12 &&
                a.fields.dayOfMonth.length == 31 &&
                a.fields.dayOfWeek.length == 8) {
                target.recurrence == exports.IntervalEnum.Day;
            }
            else {
                target.recurrence = exports.IntervalEnum.Custom;
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
            if (source.recurrence == exports.IntervalEnum.Year) {
                return utc.getMinutes() + " " + utc.getHours() + " " + source.dayOfMonth + " " + source.monthOfYear + " *";
            }
            else if (source.recurrence == exports.IntervalEnum.Month) {
                return utc.getMinutes() + " " + utc.getHours() + " " + source.dayOfMonth + " * *";
            }
            else if (source.recurrence == exports.IntervalEnum.Week) {
                return utc.getMinutes() + " " + utc.getHours() + " * * " + source.dayOfWeek;
            }
            else if (source.recurrence == exports.IntervalEnum.Day) {
                return utc.getMinutes() + " " + utc.getHours() + " * * *";
            }
            else if (source.recurrence == exports.IntervalEnum.Custom) {
                return source.customExpr;
            }
            return '';
        };
        CronJobService.ɵfac = function CronJobService_Factory(t) { return new (t || CronJobService)(); };
        CronJobService.ɵprov = core.ɵɵdefineInjectable({ token: CronJobService, factory: CronJobService.ɵfac, providedIn: 'root' });
        return CronJobService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(CronJobService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return []; }, null); })();

    var PolpBsCronJobModule = /** @class */ (function () {
        function PolpBsCronJobModule() {
        }
        PolpBsCronJobModule.ɵmod = core.ɵɵdefineNgModule({ type: PolpBsCronJobModule });
        PolpBsCronJobModule.ɵinj = core.ɵɵdefineInjector({ factory: function PolpBsCronJobModule_Factory(t) { return new (t || PolpBsCronJobModule)(); }, imports: [[
                    common.CommonModule,
                    forms.FormsModule,
                    forms.ReactiveFormsModule,
                    dropdown.BsDropdownModule,
                    tabs.TabsModule,
                    pagination.PaginationModule,
                    modal.ModalModule,
                    accordion.AccordionModule,
                    popover.PopoverModule,
                    tooltip.TooltipModule,
                    carousel.CarouselModule,
                    alert.AlertModule,
                    datepicker.BsDatepickerModule,
                    buttons.ButtonsModule,
                    collapse.CollapseModule,
                    progressbar.ProgressbarModule,
                    timepicker.TimepickerModule,
                    ngxAutofocusDirective.FtAutofocusModule,
                    ngxI18n.NgxI18nModule
                ]] });
        return PolpBsCronJobModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(PolpBsCronJobModule, { declarations: [ScheduleTimePickerComponent], imports: [common.CommonModule,
            forms.FormsModule,
            forms.ReactiveFormsModule,
            dropdown.BsDropdownModule,
            tabs.TabsModule,
            pagination.PaginationModule,
            modal.ModalModule,
            accordion.AccordionModule,
            popover.PopoverModule,
            tooltip.TooltipModule,
            carousel.CarouselModule,
            alert.AlertModule,
            datepicker.BsDatepickerModule,
            buttons.ButtonsModule,
            collapse.CollapseModule,
            progressbar.ProgressbarModule,
            timepicker.TimepickerModule,
            ngxAutofocusDirective.FtAutofocusModule,
            ngxI18n.NgxI18nModule], exports: [ScheduleTimePickerComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(PolpBsCronJobModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [
                        ScheduleTimePickerComponent
                    ],
                    imports: [
                        common.CommonModule,
                        forms.FormsModule,
                        forms.ReactiveFormsModule,
                        dropdown.BsDropdownModule,
                        tabs.TabsModule,
                        pagination.PaginationModule,
                        modal.ModalModule,
                        accordion.AccordionModule,
                        popover.PopoverModule,
                        tooltip.TooltipModule,
                        carousel.CarouselModule,
                        alert.AlertModule,
                        datepicker.BsDatepickerModule,
                        buttons.ButtonsModule,
                        collapse.CollapseModule,
                        progressbar.ProgressbarModule,
                        timepicker.TimepickerModule,
                        ngxAutofocusDirective.FtAutofocusModule,
                        ngxI18n.NgxI18nModule
                    ],
                    exports: [
                        ScheduleTimePickerComponent
                    ]
                }]
        }], null, null); })();

    exports.CronJobService = CronJobService;
    exports.PolpBsCronJobModule = PolpBsCronJobModule;
    exports.ScheduleTimePickerComponent = ScheduleTimePickerComponent;
    exports.defaultDict = defaultDict;
    exports.getDaysOfMonth = getDaysOfMonth;
    exports.getDaysOfWeek = getDaysOfWeek;
    exports.getDefaultScheduleTime = getDefaultScheduleTime;
    exports.getMonthsOfYear = getMonthsOfYear;
    exports.getTimezoneOffset = getTimezoneOffset;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polpware-cron-job.umd.js.map
