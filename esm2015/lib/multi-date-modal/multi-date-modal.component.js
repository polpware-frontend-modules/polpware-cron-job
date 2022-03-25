import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { ObservableModalAbstractComponent } from '@polpware/bs-components';
import { AlertDefaultImpl } from '@polpware/ngx-alert';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
let MultiDateModalComponent = class MultiDateModalComponent extends ObservableModalAbstractComponent {
    constructor(bsModalRef, bsModalService) {
        super();
        this.bsModalRef = bsModalRef;
        this.bsModalService = bsModalService;
        this.title = '';
        this.initValue = [];
        this.isValid = false;
        this.alertProvider = new AlertDefaultImpl();
    }
    get alerts() {
        return this.alertProvider.data;
    }
    ngOnInit() {
    }
    close() {
        this.closeModal(null);
    }
    updateValue(evt) {
        if (evt) {
            this.outputValue = evt.map(a => a.value);
        }
    }
    validate(evt) {
        if (evt) {
            this.isValid = evt.valid;
        }
    }
    confirm() {
        if (this.isValid) {
            this.closeModal(this.outputValue);
        }
    }
};
MultiDateModalComponent.ctorParameters = () => [
    { type: BsModalRef },
    { type: BsModalService }
];
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
export { MultiDateModalComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktZGF0ZS1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvY3Jvbi1qb2IvIiwic291cmNlcyI6WyJsaWIvbXVsdGktZGF0ZS1tb2RhbC9tdWx0aS1kYXRlLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFvQixNQUFNLHFCQUFxQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFhakUsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBd0IsU0FBUSxnQ0FBZ0U7SUFXekcsWUFDb0IsVUFBc0IsRUFDbkIsY0FBOEI7UUFDakQsS0FBSyxFQUFFLENBQUM7UUFGUSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ25CLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVY1QyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLGNBQVMsR0FBYSxFQUFFLENBQUM7UUFHbEMsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUV6QixrQkFBYSxHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztJQU12QyxDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ04sT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7SUFFRCxLQUFLO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsV0FBVyxDQUFDLEdBQThDO1FBQ3RELElBQUksR0FBRyxFQUFFO1lBQ0wsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzVDO0lBQ0wsQ0FBQztJQUVELFFBQVEsQ0FBQyxHQUF1QjtRQUM1QixJQUFJLEdBQUcsRUFBRTtZQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztTQUM1QjtJQUNMLENBQUM7SUFFRCxPQUFPO1FBQ0gsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDckM7SUFDTCxDQUFDO0NBR0osQ0FBQTs7WUFuQ21DLFVBQVU7WUFDSCxjQUFjOztBQVY1QztJQUFSLEtBQUssRUFBRTs7c0RBQW9CO0FBQ25CO0lBQVIsS0FBSyxFQUFFOzswREFBMEI7QUFKekIsdUJBQXVCO0lBTG5DLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSwwQkFBMEI7UUFDcEMseWlDQUFnRDs7S0FFbkQsQ0FBQztxQ0Fha0MsVUFBVTtRQUNILGNBQWM7R0FiNUMsdUJBQXVCLENBK0NuQztTQS9DWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGVNb2RhbEFic3RyYWN0Q29tcG9uZW50IH0gZnJvbSAnQHBvbHB3YXJlL2JzLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQWxlcnREZWZhdWx0SW1wbCwgSUhhc0FsZXJ0RmVhdHVyZSB9IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtYWxlcnQnO1xuaW1wb3J0IHsgQnNNb2RhbFJlZiwgQnNNb2RhbFNlcnZpY2UgfSBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsJztcblxuXG5leHBvcnQgaW50ZXJmYWNlIElNdWx0aURhdGVNb2RhbElucHV0IHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGluaXRWYWx1ZTogc3RyaW5nW107XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncG9scC1icy1tdWx0aS1kYXRlLW1vZGFsJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbXVsdGktZGF0ZS1tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbXVsdGktZGF0ZS1tb2RhbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTXVsdGlEYXRlTW9kYWxDb21wb25lbnQgZXh0ZW5kcyBPYnNlcnZhYmxlTW9kYWxBYnN0cmFjdENvbXBvbmVudDxJTXVsdGlEYXRlTW9kYWxJbnB1dCwgc3RyaW5nW10+XG4gICAgaW1wbGVtZW50cyBPbkluaXQsIElIYXNBbGVydEZlYXR1cmUge1xuXG4gICAgQElucHV0KCkgdGl0bGU6IHN0cmluZyA9ICcnO1xuICAgIEBJbnB1dCgpIGluaXRWYWx1ZTogc3RyaW5nW10gPSBbXTtcblxuICAgIG91dHB1dFZhbHVlOiBzdHJpbmdbXTtcbiAgICBpc1ZhbGlkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBhbGVydFByb3ZpZGVyID0gbmV3IEFsZXJ0RGVmYXVsdEltcGwoKTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgYnNNb2RhbFJlZjogQnNNb2RhbFJlZixcbiAgICAgICAgcHJvdGVjdGVkIHJlYWRvbmx5IGJzTW9kYWxTZXJ2aWNlOiBCc01vZGFsU2VydmljZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGdldCBhbGVydHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFsZXJ0UHJvdmlkZXIuZGF0YTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5jbG9zZU1vZGFsKG51bGwpO1xuICAgIH1cblxuICAgIHVwZGF0ZVZhbHVlKGV2dDogQXJyYXk8eyBkaXNwbGF5OiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfT4pIHtcbiAgICAgICAgaWYgKGV2dCkge1xuICAgICAgICAgICAgdGhpcy5vdXRwdXRWYWx1ZSA9IGV2dC5tYXAoYSA9PiBhLnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhbGlkYXRlKGV2dDogeyB2YWxpZDogYm9vbGVhbiB9KSB7XG4gICAgICAgIGlmIChldnQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IGV2dC52YWxpZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbmZpcm0oKSB7XG4gICAgICAgIGlmICh0aGlzLmlzVmFsaWQpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbCh0aGlzLm91dHB1dFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG4iXX0=