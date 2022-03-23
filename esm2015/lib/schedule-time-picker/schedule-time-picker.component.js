import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { getDaysOfMonth, getDaysOfWeek, getMonthsOfYear, IntervalEnum, safeParseInt } from '@polpware/fe-utilities';
import { AlertDefaultImpl } from '@polpware/ngx-alert';
import { DefaultFormBaseComponent } from '@polpware/ngx-form-common';
import { parseString } from 'cron-parser';
import { defaultDict } from '../i18n';
import { getDefaultScheduleTime, ScheduleTypeEnum } from '../interfaces';
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
    const opt_r16 = ctx.$implicit;
    const i_r17 = ctx.index;
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("id", "schedule-type-opt-" + i_r17);
    i0.ɵɵpropertyInterpolate("value", opt_r16.value);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("for", "schedule-type-opt-" + i_r17);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(4, 4, opt_r16.text, null, null, ctx_r14.defaultRes), " ");
} }
function ScheduleTimePickerComponent_div_1_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 12);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "hyperTrans");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(2, 1, "polpCronJob.errors.scheduleTypeRequired", null, null, ctx_r15.defaultRes), " ");
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
    const opt_r19 = ctx.$implicit;
    const ctx_r18 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("value", opt_r19.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(2, 2, opt_r19.text, null, null, ctx_r18.defaultRes), " ");
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
    const ctx_r20 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(2, 1, "polpCronJob.errors.customExprInvalid", null, null, ctx_r20.defaultRes), " ");
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
    const opt_r22 = ctx.$implicit;
    const ctx_r21 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("value", opt_r22.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(2, 2, opt_r22.text, null, null, ctx_r21.defaultRes), " ");
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
    const opt_r24 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("value", opt_r24.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", opt_r24.text, " ");
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
    const opt_r26 = ctx.$implicit;
    const ctx_r25 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("value", opt_r26.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(2, 2, opt_r26.text, null, null, ctx_r25.defaultRes), " ");
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
function ScheduleTimePickerComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "label", 28);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "hyperTrans");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 6);
    i0.ɵɵelement(5, "timepicker", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(3, 1, "polpCronJob.time", null, null, ctx_r7.defaultRes), " ");
} }
function ScheduleTimePickerComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "label", 30);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "hyperTrans");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 6);
    i0.ɵɵelementStart(5, "div", 31);
    i0.ɵɵelement(6, "input", 32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div");
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "hyperTrans");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(3, 2, "polpCronJob.excludeHolidays", null, null, ctx_r8.defaultRes), " ");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(9, 7, "polpCronJob.holidayLabel", null, null, ctx_r8.defaultRes), " ");
} }
function ScheduleTimePickerComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "label", 33);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "hyperTrans");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 6);
    i0.ɵɵelementStart(5, "div", 31);
    i0.ɵɵelement(6, "input", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(3, 1, "polpCronJob.excludeWeekends", null, null, ctx_r9.defaultRes), " ");
} }
function ScheduleTimePickerComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "label", 35);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "hyperTrans");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 6);
    i0.ɵɵelementStart(5, "div", 31);
    i0.ɵɵelement(6, "input", 36);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div");
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "hyperTrans");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(3, 2, "polpCronJob.excludeOthers", null, null, ctx_r10.defaultRes), " ");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(9, 7, "polpCronJob.otherLabel", null, null, ctx_r10.defaultRes), " ");
} }
function ScheduleTimePickerComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "label", 37);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "hyperTrans");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 6);
    i0.ɵɵelement(5, "input", 38);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(3, 2, "polpCronJob.endDate", null, null, ctx_r11.defaultRes), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("bsConfig", i0.ɵɵpureFunction0(7, _c0));
} }
function ScheduleTimePickerComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "alert", 39);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "hyperTrans");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const a_r27 = ctx.$implicit;
    const ctx_r12 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("type", a_r27.type)("dismissOnTimeout", a_r27.timeout);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(3, 3, a_r27.message, null, null, ctx_r12.defaultRes), " ");
} }
function ScheduleTimePickerComponent_div_14_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 43);
    i0.ɵɵlistener("click", function ScheduleTimePickerComponent_div_14_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r31); const ctx_r30 = i0.ɵɵnextContext(2); return ctx_r30.cancel(); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "hyperTrans");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r28 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(2, 1, "polpCronJob.cancelBtn", null, null, ctx_r28.defaultRes), " ");
} }
function ScheduleTimePickerComponent_div_14_button_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 44);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "hyperTrans");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r29 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(2, 1, "polpCronJob.submitBtn", null, null, ctx_r29.defaultRes), " ");
} }
function ScheduleTimePickerComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 40);
    i0.ɵɵtemplate(1, ScheduleTimePickerComponent_div_14_button_1_Template, 3, 6, "button", 41);
    i0.ɵɵtemplate(2, ScheduleTimePickerComponent_div_14_button_2_Template, 3, 6, "button", 42);
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
}
ScheduleTimePickerComponent.ɵfac = function ScheduleTimePickerComponent_Factory(t) { return new (t || ScheduleTimePickerComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
ScheduleTimePickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ScheduleTimePickerComponent, selectors: [["polp-bs-schedule-time-picker"]], inputs: { initSettings: "initSettings", initValue: "initValue" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 15, vars: 15, consts: [[3, "formGroup", "ngSubmit"], ["class", "form-group row", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-end mb-4", 4, "ngIf"], [1, "form-group", "row"], [1, "col-12", "col-md-4", "col-form-label"], [1, "col-12", "col-md-8"], ["class", "form-check form-check-inline", 4, "ngFor", "ngForOf"], ["class", "text-warning d-block my-1 small", 4, "ngIf"], [1, "form-check", "form-check-inline"], ["formControlName", "scheduleType", "type", "radio", 1, "form-check-input", 3, "id", "value"], [1, "form-check-label", 3, "for"], [1, "text-warning", "d-block", "my-1", "small"], ["for", "schedule-recurrence", 1, "col-12", "col-md-4", "col-form-label"], ["id", "schedule-recurrence", "formControlName", "recurrence", 1, "form-control"], ["selected", "", "value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["for", "schedule-custom-expr", 1, "col-12", "col-md-4", "col-form-label"], ["type", "text", "id", "schedule-custom-expr", "formControlName", "customExpr", 1, "form-control", 3, "autofocus"], ["for", "schedule-start-date", 1, "col-12", "col-md-4", "col-form-label"], ["type", "text", "id", "schedule-start-date", "bsDatepicker", "", "formControlName", "startDate", 1, "form-control", 3, "bsConfig"], ["for", "schedule-month-of-year", 1, "col-12", "col-md-4", "col-form-label"], ["id", "schedule-month-of-year", "formControlName", "monthOfYear", 1, "form-control"], ["for", "schedule-day-of-month", 1, "col-12", "col-md-4", "col-form-label"], ["id", "schedule-day-of-month", "formControlName", "dayOfMonth", 1, "form-control"], ["for", "schedule-day-of-week", 1, "col-12", "col-md-4", "col-form-label"], ["id", "schedule-day-of-week", "formControlName", "dayOfWeek", 1, "form-control"], ["for", "schedule-time", 1, "col-12", "col-md-4", "col-form-label"], ["id", "schedule-time", "formControlName", "time"], ["for", "schedule-exclude-holidays", 1, "col-12", "col-md-4", "col-form-label"], [1, "form-check"], ["type", "checkbox", "id", "schedule-exclude-holidays", "formControlName", "excludeHolidays", 1, "form-check-input", "position-static"], ["for", "schedule-exclude-weekends", 1, "col-12", "col-md-4", "col-form-label"], ["type", "checkbox", "id", "schedule-exclude-weekends", "formControlName", "excludeWeekends", 1, "form-check-input", "position-static"], ["for", "schedule-exclude-others", 1, "col-12", "col-md-4", "col-form-label"], ["id", "schedule-exclude-others", "type", "checkbox", "formControlName", "excludeOthers", 1, "form-check-input", "position-static"], ["for", "schedule-end-date", 1, "col-12", "col-md-4", "col-form-label"], ["type", "text", "id", "schedule-end-date", "bsDatepicker", "", "formControlName", "endDate", 1, "form-control", 3, "bsConfig"], [3, "type", "dismissOnTimeout"], [1, "d-flex", "justify-content-end", "mb-4"], ["type", "button", "class", "btn btn-warning", 3, "click", 4, "ngIf"], ["type", "submit", "class", "btn btn-success", 4, "ngIf"], ["type", "button", 1, "btn", "btn-warning", 3, "click"], ["type", "submit", 1, "btn", "btn-success"]], template: function ScheduleTimePickerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵlistener("ngSubmit", function ScheduleTimePickerComponent_Template_form_ngSubmit_0_listener() { return ctx.confirm(); });
        i0.ɵɵtemplate(1, ScheduleTimePickerComponent_div_1_Template, 7, 8, "div", 1);
        i0.ɵɵtemplate(2, ScheduleTimePickerComponent_div_2_Template, 9, 7, "div", 1);
        i0.ɵɵtemplate(3, ScheduleTimePickerComponent_div_3_Template, 7, 8, "div", 1);
        i0.ɵɵtemplate(4, ScheduleTimePickerComponent_div_4_Template, 6, 8, "div", 1);
        i0.ɵɵtemplate(5, ScheduleTimePickerComponent_div_5_Template, 9, 7, "div", 1);
        i0.ɵɵtemplate(6, ScheduleTimePickerComponent_div_6_Template, 9, 7, "div", 1);
        i0.ɵɵtemplate(7, ScheduleTimePickerComponent_div_7_Template, 9, 7, "div", 1);
        i0.ɵɵtemplate(8, ScheduleTimePickerComponent_div_8_Template, 6, 6, "div", 1);
        i0.ɵɵtemplate(9, ScheduleTimePickerComponent_div_9_Template, 10, 12, "div", 1);
        i0.ɵɵtemplate(10, ScheduleTimePickerComponent_div_10_Template, 7, 6, "div", 1);
        i0.ɵɵtemplate(11, ScheduleTimePickerComponent_div_11_Template, 10, 12, "div", 1);
        i0.ɵɵtemplate(12, ScheduleTimePickerComponent_div_12_Template, 6, 8, "div", 1);
        i0.ɵɵtemplate(13, ScheduleTimePickerComponent_ng_container_13_Template, 4, 8, "ng-container", 2);
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
    } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i2.NgIf, i2.NgForOf, i1.DefaultValueAccessor, i1.RadioControlValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.SelectControlValueAccessor, i1.NgSelectOption, i1.ɵangular_packages_forms_forms_x, i3.AutofocusDirective, i4.BsDatepickerInputDirective, i4.BsDatepickerDirective, i5.TimepickerComponent, i1.CheckboxControlValueAccessor, i6.AlertComponent], pipes: [i7.HyperTranslatePipe], styles: [""] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUtdGltZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2Nyb24tam9iLyIsInNvdXJjZXMiOlsibGliL3NjaGVkdWxlLXRpbWUtcGlja2VyL3NjaGVkdWxlLXRpbWUtcGlja2VyLmNvbXBvbmVudC50cyIsImxpYi9zY2hlZHVsZS10aW1lLXBpY2tlci9zY2hlZHVsZS10aW1lLXBpY2tlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBK0MsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFFLFdBQVcsRUFBeUQsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRyxPQUFPLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BILE9BQU8sRUFBRSxnQkFBZ0IsRUFBb0IsTUFBTSxxQkFBcUIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsd0JBQXdCLEVBQXNCLE1BQU0sMkJBQTJCLENBQUM7QUFDekYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUUxQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxzQkFBc0IsRUFBaUIsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7SUNGNUUsOEJBRUk7SUFBQSw0QkFLQTtJQUFBLGlDQUVJO0lBQUEsWUFDSjs7SUFBQSxpQkFBUTtJQUNaLGlCQUFNOzs7OztJQU5LLGVBQWlDO0lBQWpDLDREQUFpQztJQUNqQyxnREFBcUI7SUFFckIsZUFBa0M7SUFBbEMsNkRBQWtDO0lBQ3JDLGVBQ0o7SUFESSxtR0FDSjs7O0lBRUosZ0NBQ0k7SUFBQSxZQUNKOztJQUFBLGlCQUFPOzs7SUFESCxlQUNKO0lBREksZ0lBQ0o7OztJQW5CUiw4QkFDSTtJ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LGVBQXdDO1FBQXhDLCtEQUF3Qzs7a0REbEg1RSwyQkFBMkI7Y0FMdkMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLFdBQVcsRUFBRSx1Q0FBdUM7Z0JBQ3BELFNBQVMsRUFBRSxDQUFDLHNDQUFzQyxDQUFDO2FBQ3REOztrQkFJSSxLQUFLOztrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIFZhbGlkYXRpb25FcnJvcnMsIFZhbGlkYXRvckZuIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgZ2V0RGF5c09mTW9udGgsIGdldERheXNPZldlZWssIGdldE1vbnRoc09mWWVhciwgSW50ZXJ2YWxFbnVtLCBzYWZlUGFyc2VJbnQgfSBmcm9tICdAcG9scHdhcmUvZmUtdXRpbGl0aWVzJztcbmltcG9ydCB7IEFsZXJ0RGVmYXVsdEltcGwsIElIYXNBbGVydEZlYXR1cmUgfSBmcm9tICdAcG9scHdhcmUvbmd4LWFsZXJ0JztcbmltcG9ydCB7IERlZmF1bHRGb3JtQmFzZUNvbXBvbmVudCwgSURlZmF1bHRGb3JtSW5wdXRzIH0gZnJvbSAnQHBvbHB3YXJlL25neC1mb3JtLWNvbW1vbic7XG5pbXBvcnQgeyBwYXJzZVN0cmluZyB9IGZyb20gJ2Nyb24tcGFyc2VyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVmYXVsdERpY3QgfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7IGdldERlZmF1bHRTY2hlZHVsZVRpbWUsIElTY2hlZHVsZVRpbWUsIFNjaGVkdWxlVHlwZUVudW0gfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcblxuZXhwb3J0IGludGVyZmFjZSBJU2V0dGluZ3MgZXh0ZW5kcyBJRGVmYXVsdEZvcm1JbnB1dHMge1xuICAgIGhpZGVTdWJtaXRCdG4/OiBib29sZWFuO1xuICAgIGhpZGVDYW5jZWxCdG4/OiBib29sZWFuO1xufVxuXG5jb25zdCBkZWZhdWx0U2V0dGluZ3M6IElTZXR0aW5ncyA9IHtcbiAgICBoaWRlU3VibWl0QnRuOiBmYWxzZSxcbiAgICBoaWRlQ2FuY2VsQnRuOiB0cnVlXG59XG5cbmNvbnN0IGZvcm1WYWxpZGF0b3I6IFZhbGlkYXRvckZuID0gKGNvbnRyb2w6IEZvcm1Hcm91cCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcblxuICAgIGNvbnN0IHNjaGVkdWxlVHlwZVZhbCA9IHNhZmVQYXJzZUludCgoY29udHJvbC5nZXQoJ3NjaGVkdWxlVHlwZScpIGFzIEZvcm1Db250cm9sKS52YWx1ZSk7XG4gICAgaWYgKHNjaGVkdWxlVHlwZVZhbCA9PSAwKSB7XG4gICAgICAgIHJldHVybiB7IHNjaGVkdWxlVHlwZTogdHJ1ZSB9O1xuICAgIH1cbiAgICBjb25zdCB0aW1lem9uZVZhbCA9IHNhZmVQYXJzZUludCgoY29udHJvbC5nZXQoJ3RpbWV6b25lJykgYXMgRm9ybUNvbnRyb2wpLnZhbHVlKTtcbiAgICBpZiAodGltZXpvbmVWYWwgPiAxMyB8fCB0aW1lem9uZVZhbCA8IC0xMSkge1xuICAgICAgICByZXR1cm4geyB0aW1lem9uZTogdHJ1ZSB9O1xuICAgIH1cbiAgICBpZiAoc2NoZWR1bGVUeXBlVmFsID09IDIpIHsgLy8gb25lIHRpbWVcbiAgICAgICAgY29uc3QgcmVjdXJyZW5jZVZhbCA9IHNhZmVQYXJzZUludCgoY29udHJvbC5nZXQoJ3JlY3VycmVuY2UnKSBhcyBGb3JtQ29udHJvbCkudmFsdWUpO1xuICAgICAgICBpZiAocmVjdXJyZW5jZVZhbCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4geyByZWN1cnJlbmNlOiB0cnVlIH1cbiAgICAgICAgfSBlbHNlIGlmIChyZWN1cnJlbmNlVmFsID09IEludGVydmFsRW51bS5DdXN0b20pIHtcbiAgICAgICAgICAgIGNvbnN0IGN1c3RvbUV4cHJWYWwgPSAoY29udHJvbC5nZXQoJ2N1c3RvbUV4cHInKSBhcyBGb3JtQ29udHJvbCkudmFsdWU7XG4gICAgICAgICAgICBpZiAoIWN1c3RvbUV4cHJWYWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBjdXN0b21FeHByOiB0cnVlIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHZhbGlkYXRlXG4gICAgICAgICAgICAgICAgY29uc3QgciA9IHBhcnNlU3RyaW5nKGN1c3RvbUV4cHJWYWwpO1xuICAgICAgICAgICAgICAgIGlmIChyLmVycm9ycyAmJiBPYmplY3Qua2V5cyhyLmVycm9ycykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGN1c3RvbUV4cHI6IHRydWUgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIElGb3JtRmllbGRzIHtcbiAgICBzY2hlZHVsZVR5cGU6IG51bWJlcjtcbiAgICByZWN1cnJlbmNlOiBudW1iZXI7XG4gICAgZXhjbHVkZUhvbGlkYXlzOiBib29sZWFuO1xuICAgIGhvbGlkYXlzOiBzdHJpbmc7XG4gICAgZXhjbHVkZVdlZWtlbmRzOiBib29sZWFuO1xuICAgIGV4Y2x1ZGVPdGhlcnM6IGJvb2xlYW47XG4gICAgb3RoZXJEYXlzOiBzdHJpbmc7XG4gICAgY3VzdG9tRXhwcjogc3RyaW5nO1xuICAgIHRpbWV6b25lOiBudW1iZXI7XG4gICAgc3RhcnREYXRlOiBEYXRlO1xuICAgIGVuZERhdGU6IERhdGU7XG4gICAgbW9udGhPZlllYXI6IG51bWJlcjtcbiAgICBkYXlPZk1vbnRoOiBudW1iZXI7XG4gICAgZGF5T2ZXZWVrOiBudW1iZXI7XG4gICAgdGltZTogRGF0ZTtcbn1cblxuZnVuY3Rpb24gbWFwVG9Gb3JtRmllbGRzKGRhdGE6IElTY2hlZHVsZVRpbWUpIHtcbiAgICBjb25zdCBkZWZhdWx0RGF0YSA9IGdldERlZmF1bHRTY2hlZHVsZVRpbWUoKTtcbiAgICBkYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdERhdGEsIGRhdGEgfHwge30pO1xuICAgIHJldHVybiB7XG4gICAgICAgIC8vIFRoZSB2YWx1ZSBmb3IgdGhlIHJhZGlvIGJ1dHRvbiBpcyB0eXBlIG9mIHN0cmluZy5cbiAgICAgICAgc2NoZWR1bGVUeXBlOiAoZGF0YS5pc1JlY3VycmVudCA/IFNjaGVkdWxlVHlwZUVudW0uUmVjdXJyZW50IDogU2NoZWR1bGVUeXBlRW51bS5PbmVUaW1lKS50b1N0cmluZygpLFxuICAgICAgICByZWN1cnJlbmNlOiBkYXRhLnJlY3VycmVuY2UsXG4gICAgICAgIGV4Y2x1ZGVIb2xpZGF5czogISFkYXRhLmhvbGlkYXlzLFxuICAgICAgICBob2xpZGF5czogZGF0YS5ob2xpZGF5cyxcbiAgICAgICAgZXhjbHVkZVdlZWtlbmRzOiBkYXRhLmV4Y2x1ZGVXZWVrZW5kcyxcbiAgICAgICAgZXhjbHVkZU90aGVyczogISFkYXRhLm90aGVyRGF5cyxcbiAgICAgICAgb3RoZXJEYXlzOiBkYXRhLm90aGVyRGF5cyxcbiAgICAgICAgY3VzdG9tRXhwcjogZGF0YS5jdXN0b21FeHByLFxuICAgICAgICBzdGFydERhdGU6IGRhdGEuc3RhcnREYXRlLFxuICAgICAgICBlbmREYXRlOiBkYXRhLmVuZERhdGUsXG4gICAgICAgIHRpbWU6IGRhdGEudGltZSxcbiAgICAgICAgbW9udGhPZlllYXI6IGRhdGEubW9udGhPZlllYXIsXG4gICAgICAgIGRheU9mV2VlazogZGF0YS5kYXlPZldlZWssXG4gICAgICAgIGRheU9mTW9udGg6IGRhdGEuZGF5T2ZNb250aFxuICAgIH07XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncG9scC1icy1zY2hlZHVsZS10aW1lLXBpY2tlcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NjaGVkdWxlLXRpbWUtcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9zY2hlZHVsZS10aW1lLXBpY2tlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2NoZWR1bGVUaW1lUGlja2VyQ29tcG9uZW50IGV4dGVuZHMgRGVmYXVsdEZvcm1CYXNlQ29tcG9uZW50XG4gICAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBJSGFzQWxlcnRGZWF0dXJlIHtcblxuICAgIEBJbnB1dCgpIGluaXRTZXR0aW5nczogSVNldHRpbmdzID0ge307XG4gICAgQElucHV0KCkgaW5pdFZhbHVlOiBJU2NoZWR1bGVUaW1lID0gbnVsbDtcblxuICAgIHNldHRpbmdzOiBJU2V0dGluZ3MgPSB7fTtcblxuICAgIGRlZmF1bHRSZXMgPSBkZWZhdWx0RGljdDtcblxuICAgIC8vIFNjaGVkdWxlIG1vZGxlXG4gICAgZm9ybTogRm9ybUdyb3VwO1xuICAgIHNjaGVkdWxlVHlwZU9wdGlvbnMgPSBbe1xuICAgICAgICB2YWx1ZTogU2NoZWR1bGVUeXBlRW51bS5PbmVUaW1lLFxuICAgICAgICB0ZXh0OiAncG9scENyb25Kb2Iub25lVGltZVNjaGVkdWxlJ1xuICAgIH0sIHtcbiAgICAgICAgdmFsdWU6IFNjaGVkdWxlVHlwZUVudW0uUmVjdXJyZW50LFxuICAgICAgICB0ZXh0OiAncG9scENyb25Kb2IucmVjdXJyZW50U2NoZWR1bGUnXG4gICAgfV07XG5cbiAgICByZWN1cnJlbmNlT3B0aW9ucyA9IFt7XG4gICAgICAgIHZhbHVlOiBJbnRlcnZhbEVudW0uRGF5LFxuICAgICAgICB0ZXh0OiAncG9scENyb25Kb2IuZXZlcnlEYXknXG4gICAgfSwge1xuICAgICAgICB2YWx1ZTogSW50ZXJ2YWxFbnVtLldlZWssXG4gICAgICAgIHRleHQ6ICdwb2xwQ3JvbkpvYi5ldmVyeVdlZWsnXG4gICAgfSwge1xuICAgICAgICB2YWx1ZTogSW50ZXJ2YWxFbnVtLk1vbnRoLFxuICAgICAgICB0ZXh0OiAncG9scENyb25Kb2IuZXZlcnlNb250aCdcbiAgICB9LCB7XG4gICAgICAgIHZhbHVlOiBJbnRlcnZhbEVudW0uWWVhcixcbiAgICAgICAgdGV4dDogJ3BvbHBDcm9uSm9iLmV2ZXJ5WWVhcidcbiAgICB9LCB7XG4gICAgICAgIHZhbHVlOiBJbnRlcnZhbEVudW0uQ3VzdG9tLFxuICAgICAgICB0ZXh0OiAncG9scENyb25Kb2IuY3VzdG9tSW50ZXJ2YWwnXG4gICAgfV07XG5cbiAgICBkYXlzT2ZXZWVrT3B0aW9ucyA9IGdldERheXNPZldlZWsoKTtcbiAgICBtb250aHNPZlllYXJPcHRpb25zID0gZ2V0TW9udGhzT2ZZZWFyKCk7XG4gICAgZGF5c09mTW9udGhPcHRpb25zID0gZ2V0RGF5c09mTW9udGgoKTtcblxuICAgIHZpc2liaWx0eUNmZyA9IHtcbiAgICAgICAgc2NoZWR1bGVUeXBlOiB0cnVlLFxuICAgICAgICByZWN1cnJlbmNlOiBmYWxzZSxcbiAgICAgICAgY3VzdG9tRXhwcjogZmFsc2UsXG4gICAgICAgIGV4Y2x1ZGVIb2xpZGF5czogZmFsc2UsXG4gICAgICAgIGV4Y2x1ZGVXZWVrZW5kczogZmFsc2UsXG4gICAgICAgIGV4Y2x1ZGVPdGhlcnM6IGZhbHNlLFxuICAgICAgICBzdGFydERhdGU6IGZhbHNlLFxuICAgICAgICBlbmREYXRlOiBmYWxzZSxcbiAgICAgICAgdGltZTogZmFsc2UsXG4gICAgICAgIG1vbnRoT2ZZZWFyOiBmYWxzZSxcbiAgICAgICAgZGF5T2ZNb250aDogZmFsc2UsXG4gICAgICAgIGRheU9mV2VlazogZmFsc2VcbiAgICB9O1xuXG4gICAgaXNTYXZpbmc6IGJvb2xlYW47XG4gICAgYWxlcnRQcm92aWRlciA9IG5ldyBBbGVydERlZmF1bHRJbXBsKCk7XG5cbiAgICBwcml2YXRlIF9zdWJyOiBTdWJzY3JpcHRpb247XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9idWlsZGVyOiBGb3JtQnVpbGRlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuXG4gICAgZ2V0IGFsZXJ0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxlcnRQcm92aWRlci5kYXRhO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdFNldHRpbmdzLCB0aGlzLmluaXRTZXR0aW5ncyk7XG4gICAgICAgIHRoaXMuaGlkZUNhbmNlbEJ0biA9IHRoaXMuc2V0dGluZ3MuaGlkZUNhbmNlbEJ0bjtcbiAgICAgICAgdGhpcy5oaWRlU3VibWl0QnRuID0gdGhpcy5zZXR0aW5ncy5oaWRlU3VibWl0QnRuO1xuXG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IG1hcFRvRm9ybUZpZWxkcyh0aGlzLmluaXRWYWx1ZSk7XG4gICAgICAgIHRoaXMuZm9ybSA9IHRoaXMuX2J1aWxkZXIuZ3JvdXAoZmllbGRzLCB7IHZhbGlkYXRvcnM6IFtmb3JtVmFsaWRhdG9yXSB9KTtcbiAgICAgICAgdGhpcy51cGRhdGVGaWVsZFZpc2liaWxpdHkodGhpcy5mb3JtLnZhbHVlKTtcblxuICAgICAgICB0aGlzLl9zdWJyID0gdGhpcy5mb3JtLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoYSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkVmlzaWJpbGl0eShhKTtcblxuICAgICAgICAgICAgdGhpcy5ub3RpZnlWYWxpZGF0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVZhbHVlQ2hhbmdlcyh0aGlzLmNvbXB1dGVPdXRWYWx1ZShhKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLl9zdWJyLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoZGF0YTogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmluaXRWYWx1ZSAmJiAhZGF0YS5pbml0VmFsdWUuZmlyc3RDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRm9ybURhdGEoZGF0YS5pbml0VmFsdWUuY3VycmVudFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCB1cGRhdGVGb3JtRGF0YShkYXRhOiBJU2NoZWR1bGVUaW1lKSB7XG4gICAgICAgIGNvbnN0IGNoYW5nZXMgPSBtYXBUb0Zvcm1GaWVsZHMoZGF0YSk7XG4gICAgICAgIHRoaXMuZm9ybS5zZXRWYWx1ZShjaGFuZ2VzLCB7XG4gICAgICAgICAgICBlbWl0RXZlbnQ6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHVwZGF0ZUZpZWxkVmlzaWJpbGl0eShhOiBJRm9ybUZpZWxkcykge1xuXG4gICAgICAgIGZvciAobGV0IGsgaW4gdGhpcy52aXNpYmlsdHlDZmcpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnZpc2liaWx0eUNmZy5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJpbHR5Q2ZnW2tdID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcuc2NoZWR1bGVUeXBlID0gdHJ1ZTtcblxuICAgICAgICBjb25zdCBzY2hlZHVsZVR5cGVWYWwgPSBzYWZlUGFyc2VJbnQoYS5zY2hlZHVsZVR5cGUpO1xuXG4gICAgICAgIGlmIChzY2hlZHVsZVR5cGVWYWwgPT0gMSkge1xuICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcuc3RhcnREYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudmlzaWJpbHR5Q2ZnLnRpbWUgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcucmVjdXJyZW5jZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnZpc2liaWx0eUNmZy5leGNsdWRlSG9saWRheXMgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcuZXhjbHVkZVdlZWtlbmRzID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudmlzaWJpbHR5Q2ZnLmV4Y2x1ZGVPdGhlcnMgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcuZW5kRGF0ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnZpc2liaWx0eUNmZy50aW1lID0gdHJ1ZTtcblxuICAgICAgICAgICAgY29uc3QgcmVjdXJyZW50VmFsID0gc2FmZVBhcnNlSW50KGEucmVjdXJyZW5jZSk7XG4gICAgICAgICAgICBpZiAocmVjdXJyZW50VmFsID09IEludGVydmFsRW51bS5ZZWFyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcubW9udGhPZlllYXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJpbHR5Q2ZnLmRheU9mTW9udGggPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZWN1cnJlbnRWYWwgPT0gSW50ZXJ2YWxFbnVtLk1vbnRoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcuZGF5T2ZNb250aCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlY3VycmVudFZhbCA9PSBJbnRlcnZhbEVudW0uV2Vlaykge1xuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJpbHR5Q2ZnLmRheU9mV2VlayA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlY3VycmVudFZhbCA9PSBJbnRlcnZhbEVudW0uQ3VzdG9tKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmlsdHlDZmcudGltZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJpbHR5Q2ZnLmN1c3RvbUV4cHIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNvbXB1dGVPdXRWYWx1ZShhOiBJRm9ybUZpZWxkcykge1xuICAgICAgICBjb25zdCBzY2hlZHVsZVR5cGVWYWwgPSBzYWZlUGFyc2VJbnQoYS5zY2hlZHVsZVR5cGUpO1xuICAgICAgICBjb25zdCBvdXRwdXQgPSBzY2hlZHVsZVR5cGVWYWwgPT0gU2NoZWR1bGVUeXBlRW51bS5PbmVUaW1lID9cbiAgICAgICAgICAgIHRoaXMuZ2V0T25lVGltZVZhbHVlKGEpIDogdGhpcy5nZXRSZWN1cnJlbnRWYWx1ZShhKTtcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0T25lVGltZVZhbHVlKGE6IElGb3JtRmllbGRzKTogSVNjaGVkdWxlVGltZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc1JlY3VycmVudDogZmFsc2UsXG4gICAgICAgICAgICBzdGFydERhdGU6IGEuc3RhcnREYXRlLFxuICAgICAgICAgICAgdGltZTogYS50aW1lXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldFJlY3VycmVudFZhbHVlKGE6IElGb3JtRmllbGRzKTogSVNjaGVkdWxlVGltZSB7XG4gICAgICAgIGNvbnN0IHJlY3VycmVuY2UgPSBzYWZlUGFyc2VJbnQoYS5yZWN1cnJlbmNlKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXNSZWN1cnJlbnQ6IHRydWUsXG4gICAgICAgICAgICByZWN1cnJlbmNlOiByZWN1cnJlbmNlLFxuICAgICAgICAgICAgaG9saWRheXM6IGEuZXhjbHVkZUhvbGlkYXlzID8gYS5ob2xpZGF5cyA6ICcnLFxuICAgICAgICAgICAgZXhjbHVkZVdlZWtlbmRzOiBhLmV4Y2x1ZGVXZWVrZW5kcyxcbiAgICAgICAgICAgIG90aGVyRGF5czogYS5leGNsdWRlT3RoZXJzID8gYS5vdGhlckRheXMgOiAnJyxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogYS5zdGFydERhdGUsXG4gICAgICAgICAgICBlbmREYXRlOiBhLmVuZERhdGUsXG4gICAgICAgICAgICB0aW1lOiBhLnRpbWUsXG4gICAgICAgICAgICBtb250aE9mWWVhcjogYS5tb250aE9mWWVhcixcbiAgICAgICAgICAgIGRheU9mTW9udGg6IGEuZGF5T2ZNb250aCxcbiAgICAgICAgICAgIGRheU9mV2VlazogYS5kYXlPZldlZWtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25maXJtKCkge1xuICAgICAgICBpZiAoIXRoaXMuZm9ybS52YWxpZCkge1xuICAgICAgICAgICAgdGhpcy5hbGVydFByb3ZpZGVyLndhcm5pbmcoJ3BvbHBDcm9uSm9iLmVycm9ycy5nZW5lcmFsJywgNTAwMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvdXRwdXQgPSB0aGlzLmNvbXB1dGVPdXRWYWx1ZSh0aGlzLmZvcm0udmFsdWUpO1xuICAgICAgICB0aGlzLm9uU2F2ZS5lbWl0KG91dHB1dCk7XG4gICAgfVxuXG4gICAgY2FuY2VsKCkge1xuICAgICAgICB0aGlzLm9uQ2FuY2VsLmVtaXQoKTtcbiAgICB9XG5cbn1cbiIsIjxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybVwiIChuZ1N1Ym1pdCk9XCJjb25maXJtKClcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIiAqbmdJZj1cInZpc2liaWx0eUNmZy5zY2hlZHVsZVR5cGVcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLTEyIGNvbC1tZC00IGNvbC1mb3JtLWxhYmVsXCI+XG4gICAgICAgICAgICB7eydwb2xwQ3JvbkpvYi5zY2hlZHVsZVR5cGUnIHwgaHlwZXJUcmFuczpudWxsOm51bGw6ZGVmYXVsdFJlc319XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgY29sLW1kLThcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCJcbiAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IG9wdCBvZiBzY2hlZHVsZVR5cGVPcHRpb25zO2xldCBpPWluZGV4XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInNjaGVkdWxlVHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3snc2NoZWR1bGUtdHlwZS1vcHQtJyArIGl9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3tvcHQudmFsdWV9fVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICBmb3I9XCJ7eydzY2hlZHVsZS10eXBlLW9wdC0nICsgaX19XCI+XG4gICAgICAgICAgICAgICAgICAgIHt7b3B0LnRleHQgfCBoeXBlclRyYW5zOm51bGw6bnVsbDpkZWZhdWx0UmVzfX1cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtd2FybmluZyBkLWJsb2NrIG15LTEgc21hbGxcIiAqbmdJZj1cImZvcm0uaGFzRXJyb3IoJ3NjaGVkdWxlVHlwZScpICYmIChmb3JtLmdldCgnc2NoZWR1bGVUeXBlJykuZGlydHkgfHwgZm9ybS5nZXQoJ3NjaGVkdWxlVHlwZScpLnRvdWNoZWQpXCI+XG4gICAgICAgICAgICAgICAge3sncG9scENyb25Kb2IuZXJyb3JzLnNjaGVkdWxlVHlwZVJlcXVpcmVkJyB8IGh5cGVyVHJhbnM6bnVsbDpudWxsOmRlZmF1bHRSZXN9fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBcbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIiAqbmdJZj1cInZpc2liaWx0eUNmZy5yZWN1cnJlbmNlXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC0xMiBjb2wtbWQtNCBjb2wtZm9ybS1sYWJlbFwiXG4gICAgICAgICAgICAgICBmb3I9XCJzY2hlZHVsZS1yZWN1cnJlbmNlXCI+XG4gICAgICAgICAgICB7eydwb2xwQ3JvbkpvYi5yZWN1cnJlbmNlJyB8IGh5cGVyVHJhbnM6bnVsbDpudWxsOmRlZmF1bHRSZXN9fVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGNvbC1tZC04XCI+XG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzY2hlZHVsZS1yZWN1cnJlbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwicmVjdXJyZW5jZVwiPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQgdmFsdWU9XCJcIj4uLi48L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwie3tvcHQudmFsdWV9fVwiICpuZ0Zvcj1cImxldCBvcHQgb2YgcmVjdXJyZW5jZU9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAge3tvcHQudGV4dCB8IGh5cGVyVHJhbnM6bnVsbDpudWxsOmRlZmF1bHRSZXN9fVxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCIgKm5nSWY9XCJ2aXNpYmlsdHlDZmcucmVjdXJyZW5jZSAmJiB2aXNpYmlsdHlDZmcuY3VzdG9tRXhwclwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtMTIgY29sLW1kLTQgY29sLWZvcm0tbGFiZWxcIlxuICAgICAgICAgICAgICAgZm9yPVwic2NoZWR1bGUtY3VzdG9tLWV4cHJcIj5cbiAgICAgICAgICAgIHt7J3BvbHBDcm9uSm9iLmN1c3RvbUV4cHInIHwgaHlwZXJUcmFuczpudWxsOm51bGw6ZGVmYXVsdFJlc319XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgY29sLW1kLThcIj5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgIFthdXRvZm9jdXNdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgaWQ9XCJzY2hlZHVsZS1jdXN0b20tZXhwclwiXG4gICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiY3VzdG9tRXhwclwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXdhcm5pbmcgZC1ibG9jayBteS0xIHNtYWxsXCIgKm5nSWY9XCJmb3JtLmhhc0Vycm9yKCdjdXN0b21FeHByJykgJiYgKGZvcm0uZ2V0KCdjdXN0b21FeHByJykuZGlydHkgfHwgZm9ybS5nZXQoJ2N1c3RvbUV4cHInKS50b3VjaGVkKVwiPlxuICAgICAgICAgICAgICAgIHt7J3BvbHBDcm9uSm9iLmVycm9ycy5jdXN0b21FeHBySW52YWxpZCcgfCBoeXBlclRyYW5zOm51bGw6bnVsbDpkZWZhdWx0UmVzfX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIiAqbmdJZj1cInZpc2liaWx0eUNmZy5zdGFydERhdGVcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLTEyIGNvbC1tZC00IGNvbC1mb3JtLWxhYmVsXCJcbiAgICAgICAgICAgICAgIGZvcj1cInNjaGVkdWxlLXN0YXJ0LWRhdGVcIj5cbiAgICAgICAgICAgIHt7J3BvbHBDcm9uSm9iLnN0YXJ0RGF0ZScgfCBoeXBlclRyYW5zOm51bGw6bnVsbDpkZWZhdWx0UmVzfX1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtbWQtOFwiPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgaWQ9XCJzY2hlZHVsZS1zdGFydC1kYXRlXCJcbiAgICAgICAgICAgICAgICAgICBic0RhdGVwaWNrZXJcbiAgICAgICAgICAgICAgICAgICBbYnNDb25maWddPVwieyBhZGFwdGl2ZVBvc2l0aW9uOiB0cnVlIH1cIlxuICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInN0YXJ0RGF0ZVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCIgKm5nSWY9XCJ2aXNpYmlsdHlDZmcubW9udGhPZlllYXJcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLTEyIGNvbC1tZC00IGNvbC1mb3JtLWxhYmVsXCJcbiAgICAgICAgICAgICAgIGZvcj1cInNjaGVkdWxlLW1vbnRoLW9mLXllYXJcIj5cbiAgICAgICAgICAgIHt7J3BvbHBDcm9uSm9iLm1vbnRoT2ZZZWFyJyB8IGh5cGVyVHJhbnM6bnVsbDpudWxsOmRlZmF1bHRSZXN9fVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGNvbC1tZC04XCI+XG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzY2hlZHVsZS1tb250aC1vZi15ZWFyXCJcbiAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwibW9udGhPZlllYXJcIj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkIHZhbHVlPVwiXCI+Li4uPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInt7b3B0LnZhbHVlfX1cIiAqbmdGb3I9XCJsZXQgb3B0IG9mIG1vbnRoc09mWWVhck9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAge3tvcHQudGV4dCB8IGh5cGVyVHJhbnM6bnVsbDpudWxsOmRlZmF1bHRSZXN9fVxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCIgKm5nSWY9XCJ2aXNpYmlsdHlDZmcuZGF5T2ZNb250aFwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtMTIgY29sLW1kLTQgY29sLWZvcm0tbGFiZWxcIlxuICAgICAgICAgICAgICAgZm9yPVwic2NoZWR1bGUtZGF5LW9mLW1vbnRoXCI+XG4gICAgICAgICAgICB7eydwb2xwQ3JvbkpvYi5kYXlPZk1vbnRoJyB8IGh5cGVyVHJhbnM6bnVsbDpudWxsOmRlZmF1bHRSZXN9fVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGNvbC1tZC04XCI+XG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzY2hlZHVsZS1kYXktb2YtbW9udGhcIlxuICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJkYXlPZk1vbnRoXCI+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZCB2YWx1ZT1cIlwiPi4uLjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ7e29wdC52YWx1ZX19XCIgKm5nRm9yPVwibGV0IG9wdCBvZiBkYXlzT2ZNb250aE9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAge3tvcHQudGV4dH19XG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cblxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiICpuZ0lmPVwidmlzaWJpbHR5Q2ZnLmRheU9mV2Vla1wiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtMTIgY29sLW1kLTQgY29sLWZvcm0tbGFiZWxcIlxuICAgICAgICAgICAgICAgZm9yPVwic2NoZWR1bGUtZGF5LW9mLXdlZWtcIj5cbiAgICAgICAgICAgIHt7J3BvbHBDcm9uSm9iLmRheU9mV2VlaycgfCBoeXBlclRyYW5zOm51bGw6bnVsbDpkZWZhdWx0UmVzfX1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtbWQtOFwiPlxuICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwic2NoZWR1bGUtZGF5LW9mLXdlZWtcIlxuICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJkYXlPZldlZWtcIj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkIHZhbHVlPVwiXCI+Li4uPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInt7b3B0LnZhbHVlfX1cIiAqbmdGb3I9XCJsZXQgb3B0IG9mIGRheXNPZldlZWtPcHRpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7b3B0LnRleHQgfCBoeXBlclRyYW5zOm51bGw6bnVsbDpkZWZhdWx0UmVzfX1cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiICpuZ0lmPVwidmlzaWJpbHR5Q2ZnLnRpbWVcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLTEyIGNvbC1tZC00IGNvbC1mb3JtLWxhYmVsXCJcbiAgICAgICAgICAgICAgIGZvcj1cInNjaGVkdWxlLXRpbWVcIj5cbiAgICAgICAgICAgIHt7J3BvbHBDcm9uSm9iLnRpbWUnIHwgaHlwZXJUcmFuczpudWxsOm51bGw6ZGVmYXVsdFJlc319XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgY29sLW1kLThcIj5cbiAgICAgICAgICAgIDx0aW1lcGlja2VyIGlkPVwic2NoZWR1bGUtdGltZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJ0aW1lXCI+XG4gICAgICAgICAgICA8L3RpbWVwaWNrZXI+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCIgKm5nSWY9XCJ2aXNpYmlsdHlDZmcuZXhjbHVkZUhvbGlkYXlzXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC0xMiBjb2wtbWQtNCBjb2wtZm9ybS1sYWJlbFwiXG4gICAgICAgICAgICAgICBmb3I9XCJzY2hlZHVsZS1leGNsdWRlLWhvbGlkYXlzXCI+XG4gICAgICAgICAgICB7eydwb2xwQ3JvbkpvYi5leGNsdWRlSG9saWRheXMnIHwgaHlwZXJUcmFuczpudWxsOm51bGw6ZGVmYXVsdFJlc319XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgY29sLW1kLThcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dCBwb3NpdGlvbi1zdGF0aWNcIlxuICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNjaGVkdWxlLWV4Y2x1ZGUtaG9saWRheXNcIlxuICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJleGNsdWRlSG9saWRheXNcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7eydwb2xwQ3JvbkpvYi5ob2xpZGF5TGFiZWwnIHwgaHlwZXJUcmFuczpudWxsOm51bGw6ZGVmYXVsdFJlc319XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCIgKm5nSWY9XCJ2aXNpYmlsdHlDZmcuZXhjbHVkZVdlZWtlbmRzXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC0xMiBjb2wtbWQtNCBjb2wtZm9ybS1sYWJlbFwiXG4gICAgICAgICAgICAgICBmb3I9XCJzY2hlZHVsZS1leGNsdWRlLXdlZWtlbmRzXCI+XG4gICAgICAgICAgICB7eydwb2xwQ3JvbkpvYi5leGNsdWRlV2Vla2VuZHMnIHwgaHlwZXJUcmFuczpudWxsOm51bGw6ZGVmYXVsdFJlc319XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgY29sLW1kLThcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dCBwb3NpdGlvbi1zdGF0aWNcIlxuICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNjaGVkdWxlLWV4Y2x1ZGUtd2Vla2VuZHNcIlxuICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJleGNsdWRlV2Vla2VuZHNcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIiAqbmdJZj1cInZpc2liaWx0eUNmZy5leGNsdWRlT3RoZXJzXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC0xMiBjb2wtbWQtNCBjb2wtZm9ybS1sYWJlbFwiXG4gICAgICAgICAgICAgICBmb3I9XCJzY2hlZHVsZS1leGNsdWRlLW90aGVyc1wiPlxuICAgICAgICAgICAge3sncG9scENyb25Kb2IuZXhjbHVkZU90aGVycycgfCBoeXBlclRyYW5zOm51bGw6bnVsbDpkZWZhdWx0UmVzfX1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtbWQtOFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0IHBvc2l0aW9uLXN0YXRpY1wiXG4gICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2NoZWR1bGUtZXhjbHVkZS1vdGhlcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJleGNsdWRlT3RoZXJzXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge3sncG9scENyb25Kb2Iub3RoZXJMYWJlbCcgfCBoeXBlclRyYW5zOm51bGw6bnVsbDpkZWZhdWx0UmVzfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiICpuZ0lmPVwidmlzaWJpbHR5Q2ZnLmVuZERhdGVcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLTEyIGNvbC1tZC00IGNvbC1mb3JtLWxhYmVsXCJcbiAgICAgICAgICAgICAgIGZvcj1cInNjaGVkdWxlLWVuZC1kYXRlXCI+XG4gICAgICAgICAgICB7eydwb2xwQ3JvbkpvYi5lbmREYXRlJyB8IGh5cGVyVHJhbnM6bnVsbDpudWxsOmRlZmF1bHRSZXN9fVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGNvbC1tZC04XCI+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICBpZD1cInNjaGVkdWxlLWVuZC1kYXRlXCJcbiAgICAgICAgICAgICAgICAgICBic0RhdGVwaWNrZXJcbiAgICAgICAgICAgICAgICAgICBbYnNDb25maWddPVwieyBhZGFwdGl2ZVBvc2l0aW9uOiB0cnVlIH1cIlxuICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cImVuZERhdGVcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBhIG9mIGFsZXJ0c1wiPlxuICAgICAgICA8YWxlcnQgW3R5cGVdPVwiYS50eXBlXCIgW2Rpc21pc3NPblRpbWVvdXRdPVwiYS50aW1lb3V0XCI+XG4gICAgICAgICAgICB7e2EubWVzc2FnZSB8IGh5cGVyVHJhbnM6bnVsbDpudWxsOmRlZmF1bHRSZXN9fVxuICAgICAgICA8L2FsZXJ0PlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIFxuICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCBtYi00XCIgKm5nSWY9XCIhaGlkZVN1Ym1pdEJ0biB8fCAhaGlkZUNhbmNlbEJ0blwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4td2FybmluZ1wiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImNhbmNlbCgpXCIgKm5nSWY9XCIhaGlkZUNhbmNlbEJ0blwiPlxuICAgICAgICAgICAge3sncG9scENyb25Kb2IuY2FuY2VsQnRuJyB8IGh5cGVyVHJhbnM6bnVsbDpudWxsOmRlZmF1bHRSZXN9fVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiIWhpZGVTdWJtaXRCdG5cIj5cbiAgICAgICAgICAgIHt7J3BvbHBDcm9uSm9iLnN1Ym1pdEJ0bicgfCBoeXBlclRyYW5zOm51bGw6bnVsbDpkZWZhdWx0UmVzfX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG48L2Zvcm0+XG4iXX0=