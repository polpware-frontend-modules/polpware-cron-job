import { Component, Input } from '@angular/core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { ObservableModalAbstractComponent } from '@polpware/bs-components';
import { AlertDefaultImpl } from '@polpware/ngx-alert';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/modal";
import * as i2 from "@angular/common";
import * as i3 from "ngx-bootstrap/alert";
import * as i4 from "@polpware/modal-directives";
import * as i5 from "../schedule-time-picker/schedule-time-picker.component";
import * as i6 from "../cron-job-hyper-trans.pipe";
function ScheduleTimeModalComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "alert", 9);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "cronJobHyperTrans");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const a_r2 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("type", a_r2.type)("dismissOnTimeout", a_r2.timeout);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 3, a_r2.message), " ");
} }
function ScheduleTimeModalComponent_button_12_fa_icon_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "fa-icon", 12);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("icon", ctx_r3.faSpinner)("spin", true);
} }
function ScheduleTimeModalComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵlistener("click", function ScheduleTimeModalComponent_button_12_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.confirmAsync()); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "cronJobHyperTrans");
    i0.ɵɵtemplate(3, ScheduleTimeModalComponent_button_12_fa_icon_3_Template, 1, 2, "fa-icon", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, "polpCronJob.confirmBtn"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.isSaving);
} }
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
ScheduleTimeModalComponent.ɵfac = function ScheduleTimeModalComponent_Factory(t) { return new (t || ScheduleTimeModalComponent)(i0.ɵɵdirectiveInject(i1.BsModalRef), i0.ɵɵdirectiveInject(i1.BsModalService)); };
ScheduleTimeModalComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ScheduleTimeModalComponent, selectors: [["polp-bs-schedule-time-modal"]], inputs: { title: "title", initSettings: "initSettings", initValue: "initValue", onConfirmAsync: "onConfirmAsync", extraClasses: "extraClasses" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 13, vars: 10, consts: [["polpModalDraggable", "", 1, "modal-header"], [1, "modal-title"], [1, "modal-body"], [3, "initSettings", "initValue", "childStateChanged", "onValidation", "onValueChanged"], [4, "ngFor", "ngForOf"], [1, "modal-footer"], [1, "d-flex", "justify-content-end"], [1, "btn", "btn-secondary", "me-2", 3, "click"], ["type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"], [3, "type", "dismissOnTimeout"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["class", "ms-1", 3, "icon", "spin", 4, "ngIf"], [1, "ms-1", 3, "icon", "spin"]], template: function ScheduleTimeModalComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "h4", 1);
        i0.ɵɵtext(2);
        i0.ɵɵpipe(3, "cronJobHyperTrans");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(4, "div", 2)(5, "polp-bs-schedule-time-picker", 3);
        i0.ɵɵlistener("childStateChanged", function ScheduleTimeModalComponent_Template_polp_bs_schedule_time_picker_childStateChanged_5_listener($event) { return ctx.updateStyle($event); })("onValidation", function ScheduleTimeModalComponent_Template_polp_bs_schedule_time_picker_onValidation_5_listener($event) { return ctx.validateScheduler($event); })("onValueChanged", function ScheduleTimeModalComponent_Template_polp_bs_schedule_time_picker_onValueChanged_5_listener($event) { return ctx.updateScheduler($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, ScheduleTimeModalComponent_ng_container_6_Template, 4, 5, "ng-container", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 5)(8, "div", 6)(9, "button", 7);
        i0.ɵɵlistener("click", function ScheduleTimeModalComponent_Template_button_click_9_listener() { return ctx.close(); });
        i0.ɵɵtext(10);
        i0.ɵɵpipe(11, "cronJobHyperTrans");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(12, ScheduleTimeModalComponent_button_12_Template, 4, 4, "button", 8);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 6, ctx.title));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("initSettings", ctx.initSettings)("initValue", ctx.initValue);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.alerts);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(11, 8, "polpCronJob.closeBtn"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.isValid);
    } }, dependencies: [i2.NgForOf, i2.NgIf, i3.AlertComponent, i4.polpModalDraggableDirective, i5.ScheduleTimePickerComponent, i6.CronJobHyperTransPipe] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ScheduleTimeModalComponent, [{
        type: Component,
        args: [{ selector: 'polp-bs-schedule-time-modal', template: "<div class=\"modal-header\" polpModalDraggable>\n    <h4 class=\"modal-title\">{{title | cronJobHyperTrans}}</h4>\n</div>\n<div class=\"modal-body\">\n    <polp-bs-schedule-time-picker [initSettings]=\"initSettings\"\n                                  [initValue]=\"initValue\"\n                                  (childStateChanged)=\"updateStyle($event)\"\n                                  (onValidation)=\"validateScheduler($event)\"\n                                  (onValueChanged)=\"updateScheduler($event)\">\n    </polp-bs-schedule-time-picker>\n    \n    <ng-container *ngFor=\"let a of alerts\">\n        <alert [type]=\"a.type\" [dismissOnTimeout]=\"a.timeout\">\n            {{a.message | cronJobHyperTrans}}\n        </alert>\n    </ng-container>\n    \n</div>\n<div class=\"modal-footer\">\n    <div class=\"d-flex justify-content-end\">\n        <button class=\"btn btn-secondary me-2\" (click)=\"close()\">\n            {{'polpCronJob.closeBtn' | cronJobHyperTrans}}\n        </button>\n        <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"isValid\"\n                (click)=\"confirmAsync()\">\n            {{'polpCronJob.confirmBtn' | cronJobHyperTrans}}\n            <fa-icon [icon]=\"faSpinner\" [spin]=\"true\" class=\"ms-1\" *ngIf=\"isSaving\"></fa-icon>\n        </button>\n    </div>\n</div>\n" }]
    }], function () { return [{ type: i1.BsModalRef }, { type: i1.BsModalService }]; }, { title: [{
            type: Input
        }], initSettings: [{
            type: Input
        }], initValue: [{
            type: Input
        }], onConfirmAsync: [{
            type: Input
        }], extraClasses: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUtdGltZS1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9jcm9uLWpvYi9zcmMvbGliL3NjaGVkdWxlLXRpbWUtbW9kYWwvc2NoZWR1bGUtdGltZS1tb2RhbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9jcm9uLWpvYi9zcmMvbGliL3NjaGVkdWxlLXRpbWUtbW9kYWwvc2NoZWR1bGUtdGltZS1tb2RhbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBZ0MsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzlELE9BQU8sRUFBRSxnQ0FBZ0MsRUFBb0MsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RyxPQUFPLEVBQUUsZ0JBQWdCLEVBQW9CLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7OztJQ1FyRSw2QkFBdUM7SUFDbkMsZ0NBQXNEO0lBQ2xELFlBQ0o7O0lBQUEsaUJBQVE7SUFDWiwwQkFBZTs7O0lBSEosZUFBZTtJQUFmLGdDQUFlLGtDQUFBO0lBQ2xCLGVBQ0o7SUFESSxtRUFDSjs7O0lBWUksOEJBQWtGOzs7SUFBekUsdUNBQWtCLGNBQUE7Ozs7SUFIL0Isa0NBQ2lDO0lBQXpCLDJLQUFTLGVBQUEscUJBQWMsQ0FBQSxJQUFDO0lBQzVCLFlBQ0E7O0lBQUEsOEZBQWtGO0lBQ3RGLGlCQUFTOzs7SUFGTCxlQUNBO0lBREEsK0VBQ0E7SUFBd0QsZUFBYztJQUFkLHNDQUFjOztBRExsRixNQUFNLE9BQU8sMEJBQ1QsU0FBUSxnQ0FBd0U7SUFvQmhGLFlBQ29CLFVBQXNCLEVBQ25CLGNBQThCO1FBQ2pELEtBQUssRUFBRSxDQUFDO1FBRlEsZUFBVSxHQUFWLFVBQVUs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QWE7O3VGREZ2RCwwQkFBMEI7Y0FMdEMsU0FBUzsyQkFDSSw2QkFBNkI7MEZBVTlCLEtBQUs7a0JBQWIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csY0FBYztrQkFBdEIsS0FBSztZQUVHLFlBQVk7a0JBQXBCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmYVNwaW5uZXIgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZU1vZGFsQWJzdHJhY3RDb21wb25lbnQsIElIYXNDaGlsZE1vZGFsLCBJQ2hpbGRNb2RhbFN0YXRlIH0gZnJvbSAnQHBvbHB3YXJlL2JzLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQWxlcnREZWZhdWx0SW1wbCwgSUhhc0FsZXJ0RmVhdHVyZSB9IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtYWxlcnQnO1xuaW1wb3J0IHsgQnNNb2RhbFJlZiwgQnNNb2RhbFNlcnZpY2UgfSBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsJztcbmltcG9ydCB7IElTY2hlZHVsZVRpbWUgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IElTZXR0aW5ncyB9IGZyb20gJy4uL3NjaGVkdWxlLXRpbWUtcGlja2VyL3NjaGVkdWxlLXRpbWUtcGlja2VyLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNjaGVkdWxlVGltZU1vZGFsSW5wdXQge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgaW5pdFNldHRpbmdzOiBJU2V0dGluZ3M7XG4gICAgaW5pdFZhbHVlOiBJU2NoZWR1bGVUaW1lO1xuICAgIGV4dHJhQ2xhc3Nlczogc3RyaW5nO1xuICAgIG9uQ29uZmlybUFzeW5jOiAoZGF0YTogSVNjaGVkdWxlVGltZSkgPT4gUHJvbWlzZTxhbnk+O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BvbHAtYnMtc2NoZWR1bGUtdGltZS1tb2RhbCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NjaGVkdWxlLXRpbWUtbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3NjaGVkdWxlLXRpbWUtbW9kYWwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNjaGVkdWxlVGltZU1vZGFsQ29tcG9uZW50XG4gICAgZXh0ZW5kcyBPYnNlcnZhYmxlTW9kYWxBYnN0cmFjdENvbXBvbmVudDxJU2NoZWR1bGVUaW1lTW9kYWxJbnB1dCwgSVNjaGVkdWxlVGltZT5cbiAgICBpbXBsZW1lbnRzIE9uSW5pdCwgSUhhc0FsZXJ0RmVhdHVyZSwgSUhhc0NoaWxkTW9kYWwge1xuXG4gICAgZmFTcGlubmVyID0gZmFTcGlubmVyO1xuXG4gICAgQElucHV0KCkgdGl0bGU6IHN0cmluZyA9ICcnO1xuICAgIEBJbnB1dCgpIGluaXRTZXR0aW5nczogSVNldHRpbmdzO1xuICAgIEBJbnB1dCgpIGluaXRWYWx1ZTogSVNjaGVkdWxlVGltZTtcbiAgICBASW5wdXQoKSBvbkNvbmZpcm1Bc3luYzogKGRhdGE6IElTY2hlZHVsZVRpbWUpID0+IFByb21pc2U8YW55PjtcbiAgICAvLyBXZSBuZWVkIHRoaXMgb25lIHRvIGdldCB0aGUgaW5pdCBjbGFzcy5cbiAgICBASW5wdXQoKSBleHRyYUNsYXNzZXM6IHN0cmluZztcblxuICAgIG91dHB1dFZhbHVlOiBJU2NoZWR1bGVUaW1lO1xuICAgIGlzVmFsaWQ6IGJvb2xlYW47XG5cbiAgICBpc1NhdmluZzogYm9vbGVhbjtcbiAgICBhbGVydFByb3ZpZGVyID0gbmV3IEFsZXJ0RGVmYXVsdEltcGwoKTtcblxuICAgIHNob3dCYWNrZHJvcDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgYnNNb2RhbFJlZjogQnNNb2RhbFJlZixcbiAgICAgICAgcHJvdGVjdGVkIHJlYWRvbmx5IGJzTW9kYWxTZXJ2aWNlOiBCc01vZGFsU2VydmljZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGdldCBhbGVydHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFsZXJ0UHJvdmlkZXIuZGF0YTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5jbG9zZU1vZGFsKG51bGwpO1xuICAgIH1cblxuICAgIHVwZGF0ZVNjaGVkdWxlcihldnQ6IElTY2hlZHVsZVRpbWUpIHtcbiAgICAgICAgdGhpcy5vdXRwdXRWYWx1ZSA9IGV2dDtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZVNjaGVkdWxlcihldnQ6IHsgdmFsaWQ6IGJvb2xlYW4gfSkge1xuICAgICAgICBpZiAoZXZ0KSB7XG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSBldnQudmFsaWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVTdHlsZShldnQ6IElDaGlsZE1vZGFsU3RhdGUpIHtcbiAgICAgICAgaWYgKGV2dCAmJiBldnQub3BlbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdDbGFzc2VzID0gdGhpcy5leHRyYUNsYXNzZXMgPyBgJHt0aGlzLmV4dHJhQ2xhc3Nlc30gaGFzLWNoaWxkLW1vZGFsYCA6ICdoYXMtY2hpbGQtbW9kYWwnO1xuICAgICAgICAgICAgdGhpcy5ic01vZGFsUmVmLnNldENsYXNzKG5ld0NsYXNzZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbmV3Q2xhc3NlcyA9IHRoaXMuZXh0cmFDbGFzc2VzIHx8ICcnO1xuICAgICAgICAgICAgdGhpcy5ic01vZGFsUmVmLnNldENsYXNzKG5ld0NsYXNzZXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgY29uZmlybUFzeW5jKCkge1xuICAgICAgICB0aGlzLmFsZXJ0UHJvdmlkZXIuY2xlYW4oKTtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWxlcnRQcm92aWRlci53YXJuaW5nKCdwb2xwQ3JvbkpvYi5nZW5lcmFsJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzU2F2aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hbGVydFByb3ZpZGVyLmluZm8oJ3BvbHBDcm9uSm9iLm1lc3NhZ2VzLndvcmtpbmcnKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9uQ29uZmlybUFzeW5jKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5vbkNvbmZpcm1Bc3luYyh0aGlzLm91dHB1dFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbCh0aGlzLm91dHB1dFZhbHVlKTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgIHRoaXMuYWxlcnRQcm92aWRlci5jbGVhbigpO1xuICAgICAgICAgICAgdGhpcy5hbGVydFByb3ZpZGVyLmRhbmdlcigncG9scENyb25Kb2IuZXJyb3JzLnNvbWV0aGluZ1dyb25nJyk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICB0aGlzLmlzU2F2aW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIiBwb2xwTW9kYWxEcmFnZ2FibGU+XG4gICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIj57e3RpdGxlIHwgY3JvbkpvYkh5cGVyVHJhbnN9fTwvaDQ+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG4gICAgPHBvbHAtYnMtc2NoZWR1bGUtdGltZS1waWNrZXIgW2luaXRTZXR0aW5nc109XCJpbml0U2V0dGluZ3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpbml0VmFsdWVdPVwiaW5pdFZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2hpbGRTdGF0ZUNoYW5nZWQpPVwidXBkYXRlU3R5bGUoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uVmFsaWRhdGlvbik9XCJ2YWxpZGF0ZVNjaGVkdWxlcigkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25WYWx1ZUNoYW5nZWQpPVwidXBkYXRlU2NoZWR1bGVyKCRldmVudClcIj5cbiAgICA8L3BvbHAtYnMtc2NoZWR1bGUtdGltZS1waWNrZXI+XG4gICAgXG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgYSBvZiBhbGVydHNcIj5cbiAgICAgICAgPGFsZXJ0IFt0eXBlXT1cImEudHlwZVwiIFtkaXNtaXNzT25UaW1lb3V0XT1cImEudGltZW91dFwiPlxuICAgICAgICAgICAge3thLm1lc3NhZ2UgfCBjcm9uSm9iSHlwZXJUcmFuc319XG4gICAgICAgIDwvYWxlcnQ+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgXG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IG1lLTJcIiAoY2xpY2spPVwiY2xvc2UoKVwiPlxuICAgICAgICAgICAge3sncG9scENyb25Kb2IuY2xvc2VCdG4nIHwgY3JvbkpvYkh5cGVyVHJhbnN9fVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAqbmdJZj1cImlzVmFsaWRcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJjb25maXJtQXN5bmMoKVwiPlxuICAgICAgICAgICAge3sncG9scENyb25Kb2IuY29uZmlybUJ0bicgfCBjcm9uSm9iSHlwZXJUcmFuc319XG4gICAgICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJmYVNwaW5uZXJcIiBbc3Bpbl09XCJ0cnVlXCIgY2xhc3M9XCJtcy0xXCIgKm5nSWY9XCJpc1NhdmluZ1wiPjwvZmEtaWNvbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==