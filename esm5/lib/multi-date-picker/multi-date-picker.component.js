import { __decorate, __extends, __metadata, __read, __spread } from "tslib";
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
var formValidator = function (control) {
    var v = control.get('chips').value;
    if (v) {
        if (!Array.isArray(v)) {
            v = [v];
        }
        var someWrong = v.some(function (a) {
            var b = a.value;
            if (!b) {
                return true;
            }
            var c = b.split('/');
            if (c.length != 2) {
                return true;
            }
            var m = safeParseInt(c[0]);
            if (m < 1 || m > 12) {
                return true;
            }
            var d = safeParseInt(c[1]);
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
var ɵ0 = formValidator;
var MultiDatePickerComponent = /** @class */ (function (_super) {
    __extends(MultiDatePickerComponent, _super);
    function MultiDatePickerComponent(_builder) {
        var _this = _super.call(this) || this;
        _this._builder = _builder;
        _this.initValue = [];
        _this.prefix = 'mdp-' + (new Date).getTime() + '-';
        _this.bsValue = new Date();
        _this.items = [];
        _this.form = _this._builder.group({
            'chips': []
        }, { validators: [formValidator] });
        return _this;
    }
    MultiDatePickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.initValue) {
            var items_1 = this.initValue.map(function (a) {
                return {
                    display: a,
                    value: a
                };
            });
            setTimeout(function () {
                _this.form.setValue({
                    chips: items_1
                });
            });
        }
        this._subr = this.form.valueChanges.subscribe(function (a) {
            _this.notifyValidation();
            _this.notifyValueChanges(a.chips);
        });
    };
    MultiDatePickerComponent.prototype.ngOnDestroy = function () {
        this._subr.unsubscribe();
    };
    MultiDatePickerComponent.prototype.confirm = function () {
        if (this.bsValue) {
            var items = this.form.value.chips || [];
            var v = getFormattedDate(this.bsValue);
            var newItems = __spread(items, [{
                    display: v,
                    value: v
                }]);
            this.form.setValue({
                chips: newItems
            });
        }
    };
    MultiDatePickerComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
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
    return MultiDatePickerComponent;
}(DefaultFormBaseComponent));
export { MultiDatePickerComponent };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2Nyb24tam9iLyIsInNvdXJjZXMiOlsibGliL211bHRpLWRhdGUtcGlja2VyL211bHRpLWRhdGUtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUdyRSxTQUFTLGdCQUFnQixDQUFDLElBQUk7SUFDMUIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDN0MsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7SUFFL0MsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BDLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBRXZDLE9BQU8sS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDN0IsQ0FBQztBQUVELElBQU0sYUFBYSxHQUFnQixVQUFDLE9BQWtCO0lBRWxELElBQUksQ0FBQyxHQUFvRixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8s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QUksQ0FBQyxPQUFPLEVBQUU7WUFDZCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO1lBQzFDLElBQU0sQ0FBQyxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN6QyxJQUFNLFFBQVEsWUFBTyxLQUFLLEdBQUU7b0JBQ3hCLE9BQU8sRUFBRSxDQUFDO29CQUNWLEtBQUssRUFBRSxDQUFDO2lCQUNYLEVBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNmLEtBQUssRUFBRSxRQUFRO2FBQ2xCLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQzs7Z0JBckQ2QixXQUFXOztJQWZoQztRQUFSLEtBQUssRUFBRTs7K0RBQTBCO0lBSHpCLHdCQUF3QjtRQUxwQyxTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsMkJBQTJCO1lBQ3JDLDJnQ0FBaUQ7O1NBRXBELENBQUM7eUNBbUJnQyxXQUFXO09BbEJoQyx3QkFBd0IsQ0F5RXBDO0lBQUQsK0JBQUM7Q0FBQSxBQXpFRCxDQUE4Qyx3QkFBd0IsR0F5RXJFO1NBekVZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIFZhbGlkYXRpb25FcnJvcnMsIFZhbGlkYXRvckZuIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgc2FmZVBhcnNlSW50IH0gZnJvbSAnQHBvbHB3YXJlL2ZlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBEZWZhdWx0Rm9ybUJhc2VDb21wb25lbnQgfSBmcm9tICdAcG9scHdhcmUvbmd4LWZvcm0tY29tbW9uJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5mdW5jdGlvbiBnZXRGb3JtYXR0ZWREYXRlKGRhdGUpIHtcbiAgICB2YXIgbW9udGggPSAoMSArIGRhdGUuZ2V0TW9udGgoKSkudG9TdHJpbmcoKTtcbiAgICBtb250aCA9IG1vbnRoLmxlbmd0aCA+IDEgPyBtb250aCA6ICcwJyArIG1vbnRoO1xuXG4gICAgdmFyIGRheSA9IGRhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCk7XG4gICAgZGF5ID0gZGF5Lmxlbmd0aCA+IDEgPyBkYXkgOiAnMCcgKyBkYXk7XG5cbiAgICByZXR1cm4gbW9udGggKyAnLycgKyBkYXk7XG59XG5cbmNvbnN0IGZvcm1WYWxpZGF0b3I6IFZhbGlkYXRvckZuID0gKGNvbnRyb2w6IEZvcm1Hcm91cCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcblxuICAgIGxldCB2OiB7IGRpc3BsYXk6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB9IHwgQXJyYXk8eyBkaXNwbGF5OiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfT4gPSAoY29udHJvbC5nZXQoJ2NoaXBzJykgYXMgRm9ybUNvbnRyb2wpLnZhbHVlO1xuICAgIGlmICh2KSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2KSkge1xuICAgICAgICAgICAgdiA9IFt2XTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzb21lV3JvbmcgPSB2LnNvbWUoYSA9PiB7XG4gICAgICAgICAgICBjb25zdCBiID0gYS52YWx1ZTtcbiAgICAgICAgICAgIGlmICghYikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYyA9IGIuc3BsaXQoJy8nKTtcbiAgICAgICAgICAgIGlmIChjLmxlbmd0aCAhPSAyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBtID0gc2FmZVBhcnNlSW50KGNbMF0pO1xuICAgICAgICAgICAgaWYgKG0gPCAxIHx8IG0gPiAxMikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZCA9IHNhZmVQYXJzZUludChjWzFdKTtcbiAgICAgICAgICAgIGlmIChkIDwgMCB8fCBkID4gMzEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHNvbWVXcm9uZykge1xuICAgICAgICAgICAgcmV0dXJuIHsgY2hpcHM6IHRydWUgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xufTtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BvbHAtYnMtbXVsdGktZGF0ZS1waWNrZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9tdWx0aS1kYXRlLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbXVsdGktZGF0ZS1waWNrZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE11bHRpRGF0ZVBpY2tlckNvbXBvbmVudCBleHRlbmRzIERlZmF1bHRGb3JtQmFzZUNvbXBvbmVudFxuICAgIGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIGluaXRWYWx1ZTogc3RyaW5nW10gPSBbXTtcblxuICAgIHByZWZpeCA9ICdtZHAtJyArIChuZXcgRGF0ZSkuZ2V0VGltZSgpICsgJy0nO1xuXG4gICAgYnNWYWx1ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICBpdGVtczogQXJyYXk8e1xuICAgICAgICBkaXNwbGF5OiBhbnk7XG4gICAgICAgIHZhbHVlOiBhbnk7XG4gICAgfT4gPSBbXTtcblxuICAgIGZvcm06IEZvcm1Hcm91cDtcblxuICAgIHByaXZhdGUgX3N1YnI6IFN1YnNjcmlwdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2J1aWxkZXI6IEZvcm1CdWlsZGVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5mb3JtID0gdGhpcy5fYnVpbGRlci5ncm91cCh7XG4gICAgICAgICAgICAnY2hpcHMnOiBbXVxuICAgICAgICB9LCB7IHZhbGlkYXRvcnM6IFtmb3JtVmFsaWRhdG9yXSB9KTtcblxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuXG5cblxuICAgICAgICBpZiAodGhpcy5pbml0VmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5pbml0VmFsdWUubWFwKGEgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGEsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBhXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLnNldFZhbHVlKHtcbiAgICAgICAgICAgICAgICAgICAgY2hpcHM6IGl0ZW1zXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdGhpcy5fc3ViciA9IHRoaXMuZm9ybS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKGEgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlWYWxpZGF0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVZhbHVlQ2hhbmdlcyhhLmNoaXBzKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5fc3Vici51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuXG4gICAgY29uZmlybSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYnNWYWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLmZvcm0udmFsdWUuY2hpcHMgfHwgW107XG4gICAgICAgICAgICBjb25zdCB2ID0gZ2V0Rm9ybWF0dGVkRGF0ZSh0aGlzLmJzVmFsdWUpO1xuICAgICAgICAgICAgY29uc3QgbmV3SXRlbXMgPSBbLi4uaXRlbXMsIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiB2LFxuICAgICAgICAgICAgICAgIHZhbHVlOiB2XG4gICAgICAgICAgICB9XTtcblxuICAgICAgICAgICAgdGhpcy5mb3JtLnNldFZhbHVlKHtcbiAgICAgICAgICAgICAgICBjaGlwczogbmV3SXRlbXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iXX0=