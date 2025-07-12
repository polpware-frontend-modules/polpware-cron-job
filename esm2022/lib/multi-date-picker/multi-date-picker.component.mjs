import { Component, Input } from '@angular/core';
import { safeParseInt } from '@polpware/fe-utilities';
import { DefaultFormBaseComponent } from '@polpware/ngx-form-common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "ngx-bootstrap/datepicker";
import * as i3 from "ngx-chips";
import * as i4 from "../cron-job-hyper-trans.pipe";
const _c0 = function () { return { adaptivePosition: true }; };
const _c1 = function () { return { standalone: true }; };
function getFormattedDate(date) {
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    return month + '/' + day;
}
const formValidator = (control) => {
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
export class MultiDatePickerComponent extends DefaultFormBaseComponent {
    constructor(_builder) {
        super();
        this._builder = _builder;
        this.initValue = [];
        this.prefix = 'mdp-' + (new Date).getTime() + '-';
        this.bsValue = new Date();
        this.items = [];
        this.form = this._builder.group({
            'chips': []
        }, { validators: [formValidator] });
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
    static { this.ɵfac = function MultiDatePickerComponent_Factory(t) { return new (t || MultiDatePickerComponent)(i0.ɵɵdirectiveInject(i1.UntypedFormBuilder)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MultiDatePickerComponent, selectors: [["polp-bs-multi-date-picker"]], inputs: { initValue: "initValue" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 12, vars: 15, consts: [[3, "ngSubmit"], [1, "mb-4"], [1, "form-label", 3, "for"], [1, "input-group"], ["type", "text", "bsDatepicker", "", 1, "form-control", 3, "id", "bsConfig", "ngModelOptions", "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-info"], [3, "formGroup"], [3, "formControlName"]], template: function MultiDatePickerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "form", 0);
            i0.ɵɵlistener("ngSubmit", function MultiDatePickerComponent_Template_form_ngSubmit_0_listener() { return ctx.confirm(); });
            i0.ɵɵelementStart(1, "div", 1)(2, "label", 2);
            i0.ɵɵtext(3);
            i0.ɵɵpipe(4, "cronJobHyperTrans");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div", 3)(6, "input", 4);
            i0.ɵɵlistener("ngModelChange", function MultiDatePickerComponent_Template_input_ngModelChange_6_listener($event) { return ctx.bsValue = $event; });
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
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(4, 9, "polpCronJob.inputDate"), " ");
            i0.ɵɵadvance(3);
            i0.ɵɵpropertyInterpolate("id", ctx.prefix + "tag-input");
            i0.ɵɵproperty("bsConfig", i0.ɵɵpureFunction0(13, _c0))("ngModelOptions", i0.ɵɵpureFunction0(14, _c1))("ngModel", ctx.bsValue);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(9, 11, "polpCronJob.confirmBtn"), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formControlName", "chips");
        } }, dependencies: [i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.NgModel, i1.NgForm, i1.FormGroupDirective, i1.FormControlName, i2.BsDatepickerDirective, i2.BsDatepickerInputDirective, i3.TagInputComponent, i4.CronJobHyperTransPipe] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MultiDatePickerComponent, [{
        type: Component,
        args: [{ selector: 'polp-bs-multi-date-picker', template: "<form (ngSubmit)=\"confirm()\">\n    <div class=\"mb-4\">\n        <label class=\"form-label\"\n               for=\"{{prefix + 'tag-input'}}\">\n            {{'polpCronJob.inputDate' | cronJobHyperTrans}}\n        </label>\n        \n        <div class=\"input-group\">\n            <input type=\"text\"\n                   class=\"form-control\"\n                   id=\"{{prefix + 'tag-input'}}\"\n                   bsDatepicker\n                   [bsConfig]=\"{ adaptivePosition: true }\"\n                   [ngModelOptions]=\"{standalone: true}\"\n                   [(ngModel)]=\"bsValue\">\n            <button type=\"submit\" class=\"btn btn-info\">\n                {{'polpCronJob.confirmBtn' | cronJobHyperTrans}}\n            </button>\n        </div>\n    </div>\n</form>\n\n\n\n<form [formGroup]=\"form\">\n    <tag-input\n        [formControlName]=\"'chips'\">\n    </tag-input>\n</form>    \n" }]
    }], function () { return [{ type: i1.UntypedFormBuilder }]; }, { initValue: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcG9scHdhcmUvY3Jvbi1qb2Ivc3JjL2xpYi9tdWx0aS1kYXRlLXBpY2tlci9tdWx0aS1kYXRlLXBpY2tlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9jcm9uLWpvYi9zcmMvbGliL211bHRpLWRhdGUtcGlja2VyL211bHRpLWRhdGUtcGlja2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRXpELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7Ozs7QUFHckUsU0FBUyxnQkFBZ0IsQ0FBQyxJQUFJO0lBQzFCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzdDLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0lBRS9DLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQyxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUV2QyxPQUFPLEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQzdCLENBQUM7QUFFRCxNQUFNLGFBQWEsR0FBZ0IsQ0FBQyxP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bXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVW50eXBlZEZvcm1CdWlsZGVyLCBVbnR5cGVkRm9ybUNvbnRyb2wsIFVudHlwZWRGb3JtR3JvdXAsIFZhbGlkYXRpb25FcnJvcnMsIFZhbGlkYXRvckZuIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgc2FmZVBhcnNlSW50IH0gZnJvbSAnQHBvbHB3YXJlL2ZlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBEZWZhdWx0Rm9ybUJhc2VDb21wb25lbnQgfSBmcm9tICdAcG9scHdhcmUvbmd4LWZvcm0tY29tbW9uJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5mdW5jdGlvbiBnZXRGb3JtYXR0ZWREYXRlKGRhdGUpIHtcbiAgICB2YXIgbW9udGggPSAoMSArIGRhdGUuZ2V0TW9udGgoKSkudG9TdHJpbmcoKTtcbiAgICBtb250aCA9IG1vbnRoLmxlbmd0aCA+IDEgPyBtb250aCA6ICcwJyArIG1vbnRoO1xuXG4gICAgdmFyIGRheSA9IGRhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCk7XG4gICAgZGF5ID0gZGF5Lmxlbmd0aCA+IDEgPyBkYXkgOiAnMCcgKyBkYXk7XG5cbiAgICByZXR1cm4gbW9udGggKyAnLycgKyBkYXk7XG59XG5cbmNvbnN0IGZvcm1WYWxpZGF0b3I6IFZhbGlkYXRvckZuID0gKGNvbnRyb2w6IFVudHlwZWRGb3JtR3JvdXApOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG5cbiAgICBsZXQgdjogeyBkaXNwbGF5OiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfSB8IEFycmF5PHsgZGlzcGxheTogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIH0+ID0gKGNvbnRyb2wuZ2V0KCdjaGlwcycpIGFzIFVudHlwZWRGb3JtQ29udHJvbCkudmFsdWU7XG4gICAgaWYgKHYpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHYpKSB7XG4gICAgICAgICAgICB2ID0gW3ZdO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNvbWVXcm9uZyA9IHYuc29tZShhID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGIgPSBhLnZhbHVlO1xuICAgICAgICAgICAgaWYgKCFiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjID0gYi5zcGxpdCgnLycpO1xuICAgICAgICAgICAgaWYgKGMubGVuZ3RoICE9IDIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG0gPSBzYWZlUGFyc2VJbnQoY1swXSk7XG4gICAgICAgICAgICBpZiAobSA8IDEgfHwgbSA+IDEyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkID0gc2FmZVBhcnNlSW50KGNbMV0pO1xuICAgICAgICAgICAgaWYgKGQgPCAwIHx8IGQgPiAzMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoc29tZVdyb25nKSB7XG4gICAgICAgICAgICByZXR1cm4geyBjaGlwczogdHJ1ZSB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncG9scC1icy1tdWx0aS1kYXRlLXBpY2tlcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL211bHRpLWRhdGUtcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9tdWx0aS1kYXRlLXBpY2tlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTXVsdGlEYXRlUGlja2VyQ29tcG9uZW50IGV4dGVuZHMgRGVmYXVsdEZvcm1CYXNlQ29tcG9uZW50XG4gICAgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KCkgaW5pdFZhbHVlOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgcHJlZml4ID0gJ21kcC0nICsgKG5ldyBEYXRlKS5nZXRUaW1lKCkgKyAnLSc7XG5cbiAgICBic1ZhbHVlID0gbmV3IERhdGUoKTtcblxuICAgIGl0ZW1zOiBBcnJheTx7XG4gICAgICAgIGRpc3BsYXk6IGFueTtcbiAgICAgICAgdmFsdWU6IGFueTtcbiAgICB9PiA9IFtdO1xuXG4gICAgZm9ybTogVW50eXBlZEZvcm1Hcm91cDtcblxuICAgIHByaXZhdGUgX3N1YnI6IFN1YnNjcmlwdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2J1aWxkZXI6IFVudHlwZWRGb3JtQnVpbGRlcikge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuZm9ybSA9IHRoaXMuX2J1aWxkZXIuZ3JvdXAoe1xuICAgICAgICAgICAgJ2NoaXBzJzogW11cbiAgICAgICAgfSwgeyB2YWxpZGF0b3JzOiBbZm9ybVZhbGlkYXRvcl0gfSk7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgICAgICBpZiAodGhpcy5pbml0VmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5pbml0VmFsdWUubWFwKGEgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGEsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBhXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLnNldFZhbHVlKHtcbiAgICAgICAgICAgICAgICAgICAgY2hpcHM6IGl0ZW1zXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdGhpcy5fc3ViciA9IHRoaXMuZm9ybS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKGEgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlWYWxpZGF0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVZhbHVlQ2hhbmdlcyhhLmNoaXBzKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5fc3Vici51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuXG4gICAgY29uZmlybSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYnNWYWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLmZvcm0udmFsdWUuY2hpcHMgfHwgW107XG4gICAgICAgICAgICBjb25zdCB2ID0gZ2V0Rm9ybWF0dGVkRGF0ZSh0aGlzLmJzVmFsdWUpO1xuICAgICAgICAgICAgY29uc3QgbmV3SXRlbXMgPSBbLi4uaXRlbXMsIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiB2LFxuICAgICAgICAgICAgICAgIHZhbHVlOiB2XG4gICAgICAgICAgICB9XTtcblxuICAgICAgICAgICAgdGhpcy5mb3JtLnNldFZhbHVlKHtcbiAgICAgICAgICAgICAgICBjaGlwczogbmV3SXRlbXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCI8Zm9ybSAobmdTdWJtaXQpPVwiY29uZmlybSgpXCI+XG4gICAgPGRpdiBjbGFzcz1cIm1iLTRcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1sYWJlbFwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e3ByZWZpeCArICd0YWctaW5wdXQnfX1cIj5cbiAgICAgICAgICAgIHt7J3BvbHBDcm9uSm9iLmlucHV0RGF0ZScgfCBjcm9uSm9iSHlwZXJUcmFuc319XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgIGlkPVwie3twcmVmaXggKyAndGFnLWlucHV0J319XCJcbiAgICAgICAgICAgICAgICAgICBic0RhdGVwaWNrZXJcbiAgICAgICAgICAgICAgICAgICBbYnNDb25maWddPVwieyBhZGFwdGl2ZVBvc2l0aW9uOiB0cnVlIH1cIlxuICAgICAgICAgICAgICAgICAgIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIlxuICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiYnNWYWx1ZVwiPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLWluZm9cIj5cbiAgICAgICAgICAgICAgICB7eydwb2xwQ3JvbkpvYi5jb25maXJtQnRuJyB8IGNyb25Kb2JIeXBlclRyYW5zfX1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZm9ybT5cblxuXG5cbjxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuICAgIDx0YWctaW5wdXRcbiAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCInY2hpcHMnXCI+XG4gICAgPC90YWctaW5wdXQ+XG48L2Zvcm0+ICAgIFxuIl19