import { __decorate, __extends, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { ObservableModalAbstractComponent } from '@polpware/bs-components';
import { AlertDefaultImpl } from '@polpware/ngx-alert';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
var MultiDateModalComponent = /** @class */ (function (_super) {
    __extends(MultiDateModalComponent, _super);
    function MultiDateModalComponent(bsModalRef, bsModalService) {
        var _this = _super.call(this) || this;
        _this.bsModalRef = bsModalRef;
        _this.bsModalService = bsModalService;
        _this.title = '';
        _this.initValue = [];
        _this.isValid = false;
        _this.alertProvider = new AlertDefaultImpl();
        return _this;
    }
    Object.defineProperty(MultiDateModalComponent.prototype, "alerts", {
        get: function () {
            return this.alertProvider.data;
        },
        enumerable: true,
        configurable: true
    });
    MultiDateModalComponent.prototype.ngOnInit = function () {
    };
    MultiDateModalComponent.prototype.close = function () {
        this.closeModal(null);
    };
    MultiDateModalComponent.prototype.updateValue = function (evt) {
        if (evt) {
            this.outputValue = evt.map(function (a) { return a.value; });
        }
    };
    MultiDateModalComponent.prototype.validate = function (evt) {
        if (evt) {
            this.isValid = evt.valid;
        }
    };
    MultiDateModalComponent.prototype.confirm = function () {
        if (this.isValid) {
            this.closeModal(this.outputValue);
        }
    };
    MultiDateModalComponent.ctorParameters = function () { return [
        { type: BsModalRef },
        { type: BsModalService }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], MultiDateModalComponent.prototype, "title", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], MultiDateModalComponent.prototype, "initValue", void 0);
    MultiDateModalComponent = __decorate([
        Component({
            selector: 'polp-bs-multi-date-modal',
            template: "<div class=\"modal-header\" polpModalDraggable>\n    <h4 class=\"modal-title\">{{title | cronJobHyperTrans}}</h4>\n</div>\n<div class=\"modal-body\">\n    <polp-bs-multi-date-picker [initValue]=\"initValue\"\n                               (onValidation)=\"validate($event)\"\n                               (onValueChanged)=\"updateValue($event)\">\n    </polp-bs-multi-date-picker>\n    \n    <ng-container *ngFor=\"let a of alerts\">\n        <alert [type]=\"a.type\" [dismissOnTimeout]=\"a.timeout\">\n            {{a.message | cronJobHyperTrans}}\n        </alert>\n    </ng-container>\n    \n</div>\n<div class=\"modal-footer\">\n    <div class=\"d-flex justify-content-end\">\n        <button class=\"btn btn-secondary mr-2\" (click)=\"close()\">\n            {{'polpCronJob.cancelBtn' | cronJobHyperTrans}}\n        </button>\n        <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"isValid\"\n                (click)=\"confirm()\">\n            {{'polpCronJob.confirmBtn' | cronJobHyperTrans}}\n        </button>\n    </div>\n</div>\n",
            styles: [""]
        }),
        __metadata("design:paramtypes", [BsModalRef,
            BsModalService])
    ], MultiDateModalComponent);
    return MultiDateModalComponent;
}(ObservableModalAbstractComponent));
export { MultiDateModalComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktZGF0ZS1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvY3Jvbi1qb2IvIiwic291cmNlcyI6WyJsaWIvbXVsdGktZGF0ZS1tb2RhbC9tdWx0aS1kYXRlLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFvQixNQUFNLHFCQUFxQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFhakU7SUFBNkMsMkNBQWdFO0lBV3pHLGlDQUNvQixVQUFzQixFQUNuQixjQUE4QjtRQUZyRCxZQUdJLGlCQUFPLFNBQ1Y7UUFIbUIsZ0JBQVUsR0FBVixVQUFVLENBQVk7UUFDbkIsb0JBQWMsR0FBZCxjQUFjLENBQWdCO1FBVjVDLFdBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsZUFBUyxHQUFhLEVBQUUsQ0FBQztRQUdsQyxhQUFPLEdBQVksS0FBSyxDQUFDO1FBRXpCLG1CQUFhLEdBQUcsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDOztJQU12QyxDQUFDO0lBRUQsc0JBQUksMkNBQU07YUFBVjtZQUNJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFFRCwwQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELHVDQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCw2Q0FBVyxHQUFYLFVBQVksR0FBOEM7UUFDdEQsSUFBSSxHQUFHLEVBQUU7WUFDTCxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsS0FBSyxFQUFQLENBQU8sQ0FBQyxDQUFDO1NBQzVDO0lBQ0wsQ0FBQztJQUVELDBDQUFRLEdBQVIsVUFBUyxHQUF1QjtRQUM1QixJQUFJLEdBQUcsRUFBRTtZQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztTQUM1QjtJQUNMLENBQUM7SUFFRCx5Q0FBTyxHQUFQO1FBQ0ksSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDckM7SUFDTCxDQUFDOztnQkFoQytCLFVBQVU7Z0JBQ0gsY0FBYzs7SUFWNUM7UUFBUixLQUFLLEVBQUU7OzBEQUFvQjtJQUNuQjtRQUFSLEtBQUssRUFBRTs7OERBQTBCO0lBSnpCLHVCQUF1QjtRQUxuQyxTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsMEJBQTBCO1lBQ3BDLHlpQ0FBZ0Q7O1NBRW5ELENBQUM7eUNBYWtDLFVBQVU7WUFDSCxjQUFjO09BYjVDLHVCQUF1QixDQStDbkM7SUFBRCw4QkFBQztDQUFBLEFBL0NELENBQTZDLGdDQUFnQyxHQStDNUU7U0EvQ1ksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlTW9kYWxBYnN0cmFjdENvbXBvbmVudCB9IGZyb20gJ0Bwb2xwd2FyZS9icy1jb21wb25lbnRzJztcbmltcG9ydCB7IEFsZXJ0RGVmYXVsdEltcGwsIElIYXNBbGVydEZlYXR1cmUgfSBmcm9tICdAcG9scHdhcmUvbmd4LWFsZXJ0JztcbmltcG9ydCB7IEJzTW9kYWxSZWYsIEJzTW9kYWxTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9tb2RhbCc7XG5cblxuZXhwb3J0IGludGVyZmFjZSBJTXVsdGlEYXRlTW9kYWxJbnB1dCB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBpbml0VmFsdWU6IHN0cmluZ1tdO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BvbHAtYnMtbXVsdGktZGF0ZS1tb2RhbCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL211bHRpLWRhdGUtbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL211bHRpLWRhdGUtbW9kYWwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE11bHRpRGF0ZU1vZGFsQ29tcG9uZW50IGV4dGVuZHMgT2JzZXJ2YWJsZU1vZGFsQWJzdHJhY3RDb21wb25lbnQ8SU11bHRpRGF0ZU1vZGFsSW5wdXQsIHN0cmluZ1tdPlxuICAgIGltcGxlbWVudHMgT25Jbml0LCBJSGFzQWxlcnRGZWF0dXJlIHtcblxuICAgIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgPSAnJztcbiAgICBASW5wdXQoKSBpbml0VmFsdWU6IHN0cmluZ1tdID0gW107XG5cbiAgICBvdXRwdXRWYWx1ZTogc3RyaW5nW107XG4gICAgaXNWYWxpZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgYWxlcnRQcm92aWRlciA9IG5ldyBBbGVydERlZmF1bHRJbXBsKCk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IGJzTW9kYWxSZWY6IEJzTW9kYWxSZWYsXG4gICAgICAgIHByb3RlY3RlZCByZWFkb25seSBic01vZGFsU2VydmljZTogQnNNb2RhbFNlcnZpY2UpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBnZXQgYWxlcnRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hbGVydFByb3ZpZGVyLmRhdGE7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuY2xvc2VNb2RhbChudWxsKTtcbiAgICB9XG5cbiAgICB1cGRhdGVWYWx1ZShldnQ6IEFycmF5PHsgZGlzcGxheTogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIH0+KSB7XG4gICAgICAgIGlmIChldnQpIHtcbiAgICAgICAgICAgIHRoaXMub3V0cHV0VmFsdWUgPSBldnQubWFwKGEgPT4gYS52YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YWxpZGF0ZShldnQ6IHsgdmFsaWQ6IGJvb2xlYW4gfSkge1xuICAgICAgICBpZiAoZXZ0KSB7XG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSBldnQudmFsaWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25maXJtKCkge1xuICAgICAgICBpZiAodGhpcy5pc1ZhbGlkKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwodGhpcy5vdXRwdXRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuIl19