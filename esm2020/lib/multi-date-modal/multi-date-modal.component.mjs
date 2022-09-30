import { Component, Input } from '@angular/core';
import { ObservableModalAbstractComponent } from '@polpware/bs-components';
import { AlertDefaultImpl } from '@polpware/ngx-alert';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/modal";
import * as i2 from "../multi-date-picker/multi-date-picker.component";
import * as i3 from "ngx-bootstrap/alert";
import * as i4 from "@polpware/modal-directives";
import * as i5 from "@angular/common";
import * as i6 from "../cron-job-hyper-trans.pipe";
export class MultiDateModalComponent extends ObservableModalAbstractComponent {
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
}
MultiDateModalComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: MultiDateModalComponent, deps: [{ token: i1.BsModalRef }, { token: i1.BsModalService }], target: i0.ɵɵFactoryTarget.Component });
MultiDateModalComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: MultiDateModalComponent, selector: "polp-bs-multi-date-modal", inputs: { title: "title", initValue: "initValue" }, usesInheritance: true, ngImport: i0, template: "<div class=\"modal-header\" polpModalDraggable>\n    <h4 class=\"modal-title\">{{title | cronJobHyperTrans}}</h4>\n</div>\n<div class=\"modal-body\">\n    <polp-bs-multi-date-picker [initValue]=\"initValue\"\n                               (onValidation)=\"validate($event)\"\n                               (onValueChanged)=\"updateValue($event)\">\n    </polp-bs-multi-date-picker>\n    \n    <ng-container *ngFor=\"let a of alerts\">\n        <alert [type]=\"a.type\" [dismissOnTimeout]=\"a.timeout\">\n            {{a.message | cronJobHyperTrans}}\n        </alert>\n    </ng-container>\n    \n</div>\n<div class=\"modal-footer\">\n    <div class=\"d-flex justify-content-end\">\n        <button class=\"btn btn-secondary me-2\" (click)=\"close()\">\n            {{'polpCronJob.cancelBtn' | cronJobHyperTrans}}\n        </button>\n        <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"isValid\"\n                (click)=\"confirm()\">\n            {{'polpCronJob.confirmBtn' | cronJobHyperTrans}}\n        </button>\n    </div>\n</div>\n", styles: [""], components: [{ type: i2.MultiDatePickerComponent, selector: "polp-bs-multi-date-picker", inputs: ["initValue"] }, { type: i3.AlertComponent, selector: "alert,bs-alert", inputs: ["type", "dismissible", "dismissOnTimeout", "isOpen"], outputs: ["onClose", "onClosed"] }], directives: [{ type: i4.polpModalDraggableDirective, selector: "[polpModalDraggable]" }, { type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], pipes: { "cronJobHyperTrans": i6.CronJobHyperTransPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: MultiDateModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'polp-bs-multi-date-modal', template: "<div class=\"modal-header\" polpModalDraggable>\n    <h4 class=\"modal-title\">{{title | cronJobHyperTrans}}</h4>\n</div>\n<div class=\"modal-body\">\n    <polp-bs-multi-date-picker [initValue]=\"initValue\"\n                               (onValidation)=\"validate($event)\"\n                               (onValueChanged)=\"updateValue($event)\">\n    </polp-bs-multi-date-picker>\n    \n    <ng-container *ngFor=\"let a of alerts\">\n        <alert [type]=\"a.type\" [dismissOnTimeout]=\"a.timeout\">\n            {{a.message | cronJobHyperTrans}}\n        </alert>\n    </ng-container>\n    \n</div>\n<div class=\"modal-footer\">\n    <div class=\"d-flex justify-content-end\">\n        <button class=\"btn btn-secondary me-2\" (click)=\"close()\">\n            {{'polpCronJob.cancelBtn' | cronJobHyperTrans}}\n        </button>\n        <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"isValid\"\n                (click)=\"confirm()\">\n            {{'polpCronJob.confirmBtn' | cronJobHyperTrans}}\n        </button>\n    </div>\n</div>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1.BsModalRef }, { type: i1.BsModalService }]; }, propDecorators: { title: [{
                type: Input
            }], initValue: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktZGF0ZS1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9jcm9uLWpvYi9zcmMvbGliL211bHRpLWRhdGUtbW9kYWwvbXVsdGktZGF0ZS1tb2RhbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9jcm9uLWpvYi9zcmMvbGliL211bHRpLWRhdGUtbW9kYWwvbXVsdGktZGF0ZS1tb2RhbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQW9CLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7O0FBY3pFLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxnQ0FBZ0U7SUFXekcsWUFDb0IsVUFBc0IsRUFDbkIsY0FBOEI7UUFDakQsS0FBSyxFQUFFLENBQUM7UUFGUSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ25CLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVY1QyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLGNBQVMsR0FBYSxFQUFFLENBQUM7UUFHbEMsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUV6QixrQkFBYSxHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztJQU12QyxDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ04sT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7SUFFRCxLQUFLO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsV0FBVyxDQUFDLEdBQThDO1FBQ3RELElBQUksR0FBRyxFQUFFO1lBQ0wsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzVDO0lBQ0wsQ0FBQztJQUVELFFBQVEsQ0FBQyxHQUF1QjtRQUM1QixJQUFJLEdBQUcsRUFBRTtZQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztTQUM1QjtJQUNMLENBQUM7SUFFRCxPQUFPO1FBQ0gsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDckM7SUFDTCxDQUFDOztxSEE1Q1EsdUJBQXVCO3lHQUF2Qix1QkFBdUIsMklDaEJwQywraENBMkJBOzRGRFhhLHVCQUF1QjtrQkFMbkMsU0FBUzsrQkFDSSwwQkFBMEI7OEhBTzNCLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlTW9kYWxBYnN0cmFjdENvbXBvbmVudCB9IGZyb20gJ0Bwb2xwd2FyZS9icy1jb21wb25lbnRzJztcbmltcG9ydCB7IEFsZXJ0RGVmYXVsdEltcGwsIElIYXNBbGVydEZlYXR1cmUgfSBmcm9tICdAcG9scHdhcmUvbmd4LWFsZXJ0JztcbmltcG9ydCB7IEJzTW9kYWxSZWYsIEJzTW9kYWxTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9tb2RhbCc7XG5cblxuZXhwb3J0IGludGVyZmFjZSBJTXVsdGlEYXRlTW9kYWxJbnB1dCB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBpbml0VmFsdWU6IHN0cmluZ1tdO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BvbHAtYnMtbXVsdGktZGF0ZS1tb2RhbCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL211bHRpLWRhdGUtbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL211bHRpLWRhdGUtbW9kYWwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE11bHRpRGF0ZU1vZGFsQ29tcG9uZW50IGV4dGVuZHMgT2JzZXJ2YWJsZU1vZGFsQWJzdHJhY3RDb21wb25lbnQ8SU11bHRpRGF0ZU1vZGFsSW5wdXQsIHN0cmluZ1tdPlxuICAgIGltcGxlbWVudHMgT25Jbml0LCBJSGFzQWxlcnRGZWF0dXJlIHtcblxuICAgIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgPSAnJztcbiAgICBASW5wdXQoKSBpbml0VmFsdWU6IHN0cmluZ1tdID0gW107XG5cbiAgICBvdXRwdXRWYWx1ZTogc3RyaW5nW107XG4gICAgaXNWYWxpZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgYWxlcnRQcm92aWRlciA9IG5ldyBBbGVydERlZmF1bHRJbXBsKCk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IGJzTW9kYWxSZWY6IEJzTW9kYWxSZWYsXG4gICAgICAgIHByb3RlY3RlZCByZWFkb25seSBic01vZGFsU2VydmljZTogQnNNb2RhbFNlcnZpY2UpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBnZXQgYWxlcnRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hbGVydFByb3ZpZGVyLmRhdGE7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuY2xvc2VNb2RhbChudWxsKTtcbiAgICB9XG5cbiAgICB1cGRhdGVWYWx1ZShldnQ6IEFycmF5PHsgZGlzcGxheTogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIH0+KSB7XG4gICAgICAgIGlmIChldnQpIHtcbiAgICAgICAgICAgIHRoaXMub3V0cHV0VmFsdWUgPSBldnQubWFwKGEgPT4gYS52YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YWxpZGF0ZShldnQ6IHsgdmFsaWQ6IGJvb2xlYW4gfSkge1xuICAgICAgICBpZiAoZXZ0KSB7XG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSBldnQudmFsaWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25maXJtKCkge1xuICAgICAgICBpZiAodGhpcy5pc1ZhbGlkKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwodGhpcy5vdXRwdXRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuIiwiPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiIHBvbHBNb2RhbERyYWdnYWJsZT5cbiAgICA8aDQgY2xhc3M9XCJtb2RhbC10aXRsZVwiPnt7dGl0bGUgfCBjcm9uSm9iSHlwZXJUcmFuc319PC9oND5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICA8cG9scC1icy1tdWx0aS1kYXRlLXBpY2tlciBbaW5pdFZhbHVlXT1cImluaXRWYWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uVmFsaWRhdGlvbik9XCJ2YWxpZGF0ZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25WYWx1ZUNoYW5nZWQpPVwidXBkYXRlVmFsdWUoJGV2ZW50KVwiPlxuICAgIDwvcG9scC1icy1tdWx0aS1kYXRlLXBpY2tlcj5cbiAgICBcbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBhIG9mIGFsZXJ0c1wiPlxuICAgICAgICA8YWxlcnQgW3R5cGVdPVwiYS50eXBlXCIgW2Rpc21pc3NPblRpbWVvdXRdPVwiYS50aW1lb3V0XCI+XG4gICAgICAgICAgICB7e2EubWVzc2FnZSB8IGNyb25Kb2JIeXBlclRyYW5zfX1cbiAgICAgICAgPC9hbGVydD5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICBcbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgbWUtMlwiIChjbGljayk9XCJjbG9zZSgpXCI+XG4gICAgICAgICAgICB7eydwb2xwQ3JvbkpvYi5jYW5jZWxCdG4nIHwgY3JvbkpvYkh5cGVyVHJhbnN9fVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAqbmdJZj1cImlzVmFsaWRcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJjb25maXJtKClcIj5cbiAgICAgICAgICAgIHt7J3BvbHBDcm9uSm9iLmNvbmZpcm1CdG4nIHwgY3JvbkpvYkh5cGVyVHJhbnN9fVxuICAgICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuIl19