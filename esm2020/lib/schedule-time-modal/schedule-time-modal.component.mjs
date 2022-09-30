import { Component, Input } from '@angular/core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { ObservableModalAbstractComponent } from '@polpware/bs-components';
import { AlertDefaultImpl } from '@polpware/ngx-alert';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/modal";
import * as i2 from "../schedule-time-picker/schedule-time-picker.component";
import * as i3 from "ngx-bootstrap/alert";
import * as i4 from "@polpware/modal-directives";
import * as i5 from "@angular/common";
import * as i6 from "../cron-job-hyper-trans.pipe";
export class ScheduleTimeModalComponent extends ObservableModalAbstractComponent {
    constructor(bsModalRef, bsModalService) {
        super();
        this.bsModalRef = bsModalRef;
        this.bsModalService = bsModalService;
        this.faSpinner = faSpinner;
        this.title = '';
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
    updateScheduler(evt) {
        this.outputValue = evt;
    }
    validateScheduler(evt) {
        if (evt) {
            this.isValid = evt.valid;
        }
    }
    updateStyle(evt) {
        if (evt && evt.opened) {
            const newClasses = this.extraClasses ? `${this.extraClasses} has-child-modal` : 'has-child-modal';
            this.bsModalRef.setClass(newClasses);
        }
        else {
            const newClasses = this.extraClasses || '';
            this.bsModalRef.setClass(newClasses);
        }
    }
    async confirmAsync() {
        this.alertProvider.clean();
        if (!this.isValid) {
            this.alertProvider.warning('polpCronJob.general');
            return;
        }
        this.isSaving = true;
        this.alertProvider.info('polpCronJob.messages.working');
        try {
            if (this.onConfirmAsync) {
                await this.onConfirmAsync(this.outputValue);
            }
            this.closeModal(this.outputValue);
        }
        catch (ex) {
            this.alertProvider.clean();
            this.alertProvider.danger('polpCronJob.errors.somethingWrong');
        }
        finally {
            this.isSaving = false;
        }
    }
}
ScheduleTimeModalComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ScheduleTimeModalComponent, deps: [{ token: i1.BsModalRef }, { token: i1.BsModalService }], target: i0.ɵɵFactoryTarget.Component });
ScheduleTimeModalComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: ScheduleTimeModalComponent, selector: "polp-bs-schedule-time-modal", inputs: { title: "title", initSettings: "initSettings", initValue: "initValue", onConfirmAsync: "onConfirmAsync", extraClasses: "extraClasses" }, usesInheritance: true, ngImport: i0, template: "<div class=\"modal-header\" polpModalDraggable>\n    <h4 class=\"modal-title\">{{title | cronJobHyperTrans}}</h4>\n</div>\n<div class=\"modal-body\">\n    <polp-bs-schedule-time-picker [initSettings]=\"initSettings\"\n                                  [initValue]=\"initValue\"\n                                  (childStateChanged)=\"updateStyle($event)\"\n                                  (onValidation)=\"validateScheduler($event)\"\n                                  (onValueChanged)=\"updateScheduler($event)\">\n    </polp-bs-schedule-time-picker>\n    \n    <ng-container *ngFor=\"let a of alerts\">\n        <alert [type]=\"a.type\" [dismissOnTimeout]=\"a.timeout\">\n            {{a.message | cronJobHyperTrans}}\n        </alert>\n    </ng-container>\n    \n</div>\n<div class=\"modal-footer\">\n    <div class=\"d-flex justify-content-end\">\n        <button class=\"btn btn-secondary me-2\" (click)=\"close()\">\n            {{'polpCronJob.closeBtn' | cronJobHyperTrans}}\n        </button>\n        <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"isValid\"\n                (click)=\"confirmAsync()\">\n            {{'polpCronJob.confirmBtn' | cronJobHyperTrans}}\n            <fa-icon [icon]=\"faSpinner\" [spin]=\"true\" class=\"ms-1\" *ngIf=\"isSaving\"></fa-icon>\n        </button>\n    </div>\n</div>\n", styles: [""], components: [{ type: i2.ScheduleTimePickerComponent, selector: "polp-bs-schedule-time-picker", inputs: ["initSettings", "initValue", "defaultHolidays"], outputs: ["childStateChanged"] }, { type: i3.AlertComponent, selector: "alert,bs-alert", inputs: ["type", "dismissible", "dismissOnTimeout", "isOpen"], outputs: ["onClose", "onClosed"] }], directives: [{ type: i4.polpModalDraggableDirective, selector: "[polpModalDraggable]" }, { type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], pipes: { "cronJobHyperTrans": i6.CronJobHyperTransPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ScheduleTimeModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'polp-bs-schedule-time-modal', template: "<div class=\"modal-header\" polpModalDraggable>\n    <h4 class=\"modal-title\">{{title | cronJobHyperTrans}}</h4>\n</div>\n<div class=\"modal-body\">\n    <polp-bs-schedule-time-picker [initSettings]=\"initSettings\"\n                                  [initValue]=\"initValue\"\n                                  (childStateChanged)=\"updateStyle($event)\"\n                                  (onValidation)=\"validateScheduler($event)\"\n                                  (onValueChanged)=\"updateScheduler($event)\">\n    </polp-bs-schedule-time-picker>\n    \n    <ng-container *ngFor=\"let a of alerts\">\n        <alert [type]=\"a.type\" [dismissOnTimeout]=\"a.timeout\">\n            {{a.message | cronJobHyperTrans}}\n        </alert>\n    </ng-container>\n    \n</div>\n<div class=\"modal-footer\">\n    <div class=\"d-flex justify-content-end\">\n        <button class=\"btn btn-secondary me-2\" (click)=\"close()\">\n            {{'polpCronJob.closeBtn' | cronJobHyperTrans}}\n        </button>\n        <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"isValid\"\n                (click)=\"confirmAsync()\">\n            {{'polpCronJob.confirmBtn' | cronJobHyperTrans}}\n            <fa-icon [icon]=\"faSpinner\" [spin]=\"true\" class=\"ms-1\" *ngIf=\"isSaving\"></fa-icon>\n        </button>\n    </div>\n</div>\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1.BsModalRef }, { type: i1.BsModalService }]; }, propDecorators: { title: [{
                type: Input
            }], initSettings: [{
                type: Input
            }], initValue: [{
                type: Input
            }], onConfirmAsync: [{
                type: Input
            }], extraClasses: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUtdGltZS1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9jcm9uLWpvYi9zcmMvbGliL3NjaGVkdWxlLXRpbWUtbW9kYWwvc2NoZWR1bGUtdGltZS1tb2RhbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9jcm9uLWpvYi9zcmMvbGliL3NjaGVkdWxlLXRpbWUtbW9kYWwvc2NoZWR1bGUtdGltZS1tb2RhbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBZ0MsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzlELE9BQU8sRUFBRSxnQ0FBZ0MsRUFBb0MsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RyxPQUFPLEVBQUUsZ0JBQWdCLEVBQW9CLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7O0FBa0J6RSxNQUFNLE9BQU8sMEJBQ1QsU0FBUSxnQ0FBd0U7SUFvQmhGLFlBQ29CLFVBQXNCLEVBQ25CLGNBQThCO1FBQ2pELEtBQUssRUFBRSxDQUFDO1FBRlEsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNuQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFuQnJELGNBQVMsR0FBRyxTQUFTLENBQUM7UUFFYixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBVzVCLGtCQUFhLEdBQUcsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO0lBUXZDLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDTixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQ25DLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVELEtBQUs7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxlQUFlLENBQUMsR0FBa0I7UUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7SUFDM0IsQ0FBQztJQUVELGlCQUFpQixDQUFDLEdBQXVCO1FBQ3JDLElBQUksR0FBRyxFQUFFO1lBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1NBQzVCO0lBQ0wsQ0FBQztJQUVELFdBQVcsQ0FBQyxHQUFxQjtRQUM3QixJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFO1lBQ25CLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksa0JBQWtCLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO1lBQ2xHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3hDO2FBQU07WUFDSCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQztZQUMzQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN4QztJQUNMLENBQUM7SUFFRCxLQUFLLENBQUMsWUFBWTtRQUNkLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ2xELE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLENBQUM7UUFDeEQsSUFBSTtZQUNBLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDckIsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUMvQztZQUNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3JDO1FBQUMsT0FBTyxFQUFFLEVBQUU7WUFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLG1DQUFtQyxDQUFDLENBQUM7U0FDbEU7Z0JBQVM7WUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztTQUN6QjtJQUNMLENBQUM7O3dIQTlFUSwwQkFBMEI7NEdBQTFCLDBCQUEwQiw0T0NyQnZDLHN6Q0E4QkE7NEZEVGEsMEJBQTBCO2tCQUx0QyxTQUFTOytCQUNJLDZCQUE2Qjs4SEFVOUIsS0FBSztzQkFBYixLQUFLO2dCQUNHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxjQUFjO3NCQUF0QixLQUFLO2dCQUVHLFlBQVk7c0JBQXBCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmYVNwaW5uZXIgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZU1vZGFsQWJzdHJhY3RDb21wb25lbnQsIElIYXNDaGlsZE1vZGFsLCBJQ2hpbGRNb2RhbFN0YXRlIH0gZnJvbSAnQHBvbHB3YXJlL2JzLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQWxlcnREZWZhdWx0SW1wbCwgSUhhc0FsZXJ0RmVhdHVyZSB9IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtYWxlcnQnO1xuaW1wb3J0IHsgQnNNb2RhbFJlZiwgQnNNb2RhbFNlcnZpY2UgfSBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsJztcbmltcG9ydCB7IElTY2hlZHVsZVRpbWUgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IElTZXR0aW5ncyB9IGZyb20gJy4uL3NjaGVkdWxlLXRpbWUtcGlja2VyL3NjaGVkdWxlLXRpbWUtcGlja2VyLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNjaGVkdWxlVGltZU1vZGFsSW5wdXQge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgaW5pdFNldHRpbmdzOiBJU2V0dGluZ3M7XG4gICAgaW5pdFZhbHVlOiBJU2NoZWR1bGVUaW1lO1xuICAgIGV4dHJhQ2xhc3Nlczogc3RyaW5nO1xuICAgIG9uQ29uZmlybUFzeW5jOiAoZGF0YTogSVNjaGVkdWxlVGltZSkgPT4gUHJvbWlzZTxhbnk+O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BvbHAtYnMtc2NoZWR1bGUtdGltZS1tb2RhbCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NjaGVkdWxlLXRpbWUtbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3NjaGVkdWxlLXRpbWUtbW9kYWwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNjaGVkdWxlVGltZU1vZGFsQ29tcG9uZW50XG4gICAgZXh0ZW5kcyBPYnNlcnZhYmxlTW9kYWxBYnN0cmFjdENvbXBvbmVudDxJU2NoZWR1bGVUaW1lTW9kYWxJbnB1dCwgSVNjaGVkdWxlVGltZT5cbiAgICBpbXBsZW1lbnRzIE9uSW5pdCwgSUhhc0FsZXJ0RmVhdHVyZSwgSUhhc0NoaWxkTW9kYWwge1xuXG4gICAgZmFTcGlubmVyID0gZmFTcGlubmVyO1xuXG4gICAgQElucHV0KCkgdGl0bGU6IHN0cmluZyA9ICcnO1xuICAgIEBJbnB1dCgpIGluaXRTZXR0aW5nczogSVNldHRpbmdzO1xuICAgIEBJbnB1dCgpIGluaXRWYWx1ZTogSVNjaGVkdWxlVGltZTtcbiAgICBASW5wdXQoKSBvbkNvbmZpcm1Bc3luYzogKGRhdGE6IElTY2hlZHVsZVRpbWUpID0+IFByb21pc2U8YW55PjtcbiAgICAvLyBXZSBuZWVkIHRoaXMgb25lIHRvIGdldCB0aGUgaW5pdCBjbGFzcy5cbiAgICBASW5wdXQoKSBleHRyYUNsYXNzZXM6IHN0cmluZztcblxuICAgIG91dHB1dFZhbHVlOiBJU2NoZWR1bGVUaW1lO1xuICAgIGlzVmFsaWQ6IGJvb2xlYW47XG5cbiAgICBpc1NhdmluZzogYm9vbGVhbjtcbiAgICBhbGVydFByb3ZpZGVyID0gbmV3IEFsZXJ0RGVmYXVsdEltcGwoKTtcblxuICAgIHNob3dCYWNrZHJvcDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgYnNNb2RhbFJlZjogQnNNb2RhbFJlZixcbiAgICAgICAgcHJvdGVjdGVkIHJlYWRvbmx5IGJzTW9kYWxTZXJ2aWNlOiBCc01vZGFsU2VydmljZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGdldCBhbGVydHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFsZXJ0UHJvdmlkZXIuZGF0YTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5jbG9zZU1vZGFsKG51bGwpO1xuICAgIH1cblxuICAgIHVwZGF0ZVNjaGVkdWxlcihldnQ6IElTY2hlZHVsZVRpbWUpIHtcbiAgICAgICAgdGhpcy5vdXRwdXRWYWx1ZSA9IGV2dDtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZVNjaGVkdWxlcihldnQ6IHsgdmFsaWQ6IGJvb2xlYW4gfSkge1xuICAgICAgICBpZiAoZXZ0KSB7XG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSBldnQudmFsaWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVTdHlsZShldnQ6IElDaGlsZE1vZGFsU3RhdGUpIHtcbiAgICAgICAgaWYgKGV2dCAmJiBldnQub3BlbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdDbGFzc2VzID0gdGhpcy5leHRyYUNsYXNzZXMgPyBgJHt0aGlzLmV4dHJhQ2xhc3Nlc30gaGFzLWNoaWxkLW1vZGFsYCA6ICdoYXMtY2hpbGQtbW9kYWwnO1xuICAgICAgICAgICAgdGhpcy5ic01vZGFsUmVmLnNldENsYXNzKG5ld0NsYXNzZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbmV3Q2xhc3NlcyA9IHRoaXMuZXh0cmFDbGFzc2VzIHx8ICcnO1xuICAgICAgICAgICAgdGhpcy5ic01vZGFsUmVmLnNldENsYXNzKG5ld0NsYXNzZXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgY29uZmlybUFzeW5jKCkge1xuICAgICAgICB0aGlzLmFsZXJ0UHJvdmlkZXIuY2xlYW4oKTtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWxlcnRQcm92aWRlci53YXJuaW5nKCdwb2xwQ3JvbkpvYi5nZW5lcmFsJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzU2F2aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hbGVydFByb3ZpZGVyLmluZm8oJ3BvbHBDcm9uSm9iLm1lc3NhZ2VzLndvcmtpbmcnKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9uQ29uZmlybUFzeW5jKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5vbkNvbmZpcm1Bc3luYyh0aGlzLm91dHB1dFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbCh0aGlzLm91dHB1dFZhbHVlKTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgIHRoaXMuYWxlcnRQcm92aWRlci5jbGVhbigpO1xuICAgICAgICAgICAgdGhpcy5hbGVydFByb3ZpZGVyLmRhbmdlcigncG9scENyb25Kb2IuZXJyb3JzLnNvbWV0aGluZ1dyb25nJyk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICB0aGlzLmlzU2F2aW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIiBwb2xwTW9kYWxEcmFnZ2FibGU+XG4gICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIj57e3RpdGxlIHwgY3JvbkpvYkh5cGVyVHJhbnN9fTwvaDQ+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG4gICAgPHBvbHAtYnMtc2NoZWR1bGUtdGltZS1waWNrZXIgW2luaXRTZXR0aW5nc109XCJpbml0U2V0dGluZ3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpbml0VmFsdWVdPVwiaW5pdFZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2hpbGRTdGF0ZUNoYW5nZWQpPVwidXBkYXRlU3R5bGUoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uVmFsaWRhdGlvbik9XCJ2YWxpZGF0ZVNjaGVkdWxlcigkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25WYWx1ZUNoYW5nZWQpPVwidXBkYXRlU2NoZWR1bGVyKCRldmVudClcIj5cbiAgICA8L3BvbHAtYnMtc2NoZWR1bGUtdGltZS1waWNrZXI+XG4gICAgXG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgYSBvZiBhbGVydHNcIj5cbiAgICAgICAgPGFsZXJ0IFt0eXBlXT1cImEudHlwZVwiIFtkaXNtaXNzT25UaW1lb3V0XT1cImEudGltZW91dFwiPlxuICAgICAgICAgICAge3thLm1lc3NhZ2UgfCBjcm9uSm9iSHlwZXJUcmFuc319XG4gICAgICAgIDwvYWxlcnQ+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgXG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IG1lLTJcIiAoY2xpY2spPVwiY2xvc2UoKVwiPlxuICAgICAgICAgICAge3sncG9scENyb25Kb2IuY2xvc2VCdG4nIHwgY3JvbkpvYkh5cGVyVHJhbnN9fVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAqbmdJZj1cImlzVmFsaWRcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJjb25maXJtQXN5bmMoKVwiPlxuICAgICAgICAgICAge3sncG9scENyb25Kb2IuY29uZmlybUJ0bicgfCBjcm9uSm9iSHlwZXJUcmFuc319XG4gICAgICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJmYVNwaW5uZXJcIiBbc3Bpbl09XCJ0cnVlXCIgY2xhc3M9XCJtcy0xXCIgKm5nSWY9XCJpc1NhdmluZ1wiPjwvZmEtaWNvbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==