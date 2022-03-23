(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@polpware/fe-utilities'), require('@angular/core'), require('@angular/forms'), require('@polpware/ngx-alert'), require('@polpware/ngx-form-common'), require('cron-parser'), require('@angular/common'), require('@40three/ngx-autofocus-directive'), require('ngx-bootstrap/datepicker'), require('ngx-bootstrap/timepicker'), require('ngx-bootstrap/alert'), require('@polpware/ngx-i18n'), require('moment'), require('ngx-bootstrap/accordion'), require('ngx-bootstrap/buttons'), require('ngx-bootstrap/carousel'), require('ngx-bootstrap/collapse'), require('ngx-bootstrap/dropdown'), require('ngx-bootstrap/modal'), require('ngx-bootstrap/pagination'), require('ngx-bootstrap/popover'), require('ngx-bootstrap/progressbar'), require('ngx-bootstrap/tabs'), require('ngx-bootstrap/tooltip')) :
    typeof define === 'function' && define.amd ? define('@polpware/cron-job', ['exports', '@polpware/fe-utilities', '@angular/core', '@angular/forms', '@polpware/ngx-alert', '@polpware/ngx-form-common', 'cron-parser', '@angular/common', '@40three/ngx-autofocus-directive', 'ngx-bootstrap/datepicker', 'ngx-bootstrap/timepicker', 'ngx-bootstrap/alert', '@polpware/ngx-i18n', 'moment', 'ngx-bootstrap/accordion', 'ngx-bootstrap/buttons', 'ngx-bootstrap/carousel', 'ngx-bootstrap/collapse', 'ngx-bootstrap/dropdown', 'ngx-bootstrap/modal', 'ngx-bootstrap/pagination', 'ngx-bootstrap/popover', 'ngx-bootstrap/progressbar', 'ngx-bootstrap/tabs', 'ngx-bootstrap/tooltip'], factory) :
    (global = global || self, factory((global.polpware = global.polpware || {}, global.polpware['cron-job'] = {}), global.feUtilities, global.ng.core, global.ng.forms, global.ngxAlert, global.ngxFormCommon, global.cronParser, global.ng.common, global.ngxAutofocusDirective, global.datepicker, global.timepicker, global.alert, global.ngxI18n, global.moment, global.accordion, global.buttons, global.carousel, global.collapse, global.dropdown, global.modal, global.pagination, global.popover, global.progressbar, global.tabs, global.tooltip));
}(this, (function (exports, feUtilities, core, forms, ngxAlert, ngxFormCommon, cronParser, common, ngxAutofocusDirective, datepicker, timepicker, alert, ngxI18n, moment, accordion, buttons, carousel, collapse, dropdown, modal, pagination, popover, progressbar, tabs, tooltip) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var defaultDict = {
        polpCronJob: {
            scheduleType: 'Schedule Type',
            recurrence: 'Recurrence',
            customExpr: 'Custom CRON expression',
            startDate: 'Start date',
            monthOfYear: 'Month',
            dayOfMonth: 'Day',
            dayOfWeek: 'Day',
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
                scheduleTypeRequired: 'Please select one schedule type!'
            }
        }
    };


    (function (ScheduleTypeEnum) {
        ScheduleTypeEnum[ScheduleTypeEnum["OneTime"] = 1] = "OneTime";
        ScheduleTypeEnum[ScheduleTypeEnum["Recurrent"] = 2] = "Recurrent";
    })(exports.ScheduleTypeEnum || (exports.ScheduleTypeEnum = {}));
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
            monthOfYear: feUtilities.MonthEnum.January,
            dayOfMonth: 1,
            dayOfWeek: feUtilities.DayOfWeekEnum.Monday
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
        var opt_r16 = ctx.$implicit;
        var i_r17 = ctx.index;
        var ctx_r14 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵpropertyInterpolate("id", "schedule-type-opt-" + i_r17);
        core.ɵɵpropertyInterpolate("value", opt_r16.value);
        core.ɵɵadvance(1);
        core.ɵɵpropertyInterpolate("for", "schedule-type-opt-" + i_r17);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind4(4, 4, opt_r16.text, null, null, ctx_r14.defaultRes), " ");
    } }
    function ScheduleTimePickerComponent_div_1_span_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", 12);
        core.ɵɵtext(1);
        core.ɵɵpipe(2, "hyperTrans");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r15 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind4(2, 1, "polpCronJob.errors.scheduleTypeRequired", null, null, ctx_r15.defaultRes), " ");
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
        var opt_r19 = ctx.$implicit;
        var ctx_r18 = core.ɵɵnextContext(2);
        core.ɵɵpropertyInterpolate("value", opt_r19.value);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind4(2, 2, opt_r19.text, null, null, ctx_r18.defaultRes), " ");
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
        var ctx_r20 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind4(2, 1, "polpCronJob.errors.customExprInvalid", null, null, ctx_r20.defaultRes), " ");
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
        var opt_r22 = ctx.$implicit;
        var ctx_r21 = core.ɵɵnextContext(2);
        core.ɵɵpropertyInterpolate("value", opt_r22.value);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind4(2, 2, opt_r22.text, null, null, ctx_r21.defaultRes), " ");
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
        var opt_r24 = ctx.$implicit;
        core.ɵɵpropertyInterpolate("value", opt_r24.value);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", opt_r24.text, " ");
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
        var opt_r26 = ctx.$implicit;
        var ctx_r25 = core.ɵɵnextContext(2);
        core.ɵɵpropertyInterpolate("value", opt_r26.value);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind4(2, 2, opt_r26.text, null, null, ctx_r25.defaultRes), " ");
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
    function ScheduleTimePickerComponent_div_8_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 4);
        core.ɵɵelementStart(1, "label", 28);
        core.ɵɵtext(2);
        core.ɵɵpipe(3, "hyperTrans");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "div", 6);
        core.ɵɵelement(5, "timepicker", 29);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r7 = core.ɵɵnextContext();
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind4(3, 1, "polpCronJob.time", null, null, ctx_r7.defaultRes), " ");
    } }
    function ScheduleTimePickerComponent_div_9_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 4);
        core.ɵɵelementStart(1, "label", 30);
        core.ɵɵtext(2);
        core.ɵɵpipe(3, "hyperTrans");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "div", 6);
        core.ɵɵelementStart(5, "div", 31);
        core.ɵɵelement(6, "input", 32);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(7, "div");
        core.ɵɵtext(8);
        core.ɵɵpipe(9, "hyperTrans");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r8 = core.ɵɵnextContext();
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind4(3, 2, "polpCronJob.excludeHolidays", null, null, ctx_r8.defaultRes), " ");
        core.ɵɵadvance(6);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind4(9, 7, "polpCronJob.holidayLabel", null, null, ctx_r8.defaultRes), " ");
    } }
    function ScheduleTimePickerComponent_div_10_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 4);
        core.ɵɵelementStart(1, "label", 33);
        core.ɵɵtext(2);
        core.ɵɵpipe(3, "hyperTrans");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "div", 6);
        core.ɵɵelementStart(5, "div", 31);
        core.ɵɵelement(6, "input", 34);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r9 = core.ɵɵnextContext();
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind4(3, 1, "polpCronJob.excludeWeekends", null, null, ctx_r9.defaultRes), " ");
    } }
    function ScheduleTimePickerComponent_div_11_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 4);
        core.ɵɵelementStart(1, "label", 35);
        core.ɵɵtext(2);
        core.ɵɵpipe(3, "hyperTrans");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "div", 6);
        core.ɵɵelementStart(5, "div", 31);
        core.ɵɵelement(6, "input", 36);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(7, "div");
        core.ɵɵtext(8);
        core.ɵɵpipe(9, "hyperTrans");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r10 = core.ɵɵnextContext();
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind4(3, 2, "polpCronJob.excludeOthers", null, null, ctx_r10.defaultRes), " ");
        core.ɵɵadvance(6);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind4(9, 7, "polpCronJob.otherLabel", null, null, ctx_r10.defaultRes), " ");
    } }
    function ScheduleTimePickerComponent_div_12_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 4);
        core.ɵɵelementStart(1, "label", 37);
        core.ɵɵtext(2);
        core.ɵɵpipe(3, "hyperTrans");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "div", 6);
        core.ɵɵelement(5, "input", 38);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r11 = core.ɵɵnextContext();
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind4(3, 2, "polpCronJob.endDate", null, null, ctx_r11.defaultRes), " ");
        core.ɵɵadvance(3);
        core.ɵɵproperty("bsConfig", core.ɵɵpureFunction0(7, _c0));
    } }
    function ScheduleTimePickerComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "alert", 39);
        core.ɵɵtext(2);
        core.ɵɵpipe(3, "hyperTrans");
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var a_r27 = ctx.$implicit;
        var ctx_r12 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("type", a_r27.type)("dismissOnTimeout", a_r27.timeout);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind4(3, 3, a_r27.message, null, null, ctx_r12.defaultRes), " ");
    } }
    function ScheduleTimePickerComponent_div_14_button_1_Template(rf, ctx) { if (rf & 1) {
        var _r31 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "button", 43);
        core.ɵɵlistener("click", function ScheduleTimePickerComponent_div_14_button_1_Template_button_click_0_listener() { core.ɵɵrestoreView(_r31); var ctx_r30 = core.ɵɵnextContext(2); return ctx_r30.cancel(); });
        core.ɵɵtext(1);
        core.ɵɵpipe(2, "hyperTrans");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r28 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind4(2, 1, "polpCronJob.cancelBtn", null, null, ctx_r28.defaultRes), " ");
    } }
    function ScheduleTimePickerComponent_div_14_button_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "button", 44);
        core.ɵɵtext(1);
        core.ɵɵpipe(2, "hyperTrans");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r29 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind4(2, 1, "polpCronJob.submitBtn", null, null, ctx_r29.defaultRes), " ");
    } }
    function ScheduleTimePickerComponent_div_14_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 40);
        core.ɵɵtemplate(1, ScheduleTimePickerComponent_div_14_button_1_Template, 3, 6, "button", 41);
        core.ɵɵtemplate(2, ScheduleTimePickerComponent_div_14_button_2_Template, 3, 6, "button", 42);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r13 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !ctx_r13.hideCancelBtn);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !ctx_r13.hideSubmitBtn);
    } }
    var defaultSettings = {
        hideSubmitBtn: false,
        hideCancelBtn: true
    };
    var formValidator = function (control) {
        var scheduleTypeVal = feUtilities.safeParseInt(control.get('scheduleType').value);
        if (scheduleTypeVal == 0) {
            return { scheduleType: true };
        }
        if (scheduleTypeVal == 2) { // one time
            var recurrenceVal = feUtilities.safeParseInt(control.get('recurrence').value);
            if (recurrenceVal == 0) {
                return { recurrence: true };
            }
            else if (recurrenceVal == feUtilities.IntervalEnum.Custom) {
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
                    value: exports.ScheduleTypeEnum.OneTime,
                    text: 'polpCronJob.oneTimeSchedule'
                }, {
                    value: exports.ScheduleTypeEnum.Recurrent,
                    text: 'polpCronJob.recurrentSchedule'
                }];
            _this.recurrenceOptions = [{
                    value: feUtilities.IntervalEnum.Day,
                    text: 'polpCronJob.everyDay'
                }, {
                    value: feUtilities.IntervalEnum.Week,
                    text: 'polpCronJob.everyWeek'
                }, {
                    value: feUtilities.IntervalEnum.Month,
                    text: 'polpCronJob.everyMonth'
                }, {
                    value: feUtilities.IntervalEnum.Year,
                    text: 'polpCronJob.everyYear'
                }, {
                    value: feUtilities.IntervalEnum.Custom,
                    text: 'polpCronJob.customInterval'
                }];
            _this.daysOfWeekOptions = feUtilities.getDaysOfWeek();
            _this.monthsOfYearOptions = feUtilities.getMonthsOfYear();
            _this.daysOfMonthOptions = feUtilities.getDaysOfMonth();
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
            _this.alertProvider = new ngxAlert.AlertDefaultImpl();
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
            var scheduleTypeVal = feUtilities.safeParseInt(a.scheduleType);
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
                var recurrentVal = feUtilities.safeParseInt(a.recurrence);
                if (recurrentVal == feUtilities.IntervalEnum.Year) {
                    this.visibiltyCfg.monthOfYear = true;
                    this.visibiltyCfg.dayOfMonth = true;
                }
                else if (recurrentVal == feUtilities.IntervalEnum.Month) {
                    this.visibiltyCfg.dayOfMonth = true;
                }
                else if (recurrentVal == feUtilities.IntervalEnum.Week) {
                    this.visibiltyCfg.dayOfWeek = true;
                }
                else if (recurrentVal == feUtilities.IntervalEnum.Custom) {
                    this.visibiltyCfg.time = false;
                    this.visibiltyCfg.customExpr = true;
                }
            }
        };
        ScheduleTimePickerComponent.prototype.computeOutValue = function (a) {
            var scheduleTypeVal = feUtilities.safeParseInt(a.scheduleType);
            var output = scheduleTypeVal == exports.ScheduleTypeEnum.OneTime ?
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
            var recurrence = feUtilities.safeParseInt(a.recurrence);
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
        ScheduleTimePickerComponent.ɵfac = function ScheduleTimePickerComponent_Factory(t) { return new (t || ScheduleTimePickerComponent)(core.ɵɵdirectiveInject(forms.FormBuilder)); };
        ScheduleTimePickerComponent.ɵcmp = core.ɵɵdefineComponent({ type: ScheduleTimePickerComponent, selectors: [["polp-bs-schedule-time-picker"]], inputs: { initSettings: "initSettings", initValue: "initValue" }, features: [core.ɵɵInheritDefinitionFeature, core.ɵɵNgOnChangesFeature], decls: 15, vars: 15, consts: [[3, "formGroup", "ngSubmit"], ["class", "form-group row", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-end mb-4", 4, "ngIf"], [1, "form-group", "row"], [1, "col-12", "col-md-4", "col-form-label"], [1, "col-12", "col-md-8"], ["class", "form-check form-check-inline", 4, "ngFor", "ngForOf"], ["class", "text-warning d-block my-1 small", 4, "ngIf"], [1, "form-check", "form-check-inline"], ["formControlName", "scheduleType", "type", "radio", 1, "form-check-input", 3, "id", "value"], [1, "form-check-label", 3, "for"], [1, "text-warning", "d-block", "my-1", "small"], ["for", "schedule-recurrence", 1, "col-12", "col-md-4", "col-form-label"], ["id", "schedule-recurrence", "formControlName", "recurrence", 1, "form-control"], ["selected", "", "value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["for", "schedule-custom-expr", 1, "col-12", "col-md-4", "col-form-label"], ["type", "text", "id", "schedule-custom-expr", "formControlName", "customExpr", 1, "form-control", 3, "autofocus"], ["for", "schedule-start-date", 1, "col-12", "col-md-4", "col-form-label"], ["type", "text", "id", "schedule-start-date", "bsDatepicker", "", "formControlName", "startDate", 1, "form-control", 3, "bsConfig"], ["for", "schedule-month-of-year", 1, "col-12", "col-md-4", "col-form-label"], ["id", "schedule-month-of-year", "formControlName", "monthOfYear", 1, "form-control"], ["for", "schedule-day-of-month", 1, "col-12", "col-md-4", "col-form-label"], ["id", "schedule-day-of-month", "formControlName", "dayOfMonth", 1, "form-control"], ["for", "schedule-day-of-week", 1, "col-12", "col-md-4", "col-form-label"], ["id", "schedule-day-of-week", "formControlName", "dayOfWeek", 1, "form-control"], ["for", "schedule-time", 1, "col-12", "col-md-4", "col-form-label"], ["id", "schedule-time", "formControlName", "time"], ["for", "schedule-exclude-holidays", 1, "col-12", "col-md-4", "col-form-label"], [1, "form-check"], ["type", "checkbox", "id", "schedule-exclude-holidays", "formControlName", "excludeHolidays", 1, "form-check-input", "position-static"], ["for", "schedule-exclude-weekends", 1, "col-12", "col-md-4", "col-form-label"], ["type", "checkbox", "id", "schedule-exclude-weekends", "formControlName", "excludeWeekends", 1, "form-check-input", "position-static"], ["for", "schedule-exclude-others", 1, "col-12", "col-md-4", "col-form-label"], ["id", "schedule-exclude-others", "type", "checkbox", "formControlName", "excludeOthers", 1, "form-check-input", "position-static"], ["for", "schedule-end-date", 1, "col-12", "col-md-4", "col-form-label"], ["type", "text", "id", "schedule-end-date", "bsDatepicker", "", "formControlName", "endDate", 1, "form-control", 3, "bsConfig"], [3, "type", "dismissOnTimeout"], [1, "d-flex", "justify-content-end", "mb-4"], ["type", "button", "class", "btn btn-warning", 3, "click", 4, "ngIf"], ["type", "submit", "class", "btn btn-success", 4, "ngIf"], ["type", "button", 1, "btn", "btn-warning", 3, "click"], ["type", "submit", 1, "btn", "btn-success"]], template: function ScheduleTimePickerComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "form", 0);
                core.ɵɵlistener("ngSubmit", function ScheduleTimePickerComponent_Template_form_ngSubmit_0_listener() { return ctx.confirm(); });
                core.ɵɵtemplate(1, ScheduleTimePickerComponent_div_1_Template, 7, 8, "div", 1);
                core.ɵɵtemplate(2, ScheduleTimePickerComponent_div_2_Template, 9, 7, "div", 1);
                core.ɵɵtemplate(3, ScheduleTimePickerComponent_div_3_Template, 7, 8, "div", 1);
                core.ɵɵtemplate(4, ScheduleTimePickerComponent_div_4_Template, 6, 8, "div", 1);
                core.ɵɵtemplate(5, ScheduleTimePickerComponent_div_5_Template, 9, 7, "div", 1);
                core.ɵɵtemplate(6, ScheduleTimePickerComponent_div_6_Template, 9, 7, "div", 1);
                core.ɵɵtemplate(7, ScheduleTimePickerComponent_div_7_Template, 9, 7, "div", 1);
                core.ɵɵtemplate(8, ScheduleTimePickerComponent_div_8_Template, 6, 6, "div", 1);
                core.ɵɵtemplate(9, ScheduleTimePickerComponent_div_9_Template, 10, 12, "div", 1);
                core.ɵɵtemplate(10, ScheduleTimePickerComponent_div_10_Template, 7, 6, "div", 1);
                core.ɵɵtemplate(11, ScheduleTimePickerComponent_div_11_Template, 10, 12, "div", 1);
                core.ɵɵtemplate(12, ScheduleTimePickerComponent_div_12_Template, 6, 8, "div", 1);
                core.ɵɵtemplate(13, ScheduleTimePickerComponent_ng_container_13_Template, 4, 8, "ng-container", 2);
                core.ɵɵtemplate(14, ScheduleTimePickerComponent_div_14_Template, 3, 2, "div", 3);
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
                core.ɵɵproperty("ngIf", !ctx.hideSubmitBtn || !ctx.hideCancelBtn);
            } }, directives: [forms.ɵangular_packages_forms_forms_y, forms.NgControlStatusGroup, forms.FormGroupDirective, common.NgIf, common.NgForOf, forms.DefaultValueAccessor, forms.RadioControlValueAccessor, forms.NgControlStatus, forms.FormControlName, forms.SelectControlValueAccessor, forms.NgSelectOption, forms.ɵangular_packages_forms_forms_x, ngxAutofocusDirective.AutofocusDirective, datepicker.BsDatepickerInputDirective, datepicker.BsDatepickerDirective, timepicker.TimepickerComponent, forms.CheckboxControlValueAccessor, alert.AlertComponent], pipes: [ngxI18n.HyperTranslatePipe], styles: [""] });
        return ScheduleTimePickerComponent;
    }(ngxFormCommon.DefaultFormBaseComponent));
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
            }] }); })();

    var CronJobService = /** @class */ (function () {
        function CronJobService() {
        }
        CronJobService.prototype.parseCronExpr = function (source, target) {
            var a = cronParser.parseExpression(source);
            // Case 1 (every year)
            if (a.fields.month.length == 1 && a.fields.dayOfMonth.length == 1) {
                target.recurrence = feUtilities.IntervalEnum.Year;
            }
            else if (a.fields.month.length == 12 &&
                a.fields.dayOfMonth.length == 1 &&
                a.fields.dayOfWeek.length == 8) {
                target.recurrence = feUtilities.IntervalEnum.Month;
            }
            else if (a.fields.month.length == 12 &&
                a.fields.dayOfMonth.length == 31 &&
                a.fields.dayOfWeek.length == 1) {
                target.recurrence = feUtilities.IntervalEnum.Week;
            }
            else if (a.fields.month.length == 12 &&
                a.fields.dayOfMonth.length == 31 &&
                a.fields.dayOfWeek.length == 8) {
                target.recurrence == feUtilities.IntervalEnum.Day;
            }
            else {
                target.recurrence = feUtilities.IntervalEnum.Custom;
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
            if (source.recurrence == feUtilities.IntervalEnum.Year) {
                return utc.getMinutes() + " " + hour + " " + source.dayOfMonth + " " + source.monthOfYear + " *";
            }
            else if (source.recurrence == feUtilities.IntervalEnum.Month) {
                return utc.getMinutes() + " " + hour + " " + source.dayOfMonth + " * *";
            }
            else if (source.recurrence == feUtilities.IntervalEnum.Week) {
                return utc.getMinutes() + " " + hour + " * * " + source.dayOfWeek;
            }
            else if (source.recurrence == feUtilities.IntervalEnum.Day) {
                return utc.getMinutes() + " " + hour + " * * *";
            }
            else if (source.recurrence == feUtilities.IntervalEnum.Custom) {
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
    exports.getDefaultScheduleTime = getDefaultScheduleTime;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polpware-cron-job.umd.js.map
