import { Component, Input } from '@angular/core';
import { safeParseInt } from '@polpware/fe-utilities';
import { DefaultFormBaseComponent } from '@polpware/ngx-form-common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "ngx-chips";
import * as i3 from "ngx-bootstrap/datepicker";
import * as i4 from "../cron-job-hyper-trans.pipe";
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
}
MultiDatePickerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: MultiDatePickerComponent, deps: [{ token: i1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component });
MultiDatePickerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: MultiDatePickerComponent, selector: "polp-bs-multi-date-picker", inputs: { initValue: "initValue" }, usesInheritance: true, ngImport: i0, template: "<form (ngSubmit)=\"confirm()\">\n    <div class=\"mb-4\">\n        <label class=\"form-label\"\n               for=\"{{prefix + 'tag-input'}}\">\n            {{'polpCronJob.inputDate' | cronJobHyperTrans}}\n        </label>\n        \n        <div class=\"input-group\">\n            <input type=\"text\"\n                   class=\"form-control\"\n                   id=\"{{prefix + 'tag-input'}}\"\n                   bsDatepicker\n                   [bsConfig]=\"{ adaptivePosition: true }\"\n                   [ngModelOptions]=\"{standalone: true}\"\n                   [(ngModel)]=\"bsValue\">\n            <button type=\"submit\" class=\"btn btn-info\">\n                {{'polpCronJob.confirmBtn' | cronJobHyperTrans}}\n            </button>\n        </div>\n    </div>\n</form>\n\n\n\n<form [formGroup]=\"form\">\n    <tag-input\n        [formControlName]=\"'chips'\">\n    </tag-input>\n</form>    \n", styles: [""], components: [{ type: i2.TagInputComponent, selector: "tag-input", inputs: ["separatorKeys", "separatorKeyCodes", "placeholder", "secondaryPlaceholder", "maxItems", "validators", "asyncValidators", "onlyFromAutocomplete", "errorMessages", "theme", "onTextChangeDebounce", "inputId", "inputClass", "clearOnBlur", "hideForm", "addOnBlur", "addOnPaste", "pasteSplitPattern", "blinkIfDupe", "removable", "editable", "allowDupes", "modelAsStrings", "trimTags", "inputText", "ripple", "tabindex", "disable", "dragZone", "onRemoving", "onAdding", "animationDuration"], outputs: ["onAdd", "onRemove", "onSelect", "onFocus", "onBlur", "onTextChange", "onPaste", "onValidationError", "onTagEdited", "inputTextChange"] }], directives: [{ type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i3.BsDatepickerInputDirective, selector: "input[bsDatepicker]" }, { type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i3.BsDatepickerDirective, selector: "[bsDatepicker]", inputs: ["placement", "triggers", "outsideClick", "container", "outsideEsc", "isDisabled", "minDate", "maxDate", "minMode", "daysDisabled", "datesDisabled", "datesEnabled", "dateCustomClasses", "dateTooltipTexts", "isOpen", "bsValue", "bsConfig"], outputs: ["onShown", "onHidden", "bsValueChange"], exportAs: ["bsDatepicker"] }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "cronJobHyperTrans": i4.CronJobHyperTransPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: MultiDatePickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'polp-bs-multi-date-picker', template: "<form (ngSubmit)=\"confirm()\">\n    <div class=\"mb-4\">\n        <label class=\"form-label\"\n               for=\"{{prefix + 'tag-input'}}\">\n            {{'polpCronJob.inputDate' | cronJobHyperTrans}}\n        </label>\n        \n        <div class=\"input-group\">\n            <input type=\"text\"\n                   class=\"form-control\"\n                   id=\"{{prefix + 'tag-input'}}\"\n                   bsDatepicker\n                   [bsConfig]=\"{ adaptivePosition: true }\"\n                   [ngModelOptions]=\"{standalone: true}\"\n                   [(ngModel)]=\"bsValue\">\n            <button type=\"submit\" class=\"btn btn-info\">\n                {{'polpCronJob.confirmBtn' | cronJobHyperTrans}}\n            </button>\n        </div>\n    </div>\n</form>\n\n\n\n<form [formGroup]=\"form\">\n    <tag-input\n        [formControlName]=\"'chips'\">\n    </tag-input>\n</form>    \n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1.FormBuilder }]; }, propDecorators: { initValue: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcG9scHdhcmUvY3Jvbi1qb2Ivc3JjL2xpYi9tdWx0aS1kYXRlLXBpY2tlci9tdWx0aS1kYXRlLXBpY2tlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9jcm9uLWpvYi9zcmMvbGliL211bHRpLWRhdGUtcGlja2VyL211bHRpLWRhdGUtcGlja2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRXpELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7O0FBR3JFLFNBQVMsZ0JBQWdCLENBQUMsSUFBSTtJQUMxQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM3QyxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztJQUUvQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFFdkMsT0FBTyxLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUM3QixDQUFDO0FBRUQsTUFBTSxhQUFhLEdBQWdCLENBQUMsT0FB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QUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUdELE9BQU87UUFDSCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO1lBQzFDLE1BQU0sQ0FBQyxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN6QyxNQUFNLFFBQVEsR0FBRyxDQUFDLEdBQUcsS0FBSyxFQUFFO29CQUN4QixPQUFPLEVBQUUsQ0FBQztvQkFDVixLQUFLLEVBQUUsQ0FBQztpQkFDWCxDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDZixLQUFLLEVBQUUsUUFBUTthQUNsQixDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7O3NIQXJFUSx3QkFBd0I7MEdBQXhCLHdCQUF3Qiw0SEN4RHJDLGc1QkE2QkE7NEZEMkJhLHdCQUF3QjtrQkFMcEMsU0FBUzsrQkFDSSwyQkFBMkI7a0dBTzVCLFNBQVM7c0JBQWpCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBWYWxpZGF0aW9uRXJyb3JzLCBWYWxpZGF0b3JGbiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IHNhZmVQYXJzZUludCB9IGZyb20gJ0Bwb2xwd2FyZS9mZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgRGVmYXVsdEZvcm1CYXNlQ29tcG9uZW50IH0gZnJvbSAnQHBvbHB3YXJlL25neC1mb3JtLWNvbW1vbic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuZnVuY3Rpb24gZ2V0Rm9ybWF0dGVkRGF0ZShkYXRlKSB7XG4gICAgdmFyIG1vbnRoID0gKDEgKyBkYXRlLmdldE1vbnRoKCkpLnRvU3RyaW5nKCk7XG4gICAgbW9udGggPSBtb250aC5sZW5ndGggPiAxID8gbW9udGggOiAnMCcgKyBtb250aDtcblxuICAgIHZhciBkYXkgPSBkYXRlLmdldERhdGUoKS50b1N0cmluZygpO1xuICAgIGRheSA9IGRheS5sZW5ndGggPiAxID8gZGF5IDogJzAnICsgZGF5O1xuXG4gICAgcmV0dXJuIG1vbnRoICsgJy8nICsgZGF5O1xufVxuXG5jb25zdCBmb3JtVmFsaWRhdG9yOiBWYWxpZGF0b3JGbiA9IChjb250cm9sOiBGb3JtR3JvdXApOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG5cbiAgICBsZXQgdjogeyBkaXNwbGF5OiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfSB8IEFycmF5PHsgZGlzcGxheTogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIH0+ID0gKGNvbnRyb2wuZ2V0KCdjaGlwcycpIGFzIEZvcm1Db250cm9sKS52YWx1ZTtcbiAgICBpZiAodikge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodikpIHtcbiAgICAgICAgICAgIHYgPSBbdl07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc29tZVdyb25nID0gdi5zb21lKGEgPT4ge1xuICAgICAgICAgICAgY29uc3QgYiA9IGEudmFsdWU7XG4gICAgICAgICAgICBpZiAoIWIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGMgPSBiLnNwbGl0KCcvJyk7XG4gICAgICAgICAgICBpZiAoYy5sZW5ndGggIT0gMikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbSA9IHNhZmVQYXJzZUludChjWzBdKTtcbiAgICAgICAgICAgIGlmIChtIDwgMSB8fCBtID4gMTIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGQgPSBzYWZlUGFyc2VJbnQoY1sxXSk7XG4gICAgICAgICAgICBpZiAoZCA8IDAgfHwgZCA+IDMxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChzb21lV3JvbmcpIHtcbiAgICAgICAgICAgIHJldHVybiB7IGNoaXBzOiB0cnVlIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbn07XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb2xwLWJzLW11bHRpLWRhdGUtcGlja2VyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbXVsdGktZGF0ZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL211bHRpLWRhdGUtcGlja2VyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNdWx0aURhdGVQaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBEZWZhdWx0Rm9ybUJhc2VDb21wb25lbnRcbiAgICBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKSBpbml0VmFsdWU6IHN0cmluZ1tdID0gW107XG5cbiAgICBwcmVmaXggPSAnbWRwLScgKyAobmV3IERhdGUpLmdldFRpbWUoKSArICctJztcblxuICAgIGJzVmFsdWUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgaXRlbXM6IEFycmF5PHtcbiAgICAgICAgZGlzcGxheTogYW55O1xuICAgICAgICB2YWx1ZTogYW55O1xuICAgIH0+ID0gW107XG5cbiAgICBmb3JtOiBGb3JtR3JvdXA7XG5cbiAgICBwcml2YXRlIF9zdWJyOiBTdWJzY3JpcHRpb247XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9idWlsZGVyOiBGb3JtQnVpbGRlcikge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuZm9ybSA9IHRoaXMuX2J1aWxkZXIuZ3JvdXAoe1xuICAgICAgICAgICAgJ2NoaXBzJzogW11cbiAgICAgICAgfSwgeyB2YWxpZGF0b3JzOiBbZm9ybVZhbGlkYXRvcl0gfSk7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgICAgICBpZiAodGhpcy5pbml0VmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5pbml0VmFsdWUubWFwKGEgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGEsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBhXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLnNldFZhbHVlKHtcbiAgICAgICAgICAgICAgICAgICAgY2hpcHM6IGl0ZW1zXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdGhpcy5fc3ViciA9IHRoaXMuZm9ybS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKGEgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlWYWxpZGF0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVZhbHVlQ2hhbmdlcyhhLmNoaXBzKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5fc3Vici51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuXG4gICAgY29uZmlybSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYnNWYWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLmZvcm0udmFsdWUuY2hpcHMgfHwgW107XG4gICAgICAgICAgICBjb25zdCB2ID0gZ2V0Rm9ybWF0dGVkRGF0ZSh0aGlzLmJzVmFsdWUpO1xuICAgICAgICAgICAgY29uc3QgbmV3SXRlbXMgPSBbLi4uaXRlbXMsIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiB2LFxuICAgICAgICAgICAgICAgIHZhbHVlOiB2XG4gICAgICAgICAgICB9XTtcblxuICAgICAgICAgICAgdGhpcy5mb3JtLnNldFZhbHVlKHtcbiAgICAgICAgICAgICAgICBjaGlwczogbmV3SXRlbXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCI8Zm9ybSAobmdTdWJtaXQpPVwiY29uZmlybSgpXCI+XG4gICAgPGRpdiBjbGFzcz1cIm1iLTRcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1sYWJlbFwiXG4gICAgICAgICAgICAgICBmb3I9XCJ7e3ByZWZpeCArICd0YWctaW5wdXQnfX1cIj5cbiAgICAgICAgICAgIHt7J3BvbHBDcm9uSm9iLmlucHV0RGF0ZScgfCBjcm9uSm9iSHlwZXJUcmFuc319XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgIGlkPVwie3twcmVmaXggKyAndGFnLWlucHV0J319XCJcbiAgICAgICAgICAgICAgICAgICBic0RhdGVwaWNrZXJcbiAgICAgICAgICAgICAgICAgICBbYnNDb25maWddPVwieyBhZGFwdGl2ZVBvc2l0aW9uOiB0cnVlIH1cIlxuICAgICAgICAgICAgICAgICAgIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIlxuICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiYnNWYWx1ZVwiPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLWluZm9cIj5cbiAgICAgICAgICAgICAgICB7eydwb2xwQ3JvbkpvYi5jb25maXJtQnRuJyB8IGNyb25Kb2JIeXBlclRyYW5zfX1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZm9ybT5cblxuXG5cbjxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuICAgIDx0YWctaW5wdXRcbiAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCInY2hpcHMnXCI+XG4gICAgPC90YWctaW5wdXQ+XG48L2Zvcm0+ICAgIFxuIl19