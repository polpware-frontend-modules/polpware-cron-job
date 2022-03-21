import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { safeParseInt } from '@polpware/fe-utilities';
import { AlertDefaultImpl } from '@polpware/ngx-alert';
import { DefaultFormBaseComponent } from '@polpware/ngx-form-common';
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
    const opt_r17 = ctx.$implicit;
    const i_r18 = ctx.index;
    const ctx_r15 = i0.ɵɵnextContext(2);
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
    const ctx_r16 = i0.ɵɵnextContext(2);
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
    const ctx_r0 = i0.ɵɵnextContext();
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
    const opt_r20 = ctx.$implicit;
    const ctx_r19 = i0.ɵɵnextContext(2);
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
    const ctx_r1 = i0.ɵɵnextContext();
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
    const ctx_r21 = i0.ɵɵnextContext(2);
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
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(3, 3, "polpCronJob.customExpr", null, null, ctx_r2.defaultRes), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("autofocus", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.form.hasError("customExpr") && (ctx_r2.form.get("customExpr").dirty || ctx_r2.form.get("customExpr").touched));
} }
const _c0 = function () { return { adaptivePosition: true }; };
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
    const ctx_r3 = i0.ɵɵnextContext();
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
    const opt_r23 = ctx.$implicit;
    const ctx_r22 = i0.ɵɵnextContext(2);
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
    const ctx_r4 = i0.ɵɵnextContext();
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
    const opt_r25 = ctx.$implicit;
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
    const ctx_r5 = i0.ɵɵnextContext();
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
    const opt_r27 = ctx.$implicit;
    const ctx_r26 = i0.ɵɵnextContext(2);
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
    const ctx_r6 = i0.ɵɵnextContext();
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
    const ctx_r28 = i0.ɵɵnextContext(2);
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
    const ctx_r7 = i0.ɵɵnextContext();
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
    const ctx_r8 = i0.ɵɵnextContext();
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
    const ctx_r9 = i0.ɵɵnextContext();
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
    const ctx_r10 = i0.ɵɵnextContext();
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
    const ctx_r11 = i0.ɵɵnextContext();
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
    const ctx_r12 = i0.ɵɵnextContext();
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
    const a_r29 = ctx.$implicit;
    const ctx_r13 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("type", a_r29.type)("dismissOnTimeout", a_r29.timeout);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(3, 3, a_r29.message, null, null, ctx_r13.defaultRes), " ");
} }
function ScheduleTimePickerComponent_div_15_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 45);
    i0.ɵɵlistener("click", function ScheduleTimePickerComponent_div_15_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r33); const ctx_r32 = i0.ɵɵnextContext(2); return ctx_r32.cancel(); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "hyperTrans");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r30 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(2, 1, "polpCronJob.cancelBtn", null, null, ctx_r30.defaultRes), " ");
} }
function ScheduleTimePickerComponent_div_15_button_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 46);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "hyperTrans");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r31 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(2, 1, "polpCronJob.submitBtn", null, null, ctx_r31.defaultRes), " ");
} }
function ScheduleTimePickerComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 42);
    i0.ɵɵtemplate(1, ScheduleTimePickerComponent_div_15_button_1_Template, 3, 6, "button", 43);
    i0.ɵɵtemplate(2, ScheduleTimePickerComponent_div_15_button_2_Template, 3, 6, "button", 44);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r14.hideCancelBtn);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r14.hideSubmitBtn);
} }
const defaultSettings = {
    hideSubmitBtn: false,
    hideCancelBtn: true
};
const formValidator = (control) => {
    const scheduleTypeVal = safeParseInt(control.get('scheduleType').value);
    if (scheduleTypeVal == 0) {
        return { scheduleType: true };
    }
    const timezoneVal = safeParseInt(control.get('timezone').value);
    if (timezoneVal > 13 || timezoneVal < -11) {
        return { timezone: true };
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
        timezone: data.timezone,
        startDate: data.startDate,
        endDate: data.endDate,
        time: data.time,
        monthOfYear: data.monthOfYear,
        dayOfWeek: data.dayOfWeek,
        dayOfMonth: data.dayOfMonth
    };
}
export class ScheduleTimePickerComponent extends DefaultFormBaseComponent {
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
        if (!data.initValue.firstChange) {
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
        const timezone = safeParseInt(a.timezone);
        return {
            isRecurrent: false,
            timezone: timezone,
            startDate: a.startDate,
            time: a.time
        };
    }
    getRecurrentValue(a) {
        const recurrence = safeParseInt(a.recurrence);
        const timezone = safeParseInt(a.timezone);
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
}
ScheduleTimePickerComponent.ɵfac = function ScheduleTimePickerComponent_Factory(t) { return new (t || ScheduleTimePickerComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
ScheduleTimePickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ScheduleTimePickerComponent, selectors: [["polp-bs-schedule-time-picker"]], inputs: { initSettings: "initSettings", initValue: "initValue" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 16, vars: 16, consts: [[3, "formGroup", "ngSubmit"], ["class", "form-group row", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-end mb-4", 4, "ngIf"], [1, "form-group", "row"], [1, "col-12", "col-md-4", "col-form-label"], [1, "col-12", "col-md-8"], ["class", "form-check form-check-inline", 4, "ngFor", "ngForOf"], ["class", "text-warning d-block my-1 small", 4, "ngIf"], [1, "form-check", "form-check-inline"], ["formControlName", "scheduleType", "type", "radio", 1, "form-check-input", 3, "id", "value"], [1, "form-check-label", 3, "for"], [1, "text-warning", "d-block", "my-1", "small"], ["for", "schedule-recurrence", 1, "col-12", "col-md-4", "col-form-label"], ["id", "schedule-recurrence", "formControlName", "recurrence", 1, "form-control"], ["selected", "", "value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["for", "schedule-custom-expr", 1, "col-12", "col-md-4", "col-form-label"], ["type", "text", "id", "schedule-custom-expr", "formControlName", "customExpr", 1, "form-control", 3, "autofocus"], ["for", "schedule-start-date", 1, "col-12", "col-md-4", "col-form-label"], ["type", "text", "id", "schedule-start-date", "bsDatepicker", "", "formControlName", "startDate", 1, "form-control", 3, "bsConfig"], ["for", "schedule-month-of-year", 1, "col-12", "col-md-4", "col-form-label"], ["id", "schedule-month-of-year", "formControlName", "monthOfYear", 1, "form-control"], ["for", "schedule-day-of-month", 1, "col-12", "col-md-4", "col-form-label"], ["id", "schedule-day-of-month", "formControlName", "dayOfMonth", 1, "form-control"], ["for", "schedule-day-of-week", 1, "col-12", "col-md-4", "col-form-label"], ["id", "schedule-day-of-week", "formControlName", "dayOfWeek", 1, "form-control"], ["for", "schedule-timezone", 1, "col-12", "col-md-4", "col-form-label"], ["type", "number", "id", "schedule-timezone", "formControlName", "timezone", 1, "form-control"], ["for", "schedule-time", 1, "col-12", "col-md-4", "col-form-label"], ["id", "schedule-time", "formControlName", "time"], ["for", "schedule-exclude-holidays", 1, "col-12", "col-md-4", "col-form-label"], [1, "form-check"], ["type", "checkbox", "id", "schedule-exclude-holidays", "formControlName", "excludeHolidays", 1, "form-check-input", "position-static"], ["for", "schedule-exclude-weekends", 1, "col-12", "col-md-4", "col-form-label"], ["type", "checkbox", "id", "schedule-exclude-weekends", "formControlName", "excludeWeekends", 1, "form-check-input", "position-static"], ["for", "schedule-exclude-others", 1, "col-12", "col-md-4", "col-form-label"], ["id", "schedule-exclude-others", "type", "checkbox", "formControlName", "excludeOthers", 1, "form-check-input", "position-static"], ["for", "schedule-end-date", 1, "col-12", "col-md-4", "col-form-label"], ["type", "text", "id", "schedule-end-date", "bsDatepicker", "", "formControlName", "endDate", 1, "form-control", 3, "bsConfig"], [3, "type", "dismissOnTimeout"], [1, "d-flex", "justify-content-end", "mb-4"], ["type", "button", "class", "btn btn-warning", 3, "click", 4, "ngIf"], ["type", "submit", "class", "btn btn-success", 4, "ngIf"], ["type", "button", 1, "btn", "btn-warning", 3, "click"], ["type", "submit", 1, "btn", "btn-success"]], template: function ScheduleTimePickerComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵproperty("ngIf", !ctx.hideSubmitBtn || !ctx.hideCancelBtn);
    } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i2.NgIf, i2.NgForOf, i1.DefaultValueAccessor, i1.RadioControlValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.SelectControlValueAccessor, i1.NgSelectOption, i1.ɵangular_packages_forms_forms_x, i3.AutofocusDirective, i4.BsDatepickerInputDirective, i4.BsDatepickerDirective, i1.NumberValueAccessor, i5.TimepickerComponent, i1.CheckboxControlValueAccessor, i6.AlertComponent], pipes: [i7.HyperTranslatePipe], styles: [""] });
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
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUtdGltZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2Nyb24tam9iLyIsInNvdXJjZXMiOlsibGliL3NjaGVkdWxlLXRpbWUtcGlja2VyL3NjaGVkdWxlLXRpbWUtcGlja2VyLmNvbXBvbmVudC50cyIsImxpYi9zY2hlZHVsZS10aW1lLXBpY2tlci9zY2hlZHVsZS10aW1lLXBpY2tlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBK0MsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFFLFdBQVcsRUFBeUQsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFvQixNQUFNLHFCQUFxQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSx3QkFBd0IsRUFBc0IsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDdEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsc0JBQXNCLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBaUIsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7SUNGMUksOEJBRUk7SUFBQSw0QkFLQTtJQUFBLGlDQUVJO0lBQUEsWUFDSjs7SUFBQSxpQkFBUTtJQUNaLGlCQUFNOzs7OztJQU5LLGVBQWlDO0lBQWpDLDREQUFpQztJQUNqQyxnREFBcUI7SUFFckIsZUFBa0M7SUFBbEMsNkRBQWtDO0lBQ3JDLGVBQ0o7SUFESSxtR0FDSjs7O0lBRUosZ0NBQ0k7SUFBQSxZQUNKOztJQUFBLGlCQUFPOzs7SUFESCxlQUNKO0lBREksZ0lBQ0o7OztJQW5CUiw4QkFDSTtJ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QWVKLDRFQUNJO1FBZ0JKLDRFQUNJO1FBaUJKLDRFQUNJO1FBZ0JKLDRFQUNJO1FBZUosNEVBQ0k7UUFXSixnRkFDSTtRQWdCSiw4RUFDSTtRQWFKLGdGQUNJO1FBaUJKLDhFQUNJO1FBY0osZ0dBQ0k7UUFLSiw4RUFDSTtRQVNSLGlCQUFPOztRQTFPRCxvQ0FBa0I7UUFDUSxlQUFpQztRQUFqQyxvREFBaUM7UUF1QmpDLGVBQStCO1FBQS9CLGtEQUErQjtRQWlCL0IsZUFBMEQ7UUFBMUQsaUZBQTBEO1FBaUIxRCxlQUE4QjtRQUE5QixpREFBOEI7UUFnQjlCLGVBQWdDO1FBQWhDLG1EQUFnQztRQWlCaEMsZUFBK0I7UUFBL0Isa0RBQStCO1FBa0IvQixlQUE4QjtRQUE5QixpREFBOEI7UUFpQjlCLGVBQTZCO1FBQTdCLGdEQUE2QjtRQWdCN0IsZUFBeUI7UUFBekIsNENBQXlCO1FBWXpCLGVBQW9DO1FBQXBDLHVEQUFvQztRQWlCcEMsZUFBb0M7UUFBcEMsdURBQW9DO1FBY3BDLGVBQWtDO1FBQWxDLHFEQUFrQztRQWtCbEMsZUFBNEI7UUFBNUIsK0NBQTRCO1FBZTFDLGVBQXdCO1FBQXhCLG9DQUF3QjtRQU1PLGVBQXdDO1FBQXhDLCtEQUF3Qzs7a0REakk1RSwyQkFBMkI7Y0FMdkMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLFdBQVcsRUFBRSx1Q0FBdUM7Z0JBQ3BELFNBQVMsRUFBRSxDQUFDLHNDQUFzQyxDQUFDO2FBQ3REOztrQkFJSSxLQUFLOztrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIFZhbGlkYXRpb25FcnJvcnMsIFZhbGlkYXRvckZuIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgc2FmZVBhcnNlSW50IH0gZnJvbSAnQHBvbHB3YXJlL2ZlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBBbGVydERlZmF1bHRJbXBsLCBJSGFzQWxlcnRGZWF0dXJlIH0gZnJvbSAnQHBvbHB3YXJlL25neC1hbGVydCc7XG5pbXBvcnQgeyBEZWZhdWx0Rm9ybUJhc2VDb21wb25lbnQsIElEZWZhdWx0Rm9ybUlucHV0cyB9IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtZm9ybS1jb21tb24nO1xuaW1wb3J0IHsgcGFyc2VTdHJpbmcgfSBmcm9tICdjcm9uLXBhcnNlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlZmF1bHREaWN0IH0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQgeyBnZXREYXlzT2ZNb250aCwgZ2V0RGF5c09mV2VlaywgZ2V0RGVmYXVsdFNjaGVkdWxlVGltZSwgZ2V0TW9udGhzT2ZZZWFyLCBJbnRlcnZhbEVudW0sIElTY2hlZHVsZVRpbWUsIFNjaGVkdWxlVHlwZUVudW0gfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcblxuZXhwb3J0IGludGVyZmFjZSBJU2V0dGluZ3MgZXh0ZW5kcyBJRGVmYXVsdEZvcm1JbnB1dHMge1xuICAgIGhpZGVTdWJtaXRCdG4/OiBib29sZWFuO1xuICAgIGhpZGVDYW5jZWxCdG4/OiBib29sZWFuO1xufVxuXG5jb25zdCBkZWZhdWx0U2V0dGluZ3M6IElTZXR0aW5ncyA9IHtcbiAgICBoaWRlU3VibWl0QnRuOiBmYWxzZSxcbiAgICBoaWRlQ2FuY2VsQnRuOiB0cnVlXG59XG5cbmNvbnN0IGZvcm1WYWxpZGF0b3I6IFZhbGlkYXRvckZuID0gKGNvbnRyb2w6IEZvcm1Hcm91cCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcblxuICAgIGNvbnN0IHNjaGVkdWxlVHlwZVZhbCA9IHNhZmVQYXJzZUludCgoY29udHJvbC5nZXQoJ3NjaGVkdWxlVHlwZScpIGFzIEZvcm1Db250cm9sKS52YWx1ZSk7XG4gICAgaWYgKHNjaGVkdWxlVHlwZVZhbCA9PSAwKSB7XG4gICAgICAgIHJldHVybiB7IHNjaGVkdWxlVHlwZTogdHJ1ZSB9O1xuICAgIH1cbiAgICBjb25zdCB0aW1lem9uZVZhbCA9IHNhZmVQYXJzZUludCgoY29udHJvbC5nZXQoJ3RpbWV6b25lJykgYXMgRm9ybUNvbnRyb2wpLnZhbHVlKTtcbiAgICBpZiAodGltZXpvbmVWYWwgPiAxMyB8fCB0aW1lem9uZVZhbCA8IC0xMSkge1xuICAgICAgICByZXR1cm4geyB0aW1lem9uZTogdHJ1ZSB9O1xuICAgIH1cbiAgICBpZiAoc2NoZWR1bGVUeXBlVmFsID09IDIpIHsgLy8gb25lIHRpbWVcbiAgICAgICAgY29uc3QgcmVjdXJyZW5jZVZhbCA9IHNhZmVQYXJzZUludCgoY29udHJvbC5nZXQoJ3JlY3VycmVuY2UnKSBhcyBGb3JtQ29udHJvbCkudmFsdWUpO1xuICAgICAgICBpZiAocmVjdXJyZW5jZVZhbCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4geyByZWN1cnJlbmNlOiB0cnVlIH1cbiAgICAgICAgfSBlbHNlIGlmIChyZWN1cnJlbmNlVmFsID09IEludGVydmFsRW51bS5DdXN0b20pIHtcbiAgICAgICAgICAgIGNvbnN0IGN1c3RvbUV4cHJWYWwgPSAoY29udHJvbC5nZXQoJ2N1c3RvbUV4cHInKSBhcyBGb3JtQ29udHJvbCkudmFsdWU7XG4gICAgICAgICAgICBpZiAoIWN1c3RvbUV4cHJWYWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBjdXN0b21FeHByOiB0cnVlIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHZhbGlkYXRlXG4gICAgICAgICAgICAgICAgY29uc3QgciA9IHBhcnNlU3RyaW5nKGN1c3RvbUV4cHJWYWwpO1xuICAgICAgICAgICAgICAgIGlmIChyLmVycm9ycyAmJiBPYmplY3Qua2V5cyhyLmVycm9ycykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGN1c3RvbUV4cHI6IHRydWUgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIElGb3JtRmllbGRzIHtcbiAgICBzY2hlZHVsZVR5cGU6IG51bWJlcjtcbiAgICByZWN1cnJlbmNlOiBudW1iZXI7XG4gICAgZXhjbHVkZUhvbGlkYXlzOiBib29sZWFuO1xuICAgIGhvbGlkYXlzOiBzdHJpbmc7XG4gICAgZXhjbHVkZVdlZWtlbmRzOiBib29sZWFuO1xuICAgIGV4Y2x1ZGVPdGhlcnM6IGJvb2xlYW47XG4gICAgb3RoZXJEYXlzOiBzdHJpbmc7XG4gICAgY3VzdG9tRXhwcjogc3RyaW5nO1xuICAgIHRpbWV6b25lOiBudW1iZXI7XG4gICAgc3RhcnREYXRlOiBEYXRlO1xuICAgIGVuZERhdGU6IERhdGU7XG4gICAgbW9udGhPZlllYXI6IG51bWJlcjtcbiAgICBkYXlPZk1vbnRoOiBudW1iZXI7XG4gICAgZGF5T2ZXZWVrOiBudW1iZXI7XG4gICAgdGltZTogRGF0ZTtcbn1cblxuZnVuY3Rpb24gbWFwVG9Gb3JtRmllbGRzKGRhdGE6IElTY2hlZHVsZVRpbWUpIHtcbiAgICBjb25zdCBkZWZhdWx0RGF0YSA9IGdldERlZmF1bHRTY2hlZHVsZVRpbWUoKTtcbiAgICBkYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdERhdGEsIGRhdGEgfHwge30pO1xuICAgIHJldHVybiB7XG4gICAgICAgIC8vIFRoZSB2YWx1ZSBmb3IgdGhlIHJhZGlvIGJ1dHRvbiBpcyB0eXBlIG9mIHN0cmluZy5cbiAgICAgICAgc2NoZWR1bGVUeXBlOiAoZGF0YS5pc1JlY3VycmVudCA/IFNjaGVkdWxlVHlwZUVudW0uUmVjdXJyZW50IDogU2NoZWR1bGVUeXBlRW51bS5PbmVUaW1lKS50b1N0cmluZygpLFxuICAgICAgICByZWN1cnJlbmNlOiBkYXRhLnJlY3VycmVuY2UsXG4gICAgICAgIGV4Y2x1ZGVIb2xpZGF5czogISFkYXRhLmhvbGlkYXlzLFxuICAgICAgICBob2xpZGF5czogZGF0YS5ob2xpZGF5cyxcbiAgICAgICAgZXhjbHVkZVdlZWtlbmRzOiBkYXRhLmV4Y2x1ZGVXZWVrZW5kcyxcbiAgICAgICAgZXhjbHVkZU90aGVyczogISFkYXRhLm90aGVyRGF5cyxcbiAgICAgICAgb3RoZXJEYXlzOiBkYXRhLm90aGVyRGF5cyxcbiAgICAgICAgY3VzdG9tRXhwcjogZGF0YS5jdXN0b21FeHByLFxuICAgICAgICB0aW1lem9uZTogZGF0YS50aW1lem9uZSxcbiAgICAgICAgc3RhcnREYXRlOiBkYXRhLnN0YXJ0RGF0ZSxcbiAgICAgICAgZW5kRGF0ZTogZGF0YS5lbmREYXRlLFxuICAgICAgICB0aW1lOiBkYXRhLnRpbWUsXG4gICAgICAgIG1vbnRoT2ZZZWFyOiBkYXRhLm1vbnRoT2ZZZWFyLFxuICAgICAgICBkYXlPZldlZWs6IGRhdGEuZGF5T2ZXZWVrLFxuICAgICAgICBkYXlPZk1vbnRoOiBkYXRhLmRheU9mTW9udGhcbiAgICB9O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BvbHAtYnMtc2NoZWR1bGUtdGltZS1waWNrZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zY2hlZHVsZS10aW1lLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vc2NoZWR1bGUtdGltZS1waWNrZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNjaGVkdWxlVGltZVBpY2tlckNvbXBvbmVudCBleHRlbmRzIERlZmF1bHRGb3JtQmFzZUNvbXBvbmVudFxuICAgIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgSUhhc0FsZXJ0RmVhdHVyZSB7XG5cbiAgICBASW5wdXQoKSBpbml0U2V0dGluZ3M6IElTZXR0aW5ncyA9IHt9O1xuICAgIEBJbnB1dCgpIGluaXRWYWx1ZTogSVNjaGVkdWxlVGltZSA9IG51bGw7XG5cbiAgICBzZXR0aW5nczogSVNldHRpbmdzID0ge307XG5cbiAgICBkZWZhdWx0UmVzID0gZGVmYXVsdERpY3Q7XG5cbiAgICAvLyBTY2hlZHVsZSBtb2RsZVxuICAgIGZvcm06IEZvcm1Hcm91cDtcbiAgICBzY2hlZHVsZVR5cGVPcHRpb25zID0gW3tcbiAgICAgICAgdmFsdWU6IFNjaGVkdWxlVHlwZUVudW0uT25lVGltZSxcbiAgICAgICAgdGV4dDogJ3BvbHBDcm9uSm9iLm9uZVRpbWVTY2hlZHVsZSdcbiAgICB9LCB7XG4gICAgICAgIHZhbHVlOiBTY2hlZHVsZVR5cGVFbnVtLlJlY3VycmVudCxcbiAgICAgICAgdGV4dDogJ3BvbHBDcm9uSm9iLnJlY3VycmVudFNjaGVkdWxlJ1xuICAgIH1dO1xuXG4gICAgcmVjdXJyZW5jZU9wdGlvbnMgPSBbe1xuICAgICAgICB2YWx1ZTogSW50ZXJ2YWxFbnVtLkRheSxcbiAgICAgICAgdGV4dDogJ3BvbHBDcm9uSm9iLmV2ZXJ5RGF5J1xuICAgIH0sIHtcbiAgICAgICAgdmFsdWU6IEludGVydmFsRW51bS5XZWVrLFxuICAgICAgICB0ZXh0OiAncG9scENyb25Kb2IuZXZlcnlXZWVrJ1xuICAgIH0sIHtcbiAgICAgICAgdmFsdWU6IEludGVydmFsRW51bS5Nb250aCxcbiAgICAgICAgdGV4dDogJ3BvbHBDcm9uSm9iLmV2ZXJ5TW9udGgnXG4gICAgfSwge1xuICAgICAgICB2YWx1ZTogSW50ZXJ2YWxFbnVtLlllYXIsXG4gICAgICAgIHRleHQ6ICdwb2xwQ3JvbkpvYi5ldmVyeVllYXInXG4gICAgfSwge1xuICAgICAgICB2YWx1ZTogSW50ZXJ2YWxFbnVtLkN1c3RvbSxcbiAgICAgICAgdGV4dDogJ3BvbHBDcm9uSm9iLmN1c3RvbUludGVydmFsJ1xuICAgIH1dO1xuXG4gICAgZGF5c09mV2Vla09wdGlvbnMgPSBnZXREYXlzT2ZXZWVrKCk7XG4gICAgbW9udGhzT2ZZZWFyT3B0aW9ucyA9IGdldE1vbnRoc09mWWVhcigpO1xuICAgIGRheXNPZk1vbnRoT3B0aW9ucyA9IGdldERheXNPZk1vbnRoKCk7XG5cbiAgICB2aXNpYmlsdHlDZmcgPSB7XG4gICAgICAgIHNjaGVkdWxlVHlwZTogdHJ1ZSxcbiAgICAgICAgcmVjdXJyZW5jZTogZmFsc2UsXG4gICAgICAgIGN1c3RvbUV4cHI6IGZhbHNlLFxuICAgICAgICBleGNsdWRlSG9saWRheXM6IGZhbHNlLFxuICAgICAgICBleGNsdWRlV2Vla2VuZHM6IGZhbHNlLFxuICAgICAgICBleGNsdWRlT3RoZXJzOiBmYWxzZSxcbiAgICAgICAgdGltZXpvbmU6IGZhbHNlLFxuICAgICAgICBzdGFydERhdGU6IGZhbHNlLFxuICAgICAgICBlbmREYXRlOiBmYWxzZSxcbiAgICAgICAgdGltZTogZmFsc2UsXG4gICAgICAgIG1vbnRoT2ZZZWFyOiBmYWxzZSxcbiAgICAgICAgZGF5T2ZNb250aDogZmFsc2UsXG4gICAgICAgIGRheU9mV2VlazogZmFsc2VcbiAgICB9O1xuXG4gICAgaXNTYXZpbmc6IGJvb2xlYW47XG4gICAgYWxlcnRQcm92aWRlciA9IG5ldyBBbGVydERlZmF1bHRJbXBsKCk7XG5cbiAgICBwcml2YXRlIF9zdWJyOiBTdWJzY3JpcHRpb247XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9idWlsZGVyOiBGb3JtQnVpbGRlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuXG4gICAgZ2V0IGFsZXJ0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxlcnRQcm92aWRlci5kYXRhO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdFNldHRpbmdzLCB0aGlzLmluaXRTZXR0aW5ncyk7XG4gICAgICAgIHRoaXMuaGlkZUNhbmNlbEJ0biA9IHRoaXMuc2V0dGluZ3MuaGlkZUNhbmNlbEJ0bjtcbiAgICAgICAgdGhpcy5oaWRlU3VibWl0QnRuID0gdGhpcy5zZXR0aW5ncy5oaWRlU3VibWl0QnRuO1xuXG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IG1hcFRvRm9ybUZpZWxkcyh0aGlzLmluaXRWYWx1ZSk7XG4gICAgICAgIHRoaXMuZm9ybSA9IHRoaXMuX2J1aWxkZXIuZ3JvdXAoZmllbGRzLCB7IHZhbGlkYXRvcnM6IFtmb3JtVmFsaWRhdG9yXSB9KTtcbiAgICAgICAgdGhpcy51cGRhdGVGaWVsZFZpc2liaWxpdHkodGhpcy5mb3JtLnZhbHVlKTtcblxuICAgICAgICB0aGlzLl9zdWJyID0gdGhpcy5mb3JtLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoYSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkVmlzaWJpbGl0eShhKTtcblxuICAgICAgICAgICAgdGhpcy5ub3RpZnlWYWxpZGF0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVZhbHVlQ2hhbmdlcyh0aGlzLmNvbXB1dGVPdXRWYWx1ZShhKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLl9zdWJyLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoZGF0YTogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICBpZiAoIWRhdGEuaW5pdFZhbHVlLmZpcnN0Q2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZvcm1EYXRhKGRhdGEuaW5pdFZhbHVlLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlRm9ybURhdGEoZGF0YTogSVNjaGVkdWxlVGltZSkge1xuICAgICAgICBjb25zdCBjaGFuZ2VzID0gbWFwVG9Gb3JtRmllbGRzKGRhdGEpO1xuICAgICAgICB0aGlzLmZvcm0uc2V0VmFsdWUoY2hhbmdlcywge1xuICAgICAgICAgICAgZW1pdEV2ZW50OiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB1cGRhdGVGaWVsZFZpc2liaWxpdHkoYTogSUZvcm1GaWVsZHMpIHtcblxuICAgICAgICBmb3IgKGxldCBrIGluIHRoaXMudmlzaWJpbHR5Q2ZnKSB7XG4gICAgICAgICAgICBpZiAodGhpcy52aXNpYmlsdHlDZmcuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2liaWx0eUNmZ1trXSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudmlzaWJpbHR5Q2ZnLnNjaGVkdWxlVHlwZSA9IHRydWU7XG5cbiAgICAgICAgY29uc3Qgc2NoZWR1bGVUeXBlVmFsID0gc2FmZVBhcnNlSW50KGEuc2NoZWR1bGVUeXBlKTtcblxuICAgICAgICBpZiAoc2NoZWR1bGVUeXBlVmFsID09IDEpIHtcbiAgICAgICAgICAgIHRoaXMudmlzaWJpbHR5Q2ZnLnN0YXJ0RGF0ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnZpc2liaWx0eUNmZy50aW1lID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudmlzaWJpbHR5Q2ZnLnRpbWV6b25lID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmlzaWJpbHR5Q2ZnLnJlY3VycmVuY2UgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcuZXhjbHVkZUhvbGlkYXlzID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudmlzaWJpbHR5Q2ZnLmV4Y2x1ZGVXZWVrZW5kcyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnZpc2liaWx0eUNmZy5leGNsdWRlT3RoZXJzID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudmlzaWJpbHR5Q2ZnLmVuZERhdGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcudGltZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnZpc2liaWx0eUNmZy50aW1lem9uZSA9IHRydWU7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlY3VycmVudFZhbCA9IHNhZmVQYXJzZUludChhLnJlY3VycmVuY2UpO1xuICAgICAgICAgICAgaWYgKHJlY3VycmVudFZhbCA9PSBJbnRlcnZhbEVudW0uWWVhcikge1xuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJpbHR5Q2ZnLm1vbnRoT2ZZZWFyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2liaWx0eUNmZy5kYXlPZk1vbnRoID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVjdXJyZW50VmFsID09IEludGVydmFsRW51bS5Nb250aCkge1xuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJpbHR5Q2ZnLmRheU9mTW9udGggPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZWN1cnJlbnRWYWwgPT0gSW50ZXJ2YWxFbnVtLldlZWspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2liaWx0eUNmZy5kYXlPZldlZWsgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZWN1cnJlbnRWYWwgPT0gSW50ZXJ2YWxFbnVtLkN1c3RvbSkge1xuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJpbHR5Q2ZnLnRpbWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2liaWx0eUNmZy5jdXN0b21FeHByID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBjb21wdXRlT3V0VmFsdWUoYTogSUZvcm1GaWVsZHMpIHtcbiAgICAgICAgY29uc3Qgc2NoZWR1bGVUeXBlVmFsID0gc2FmZVBhcnNlSW50KGEuc2NoZWR1bGVUeXBlKTtcbiAgICAgICAgY29uc3Qgb3V0cHV0ID0gc2NoZWR1bGVUeXBlVmFsID09IFNjaGVkdWxlVHlwZUVudW0uT25lVGltZSA/XG4gICAgICAgICAgICB0aGlzLmdldE9uZVRpbWVWYWx1ZShhKSA6IHRoaXMuZ2V0UmVjdXJyZW50VmFsdWUoYSk7XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldE9uZVRpbWVWYWx1ZShhOiBJRm9ybUZpZWxkcyk6IElTY2hlZHVsZVRpbWUge1xuICAgICAgICBjb25zdCB0aW1lem9uZSA9IHNhZmVQYXJzZUludChhLnRpbWV6b25lKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXNSZWN1cnJlbnQ6IGZhbHNlLFxuICAgICAgICAgICAgdGltZXpvbmU6IHRpbWV6b25lLFxuICAgICAgICAgICAgc3RhcnREYXRlOiBhLnN0YXJ0RGF0ZSxcbiAgICAgICAgICAgIHRpbWU6IGEudGltZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRSZWN1cnJlbnRWYWx1ZShhOiBJRm9ybUZpZWxkcyk6IElTY2hlZHVsZVRpbWUge1xuICAgICAgICBjb25zdCByZWN1cnJlbmNlID0gc2FmZVBhcnNlSW50KGEucmVjdXJyZW5jZSk7XG4gICAgICAgIGNvbnN0IHRpbWV6b25lID0gc2FmZVBhcnNlSW50KGEudGltZXpvbmUpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc1JlY3VycmVudDogdHJ1ZSxcbiAgICAgICAgICAgIHJlY3VycmVuY2U6IHJlY3VycmVuY2UsXG4gICAgICAgICAgICBob2xpZGF5czogYS5leGNsdWRlSG9saWRheXMgPyBhLmhvbGlkYXlzIDogJycsXG4gICAgICAgICAgICBleGNsdWRlV2Vla2VuZHM6IGEuZXhjbHVkZVdlZWtlbmRzLFxuICAgICAgICAgICAgb3RoZXJEYXlzOiBhLmV4Y2x1ZGVPdGhlcnMgPyBhLm90aGVyRGF5cyA6ICcnLFxuICAgICAgICAgICAgdGltZXpvbmU6IHRpbWV6b25lLFxuICAgICAgICAgICAgc3RhcnREYXRlOiBhLnN0YXJ0RGF0ZSxcbiAgICAgICAgICAgIGVuZERhdGU6IGEuZW5kRGF0ZSxcbiAgICAgICAgICAgIHRpbWU6IGEudGltZSxcbiAgICAgICAgICAgIG1vbnRoT2ZZZWFyOiBhLm1vbnRoT2ZZZWFyLFxuICAgICAgICAgICAgZGF5T2ZNb250aDogYS5kYXlPZk1vbnRoLFxuICAgICAgICAgICAgZGF5T2ZXZWVrOiBhLmRheU9mV2Vla1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbmZpcm0oKSB7XG4gICAgICAgIGlmICghdGhpcy5mb3JtLnZhbGlkKSB7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0UHJvdmlkZXIud2FybmluZygncG9scENyb25Kb2IuZXJyb3JzLmdlbmVyYWwnLCA1MDAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG91dHB1dCA9IHRoaXMuY29tcHV0ZU91dFZhbHVlKHRoaXMuZm9ybS52YWx1ZSk7XG4gICAgICAgIHRoaXMub25TYXZlLmVtaXQob3V0cHV0KTtcbiAgICB9XG5cbiAgICBjYW5jZWwoKSB7XG4gICAgICAgIHRoaXMub25DYW5jZWwuZW1pdCgpO1xuICAgIH1cblxufVxuIiwiPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtXCIgKG5nU3VibWl0KT1cImNvbmZpcm0oKVwiPlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiICpuZ0lmPVwidmlzaWJpbHR5Q2ZnLnNjaGVkdWxlVHlwZVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtMTIgY29sLW1kLTQgY29sLWZvcm0tbGFiZWxcIj5cbiAgICAgICAgICAgIHt7J3BvbHBDcm9uSm9iLnNjaGVkdWxlVHlwZScgfCBoeXBlclRyYW5zOm51bGw6bnVsbDpkZWZhdWx0UmVzfX1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtbWQtOFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcIlxuICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgb3B0IG9mIHNjaGVkdWxlVHlwZU9wdGlvbnM7bGV0IGk9aW5kZXhcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwic2NoZWR1bGVUeXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ7eydzY2hlZHVsZS10eXBlLW9wdC0nICsgaX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e29wdC52YWx1ZX19XCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgIGZvcj1cInt7J3NjaGVkdWxlLXR5cGUtb3B0LScgKyBpfX1cIj5cbiAgICAgICAgICAgICAgICAgICAge3tvcHQudGV4dCB8IGh5cGVyVHJhbnM6bnVsbDpudWxsOmRlZmF1bHRSZXN9fVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC13YXJuaW5nIGQtYmxvY2sgbXktMSBzbWFsbFwiICpuZ0lmPVwiZm9ybS5oYXNFcnJvcignc2NoZWR1bGVUeXBlJykgJiYgKGZvcm0uZ2V0KCdzY2hlZHVsZVR5cGUnKS5kaXJ0eSB8fCBmb3JtLmdldCgnc2NoZWR1bGVUeXBlJykudG91Y2hlZClcIj5cbiAgICAgICAgICAgICAgICB7eydwb2xwQ3JvbkpvYi5lcnJvcnMuc2NoZWR1bGVUeXBlUmVxdWlyZWQnIHwgaHlwZXJUcmFuczpudWxsOm51bGw6ZGVmYXVsdFJlc319XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIFxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiICpuZ0lmPVwidmlzaWJpbHR5Q2ZnLnJlY3VycmVuY2VcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLTEyIGNvbC1tZC00IGNvbC1mb3JtLWxhYmVsXCJcbiAgICAgICAgICAgICAgIGZvcj1cInNjaGVkdWxlLXJlY3VycmVuY2VcIj5cbiAgICAgICAgICAgIHt7J3BvbHBDcm9uSm9iLnJlY3VycmVuY2UnIHwgaHlwZXJUcmFuczpudWxsOm51bGw6ZGVmYXVsdFJlc319XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgY29sLW1kLThcIj5cbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cInNjaGVkdWxlLXJlY3VycmVuY2VcIlxuICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJyZWN1cnJlbmNlXCI+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZCB2YWx1ZT1cIlwiPi4uLjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ7e29wdC52YWx1ZX19XCIgKm5nRm9yPVwibGV0IG9wdCBvZiByZWN1cnJlbmNlT3B0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICB7e29wdC50ZXh0IHwgaHlwZXJUcmFuczpudWxsOm51bGw6ZGVmYXVsdFJlc319XG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIiAqbmdJZj1cInZpc2liaWx0eUNmZy5yZWN1cnJlbmNlICYmIHZpc2liaWx0eUNmZy5jdXN0b21FeHByXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC0xMiBjb2wtbWQtNCBjb2wtZm9ybS1sYWJlbFwiXG4gICAgICAgICAgICAgICBmb3I9XCJzY2hlZHVsZS1jdXN0b20tZXhwclwiPlxuICAgICAgICAgICAge3sncG9scENyb25Kb2IuY3VzdG9tRXhwcicgfCBoeXBlclRyYW5zOm51bGw6bnVsbDpkZWZhdWx0UmVzfX1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtbWQtOFwiPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgW2F1dG9mb2N1c109XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICBpZD1cInNjaGVkdWxlLWN1c3RvbS1leHByXCJcbiAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJjdXN0b21FeHByXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtd2FybmluZyBkLWJsb2NrIG15LTEgc21hbGxcIiAqbmdJZj1cImZvcm0uaGFzRXJyb3IoJ2N1c3RvbUV4cHInKSAmJiAoZm9ybS5nZXQoJ2N1c3RvbUV4cHInKS5kaXJ0eSB8fCBmb3JtLmdldCgnY3VzdG9tRXhwcicpLnRvdWNoZWQpXCI+XG4gICAgICAgICAgICAgICAge3sncG9scENyb25Kb2IuZXJyb3JzLmN1c3RvbUV4cHJJbnZhbGlkJyB8IGh5cGVyVHJhbnM6bnVsbDpudWxsOmRlZmF1bHRSZXN9fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiICpuZ0lmPVwidmlzaWJpbHR5Q2ZnLnN0YXJ0RGF0ZVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtMTIgY29sLW1kLTQgY29sLWZvcm0tbGFiZWxcIlxuICAgICAgICAgICAgICAgZm9yPVwic2NoZWR1bGUtc3RhcnQtZGF0ZVwiPlxuICAgICAgICAgICAge3sncG9scENyb25Kb2Iuc3RhcnREYXRlJyB8IGh5cGVyVHJhbnM6bnVsbDpudWxsOmRlZmF1bHRSZXN9fVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGNvbC1tZC04XCI+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICBpZD1cInNjaGVkdWxlLXN0YXJ0LWRhdGVcIlxuICAgICAgICAgICAgICAgICAgIGJzRGF0ZXBpY2tlclxuICAgICAgICAgICAgICAgICAgIFtic0NvbmZpZ109XCJ7IGFkYXB0aXZlUG9zaXRpb246IHRydWUgfVwiXG4gICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwic3RhcnREYXRlXCI+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIiAqbmdJZj1cInZpc2liaWx0eUNmZy5tb250aE9mWWVhclwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtMTIgY29sLW1kLTQgY29sLWZvcm0tbGFiZWxcIlxuICAgICAgICAgICAgICAgZm9yPVwic2NoZWR1bGUtbW9udGgtb2YteWVhclwiPlxuICAgICAgICAgICAge3sncG9scENyb25Kb2IubW9udGhPZlllYXInIHwgaHlwZXJUcmFuczpudWxsOm51bGw6ZGVmYXVsdFJlc319XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgY29sLW1kLThcIj5cbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cInNjaGVkdWxlLW1vbnRoLW9mLXllYXJcIlxuICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJtb250aE9mWWVhclwiPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQgdmFsdWU9XCJcIj4uLi48L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwie3tvcHQudmFsdWV9fVwiICpuZ0Zvcj1cImxldCBvcHQgb2YgbW9udGhzT2ZZZWFyT3B0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICB7e29wdC50ZXh0IHwgaHlwZXJUcmFuczpudWxsOm51bGw6ZGVmYXVsdFJlc319XG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIiAqbmdJZj1cInZpc2liaWx0eUNmZy5kYXlPZk1vbnRoXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC0xMiBjb2wtbWQtNCBjb2wtZm9ybS1sYWJlbFwiXG4gICAgICAgICAgICAgICBmb3I9XCJzY2hlZHVsZS1kYXktb2YtbW9udGhcIj5cbiAgICAgICAgICAgIHt7J3BvbHBDcm9uSm9iLmRheU9mTW9udGgnIHwgaHlwZXJUcmFuczpudWxsOm51bGw6ZGVmYXVsdFJlc319XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgY29sLW1kLThcIj5cbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cInNjaGVkdWxlLWRheS1vZi1tb250aFwiXG4gICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cImRheU9mTW9udGhcIj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkIHZhbHVlPVwiXCI+Li4uPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInt7b3B0LnZhbHVlfX1cIiAqbmdGb3I9XCJsZXQgb3B0IG9mIGRheXNPZk1vbnRoT3B0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICB7e29wdC50ZXh0fX1cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCIgKm5nSWY9XCJ2aXNpYmlsdHlDZmcuZGF5T2ZXZWVrXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC0xMiBjb2wtbWQtNCBjb2wtZm9ybS1sYWJlbFwiXG4gICAgICAgICAgICAgICBmb3I9XCJzY2hlZHVsZS1kYXktb2Ytd2Vla1wiPlxuICAgICAgICAgICAge3sncG9scENyb25Kb2IuZGF5T2ZXZWVrJyB8IGh5cGVyVHJhbnM6bnVsbDpudWxsOmRlZmF1bHRSZXN9fVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGNvbC1tZC04XCI+XG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzY2hlZHVsZS1kYXktb2Ytd2Vla1wiXG4gICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cImRheU9mV2Vla1wiPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQgdmFsdWU9XCJcIj4uLi48L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwie3tvcHQudmFsdWV9fVwiICpuZ0Zvcj1cImxldCBvcHQgb2YgZGF5c09mV2Vla09wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAge3tvcHQudGV4dCB8IGh5cGVyVHJhbnM6bnVsbDpudWxsOmRlZmF1bHRSZXN9fVxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCIgKm5nSWY9XCJ2aXNpYmlsdHlDZmcudGltZXpvbmVcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLTEyIGNvbC1tZC00IGNvbC1mb3JtLWxhYmVsXCJcbiAgICAgICAgICAgICAgIGZvcj1cInNjaGVkdWxlLXRpbWV6b25lXCI+XG4gICAgICAgICAgICB7eydwb2xwQ3JvbkpvYi50aW1lem9uZScgfCBoeXBlclRyYW5zOm51bGw6bnVsbDpkZWZhdWx0UmVzfX1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtbWQtOFwiPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICBpZD1cInNjaGVkdWxlLXRpbWV6b25lXCJcbiAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJ0aW1lem9uZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXdhcm5pbmcgZC1ibG9jayBteS0xIHNtYWxsXCIgKm5nSWY9XCJmb3JtLmhhc0Vycm9yKCd0aW1lem9uZScpICYmIChmb3JtLmdldCgndGltZXpvbmUnKS5kaXJ0eSB8fCBmb3JtLmdldCgndGltZXpvbmUnKS50b3VjaGVkKVwiPlxuICAgICAgICAgICAgICAgIHt7J3BvbHBDcm9uSm9iLmVycm9ycy50aW1lem9uZUludmFsaWQnIHwgaHlwZXJUcmFuczpudWxsOm51bGw6ZGVmYXVsdFJlc319XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIFxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiICpuZ0lmPVwidmlzaWJpbHR5Q2ZnLnRpbWVcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLTEyIGNvbC1tZC00IGNvbC1mb3JtLWxhYmVsXCJcbiAgICAgICAgICAgICAgIGZvcj1cInNjaGVkdWxlLXRpbWVcIj5cbiAgICAgICAgICAgIHt7J3BvbHBDcm9uSm9iLnRpbWUnIHwgaHlwZXJUcmFuczpudWxsOm51bGw6ZGVmYXVsdFJlc319XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgY29sLW1kLThcIj5cbiAgICAgICAgICAgIDx0aW1lcGlja2VyIGlkPVwic2NoZWR1bGUtdGltZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJ0aW1lXCI+XG4gICAgICAgICAgICA8L3RpbWVwaWNrZXI+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCIgKm5nSWY9XCJ2aXNpYmlsdHlDZmcuZXhjbHVkZUhvbGlkYXlzXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC0xMiBjb2wtbWQtNCBjb2wtZm9ybS1sYWJlbFwiXG4gICAgICAgICAgICAgICBmb3I9XCJzY2hlZHVsZS1leGNsdWRlLWhvbGlkYXlzXCI+XG4gICAgICAgICAgICB7eydwb2xwQ3JvbkpvYi5leGNsdWRlSG9saWRheXMnIHwgaHlwZXJUcmFuczpudWxsOm51bGw6ZGVmYXVsdFJlc319XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgY29sLW1kLThcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dCBwb3NpdGlvbi1zdGF0aWNcIlxuICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNjaGVkdWxlLWV4Y2x1ZGUtaG9saWRheXNcIlxuICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJleGNsdWRlSG9saWRheXNcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7eydwb2xwQ3JvbkpvYi5ob2xpZGF5TGFiZWwnIHwgaHlwZXJUcmFuczpudWxsOm51bGw6ZGVmYXVsdFJlc319XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCIgKm5nSWY9XCJ2aXNpYmlsdHlDZmcuZXhjbHVkZVdlZWtlbmRzXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC0xMiBjb2wtbWQtNCBjb2wtZm9ybS1sYWJlbFwiXG4gICAgICAgICAgICAgICBmb3I9XCJzY2hlZHVsZS1leGNsdWRlLXdlZWtlbmRzXCI+XG4gICAgICAgICAgICB7eydwb2xwQ3JvbkpvYi5leGNsdWRlV2Vla2VuZHMnIHwgaHlwZXJUcmFuczpudWxsOm51bGw6ZGVmYXVsdFJlc319XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgY29sLW1kLThcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dCBwb3NpdGlvbi1zdGF0aWNcIlxuICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNjaGVkdWxlLWV4Y2x1ZGUtd2Vla2VuZHNcIlxuICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJleGNsdWRlV2Vla2VuZHNcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIiAqbmdJZj1cInZpc2liaWx0eUNmZy5leGNsdWRlT3RoZXJzXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC0xMiBjb2wtbWQtNCBjb2wtZm9ybS1sYWJlbFwiXG4gICAgICAgICAgICAgICBmb3I9XCJzY2hlZHVsZS1leGNsdWRlLW90aGVyc1wiPlxuICAgICAgICAgICAge3sncG9scENyb25Kb2IuZXhjbHVkZU90aGVycycgfCBoeXBlclRyYW5zOm51bGw6bnVsbDpkZWZhdWx0UmVzfX1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtbWQtOFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0IHBvc2l0aW9uLXN0YXRpY1wiXG4gICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2NoZWR1bGUtZXhjbHVkZS1vdGhlcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJleGNsdWRlT3RoZXJzXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge3sncG9scENyb25Kb2Iub3RoZXJMYWJlbCcgfCBoeXBlclRyYW5zOm51bGw6bnVsbDpkZWZhdWx0UmVzfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiICpuZ0lmPVwidmlzaWJpbHR5Q2ZnLmVuZERhdGVcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLTEyIGNvbC1tZC00IGNvbC1mb3JtLWxhYmVsXCJcbiAgICAgICAgICAgICAgIGZvcj1cInNjaGVkdWxlLWVuZC1kYXRlXCI+XG4gICAgICAgICAgICB7eydwb2xwQ3JvbkpvYi5lbmREYXRlJyB8IGh5cGVyVHJhbnM6bnVsbDpudWxsOmRlZmF1bHRSZXN9fVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGNvbC1tZC04XCI+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICBpZD1cInNjaGVkdWxlLWVuZC1kYXRlXCJcbiAgICAgICAgICAgICAgICAgICBic0RhdGVwaWNrZXJcbiAgICAgICAgICAgICAgICAgICBbYnNDb25maWddPVwieyBhZGFwdGl2ZVBvc2l0aW9uOiB0cnVlIH1cIlxuICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cImVuZERhdGVcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBhIG9mIGFsZXJ0c1wiPlxuICAgICAgICA8YWxlcnQgW3R5cGVdPVwiYS50eXBlXCIgW2Rpc21pc3NPblRpbWVvdXRdPVwiYS50aW1lb3V0XCI+XG4gICAgICAgICAgICB7e2EubWVzc2FnZSB8IGh5cGVyVHJhbnM6bnVsbDpudWxsOmRlZmF1bHRSZXN9fVxuICAgICAgICA8L2FsZXJ0PlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIFxuICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCBtYi00XCIgKm5nSWY9XCIhaGlkZVN1Ym1pdEJ0biB8fCAhaGlkZUNhbmNlbEJ0blwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4td2FybmluZ1wiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImNhbmNlbCgpXCIgKm5nSWY9XCIhaGlkZUNhbmNlbEJ0blwiPlxuICAgICAgICAgICAge3sncG9scENyb25Kb2IuY2FuY2VsQnRuJyB8IGh5cGVyVHJhbnM6bnVsbDpudWxsOmRlZmF1bHRSZXN9fVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiIWhpZGVTdWJtaXRCdG5cIj5cbiAgICAgICAgICAgIHt7J3BvbHBDcm9uSm9iLnN1Ym1pdEJ0bicgfCBoeXBlclRyYW5zOm51bGw6bnVsbDpkZWZhdWx0UmVzfX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG48L2Zvcm0+XG4iXX0=