import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { safeParseInt } from '@polpware/fe-utilities';
import { AlertDefaultImpl } from '@polpware/ngx-alert';
import { parseString } from 'cron-parser';
import { defaultDict } from '../i18n';
import { getDaysOfMonth, getDaysOfWeek, getDefaultScheduleTime, getMonthsOfYear, IntervalEnum, ScheduleTypeEnum } from '../interfaces';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "@40three/ngx-autofocus-directive";
import * as i4 from "ngx-bootstrap/datepicker";
import * as i5 from "ngx-bootstrap/timepicker";
import * as i6 from "ngx-bootstrap/alert";
import * as i7 from "@polpware/ngx-i18n";
function ScheduleTimePickerComponent_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelement(1, "input", 10);
    i0.ɵɵelementStart(2, "label", 11);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "hyperTrans");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var opt_r17 = ctx.$implicit;
    var i_r18 = ctx.index;
    var ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("id", "schedule-type-opt-" + i_r18);
    i0.ɵɵpropertyInterpolate("value", opt_r17.value);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("for", "schedule-type-opt-" + i_r18);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(4, 4, opt_r17.text, null, null, ctx_r15.defaultRes), " ");
} }
function ScheduleTimePickerComponent_div_1_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 12);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "hyperTrans");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r16 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(2, 1, "polpCronJob.errors.scheduleTypeRequired", null, null, ctx_r16.defaultRes), " ");
} }
function ScheduleTimePickerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "label", 5);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "hyperTrans");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 6);
    i0.ɵɵtemplate(5, ScheduleTimePickerComponent_div_1_div_5_Template, 5, 9, "div", 7);
    i0.ɵɵtemplate(6, ScheduleTimePickerComponent_div_1_span_6_Template, 3, 6, "span", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(3, 3, "polpCronJob.scheduleType", null, null, ctx_r0.defaultRes), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r0.scheduleTypeOptions);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.form.hasError("scheduleType") && (ctx_r0.form.get("scheduleType").dirty || ctx_r0.form.get("scheduleType").touched));
} }
function ScheduleTimePickerComponent_div_2_option_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 17);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "hyperTrans");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var opt_r20 = ctx.$implicit;
    var ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("value", opt_r20.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(2, 2, opt_r20.text, null, null, ctx_r19.defaultRes), " ");
} }
function ScheduleTimePickerComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "label", 13);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "hyperTrans");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 6);
    i0.ɵɵelementStart(5, "select", 14);
    i0.ɵɵelementStart(6, "option", 15);
    i0.ɵɵtext(7, "...");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, ScheduleTimePickerComponent_div_2_option_8_Template, 3, 7, "option", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(3, 2, "polpCronJob.recurrence", null, null, ctx_r1.defaultRes), " ");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r1.recurrenceOptions);
} }
function ScheduleTimePickerComponent_div_3_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 12);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "hyperTrans");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r21 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(2, 1, "polpCronJob.errors.customExprInvalid", null, null, ctx_r21.defaultRes), " ");
} }
function ScheduleTimePickerComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "label", 18);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "hyperTrans");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 6);
    i0.ɵɵelement(5, "input", 19);
    i0.ɵɵtemplate(6, ScheduleTimePickerComponent_div_3_span_6_Template, 3, 6, "span", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(3, 3, "polpCronJob.customExpr", null, null, ctx_r2.defaultRes), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("autofocus", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.form.hasError("customExpr") && (ctx_r2.form.get("customExpr").dirty || ctx_r2.form.get("customExpr").touched));
} }
var _c0 = function () { return { adaptivePosition: true }; };
function ScheduleTimePickerComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "label", 20);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "hyperTrans");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 6);
    i0.ɵɵelement(5, "input", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(3, 2, "polpCronJob.startDate", null, null, ctx_r3.defaultRes), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("bsConfig", i0.ɵɵpureFunction0(7, _c0));
} }
function ScheduleTimePickerComponent_div_5_option_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 17);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "hyperTrans");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var opt_r23 = ctx.$implicit;
    var ctx_r22 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("value", opt_r23.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(2, 2, opt_r23.text, null, null, ctx_r22.defaultRes), " ");
} }
function ScheduleTimePickerComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "label", 22);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "hyperTrans");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 6);
    i0.ɵɵelementStart(5, "select", 23);
    i0.ɵɵelementStart(6, "option", 15);
    i0.ɵɵtext(7, "...");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, ScheduleTimePickerComponent_div_5_option_8_Template, 3, 7, "option", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(3, 2, "polpCronJob.monthOfYear", null, null, ctx_r4.defaultRes), " ");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r4.monthsOfYearOptions);
} }
function ScheduleTimePickerComponent_div_6_option_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var opt_r25 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("value", opt_r25.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", opt_r25.text, " ");
} }
function ScheduleTimePickerComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "label", 24);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "hyperTrans");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 6);
    i0.ɵɵelementStart(5, "select", 25);
    i0.ɵɵelementStart(6, "option", 15);
    i0.ɵɵtext(7, "...");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, ScheduleTimePickerComponent_div_6_option_8_Template, 2, 2, "option", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(3, 2, "polpCronJob.dayOfMonth", null, null, ctx_r5.defaultRes), " ");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r5.daysOfMonthOptions);
} }
function ScheduleTimePickerComponent_div_7_option_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 17);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "hyperTrans");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var opt_r27 = ctx.$implicit;
    var ctx_r26 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("value", opt_r27.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(2, 2, opt_r27.text, null, null, ctx_r26.defaultRes), " ");
} }
function ScheduleTimePickerComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "label", 26);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "hyperTrans");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 6);
    i0.ɵɵelementStart(5, "select", 27);
    i0.ɵɵelementStart(6, "option", 15);
    i0.ɵɵtext(7, "...");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, ScheduleTimePickerComponent_div_7_option_8_Template, 3, 7, "option", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(3, 2, "polpCronJob.dayOfWeek", null, null, ctx_r6.defaultRes), " ");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r6.daysOfWeekOptions);
} }
function ScheduleTimePickerComponent_div_8_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 12);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "hyperTrans");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r28 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(2, 1, "polpCronJob.errors.timezoneInvalid", null, null, ctx_r28.defaultRes), " ");
} }
function ScheduleTimePickerComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "label", 28);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "hyperTrans");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 6);
    i0.ɵɵelement(5, "input", 29);
    i0.ɵɵtemplate(6, ScheduleTimePickerComponent_div_8_span_6_Template, 3, 6, "span", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(3, 2, "polpCronJob.timezone", null, null, ctx_r7.defaultRes), " ");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r7.form.hasError("timezone") && (ctx_r7.form.get("timezone").dirty || ctx_r7.form.get("timezone").touched));
} }
function ScheduleTimePickerComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "label", 30);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "hyperTrans");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 6);
    i0.ɵɵelement(5, "timepicker", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(3, 1, "polpCronJob.time", null, null, ctx_r8.defaultRes), " ");
} }
function ScheduleTimePickerComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "label", 32);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "hyperTrans");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 6);
    i0.ɵɵelementStart(5, "div", 33);
    i0.ɵɵelement(6, "input", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div");
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "hyperTrans");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(3, 2, "polpCronJob.excludeHolidays", null, null, ctx_r9.defaultRes), " ");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(9, 7, "polpCronJob.holidayLabel", null, null, ctx_r9.defaultRes), " ");
} }
function ScheduleTimePickerComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "label", 35);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "hyperTrans");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 6);
    i0.ɵɵelementStart(5, "div", 33);
    i0.ɵɵelement(6, "input", 36);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r10 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(3, 1, "polpCronJob.excludeWeekends", null, null, ctx_r10.defaultRes), " ");
} }
function ScheduleTimePickerComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "label", 37);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "hyperTrans");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 6);
    i0.ɵɵelementStart(5, "div", 33);
    i0.ɵɵelement(6, "input", 38);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div");
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "hyperTrans");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r11 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(3, 2, "polpCronJob.excludeOthers", null, null, ctx_r11.defaultRes), " ");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(9, 7, "polpCronJob.otherLabel", null, null, ctx_r11.defaultRes), " ");
} }
function ScheduleTimePickerComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "label", 39);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "hyperTrans");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 6);
    i0.ɵɵelement(5, "input", 40);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r12 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(3, 2, "polpCronJob.endDate", null, null, ctx_r12.defaultRes), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("bsConfig", i0.ɵɵpureFunction0(7, _c0));
} }
function ScheduleTimePickerComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "alert", 41);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "hyperTrans");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var a_r29 = ctx.$implicit;
    var ctx_r13 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("type", a_r29.type)("dismissOnTimeout", a_r29.timeout);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(3, 3, a_r29.message, null, null, ctx_r13.defaultRes), " ");
} }
function ScheduleTimePickerComponent_div_15_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 45);
    i0.ɵɵlistener("click", function ScheduleTimePickerComponent_div_15_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r33); var ctx_r32 = i0.ɵɵnextContext(2); return ctx_r32.cancel(); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "hyperTrans");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r30 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(2, 1, "polpCronJob.cancelBtn", null, null, ctx_r30.defaultRes), " ");
} }
function ScheduleTimePickerComponent_div_15_button_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 46);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "hyperTrans");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r31 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(2, 1, "polpCronJob.submitBtn", null, null, ctx_r31.defaultRes), " ");
} }
function ScheduleTimePickerComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 42);
    i0.ɵɵtemplate(1, ScheduleTimePickerComponent_div_15_button_1_Template, 3, 6, "button", 43);
    i0.ɵɵtemplate(2, ScheduleTimePickerComponent_div_15_button_2_Template, 3, 6, "button", 44);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r14 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r14.settings.hideCancel);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r14.settings.hideConfirm);
} }
var defaultSettings = {
    hideConfirm: false,
    hideCancel: true
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
var ScheduleTimePickerComponent = /** @class */ (function () {
    function ScheduleTimePickerComponent(_builder) {
        this._builder = _builder;
        this.initSettings = {};
        this.initValue = null;
        this.onConfirm = new EventEmitter();
        this.onCancel = new EventEmitter();
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
            timezone: false,
            startDate: false,
            endDate: false,
            time: false,
            monthOfYear: false,
            dayOfMonth: false,
            dayOfWeek: false
        };
        this.alertProvider = new AlertDefaultImpl();
    }
    Object.defineProperty(ScheduleTimePickerComponent.prototype, "oneTimeValue", {
        get: function () {
            var a = this.form.value;
            var timezone = safeParseInt(a.timezone);
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
    ScheduleTimePickerComponent.prototype.confirm = function () {
        if (!this.form.valid) {
            this.alertProvider.warning('polpCronJob.errors.general', 5000);
            return;
        }
        var a = this.form.value;
        var scheduleTypeVal = safeParseInt(a.scheduleType);
        var output = scheduleTypeVal == ScheduleTypeEnum.OneTime ? this.oneTimeValue : this.recurrentValue;
        this.onConfirm.emit(output);
    };
    ScheduleTimePickerComponent.prototype.cancel = function () {
        this.onCancel.emit();
    };
    ScheduleTimePickerComponent.ɵfac = function ScheduleTimePickerComponent_Factory(t) { return new (t || ScheduleTimePickerComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
    ScheduleTimePickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ScheduleTimePickerComponent, selectors: [["polp-bs-schedule-time-picker"]], inputs: { initSettings: "initSettings", initValue: "initValue" }, outputs: { onConfirm: "onConfirm", onCancel: "onCancel" }, features: [i0.ɵɵNgOnChangesFeature], decls: 16, vars: 16, consts: [[3, "formGroup", "ngSubmit"], ["class", "form-group row", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-end mb-4", 4, "ngIf"], [1, "form-group", "row"], [1, "col-12", "col-md-4", "col-form-label"], [1, "col-12", "col-md-8"], ["class", "form-check form-check-inline", 4, "ngFor", "ngForOf"], ["class", "text-warning d-block my-1 small", 4, "ngIf"], [1, "form-check", "form-check-inline"], ["formControlName", "scheduleType", "type", "radio", 1, "form-check-input", 3, "id", "value"], [1, "form-check-label", 3, "for"], [1, "text-warning", "d-block", "my-1", "small"], ["for", "schedule-recurrence", 1, "col-12", "col-md-4", "col-form-label"], ["id", "schedule-recurrence", "formControlName", "recurrence", 1, "form-control"], ["selected", "", "value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["for", "schedule-custom-expr", 1, "col-12", "col-md-4", "col-form-label"], ["type", "text", "id", "schedule-custom-expr", "formControlName", "customExpr", 1, "form-control", 3, "autofocus"], ["for", "schedule-start-date", 1, "col-12", "col-md-4", "col-form-label"], ["type", "text", "id", "schedule-start-date", "bsDatepicker", "", "formControlName", "startDate", 1, "form-control", 3, "bsConfig"], ["for", "schedule-month-of-year", 1, "col-12", "col-md-4", "col-form-label"], ["id", "schedule-month-of-year", "formControlName", "monthOfYear", 1, "form-control"], ["for", "schedule-day-of-month", 1, "col-12", "col-md-4", "col-form-label"], ["id", "schedule-day-of-month", "formControlName", "dayOfMonth", 1, "form-control"], ["for", "schedule-day-of-week", 1, "col-12", "col-md-4", "col-form-label"], ["id", "schedule-day-of-week", "formControlName", "dayOfWeek", 1, "form-control"], ["for", "schedule-timezone", 1, "col-12", "col-md-4", "col-form-label"], ["type", "number", "id", "schedule-timezone", "formControlName", "timezone", 1, "form-control"], ["for", "schedule-time", 1, "col-12", "col-md-4", "col-form-label"], ["id", "schedule-time", "formControlName", "time"], ["for", "schedule-exclude-holidays", 1, "col-12", "col-md-4", "col-form-label"], [1, "form-check"], ["type", "checkbox", "id", "schedule-exclude-holidays", "formControlName", "excludeHolidays", 1, "form-check-input", "position-static"], ["for", "schedule-exclude-weekends", 1, "col-12", "col-md-4", "col-form-label"], ["type", "checkbox", "id", "schedule-exclude-weekends", "formControlName", "excludeWeekends", 1, "form-check-input", "position-static"], ["for", "schedule-exclude-others", 1, "col-12", "col-md-4", "col-form-label"], ["id", "schedule-exclude-others", "type", "checkbox", "formControlName", "excludeOthers", 1, "form-check-input", "position-static"], ["for", "schedule-end-date", 1, "col-12", "col-md-4", "col-form-label"], ["type", "text", "id", "schedule-end-date", "bsDatepicker", "", "formControlName", "endDate", 1, "form-control", 3, "bsConfig"], [3, "type", "dismissOnTimeout"], [1, "d-flex", "justify-content-end", "mb-4"], ["type", "button", "class", "btn btn-warning", 3, "click", 4, "ngIf"], ["type", "submit", "class", "btn btn-success", 4, "ngIf"], ["type", "button", 1, "btn", "btn-warning", 3, "click"], ["type", "submit", 1, "btn", "btn-success"]], template: function ScheduleTimePickerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "form", 0);
            i0.ɵɵlistener("ngSubmit", function ScheduleTimePickerComponent_Template_form_ngSubmit_0_listener() { return ctx.confirm(); });
            i0.ɵɵtemplate(1, ScheduleTimePickerComponent_div_1_Template, 7, 8, "div", 1);
            i0.ɵɵtemplate(2, ScheduleTimePickerComponent_div_2_Template, 9, 7, "div", 1);
            i0.ɵɵtemplate(3, ScheduleTimePickerComponent_div_3_Template, 7, 8, "div", 1);
            i0.ɵɵtemplate(4, ScheduleTimePickerComponent_div_4_Template, 6, 8, "div", 1);
            i0.ɵɵtemplate(5, ScheduleTimePickerComponent_div_5_Template, 9, 7, "div", 1);
            i0.ɵɵtemplate(6, ScheduleTimePickerComponent_div_6_Template, 9, 7, "div", 1);
            i0.ɵɵtemplate(7, ScheduleTimePickerComponent_div_7_Template, 9, 7, "div", 1);
            i0.ɵɵtemplate(8, ScheduleTimePickerComponent_div_8_Template, 7, 7, "div", 1);
            i0.ɵɵtemplate(9, ScheduleTimePickerComponent_div_9_Template, 6, 6, "div", 1);
            i0.ɵɵtemplate(10, ScheduleTimePickerComponent_div_10_Template, 10, 12, "div", 1);
            i0.ɵɵtemplate(11, ScheduleTimePickerComponent_div_11_Template, 7, 6, "div", 1);
            i0.ɵɵtemplate(12, ScheduleTimePickerComponent_div_12_Template, 10, 12, "div", 1);
            i0.ɵɵtemplate(13, ScheduleTimePickerComponent_div_13_Template, 6, 8, "div", 1);
            i0.ɵɵtemplate(14, ScheduleTimePickerComponent_ng_container_14_Template, 4, 8, "ng-container", 2);
            i0.ɵɵtemplate(15, ScheduleTimePickerComponent_div_15_Template, 3, 2, "div", 3);
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
            i0.ɵɵproperty("ngIf", ctx.visibiltyCfg.timezone);
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
            i0.ɵɵproperty("ngIf", !ctx.settings.hideConfirm || !ctx.settings.hideCancel);
        } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i2.NgIf, i2.NgForOf, i1.DefaultValueAccessor, i1.RadioControlValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.SelectControlValueAccessor, i1.NgSelectOption, i1.ɵangular_packages_forms_forms_x, i3.AutofocusDirective, i4.BsDatepickerInputDirective, i4.BsDatepickerDirective, i1.NumberValueAccessor, i5.TimepickerComponent, i1.CheckboxControlValueAccessor, i6.AlertComponent], pipes: [i7.HyperTranslatePipe], styles: [""] });
    return ScheduleTimePickerComponent;
}());
export { ScheduleTimePickerComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ScheduleTimePickerComponent, [{
        type: Component,
        args: [{
                selector: 'polp-bs-schedule-time-picker',
                templateUrl: './schedule-time-picker.component.html',
                styleUrls: ['./schedule-time-picker.component.css']
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, { initSettings: [{
            type: Input
        }], initValue: [{
            type: Input
        }], onConfirm: [{
            type: Output
        }], onCancel: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUtdGltZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2Nyb24tam9iLyIsInNvdXJjZXMiOlsibGliL3NjaGVkdWxlLXRpbWUtcGlja2VyL3NjaGVkdWxlLXRpbWUtcGlja2VyLmNvbXBvbmVudC50cyIsImxpYi9zY2hlZHVsZS10aW1lLXBpY2tlci9zY2hlZHVsZS10aW1lLXBpY2tlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWdDLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEgsT0FBTyxFQUFFLFdBQVcsRUFBeUQsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFvQixNQUFNLHFCQUFxQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFMUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUN0QyxPQUFPLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxzQkFBc0IsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFpQixnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7OztJQ0QxSSw4QkFFSTtJQUFBLDRCQUtBO0lBQUEsaUNBRUk7SUFBQSxZQUNKOztJQUFBLGlCQUFRO0lBQ1osaUJBQU07Ozs7O0lBTkssZUFBaUM7SUFBakMsNERBQWlDO0lBQ2pDLGdEQUFxQjtJQUVyQixlQUFrQztJQUFsQyw2REFBa0M7SUFDckMsZUFDSjtJQURJLG1HQUNKOzs7SUFFSixnQ0FDSTtJQUFBLFlBQ0o7O0lBQUEsaUJBQU87OztJQURILGVBQ0o7SUFESSxnSUFDSjs7O0lBbkJSLDhCQUNJO0lBQUEsZ0NBQ0k7SUFBQSxZQUNKOztJQUFB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Siw4RUFDSTtZQWNKLGdHQUNJO1lBS0osOEVBQ0k7WUFTUixpQkFBTzs7WUExT0Qsb0NBQWtCO1lBQ1EsZUFBaUM7WUFBakMsb0RBQWlDO1lBdUJqQyxlQUErQjtZQUEvQixrREFBK0I7WUFpQi9CLGVBQTBEO1lBQTFELGlGQUEwRDtZQWlCMUQsZUFBOEI7WUFBOUIsaURBQThCO1lBZ0I5QixlQUFnQztZQUFoQyxtREFBZ0M7WUFpQmhDLGVBQStCO1lBQS9CLGtEQUErQjtZQWtCL0IsZUFBOEI7WUFBOUIsaURBQThCO1lBaUI5QixlQUE2QjtZQUE3QixnREFBNkI7WUFnQjdCLGVBQXlCO1lBQXpCLDRDQUF5QjtZQVl6QixlQUFvQztZQUFwQyx1REFBb0M7WUFpQnBDLGVBQW9DO1lBQXBDLHVEQUFvQztZQWNwQyxlQUFrQztZQUFsQyxxREFBa0M7WUFrQmxDLGVBQTRCO1lBQTVCLCtDQUE0QjtZQWUxQyxlQUF3QjtZQUF4QixvQ0FBd0I7WUFNTyxlQUFxRDtZQUFyRCw0RUFBcUQ7O3NDRGhPdEc7Q0EyUkMsQUFsTUQsSUFrTUM7U0E3TFksMkJBQTJCO2tEQUEzQiwyQkFBMkI7Y0FMdkMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLFdBQVcsRUFBRSx1Q0FBdUM7Z0JBQ3BELFNBQVMsRUFBRSxDQUFDLHNDQUFzQyxDQUFDO2FBQ3REOztrQkFJSSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxNQUFNOztrQkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBWYWxpZGF0aW9uRXJyb3JzLCBWYWxpZGF0b3JGbiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IHNhZmVQYXJzZUludCB9IGZyb20gJ0Bwb2xwd2FyZS9mZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgQWxlcnREZWZhdWx0SW1wbCwgSUhhc0FsZXJ0RmVhdHVyZSB9IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtYWxlcnQnO1xuaW1wb3J0IHsgcGFyc2VTdHJpbmcgfSBmcm9tICdjcm9uLXBhcnNlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlZmF1bHREaWN0IH0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQgeyBnZXREYXlzT2ZNb250aCwgZ2V0RGF5c09mV2VlaywgZ2V0RGVmYXVsdFNjaGVkdWxlVGltZSwgZ2V0TW9udGhzT2ZZZWFyLCBJbnRlcnZhbEVudW0sIElTY2hlZHVsZVRpbWUsIFNjaGVkdWxlVHlwZUVudW0gfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcblxuZXhwb3J0IGludGVyZmFjZSBJU2V0dGluZ3Mge1xuICAgIGhpZGVDb25maXJtPzogYm9vbGVhbjtcbiAgICBoaWRlQ2FuY2VsPzogYm9vbGVhbjtcbn1cblxuY29uc3QgZGVmYXVsdFNldHRpbmdzOiBJU2V0dGluZ3MgPSB7XG4gICAgaGlkZUNvbmZpcm06IGZhbHNlLFxuICAgIGhpZGVDYW5jZWw6IHRydWVcbn1cblxuY29uc3QgZm9ybVZhbGlkYXRvcjogVmFsaWRhdG9yRm4gPSAoY29udHJvbDogRm9ybUdyb3VwKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xuXG4gICAgY29uc3Qgc2NoZWR1bGVUeXBlVmFsID0gc2FmZVBhcnNlSW50KChjb250cm9sLmdldCgnc2NoZWR1bGVUeXBlJykgYXMgRm9ybUNvbnRyb2wpLnZhbHVlKTtcbiAgICBpZiAoc2NoZWR1bGVUeXBlVmFsID09IDApIHtcbiAgICAgICAgcmV0dXJuIHsgc2NoZWR1bGVUeXBlOiB0cnVlIH07XG4gICAgfVxuICAgIGNvbnN0IHRpbWV6b25lVmFsID0gc2FmZVBhcnNlSW50KChjb250cm9sLmdldCgndGltZXpvbmUnKSBhcyBGb3JtQ29udHJvbCkudmFsdWUpO1xuICAgIGlmICh0aW1lem9uZVZhbCA+IDEzIHx8IHRpbWV6b25lVmFsIDwgLTExKSB7XG4gICAgICAgIHJldHVybiB7IHRpbWV6b25lOiB0cnVlIH07XG4gICAgfVxuICAgIGlmIChzY2hlZHVsZVR5cGVWYWwgPT0gMikgeyAvLyBvbmUgdGltZVxuICAgICAgICBjb25zdCByZWN1cnJlbmNlVmFsID0gc2FmZVBhcnNlSW50KChjb250cm9sLmdldCgncmVjdXJyZW5jZScpIGFzIEZvcm1Db250cm9sKS52YWx1ZSk7XG4gICAgICAgIGlmIChyZWN1cnJlbmNlVmFsID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB7IHJlY3VycmVuY2U6IHRydWUgfVxuICAgICAgICB9IGVsc2UgaWYgKHJlY3VycmVuY2VWYWwgPT0gSW50ZXJ2YWxFbnVtLkN1c3RvbSkge1xuICAgICAgICAgICAgY29uc3QgY3VzdG9tRXhwclZhbCA9IChjb250cm9sLmdldCgnY3VzdG9tRXhwcicpIGFzIEZvcm1Db250cm9sKS52YWx1ZTtcbiAgICAgICAgICAgIGlmICghY3VzdG9tRXhwclZhbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IGN1c3RvbUV4cHI6IHRydWUgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gdmFsaWRhdGVcbiAgICAgICAgICAgICAgICBjb25zdCByID0gcGFyc2VTdHJpbmcoY3VzdG9tRXhwclZhbCk7XG4gICAgICAgICAgICAgICAgaWYgKHIuZXJyb3JzICYmIE9iamVjdC5rZXlzKHIuZXJyb3JzKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgY3VzdG9tRXhwcjogdHJ1ZSB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZvcm1GaWVsZHMge1xuICAgIHNjaGVkdWxlVHlwZTogbnVtYmVyO1xuICAgIHJlY3VycmVuY2U6IG51bWJlcjtcbiAgICBleGNsdWRlSG9saWRheXM6IGJvb2xlYW47XG4gICAgaG9saWRheXM6IHN0cmluZztcbiAgICBleGNsdWRlV2Vla2VuZHM6IGJvb2xlYW47XG4gICAgZXhjbHVkZU90aGVyczogYm9vbGVhbjtcbiAgICBvdGhlckRheXM6IHN0cmluZztcbiAgICBjdXN0b21FeHByOiBzdHJpbmc7XG4gICAgdGltZXpvbmU6IG51bWJlcjtcbiAgICBzdGFydERhdGU6IERhdGU7XG4gICAgZW5kRGF0ZTogRGF0ZTtcbiAgICBtb250aE9mWWVhcjogbnVtYmVyO1xuICAgIGRheU9mTW9udGg6IG51bWJlcjtcbiAgICBkYXlPZldlZWs6IG51bWJlcjtcbiAgICB0aW1lOiBEYXRlO1xufVxuXG5mdW5jdGlvbiBtYXBUb0Zvcm1GaWVsZHMoZGF0YTogSVNjaGVkdWxlVGltZSkge1xuICAgIGNvbnN0IGRlZmF1bHREYXRhID0gZ2V0RGVmYXVsdFNjaGVkdWxlVGltZSgpO1xuICAgIGRhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0RGF0YSwgZGF0YSB8fCB7fSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gVGhlIHZhbHVlIGZvciB0aGUgcmFkaW8gYnV0dG9uIGlzIHR5cGUgb2Ygc3RyaW5nLlxuICAgICAgICBzY2hlZHVsZVR5cGU6IChkYXRhLmlzUmVjdXJyZW50ID8gU2NoZWR1bGVUeXBlRW51bS5SZWN1cnJlbnQgOiBTY2hlZHVsZVR5cGVFbnVtLk9uZVRpbWUpLnRvU3RyaW5nKCksXG4gICAgICAgIHJlY3VycmVuY2U6IGRhdGEucmVjdXJyZW5jZSxcbiAgICAgICAgZXhjbHVkZUhvbGlkYXlzOiAhIWRhdGEuaG9saWRheXMsXG4gICAgICAgIGhvbGlkYXlzOiBkYXRhLmhvbGlkYXlzLFxuICAgICAgICBleGNsdWRlV2Vla2VuZHM6IGRhdGEuZXhjbHVkZVdlZWtlbmRzLFxuICAgICAgICBleGNsdWRlT3RoZXJzOiAhIWRhdGEub3RoZXJEYXlzLFxuICAgICAgICBvdGhlckRheXM6IGRhdGEub3RoZXJEYXlzLFxuICAgICAgICBjdXN0b21FeHByOiBkYXRhLmN1c3RvbUV4cHIsXG4gICAgICAgIHRpbWV6b25lOiBkYXRhLnRpbWV6b25lLFxuICAgICAgICBzdGFydERhdGU6IGRhdGEuc3RhcnREYXRlLFxuICAgICAgICBlbmREYXRlOiBkYXRhLmVuZERhdGUsXG4gICAgICAgIHRpbWU6IGRhdGEudGltZSxcbiAgICAgICAgbW9udGhPZlllYXI6IGRhdGEubW9udGhPZlllYXIsXG4gICAgICAgIGRheU9mV2VlazogZGF0YS5kYXlPZldlZWssXG4gICAgICAgIGRheU9mTW9udGg6IGRhdGEuZGF5T2ZNb250aFxuICAgIH07XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncG9scC1icy1zY2hlZHVsZS10aW1lLXBpY2tlcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NjaGVkdWxlLXRpbWUtcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9zY2hlZHVsZS10aW1lLXBpY2tlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2NoZWR1bGVUaW1lUGlja2VyQ29tcG9uZW50XG4gICAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBJSGFzQWxlcnRGZWF0dXJlIHtcblxuICAgIEBJbnB1dCgpIGluaXRTZXR0aW5nczogSVNldHRpbmdzID0ge307XG4gICAgQElucHV0KCkgaW5pdFZhbHVlOiBJU2NoZWR1bGVUaW1lID0gbnVsbDtcbiAgICBAT3V0cHV0KCkgb25Db25maXJtOiBFdmVudEVtaXR0ZXI8SVNjaGVkdWxlVGltZT4gPSBuZXcgRXZlbnRFbWl0dGVyPElTY2hlZHVsZVRpbWU+KCk7XG4gICAgQE91dHB1dCgpIG9uQ2FuY2VsOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgICBzZXR0aW5nczogSVNldHRpbmdzID0ge307XG5cbiAgICBkZWZhdWx0UmVzID0gZGVmYXVsdERpY3Q7XG5cbiAgICAvLyBTY2hlZHVsZSBtb2RsZVxuICAgIGZvcm06IEZvcm1Hcm91cDtcbiAgICBzY2hlZHVsZVR5cGVPcHRpb25zID0gW3tcbiAgICAgICAgdmFsdWU6IFNjaGVkdWxlVHlwZUVudW0uT25lVGltZSxcbiAgICAgICAgdGV4dDogJ3BvbHBDcm9uSm9iLm9uZVRpbWVTY2hlZHVsZSdcbiAgICB9LCB7XG4gICAgICAgIHZhbHVlOiBTY2hlZHVsZVR5cGVFbnVtLlJlY3VycmVudCxcbiAgICAgICAgdGV4dDogJ3BvbHBDcm9uSm9iLnJlY3VycmVudFNjaGVkdWxlJ1xuICAgIH1dO1xuXG4gICAgcmVjdXJyZW5jZU9wdGlvbnMgPSBbe1xuICAgICAgICB2YWx1ZTogSW50ZXJ2YWxFbnVtLkRheSxcbiAgICAgICAgdGV4dDogJ3BvbHBDcm9uSm9iLmV2ZXJ5RGF5J1xuICAgIH0sIHtcbiAgICAgICAgdmFsdWU6IEludGVydmFsRW51bS5XZWVrLFxuICAgICAgICB0ZXh0OiAncG9scENyb25Kb2IuZXZlcnlXZWVrJ1xuICAgIH0sIHtcbiAgICAgICAgdmFsdWU6IEludGVydmFsRW51bS5Nb250aCxcbiAgICAgICAgdGV4dDogJ3BvbHBDcm9uSm9iLmV2ZXJ5TW9udGgnXG4gICAgfSwge1xuICAgICAgICB2YWx1ZTogSW50ZXJ2YWxFbnVtLlllYXIsXG4gICAgICAgIHRleHQ6ICdwb2xwQ3JvbkpvYi5ldmVyeVllYXInXG4gICAgfSwge1xuICAgICAgICB2YWx1ZTogSW50ZXJ2YWxFbnVtLkN1c3RvbSxcbiAgICAgICAgdGV4dDogJ3BvbHBDcm9uSm9iLmN1c3RvbUludGVydmFsJ1xuICAgIH1dO1xuXG4gICAgZGF5c09mV2Vla09wdGlvbnMgPSBnZXREYXlzT2ZXZWVrKCk7XG4gICAgbW9udGhzT2ZZZWFyT3B0aW9ucyA9IGdldE1vbnRoc09mWWVhcigpO1xuICAgIGRheXNPZk1vbnRoT3B0aW9ucyA9IGdldERheXNPZk1vbnRoKCk7XG5cbiAgICB2aXNpYmlsdHlDZmcgPSB7XG4gICAgICAgIHNjaGVkdWxlVHlwZTogdHJ1ZSxcbiAgICAgICAgcmVjdXJyZW5jZTogZmFsc2UsXG4gICAgICAgIGN1c3RvbUV4cHI6IGZhbHNlLFxuICAgICAgICBleGNsdWRlSG9saWRheXM6IGZhbHNlLFxuICAgICAgICBleGNsdWRlV2Vla2VuZHM6IGZhbHNlLFxuICAgICAgICBleGNsdWRlT3RoZXJzOiBmYWxzZSxcbiAgICAgICAgdGltZXpvbmU6IGZhbHNlLFxuICAgICAgICBzdGFydERhdGU6IGZhbHNlLFxuICAgICAgICBlbmREYXRlOiBmYWxzZSxcbiAgICAgICAgdGltZTogZmFsc2UsXG4gICAgICAgIG1vbnRoT2ZZZWFyOiBmYWxzZSxcbiAgICAgICAgZGF5T2ZNb250aDogZmFsc2UsXG4gICAgICAgIGRheU9mV2VlazogZmFsc2VcbiAgICB9O1xuXG4gICAgaXNTYXZpbmc6IGJvb2xlYW47XG4gICAgYWxlcnRQcm92aWRlciA9IG5ldyBBbGVydERlZmF1bHRJbXBsKCk7XG5cbiAgICBwcml2YXRlIF9zdWJyOiBTdWJzY3JpcHRpb247XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9idWlsZGVyOiBGb3JtQnVpbGRlcikge1xuICAgIH1cblxuICAgIGdldCBvbmVUaW1lVmFsdWUoKTogSVNjaGVkdWxlVGltZSB7XG4gICAgICAgIGNvbnN0IGEgPSB0aGlzLmZvcm0udmFsdWU7XG4gICAgICAgIGNvbnN0IHRpbWV6b25lID0gc2FmZVBhcnNlSW50KGEudGltZXpvbmUpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc1JlY3VycmVudDogZmFsc2UsXG4gICAgICAgICAgICB0aW1lem9uZTogdGltZXpvbmUsXG4gICAgICAgICAgICBzdGFydERhdGU6IGEuc3RhcnREYXRlLFxuICAgICAgICAgICAgdGltZTogYS50aW1lXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0IHJlY3VycmVudFZhbHVlKCk6IElTY2hlZHVsZVRpbWUge1xuICAgICAgICBjb25zdCBhID0gdGhpcy5mb3JtLnZhbHVlO1xuICAgICAgICBjb25zdCByZWN1cnJlbmNlID0gc2FmZVBhcnNlSW50KGEucmVjdXJyZW5jZSk7XG4gICAgICAgIGNvbnN0IHRpbWV6b25lID0gc2FmZVBhcnNlSW50KGEudGltZXpvbmUpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc1JlY3VycmVudDogdHJ1ZSxcbiAgICAgICAgICAgIHJlY3VycmVuY2U6IHJlY3VycmVuY2UsXG4gICAgICAgICAgICBob2xpZGF5czogYS5leGNsdWRlSG9saWRheXMgPyBhLmhvbGlkYXlzIDogJycsXG4gICAgICAgICAgICBleGNsdWRlV2Vla2VuZHM6IGEuZXhjbHVkZVdlZWtlbmRzLFxuICAgICAgICAgICAgb3RoZXJEYXlzOiBhLmV4Y2x1ZGVPdGhlcnMgPyBhLm90aGVyRGF5cyA6ICcnLFxuICAgICAgICAgICAgdGltZXpvbmU6IHRpbWV6b25lLFxuICAgICAgICAgICAgc3RhcnREYXRlOiBhLnN0YXJ0RGF0ZSxcbiAgICAgICAgICAgIGVuZERhdGU6IGEuZW5kRGF0ZSxcbiAgICAgICAgICAgIHRpbWU6IGEudGltZSxcbiAgICAgICAgICAgIG1vbnRoT2ZZZWFyOiBhLm1vbnRoT2ZZZWFyLFxuICAgICAgICAgICAgZGF5T2ZNb250aDogYS5kYXlPZk1vbnRoLFxuICAgICAgICAgICAgZGF5T2ZXZWVrOiBhLmRheU9mV2Vla1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldCBhbGVydHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFsZXJ0UHJvdmlkZXIuZGF0YTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRTZXR0aW5ncywgdGhpcy5pbml0U2V0dGluZ3MpO1xuXG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IG1hcFRvRm9ybUZpZWxkcyh0aGlzLmluaXRWYWx1ZSk7XG4gICAgICAgIHRoaXMuZm9ybSA9IHRoaXMuX2J1aWxkZXIuZ3JvdXAoZmllbGRzLCB7IHZhbGlkYXRvcnM6IFtmb3JtVmFsaWRhdG9yXSB9KTtcbiAgICAgICAgdGhpcy51cGRhdGVGaWVsZFZpc2liaWxpdHkodGhpcy5mb3JtLnZhbHVlKTtcblxuICAgICAgICB0aGlzLl9zdWJyID0gdGhpcy5mb3JtLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoYSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRmllbGRWaXNpYmlsaXR5KGEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5fc3Vici51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGRhdGE6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgaWYgKCFkYXRhLmluaXRWYWx1ZS5maXJzdENoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVGb3JtRGF0YShkYXRhLmluaXRWYWx1ZS5jdXJyZW50VmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHVwZGF0ZUZvcm1EYXRhKGRhdGE6IElTY2hlZHVsZVRpbWUpIHtcbiAgICAgICAgY29uc3QgY2hhbmdlcyA9IG1hcFRvRm9ybUZpZWxkcyhkYXRhKTtcbiAgICAgICAgdGhpcy5mb3JtLnNldFZhbHVlKGNoYW5nZXMsIHtcbiAgICAgICAgICAgIGVtaXRFdmVudDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlRmllbGRWaXNpYmlsaXR5KGE6IElGb3JtRmllbGRzKSB7XG5cbiAgICAgICAgZm9yIChsZXQgayBpbiB0aGlzLnZpc2liaWx0eUNmZykge1xuICAgICAgICAgICAgaWYgKHRoaXMudmlzaWJpbHR5Q2ZnLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmdba10gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZpc2liaWx0eUNmZy5zY2hlZHVsZVR5cGUgPSB0cnVlO1xuXG4gICAgICAgIGNvbnN0IHNjaGVkdWxlVHlwZVZhbCA9IHNhZmVQYXJzZUludChhLnNjaGVkdWxlVHlwZSk7XG5cbiAgICAgICAgaWYgKHNjaGVkdWxlVHlwZVZhbCA9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnZpc2liaWx0eUNmZy5zdGFydERhdGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcudGltZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnZpc2liaWx0eUNmZy50aW1lem9uZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnZpc2liaWx0eUNmZy5yZWN1cnJlbmNlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudmlzaWJpbHR5Q2ZnLmV4Y2x1ZGVIb2xpZGF5cyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnZpc2liaWx0eUNmZy5leGNsdWRlV2Vla2VuZHMgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcuZXhjbHVkZU90aGVycyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnZpc2liaWx0eUNmZy5lbmREYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudmlzaWJpbHR5Q2ZnLnRpbWUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcudGltZXpvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgICBjb25zdCByZWN1cnJlbnRWYWwgPSBzYWZlUGFyc2VJbnQoYS5yZWN1cnJlbmNlKTtcbiAgICAgICAgICAgIGlmIChyZWN1cnJlbnRWYWwgPT0gSW50ZXJ2YWxFbnVtLlllYXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2liaWx0eUNmZy5tb250aE9mWWVhciA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcuZGF5T2ZNb250aCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlY3VycmVudFZhbCA9PSBJbnRlcnZhbEVudW0uTW9udGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2liaWx0eUNmZy5kYXlPZk1vbnRoID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVjdXJyZW50VmFsID09IEludGVydmFsRW51bS5XZWVrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcuZGF5T2ZXZWVrID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVjdXJyZW50VmFsID09IEludGVydmFsRW51bS5DdXN0b20pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2liaWx0eUNmZy50aW1lID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcuY3VzdG9tRXhwciA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25maXJtKCkge1xuICAgICAgICBpZiAoIXRoaXMuZm9ybS52YWxpZCkge1xuICAgICAgICAgICAgdGhpcy5hbGVydFByb3ZpZGVyLndhcm5pbmcoJ3BvbHBDcm9uSm9iLmVycm9ycy5nZW5lcmFsJywgNTAwMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhID0gdGhpcy5mb3JtLnZhbHVlO1xuICAgICAgICBjb25zdCBzY2hlZHVsZVR5cGVWYWwgPSBzYWZlUGFyc2VJbnQoYS5zY2hlZHVsZVR5cGUpO1xuICAgICAgICBjb25zdCBvdXRwdXQgPSBzY2hlZHVsZVR5cGVWYWwgPT0gU2NoZWR1bGVUeXBlRW51bS5PbmVUaW1lID8gdGhpcy5vbmVUaW1lVmFsdWUgOiB0aGlzLnJlY3VycmVudFZhbHVlO1xuICAgICAgICB0aGlzLm9uQ29uZmlybS5lbWl0KG91dHB1dCk7XG4gICAgfVxuXG4gICAgY2FuY2VsKCkge1xuICAgICAgICB0aGlzLm9uQ2FuY2VsLmVtaXQoKTtcbiAgICB9XG5cbn1cbiIsIjxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybVwiIChuZ1N1Ym1pdCk9XCJjb25maXJtKClcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIiAqbmdJZj1cInZpc2liaWx0eUNmZy5zY2hlZHVsZVR5cGVcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLTEyIGNvbC1tZC00IGNvbC1mb3JtLWxhYmVsXCI+XG4gICAgICAgICAgICB7eydwb2xwQ3JvbkpvYi5zY2hlZHVsZVR5cGUnIHwgaHlwZXJUcmFuczpudWxsOm51bGw6ZGVmYXVsdFJlc319XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgY29sLW1kLThcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCJcbiAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IG9wdCBvZiBzY2hlZHVsZVR5cGVPcHRpb25zO2xldCBpPWluZGV4XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInNjaGVkdWxlVHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3snc2NoZWR1bGUtdHlwZS1vcHQtJyArIGl9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3tvcHQudmFsdWV9fVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICBmb3I9XCJ7eydzY2hlZHVsZS10eXBlLW9wdC0nICsgaX19XCI+XG4gICAgICAgICAgICAgICAgICAgIHt7b3B0LnRleHQgfCBoeXBlclRyYW5zOm51bGw6bnVsbDpkZWZhdWx0UmVzfX1cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtd2FybmluZyBkLWJsb2NrIG15LTEgc21hbGxcIiAqbmdJZj1cImZvcm0uaGFzRXJyb3IoJ3NjaGVkdWxlVHlwZScpICYmIChmb3JtLmdldCgnc2NoZWR1bGVUeXBlJykuZGlydHkgfHwgZm9ybS5nZXQoJ3NjaGVkdWxlVHlwZScpLnRvdWNoZWQpXCI+XG4gICAgICAgICAgICAgICAge3sncG9scENyb25Kb2IuZXJyb3JzLnNjaGVkdWxlVHlwZVJlcXVpcmVkJyB8IGh5cGVyVHJhbnM6bnVsbDpudWxsOmRlZmF1bHRSZXN9fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBcbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIiAqbmdJZj1cInZpc2liaWx0eUNmZy5yZWN1cnJlbmNlXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC0xMiBjb2wtbWQtNCBjb2wtZm9ybS1sYWJlbFwiXG4gICAgICAgICAgICAgICBmb3I9XCJzY2hlZHVsZS1yZWN1cnJlbmNlXCI+XG4gICAgICAgICAgICB7eydwb2xwQ3JvbkpvYi5yZWN1cnJlbmNlJyB8IGh5cGVyVHJhbnM6bnVsbDpudWxsOmRlZmF1bHRSZXN9fVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGNvbC1tZC04XCI+XG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzY2hlZHVsZS1yZWN1cnJlbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwicmVjdXJyZW5jZVwiPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQgdmFsdWU9XCJcIj4uLi48L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwie3tvcHQudmFsdWV9fVwiICpuZ0Zvcj1cImxldCBvcHQgb2YgcmVjdXJyZW5jZU9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAge3tvcHQudGV4dCB8IGh5cGVyVHJhbnM6bnVsbDpudWxsOmRlZmF1bHRSZXN9fVxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCIgKm5nSWY9XCJ2aXNpYmlsdHlDZmcucmVjdXJyZW5jZSAmJiB2aXNpYmlsdHlDZmcuY3VzdG9tRXhwclwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtMTIgY29sLW1kLTQgY29sLWZvcm0tbGFiZWxcIlxuICAgICAgICAgICAgICAgZm9yPVwic2NoZWR1bGUtY3VzdG9tLWV4cHJcIj5cbiAgICAgICAgICAgIHt7J3BvbHBDcm9uSm9iLmN1c3RvbUV4cHInIHwgaHlwZXJUcmFuczpudWxsOm51bGw6ZGVmYXVsdFJlc319XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgY29sLW1kLThcIj5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgIFthdXRvZm9jdXNdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgaWQ9XCJzY2hlZHVsZS1jdXN0b20tZXhwclwiXG4gICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiY3VzdG9tRXhwclwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXdhcm5pbmcgZC1ibG9jayBteS0xIHNtYWxsXCIgKm5nSWY9XCJmb3JtLmhhc0Vycm9yKCdjdXN0b21FeHByJykgJiYgKGZvcm0uZ2V0KCdjdXN0b21FeHByJykuZGlydHkgfHwgZm9ybS5nZXQoJ2N1c3RvbUV4cHInKS50b3VjaGVkKVwiPlxuICAgICAgICAgICAgICAgIHt7J3BvbHBDcm9uSm9iLmVycm9ycy5jdXN0b21FeHBySW52YWxpZCcgfCBoeXBlclRyYW5zOm51bGw6bnVsbDpkZWZhdWx0UmVzfX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIiAqbmdJZj1cInZpc2liaWx0eUNmZy5zdGFydERhdGVcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLTEyIGNvbC1tZC00IGNvbC1mb3JtLWxhYmVsXCJcbiAgICAgICAgICAgICAgIGZvcj1cInNjaGVkdWxlLXN0YXJ0LWRhdGVcIj5cbiAgICAgICAgICAgIHt7J3BvbHBDcm9uSm9iLnN0YXJ0RGF0ZScgfCBoeXBlclRyYW5zOm51bGw6bnVsbDpkZWZhdWx0UmVzfX1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtbWQtOFwiPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgaWQ9XCJzY2hlZHVsZS1zdGFydC1kYXRlXCJcbiAgICAgICAgICAgICAgICAgICBic0RhdGVwaWNrZXJcbiAgICAgICAgICAgICAgICAgICBbYnNDb25maWddPVwieyBhZGFwdGl2ZVBvc2l0aW9uOiB0cnVlIH1cIlxuICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInN0YXJ0RGF0ZVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCIgKm5nSWY9XCJ2aXNpYmlsdHlDZmcubW9udGhPZlllYXJcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLTEyIGNvbC1tZC00IGNvbC1mb3JtLWxhYmVsXCJcbiAgICAgICAgICAgICAgIGZvcj1cInNjaGVkdWxlLW1vbnRoLW9mLXllYXJcIj5cbiAgICAgICAgICAgIHt7J3BvbHBDcm9uSm9iLm1vbnRoT2ZZZWFyJyB8IGh5cGVyVHJhbnM6bnVsbDpudWxsOmRlZmF1bHRSZXN9fVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGNvbC1tZC04XCI+XG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzY2hlZHVsZS1tb250aC1vZi15ZWFyXCJcbiAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwibW9udGhPZlllYXJcIj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkIHZhbHVlPVwiXCI+Li4uPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInt7b3B0LnZhbHVlfX1cIiAqbmdGb3I9XCJsZXQgb3B0IG9mIG1vbnRoc09mWWVhck9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAge3tvcHQudGV4dCB8IGh5cGVyVHJhbnM6bnVsbDpudWxsOmRlZmF1bHRSZXN9fVxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCIgKm5nSWY9XCJ2aXNpYmlsdHlDZmcuZGF5T2ZNb250aFwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtMTIgY29sLW1kLTQgY29sLWZvcm0tbGFiZWxcIlxuICAgICAgICAgICAgICAgZm9yPVwic2NoZWR1bGUtZGF5LW9mLW1vbnRoXCI+XG4gICAgICAgICAgICB7eydwb2xwQ3JvbkpvYi5kYXlPZk1vbnRoJyB8IGh5cGVyVHJhbnM6bnVsbDpudWxsOmRlZmF1bHRSZXN9fVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGNvbC1tZC04XCI+XG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzY2hlZHVsZS1kYXktb2YtbW9udGhcIlxuICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJkYXlPZk1vbnRoXCI+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZCB2YWx1ZT1cIlwiPi4uLjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ7e29wdC52YWx1ZX19XCIgKm5nRm9yPVwibGV0IG9wdCBvZiBkYXlzT2ZNb250aE9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAge3tvcHQudGV4dH19XG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cblxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiICpuZ0lmPVwidmlzaWJpbHR5Q2ZnLmRheU9mV2Vla1wiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtMTIgY29sLW1kLTQgY29sLWZvcm0tbGFiZWxcIlxuICAgICAgICAgICAgICAgZm9yPVwic2NoZWR1bGUtZGF5LW9mLXdlZWtcIj5cbiAgICAgICAgICAgIHt7J3BvbHBDcm9uSm9iLmRheU9mV2VlaycgfCBoeXBlclRyYW5zOm51bGw6bnVsbDpkZWZhdWx0UmVzfX1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtbWQtOFwiPlxuICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwic2NoZWR1bGUtZGF5LW9mLXdlZWtcIlxuICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJkYXlPZldlZWtcIj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkIHZhbHVlPVwiXCI+Li4uPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInt7b3B0LnZhbHVlfX1cIiAqbmdGb3I9XCJsZXQgb3B0IG9mIGRheXNPZldlZWtPcHRpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7b3B0LnRleHQgfCBoeXBlclRyYW5zOm51bGw6bnVsbDpkZWZhdWx0UmVzfX1cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiICpuZ0lmPVwidmlzaWJpbHR5Q2ZnLnRpbWV6b25lXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC0xMiBjb2wtbWQtNCBjb2wtZm9ybS1sYWJlbFwiXG4gICAgICAgICAgICAgICBmb3I9XCJzY2hlZHVsZS10aW1lem9uZVwiPlxuICAgICAgICAgICAge3sncG9scENyb25Kb2IudGltZXpvbmUnIHwgaHlwZXJUcmFuczpudWxsOm51bGw6ZGVmYXVsdFJlc319XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgY29sLW1kLThcIj5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgaWQ9XCJzY2hlZHVsZS10aW1lem9uZVwiXG4gICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwidGltZXpvbmVcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC13YXJuaW5nIGQtYmxvY2sgbXktMSBzbWFsbFwiICpuZ0lmPVwiZm9ybS5oYXNFcnJvcigndGltZXpvbmUnKSAmJiAoZm9ybS5nZXQoJ3RpbWV6b25lJykuZGlydHkgfHwgZm9ybS5nZXQoJ3RpbWV6b25lJykudG91Y2hlZClcIj5cbiAgICAgICAgICAgICAgICB7eydwb2xwQ3JvbkpvYi5lcnJvcnMudGltZXpvbmVJbnZhbGlkJyB8IGh5cGVyVHJhbnM6bnVsbDpudWxsOmRlZmF1bHRSZXN9fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBcbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIiAqbmdJZj1cInZpc2liaWx0eUNmZy50aW1lXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC0xMiBjb2wtbWQtNCBjb2wtZm9ybS1sYWJlbFwiXG4gICAgICAgICAgICAgICBmb3I9XCJzY2hlZHVsZS10aW1lXCI+XG4gICAgICAgICAgICB7eydwb2xwQ3JvbkpvYi50aW1lJyB8IGh5cGVyVHJhbnM6bnVsbDpudWxsOmRlZmF1bHRSZXN9fVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGNvbC1tZC04XCI+XG4gICAgICAgICAgICA8dGltZXBpY2tlciBpZD1cInNjaGVkdWxlLXRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwidGltZVwiPlxuICAgICAgICAgICAgPC90aW1lcGlja2VyPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiICpuZ0lmPVwidmlzaWJpbHR5Q2ZnLmV4Y2x1ZGVIb2xpZGF5c1wiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtMTIgY29sLW1kLTQgY29sLWZvcm0tbGFiZWxcIlxuICAgICAgICAgICAgICAgZm9yPVwic2NoZWR1bGUtZXhjbHVkZS1ob2xpZGF5c1wiPlxuICAgICAgICAgICAge3sncG9scENyb25Kb2IuZXhjbHVkZUhvbGlkYXlzJyB8IGh5cGVyVHJhbnM6bnVsbDpudWxsOmRlZmF1bHRSZXN9fVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGNvbC1tZC04XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXQgcG9zaXRpb24tc3RhdGljXCJcbiAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzY2hlZHVsZS1leGNsdWRlLWhvbGlkYXlzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiZXhjbHVkZUhvbGlkYXlzXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge3sncG9scENyb25Kb2IuaG9saWRheUxhYmVsJyB8IGh5cGVyVHJhbnM6bnVsbDpudWxsOmRlZmF1bHRSZXN9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiICpuZ0lmPVwidmlzaWJpbHR5Q2ZnLmV4Y2x1ZGVXZWVrZW5kc1wiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtMTIgY29sLW1kLTQgY29sLWZvcm0tbGFiZWxcIlxuICAgICAgICAgICAgICAgZm9yPVwic2NoZWR1bGUtZXhjbHVkZS13ZWVrZW5kc1wiPlxuICAgICAgICAgICAge3sncG9scENyb25Kb2IuZXhjbHVkZVdlZWtlbmRzJyB8IGh5cGVyVHJhbnM6bnVsbDpudWxsOmRlZmF1bHRSZXN9fVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGNvbC1tZC04XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXQgcG9zaXRpb24tc3RhdGljXCJcbiAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzY2hlZHVsZS1leGNsdWRlLXdlZWtlbmRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiZXhjbHVkZVdlZWtlbmRzXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCIgKm5nSWY9XCJ2aXNpYmlsdHlDZmcuZXhjbHVkZU90aGVyc1wiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtMTIgY29sLW1kLTQgY29sLWZvcm0tbGFiZWxcIlxuICAgICAgICAgICAgICAgZm9yPVwic2NoZWR1bGUtZXhjbHVkZS1vdGhlcnNcIj5cbiAgICAgICAgICAgIHt7J3BvbHBDcm9uSm9iLmV4Y2x1ZGVPdGhlcnMnIHwgaHlwZXJUcmFuczpudWxsOm51bGw6ZGVmYXVsdFJlc319XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgY29sLW1kLThcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dCBwb3NpdGlvbi1zdGF0aWNcIlxuICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNjaGVkdWxlLWV4Y2x1ZGUtb3RoZXJzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiZXhjbHVkZU90aGVyc1wiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHt7J3BvbHBDcm9uSm9iLm90aGVyTGFiZWwnIHwgaHlwZXJUcmFuczpudWxsOm51bGw6ZGVmYXVsdFJlc319XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIiAqbmdJZj1cInZpc2liaWx0eUNmZy5lbmREYXRlXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC0xMiBjb2wtbWQtNCBjb2wtZm9ybS1sYWJlbFwiXG4gICAgICAgICAgICAgICBmb3I9XCJzY2hlZHVsZS1lbmQtZGF0ZVwiPlxuICAgICAgICAgICAge3sncG9scENyb25Kb2IuZW5kRGF0ZScgfCBoeXBlclRyYW5zOm51bGw6bnVsbDpkZWZhdWx0UmVzfX1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtbWQtOFwiPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgaWQ9XCJzY2hlZHVsZS1lbmQtZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgYnNEYXRlcGlja2VyXG4gICAgICAgICAgICAgICAgICAgW2JzQ29uZmlnXT1cInsgYWRhcHRpdmVQb3NpdGlvbjogdHJ1ZSB9XCJcbiAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJlbmREYXRlXCI+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgYSBvZiBhbGVydHNcIj5cbiAgICAgICAgPGFsZXJ0IFt0eXBlXT1cImEudHlwZVwiIFtkaXNtaXNzT25UaW1lb3V0XT1cImEudGltZW91dFwiPlxuICAgICAgICAgICAge3thLm1lc3NhZ2UgfCBoeXBlclRyYW5zOm51bGw6bnVsbDpkZWZhdWx0UmVzfX1cbiAgICAgICAgPC9hbGVydD5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICBcbiAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQgbWItNFwiICpuZ0lmPVwiIXNldHRpbmdzLmhpZGVDb25maXJtIHx8ICFzZXR0aW5ncy5oaWRlQ2FuY2VsXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiY2FuY2VsKClcIiAqbmdJZj1cIiFzZXR0aW5ncy5oaWRlQ2FuY2VsXCI+XG4gICAgICAgICAgICB7eydwb2xwQ3JvbkpvYi5jYW5jZWxCdG4nIHwgaHlwZXJUcmFuczpudWxsOm51bGw6ZGVmYXVsdFJlc319XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiXG4gICAgICAgICAgICAgICAgKm5nSWY9XCIhc2V0dGluZ3MuaGlkZUNvbmZpcm1cIj5cbiAgICAgICAgICAgIHt7J3BvbHBDcm9uSm9iLnN1Ym1pdEJ0bicgfCBoeXBlclRyYW5zOm51bGw6bnVsbDpkZWZhdWx0UmVzfX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG48L2Zvcm0+XG4iXX0=