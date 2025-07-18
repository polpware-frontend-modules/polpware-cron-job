import { Component, Input } from '@angular/core';
import { safeParseInt } from '@polpware/fe-utilities';
import { DefaultFormBaseComponent } from '@polpware/ngx-form-common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "ngx-bootstrap/datepicker";
import * as i3 from "ngx-chips";
import * as i4 from "../cron-job-hyper-trans.pipe";
const _c0 = () => ({ adaptivePosition: true });
const _c1 = () => ({ standalone: true });
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
    static { this.ɵfac = function MultiDatePickerComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MultiDatePickerComponent)(i0.ɵɵdirectiveInject(i1.UntypedFormBuilder)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MultiDatePickerComponent, selectors: [["polp-bs-multi-date-picker"]], inputs: { initValue: "initValue" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 12, vars: 15, consts: [[3, "ngSubmit"], [1, "mb-4"], [1, "form-label", 3, "for"], [1, "input-group"], ["type", "text", "bsDatepicker", "", 1, "form-control", 3, "ngModelChange", "id", "bsConfig", "ngModelOptions", "ngModel"], ["type", "submit", 1, "btn", "btn-info"], [3, "formGroup"], [3, "formControlName"]], template: function MultiDatePickerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "form", 0);
            i0.ɵɵlistener("ngSubmit", function MultiDatePickerComponent_Template_form_ngSubmit_0_listener() { return ctx.confirm(); });
            i0.ɵɵelementStart(1, "div", 1)(2, "label", 2);
            i0.ɵɵtext(3);
            i0.ɵɵpipe(4, "cronJobHyperTrans");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div", 3)(6, "input", 4);
            i0.ɵɵtwoWayListener("ngModelChange", function MultiDatePickerComponent_Template_input_ngModelChange_6_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.bsValue, $event) || (ctx.bsValue = $event); return $event; });
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
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(4, 9, "polpCronJob.inputDate"), " ");
            i0.ɵɵadvance(3);
            i0.ɵɵpropertyInterpolate("id", ctx.prefix + "tag-input");
            i0.ɵɵproperty("bsConfig", i0.ɵɵpureFunction0(13, _c0))("ngModelOptions", i0.ɵɵpureFunction0(14, _c1));
            i0.ɵɵtwoWayProperty("ngModel", ctx.bsValue);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(9, 11, "polpCronJob.confirmBtn"), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance();
            i0.ɵɵproperty("formControlName", "chips");
        } }, dependencies: [i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.NgModel, i1.NgForm, i1.FormGroupDirective, i1.FormControlName, i2.BsDatepickerDirective, i2.BsDatepickerInputDirective, i3.TagInputComponent, i4.CronJobHyperTransPipe] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MultiDatePickerComponent, [{
        type: Component,
        args: [{ selector: 'polp-bs-multi-date-picker', template: "<form (ngSubmit)=\"confirm()\">\n    <div class=\"mb-4\">\n        <label class=\"form-label\"\n               for=\"{{prefix + 'tag-input'}}\">\n            {{'polpCronJob.inputDate' | cronJobHyperTrans}}\n        </label>\n        \n        <div class=\"input-group\">\n            <input type=\"text\"\n                   class=\"form-control\"\n                   id=\"{{prefix + 'tag-input'}}\"\n                   bsDatepicker\n                   [bsConfig]=\"{ adaptivePosition: true }\"\n                   [ngModelOptions]=\"{standalone: true}\"\n                   [(ngModel)]=\"bsValue\">\n            <button type=\"submit\" class=\"btn btn-info\">\n                {{'polpCronJob.confirmBtn' | cronJobHyperTrans}}\n            </button>\n        </div>\n    </div>\n</form>\n\n\n\n<form [formGroup]=\"form\">\n    <tag-input\n        [formControlName]=\"'chips'\">\n    </tag-input>\n</form>    \n" }]
    }], () => [{ type: i1.UntypedFormBuilder }], { initValue: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MultiDatePickerComponent, { className: "MultiDatePickerComponent", filePath: "lib\\multi-date-picker\\multi-date-picker.component.ts", lineNumber: 57 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcG9scHdhcmUvY3Jvbi1qb2Ivc3JjL2xpYi9tdWx0aS1kYXRlLXBpY2tlci9tdWx0aS1kYXRlLXBpY2tlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9jcm9uLWpvYi9zcmMvbGliL211bHRpLWRhdGUtcGlja2VyL211bHRpLWRhdGUtcGlja2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRXpELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7Ozs7QUFHckUsU0FBUyxnQkFBZ0IsQ0FBQyxJQUFJO0lBQzFCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzdDLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0lBRS9DLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQyxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUV2QyxPQUFPLEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQzdCLENBQUM7QUFFRCxNQUFNLGFBQWEsR0FBZ0IsQ0FBQyxP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WUFBbEIsb0NBQWtCO1lBRWhCLGNBQTJCO1lBQTNCLHlDQUEyQjs7O2lGRDhCdEIsd0JBQXdCO2NBTHBDLFNBQVM7MkJBQ0ksMkJBQTJCO21EQU81QixTQUFTO2tCQUFqQixLQUFLOztrRkFIRyx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVudHlwZWRGb3JtQnVpbGRlciwgVW50eXBlZEZvcm1Db250cm9sLCBVbnR5cGVkRm9ybUdyb3VwLCBWYWxpZGF0aW9uRXJyb3JzLCBWYWxpZGF0b3JGbiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IHNhZmVQYXJzZUludCB9IGZyb20gJ0Bwb2xwd2FyZS9mZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgRGVmYXVsdEZvcm1CYXNlQ29tcG9uZW50IH0gZnJvbSAnQHBvbHB3YXJlL25neC1mb3JtLWNvbW1vbic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuZnVuY3Rpb24gZ2V0Rm9ybWF0dGVkRGF0ZShkYXRlKSB7XG4gICAgdmFyIG1vbnRoID0gKDEgKyBkYXRlLmdldE1vbnRoKCkpLnRvU3RyaW5nKCk7XG4gICAgbW9udGggPSBtb250aC5sZW5ndGggPiAxID8gbW9udGggOiAnMCcgKyBtb250aDtcblxuICAgIHZhciBkYXkgPSBkYXRlLmdldERhdGUoKS50b1N0cmluZygpO1xuICAgIGRheSA9IGRheS5sZW5ndGggPiAxID8gZGF5IDogJzAnICsgZGF5O1xuXG4gICAgcmV0dXJuIG1vbnRoICsgJy8nICsgZGF5O1xufVxuXG5jb25zdCBmb3JtVmFsaWRhdG9yOiBWYWxpZGF0b3JGbiA9IChjb250cm9sOiBVbnR5cGVkRm9ybUdyb3VwKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xuXG4gICAgbGV0IHY6IHsgZGlzcGxheTogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIH0gfCBBcnJheTx7IGRpc3BsYXk6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB9PiA9IChjb250cm9sLmdldCgnY2hpcHMnKSBhcyBVbnR5cGVkRm9ybUNvbnRyb2wpLnZhbHVlO1xuICAgIGlmICh2KSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2KSkge1xuICAgICAgICAgICAgdiA9IFt2XTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzb21lV3JvbmcgPSB2LnNvbWUoYSA9PiB7XG4gICAgICAgICAgICBjb25zdCBiID0gYS52YWx1ZTtcbiAgICAgICAgICAgIGlmICghYikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYyA9IGIuc3BsaXQoJy8nKTtcbiAgICAgICAgICAgIGlmIChjLmxlbmd0aCAhPSAyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBtID0gc2FmZVBhcnNlSW50KGNbMF0pO1xuICAgICAgICAgICAgaWYgKG0gPCAxIHx8IG0gPiAxMikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZCA9IHNhZmVQYXJzZUludChjWzFdKTtcbiAgICAgICAgICAgIGlmIChkIDwgMCB8fCBkID4gMzEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHNvbWVXcm9uZykge1xuICAgICAgICAgICAgcmV0dXJuIHsgY2hpcHM6IHRydWUgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xufTtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BvbHAtYnMtbXVsdGktZGF0ZS1waWNrZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9tdWx0aS1kYXRlLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbXVsdGktZGF0ZS1waWNrZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE11bHRpRGF0ZVBpY2tlckNvbXBvbmVudCBleHRlbmRzIERlZmF1bHRGb3JtQmFzZUNvbXBvbmVudFxuICAgIGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIGluaXRWYWx1ZTogc3RyaW5nW10gPSBbXTtcblxuICAgIHByZWZpeCA9ICdtZHAtJyArIChuZXcgRGF0ZSkuZ2V0VGltZSgpICsgJy0nO1xuXG4gICAgYnNWYWx1ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICBpdGVtczogQXJyYXk8e1xuICAgICAgICBkaXNwbGF5OiBhbnk7XG4gICAgICAgIHZhbHVlOiBhbnk7XG4gICAgfT4gPSBbXTtcblxuICAgIGZvcm06IFVudHlwZWRGb3JtR3JvdXA7XG5cbiAgICBwcml2YXRlIF9zdWJyOiBTdWJzY3JpcHRpb247XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9idWlsZGVyOiBVbnR5cGVkRm9ybUJ1aWxkZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmZvcm0gPSB0aGlzLl9idWlsZGVyLmdyb3VwKHtcbiAgICAgICAgICAgICdjaGlwcyc6IFtdXG4gICAgICAgIH0sIHsgdmFsaWRhdG9yczogW2Zvcm1WYWxpZGF0b3JdIH0pO1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKHRoaXMuaW5pdFZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMuaW5pdFZhbHVlLm1hcChhID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBhLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5zZXRWYWx1ZSh7XG4gICAgICAgICAgICAgICAgICAgIGNoaXBzOiBpdGVtc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHRoaXMuX3N1YnIgPSB0aGlzLmZvcm0udmFsdWVDaGFuZ2VzLnN1YnNjcmliZShhID0+IHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5VmFsaWRhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlWYWx1ZUNoYW5nZXMoYS5jaGlwcyk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuX3N1YnIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cblxuICAgIGNvbmZpcm0oKSB7XG4gICAgICAgIGlmICh0aGlzLmJzVmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5mb3JtLnZhbHVlLmNoaXBzIHx8IFtdO1xuICAgICAgICAgICAgY29uc3QgdiA9IGdldEZvcm1hdHRlZERhdGUodGhpcy5ic1ZhbHVlKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0l0ZW1zID0gWy4uLml0ZW1zLCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogdixcbiAgICAgICAgICAgICAgICB2YWx1ZTogdlxuICAgICAgICAgICAgfV07XG5cbiAgICAgICAgICAgIHRoaXMuZm9ybS5zZXRWYWx1ZSh7XG4gICAgICAgICAgICAgICAgY2hpcHM6IG5ld0l0ZW1zXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiPGZvcm0gKG5nU3VibWl0KT1cImNvbmZpcm0oKVwiPlxuICAgIDxkaXYgY2xhc3M9XCJtYi00XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tbGFiZWxcIlxuICAgICAgICAgICAgICAgZm9yPVwie3twcmVmaXggKyAndGFnLWlucHV0J319XCI+XG4gICAgICAgICAgICB7eydwb2xwQ3JvbkpvYi5pbnB1dERhdGUnIHwgY3JvbkpvYkh5cGVyVHJhbnN9fVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICBpZD1cInt7cHJlZml4ICsgJ3RhZy1pbnB1dCd9fVwiXG4gICAgICAgICAgICAgICAgICAgYnNEYXRlcGlja2VyXG4gICAgICAgICAgICAgICAgICAgW2JzQ29uZmlnXT1cInsgYWRhcHRpdmVQb3NpdGlvbjogdHJ1ZSB9XCJcbiAgICAgICAgICAgICAgICAgICBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCJcbiAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImJzVmFsdWVcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1pbmZvXCI+XG4gICAgICAgICAgICAgICAge3sncG9scENyb25Kb2IuY29uZmlybUJ0bicgfCBjcm9uSm9iSHlwZXJUcmFuc319XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Zvcm0+XG5cblxuXG48Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1cIj5cbiAgICA8dGFnLWlucHV0XG4gICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiJ2NoaXBzJ1wiPlxuICAgIDwvdGFnLWlucHV0PlxuPC9mb3JtPiAgICBcbiJdfQ==