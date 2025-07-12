import { Component, EventEmitter, Input, Output } from '@angular/core';
import { getDaysOfMonth, getDaysOfWeek, getMonthsOfYear, IntervalEnum, safeParseInt } from '@polpware/fe-utilities';
import { AlertDefaultImpl } from '@polpware/ngx-alert';
import { DefaultFormBaseComponent } from '@polpware/ngx-form-common';
import { parseString } from 'cron-parser';
import { getDefaultScheduleTime, ScheduleTypeEnum } from '../interfaces';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../low-level-utils.service";
import * as i3 from "@angular/common";
import * as i4 from "ngx-bootstrap/alert";
import * as i5 from "ngx-bootstrap/datepicker";
import * as i6 from "ngx-bootstrap/timepicker";
import * as i7 from "@40three/ngx-autofocus-directive";
import * as i8 from "../cron-job-hyper-trans.pipe";
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
export class ScheduleTimePickerComponent extends DefaultFormBaseComponent {
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
    static { this.ɵfac = function ScheduleTimePickerComponent_Factory(t) { return new (t || ScheduleTimePickerComponent)(i0.ɵɵdirectiveInject(i1.UntypedFormBuilder), i0.ɵɵdirectiveInject(i2.LowLevelUtilsService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ScheduleTimePickerComponent, selectors: [["polp-bs-schedule-time-picker"]], inputs: { initSettings: "initSettings", initValue: "initValue", defaultHolidays: "defaultHolidays" }, outputs: { childStateChanged: "childStateChanged" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 15, vars: 15, consts: [[3, "ngSubmit", "formGroup"], ["class", "mb-3 row", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-end mb-4", 4, "ngIf"], [1, "mb-3", "row"], [1, "col-12", "col-md-4", "col-form-label"], [1, "col-12", "col-md-8"], ["class", "form-check form-check-inline", 4, "ngFor", "ngForOf"], ["class", "d-block form-text text-warning my-1", 4, "ngIf"], [1, "form-check", "form-check-inline"], ["formControlName", "scheduleType", "type", "radio", 1, "form-check-input", 3, "id", "value"], [1, "form-check-label", 3, "for"], [1, "d-block", "form-text", "text-warning", "my-1"], [1, "col-12", "col-md-4", "col-form-label", 3, "for"], ["formControlName", "recurrence", 1, "form-control", 3, "id"], ["selected", "", "value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["type", "text", "formControlName", "customExpr", 1, "form-control", 3, "autofocus", "id", "aria-describedby"], ["class", "form-text text-warning d-block my-1", 3, "id", 4, "ngIf"], [1, "form-text", "text-warning", "d-block", "my-1", 3, "id"], ["type", "text", "bsDatepicker", "", "formControlName", "startDate", 1, "form-control", 3, "id", "bsConfig"], ["formControlName", "monthOfYear", 1, "form-control", 3, "id"], ["selected", ""], ["formControlName", "dayOfMonth", 1, "form-control", 3, "id"], ["formControlName", "dayOfWeek", 1, "form-control", 3, "id"], ["formControlName", "time", 3, "id"], [1, "form-check"], ["type", "checkbox", "formControlName", "excludeHolidays", 1, "form-check-input", "position-static", 3, "id"], [4, "ngIf"], [1, "btn", "btn-link", "text-info", 3, "click"], ["type", "checkbox", "formControlName", "excludeWeekends", 1, "form-check-input", "position-static", 3, "id"], ["type", "checkbox", "formControlName", "excludeOthers", 1, "form-check-input", "position-static", 3, "id"], ["type", "text", "bsDatepicker", "", "formControlName", "endDate", 1, "form-control", 3, "id", "bsConfig"], [3, "type", "dismissOnTimeout"], [1, "d-flex", "justify-content-end", "mb-4"], ["type", "button", "class", "btn btn-warning", 3, "click", 4, "ngIf"], ["type", "submit", "class", "btn btn-success", 4, "ngIf"], ["type", "button", 1, "btn", "btn-warning", 3, "click"], ["type", "submit", 1, "btn", "btn-success"]], template: function ScheduleTimePickerComponent_Template(rf, ctx) { if (rf & 1) {
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
        } }, dependencies: [i3.NgForOf, i3.NgIf, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.CheckboxControlValueAccessor, i1.SelectControlValueAccessor, i1.RadioControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, i4.AlertComponent, i5.BsDatepickerDirective, i5.BsDatepickerInputDirective, i6.TimepickerComponent, i7.AutofocusDirective, i8.CronJobHyperTransPipe] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ScheduleTimePickerComponent, [{
        type: Component,
        args: [{ selector: 'polp-bs-schedule-time-picker', template: "<form [formGroup]=\"form\" (ngSubmit)=\"confirm()\">\n    <div class=\"mb-3 row\" *ngIf=\"visibiltyCfg.scheduleType\">\n        <label class=\"col-12 col-md-4 col-form-label\">\n            {{'polpCronJob.scheduleType' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <div class=\"form-check form-check-inline\"\n                 *ngFor=\"let opt of scheduleTypeOptions;let i=index\">\n                <input class=\"form-check-input\"\n                       formControlName=\"scheduleType\"\n                       type=\"radio\"\n                       id=\"{{prefix + 'schedule-type-opt-' + i}}\"\n                       value=\"{{opt.value}}\">\n                <label class=\"form-check-label\"\n                       for=\"{{prefix + 'schedule-type-opt-' + i}}\">\n                    {{opt.text | cronJobHyperTrans}}\n                </label>\n            </div>\n            <div class=\"d-block form-text text-warning my-1\"\n                 *ngIf=\"form.hasError('scheduleType') && (form.get('scheduleType').dirty || form.get('scheduleType').touched)\">\n                {{'polpCronJob.errors.scheduleTypeRequired' | cronJobHyperTrans}}\n            </div>\n        </div>\n    </div>\n    \n    <div class=\"mb-3 row\" *ngIf=\"visibiltyCfg.recurrence\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-recurrence'}}\">\n            {{'polpCronJob.recurrence' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <select class=\"form-control\"\n                    id=\"{{prefix + 'schedule-recurrence'}}\"\n                    formControlName=\"recurrence\">\n                <option selected value=\"\">{{'polpCronJob.selectOne' | cronJobHyperTrans}}</option>\n                <option value=\"{{opt.value}}\" *ngFor=\"let opt of recurrenceOptions\">\n                    {{opt.text | cronJobHyperTrans}}\n                </option>\n            </select>\n        </div>\n    </div>\n\n    <div class=\"mb-3 row\" *ngIf=\"visibiltyCfg.recurrence && visibiltyCfg.customExpr\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-custom-expr'}}\">\n            {{'polpCronJob.customExpr' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <input class=\"form-control\"\n                   type=\"text\"\n                   [autofocus]=\"true\"\n                   id=\"{{prefix + 'schedule-custom-expr'}}\"\n                   aria-describedby=\"{{prefix + 'schedule-custom-expr-helper'}}\"\n                   formControlName=\"customExpr\">\n            <div id=\"{{prefix + 'schedule-custom-expr-helper'}}\"\n                 class=\"form-text text-warning d-block my-1\"\n                 *ngIf=\"form.hasError('customExpr') && (form.get('customExpr').dirty || form.get('customExpr').touched)\">\n                {{'polpCronJob.errors.customExprInvalid' | cronJobHyperTrans}}\n            </div>\n        </div>\n    </div>\n\n    <div class=\"mb-3 row\" *ngIf=\"visibiltyCfg.startDate\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-start-date'}}\">\n            {{'polpCronJob.startDate' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <input class=\"form-control\"\n                   type=\"text\"\n                   id=\"{{prefix + 'schedule-start-date'}}\"\n                   bsDatepicker\n                   [bsConfig]=\"{ adaptivePosition: true }\"\n                   formControlName=\"startDate\">\n        </div>\n    </div>\n\n\n    <div class=\"mb-3 row\" *ngIf=\"visibiltyCfg.monthOfYear\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-month-of-year'}}\">\n            {{'polpCronJob.monthOfYear' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <select class=\"form-control\"\n                    id=\"{{prefix + 'schedule-month-of-year'}}\"\n                    formControlName=\"monthOfYear\">\n                <option selected>...</option>\n                <option value=\"{{opt.value}}\" *ngFor=\"let opt of monthsOfYearOptions\">\n                    {{opt.text | cronJobHyperTrans}}\n                </option>\n            </select>\n        </div>\n    </div>\n\n    <div class=\"mb-3 row\" *ngIf=\"visibiltyCfg.dayOfMonth\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-day-of-month'}}\">\n            {{'polpCronJob.dayOfMonth' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <select class=\"form-control\"\n                    id=\"{{prefix + 'schedule-day-of-month'}}\"\n                    formControlName=\"dayOfMonth\">\n                <option selected value=\"\">...</option>\n                <option value=\"{{opt.value}}\" *ngFor=\"let opt of daysOfMonthOptions\">\n                    {{opt.text}}\n                </option>\n            </select>\n        </div>\n    </div>\n\n\n    <div class=\"mb-3 row\" *ngIf=\"visibiltyCfg.dayOfWeek\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-day-of-week'}}\">\n            {{'polpCronJob.dayOfWeek' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <select class=\"form-control\"\n                    id=\"{{prefix + 'schedule-day-of-week'}}\"\n                    formControlName=\"dayOfWeek\">\n                <option selected value=\"\">...</option>\n                <option value=\"{{opt.value}}\" *ngFor=\"let opt of daysOfWeekOptions\">\n                    {{opt.text | cronJobHyperTrans}}\n                </option>\n            </select>\n        </div>\n    </div>\n\n    <div class=\"mb-3 row\" *ngIf=\"visibiltyCfg.time\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-time'}}\">\n            {{'polpCronJob.time' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <timepicker id=\"{{prefix + 'schedule-time'}}\"\n                        formControlName=\"time\">\n            </timepicker>\n        </div>\n    </div>\n\n    <div class=\"mb-3 row\" *ngIf=\"visibiltyCfg.excludeHolidays\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-exclude-holidays'}}\">\n            {{'polpCronJob.excludeHolidays' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <div class=\"form-check\">\n                <input class=\"form-check-input position-static\"\n                       type=\"checkbox\"\n                       id=\"{{prefix + 'schedule-exclude-holidays'}}\"\n                       formControlName=\"excludeHolidays\">\n            </div>\n            <div *ngIf=\"isHolidaysExcluded\">\n                {{holidays}}\n                <span *ngIf=\"!holidays\">{{'polpCronJob.notSetYet' | cronJobHyperTrans}}</span>\n                <button class=\"btn btn-link text-info\" (click)=\"updateHolidaysAsync()\">\n                    {{'polpCronJob.editBtn' | cronJobHyperTrans}}\n                </button>\n            </div>\n        </div>\n    </div>\n    <div class=\"mb-3 row\" *ngIf=\"visibiltyCfg.excludeWeekends\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-exclude-weekends'}}\">\n            {{'polpCronJob.excludeWeekends' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <div class=\"form-check\">\n                <input class=\"form-check-input position-static\"\n                       type=\"checkbox\"\n                       id=\"{{prefix + 'schedule-exclude-weekends'}}\"\n                       formControlName=\"excludeWeekends\">\n            </div>\n        </div>\n    </div>\n    <div class=\"mb-3 row\" *ngIf=\"visibiltyCfg.excludeOthers\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-exclude-others'}}\">\n            {{'polpCronJob.excludeOthers' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <div class=\"form-check\">\n                <input class=\"form-check-input position-static\"\n                       id=\"{{prefix + 'schedule-exclude-others'}}\"\n                       type=\"checkbox\"\n                       formControlName=\"excludeOthers\">\n            </div>\n            <div *ngIf=\"isOthersExcluded\">\n                {{otherDays}}\n                <span *ngIf=\"!otherDays\">{{'polpCronJob.notSetYet' | cronJobHyperTrans}}</span>\n                <button class=\"btn btn-link text-info\" (click)=\"updateOtherDaysAsync()\">\n                    {{'polpCronJob.editBtn' | cronJobHyperTrans}}\n                </button>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"mb-3 row\" *ngIf=\"visibiltyCfg.endDate\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-end-date'}}\">\n            {{'polpCronJob.endDate' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <input class=\"form-control\"\n                   type=\"text\"\n                   id=\"{{prefix + 'schedule-end-date'}}\"\n                   bsDatepicker\n                   [bsConfig]=\"{ adaptivePosition: true }\"\n                   formControlName=\"endDate\">\n        </div>\n    </div>\n\n    <ng-container *ngFor=\"let a of alerts\">\n        <alert [type]=\"a.type\" [dismissOnTimeout]=\"a.timeout\">\n            {{a.message | cronJobHyperTrans}}\n        </alert>\n    </ng-container>\n    \n    <div class=\"d-flex justify-content-end mb-4\" *ngIf=\"!hideSubmitBtn || !hideCancelBtn\">\n        <button type=\"button\" class=\"btn btn-warning\"\n                (click)=\"cancel()\" *ngIf=\"!hideCancelBtn\">\n            {{'polpCronJob.cancelBtn' | cronJobHyperTrans}}\n        </button>\n        <button type=\"submit\" class=\"btn btn-success\"\n                *ngIf=\"!hideSubmitBtn\">\n            {{'polpCronJob.submitBtn' | cronJobHyperTrans}}\n        </button>\n    </div>\n</form>\n" }]
    }], () => [{ type: i1.UntypedFormBuilder }, { type: i2.LowLevelUtilsService }], { initSettings: [{
            type: Input
        }], initValue: [{
            type: Input
        }], defaultHolidays: [{
            type: Input
        }], childStateChanged: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ScheduleTimePickerComponent, { className: "ScheduleTimePickerComponent", filePath: "lib\\schedule-time-picker\\schedule-time-picker.component.ts", lineNumber: 89 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUtdGltZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcG9scHdhcmUvY3Jvbi1qb2Ivc3JjL2xpYi9zY2hlZHVsZS10aW1lLXBpY2tlci9zY2hlZHVsZS10aW1lLXBpY2tlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9jcm9uLWpvYi9zcmMvbGliL3NjaGVkdWxlLXRpbWUtcGlja2VyL3NjaGVkdWxlLXRpbWUtcGlja2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBZ0MsTUFBTSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUdwSCxPQUFPLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BILE9BQU8sRUFBRSxnQkFBZ0IsRUFBb0IsTUFBTSxxQkFBcUIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsd0JBQXdCLEVBQXNCLE1BQU0sMkJBQTJCLENBQUM7QUFDekYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUUxQyxPQUFPLEVBQUUsc0JBQXNCLEVBQWlCLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7SUNGNUUsOEJBQ3lEO0lBQ3JELDRCQUk2QjtJQUM3QixpQ0FDbUQ7SUFDL0MsWUFDSjs7SUFDSixBQURJLGlCQUFRLEVBQ047Ozs7O0lBTkssY0FBMEM7SUFBMUMsMkVBQTBDO0lBQzFDLCtDQUFxQjtJQUVyQixjQUEyQztJQUEzQyw0RUFBMkM7SUFDOUMsY0FDSjtJQURJLGtFQUNKOzs7SUFFSiwrQkFDbUg7SUFDL0csWUFDSjs7SUFBQSxpQkFBTTs7SUFERixjQUNKO0lBREksZ0dB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bEMsY0FBa0M7WUFBbEMsdURBQWtDO1lBY2xDLGNBQWdDO1lBQWhDLHFEQUFnQztZQXNCaEMsY0FBMEI7WUFBMUIsK0NBQTBCO1lBZXJCLGNBQVM7WUFBVCxvQ0FBUztZQU1TLGNBQXNDO1lBQXRDLCtEQUFzQzs7O2lGRHBJM0UsMkJBQTJCO2NBTHZDLFNBQVM7MkJBQ0ksOEJBQThCO3NGQU8vQixZQUFZO2tCQUFwQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUVHLGVBQWU7a0JBQXZCLEtBQUs7WUFFSSxpQkFBaUI7a0JBQTFCLE1BQU07O2tGQVJFLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVbnR5cGVkRm9ybUJ1aWxkZXIsIFVudHlwZWRGb3JtQ29udHJvbCwgVW50eXBlZEZvcm1Hcm91cCwgVmFsaWRhdGlvbkVycm9ycywgVmFsaWRhdG9yRm4gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBJQ2hpbGRNb2RhbFN0YXRlIH0gZnJvbSAnQHBvbHB3YXJlL2JzLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgZ2V0RGF5c09mTW9udGgsIGdldERheXNPZldlZWssIGdldE1vbnRoc09mWWVhciwgSW50ZXJ2YWxFbnVtLCBzYWZlUGFyc2VJbnQgfSBmcm9tICdAcG9scHdhcmUvZmUtdXRpbGl0aWVzJztcbmltcG9ydCB7IEFsZXJ0RGVmYXVsdEltcGwsIElIYXNBbGVydEZlYXR1cmUgfSBmcm9tICdAcG9scHdhcmUvbmd4LWFsZXJ0JztcbmltcG9ydCB7IERlZmF1bHRGb3JtQmFzZUNvbXBvbmVudCwgSURlZmF1bHRGb3JtSW5wdXRzIH0gZnJvbSAnQHBvbHB3YXJlL25neC1mb3JtLWNvbW1vbic7XG5pbXBvcnQgeyBwYXJzZVN0cmluZyB9IGZyb20gJ2Nyb24tcGFyc2VyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdFNjaGVkdWxlVGltZSwgSVNjaGVkdWxlVGltZSwgU2NoZWR1bGVUeXBlRW51bSB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgTG93TGV2ZWxVdGlsc1NlcnZpY2UgfSBmcm9tICcuLi9sb3ctbGV2ZWwtdXRpbHMuc2VydmljZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNldHRpbmdzIGV4dGVuZHMgSURlZmF1bHRGb3JtSW5wdXRzIHtcbiAgICBoaWRlU3VibWl0QnRuPzogYm9vbGVhbjtcbiAgICBoaWRlQ2FuY2VsQnRuPzogYm9vbGVhbjtcbiAgICBlbmFibGVBc2FwPzogYm9vbGVhbjtcbn1cblxuY29uc3QgZGVmYXVsdFNldHRpbmdzOiBJU2V0dGluZ3MgPSB7XG4gICAgaGlkZVN1Ym1pdEJ0bjogZmFsc2UsXG4gICAgaGlkZUNhbmNlbEJ0bjogdHJ1ZSxcbiAgICBlbmFibGVBc2FwOiBmYWxzZVxufVxuXG5jb25zdCBmb3JtVmFsaWRhdG9yOiBWYWxpZGF0b3JGbiA9IChjb250cm9sOiBVbnR5cGVkRm9ybUdyb3VwKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xuXG4gICAgY29uc3Qgc2NoZWR1bGVUeXBlVmFsID0gc2FmZVBhcnNlSW50KChjb250cm9sLmdldCgnc2NoZWR1bGVUeXBlJykgYXMgVW50eXBlZEZvcm1Db250cm9sKS52YWx1ZSk7XG4gICAgaWYgKHNjaGVkdWxlVHlwZVZhbCA9PSAwKSB7XG4gICAgICAgIHJldHVybiB7IHNjaGVkdWxlVHlwZTogdHJ1ZSB9O1xuICAgIH1cbiAgICBpZiAoc2NoZWR1bGVUeXBlVmFsID09IDIpIHsgLy8gUmVjdXJyZW50XG4gICAgICAgIGNvbnN0IHJlY3VycmVuY2VWYWwgPSBzYWZlUGFyc2VJbnQoKGNvbnRyb2wuZ2V0KCdyZWN1cnJlbmNlJykgYXMgVW50eXBlZEZvcm1Db250cm9sKS52YWx1ZSk7XG4gICAgICAgIGlmIChyZWN1cnJlbmNlVmFsID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB7IHJlY3VycmVuY2U6IHRydWUgfVxuICAgICAgICB9IGVsc2UgaWYgKHJlY3VycmVuY2VWYWwgPT0gSW50ZXJ2YWxFbnVtLkN1c3RvbSkge1xuICAgICAgICAgICAgY29uc3QgY3VzdG9tRXhwclZhbCA9IChjb250cm9sLmdldCgnY3VzdG9tRXhwcicpIGFzIFVudHlwZWRGb3JtQ29udHJvbCkudmFsdWU7XG4gICAgICAgICAgICBpZiAoIWN1c3RvbUV4cHJWYWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBjdXN0b21FeHByOiB0cnVlIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHZhbGlkYXRlXG4gICAgICAgICAgICAgICAgY29uc3QgciA9IHBhcnNlU3RyaW5nKGN1c3RvbUV4cHJWYWwpO1xuICAgICAgICAgICAgICAgIGlmIChyLmVycm9ycyAmJiBPYmplY3Qua2V5cyhyLmVycm9ycykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGN1c3RvbUV4cHI6IHRydWUgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIElGb3JtRmllbGRzIHtcbiAgICBzY2hlZHVsZVR5cGU6IG51bWJlcjtcbiAgICByZWN1cnJlbmNlOiBudW1iZXI7XG4gICAgZXhjbHVkZUhvbGlkYXlzOiBib29sZWFuO1xuICAgIGV4Y2x1ZGVXZWVrZW5kczogYm9vbGVhbjtcbiAgICBleGNsdWRlT3RoZXJzOiBib29sZWFuO1xuICAgIGN1c3RvbUV4cHI6IHN0cmluZztcbiAgICBzdGFydERhdGU6IERhdGU7XG4gICAgZW5kRGF0ZTogRGF0ZTtcbiAgICBtb250aE9mWWVhcjogbnVtYmVyO1xuICAgIGRheU9mTW9udGg6IG51bWJlcjtcbiAgICBkYXlPZldlZWs6IG51bWJlcjtcbiAgICB0aW1lOiBEYXRlO1xufVxuXG5mdW5jdGlvbiBtYXBUb0Zvcm1GaWVsZHMoZGF0YTogSVNjaGVkdWxlVGltZSkge1xuICAgIGNvbnN0IGRlZmF1bHREYXRhID0gZ2V0RGVmYXVsdFNjaGVkdWxlVGltZSgpO1xuICAgIGRhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0RGF0YSwgZGF0YSB8fCB7fSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gVGhlIHZhbHVlIGZvciB0aGUgcmFkaW8gYnV0dG9uIGlzIHR5cGUgb2Ygc3RyaW5nLlxuICAgICAgICBzY2hlZHVsZVR5cGU6IChkYXRhLmlzUmVjdXJyZW50ID8gU2NoZWR1bGVUeXBlRW51bS5SZWN1cnJlbnQgOiBTY2hlZHVsZVR5cGVFbnVtLk9uZVRpbWUpLnRvU3RyaW5nKCksXG4gICAgICAgIHJlY3VycmVuY2U6IGRhdGEucmVjdXJyZW5jZSxcbiAgICAgICAgZXhjbHVkZUhvbGlkYXlzOiAhIWRhdGEuaG9saWRheXMsXG4gICAgICAgIGV4Y2x1ZGVXZWVrZW5kczogZGF0YS5leGNsdWRlV2Vla2VuZHMsXG4gICAgICAgIGV4Y2x1ZGVPdGhlcnM6ICEhZGF0YS5vdGhlckRheXMsXG4gICAgICAgIGN1c3RvbUV4cHI6IGRhdGEuY3VzdG9tRXhwcixcbiAgICAgICAgc3RhcnREYXRlOiBkYXRhLnN0YXJ0RGF0ZSxcbiAgICAgICAgZW5kRGF0ZTogZGF0YS5lbmREYXRlLFxuICAgICAgICB0aW1lOiBkYXRhLnRpbWUsXG4gICAgICAgIG1vbnRoT2ZZZWFyOiBkYXRhLm1vbnRoT2ZZZWFyLFxuICAgICAgICBkYXlPZldlZWs6IGRhdGEuZGF5T2ZXZWVrLFxuICAgICAgICBkYXlPZk1vbnRoOiBkYXRhLmRheU9mTW9udGhcbiAgICB9O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BvbHAtYnMtc2NoZWR1bGUtdGltZS1waWNrZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zY2hlZHVsZS10aW1lLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vc2NoZWR1bGUtdGltZS1waWNrZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNjaGVkdWxlVGltZVBpY2tlckNvbXBvbmVudCBleHRlbmRzIERlZmF1bHRGb3JtQmFzZUNvbXBvbmVudFxuICAgIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgSUhhc0FsZXJ0RmVhdHVyZSB7XG5cbiAgICBASW5wdXQoKSBpbml0U2V0dGluZ3M6IElTZXR0aW5ncyA9IHt9O1xuICAgIEBJbnB1dCgpIGluaXRWYWx1ZTogSVNjaGVkdWxlVGltZSA9IG51bGw7XG4gICAgLy8gdG9kbzogV2UgdXNlIHRoZSBjb21wYW55LXNwZWNpZmljIHNldHRpbmdzIC4uLi5cbiAgICBASW5wdXQoKSBkZWZhdWx0SG9saWRheXM6IHN0cmluZyA9ICcnO1xuXG4gICAgQE91dHB1dCgpIGNoaWxkU3RhdGVDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxJQ2hpbGRNb2RhbFN0YXRlPigpO1xuXG4gICAgc2V0dGluZ3M6IElTZXR0aW5ncyA9IHt9O1xuXG4gICAgcHJlZml4ID0gJ3N0cC0nICsgKG5ldyBEYXRlKS5nZXRUaW1lKCkgKyAnLSc7XG5cbiAgICAvLyBTY2hlZHVsZSBtb2RsZVxuICAgIGZvcm06IFVudHlwZWRGb3JtR3JvdXA7XG4gICAgc2NoZWR1bGVUeXBlT3B0aW9ucyA9IFt7XG4gICAgICAgIHZhbHVlOiBTY2hlZHVsZVR5cGVFbnVtLk9uZVRpbWUsXG4gICAgICAgIHRleHQ6ICdwb2xwQ3JvbkpvYi5vbmVUaW1lU2NoZWR1bGUnXG4gICAgfSwge1xuICAgICAgICB2YWx1ZTogU2NoZWR1bGVUeXBlRW51bS5SZWN1cnJlbnQsXG4gICAgICAgIHRleHQ6ICdwb2xwQ3JvbkpvYi5yZWN1cnJlbnRTY2hlZHVsZSdcbiAgICB9XTtcblxuICAgIHJlY3VycmVuY2VPcHRpb25zID0gW3tcbiAgICAgICAgdmFsdWU6IEludGVydmFsRW51bS5EYXksXG4gICAgICAgIHRleHQ6ICdwb2xwQ3JvbkpvYi5ldmVyeURheSdcbiAgICB9LCB7XG4gICAgICAgIHZhbHVlOiBJbnRlcnZhbEVudW0uV2VlayxcbiAgICAgICAgdGV4dDogJ3BvbHBDcm9uSm9iLmV2ZXJ5V2VlaydcbiAgICB9LCB7XG4gICAgICAgIHZhbHVlOiBJbnRlcnZhbEVudW0uTW9udGgsXG4gICAgICAgIHRleHQ6ICdwb2xwQ3JvbkpvYi5ldmVyeU1vbnRoJ1xuICAgIH0sIHtcbiAgICAgICAgdmFsdWU6IEludGVydmFsRW51bS5ZZWFyLFxuICAgICAgICB0ZXh0OiAncG9scENyb25Kb2IuZXZlcnlZZWFyJ1xuICAgIH0sIHtcbiAgICAgICAgdmFsdWU6IEludGVydmFsRW51bS5DdXN0b20sXG4gICAgICAgIHRleHQ6ICdwb2xwQ3JvbkpvYi5jdXN0b21JbnRlcnZhbCdcbiAgICB9XTtcblxuICAgIGRheXNPZldlZWtPcHRpb25zID0gZ2V0RGF5c09mV2VlaygpO1xuICAgIG1vbnRoc09mWWVhck9wdGlvbnMgPSBnZXRNb250aHNPZlllYXIoKTtcbiAgICBkYXlzT2ZNb250aE9wdGlvbnMgPSBnZXREYXlzT2ZNb250aCgpO1xuXG4gICAgdmlzaWJpbHR5Q2ZnID0ge1xuICAgICAgICBzY2hlZHVsZVR5cGU6IHRydWUsXG4gICAgICAgIHJlY3VycmVuY2U6IGZhbHNlLFxuICAgICAgICBjdXN0b21FeHByOiBmYWxzZSxcbiAgICAgICAgZXhjbHVkZUhvbGlkYXlzOiBmYWxzZSxcbiAgICAgICAgZXhjbHVkZVdlZWtlbmRzOiBmYWxzZSxcbiAgICAgICAgZXhjbHVkZU90aGVyczogZmFsc2UsXG4gICAgICAgIHN0YXJ0RGF0ZTogZmFsc2UsXG4gICAgICAgIGVuZERhdGU6IGZhbHNlLFxuICAgICAgICB0aW1lOiBmYWxzZSxcbiAgICAgICAgbW9udGhPZlllYXI6IGZhbHNlLFxuICAgICAgICBkYXlPZk1vbnRoOiBmYWxzZSxcbiAgICAgICAgZGF5T2ZXZWVrOiBmYWxzZVxuICAgIH07XG5cbiAgICBob2xpZGF5czogc3RyaW5nID0gJyc7XG4gICAgb3RoZXJEYXlzOiBzdHJpbmcgPSAnJztcblxuICAgIGlzU2F2aW5nOiBib29sZWFuO1xuICAgIGFsZXJ0UHJvdmlkZXIgPSBuZXcgQWxlcnREZWZhdWx0SW1wbCgpO1xuXG4gICAgcHJpdmF0ZSBfc3VicjogU3Vic2NyaXB0aW9uO1xuICAgIHByaXZhdGUgX3N0b3BFdmVudFByb3BhZ2F0aW9uID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9idWlsZGVyOiBVbnR5cGVkRm9ybUJ1aWxkZXIsXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX3V0aWxzOiBMb3dMZXZlbFV0aWxzU2VydmljZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuXG4gICAgZ2V0IGFsZXJ0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxlcnRQcm92aWRlci5kYXRhO1xuICAgIH1cblxuICAgIGdldCBpc0hvbGlkYXlzRXhjbHVkZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbJ2V4Y2x1ZGVIb2xpZGF5cyddLnZhbHVlO1xuICAgIH1cblxuICAgIGdldCBpc090aGVyc0V4Y2x1ZGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzWydleGNsdWRlT3RoZXJzJ10udmFsdWU7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0U2V0dGluZ3MsIHRoaXMuaW5pdFNldHRpbmdzKTtcbiAgICAgICAgdGhpcy5oaWRlQ2FuY2VsQnRuID0gdGhpcy5zZXR0aW5ncy5oaWRlQ2FuY2VsQnRuO1xuICAgICAgICB0aGlzLmhpZGVTdWJtaXRCdG4gPSB0aGlzLnNldHRpbmdzLmhpZGVTdWJtaXRCdG47XG5cbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuZW5hYmxlQXNhcCkge1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZVR5cGVPcHRpb25zID0gW3tcbiAgICAgICAgICAgICAgICB2YWx1ZTogU2NoZWR1bGVUeXBlRW51bS5Bc2FwLFxuICAgICAgICAgICAgICAgIHRleHQ6ICdwb2xwQ3JvbkpvYi5hc2FwJ1xuICAgICAgICAgICAgfSwgLi4udGhpcy5zY2hlZHVsZVR5cGVPcHRpb25zXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IG1hcFRvRm9ybUZpZWxkcyh0aGlzLmluaXRWYWx1ZSk7XG4gICAgICAgIHRoaXMuZm9ybSA9IHRoaXMuX2J1aWxkZXIuZ3JvdXAoZmllbGRzLCB7IHZhbGlkYXRvcnM6IFtmb3JtVmFsaWRhdG9yXSB9KTtcbiAgICAgICAgdGhpcy51cGRhdGVGaWVsZFZpc2liaWxpdHkodGhpcy5mb3JtLnZhbHVlKTtcblxuICAgICAgICBpZiAodGhpcy5pbml0VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuaG9saWRheXMgPSB0aGlzLmluaXRWYWx1ZS5ob2xpZGF5cyB8fCB0aGlzLmRlZmF1bHRIb2xpZGF5cyB8fCAnJztcbiAgICAgICAgICAgIHRoaXMub3RoZXJEYXlzID0gdGhpcy5pbml0VmFsdWUub3RoZXJEYXlzIHx8ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc3ViciA9IHRoaXMuZm9ybS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKGEgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVGaWVsZFZpc2liaWxpdHkoYSk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX3N0b3BFdmVudFByb3BhZ2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlWYWxpZGF0aW9uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlWYWx1ZUNoYW5nZXModGhpcy5jb21wdXRlT3V0VmFsdWUoYSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5fc3Vici51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGRhdGE6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5pbml0VmFsdWUgJiYgIWRhdGEuaW5pdFZhbHVlLmZpcnN0Q2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLl9zdG9wRXZlbnRQcm9wYWdhdGlvbiA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZvcm1EYXRhKGRhdGEuaW5pdFZhbHVlLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgICAgICB0aGlzLl9zdG9wRXZlbnRQcm9wYWdhdGlvbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHVwZGF0ZUZvcm1EYXRhKGRhdGE6IElTY2hlZHVsZVRpbWUpIHtcbiAgICAgICAgY29uc3QgY2hhbmdlcyA9IG1hcFRvRm9ybUZpZWxkcyhkYXRhKTtcbiAgICAgICAgdGhpcy5ob2xpZGF5cyA9IGRhdGEuaG9saWRheXMgfHwgdGhpcy5kZWZhdWx0SG9saWRheXMgfHwgJyc7XG4gICAgICAgIHRoaXMub3RoZXJEYXlzID0gZGF0YS5vdGhlckRheXMgfHwgJyc7XG5cbiAgICAgICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUoY2hhbmdlcywge1xuICAgICAgICAgICAgZW1pdEV2ZW50OiBmYWxzZSAvLyBObyBuZWVkIHRvIGVtaXQgZXZlbnQsXG4gICAgICAgICAgICAvLyBFdmVuIGluIHRoaXMgY2FzZSwgdGhlIG9uVmFsdWVDaGFuZ2Ugd2lsbCBiZSB0cmlnZ2VyLlxuICAgICAgICAgICAgLy8gc28gdGhhdCB3ZSBjYW4gZ2V0IHRoZSB2YWxpZGF0aW9uIGNoYW5nZS5cbiAgICAgICAgICAgIC8vIHRoZSBjbGllbnQgc2hvdWxkIGNvbXBhcmUgdGhlIHJlY2VpdmVkIHZhbHVlIGFuZCB0aGUgb2xkIHZhbHVlIHRvIGRlY2lkZSBpZlxuICAgICAgICAgICAgLy8gYW55IGRhdGEgaGFzIGJlZW4gY2hhbmdlZC4gXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB1cGRhdGVGaWVsZFZpc2liaWxpdHkoYTogSUZvcm1GaWVsZHMpIHtcblxuICAgICAgICBmb3IgKGxldCBrIGluIHRoaXMudmlzaWJpbHR5Q2ZnKSB7XG4gICAgICAgICAgICBpZiAodGhpcy52aXNpYmlsdHlDZmcuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2liaWx0eUNmZ1trXSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudmlzaWJpbHR5Q2ZnLnNjaGVkdWxlVHlwZSA9IHRydWU7XG5cbiAgICAgICAgY29uc3Qgc2NoZWR1bGVUeXBlVmFsID0gc2FmZVBhcnNlSW50KGEuc2NoZWR1bGVUeXBlKTtcblxuICAgICAgICBpZiAoc2NoZWR1bGVUeXBlVmFsID09IDEpIHtcbiAgICAgICAgICAgIHRoaXMudmlzaWJpbHR5Q2ZnLnN0YXJ0RGF0ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnZpc2liaWx0eUNmZy50aW1lID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChzY2hlZHVsZVR5cGVWYWwgPT0gMikge1xuICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcucmVjdXJyZW5jZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnZpc2liaWx0eUNmZy5leGNsdWRlSG9saWRheXMgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcuZXhjbHVkZVdlZWtlbmRzID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudmlzaWJpbHR5Q2ZnLmV4Y2x1ZGVPdGhlcnMgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcuZW5kRGF0ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnZpc2liaWx0eUNmZy50aW1lID0gdHJ1ZTtcblxuICAgICAgICAgICAgY29uc3QgcmVjdXJyZW50VmFsID0gc2FmZVBhcnNlSW50KGEucmVjdXJyZW5jZSk7XG4gICAgICAgICAgICBpZiAocmVjdXJyZW50VmFsID09IEludGVydmFsRW51bS5ZZWFyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcubW9udGhPZlllYXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJpbHR5Q2ZnLmRheU9mTW9udGggPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZWN1cnJlbnRWYWwgPT0gSW50ZXJ2YWxFbnVtLk1vbnRoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcuZGF5T2ZNb250aCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlY3VycmVudFZhbCA9PSBJbnRlcnZhbEVudW0uV2Vlaykge1xuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJpbHR5Q2ZnLmRheU9mV2VlayA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlY3VycmVudFZhbCA9PSBJbnRlcnZhbEVudW0uQ3VzdG9tKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcudGltZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJpbHR5Q2ZnLmN1c3RvbUV4cHIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFdoZW4gdGhlIHR5cGUgaXMgMywgbm90aGluZyBpcyB2aXNpYmxlLlxuICAgIH1cblxuICAgIHByb3RlY3RlZCBjb21wdXRlT3V0VmFsdWUoYTogSUZvcm1GaWVsZHMpIHtcbiAgICAgICAgY29uc3Qgc2NoZWR1bGVUeXBlVmFsID0gc2FmZVBhcnNlSW50KGEuc2NoZWR1bGVUeXBlKTtcbiAgICAgICAgaWYgKHNjaGVkdWxlVHlwZVZhbCA9PSBTY2hlZHVsZVR5cGVFbnVtLk9uZVRpbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldE9uZVRpbWVWYWx1ZShhKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2NoZWR1bGVUeXBlVmFsID09IFNjaGVkdWxlVHlwZUVudW0uUmVjdXJyZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRSZWN1cnJlbnRWYWx1ZShhKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2NoZWR1bGVUeXBlVmFsID09IFNjaGVkdWxlVHlwZUVudW0uQXNhcCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXNhcFZhbHVlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0QXNhcFZhbHVlKCk6IElTY2hlZHVsZVRpbWUge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXNSZWN1cnJlbnQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldE9uZVRpbWVWYWx1ZShhOiBJRm9ybUZpZWxkcyk6IElTY2hlZHVsZVRpbWUge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXNSZWN1cnJlbnQ6IGZhbHNlLFxuICAgICAgICAgICAgc3RhcnREYXRlOiBhLnN0YXJ0RGF0ZSxcbiAgICAgICAgICAgIHRpbWU6IGEudGltZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRSZWN1cnJlbnRWYWx1ZShhOiBJRm9ybUZpZWxkcyk6IElTY2hlZHVsZVRpbWUge1xuICAgICAgICBjb25zdCByZWN1cnJlbmNlID0gc2FmZVBhcnNlSW50KGEucmVjdXJyZW5jZSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlzUmVjdXJyZW50OiB0cnVlLFxuICAgICAgICAgICAgcmVjdXJyZW5jZTogcmVjdXJyZW5jZSxcbiAgICAgICAgICAgIGhvbGlkYXlzOiBhLmV4Y2x1ZGVIb2xpZGF5cyA/IHRoaXMuaG9saWRheXMgOiAnJyxcbiAgICAgICAgICAgIGV4Y2x1ZGVXZWVrZW5kczogYS5leGNsdWRlV2Vla2VuZHMsXG4gICAgICAgICAgICBvdGhlckRheXM6IGEuZXhjbHVkZU90aGVycyA/IHRoaXMub3RoZXJEYXlzIDogJycsXG4gICAgICAgICAgICBzdGFydERhdGU6IGEuc3RhcnREYXRlLFxuICAgICAgICAgICAgZW5kRGF0ZTogYS5lbmREYXRlLFxuICAgICAgICAgICAgdGltZTogYS50aW1lLFxuICAgICAgICAgICAgbW9udGhPZlllYXI6IGEubW9udGhPZlllYXIsXG4gICAgICAgICAgICBkYXlPZk1vbnRoOiBhLmRheU9mTW9udGgsXG4gICAgICAgICAgICBkYXlPZldlZWs6IGEuZGF5T2ZXZWVrXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29uZmlybSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmZvcm0udmFsaWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWxlcnRQcm92aWRlci53YXJuaW5nKCdwb2xwQ3JvbkpvYi5lcnJvcnMuZ2VuZXJhbCcsIDUwMDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb3V0cHV0ID0gdGhpcy5jb21wdXRlT3V0VmFsdWUodGhpcy5mb3JtLnZhbHVlKTtcbiAgICAgICAgdGhpcy5vblNhdmUuZW1pdChvdXRwdXQpO1xuICAgIH1cblxuICAgIGNhbmNlbCgpIHtcbiAgICAgICAgdGhpcy5vbkNhbmNlbC5lbWl0KCk7XG4gICAgfVxuXG4gICAgYXN5bmMgdXBkYXRlSG9saWRheXNBc3luYygpIHtcbiAgICAgICAgdGhpcy5jaGlsZFN0YXRlQ2hhbmdlZC5lbWl0KHsgb3BlbmVkOiB0cnVlIH0pO1xuICAgICAgICBjb25zdCByZXQgPSBhd2FpdCB0aGlzLl91dGlscy5zaG93TXVsdGlEYXRlRWRpdG9yQXN5bmMoe1xuICAgICAgICAgICAgdGl0bGU6ICdwb2xwQ3JvbkpvYi5ob2xpZGF5c0VkaXRvclRpdGxlJyxcbiAgICAgICAgICAgIGluaXRWYWx1ZTogKHRoaXMuaG9saWRheXMgfHwgJycpLnNwbGl0KCcsJykuZmlsdGVyKGEgPT4gISFhKVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jaGlsZFN0YXRlQ2hhbmdlZC5lbWl0KHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICAgICAgaWYgKHJldCkge1xuICAgICAgICAgICAgdGhpcy5ob2xpZGF5cyA9IHJldC5qb2luKCcsJyk7XG5cbiAgICAgICAgICAgIHRoaXMubm90aWZ5VmFsaWRhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlWYWx1ZUNoYW5nZXModGhpcy5jb21wdXRlT3V0VmFsdWUodGhpcy5mb3JtLnZhbHVlKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyB1cGRhdGVPdGhlckRheXNBc3luYygpIHtcbiAgICAgICAgdGhpcy5jaGlsZFN0YXRlQ2hhbmdlZC5lbWl0KHsgb3BlbmVkOiB0cnVlIH0pO1xuICAgICAgICBjb25zdCByZXQgPSBhd2FpdCB0aGlzLl91dGlscy5zaG93TXVsdGlEYXRlRWRpdG9yQXN5bmMoe1xuICAgICAgICAgICAgdGl0bGU6ICdwb2xwQ3JvbkpvYi5vdGhlcnNFZGl0b3JUaXRsZScsXG4gICAgICAgICAgICBpbml0VmFsdWU6ICh0aGlzLm90aGVyRGF5cyB8fCAnJykuc3BsaXQoJywnKS5maWx0ZXIoYSA9PiAhIWEpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNoaWxkU3RhdGVDaGFuZ2VkLmVtaXQoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgICAgICBpZiAocmV0KSB7XG4gICAgICAgICAgICB0aGlzLm90aGVyRGF5cyA9IHJldC5qb2luKCcsJyk7XG5cbiAgICAgICAgICAgIHRoaXMubm90aWZ5VmFsaWRhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlWYWx1ZUNoYW5nZXModGhpcy5jb21wdXRlT3V0VmFsdWUodGhpcy5mb3JtLnZhbHVlKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiIsIjxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybVwiIChuZ1N1Ym1pdCk9XCJjb25maXJtKClcIj5cbiAgICA8ZGl2IGNsYXNzPVwibWItMyByb3dcIiAqbmdJZj1cInZpc2liaWx0eUNmZy5zY2hlZHVsZVR5cGVcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLTEyIGNvbC1tZC00IGNvbC1mb3JtLWxhYmVsXCI+XG4gICAgICAgICAgICB7eydwb2xwQ3JvbkpvYi5zY2hlZHVsZVR5cGUnIHwgY3JvbkpvYkh5cGVyVHJhbnN9fVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGNvbC1tZC04XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiXG4gICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBvcHQgb2Ygc2NoZWR1bGVUeXBlT3B0aW9ucztsZXQgaT1pbmRleFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJzY2hlZHVsZVR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICBpZD1cInt7cHJlZml4ICsgJ3NjaGVkdWxlLXR5cGUtb3B0LScgKyBpfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7b3B0LnZhbHVlfX1cIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgZm9yPVwie3twcmVmaXggKyAnc2NoZWR1bGUtdHlwZS1vcHQtJyArIGl9fVwiPlxuICAgICAgICAgICAgICAgICAgICB7e29wdC50ZXh0IHwgY3JvbkpvYkh5cGVyVHJhbnN9fVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWJsb2NrIGZvcm0tdGV4dCB0ZXh0LXdhcm5pbmcgbXktMVwiXG4gICAgICAgICAgICAgICAgICpuZ0lmPVwiZm9ybS5oYXNFcnJvcignc2NoZWR1bGVUeXBlJykgJiYgKGZvcm0uZ2V0KCdzY2hlZHVsZVR5cGUnKS5kaXJ0eSB8fCBmb3JtLmdldCgnc2NoZWR1bGVUeXBlJykudG91Y2hlZClcIj5cbiAgICAgICAgICAgICAgICB7eydwb2xwQ3JvbkpvYi5lcnJvcnMuc2NoZWR1bGVUeXBlUmVxdWlyZWQnIHwgY3JvbkpvYkh5cGVyVHJhbnN9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIFxuICAgIDxkaXYgY2xhc3M9XCJtYi0zIHJvd1wiICpuZ0lmPVwidmlzaWJpbHR5Q2ZnLnJlY3VycmVuY2VcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLTEyIGNvbC1tZC00IGNvbC1mb3JtLWxhYmVsXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7cHJlZml4ICsgJ3NjaGVkdWxlLXJlY3VycmVuY2UnfX1cIj5cbiAgICAgICAgICAgIHt7J3BvbHBDcm9uSm9iLnJlY3VycmVuY2UnIHwgY3JvbkpvYkh5cGVyVHJhbnN9fVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGNvbC1tZC04XCI+XG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ7e3ByZWZpeCArICdzY2hlZHVsZS1yZWN1cnJlbmNlJ319XCJcbiAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwicmVjdXJyZW5jZVwiPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQgdmFsdWU9XCJcIj57eydwb2xwQ3JvbkpvYi5zZWxlY3RPbmUnIHwgY3JvbkpvYkh5cGVyVHJhbnN9fTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ7e29wdC52YWx1ZX19XCIgKm5nRm9yPVwibGV0IG9wdCBvZiByZWN1cnJlbmNlT3B0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICB7e29wdC50ZXh0IHwgY3JvbkpvYkh5cGVyVHJhbnN9fVxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cIm1iLTMgcm93XCIgKm5nSWY9XCJ2aXNpYmlsdHlDZmcucmVjdXJyZW5jZSAmJiB2aXNpYmlsdHlDZmcuY3VzdG9tRXhwclwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtMTIgY29sLW1kLTQgY29sLWZvcm0tbGFiZWxcIlxuICAgICAgICAgICAgICAgZm9yPVwie3twcmVmaXggKyAnc2NoZWR1bGUtY3VzdG9tLWV4cHInfX1cIj5cbiAgICAgICAgICAgIHt7J3BvbHBDcm9uSm9iLmN1c3RvbUV4cHInIHwgY3JvbkpvYkh5cGVyVHJhbnN9fVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGNvbC1tZC04XCI+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICBbYXV0b2ZvY3VzXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgIGlkPVwie3twcmVmaXggKyAnc2NoZWR1bGUtY3VzdG9tLWV4cHInfX1cIlxuICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJ7e3ByZWZpeCArICdzY2hlZHVsZS1jdXN0b20tZXhwci1oZWxwZXInfX1cIlxuICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cImN1c3RvbUV4cHJcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ7e3ByZWZpeCArICdzY2hlZHVsZS1jdXN0b20tZXhwci1oZWxwZXInfX1cIlxuICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LXdhcm5pbmcgZC1ibG9jayBteS0xXCJcbiAgICAgICAgICAgICAgICAgKm5nSWY9XCJmb3JtLmhhc0Vycm9yKCdjdXN0b21FeHByJykgJiYgKGZvcm0uZ2V0KCdjdXN0b21FeHByJykuZGlydHkgfHwgZm9ybS5nZXQoJ2N1c3RvbUV4cHInKS50b3VjaGVkKVwiPlxuICAgICAgICAgICAgICAgIHt7J3BvbHBDcm9uSm9iLmVycm9ycy5jdXN0b21FeHBySW52YWxpZCcgfCBjcm9uSm9iSHlwZXJUcmFuc319XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwibWItMyByb3dcIiAqbmdJZj1cInZpc2liaWx0eUNmZy5zdGFydERhdGVcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLTEyIGNvbC1tZC00IGNvbC1mb3JtLWxhYmVsXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7cHJlZml4ICsgJ3NjaGVkdWxlLXN0YXJ0LWRhdGUnfX1cIj5cbiAgICAgICAgICAgIHt7J3BvbHBDcm9uSm9iLnN0YXJ0RGF0ZScgfCBjcm9uSm9iSHlwZXJUcmFuc319XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgY29sLW1kLThcIj5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgIGlkPVwie3twcmVmaXggKyAnc2NoZWR1bGUtc3RhcnQtZGF0ZSd9fVwiXG4gICAgICAgICAgICAgICAgICAgYnNEYXRlcGlja2VyXG4gICAgICAgICAgICAgICAgICAgW2JzQ29uZmlnXT1cInsgYWRhcHRpdmVQb3NpdGlvbjogdHJ1ZSB9XCJcbiAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJzdGFydERhdGVcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cblxuICAgIDxkaXYgY2xhc3M9XCJtYi0zIHJvd1wiICpuZ0lmPVwidmlzaWJpbHR5Q2ZnLm1vbnRoT2ZZZWFyXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC0xMiBjb2wtbWQtNCBjb2wtZm9ybS1sYWJlbFwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e3ByZWZpeCArICdzY2hlZHVsZS1tb250aC1vZi15ZWFyJ319XCI+XG4gICAgICAgICAgICB7eydwb2xwQ3JvbkpvYi5tb250aE9mWWVhcicgfCBjcm9uSm9iSHlwZXJUcmFuc319XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgY29sLW1kLThcIj5cbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cInt7cHJlZml4ICsgJ3NjaGVkdWxlLW1vbnRoLW9mLXllYXInfX1cIlxuICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJtb250aE9mWWVhclwiPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ+Li4uPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInt7b3B0LnZhbHVlfX1cIiAqbmdGb3I9XCJsZXQgb3B0IG9mIG1vbnRoc09mWWVhck9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAge3tvcHQudGV4dCB8IGNyb25Kb2JIeXBlclRyYW5zfX1cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJtYi0zIHJvd1wiICpuZ0lmPVwidmlzaWJpbHR5Q2ZnLmRheU9mTW9udGhcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLTEyIGNvbC1tZC00IGNvbC1mb3JtLWxhYmVsXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7cHJlZml4ICsgJ3NjaGVkdWxlLWRheS1vZi1tb250aCd9fVwiPlxuICAgICAgICAgICAge3sncG9scENyb25Kb2IuZGF5T2ZNb250aCcgfCBjcm9uSm9iSHlwZXJUcmFuc319XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgY29sLW1kLThcIj5cbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cInt7cHJlZml4ICsgJ3NjaGVkdWxlLWRheS1vZi1tb250aCd9fVwiXG4gICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cImRheU9mTW9udGhcIj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkIHZhbHVlPVwiXCI+Li4uPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInt7b3B0LnZhbHVlfX1cIiAqbmdGb3I9XCJsZXQgb3B0IG9mIGRheXNPZk1vbnRoT3B0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICB7e29wdC50ZXh0fX1cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuXG4gICAgPGRpdiBjbGFzcz1cIm1iLTMgcm93XCIgKm5nSWY9XCJ2aXNpYmlsdHlDZmcuZGF5T2ZXZWVrXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC0xMiBjb2wtbWQtNCBjb2wtZm9ybS1sYWJlbFwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e3ByZWZpeCArICdzY2hlZHVsZS1kYXktb2Ytd2Vlayd9fVwiPlxuICAgICAgICAgICAge3sncG9scENyb25Kb2IuZGF5T2ZXZWVrJyB8IGNyb25Kb2JIeXBlclRyYW5zfX1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtbWQtOFwiPlxuICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwie3twcmVmaXggKyAnc2NoZWR1bGUtZGF5LW9mLXdlZWsnfX1cIlxuICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJkYXlPZldlZWtcIj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkIHZhbHVlPVwiXCI+Li4uPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInt7b3B0LnZhbHVlfX1cIiAqbmdGb3I9XCJsZXQgb3B0IG9mIGRheXNPZldlZWtPcHRpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7b3B0LnRleHQgfCBjcm9uSm9iSHlwZXJUcmFuc319XG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwibWItMyByb3dcIiAqbmdJZj1cInZpc2liaWx0eUNmZy50aW1lXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC0xMiBjb2wtbWQtNCBjb2wtZm9ybS1sYWJlbFwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e3ByZWZpeCArICdzY2hlZHVsZS10aW1lJ319XCI+XG4gICAgICAgICAgICB7eydwb2xwQ3JvbkpvYi50aW1lJyB8IGNyb25Kb2JIeXBlclRyYW5zfX1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtbWQtOFwiPlxuICAgICAgICAgICAgPHRpbWVwaWNrZXIgaWQ9XCJ7e3ByZWZpeCArICdzY2hlZHVsZS10aW1lJ319XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInRpbWVcIj5cbiAgICAgICAgICAgIDwvdGltZXBpY2tlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwibWItMyByb3dcIiAqbmdJZj1cInZpc2liaWx0eUNmZy5leGNsdWRlSG9saWRheXNcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLTEyIGNvbC1tZC00IGNvbC1mb3JtLWxhYmVsXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7cHJlZml4ICsgJ3NjaGVkdWxlLWV4Y2x1ZGUtaG9saWRheXMnfX1cIj5cbiAgICAgICAgICAgIHt7J3BvbHBDcm9uSm9iLmV4Y2x1ZGVIb2xpZGF5cycgfCBjcm9uSm9iSHlwZXJUcmFuc319XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgY29sLW1kLThcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dCBwb3NpdGlvbi1zdGF0aWNcIlxuICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICBpZD1cInt7cHJlZml4ICsgJ3NjaGVkdWxlLWV4Y2x1ZGUtaG9saWRheXMnfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJleGNsdWRlSG9saWRheXNcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImlzSG9saWRheXNFeGNsdWRlZFwiPlxuICAgICAgICAgICAgICAgIHt7aG9saWRheXN9fVxuICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIWhvbGlkYXlzXCI+e3sncG9scENyb25Kb2Iubm90U2V0WWV0JyB8IGNyb25Kb2JIeXBlclRyYW5zfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tbGluayB0ZXh0LWluZm9cIiAoY2xpY2spPVwidXBkYXRlSG9saWRheXNBc3luYygpXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7J3BvbHBDcm9uSm9iLmVkaXRCdG4nIHwgY3JvbkpvYkh5cGVyVHJhbnN9fVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtYi0zIHJvd1wiICpuZ0lmPVwidmlzaWJpbHR5Q2ZnLmV4Y2x1ZGVXZWVrZW5kc1wiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtMTIgY29sLW1kLTQgY29sLWZvcm0tbGFiZWxcIlxuICAgICAgICAgICAgICAgZm9yPVwie3twcmVmaXggKyAnc2NoZWR1bGUtZXhjbHVkZS13ZWVrZW5kcyd9fVwiPlxuICAgICAgICAgICAge3sncG9scENyb25Kb2IuZXhjbHVkZVdlZWtlbmRzJyB8IGNyb25Kb2JIeXBlclRyYW5zfX1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtbWQtOFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0IHBvc2l0aW9uLXN0YXRpY1wiXG4gICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3twcmVmaXggKyAnc2NoZWR1bGUtZXhjbHVkZS13ZWVrZW5kcyd9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cImV4Y2x1ZGVXZWVrZW5kc1wiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtYi0zIHJvd1wiICpuZ0lmPVwidmlzaWJpbHR5Q2ZnLmV4Y2x1ZGVPdGhlcnNcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLTEyIGNvbC1tZC00IGNvbC1mb3JtLWxhYmVsXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7cHJlZml4ICsgJ3NjaGVkdWxlLWV4Y2x1ZGUtb3RoZXJzJ319XCI+XG4gICAgICAgICAgICB7eydwb2xwQ3JvbkpvYi5leGNsdWRlT3RoZXJzJyB8IGNyb25Kb2JIeXBlclRyYW5zfX1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtbWQtOFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0IHBvc2l0aW9uLXN0YXRpY1wiXG4gICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3twcmVmaXggKyAnc2NoZWR1bGUtZXhjbHVkZS1vdGhlcnMnfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJleGNsdWRlT3RoZXJzXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJpc090aGVyc0V4Y2x1ZGVkXCI+XG4gICAgICAgICAgICAgICAge3tvdGhlckRheXN9fVxuICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIW90aGVyRGF5c1wiPnt7J3BvbHBDcm9uSm9iLm5vdFNldFlldCcgfCBjcm9uSm9iSHlwZXJUcmFuc319PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWxpbmsgdGV4dC1pbmZvXCIgKGNsaWNrKT1cInVwZGF0ZU90aGVyRGF5c0FzeW5jKClcIj5cbiAgICAgICAgICAgICAgICAgICAge3sncG9scENyb25Kb2IuZWRpdEJ0bicgfCBjcm9uSm9iSHlwZXJUcmFuc319XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwibWItMyByb3dcIiAqbmdJZj1cInZpc2liaWx0eUNmZy5lbmREYXRlXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC0xMiBjb2wtbWQtNCBjb2wtZm9ybS1sYWJlbFwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e3ByZWZpeCArICdzY2hlZHVsZS1lbmQtZGF0ZSd9fVwiPlxuICAgICAgICAgICAge3sncG9scENyb25Kb2IuZW5kRGF0ZScgfCBjcm9uSm9iSHlwZXJUcmFuc319XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgY29sLW1kLThcIj5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgIGlkPVwie3twcmVmaXggKyAnc2NoZWR1bGUtZW5kLWRhdGUnfX1cIlxuICAgICAgICAgICAgICAgICAgIGJzRGF0ZXBpY2tlclxuICAgICAgICAgICAgICAgICAgIFtic0NvbmZpZ109XCJ7IGFkYXB0aXZlUG9zaXRpb246IHRydWUgfVwiXG4gICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiZW5kRGF0ZVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGEgb2YgYWxlcnRzXCI+XG4gICAgICAgIDxhbGVydCBbdHlwZV09XCJhLnR5cGVcIiBbZGlzbWlzc09uVGltZW91dF09XCJhLnRpbWVvdXRcIj5cbiAgICAgICAgICAgIHt7YS5tZXNzYWdlIHwgY3JvbkpvYkh5cGVyVHJhbnN9fVxuICAgICAgICA8L2FsZXJ0PlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIFxuICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCBtYi00XCIgKm5nSWY9XCIhaGlkZVN1Ym1pdEJ0biB8fCAhaGlkZUNhbmNlbEJ0blwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4td2FybmluZ1wiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImNhbmNlbCgpXCIgKm5nSWY9XCIhaGlkZUNhbmNlbEJ0blwiPlxuICAgICAgICAgICAge3sncG9scENyb25Kb2IuY2FuY2VsQnRuJyB8IGNyb25Kb2JIeXBlclRyYW5zfX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCJcbiAgICAgICAgICAgICAgICAqbmdJZj1cIiFoaWRlU3VibWl0QnRuXCI+XG4gICAgICAgICAgICB7eydwb2xwQ3JvbkpvYi5zdWJtaXRCdG4nIHwgY3JvbkpvYkh5cGVyVHJhbnN9fVxuICAgICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbjwvZm9ybT5cbiJdfQ==