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
        this.closeModal(this.outputValue);
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
            template: "<div class=\"modal-header\" polpModalDraggable>\n    <h4 class=\"modal-title\">{{title}}</h4>\n</div>\n<div class=\"modal-body\">\n    <polp-bs-multi-date-picker [initValue]=\"initValue\"\n                               (onValidation)=\"validate($event)\"\n                               (onValueChanged)=\"updateValue($event)\">\n    </polp-bs-multi-date-picker>\n    \n    <ng-container *ngFor=\"let a of alerts\">\n        <alert [type]=\"a.type\" [dismissOnTimeout]=\"a.timeout\">\n            {{a.message | cronJobHyperTrans}}\n        </alert>\n    </ng-container>\n    \n</div>\n<div class=\"modal-footer\">\n    <div class=\"d-flex justify-content-end\">\n        <button class=\"btn btn-secondary mr-2\" (click)=\"close()\">\n            {{'polpCronJob.closeBtn' | cronJobHyperTrans}}\n        </button>\n        <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"isValid\"\n                (click)=\"confirm()\">\n            {{'polpCronJob.confirmBtn' | cronJobHyperTrans}}\n        </button>\n    </div>\n</div>\n",
            styles: [""]
        }),
        __metadata("design:paramtypes", [BsModalRef,
            BsModalService])
    ], MultiDateModalComponent);
    return MultiDateModalComponent;
}(ObservableModalAbstractComponent));
export { MultiDateModalComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktZGF0ZS1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvY3Jvbi1qb2IvIiwic291cmNlcyI6WyJsaWIvbXVsdGktZGF0ZS1tb2RhbC9tdWx0aS1kYXRlLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFvQixNQUFNLHFCQUFxQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFhakU7SUFBNkMsMkNBQWdFO0lBV3pHLGlDQUNvQixVQUFzQixFQUNuQixjQUE4QjtRQUZyRCxZQUdJLGlCQUFPLFNBQ1Y7UUFIbUIsZ0JBQVUsR0FBVixVQUFVLENBQVk7UUFDbkIsb0JBQWMsR0FBZCxjQUFjLENBQWdCO1FBVjVDLFdBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsZUFBUyxHQUFhLEVBQUUsQ0FBQztRQUtsQyxtQkFBYSxHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQzs7SUFNdkMsQ0FBQztJQUVELHNCQUFJLDJDQUFNO2FBQVY7WUFDSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1FBQ25DLENBQUM7OztPQUFBO0lBRUQsMENBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCx1Q0FBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsNkNBQVcsR0FBWCxVQUFZLEdBQThDO1FBQ3RELElBQUksR0FBRyxFQUFFO1lBQ0wsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEtBQUssRUFBUCxDQUFPLENBQUMsQ0FBQztTQUM1QztJQUNMLENBQUM7SUFFRCwwQ0FBUSxHQUFSLFVBQVMsR0FBdUI7UUFDNUIsSUFBSSxHQUFHLEVBQUU7WUFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7U0FDNUI7SUFDTCxDQUFDO0lBRUQseUNBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7O2dCQTlCK0IsVUFBVTtnQkFDSCxjQUFjOztJQVY1QztRQUFSLEtBQUssRUFBRTs7MERBQW9CO0lBQ25CO1FBQVIsS0FBSyxFQUFFOzs4REFBMEI7SUFKekIsdUJBQXVCO1FBTG5DLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSwwQkFBMEI7WUFDcEMsb2hDQUFnRDs7U0FFbkQsQ0FBQzt5Q0Fha0MsVUFBVTtZQUNILGNBQWM7T0FiNUMsdUJBQXVCLENBNkNuQztJQUFELDhCQUFDO0NBQUEsQUE3Q0QsQ0FBNkMsZ0NBQWdDLEdBNkM1RTtTQTdDWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGVNb2RhbEFic3RyYWN0Q29tcG9uZW50IH0gZnJvbSAnQHBvbHB3YXJlL2JzLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQWxlcnREZWZhdWx0SW1wbCwgSUhhc0FsZXJ0RmVhdHVyZSB9IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtYWxlcnQnO1xuaW1wb3J0IHsgQnNNb2RhbFJlZiwgQnNNb2RhbFNlcnZpY2UgfSBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsJztcblxuXG5leHBvcnQgaW50ZXJmYWNlIElNdWx0aURhdGVNb2RhbElucHV0IHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGluaXRWYWx1ZTogc3RyaW5nW107XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncG9scC1icy1tdWx0aS1kYXRlLW1vZGFsJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbXVsdGktZGF0ZS1tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbXVsdGktZGF0ZS1tb2RhbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTXVsdGlEYXRlTW9kYWxDb21wb25lbnQgZXh0ZW5kcyBPYnNlcnZhYmxlTW9kYWxBYnN0cmFjdENvbXBvbmVudDxJTXVsdGlEYXRlTW9kYWxJbnB1dCwgc3RyaW5nW10+XG4gICAgaW1wbGVtZW50cyBPbkluaXQsIElIYXNBbGVydEZlYXR1cmUge1xuXG4gICAgQElucHV0KCkgdGl0bGU6IHN0cmluZyA9ICcnO1xuICAgIEBJbnB1dCgpIGluaXRWYWx1ZTogc3RyaW5nW10gPSBbXTtcblxuICAgIG91dHB1dFZhbHVlOiBzdHJpbmdbXTtcbiAgICBpc1ZhbGlkOiBib29sZWFuO1xuXG4gICAgYWxlcnRQcm92aWRlciA9IG5ldyBBbGVydERlZmF1bHRJbXBsKCk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IGJzTW9kYWxSZWY6IEJzTW9kYWxSZWYsXG4gICAgICAgIHByb3RlY3RlZCByZWFkb25seSBic01vZGFsU2VydmljZTogQnNNb2RhbFNlcnZpY2UpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBnZXQgYWxlcnRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hbGVydFByb3ZpZGVyLmRhdGE7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuY2xvc2VNb2RhbChudWxsKTtcbiAgICB9XG5cbiAgICB1cGRhdGVWYWx1ZShldnQ6IEFycmF5PHsgZGlzcGxheTogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIH0+KSB7XG4gICAgICAgIGlmIChldnQpIHtcbiAgICAgICAgICAgIHRoaXMub3V0cHV0VmFsdWUgPSBldnQubWFwKGEgPT4gYS52YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YWxpZGF0ZShldnQ6IHsgdmFsaWQ6IGJvb2xlYW4gfSkge1xuICAgICAgICBpZiAoZXZ0KSB7XG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSBldnQudmFsaWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25maXJtKCkge1xuICAgICAgICB0aGlzLmNsb3NlTW9kYWwodGhpcy5vdXRwdXRWYWx1ZSk7XG4gICAgfVxuXG5cbn1cbiJdfQ==