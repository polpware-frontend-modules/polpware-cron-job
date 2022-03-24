(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@polpware/fe-utilities'), require('@angular/core'), require('@angular/forms'), require('@polpware/ngx-alert'), require('@polpware/ngx-form-common'), require('cron-parser'), require('@fortawesome/free-solid-svg-icons'), require('@polpware/bs-components'), require('ngx-bootstrap/modal'), require('moment'), require('@angular/common'), require('ngx-bootstrap/accordion'), require('ngx-bootstrap/alert'), require('ngx-bootstrap/buttons'), require('ngx-bootstrap/carousel'), require('ngx-bootstrap/collapse'), require('ngx-bootstrap/datepicker'), require('ngx-bootstrap/dropdown'), require('ngx-bootstrap/pagination'), require('ngx-bootstrap/popover'), require('ngx-bootstrap/progressbar'), require('ngx-bootstrap/tabs'), require('ngx-bootstrap/timepicker'), require('ngx-bootstrap/tooltip'), require('@40three/ngx-autofocus-directive'), require('@polpware/ngx-i18n'), require('@polpware/modal-directives')) :
    typeof define === 'function' && define.amd ? define('@polpware/cron-job', ['exports', '@polpware/fe-utilities', '@angular/core', '@angular/forms', '@polpware/ngx-alert', '@polpware/ngx-form-common', 'cron-parser', '@fortawesome/free-solid-svg-icons', '@polpware/bs-components', 'ngx-bootstrap/modal', 'moment', '@angular/common', 'ngx-bootstrap/accordion', 'ngx-bootstrap/alert', 'ngx-bootstrap/buttons', 'ngx-bootstrap/carousel', 'ngx-bootstrap/collapse', 'ngx-bootstrap/datepicker', 'ngx-bootstrap/dropdown', 'ngx-bootstrap/pagination', 'ngx-bootstrap/popover', 'ngx-bootstrap/progressbar', 'ngx-bootstrap/tabs', 'ngx-bootstrap/timepicker', 'ngx-bootstrap/tooltip', '@40three/ngx-autofocus-directive', '@polpware/ngx-i18n', '@polpware/modal-directives'], factory) :
    (global = global || self, factory((global.polpware = global.polpware || {}, global.polpware['cron-job'] = {}), global.feUtilities, global.ng.core, global.ng.forms, global.ngxAlert, global.ngxFormCommon, global.cronParser, global.freeSolidSvgIcons, global.bsComponents, global.modal, global.moment, global.ng.common, global.accordion, global.alert, global.buttons, global.carousel, global.collapse, global.datepicker, global.dropdown, global.pagination, global.popover, global.progressbar, global.tabs, global.timepicker, global.tooltip, global.ngxAutofocusDirective, global.ngxI18n, global.modalDirectives));
}(this, (function (exports, feUtilities, core, forms, ngxAlert, ngxFormCommon, cronParser, freeSolidSvgIcons, bsComponents, modal, moment, common, accordion, alert, buttons, carousel, collapse, datepicker, dropdown, pagination, popover, progressbar, tabs, timepicker, tooltip, ngxAutofocusDirective, ngxI18n, modalDirectives) { 'use strict';

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
    var ɵ0 = formValidator;
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
        ScheduleTimePickerComponent.ctorParameters = function () { return [
            { type: forms.FormBuilder }
        ]; };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], ScheduleTimePickerComponent.prototype, "initSettings", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], ScheduleTimePickerComponent.prototype, "initValue", void 0);
        ScheduleTimePickerComponent = __decorate([
            core.Component({
                selector: 'polp-bs-schedule-time-picker',
                template: "<form [formGroup]=\"form\" (ngSubmit)=\"confirm()\">\n    <div class=\"form-group row\" *ngIf=\"visibiltyCfg.scheduleType\">\n        <label class=\"col-12 col-md-4 col-form-label\">\n            {{'polpCronJob.scheduleType' | hyperTrans:null:null:defaultRes}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <div class=\"form-check form-check-inline\"\n                 *ngFor=\"let opt of scheduleTypeOptions;let i=index\">\n                <input class=\"form-check-input\"\n                       formControlName=\"scheduleType\"\n                       type=\"radio\"\n                       id=\"{{'schedule-type-opt-' + i}}\"\n                       value=\"{{opt.value}}\">\n                <label class=\"form-check-label\"\n                       for=\"{{'schedule-type-opt-' + i}}\">\n                    {{opt.text | hyperTrans:null:null:defaultRes}}\n                </label>\n            </div>\n            <span class=\"text-warning d-block my-1 small\" *ngIf=\"form.hasError('scheduleType') && (form.get('scheduleType').dirty || form.get('scheduleType').touched)\">\n                {{'polpCronJob.errors.scheduleTypeRequired' | hyperTrans:null:null:defaultRes}}\n            </span>\n        </div>\n    </div>\n    \n    <div class=\"form-group row\" *ngIf=\"visibiltyCfg.recurrence\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"schedule-recurrence\">\n            {{'polpCronJob.recurrence' | hyperTrans:null:null:defaultRes}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <select class=\"form-control\"\n                    id=\"schedule-recurrence\"\n                    formControlName=\"recurrence\">\n                <option selected value=\"\">...</option>\n                <option value=\"{{opt.value}}\" *ngFor=\"let opt of recurrenceOptions\">\n                    {{opt.text | hyperTrans:null:null:defaultRes}}\n                </option>\n            </select>\n        </div>\n    </div>\n\n    <div class=\"form-group row\" *ngIf=\"visibiltyCfg.recurrence && visibiltyCfg.customExpr\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"schedule-custom-expr\">\n            {{'polpCronJob.customExpr' | hyperTrans:null:null:defaultRes}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <input class=\"form-control\"\n                   type=\"text\"\n                   [autofocus]=\"true\"\n                   id=\"schedule-custom-expr\"\n                   formControlName=\"customExpr\">\n            <span class=\"text-warning d-block my-1 small\" *ngIf=\"form.hasError('customExpr') && (form.get('customExpr').dirty || form.get('customExpr').touched)\">\n                {{'polpCronJob.errors.customExprInvalid' | hyperTrans:null:null:defaultRes}}\n            </span>\n        </div>\n    </div>\n\n    <div class=\"form-group row\" *ngIf=\"visibiltyCfg.startDate\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"schedule-start-date\">\n            {{'polpCronJob.startDate' | hyperTrans:null:null:defaultRes}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <input class=\"form-control\"\n                   type=\"text\"\n                   id=\"schedule-start-date\"\n                   bsDatepicker\n                   [bsConfig]=\"{ adaptivePosition: true }\"\n                   formControlName=\"startDate\">\n        </div>\n    </div>\n\n\n    <div class=\"form-group row\" *ngIf=\"visibiltyCfg.monthOfYear\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"schedule-month-of-year\">\n            {{'polpCronJob.monthOfYear' | hyperTrans:null:null:defaultRes}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <select class=\"form-control\"\n                    id=\"schedule-month-of-year\"\n                    formControlName=\"monthOfYear\">\n                <option selected value=\"\">...</option>\n                <option value=\"{{opt.value}}\" *ngFor=\"let opt of monthsOfYearOptions\">\n                    {{opt.text | hyperTrans:null:null:defaultRes}}\n                </option>\n            </select>\n        </div>\n    </div>\n\n    <div class=\"form-group row\" *ngIf=\"visibiltyCfg.dayOfMonth\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"schedule-day-of-month\">\n            {{'polpCronJob.dayOfMonth' | hyperTrans:null:null:defaultRes}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <select class=\"form-control\"\n                    id=\"schedule-day-of-month\"\n                    formControlName=\"dayOfMonth\">\n                <option selected value=\"\">...</option>\n                <option value=\"{{opt.value}}\" *ngFor=\"let opt of daysOfMonthOptions\">\n                    {{opt.text}}\n                </option>\n            </select>\n        </div>\n    </div>\n\n\n    <div class=\"form-group row\" *ngIf=\"visibiltyCfg.dayOfWeek\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"schedule-day-of-week\">\n            {{'polpCronJob.dayOfWeek' | hyperTrans:null:null:defaultRes}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <select class=\"form-control\"\n                    id=\"schedule-day-of-week\"\n                    formControlName=\"dayOfWeek\">\n                <option selected value=\"\">...</option>\n                <option value=\"{{opt.value}}\" *ngFor=\"let opt of daysOfWeekOptions\">\n                    {{opt.text | hyperTrans:null:null:defaultRes}}\n                </option>\n            </select>\n        </div>\n    </div>\n\n    <div class=\"form-group row\" *ngIf=\"visibiltyCfg.time\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"schedule-time\">\n            {{'polpCronJob.time' | hyperTrans:null:null:defaultRes}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <timepicker id=\"schedule-time\"\n                        formControlName=\"time\">\n            </timepicker>\n        </div>\n    </div>\n\n    <div class=\"form-group row\" *ngIf=\"visibiltyCfg.excludeHolidays\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"schedule-exclude-holidays\">\n            {{'polpCronJob.excludeHolidays' | hyperTrans:null:null:defaultRes}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <div class=\"form-check\">\n                <input class=\"form-check-input position-static\"\n                       type=\"checkbox\"\n                       id=\"schedule-exclude-holidays\"\n                       formControlName=\"excludeHolidays\">\n            </div>\n            <div>\n                {{'polpCronJob.holidayLabel' | hyperTrans:null:null:defaultRes}}\n            </div>\n        </div>\n    </div>\n    <div class=\"form-group row\" *ngIf=\"visibiltyCfg.excludeWeekends\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"schedule-exclude-weekends\">\n            {{'polpCronJob.excludeWeekends' | hyperTrans:null:null:defaultRes}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <div class=\"form-check\">\n                <input class=\"form-check-input position-static\"\n                       type=\"checkbox\"\n                       id=\"schedule-exclude-weekends\"\n                       formControlName=\"excludeWeekends\">\n            </div>\n        </div>\n    </div>\n    <div class=\"form-group row\" *ngIf=\"visibiltyCfg.excludeOthers\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"schedule-exclude-others\">\n            {{'polpCronJob.excludeOthers' | hyperTrans:null:null:defaultRes}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <div class=\"form-check\">\n                <input class=\"form-check-input position-static\"\n                       id=\"schedule-exclude-others\"\n                       type=\"checkbox\"\n                       formControlName=\"excludeOthers\">\n            </div>\n            <div>\n                {{'polpCronJob.otherLabel' | hyperTrans:null:null:defaultRes}}\n            </div>\n        </div>\n    </div>\n\n    <div class=\"form-group row\" *ngIf=\"visibiltyCfg.endDate\">\n        <label class=\"col-12 col-md-4 col-form-label\"\n               for=\"schedule-end-date\">\n            {{'polpCronJob.endDate' | hyperTrans:null:null:defaultRes}}\n        </label>\n        <div class=\"col-12 col-md-8\">\n            <input class=\"form-control\"\n                   type=\"text\"\n                   id=\"schedule-end-date\"\n                   bsDatepicker\n                   [bsConfig]=\"{ adaptivePosition: true }\"\n                   formControlName=\"endDate\">\n        </div>\n    </div>\n\n    <ng-container *ngFor=\"let a of alerts\">\n        <alert [type]=\"a.type\" [dismissOnTimeout]=\"a.timeout\">\n            {{a.message | hyperTrans:null:null:defaultRes}}\n        </alert>\n    </ng-container>\n    \n    <div class=\"d-flex justify-content-end mb-4\" *ngIf=\"!hideSubmitBtn || !hideCancelBtn\">\n        <button type=\"button\" class=\"btn btn-warning\"\n                (click)=\"cancel()\" *ngIf=\"!hideCancelBtn\">\n            {{'polpCronJob.cancelBtn' | hyperTrans:null:null:defaultRes}}\n        </button>\n        <button type=\"submit\" class=\"btn btn-success\"\n                *ngIf=\"!hideSubmitBtn\">\n            {{'polpCronJob.submitBtn' | hyperTrans:null:null:defaultRes}}\n        </button>\n    </div>\n</form>\n",
                styles: [""]
            }),
            __metadata("design:paramtypes", [forms.FormBuilder])
        ], ScheduleTimePickerComponent);
        return ScheduleTimePickerComponent;
    }(ngxFormCommon.DefaultFormBaseComponent));

    var ScheduleTimeModalComponent = /** @class */ (function (_super) {
        __extends(ScheduleTimeModalComponent, _super);
        function ScheduleTimeModalComponent(bsModalRef, bsModalService) {
            var _this = _super.call(this) || this;
            _this.bsModalRef = bsModalRef;
            _this.bsModalService = bsModalService;
            _this.faSpinner = freeSolidSvgIcons.faSpinner;
            _this.title = '';
            _this.alertProvider = new ngxAlert.AlertDefaultImpl();
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
            this.closeModal(this.outputValue);
        };
        ScheduleTimeModalComponent.prototype.updateScheduler = function (evt) {
            this.outputValue = evt;
        };
        ScheduleTimeModalComponent.prototype.validateScheduler = function (evt) {
            if (evt) {
                this.isValid = evt.valid;
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
                                this.alertProvider.warning('Data is not valid!');
                                return [2 /*return*/];
                            }
                            this.isSaving = true;
                            this.alertProvider.warning('Working ....');
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, 4, 5]);
                            return [4 /*yield*/, this.onConfirmAsync(this.outputValue)];
                        case 2:
                            _a.sent();
                            this.closeModal(this.outputValue);
                            return [3 /*break*/, 5];
                        case 3:
                            ex_1 = _a.sent();
                            this.alertProvider.clean();
                            this.alertProvider.danger('Something went wrong. Please try later!');
                            return [3 /*break*/, 5];
                        case 4:
                            this.isSaving = false;
                            return [7 /*endfinally*/];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        ScheduleTimeModalComponent.ctorParameters = function () { return [
            { type: modal.BsModalRef },
            { type: modal.BsModalService }
        ]; };
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], ScheduleTimeModalComponent.prototype, "title", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], ScheduleTimeModalComponent.prototype, "initSettings", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], ScheduleTimeModalComponent.prototype, "initValue", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Function)
        ], ScheduleTimeModalComponent.prototype, "onConfirmAsync", void 0);
        ScheduleTimeModalComponent = __decorate([
            core.Component({
                selector: 'polp-bs-schedule-time-modal',
                template: "<div class=\"modal-header\" polpModalDraggable>\n    <h4 class=\"modal-title\">{{title}}</h4>\n</div>\n<div class=\"modal-body\">\n    <polp-bs-schedule-time-picker [initSettings]=\"initSettings\"\n                                  [initValue]=\"initValue\"\n                                  (onValidation)=\"validateScheduler($event)\"\n                                  (onValueChanged)=\"updateScheduler($event)\">\n    </polp-bs-schedule-time-picker>\n    \n    <ng-container *ngFor=\"let a of alerts\">\n        <alert [type]=\"a.type\" [dismissOnTimeout]=\"a.timeout\">\n            {{a.message}}\n        </alert>\n    </ng-container>\n    \n</div>\n<div class=\"modal-footer\">\n    <div class=\"d-flex justify-content-end\">\n        <button class=\"btn btn-secondary mr-2\" (click)=\"close()\">\n            Close\n        </button>\n        <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"isValid\"\n                (click)=\"confirmAsync()\">\n            Confirm\n            <fa-icon [icon]=\"faSpinner\" [spin]=\"true\" class=\"ml-1\" *ngIf=\"isSaving\"></fa-icon>\n        </button>\n    </div>\n</div>\n",
                styles: [""]
            }),
            __metadata("design:paramtypes", [modal.BsModalRef,
                modal.BsModalService])
        ], ScheduleTimeModalComponent);
        return ScheduleTimeModalComponent;
    }(bsComponents.ObservableModalAbstractComponent));

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
        CronJobService.ɵprov = core.ɵɵdefineInjectable({ factory: function CronJobService_Factory() { return new CronJobService(); }, token: CronJobService, providedIn: "root" });
        CronJobService = __decorate([
            core.Injectable({
                providedIn: 'root'
            }),
            __metadata("design:paramtypes", [])
        ], CronJobService);
        return CronJobService;
    }());

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
        UtilsService.ctorParameters = function () { return [
            { type: modal.BsModalService }
        ]; };
        UtilsService.ɵprov = core.ɵɵdefineInjectable({ factory: function UtilsService_Factory() { return new UtilsService(core.ɵɵinject(modal.BsModalService)); }, token: UtilsService, providedIn: "root" });
        UtilsService = __decorate([
            core.Injectable({
                providedIn: 'root'
            }),
            __metadata("design:paramtypes", [modal.BsModalService])
        ], UtilsService);
        return UtilsService;
    }());

    var PolpBsCronJobModule = /** @class */ (function () {
        function PolpBsCronJobModule() {
        }
        PolpBsCronJobModule = __decorate([
            core.NgModule({
                declarations: [
                    ScheduleTimePickerComponent,
                    ScheduleTimeModalComponent
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
                    ngxI18n.NgxI18nModule,
                    modalDirectives.PolpDraggableModule
                ],
                exports: [
                    ScheduleTimePickerComponent,
                    ScheduleTimeModalComponent
                ]
            })
        ], PolpBsCronJobModule);
        return PolpBsCronJobModule;
    }());

    exports.CronJobService = CronJobService;
    exports.PolpBsCronJobModule = PolpBsCronJobModule;
    exports.ScheduleTimeModalComponent = ScheduleTimeModalComponent;
    exports.ScheduleTimePickerComponent = ScheduleTimePickerComponent;
    exports.UtilsService = UtilsService;
    exports.defaultDict = defaultDict;
    exports.getDefaultScheduleTime = getDefaultScheduleTime;
    exports.ɵ0 = ɵ0;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polpware-cron-job.umd.js.map
