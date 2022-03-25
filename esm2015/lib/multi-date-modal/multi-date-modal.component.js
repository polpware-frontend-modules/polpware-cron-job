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
        this.closeModal(this.outputValue);
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
        template: "<div class=\"modal-header\" polpModalDraggable>\n    <h4 class=\"modal-title\">{{title}}</h4>\n</div>\n<div class=\"modal-body\">\n    <polp-bs-multi-date-picker [initValue]=\"initValue\"\n                               (onValidation)=\"validate($event)\"\n                               (onValueChanged)=\"updateValue($event)\">\n    </polp-bs-multi-date-picker>\n    \n    <ng-container *ngFor=\"let a of alerts\">\n        <alert [type]=\"a.type\" [dismissOnTimeout]=\"a.timeout\">\n            {{a.message | cronJobHyperTrans}}\n        </alert>\n    </ng-container>\n    \n</div>\n<div class=\"modal-footer\">\n    <div class=\"d-flex justify-content-end\">\n        <button class=\"btn btn-secondary mr-2\" (click)=\"close()\">\n            {{'polpCronJob.closeBtn' | cronJobHyperTrans}}\n        </button>\n        <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"isValid\"\n                (click)=\"confirm()\">\n            {{'polpCronJob.confirmBtn' | cronJobHyperTrans}}\n        </button>\n    </div>\n</div>\n",
        styles: [""]
    }),
    __metadata("design:paramtypes", [BsModalRef,
        BsModalService])
], MultiDateModalComponent);
export { MultiDateModalComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktZGF0ZS1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvY3Jvbi1qb2IvIiwic291cmNlcyI6WyJsaWIvbXVsdGktZGF0ZS1tb2RhbC9tdWx0aS1kYXRlLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFvQixNQUFNLHFCQUFxQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFhakUsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBd0IsU0FBUSxnQ0FBZ0U7SUFXekcsWUFDb0IsVUFBc0IsRUFDbkIsY0FBOEI7UUFDakQsS0FBSyxFQUFFLENBQUM7UUFGUSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ25CLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVY1QyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLGNBQVMsR0FBYSxFQUFFLENBQUM7UUFLbEMsa0JBQWEsR0FBRyxJQUFJLGdCQUFnQixFQUFFLENBQUM7SUFNdkMsQ0FBQztJQUVELElBQUksTUFBTTtRQUNOLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7SUFDbkMsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDO0lBRUQsS0FBSztRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELFdBQVcsQ0FBQyxHQUE4QztRQUN0RCxJQUFJLEdBQUcsRUFBRTtZQUNMLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM1QztJQUNMLENBQUM7SUFFRCxRQUFRLENBQUMsR0FBdUI7UUFDNUIsSUFBSSxHQUFHLEVBQUU7WUFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7U0FDNUI7SUFDTCxDQUFDO0lBRUQsT0FBTztRQUNILElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Q0FHSixDQUFBOztZQWpDbUMsVUFBVTtZQUNILGNBQWM7O0FBVjVDO0lBQVIsS0FBSyxFQUFFOztzREFBb0I7QUFDbkI7SUFBUixLQUFLLEVBQUU7OzBEQUEwQjtBQUp6Qix1QkFBdUI7SUFMbkMsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLDBCQUEwQjtRQUNwQyxvaENBQWdEOztLQUVuRCxDQUFDO3FDQWFrQyxVQUFVO1FBQ0gsY0FBYztHQWI1Qyx1QkFBdUIsQ0E2Q25DO1NBN0NZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZU1vZGFsQWJzdHJhY3RDb21wb25lbnQgfSBmcm9tICdAcG9scHdhcmUvYnMtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBBbGVydERlZmF1bHRJbXBsLCBJSGFzQWxlcnRGZWF0dXJlIH0gZnJvbSAnQHBvbHB3YXJlL25neC1hbGVydCc7XG5pbXBvcnQgeyBCc01vZGFsUmVmLCBCc01vZGFsU2VydmljZSB9IGZyb20gJ25neC1ib290c3RyYXAvbW9kYWwnO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgSU11bHRpRGF0ZU1vZGFsSW5wdXQge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgaW5pdFZhbHVlOiBzdHJpbmdbXTtcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb2xwLWJzLW11bHRpLWRhdGUtbW9kYWwnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9tdWx0aS1kYXRlLW1vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9tdWx0aS1kYXRlLW1vZGFsLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNdWx0aURhdGVNb2RhbENvbXBvbmVudCBleHRlbmRzIE9ic2VydmFibGVNb2RhbEFic3RyYWN0Q29tcG9uZW50PElNdWx0aURhdGVNb2RhbElucHV0LCBzdHJpbmdbXT5cbiAgICBpbXBsZW1lbnRzIE9uSW5pdCwgSUhhc0FsZXJ0RmVhdHVyZSB7XG5cbiAgICBASW5wdXQoKSB0aXRsZTogc3RyaW5nID0gJyc7XG4gICAgQElucHV0KCkgaW5pdFZhbHVlOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgb3V0cHV0VmFsdWU6IHN0cmluZ1tdO1xuICAgIGlzVmFsaWQ6IGJvb2xlYW47XG5cbiAgICBhbGVydFByb3ZpZGVyID0gbmV3IEFsZXJ0RGVmYXVsdEltcGwoKTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgYnNNb2RhbFJlZjogQnNNb2RhbFJlZixcbiAgICAgICAgcHJvdGVjdGVkIHJlYWRvbmx5IGJzTW9kYWxTZXJ2aWNlOiBCc01vZGFsU2VydmljZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGdldCBhbGVydHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFsZXJ0UHJvdmlkZXIuZGF0YTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5jbG9zZU1vZGFsKG51bGwpO1xuICAgIH1cblxuICAgIHVwZGF0ZVZhbHVlKGV2dDogQXJyYXk8eyBkaXNwbGF5OiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfT4pIHtcbiAgICAgICAgaWYgKGV2dCkge1xuICAgICAgICAgICAgdGhpcy5vdXRwdXRWYWx1ZSA9IGV2dC5tYXAoYSA9PiBhLnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhbGlkYXRlKGV2dDogeyB2YWxpZDogYm9vbGVhbiB9KSB7XG4gICAgICAgIGlmIChldnQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IGV2dC52YWxpZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbmZpcm0oKSB7XG4gICAgICAgIHRoaXMuY2xvc2VNb2RhbCh0aGlzLm91dHB1dFZhbHVlKTtcbiAgICB9XG5cblxufVxuIl19