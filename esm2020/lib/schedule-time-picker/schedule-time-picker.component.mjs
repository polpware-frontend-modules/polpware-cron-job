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
function ScheduleTimePickerComponent_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelement(1, "input", 10);
    i0.ɵɵelementStart(2, "label", 11);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "cronJobHyperTrans");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const opt_r16 = ctx.$implicit;
    const i_r17 = ctx.index;
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("id", ctx_r14.prefix + "schedule-type-opt-" + i_r17);
    i0.ɵɵpropertyInterpolate("value", opt_r16.value);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("for", ctx_r14.prefix + "schedule-type-opt-" + i_r17);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(4, 4, opt_r16.text), " ");
} }
function ScheduleTimePickerComponent_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "cronJobHyperTrans");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "polpCronJob.errors.scheduleTypeRequired"), " ");
} }
function ScheduleTimePickerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4)(1, "label", 5);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "cronJobHyperTrans");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 6);
    i0.ɵɵtemplate(5, ScheduleTimePickerComponent_div_1_div_5_Template, 5, 6, "div", 7);
    i0.ɵɵtemplate(6, ScheduleTimePickerComponent_div_1_div_6_Template, 3, 3, "div", 8);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 3, "polpCronJob.scheduleType"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r0.scheduleTypeOptions);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.form.hasError("scheduleType") && (ctx_r0.form.get("scheduleType").dirty || ctx_r0.form.get("scheduleType").touched));
} }
function ScheduleTimePickerComponent_div_2_option_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 17);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "cronJobHyperTrans");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r19 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("value", opt_r19.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, opt_r19.text), " ");
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
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("for", ctx_r1.prefix + "schedule-recurrence");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 5, "polpCronJob.recurrence"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("id", ctx_r1.prefix + "schedule-recurrence");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(8, 7, "polpCronJob.selectOne"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.recurrenceOptions);
} }
function ScheduleTimePickerComponent_div_3_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "cronJobHyperTrans");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r20 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("id", ctx_r20.prefix + "schedule-custom-expr-helper");
    i0.ɵɵadvance(1);
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
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("for", ctx_r2.prefix + "schedule-custom-expr");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 6, "polpCronJob.customExpr"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("id", ctx_r2.prefix + "schedule-custom-expr");
    i0.ɵɵpropertyInterpolate("aria-describedby", ctx_r2.prefix + "schedule-custom-expr-helper");
    i0.ɵɵproperty("autofocus", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.form.hasError("customExpr") && (ctx_r2.form.get("customExpr").dirty || ctx_r2.form.get("customExpr").touched));
} }
const _c0 = function () { return { adaptivePosition: true }; };
function ScheduleTimePickerComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4)(1, "label", 13);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "cronJobHyperTrans");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 6);
    i0.ɵɵelement(5, "input", 21);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("for", ctx_r3.prefix + "schedule-start-date");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 4, "polpCronJob.startDate"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("id", ctx_r3.prefix + "schedule-start-date");
    i0.ɵɵproperty("bsConfig", i0.ɵɵpureFunction0(6, _c0));
} }
function ScheduleTimePickerComponent_div_5_option_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 17);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "cronJobHyperTrans");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r22 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("value", opt_r22.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, opt_r22.text), " ");
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
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("for", ctx_r4.prefix + "schedule-month-of-year");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 4, "polpCronJob.monthOfYear"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("id", ctx_r4.prefix + "schedule-month-of-year");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r4.monthsOfYearOptions);
} }
function ScheduleTimePickerComponent_div_6_option_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r24 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("value", opt_r24.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", opt_r24.text, " ");
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
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("for", ctx_r5.prefix + "schedule-day-of-month");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 4, "polpCronJob.dayOfMonth"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("id", ctx_r5.prefix + "schedule-day-of-month");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r5.daysOfMonthOptions);
} }
function ScheduleTimePickerComponent_div_7_option_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 17);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "cronJobHyperTrans");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r26 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("value", opt_r26.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, opt_r26.text), " ");
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
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("for", ctx_r6.prefix + "schedule-day-of-week");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 4, "polpCronJob.dayOfWeek"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("id", ctx_r6.prefix + "schedule-day-of-week");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r6.daysOfWeekOptions);
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
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("for", ctx_r7.prefix + "schedule-time");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 3, "polpCronJob.time"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("id", ctx_r7.prefix + "schedule-time");
} }
function ScheduleTimePickerComponent_div_9_div_7_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "cronJobHyperTrans");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "polpCronJob.notSetYet"));
} }
function ScheduleTimePickerComponent_div_9_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, ScheduleTimePickerComponent_div_9_div_7_span_2_Template, 3, 3, "span", 29);
    i0.ɵɵelementStart(3, "button", 30);
    i0.ɵɵlistener("click", function ScheduleTimePickerComponent_div_9_div_7_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r30); const ctx_r29 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r29.updateHolidaysAsync()); });
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "cronJobHyperTrans");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r27 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r27.holidays, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r27.holidays);
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
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("for", ctx_r8.prefix + "schedule-exclude-holidays");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 4, "polpCronJob.excludeHolidays"), " ");
    i0.ɵɵadvance(4);
    i0.ɵɵpropertyInterpolate("id", ctx_r8.prefix + "schedule-exclude-holidays");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.isHolidaysExcluded);
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
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("for", ctx_r9.prefix + "schedule-exclude-weekends");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 3, "polpCronJob.excludeWeekends"), " ");
    i0.ɵɵadvance(4);
    i0.ɵɵpropertyInterpolate("id", ctx_r9.prefix + "schedule-exclude-weekends");
} }
function ScheduleTimePickerComponent_div_11_div_7_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "cronJobHyperTrans");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "polpCronJob.notSetYet"));
} }
function ScheduleTimePickerComponent_div_11_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, ScheduleTimePickerComponent_div_11_div_7_span_2_Template, 3, 3, "span", 29);
    i0.ɵɵelementStart(3, "button", 30);
    i0.ɵɵlistener("click", function ScheduleTimePickerComponent_div_11_div_7_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r34); const ctx_r33 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r33.updateOtherDaysAsync()); });
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "cronJobHyperTrans");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r31 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r31.otherDays, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r31.otherDays);
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
    const ctx_r10 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("for", ctx_r10.prefix + "schedule-exclude-others");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 4, "polpCronJob.excludeOthers"), " ");
    i0.ɵɵadvance(4);
    i0.ɵɵpropertyInterpolate("id", ctx_r10.prefix + "schedule-exclude-others");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r10.isOthersExcluded);
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
    const ctx_r11 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("for", ctx_r11.prefix + "schedule-end-date");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 4, "polpCronJob.endDate"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("id", ctx_r11.prefix + "schedule-end-date");
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
    const a_r35 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("type", a_r35.type)("dismissOnTimeout", a_r35.timeout);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 3, a_r35.message), " ");
} }
function ScheduleTimePickerComponent_div_14_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 38);
    i0.ɵɵlistener("click", function ScheduleTimePickerComponent_div_14_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r39); const ctx_r38 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r38.cancel()); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "cronJobHyperTrans");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "polpCronJob.cancelBtn"), " ");
} }
function ScheduleTimePickerComponent_div_14_button_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 39);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "cronJobHyperTrans");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "polpCronJob.submitBtn"), " ");
} }
function ScheduleTimePickerComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35);
    i0.ɵɵtemplate(1, ScheduleTimePickerComponent_div_14_button_1_Template, 3, 3, "button", 36);
    i0.ɵɵtemplate(2, ScheduleTimePickerComponent_div_14_button_2_Template, 3, 3, "button", 37);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r13.hideCancelBtn);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r13.hideSubmitBtn);
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
}
ScheduleTimePickerComponent.ɵfac = function ScheduleTimePickerComponent_Factory(t) { return new (t || ScheduleTimePickerComponent)(i0.ɵɵdirectiveInject(i1.UntypedFormBuilder), i0.ɵɵdirectiveInject(i2.LowLevelUtilsService)); };
ScheduleTimePickerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ScheduleTimePickerComponent, selectors: [["polp-bs-schedule-time-picker"]], inputs: { initSettings: "initSettings", initValue: "initValue", defaultHolidays: "defaultHolidays" }, outputs: { childStateChanged: "childStateChanged" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 15, vars: 15, consts: [[3, "formGroup", "ngSubmit"], ["class", "mb-3 row", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-end mb-4", 4, "ngIf"], [1, "mb-3", "row"], [1, "col-12", "col-md-4", "col-form-label"], [1, "col-12", "col-md-8"], ["class", "form-check form-check-inline", 4, "ngFor", "ngForOf"], ["class", "d-block form-text text-warning my-1", 4, "ngIf"], [1, "form-check", "form-check-inline"], ["formControlName", "scheduleType", "type", "radio", 1, "form-check-input", 3, "id", "value"], [1, "form-check-label", 3, "for"], [1, "d-block", "form-text", "text-warning", "my-1"], [1, "col-12", "col-md-4", "col-form-label", 3, "for"], ["formControlName", "recurrence", 1, "form-control", 3, "id"], ["selected", "", "value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["type", "text", "formControlName", "customExpr", 1, "form-control", 3, "autofocus", "id", "aria-describedby"], ["class", "form-text text-warning d-block my-1", 3, "id", 4, "ngIf"], [1, "form-text", "text-warning", "d-block", "my-1", 3, "id"], ["type", "text", "bsDatepicker", "", "formControlName", "startDate", 1, "form-control", 3, "id", "bsConfig"], ["formControlName", "monthOfYear", 1, "form-control", 3, "id"], ["selected", ""], ["formControlName", "dayOfMonth", 1, "form-control", 3, "id"], ["formControlName", "dayOfWeek", 1, "form-control", 3, "id"], ["formControlName", "time", 3, "id"], [1, "form-check"], ["type", "checkbox", "formControlName", "excludeHolidays", 1, "form-check-input", "position-static", 3, "id"], [4, "ngIf"], [1, "btn", "btn-link", "text-info", 3, "click"], ["type", "checkbox", "formControlName", "excludeWeekends", 1, "form-check-input", "position-static", 3, "id"], ["type", "checkbox", "formControlName", "excludeOthers", 1, "form-check-input", "position-static", 3, "id"], ["type", "text", "bsDatepicker", "", "formControlName", "endDate", 1, "form-control", 3, "id", "bsConfig"], [3, "type", "dismissOnTimeout"], [1, "d-flex", "justify-content-end", "mb-4"], ["type", "button", "class", "btn btn-warning", 3, "click", 4, "ngIf"], ["type", "submit", "class", "btn btn-success", 4, "ngIf"], ["type", "button", 1, "btn", "btn-warning", 3, "click"], ["type", "submit", 1, "btn", "btn-success"]], template: function ScheduleTimePickerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵlistener("ngSubmit", function ScheduleTimePickerComponent_Template_form_ngSubmit_0_listener() { return ctx.confirm(); });
        i0.ɵɵtemplate(1, ScheduleTimePickerComponent_div_1_Template, 7, 5, "div", 1);
        i0.ɵɵtemplate(2, ScheduleTimePickerComponent_div_2_Template, 10, 9, "div", 1);
        i0.ɵɵtemplate(3, ScheduleTimePickerComponent_div_3_Template, 7, 8, "div", 1);
        i0.ɵɵtemplate(4, ScheduleTimePickerComponent_div_4_Template, 6, 7, "div", 1);
        i0.ɵɵtemplate(5, ScheduleTimePickerComponent_div_5_Template, 9, 6, "div", 1);
        i0.ɵɵtemplate(6, ScheduleTimePickerComponent_div_6_Template, 9, 6, "div", 1);
        i0.ɵɵtemplate(7, ScheduleTimePickerComponent_div_7_Template, 9, 6, "div", 1);
        i0.ɵɵtemplate(8, ScheduleTimePickerComponent_div_8_Template, 6, 5, "div", 1);
        i0.ɵɵtemplate(9, ScheduleTimePickerComponent_div_9_Template, 8, 6, "div", 1);
        i0.ɵɵtemplate(10, ScheduleTimePickerComponent_div_10_Template, 7, 5, "div", 1);
        i0.ɵɵtemplate(11, ScheduleTimePickerComponent_div_11_Template, 8, 6, "div", 1);
        i0.ɵɵtemplate(12, ScheduleTimePickerComponent_div_12_Template, 6, 7, "div", 1);
        i0.ɵɵtemplate(13, ScheduleTimePickerComponent_ng_container_13_Template, 4, 5, "ng-container", 2);
        i0.ɵɵtemplate(14, ScheduleTimePickerComponent_div_14_Template, 3, 2, "div", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.visibiltyCfg.scheduleType);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.visibiltyCfg.recurrence);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.visibiltyCfg.recurrence && ctx.visibiltyCfg.customExpr);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.visibiltyCfg.startDate);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.visibiltyCfg.monthOfYear);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.visibiltyCfg.dayOfMonth);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.visibiltyCfg.dayOfWeek);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.visibiltyCfg.time);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.visibiltyCfg.excludeHolidays);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.visibiltyCfg.excludeWeekends);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.visibiltyCfg.excludeOthers);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.visibiltyCfg.endDate);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.alerts);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.hideSubmitBtn || !ctx.hideCancelBtn);
    } }, dependencies: [i3.NgForOf, i3.NgIf, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.CheckboxControlValueAccessor, i1.SelectControlValueAccessor, i1.RadioControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, i4.AlertComponent, i5.BsDatepickerDirective, i5.BsDatepickerInputDirective, i6.TimepickerComponent, i7.AutofocusDirective, i8.CronJobHyperTransPipe] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ScheduleTimePickerComponent, [{
        type: Component,
        args: [{ selector: 'polp-bs-schedule-time-picker', template: "<form [formGroup]=\"form\" (ngSubmit)=\"confirm()\">\n    <div class=\"mb-3 row\" *ngIf=\"visibiltyCfg.scheduleType\">\n        <label class=\"col-12 col-md-4 col-form-label\">\n            {{'polpCronJob.scheduleType' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <div class=\"form-check form-check-inline\"\n                 *ngFor=\"let opt of scheduleTypeOptions;let i=index\">\n                <input class=\"form-check-input\"\n                       formControlName=\"scheduleType\"\n                       type=\"radio\"\n                       id=\"{{prefix + 'schedule-type-opt-' + i}}\"\n                       value=\"{{opt.value}}\">\n                <label class=\"form-check-label\"\n                       for=\"{{prefix + 'schedule-type-opt-' + i}}\">\n                    {{opt.text | cronJobHyperTrans}}\n                </label>\n            </div>\n            <div class=\"d-block form-text text-warning my-1\"\n                 *ngIf=\"form.hasError('scheduleType') && (form.get('scheduleType').dirty || form.get('scheduleType').touched)\">\n                {{'polpCronJob.errors.scheduleTypeRequired' | cronJobHyperTrans}}\n            </div>\n        </div>\n    </div>\n    \n    <div class=\"mb-3 row\" *ngIf=\"visibiltyCfg.recurrence\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-recurrence'}}\">\n            {{'polpCronJob.recurrence' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <select class=\"form-control\"\n                    id=\"{{prefix + 'schedule-recurrence'}}\"\n                    formControlName=\"recurrence\">\n                <option selected value=\"\">{{'polpCronJob.selectOne' | cronJobHyperTrans}}</option>\n                <option value=\"{{opt.value}}\" *ngFor=\"let opt of recurrenceOptions\">\n                    {{opt.text | cronJobHyperTrans}}\n                </option>\n            </select>\n        </div>\n    </div>\n\n    <div class=\"mb-3 row\" *ngIf=\"visibiltyCfg.recurrence && visibiltyCfg.customExpr\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-custom-expr'}}\">\n            {{'polpCronJob.customExpr' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <input class=\"form-control\"\n                   type=\"text\"\n                   [autofocus]=\"true\"\n                   id=\"{{prefix + 'schedule-custom-expr'}}\"\n                   aria-describedby=\"{{prefix + 'schedule-custom-expr-helper'}}\"\n                   formControlName=\"customExpr\">\n            <div id=\"{{prefix + 'schedule-custom-expr-helper'}}\"\n                 class=\"form-text text-warning d-block my-1\"\n                 *ngIf=\"form.hasError('customExpr') && (form.get('customExpr').dirty || form.get('customExpr').touched)\">\n                {{'polpCronJob.errors.customExprInvalid' | cronJobHyperTrans}}\n            </div>\n        </div>\n    </div>\n\n    <div class=\"mb-3 row\" *ngIf=\"visibiltyCfg.startDate\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-start-date'}}\">\n            {{'polpCronJob.startDate' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <input class=\"form-control\"\n                   type=\"text\"\n                   id=\"{{prefix + 'schedule-start-date'}}\"\n                   bsDatepicker\n                   [bsConfig]=\"{ adaptivePosition: true }\"\n                   formControlName=\"startDate\">\n        </div>\n    </div>\n\n\n    <div class=\"mb-3 row\" *ngIf=\"visibiltyCfg.monthOfYear\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-month-of-year'}}\">\n            {{'polpCronJob.monthOfYear' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <select class=\"form-control\"\n                    id=\"{{prefix + 'schedule-month-of-year'}}\"\n                    formControlName=\"monthOfYear\">\n                <option selected>...</option>\n                <option value=\"{{opt.value}}\" *ngFor=\"let opt of monthsOfYearOptions\">\n                    {{opt.text | cronJobHyperTrans}}\n                </option>\n            </select>\n        </div>\n    </div>\n\n    <div class=\"mb-3 row\" *ngIf=\"visibiltyCfg.dayOfMonth\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-day-of-month'}}\">\n            {{'polpCronJob.dayOfMonth' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <select class=\"form-control\"\n                    id=\"{{prefix + 'schedule-day-of-month'}}\"\n                    formControlName=\"dayOfMonth\">\n                <option selected value=\"\">...</option>\n                <option value=\"{{opt.value}}\" *ngFor=\"let opt of daysOfMonthOptions\">\n                    {{opt.text}}\n                </option>\n            </select>\n        </div>\n    </div>\n\n\n    <div class=\"mb-3 row\" *ngIf=\"visibiltyCfg.dayOfWeek\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-day-of-week'}}\">\n            {{'polpCronJob.dayOfWeek' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <select class=\"form-control\"\n                    id=\"{{prefix + 'schedule-day-of-week'}}\"\n                    formControlName=\"dayOfWeek\">\n                <option selected value=\"\">...</option>\n                <option value=\"{{opt.value}}\" *ngFor=\"let opt of daysOfWeekOptions\">\n                    {{opt.text | cronJobHyperTrans}}\n                </option>\n            </select>\n        </div>\n    </div>\n\n    <div class=\"mb-3 row\" *ngIf=\"visibiltyCfg.time\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-time'}}\">\n            {{'polpCronJob.time' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <timepicker id=\"{{prefix + 'schedule-time'}}\"\n                        formControlName=\"time\">\n            </timepicker>\n        </div>\n    </div>\n\n    <div class=\"mb-3 row\" *ngIf=\"visibiltyCfg.excludeHolidays\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-exclude-holidays'}}\">\n            {{'polpCronJob.excludeHolidays' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <div class=\"form-check\">\n                <input class=\"form-check-input position-static\"\n                       type=\"checkbox\"\n                       id=\"{{prefix + 'schedule-exclude-holidays'}}\"\n                       formControlName=\"excludeHolidays\">\n            </div>\n            <div *ngIf=\"isHolidaysExcluded\">\n                {{holidays}}\n                <span *ngIf=\"!holidays\">{{'polpCronJob.notSetYet' | cronJobHyperTrans}}</span>\n                <button class=\"btn btn-link text-info\" (click)=\"updateHolidaysAsync()\">\n                    {{'polpCronJob.editBtn' | cronJobHyperTrans}}\n                </button>\n            </div>\n        </div>\n    </div>\n    <div class=\"mb-3 row\" *ngIf=\"visibiltyCfg.excludeWeekends\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-exclude-weekends'}}\">\n            {{'polpCronJob.excludeWeekends' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <div class=\"form-check\">\n                <input class=\"form-check-input position-static\"\n                       type=\"checkbox\"\n                       id=\"{{prefix + 'schedule-exclude-weekends'}}\"\n                       formControlName=\"excludeWeekends\">\n            </div>\n        </div>\n    </div>\n    <div class=\"mb-3 row\" *ngIf=\"visibiltyCfg.excludeOthers\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-exclude-others'}}\">\n            {{'polpCronJob.excludeOthers' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <div class=\"form-check\">\n                <input class=\"form-check-input position-static\"\n                       id=\"{{prefix + 'schedule-exclude-others'}}\"\n                       type=\"checkbox\"\n                       formControlName=\"excludeOthers\">\n            </div>\n            <div *ngIf=\"isOthersExcluded\">\n                {{otherDays}}\n                <span *ngIf=\"!otherDays\">{{'polpCronJob.notSetYet' | cronJobHyperTrans}}</span>\n                <button class=\"btn btn-link text-info\" (click)=\"updateOtherDaysAsync()\">\n                    {{'polpCronJob.editBtn' | cronJobHyperTrans}}\n                </button>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"mb-3 row\" *ngIf=\"visibiltyCfg.endDate\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"{{prefix + 'schedule-end-date'}}\">\n            {{'polpCronJob.endDate' | cronJobHyperTrans}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <input class=\"form-control\"\n                   type=\"text\"\n                   id=\"{{prefix + 'schedule-end-date'}}\"\n                   bsDatepicker\n                   [bsConfig]=\"{ adaptivePosition: true }\"\n                   formControlName=\"endDate\">\n        </div>\n    </div>\n\n    <ng-container *ngFor=\"let a of alerts\">\n        <alert [type]=\"a.type\" [dismissOnTimeout]=\"a.timeout\">\n            {{a.message | cronJobHyperTrans}}\n        </alert>\n    </ng-container>\n    \n    <div class=\"d-flex justify-content-end mb-4\" *ngIf=\"!hideSubmitBtn || !hideCancelBtn\">\n        <button type=\"button\" class=\"btn btn-warning\"\n                (click)=\"cancel()\" *ngIf=\"!hideCancelBtn\">\n            {{'polpCronJob.cancelBtn' | cronJobHyperTrans}}\n        </button>\n        <button type=\"submit\" class=\"btn btn-success\"\n                *ngIf=\"!hideSubmitBtn\">\n            {{'polpCronJob.submitBtn' | cronJobHyperTrans}}\n        </button>\n    </div>\n</form>\n" }]
    }], function () { return [{ type: i1.UntypedFormBuilder }, { type: i2.LowLevelUtilsService }]; }, { initSettings: [{
            type: Input
        }], initValue: [{
            type: Input
        }], defaultHolidays: [{
            type: Input
        }], childStateChanged: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUtdGltZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcG9scHdhcmUvY3Jvbi1qb2Ivc3JjL2xpYi9zY2hlZHVsZS10aW1lLXBpY2tlci9zY2hlZHVsZS10aW1lLXBpY2tlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9jcm9uLWpvYi9zcmMvbGliL3NjaGVkdWxlLXRpbWUtcGlja2VyL3NjaGVkdWxlLXRpbWUtcGlja2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBZ0MsTUFBTSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUdwSCxPQUFPLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BILE9BQU8sRUFBRSxnQkFBZ0IsRUFBb0IsTUFBTSxxQkFBcUIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsd0JBQXdCLEVBQXNCLE1BQU0sMkJBQTJCLENBQUM7QUFDekYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUUxQyxPQUFPLEVBQUUsc0JBQXNCLEVBQWlCLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7OztJQ0Y1RSw4QkFDeUQ7SUFDckQsNEJBSTZCO0lBQzdCLGlDQUNtRDtJQUMvQyxZQUNKOztJQUFBLGlCQUFRLEVBQUE7Ozs7O0lBTEQsZUFBMEM7SUFBMUMsNkVBQTBDO0lBQzFDLGdEQUFxQjtJQUVyQixlQUEyQztJQUEzQyw4RUFBMkM7SUFDOUMsZUFDSjtJQURJLG1FQUNKOzs7SUFFSiwrQkFDbUg7SUFDL0csWUFDSjs7SUFBQSxpQkFBTTs7SUFERixlQUNKO0lBREksZ0dBQ0o7OztJ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QUFTLElBQUM7UUFDM0MsNEVBc0JNO1FBRU4sNkVBZU07UUFFTiw0RUFrQk07UUFFTiw0RUFhTTtRQUdOLDRFQWVNO1FBRU4sNEVBZU07UUFHTiw0RUFlTTtRQUVOLDRFQVVNO1FBRU4sNEVBb0JNO1FBQ04sOEVBYU07UUFDTiw4RUFvQk07UUFFTiw4RUFhTTtRQUVOLGdHQUllO1FBRWYsOEVBU007UUFDVixpQkFBTzs7UUF0T0Qsb0NBQWtCO1FBQ0csZUFBK0I7UUFBL0Isb0RBQStCO1FBd0IvQixlQUE2QjtRQUE3QixrREFBNkI7UUFpQjdCLGVBQXdEO1FBQXhELGlGQUF3RDtRQW9CeEQsZUFBNEI7UUFBNUIsaURBQTRCO1FBZ0I1QixlQUE4QjtRQUE5QixtREFBOEI7UUFpQjlCLGVBQTZCO1FBQTdCLGtEQUE2QjtRQWtCN0IsZUFBNEI7UUFBNUIsaURBQTRCO1FBaUI1QixlQUF1QjtRQUF2Qiw0Q0FBdUI7UUFZdkIsZUFBa0M7UUFBbEMsdURBQWtDO1FBcUJsQyxlQUFrQztRQUFsQyx1REFBa0M7UUFjbEMsZUFBZ0M7UUFBaEMscURBQWdDO1FBc0JoQyxlQUEwQjtRQUExQiwrQ0FBMEI7UUFlckIsZUFBUztRQUFULG9DQUFTO1FBTVMsZUFBc0M7UUFBdEMsK0RBQXNDOzt1RkRwSTNFLDJCQUEyQjtjQUx2QyxTQUFTOzJCQUNJLDhCQUE4Qjt3R0FPL0IsWUFBWTtrQkFBcEIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFFRyxlQUFlO2tCQUF2QixLQUFLO1lBRUksaUJBQWlCO2tCQUExQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVudHlwZWRGb3JtQnVpbGRlciwgVW50eXBlZEZvcm1Db250cm9sLCBVbnR5cGVkRm9ybUdyb3VwLCBWYWxpZGF0aW9uRXJyb3JzLCBWYWxpZGF0b3JGbiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IElDaGlsZE1vZGFsU3RhdGUgfSBmcm9tICdAcG9scHdhcmUvYnMtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBnZXREYXlzT2ZNb250aCwgZ2V0RGF5c09mV2VlaywgZ2V0TW9udGhzT2ZZZWFyLCBJbnRlcnZhbEVudW0sIHNhZmVQYXJzZUludCB9IGZyb20gJ0Bwb2xwd2FyZS9mZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgQWxlcnREZWZhdWx0SW1wbCwgSUhhc0FsZXJ0RmVhdHVyZSB9IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtYWxlcnQnO1xuaW1wb3J0IHsgRGVmYXVsdEZvcm1CYXNlQ29tcG9uZW50LCBJRGVmYXVsdEZvcm1JbnB1dHMgfSBmcm9tICdAcG9scHdhcmUvbmd4LWZvcm0tY29tbW9uJztcbmltcG9ydCB7IHBhcnNlU3RyaW5nIH0gZnJvbSAnY3Jvbi1wYXJzZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBnZXREZWZhdWx0U2NoZWR1bGVUaW1lLCBJU2NoZWR1bGVUaW1lLCBTY2hlZHVsZVR5cGVFbnVtIH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBMb3dMZXZlbFV0aWxzU2VydmljZSB9IGZyb20gJy4uL2xvdy1sZXZlbC11dGlscy5zZXJ2aWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBJU2V0dGluZ3MgZXh0ZW5kcyBJRGVmYXVsdEZvcm1JbnB1dHMge1xuICAgIGhpZGVTdWJtaXRCdG4/OiBib29sZWFuO1xuICAgIGhpZGVDYW5jZWxCdG4/OiBib29sZWFuO1xuICAgIGVuYWJsZUFzYXA/OiBib29sZWFuO1xufVxuXG5jb25zdCBkZWZhdWx0U2V0dGluZ3M6IElTZXR0aW5ncyA9IHtcbiAgICBoaWRlU3VibWl0QnRuOiBmYWxzZSxcbiAgICBoaWRlQ2FuY2VsQnRuOiB0cnVlLFxuICAgIGVuYWJsZUFzYXA6IGZhbHNlXG59XG5cbmNvbnN0IGZvcm1WYWxpZGF0b3I6IFZhbGlkYXRvckZuID0gKGNvbnRyb2w6IFVudHlwZWRGb3JtR3JvdXApOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG5cbiAgICBjb25zdCBzY2hlZHVsZVR5cGVWYWwgPSBzYWZlUGFyc2VJbnQoKGNvbnRyb2wuZ2V0KCdzY2hlZHVsZVR5cGUnKSBhcyBVbnR5cGVkRm9ybUNvbnRyb2wpLnZhbHVlKTtcbiAgICBpZiAoc2NoZWR1bGVUeXBlVmFsID09IDApIHtcbiAgICAgICAgcmV0dXJuIHsgc2NoZWR1bGVUeXBlOiB0cnVlIH07XG4gICAgfVxuICAgIGlmIChzY2hlZHVsZVR5cGVWYWwgPT0gMikgeyAvLyBSZWN1cnJlbnRcbiAgICAgICAgY29uc3QgcmVjdXJyZW5jZVZhbCA9IHNhZmVQYXJzZUludCgoY29udHJvbC5nZXQoJ3JlY3VycmVuY2UnKSBhcyBVbnR5cGVkRm9ybUNvbnRyb2wpLnZhbHVlKTtcbiAgICAgICAgaWYgKHJlY3VycmVuY2VWYWwgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgcmVjdXJyZW5jZTogdHJ1ZSB9XG4gICAgICAgIH0gZWxzZSBpZiAocmVjdXJyZW5jZVZhbCA9PSBJbnRlcnZhbEVudW0uQ3VzdG9tKSB7XG4gICAgICAgICAgICBjb25zdCBjdXN0b21FeHByVmFsID0gKGNvbnRyb2wuZ2V0KCdjdXN0b21FeHByJykgYXMgVW50eXBlZEZvcm1Db250cm9sKS52YWx1ZTtcbiAgICAgICAgICAgIGlmICghY3VzdG9tRXhwclZhbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IGN1c3RvbUV4cHI6IHRydWUgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gdmFsaWRhdGVcbiAgICAgICAgICAgICAgICBjb25zdCByID0gcGFyc2VTdHJpbmcoY3VzdG9tRXhwclZhbCk7XG4gICAgICAgICAgICAgICAgaWYgKHIuZXJyb3JzICYmIE9iamVjdC5rZXlzKHIuZXJyb3JzKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgY3VzdG9tRXhwcjogdHJ1ZSB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZvcm1GaWVsZHMge1xuICAgIHNjaGVkdWxlVHlwZTogbnVtYmVyO1xuICAgIHJlY3VycmVuY2U6IG51bWJlcjtcbiAgICBleGNsdWRlSG9saWRheXM6IGJvb2xlYW47XG4gICAgZXhjbHVkZVdlZWtlbmRzOiBib29sZWFuO1xuICAgIGV4Y2x1ZGVPdGhlcnM6IGJvb2xlYW47XG4gICAgY3VzdG9tRXhwcjogc3RyaW5nO1xuICAgIHN0YXJ0RGF0ZTogRGF0ZTtcbiAgICBlbmREYXRlOiBEYXRlO1xuICAgIG1vbnRoT2ZZZWFyOiBudW1iZXI7XG4gICAgZGF5T2ZNb250aDogbnVtYmVyO1xuICAgIGRheU9mV2VlazogbnVtYmVyO1xuICAgIHRpbWU6IERhdGU7XG59XG5cbmZ1bmN0aW9uIG1hcFRvRm9ybUZpZWxkcyhkYXRhOiBJU2NoZWR1bGVUaW1lKSB7XG4gICAgY29uc3QgZGVmYXVsdERhdGEgPSBnZXREZWZhdWx0U2NoZWR1bGVUaW1lKCk7XG4gICAgZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHREYXRhLCBkYXRhIHx8IHt9KTtcbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBUaGUgdmFsdWUgZm9yIHRoZSByYWRpbyBidXR0b24gaXMgdHlwZSBvZiBzdHJpbmcuXG4gICAgICAgIHNjaGVkdWxlVHlwZTogKGRhdGEuaXNSZWN1cnJlbnQgPyBTY2hlZHVsZVR5cGVFbnVtLlJlY3VycmVudCA6IFNjaGVkdWxlVHlwZUVudW0uT25lVGltZSkudG9TdHJpbmcoKSxcbiAgICAgICAgcmVjdXJyZW5jZTogZGF0YS5yZWN1cnJlbmNlLFxuICAgICAgICBleGNsdWRlSG9saWRheXM6ICEhZGF0YS5ob2xpZGF5cyxcbiAgICAgICAgZXhjbHVkZVdlZWtlbmRzOiBkYXRhLmV4Y2x1ZGVXZWVrZW5kcyxcbiAgICAgICAgZXhjbHVkZU90aGVyczogISFkYXRhLm90aGVyRGF5cyxcbiAgICAgICAgY3VzdG9tRXhwcjogZGF0YS5jdXN0b21FeHByLFxuICAgICAgICBzdGFydERhdGU6IGRhdGEuc3RhcnREYXRlLFxuICAgICAgICBlbmREYXRlOiBkYXRhLmVuZERhdGUsXG4gICAgICAgIHRpbWU6IGRhdGEudGltZSxcbiAgICAgICAgbW9udGhPZlllYXI6IGRhdGEubW9udGhPZlllYXIsXG4gICAgICAgIGRheU9mV2VlazogZGF0YS5kYXlPZldlZWssXG4gICAgICAgIGRheU9mTW9udGg6IGRhdGEuZGF5T2ZNb250aFxuICAgIH07XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncG9scC1icy1zY2hlZHVsZS10aW1lLXBpY2tlcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NjaGVkdWxlLXRpbWUtcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9zY2hlZHVsZS10aW1lLXBpY2tlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2NoZWR1bGVUaW1lUGlja2VyQ29tcG9uZW50IGV4dGVuZHMgRGVmYXVsdEZvcm1CYXNlQ29tcG9uZW50XG4gICAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBJSGFzQWxlcnRGZWF0dXJlIHtcblxuICAgIEBJbnB1dCgpIGluaXRTZXR0aW5nczogSVNldHRpbmdzID0ge307XG4gICAgQElucHV0KCkgaW5pdFZhbHVlOiBJU2NoZWR1bGVUaW1lID0gbnVsbDtcbiAgICAvLyB0b2RvOiBXZSB1c2UgdGhlIGNvbXBhbnktc3BlY2lmaWMgc2V0dGluZ3MgLi4uLlxuICAgIEBJbnB1dCgpIGRlZmF1bHRIb2xpZGF5czogc3RyaW5nID0gJyc7XG5cbiAgICBAT3V0cHV0KCkgY2hpbGRTdGF0ZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPElDaGlsZE1vZGFsU3RhdGU+KCk7XG5cbiAgICBzZXR0aW5nczogSVNldHRpbmdzID0ge307XG5cbiAgICBwcmVmaXggPSAnc3RwLScgKyAobmV3IERhdGUpLmdldFRpbWUoKSArICctJztcblxuICAgIC8vIFNjaGVkdWxlIG1vZGxlXG4gICAgZm9ybTogVW50eXBlZEZvcm1Hcm91cDtcbiAgICBzY2hlZHVsZVR5cGVPcHRpb25zID0gW3tcbiAgICAgICAgdmFsdWU6IFNjaGVkdWxlVHlwZUVudW0uT25lVGltZSxcbiAgICAgICAgdGV4dDogJ3BvbHBDcm9uSm9iLm9uZVRpbWVTY2hlZHVsZSdcbiAgICB9LCB7XG4gICAgICAgIHZhbHVlOiBTY2hlZHVsZVR5cGVFbnVtLlJlY3VycmVudCxcbiAgICAgICAgdGV4dDogJ3BvbHBDcm9uSm9iLnJlY3VycmVudFNjaGVkdWxlJ1xuICAgIH1dO1xuXG4gICAgcmVjdXJyZW5jZU9wdGlvbnMgPSBbe1xuICAgICAgICB2YWx1ZTogSW50ZXJ2YWxFbnVtLkRheSxcbiAgICAgICAgdGV4dDogJ3BvbHBDcm9uSm9iLmV2ZXJ5RGF5J1xuICAgIH0sIHtcbiAgICAgICAgdmFsdWU6IEludGVydmFsRW51bS5XZWVrLFxuICAgICAgICB0ZXh0OiAncG9scENyb25Kb2IuZXZlcnlXZWVrJ1xuICAgIH0sIHtcbiAgICAgICAgdmFsdWU6IEludGVydmFsRW51bS5Nb250aCxcbiAgICAgICAgdGV4dDogJ3BvbHBDcm9uSm9iLmV2ZXJ5TW9udGgnXG4gICAgfSwge1xuICAgICAgICB2YWx1ZTogSW50ZXJ2YWxFbnVtLlllYXIsXG4gICAgICAgIHRleHQ6ICdwb2xwQ3JvbkpvYi5ldmVyeVllYXInXG4gICAgfSwge1xuICAgICAgICB2YWx1ZTogSW50ZXJ2YWxFbnVtLkN1c3RvbSxcbiAgICAgICAgdGV4dDogJ3BvbHBDcm9uSm9iLmN1c3RvbUludGVydmFsJ1xuICAgIH1dO1xuXG4gICAgZGF5c09mV2Vla09wdGlvbnMgPSBnZXREYXlzT2ZXZWVrKCk7XG4gICAgbW9udGhzT2ZZZWFyT3B0aW9ucyA9IGdldE1vbnRoc09mWWVhcigpO1xuICAgIGRheXNPZk1vbnRoT3B0aW9ucyA9IGdldERheXNPZk1vbnRoKCk7XG5cbiAgICB2aXNpYmlsdHlDZmcgPSB7XG4gICAgICAgIHNjaGVkdWxlVHlwZTogdHJ1ZSxcbiAgICAgICAgcmVjdXJyZW5jZTogZmFsc2UsXG4gICAgICAgIGN1c3RvbUV4cHI6IGZhbHNlLFxuICAgICAgICBleGNsdWRlSG9saWRheXM6IGZhbHNlLFxuICAgICAgICBleGNsdWRlV2Vla2VuZHM6IGZhbHNlLFxuICAgICAgICBleGNsdWRlT3RoZXJzOiBmYWxzZSxcbiAgICAgICAgc3RhcnREYXRlOiBmYWxzZSxcbiAgICAgICAgZW5kRGF0ZTogZmFsc2UsXG4gICAgICAgIHRpbWU6IGZhbHNlLFxuICAgICAgICBtb250aE9mWWVhcjogZmFsc2UsXG4gICAgICAgIGRheU9mTW9udGg6IGZhbHNlLFxuICAgICAgICBkYXlPZldlZWs6IGZhbHNlXG4gICAgfTtcblxuICAgIGhvbGlkYXlzOiBzdHJpbmcgPSAnJztcbiAgICBvdGhlckRheXM6IHN0cmluZyA9ICcnO1xuXG4gICAgaXNTYXZpbmc6IGJvb2xlYW47XG4gICAgYWxlcnRQcm92aWRlciA9IG5ldyBBbGVydERlZmF1bHRJbXBsKCk7XG5cbiAgICBwcml2YXRlIF9zdWJyOiBTdWJzY3JpcHRpb247XG4gICAgcHJpdmF0ZSBfc3RvcEV2ZW50UHJvcGFnYXRpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2J1aWxkZXI6IFVudHlwZWRGb3JtQnVpbGRlcixcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfdXRpbHM6IExvd0xldmVsVXRpbHNTZXJ2aWNlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG5cbiAgICBnZXQgYWxlcnRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hbGVydFByb3ZpZGVyLmRhdGE7XG4gICAgfVxuXG4gICAgZ2V0IGlzSG9saWRheXNFeGNsdWRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybS5jb250cm9sc1snZXhjbHVkZUhvbGlkYXlzJ10udmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGlzT3RoZXJzRXhjbHVkZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm0uY29udHJvbHNbJ2V4Y2x1ZGVPdGhlcnMnXS52YWx1ZTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRTZXR0aW5ncywgdGhpcy5pbml0U2V0dGluZ3MpO1xuICAgICAgICB0aGlzLmhpZGVDYW5jZWxCdG4gPSB0aGlzLnNldHRpbmdzLmhpZGVDYW5jZWxCdG47XG4gICAgICAgIHRoaXMuaGlkZVN1Ym1pdEJ0biA9IHRoaXMuc2V0dGluZ3MuaGlkZVN1Ym1pdEJ0bjtcblxuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5lbmFibGVBc2FwKSB7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlVHlwZU9wdGlvbnMgPSBbe1xuICAgICAgICAgICAgICAgIHZhbHVlOiBTY2hlZHVsZVR5cGVFbnVtLkFzYXAsXG4gICAgICAgICAgICAgICAgdGV4dDogJ3BvbHBDcm9uSm9iLmFzYXAnXG4gICAgICAgICAgICB9LCAuLi50aGlzLnNjaGVkdWxlVHlwZU9wdGlvbnNdO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmllbGRzID0gbWFwVG9Gb3JtRmllbGRzKHRoaXMuaW5pdFZhbHVlKTtcbiAgICAgICAgdGhpcy5mb3JtID0gdGhpcy5fYnVpbGRlci5ncm91cChmaWVsZHMsIHsgdmFsaWRhdG9yczogW2Zvcm1WYWxpZGF0b3JdIH0pO1xuICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkVmlzaWJpbGl0eSh0aGlzLmZvcm0udmFsdWUpO1xuXG4gICAgICAgIGlmICh0aGlzLmluaXRWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5ob2xpZGF5cyA9IHRoaXMuaW5pdFZhbHVlLmhvbGlkYXlzIHx8IHRoaXMuZGVmYXVsdEhvbGlkYXlzIHx8ICcnO1xuICAgICAgICAgICAgdGhpcy5vdGhlckRheXMgPSB0aGlzLmluaXRWYWx1ZS5vdGhlckRheXMgfHwgJyc7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zdWJyID0gdGhpcy5mb3JtLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoYSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkVmlzaWJpbGl0eShhKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5fc3RvcEV2ZW50UHJvcGFnYXRpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeVZhbGlkYXRpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeVZhbHVlQ2hhbmdlcyh0aGlzLmNvbXB1dGVPdXRWYWx1ZShhKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLl9zdWJyLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoZGF0YTogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmluaXRWYWx1ZSAmJiAhZGF0YS5pbml0VmFsdWUuZmlyc3RDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0b3BFdmVudFByb3BhZ2F0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRm9ybURhdGEoZGF0YS5pbml0VmFsdWUuY3VycmVudFZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuX3N0b3BFdmVudFByb3BhZ2F0aW9uID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlRm9ybURhdGEoZGF0YTogSVNjaGVkdWxlVGltZSkge1xuICAgICAgICBjb25zdCBjaGFuZ2VzID0gbWFwVG9Gb3JtRmllbGRzKGRhdGEpO1xuICAgICAgICB0aGlzLmhvbGlkYXlzID0gZGF0YS5ob2xpZGF5cyB8fCB0aGlzLmRlZmF1bHRIb2xpZGF5cyB8fCAnJztcbiAgICAgICAgdGhpcy5vdGhlckRheXMgPSBkYXRhLm90aGVyRGF5cyB8fCAnJztcblxuICAgICAgICB0aGlzLmZvcm0ucGF0Y2hWYWx1ZShjaGFuZ2VzLCB7XG4gICAgICAgICAgICBlbWl0RXZlbnQ6IGZhbHNlIC8vIE5vIG5lZWQgdG8gZW1pdCBldmVudCxcbiAgICAgICAgICAgIC8vIEV2ZW4gaW4gdGhpcyBjYXNlLCB0aGUgb25WYWx1ZUNoYW5nZSB3aWxsIGJlIHRyaWdnZXIuXG4gICAgICAgICAgICAvLyBzbyB0aGF0IHdlIGNhbiBnZXQgdGhlIHZhbGlkYXRpb24gY2hhbmdlLlxuICAgICAgICAgICAgLy8gdGhlIGNsaWVudCBzaG91bGQgY29tcGFyZSB0aGUgcmVjZWl2ZWQgdmFsdWUgYW5kIHRoZSBvbGQgdmFsdWUgdG8gZGVjaWRlIGlmXG4gICAgICAgICAgICAvLyBhbnkgZGF0YSBoYXMgYmVlbiBjaGFuZ2VkLiBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHVwZGF0ZUZpZWxkVmlzaWJpbGl0eShhOiBJRm9ybUZpZWxkcykge1xuXG4gICAgICAgIGZvciAobGV0IGsgaW4gdGhpcy52aXNpYmlsdHlDZmcpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnZpc2liaWx0eUNmZy5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJpbHR5Q2ZnW2tdID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcuc2NoZWR1bGVUeXBlID0gdHJ1ZTtcblxuICAgICAgICBjb25zdCBzY2hlZHVsZVR5cGVWYWwgPSBzYWZlUGFyc2VJbnQoYS5zY2hlZHVsZVR5cGUpO1xuXG4gICAgICAgIGlmIChzY2hlZHVsZVR5cGVWYWwgPT0gMSkge1xuICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcuc3RhcnREYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudmlzaWJpbHR5Q2ZnLnRpbWUgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHNjaGVkdWxlVHlwZVZhbCA9PSAyKSB7XG4gICAgICAgICAgICB0aGlzLnZpc2liaWx0eUNmZy5yZWN1cnJlbmNlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudmlzaWJpbHR5Q2ZnLmV4Y2x1ZGVIb2xpZGF5cyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnZpc2liaWx0eUNmZy5leGNsdWRlV2Vla2VuZHMgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcuZXhjbHVkZU90aGVycyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnZpc2liaWx0eUNmZy5lbmREYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudmlzaWJpbHR5Q2ZnLnRpbWUgPSB0cnVlO1xuXG4gICAgICAgICAgICBjb25zdCByZWN1cnJlbnRWYWwgPSBzYWZlUGFyc2VJbnQoYS5yZWN1cnJlbmNlKTtcbiAgICAgICAgICAgIGlmIChyZWN1cnJlbnRWYWwgPT0gSW50ZXJ2YWxFbnVtLlllYXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2liaWx0eUNmZy5tb250aE9mWWVhciA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcuZGF5T2ZNb250aCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlY3VycmVudFZhbCA9PSBJbnRlcnZhbEVudW0uTW9udGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2liaWx0eUNmZy5kYXlPZk1vbnRoID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVjdXJyZW50VmFsID09IEludGVydmFsRW51bS5XZWVrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcuZGF5T2ZXZWVrID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVjdXJyZW50VmFsID09IEludGVydmFsRW51bS5DdXN0b20pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2liaWx0eUNmZy50aW1lID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcuY3VzdG9tRXhwciA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gV2hlbiB0aGUgdHlwZSBpcyAzLCBub3RoaW5nIGlzIHZpc2libGUuXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNvbXB1dGVPdXRWYWx1ZShhOiBJRm9ybUZpZWxkcykge1xuICAgICAgICBjb25zdCBzY2hlZHVsZVR5cGVWYWwgPSBzYWZlUGFyc2VJbnQoYS5zY2hlZHVsZVR5cGUpO1xuICAgICAgICBpZiAoc2NoZWR1bGVUeXBlVmFsID09IFNjaGVkdWxlVHlwZUVudW0uT25lVGltZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0T25lVGltZVZhbHVlKGEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzY2hlZHVsZVR5cGVWYWwgPT0gU2NoZWR1bGVUeXBlRW51bS5SZWN1cnJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFJlY3VycmVudFZhbHVlKGEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzY2hlZHVsZVR5cGVWYWwgPT0gU2NoZWR1bGVUeXBlRW51bS5Bc2FwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRBc2FwVmFsdWUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRBc2FwVmFsdWUoKTogSVNjaGVkdWxlVGltZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc1JlY3VycmVudDogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0T25lVGltZVZhbHVlKGE6IElGb3JtRmllbGRzKTogSVNjaGVkdWxlVGltZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc1JlY3VycmVudDogZmFsc2UsXG4gICAgICAgICAgICBzdGFydERhdGU6IGEuc3RhcnREYXRlLFxuICAgICAgICAgICAgdGltZTogYS50aW1lXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldFJlY3VycmVudFZhbHVlKGE6IElGb3JtRmllbGRzKTogSVNjaGVkdWxlVGltZSB7XG4gICAgICAgIGNvbnN0IHJlY3VycmVuY2UgPSBzYWZlUGFyc2VJbnQoYS5yZWN1cnJlbmNlKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXNSZWN1cnJlbnQ6IHRydWUsXG4gICAgICAgICAgICByZWN1cnJlbmNlOiByZWN1cnJlbmNlLFxuICAgICAgICAgICAgaG9saWRheXM6IGEuZXhjbHVkZUhvbGlkYXlzID8gdGhpcy5ob2xpZGF5cyA6ICcnLFxuICAgICAgICAgICAgZXhjbHVkZVdlZWtlbmRzOiBhLmV4Y2x1ZGVXZWVrZW5kcyxcbiAgICAgICAgICAgIG90aGVyRGF5czogYS5leGNsdWRlT3RoZXJzID8gdGhpcy5vdGhlckRheXMgOiAnJyxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogYS5zdGFydERhdGUsXG4gICAgICAgICAgICBlbmREYXRlOiBhLmVuZERhdGUsXG4gICAgICAgICAgICB0aW1lOiBhLnRpbWUsXG4gICAgICAgICAgICBtb250aE9mWWVhcjogYS5tb250aE9mWWVhcixcbiAgICAgICAgICAgIGRheU9mTW9udGg6IGEuZGF5T2ZNb250aCxcbiAgICAgICAgICAgIGRheU9mV2VlazogYS5kYXlPZldlZWtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25maXJtKCkge1xuICAgICAgICBpZiAoIXRoaXMuZm9ybS52YWxpZCkge1xuICAgICAgICAgICAgdGhpcy5hbGVydFByb3ZpZGVyLndhcm5pbmcoJ3BvbHBDcm9uSm9iLmVycm9ycy5nZW5lcmFsJywgNTAwMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvdXRwdXQgPSB0aGlzLmNvbXB1dGVPdXRWYWx1ZSh0aGlzLmZvcm0udmFsdWUpO1xuICAgICAgICB0aGlzLm9uU2F2ZS5lbWl0KG91dHB1dCk7XG4gICAgfVxuXG4gICAgY2FuY2VsKCkge1xuICAgICAgICB0aGlzLm9uQ2FuY2VsLmVtaXQoKTtcbiAgICB9XG5cbiAgICBhc3luYyB1cGRhdGVIb2xpZGF5c0FzeW5jKCkge1xuICAgICAgICB0aGlzLmNoaWxkU3RhdGVDaGFuZ2VkLmVtaXQoeyBvcGVuZWQ6IHRydWUgfSk7XG4gICAgICAgIGNvbnN0IHJldCA9IGF3YWl0IHRoaXMuX3V0aWxzLnNob3dNdWx0aURhdGVFZGl0b3JBc3luYyh7XG4gICAgICAgICAgICB0aXRsZTogJ3BvbHBDcm9uSm9iLmhvbGlkYXlzRWRpdG9yVGl0bGUnLFxuICAgICAgICAgICAgaW5pdFZhbHVlOiAodGhpcy5ob2xpZGF5cyB8fCAnJykuc3BsaXQoJywnKS5maWx0ZXIoYSA9PiAhIWEpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNoaWxkU3RhdGVDaGFuZ2VkLmVtaXQoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgICAgICBpZiAocmV0KSB7XG4gICAgICAgICAgICB0aGlzLmhvbGlkYXlzID0gcmV0LmpvaW4oJywnKTtcblxuICAgICAgICAgICAgdGhpcy5ub3RpZnlWYWxpZGF0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVZhbHVlQ2hhbmdlcyh0aGlzLmNvbXB1dGVPdXRWYWx1ZSh0aGlzLmZvcm0udmFsdWUpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIHVwZGF0ZU90aGVyRGF5c0FzeW5jKCkge1xuICAgICAgICB0aGlzLmNoaWxkU3RhdGVDaGFuZ2VkLmVtaXQoeyBvcGVuZWQ6IHRydWUgfSk7XG4gICAgICAgIGNvbnN0IHJldCA9IGF3YWl0IHRoaXMuX3V0aWxzLnNob3dNdWx0aURhdGVFZGl0b3JBc3luYyh7XG4gICAgICAgICAgICB0aXRsZTogJ3BvbHBDcm9uSm9iLm90aGVyc0VkaXRvclRpdGxlJyxcbiAgICAgICAgICAgIGluaXRWYWx1ZTogKHRoaXMub3RoZXJEYXlzIHx8ICcnKS5zcGxpdCgnLCcpLmZpbHRlcihhID0+ICEhYSlcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2hpbGRTdGF0ZUNoYW5nZWQuZW1pdCh7IG9wZW5lZDogZmFsc2UgfSk7XG4gICAgICAgIGlmIChyZXQpIHtcbiAgICAgICAgICAgIHRoaXMub3RoZXJEYXlzID0gcmV0LmpvaW4oJywnKTtcblxuICAgICAgICAgICAgdGhpcy5ub3RpZnlWYWxpZGF0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVZhbHVlQ2hhbmdlcyh0aGlzLmNvbXB1dGVPdXRWYWx1ZSh0aGlzLmZvcm0udmFsdWUpKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtXCIgKG5nU3VibWl0KT1cImNvbmZpcm0oKVwiPlxuICAgIDxkaXYgY2xhc3M9XCJtYi0zIHJvd1wiICpuZ0lmPVwidmlzaWJpbHR5Q2ZnLnNjaGVkdWxlVHlwZVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtMTIgY29sLW1kLTQgY29sLWZvcm0tbGFiZWxcIj5cbiAgICAgICAgICAgIHt7J3BvbHBDcm9uSm9iLnNjaGVkdWxlVHlwZScgfCBjcm9uSm9iSHlwZXJUcmFuc319XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgY29sLW1kLThcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCJcbiAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IG9wdCBvZiBzY2hlZHVsZVR5cGVPcHRpb25zO2xldCBpPWluZGV4XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInNjaGVkdWxlVHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3twcmVmaXggKyAnc2NoZWR1bGUtdHlwZS1vcHQtJyArIGl9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3tvcHQudmFsdWV9fVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICBmb3I9XCJ7e3ByZWZpeCArICdzY2hlZHVsZS10eXBlLW9wdC0nICsgaX19XCI+XG4gICAgICAgICAgICAgICAgICAgIHt7b3B0LnRleHQgfCBjcm9uSm9iSHlwZXJUcmFuc319XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtYmxvY2sgZm9ybS10ZXh0IHRleHQtd2FybmluZyBteS0xXCJcbiAgICAgICAgICAgICAgICAgKm5nSWY9XCJmb3JtLmhhc0Vycm9yKCdzY2hlZHVsZVR5cGUnKSAmJiAoZm9ybS5nZXQoJ3NjaGVkdWxlVHlwZScpLmRpcnR5IHx8IGZvcm0uZ2V0KCdzY2hlZHVsZVR5cGUnKS50b3VjaGVkKVwiPlxuICAgICAgICAgICAgICAgIHt7J3BvbHBDcm9uSm9iLmVycm9ycy5zY2hlZHVsZVR5cGVSZXF1aXJlZCcgfCBjcm9uSm9iSHlwZXJUcmFuc319XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgXG4gICAgPGRpdiBjbGFzcz1cIm1iLTMgcm93XCIgKm5nSWY9XCJ2aXNpYmlsdHlDZmcucmVjdXJyZW5jZVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtMTIgY29sLW1kLTQgY29sLWZvcm0tbGFiZWxcIlxuICAgICAgICAgICAgICAgZm9yPVwie3twcmVmaXggKyAnc2NoZWR1bGUtcmVjdXJyZW5jZSd9fVwiPlxuICAgICAgICAgICAge3sncG9scENyb25Kb2IucmVjdXJyZW5jZScgfCBjcm9uSm9iSHlwZXJUcmFuc319XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgY29sLW1kLThcIj5cbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cInt7cHJlZml4ICsgJ3NjaGVkdWxlLXJlY3VycmVuY2UnfX1cIlxuICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJyZWN1cnJlbmNlXCI+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZCB2YWx1ZT1cIlwiPnt7J3BvbHBDcm9uSm9iLnNlbGVjdE9uZScgfCBjcm9uSm9iSHlwZXJUcmFuc319PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInt7b3B0LnZhbHVlfX1cIiAqbmdGb3I9XCJsZXQgb3B0IG9mIHJlY3VycmVuY2VPcHRpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7b3B0LnRleHQgfCBjcm9uSm9iSHlwZXJUcmFuc319XG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwibWItMyByb3dcIiAqbmdJZj1cInZpc2liaWx0eUNmZy5yZWN1cnJlbmNlICYmIHZpc2liaWx0eUNmZy5jdXN0b21FeHByXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC0xMiBjb2wtbWQtNCBjb2wtZm9ybS1sYWJlbFwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e3ByZWZpeCArICdzY2hlZHVsZS1jdXN0b20tZXhwcid9fVwiPlxuICAgICAgICAgICAge3sncG9scENyb25Kb2IuY3VzdG9tRXhwcicgfCBjcm9uSm9iSHlwZXJUcmFuc319XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgY29sLW1kLThcIj5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgIFthdXRvZm9jdXNdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgaWQ9XCJ7e3ByZWZpeCArICdzY2hlZHVsZS1jdXN0b20tZXhwcid9fVwiXG4gICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInt7cHJlZml4ICsgJ3NjaGVkdWxlLWN1c3RvbS1leHByLWhlbHBlcid9fVwiXG4gICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiY3VzdG9tRXhwclwiPlxuICAgICAgICAgICAgPGRpdiBpZD1cInt7cHJlZml4ICsgJ3NjaGVkdWxlLWN1c3RvbS1leHByLWhlbHBlcid9fVwiXG4gICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtd2FybmluZyBkLWJsb2NrIG15LTFcIlxuICAgICAgICAgICAgICAgICAqbmdJZj1cImZvcm0uaGFzRXJyb3IoJ2N1c3RvbUV4cHInKSAmJiAoZm9ybS5nZXQoJ2N1c3RvbUV4cHInKS5kaXJ0eSB8fCBmb3JtLmdldCgnY3VzdG9tRXhwcicpLnRvdWNoZWQpXCI+XG4gICAgICAgICAgICAgICAge3sncG9scENyb25Kb2IuZXJyb3JzLmN1c3RvbUV4cHJJbnZhbGlkJyB8IGNyb25Kb2JIeXBlclRyYW5zfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJtYi0zIHJvd1wiICpuZ0lmPVwidmlzaWJpbHR5Q2ZnLnN0YXJ0RGF0ZVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtMTIgY29sLW1kLTQgY29sLWZvcm0tbGFiZWxcIlxuICAgICAgICAgICAgICAgZm9yPVwie3twcmVmaXggKyAnc2NoZWR1bGUtc3RhcnQtZGF0ZSd9fVwiPlxuICAgICAgICAgICAge3sncG9scENyb25Kb2Iuc3RhcnREYXRlJyB8IGNyb25Kb2JIeXBlclRyYW5zfX1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtbWQtOFwiPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgaWQ9XCJ7e3ByZWZpeCArICdzY2hlZHVsZS1zdGFydC1kYXRlJ319XCJcbiAgICAgICAgICAgICAgICAgICBic0RhdGVwaWNrZXJcbiAgICAgICAgICAgICAgICAgICBbYnNDb25maWddPVwieyBhZGFwdGl2ZVBvc2l0aW9uOiB0cnVlIH1cIlxuICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInN0YXJ0RGF0ZVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuXG4gICAgPGRpdiBjbGFzcz1cIm1iLTMgcm93XCIgKm5nSWY9XCJ2aXNpYmlsdHlDZmcubW9udGhPZlllYXJcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLTEyIGNvbC1tZC00IGNvbC1mb3JtLWxhYmVsXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7cHJlZml4ICsgJ3NjaGVkdWxlLW1vbnRoLW9mLXllYXInfX1cIj5cbiAgICAgICAgICAgIHt7J3BvbHBDcm9uSm9iLm1vbnRoT2ZZZWFyJyB8IGNyb25Kb2JIeXBlclRyYW5zfX1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtbWQtOFwiPlxuICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwie3twcmVmaXggKyAnc2NoZWR1bGUtbW9udGgtb2YteWVhcid9fVwiXG4gICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cIm1vbnRoT2ZZZWFyXCI+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD4uLi48L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwie3tvcHQudmFsdWV9fVwiICpuZ0Zvcj1cImxldCBvcHQgb2YgbW9udGhzT2ZZZWFyT3B0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICB7e29wdC50ZXh0IHwgY3JvbkpvYkh5cGVyVHJhbnN9fVxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cIm1iLTMgcm93XCIgKm5nSWY9XCJ2aXNpYmlsdHlDZmcuZGF5T2ZNb250aFwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtMTIgY29sLW1kLTQgY29sLWZvcm0tbGFiZWxcIlxuICAgICAgICAgICAgICAgZm9yPVwie3twcmVmaXggKyAnc2NoZWR1bGUtZGF5LW9mLW1vbnRoJ319XCI+XG4gICAgICAgICAgICB7eydwb2xwQ3JvbkpvYi5kYXlPZk1vbnRoJyB8IGNyb25Kb2JIeXBlclRyYW5zfX1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtbWQtOFwiPlxuICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwie3twcmVmaXggKyAnc2NoZWR1bGUtZGF5LW9mLW1vbnRoJ319XCJcbiAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiZGF5T2ZNb250aFwiPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQgdmFsdWU9XCJcIj4uLi48L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwie3tvcHQudmFsdWV9fVwiICpuZ0Zvcj1cImxldCBvcHQgb2YgZGF5c09mTW9udGhPcHRpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7b3B0LnRleHR9fVxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG5cbiAgICA8ZGl2IGNsYXNzPVwibWItMyByb3dcIiAqbmdJZj1cInZpc2liaWx0eUNmZy5kYXlPZldlZWtcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLTEyIGNvbC1tZC00IGNvbC1mb3JtLWxhYmVsXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7cHJlZml4ICsgJ3NjaGVkdWxlLWRheS1vZi13ZWVrJ319XCI+XG4gICAgICAgICAgICB7eydwb2xwQ3JvbkpvYi5kYXlPZldlZWsnIHwgY3JvbkpvYkh5cGVyVHJhbnN9fVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGNvbC1tZC04XCI+XG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ7e3ByZWZpeCArICdzY2hlZHVsZS1kYXktb2Ytd2Vlayd9fVwiXG4gICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cImRheU9mV2Vla1wiPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQgdmFsdWU9XCJcIj4uLi48L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwie3tvcHQudmFsdWV9fVwiICpuZ0Zvcj1cImxldCBvcHQgb2YgZGF5c09mV2Vla09wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAge3tvcHQudGV4dCB8IGNyb25Kb2JIeXBlclRyYW5zfX1cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJtYi0zIHJvd1wiICpuZ0lmPVwidmlzaWJpbHR5Q2ZnLnRpbWVcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLTEyIGNvbC1tZC00IGNvbC1mb3JtLWxhYmVsXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7cHJlZml4ICsgJ3NjaGVkdWxlLXRpbWUnfX1cIj5cbiAgICAgICAgICAgIHt7J3BvbHBDcm9uSm9iLnRpbWUnIHwgY3JvbkpvYkh5cGVyVHJhbnN9fVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGNvbC1tZC04XCI+XG4gICAgICAgICAgICA8dGltZXBpY2tlciBpZD1cInt7cHJlZml4ICsgJ3NjaGVkdWxlLXRpbWUnfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwidGltZVwiPlxuICAgICAgICAgICAgPC90aW1lcGlja2VyPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJtYi0zIHJvd1wiICpuZ0lmPVwidmlzaWJpbHR5Q2ZnLmV4Y2x1ZGVIb2xpZGF5c1wiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtMTIgY29sLW1kLTQgY29sLWZvcm0tbGFiZWxcIlxuICAgICAgICAgICAgICAgZm9yPVwie3twcmVmaXggKyAnc2NoZWR1bGUtZXhjbHVkZS1ob2xpZGF5cyd9fVwiPlxuICAgICAgICAgICAge3sncG9scENyb25Kb2IuZXhjbHVkZUhvbGlkYXlzJyB8IGNyb25Kb2JIeXBlclRyYW5zfX1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtbWQtOFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0IHBvc2l0aW9uLXN0YXRpY1wiXG4gICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3twcmVmaXggKyAnc2NoZWR1bGUtZXhjbHVkZS1ob2xpZGF5cyd9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cImV4Y2x1ZGVIb2xpZGF5c1wiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXNIb2xpZGF5c0V4Y2x1ZGVkXCI+XG4gICAgICAgICAgICAgICAge3tob2xpZGF5c319XG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCIhaG9saWRheXNcIj57eydwb2xwQ3JvbkpvYi5ub3RTZXRZZXQnIHwgY3JvbkpvYkh5cGVyVHJhbnN9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1saW5rIHRleHQtaW5mb1wiIChjbGljayk9XCJ1cGRhdGVIb2xpZGF5c0FzeW5jKClcIj5cbiAgICAgICAgICAgICAgICAgICAge3sncG9scENyb25Kb2IuZWRpdEJ0bicgfCBjcm9uSm9iSHlwZXJUcmFuc319XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm1iLTMgcm93XCIgKm5nSWY9XCJ2aXNpYmlsdHlDZmcuZXhjbHVkZVdlZWtlbmRzXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC0xMiBjb2wtbWQtNCBjb2wtZm9ybS1sYWJlbFwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e3ByZWZpeCArICdzY2hlZHVsZS1leGNsdWRlLXdlZWtlbmRzJ319XCI+XG4gICAgICAgICAgICB7eydwb2xwQ3JvbkpvYi5leGNsdWRlV2Vla2VuZHMnIHwgY3JvbkpvYkh5cGVyVHJhbnN9fVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGNvbC1tZC04XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXQgcG9zaXRpb24tc3RhdGljXCJcbiAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ7e3ByZWZpeCArICdzY2hlZHVsZS1leGNsdWRlLXdlZWtlbmRzJ319XCJcbiAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiZXhjbHVkZVdlZWtlbmRzXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm1iLTMgcm93XCIgKm5nSWY9XCJ2aXNpYmlsdHlDZmcuZXhjbHVkZU90aGVyc1wiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtMTIgY29sLW1kLTQgY29sLWZvcm0tbGFiZWxcIlxuICAgICAgICAgICAgICAgZm9yPVwie3twcmVmaXggKyAnc2NoZWR1bGUtZXhjbHVkZS1vdGhlcnMnfX1cIj5cbiAgICAgICAgICAgIHt7J3BvbHBDcm9uSm9iLmV4Y2x1ZGVPdGhlcnMnIHwgY3JvbkpvYkh5cGVyVHJhbnN9fVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGNvbC1tZC04XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXQgcG9zaXRpb24tc3RhdGljXCJcbiAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ7e3ByZWZpeCArICdzY2hlZHVsZS1leGNsdWRlLW90aGVycyd9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cImV4Y2x1ZGVPdGhlcnNcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImlzT3RoZXJzRXhjbHVkZWRcIj5cbiAgICAgICAgICAgICAgICB7e290aGVyRGF5c319XG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCIhb3RoZXJEYXlzXCI+e3sncG9scENyb25Kb2Iubm90U2V0WWV0JyB8IGNyb25Kb2JIeXBlclRyYW5zfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tbGluayB0ZXh0LWluZm9cIiAoY2xpY2spPVwidXBkYXRlT3RoZXJEYXlzQXN5bmMoKVwiPlxuICAgICAgICAgICAgICAgICAgICB7eydwb2xwQ3JvbkpvYi5lZGl0QnRuJyB8IGNyb25Kb2JIeXBlclRyYW5zfX1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJtYi0zIHJvd1wiICpuZ0lmPVwidmlzaWJpbHR5Q2ZnLmVuZERhdGVcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLTEyIGNvbC1tZC00IGNvbC1mb3JtLWxhYmVsXCJcbiAgICAgICAgICAgICAgIGZvcj1cInt7cHJlZml4ICsgJ3NjaGVkdWxlLWVuZC1kYXRlJ319XCI+XG4gICAgICAgICAgICB7eydwb2xwQ3JvbkpvYi5lbmREYXRlJyB8IGNyb25Kb2JIeXBlclRyYW5zfX1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtbWQtOFwiPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgaWQ9XCJ7e3ByZWZpeCArICdzY2hlZHVsZS1lbmQtZGF0ZSd9fVwiXG4gICAgICAgICAgICAgICAgICAgYnNEYXRlcGlja2VyXG4gICAgICAgICAgICAgICAgICAgW2JzQ29uZmlnXT1cInsgYWRhcHRpdmVQb3NpdGlvbjogdHJ1ZSB9XCJcbiAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJlbmREYXRlXCI+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgYSBvZiBhbGVydHNcIj5cbiAgICAgICAgPGFsZXJ0IFt0eXBlXT1cImEudHlwZVwiIFtkaXNtaXNzT25UaW1lb3V0XT1cImEudGltZW91dFwiPlxuICAgICAgICAgICAge3thLm1lc3NhZ2UgfCBjcm9uSm9iSHlwZXJUcmFuc319XG4gICAgICAgIDwvYWxlcnQ+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgXG4gICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kIG1iLTRcIiAqbmdJZj1cIiFoaWRlU3VibWl0QnRuIHx8ICFoaWRlQ2FuY2VsQnRuXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiY2FuY2VsKClcIiAqbmdJZj1cIiFoaWRlQ2FuY2VsQnRuXCI+XG4gICAgICAgICAgICB7eydwb2xwQ3JvbkpvYi5jYW5jZWxCdG4nIHwgY3JvbkpvYkh5cGVyVHJhbnN9fVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiIWhpZGVTdWJtaXRCdG5cIj5cbiAgICAgICAgICAgIHt7J3BvbHBDcm9uSm9iLnN1Ym1pdEJ0bicgfCBjcm9uSm9iSHlwZXJUcmFuc319XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuPC9mb3JtPlxuIl19