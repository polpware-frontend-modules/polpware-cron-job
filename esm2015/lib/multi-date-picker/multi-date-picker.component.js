import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { safeParseInt } from '@polpware/fe-utilities';
import { DefaultFormBaseComponent } from '@polpware/ngx-form-common';
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
const ɵ0 = formValidator;
let MultiDatePickerComponent = class MultiDatePickerComponent extends DefaultFormBaseComponent {
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
};
MultiDatePickerComponent.ctorParameters = () => [
    { type: FormBuilder }
];
__decorate([
    Input(),
    __metadata("design:type", Array)
], MultiDatePickerComponent.prototype, "initValue", void 0);
MultiDatePickerComponent = __decorate([
    Component({
        selector: 'polp-bs-multi-date-picker',
        template: "<form (ngSubmit)=\"confirm()\">\n    <div class=\"form-group row\">\n        <label class=\"col-12 col-form-label\"\n               for=\"{{prefix + 'tag-input'}}\">\n            {{'polpCronJob.startDate' | cronJobHyperTrans}}\n        </label>\n        \n        <div class=\"input-group\">\n            <input type=\"text\"\n                   class=\"form-control\"\n                   id=\"{{prefix + 'tag-input'}}\"\n                   bsDatepicker\n                   [bsConfig]=\"{ adaptivePosition: true }\"\n                   [bsValue]=\"bsValue\">\n            <div class=\"input-group-append\">            \n                <button type=\"submit\" class=\"btn btn-primary\">\n                    {{'polpCronJob.submitBtn' | cronJobHyperTrans}}\n                </button>\n            </div>\n        </div>\n    </div>\n</form>\n\n\n\n<form [formGroup]=\"form\">\n    <div class=\"form-group row\">\n        <tag-input\n            [formControlName]=\"'chips'\">\n        </tag-input>\n    </div>\n</form>    \n",
        styles: [""]
    }),
    __metadata("design:paramtypes", [FormBuilder])
], MultiDatePickerComponent);
export { MultiDatePickerComponent };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2Nyb24tam9iLyIsInNvdXJjZXMiOlsibGliL211bHRpLWRhdGUtcGlja2VyL211bHRpLWRhdGUtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUdyRSxTQUFTLGdCQUFnQixDQUFDLElBQUk7SUFDMUIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDN0MsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7SUFFL0MsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BDLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBRXZDLE9BQU8sS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDN0IsQ0FBQztBQUVELE1BQU0sYUFBYSxHQUFnQixDQUFDLE9BQWtCLEVBQTJCLEVBQUU7SUFFL0UsSUFBSSxDQUFDLEdBQW9GLE9BQU8sQ0FBQyxHQUFH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N0IsQ0FBQztJQUdELE9BQU87UUFDSCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO1lBQzFDLE1BQU0sQ0FBQyxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN6QyxNQUFNLFFBQVEsR0FBRyxDQUFDLEdBQUcsS0FBSyxFQUFFO29CQUN4QixPQUFPLEVBQUUsQ0FBQztvQkFDVixLQUFLLEVBQUUsQ0FBQztpQkFDWCxDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDZixLQUFLLEVBQUUsUUFBUTthQUNsQixDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7Q0FFSixDQUFBOztZQXZEaUMsV0FBVzs7QUFmaEM7SUFBUixLQUFLLEVBQUU7OzJEQUEwQjtBQUh6Qix3QkFBd0I7SUFMcEMsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLDJCQUEyQjtRQUNyQywyZ0NBQWlEOztLQUVwRCxDQUFDO3FDQW1CZ0MsV0FBVztHQWxCaEMsd0JBQXdCLENBeUVwQztTQXpFWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBWYWxpZGF0aW9uRXJyb3JzLCBWYWxpZGF0b3JGbiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IHNhZmVQYXJzZUludCB9IGZyb20gJ0Bwb2xwd2FyZS9mZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgRGVmYXVsdEZvcm1CYXNlQ29tcG9uZW50IH0gZnJvbSAnQHBvbHB3YXJlL25neC1mb3JtLWNvbW1vbic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuZnVuY3Rpb24gZ2V0Rm9ybWF0dGVkRGF0ZShkYXRlKSB7XG4gICAgdmFyIG1vbnRoID0gKDEgKyBkYXRlLmdldE1vbnRoKCkpLnRvU3RyaW5nKCk7XG4gICAgbW9udGggPSBtb250aC5sZW5ndGggPiAxID8gbW9udGggOiAnMCcgKyBtb250aDtcblxuICAgIHZhciBkYXkgPSBkYXRlLmdldERhdGUoKS50b1N0cmluZygpO1xuICAgIGRheSA9IGRheS5sZW5ndGggPiAxID8gZGF5IDogJzAnICsgZGF5O1xuXG4gICAgcmV0dXJuIG1vbnRoICsgJy8nICsgZGF5O1xufVxuXG5jb25zdCBmb3JtVmFsaWRhdG9yOiBWYWxpZGF0b3JGbiA9IChjb250cm9sOiBGb3JtR3JvdXApOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG5cbiAgICBsZXQgdjogeyBkaXNwbGF5OiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfSB8IEFycmF5PHsgZGlzcGxheTogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIH0+ID0gKGNvbnRyb2wuZ2V0KCdjaGlwcycpIGFzIEZvcm1Db250cm9sKS52YWx1ZTtcbiAgICBpZiAodikge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodikpIHtcbiAgICAgICAgICAgIHYgPSBbdl07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc29tZVdyb25nID0gdi5zb21lKGEgPT4ge1xuICAgICAgICAgICAgY29uc3QgYiA9IGEudmFsdWU7XG4gICAgICAgICAgICBpZiAoIWIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGMgPSBiLnNwbGl0KCcvJyk7XG4gICAgICAgICAgICBpZiAoYy5sZW5ndGggIT0gMikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbSA9IHNhZmVQYXJzZUludChjWzBdKTtcbiAgICAgICAgICAgIGlmIChtIDwgMSB8fCBtID4gMTIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGQgPSBzYWZlUGFyc2VJbnQoY1sxXSk7XG4gICAgICAgICAgICBpZiAoZCA8IDAgfHwgZCA+IDMxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChzb21lV3JvbmcpIHtcbiAgICAgICAgICAgIHJldHVybiB7IGNoaXBzOiB0cnVlIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbn07XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb2xwLWJzLW11bHRpLWRhdGUtcGlja2VyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbXVsdGktZGF0ZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL211bHRpLWRhdGUtcGlja2VyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNdWx0aURhdGVQaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBEZWZhdWx0Rm9ybUJhc2VDb21wb25lbnRcbiAgICBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKSBpbml0VmFsdWU6IHN0cmluZ1tdID0gW107XG5cbiAgICBwcmVmaXggPSAnbWRwLScgKyAobmV3IERhdGUpLmdldFRpbWUoKSArICctJztcblxuICAgIGJzVmFsdWUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgaXRlbXM6IEFycmF5PHtcbiAgICAgICAgZGlzcGxheTogYW55O1xuICAgICAgICB2YWx1ZTogYW55O1xuICAgIH0+ID0gW107XG5cbiAgICBmb3JtOiBGb3JtR3JvdXA7XG5cbiAgICBwcml2YXRlIF9zdWJyOiBTdWJzY3JpcHRpb247XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9idWlsZGVyOiBGb3JtQnVpbGRlcikge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuZm9ybSA9IHRoaXMuX2J1aWxkZXIuZ3JvdXAoe1xuICAgICAgICAgICAgJ2NoaXBzJzogW11cbiAgICAgICAgfSwgeyB2YWxpZGF0b3JzOiBbZm9ybVZhbGlkYXRvcl0gfSk7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuXG5cbiAgICAgICAgaWYgKHRoaXMuaW5pdFZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMuaW5pdFZhbHVlLm1hcChhID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBhLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5zZXRWYWx1ZSh7XG4gICAgICAgICAgICAgICAgICAgIGNoaXBzOiBpdGVtc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHRoaXMuX3N1YnIgPSB0aGlzLmZvcm0udmFsdWVDaGFuZ2VzLnN1YnNjcmliZShhID0+IHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5VmFsaWRhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlWYWx1ZUNoYW5nZXMoYS5jaGlwcyk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuX3N1YnIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cblxuICAgIGNvbmZpcm0oKSB7XG4gICAgICAgIGlmICh0aGlzLmJzVmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5mb3JtLnZhbHVlLmNoaXBzIHx8IFtdO1xuICAgICAgICAgICAgY29uc3QgdiA9IGdldEZvcm1hdHRlZERhdGUodGhpcy5ic1ZhbHVlKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0l0ZW1zID0gWy4uLml0ZW1zLCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogdixcbiAgICAgICAgICAgICAgICB2YWx1ZTogdlxuICAgICAgICAgICAgfV07XG5cbiAgICAgICAgICAgIHRoaXMuZm9ybS5zZXRWYWx1ZSh7XG4gICAgICAgICAgICAgICAgY2hpcHM6IG5ld0l0ZW1zXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIl19