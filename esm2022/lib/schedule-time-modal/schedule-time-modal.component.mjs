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
    const a_r1 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("type", a_r1.type)("dismissOnTimeout", a_r1.timeout);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 3, a_r1.message), " ");
} }
function ScheduleTimeModalComponent_button_12_fa_icon_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "fa-icon", 12);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("icon", ctx_r2.faSpinner)("spin", true);
} }
function ScheduleTimeModalComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵlistener("click", function ScheduleTimeModalComponent_button_12_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.confirmAsync()); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "cronJobHyperTrans");
    i0.ɵɵtemplate(3, ScheduleTimeModalComponent_button_12_fa_icon_3_Template, 1, 2, "fa-icon", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, "polpCronJob.confirmBtn"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.isSaving);
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
    static { this.ɵfac = function ScheduleTimeModalComponent_Factory(t) { return new (t || ScheduleTimeModalComponent)(i0.ɵɵdirectiveInject(i1.BsModalRef), i0.ɵɵdirectiveInject(i1.BsModalService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ScheduleTimeModalComponent, selectors: [["polp-bs-schedule-time-modal"]], inputs: { title: "title", initSettings: "initSettings", initValue: "initValue", onConfirmAsync: "onConfirmAsync", extraClasses: "extraClasses" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 13, vars: 10, consts: [["polpModalDraggable", "", 1, "modal-header"], [1, "modal-title"], [1, "modal-body"], [3, "childStateChanged", "onValidation", "onValueChanged", "initSettings", "initValue"], [4, "ngFor", "ngForOf"], [1, "modal-footer"], [1, "d-flex", "justify-content-end"], [1, "btn", "btn-secondary", "me-2", 3, "click"], ["type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"], [3, "type", "dismissOnTimeout"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["class", "ms-1", 3, "icon", "spin", 4, "ngIf"], [1, "ms-1", 3, "icon", "spin"]], template: function ScheduleTimeModalComponent_Template(rf, ctx) { if (rf & 1) {
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
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.alerts);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(11, 8, "polpCronJob.closeBtn"), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.isValid);
        } }, dependencies: [i2.NgForOf, i2.NgIf, i3.AlertComponent, i4.polpModalDraggableDirective, i5.ScheduleTimePickerComponent, i6.CronJobHyperTransPipe] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ScheduleTimeModalComponent, [{
        type: Component,
        args: [{ selector: 'polp-bs-schedule-time-modal', template: "<div class=\"modal-header\" polpModalDraggable>\n    <h4 class=\"modal-title\">{{title | cronJobHyperTrans}}</h4>\n</div>\n<div class=\"modal-body\">\n    <polp-bs-schedule-time-picker [initSettings]=\"initSettings\"\n                                  [initValue]=\"initValue\"\n                                  (childStateChanged)=\"updateStyle($event)\"\n                                  (onValidation)=\"validateScheduler($event)\"\n                                  (onValueChanged)=\"updateScheduler($event)\">\n    </polp-bs-schedule-time-picker>\n    \n    <ng-container *ngFor=\"let a of alerts\">\n        <alert [type]=\"a.type\" [dismissOnTimeout]=\"a.timeout\">\n            {{a.message | cronJobHyperTrans}}\n        </alert>\n    </ng-container>\n    \n</div>\n<div class=\"modal-footer\">\n    <div class=\"d-flex justify-content-end\">\n        <button class=\"btn btn-secondary me-2\" (click)=\"close()\">\n            {{'polpCronJob.closeBtn' | cronJobHyperTrans}}\n        </button>\n        <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"isValid\"\n                (click)=\"confirmAsync()\">\n            {{'polpCronJob.confirmBtn' | cronJobHyperTrans}}\n            <fa-icon [icon]=\"faSpinner\" [spin]=\"true\" class=\"ms-1\" *ngIf=\"isSaving\"></fa-icon>\n        </button>\n    </div>\n</div>\n" }]
    }], () => [{ type: i1.BsModalRef }, { type: i1.BsModalService }], { title: [{
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ScheduleTimeModalComponent, { className: "ScheduleTimeModalComponent", filePath: "lib\\schedule-time-modal\\schedule-time-modal.component.ts", lineNumber: 22 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUtdGltZS1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9jcm9uLWpvYi9zcmMvbGliL3NjaGVkdWxlLXRpbWUtbW9kYWwvc2NoZWR1bGUtdGltZS1tb2RhbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9jcm9uLWpvYi9zcmMvbGliL3NjaGVkdWxlLXRpbWUtbW9kYWwvc2NoZWR1bGUtdGltZS1tb2RhbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBZ0MsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzlELE9BQU8sRUFBRSxnQ0FBZ0MsRUFBb0MsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RyxPQUFPLEVBQUUsZ0JBQWdCLEVBQW9CLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7OztJQ1FyRSw2QkFBdUM7SUFDbkMsZ0NBQXNEO0lBQ2xELFlBQ0o7O0lBQUEsaUJBQVE7Ozs7SUFGRCxjQUFlO0lBQUMsQUFBaEIsZ0NBQWUsa0NBQStCO0lBQ2pELGNBQ0o7SUFESSxtRUFDSjs7O0lBWUksOEJBQWtGOzs7SUFBdEQsQUFBbkIsdUNBQWtCLGNBQWM7Ozs7SUFIN0Msa0NBQ2lDO0lBQXpCLDBMQUFTLHFCQUFjLEtBQUM7SUFDNUIsWUFDQTs7SUFBQSw4RkFBd0U7SUFDNUUsaUJBQVM7OztJQUZMLGNBQ0E7SUFEQSwrRUFDQTtJQUF3RCxlQUFjO0lBQWQsc0NBQWM7O0FETGxGLE1BQU0sT0FBTywwQkFDVCxTQUFRLGdDQUF3RTtJQW9CaEYsWUFDb0IsVUFBc0IsRUFDbkIsY0FBOEI7UUFDakQsS0FBSyxFQUFFLENBQUM7UUFGUSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FB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OztZQTVCc0IsZUFBNkI7WUFBN0IscURBQTZCO1lBR3ZCLGVBQTZCO1lBQzdCLEFBREEsK0NBQTZCLDRCQUNOO1lBTXpCLGNBQVM7WUFBVCxvQ0FBUztZQVU3QixlQUNKO1lBREksOEVBQ0o7WUFDK0MsZUFBYTtZQUFiLGtDQUFhOzs7aUZERnZELDBCQUEwQjtjQUx0QyxTQUFTOzJCQUNJLDZCQUE2Qjt3RUFVOUIsS0FBSztrQkFBYixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxjQUFjO2tCQUF0QixLQUFLO1lBRUcsWUFBWTtrQkFBcEIsS0FBSzs7a0ZBWEcsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZmFTcGlubmVyIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCB7IE9ic2VydmFibGVNb2RhbEFic3RyYWN0Q29tcG9uZW50LCBJSGFzQ2hpbGRNb2RhbCwgSUNoaWxkTW9kYWxTdGF0ZSB9IGZyb20gJ0Bwb2xwd2FyZS9icy1jb21wb25lbnRzJztcbmltcG9ydCB7IEFsZXJ0RGVmYXVsdEltcGwsIElIYXNBbGVydEZlYXR1cmUgfSBmcm9tICdAcG9scHdhcmUvbmd4LWFsZXJ0JztcbmltcG9ydCB7IEJzTW9kYWxSZWYsIEJzTW9kYWxTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9tb2RhbCc7XG5pbXBvcnQgeyBJU2NoZWR1bGVUaW1lIH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBJU2V0dGluZ3MgfSBmcm9tICcuLi9zY2hlZHVsZS10aW1lLXBpY2tlci9zY2hlZHVsZS10aW1lLXBpY2tlci5jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTY2hlZHVsZVRpbWVNb2RhbElucHV0IHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGluaXRTZXR0aW5nczogSVNldHRpbmdzO1xuICAgIGluaXRWYWx1ZTogSVNjaGVkdWxlVGltZTtcbiAgICBleHRyYUNsYXNzZXM6IHN0cmluZztcbiAgICBvbkNvbmZpcm1Bc3luYzogKGRhdGE6IElTY2hlZHVsZVRpbWUpID0+IFByb21pc2U8YW55Pjtcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb2xwLWJzLXNjaGVkdWxlLXRpbWUtbW9kYWwnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zY2hlZHVsZS10aW1lLW1vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9zY2hlZHVsZS10aW1lLW1vZGFsLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTY2hlZHVsZVRpbWVNb2RhbENvbXBvbmVudFxuICAgIGV4dGVuZHMgT2JzZXJ2YWJsZU1vZGFsQWJzdHJhY3RDb21wb25lbnQ8SVNjaGVkdWxlVGltZU1vZGFsSW5wdXQsIElTY2hlZHVsZVRpbWU+XG4gICAgaW1wbGVtZW50cyBPbkluaXQsIElIYXNBbGVydEZlYXR1cmUsIElIYXNDaGlsZE1vZGFsIHtcblxuICAgIGZhU3Bpbm5lciA9IGZhU3Bpbm5lcjtcblxuICAgIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgPSAnJztcbiAgICBASW5wdXQoKSBpbml0U2V0dGluZ3M6IElTZXR0aW5ncztcbiAgICBASW5wdXQoKSBpbml0VmFsdWU6IElTY2hlZHVsZVRpbWU7XG4gICAgQElucHV0KCkgb25Db25maXJtQXN5bmM6IChkYXRhOiBJU2NoZWR1bGVUaW1lKSA9PiBQcm9taXNlPGFueT47XG4gICAgLy8gV2UgbmVlZCB0aGlzIG9uZSB0byBnZXQgdGhlIGluaXQgY2xhc3MuXG4gICAgQElucHV0KCkgZXh0cmFDbGFzc2VzOiBzdHJpbmc7XG5cbiAgICBvdXRwdXRWYWx1ZTogSVNjaGVkdWxlVGltZTtcbiAgICBpc1ZhbGlkOiBib29sZWFuO1xuXG4gICAgaXNTYXZpbmc6IGJvb2xlYW47XG4gICAgYWxlcnRQcm92aWRlciA9IG5ldyBBbGVydERlZmF1bHRJbXBsKCk7XG5cbiAgICBzaG93QmFja2Ryb3A6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IGJzTW9kYWxSZWY6IEJzTW9kYWxSZWYsXG4gICAgICAgIHByb3RlY3RlZCByZWFkb25seSBic01vZGFsU2VydmljZTogQnNNb2RhbFNlcnZpY2UpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBnZXQgYWxlcnRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hbGVydFByb3ZpZGVyLmRhdGE7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuY2xvc2VNb2RhbChudWxsKTtcbiAgICB9XG5cbiAgICB1cGRhdGVTY2hlZHVsZXIoZXZ0OiBJU2NoZWR1bGVUaW1lKSB7XG4gICAgICAgIHRoaXMub3V0cHV0VmFsdWUgPSBldnQ7XG4gICAgfVxuXG4gICAgdmFsaWRhdGVTY2hlZHVsZXIoZXZ0OiB7IHZhbGlkOiBib29sZWFuIH0pIHtcbiAgICAgICAgaWYgKGV2dCkge1xuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gZXZ0LnZhbGlkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlU3R5bGUoZXZ0OiBJQ2hpbGRNb2RhbFN0YXRlKSB7XG4gICAgICAgIGlmIChldnQgJiYgZXZ0Lm9wZW5lZCkge1xuICAgICAgICAgICAgY29uc3QgbmV3Q2xhc3NlcyA9IHRoaXMuZXh0cmFDbGFzc2VzID8gYCR7dGhpcy5leHRyYUNsYXNzZXN9IGhhcy1jaGlsZC1tb2RhbGAgOiAnaGFzLWNoaWxkLW1vZGFsJztcbiAgICAgICAgICAgIHRoaXMuYnNNb2RhbFJlZi5zZXRDbGFzcyhuZXdDbGFzc2VzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0NsYXNzZXMgPSB0aGlzLmV4dHJhQ2xhc3NlcyB8fCAnJztcbiAgICAgICAgICAgIHRoaXMuYnNNb2RhbFJlZi5zZXRDbGFzcyhuZXdDbGFzc2VzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGNvbmZpcm1Bc3luYygpIHtcbiAgICAgICAgdGhpcy5hbGVydFByb3ZpZGVyLmNsZWFuKCk7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKSB7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0UHJvdmlkZXIud2FybmluZygncG9scENyb25Kb2IuZ2VuZXJhbCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc1NhdmluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuYWxlcnRQcm92aWRlci5pbmZvKCdwb2xwQ3JvbkpvYi5tZXNzYWdlcy53b3JraW5nJyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vbkNvbmZpcm1Bc3luYykge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMub25Db25maXJtQXN5bmModGhpcy5vdXRwdXRWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwodGhpcy5vdXRwdXRWYWx1ZSk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0UHJvdmlkZXIuY2xlYW4oKTtcbiAgICAgICAgICAgIHRoaXMuYWxlcnRQcm92aWRlci5kYW5nZXIoJ3BvbHBDcm9uSm9iLmVycm9ycy5zb21ldGhpbmdXcm9uZycpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgdGhpcy5pc1NhdmluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCIgcG9scE1vZGFsRHJhZ2dhYmxlPlxuICAgIDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+e3t0aXRsZSB8IGNyb25Kb2JIeXBlclRyYW5zfX08L2g0PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxuICAgIDxwb2xwLWJzLXNjaGVkdWxlLXRpbWUtcGlja2VyIFtpbml0U2V0dGluZ3NdPVwiaW5pdFNldHRpbmdzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5pdFZhbHVlXT1cImluaXRWYWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNoaWxkU3RhdGVDaGFuZ2VkKT1cInVwZGF0ZVN0eWxlKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvblZhbGlkYXRpb24pPVwidmFsaWRhdGVTY2hlZHVsZXIoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uVmFsdWVDaGFuZ2VkKT1cInVwZGF0ZVNjaGVkdWxlcigkZXZlbnQpXCI+XG4gICAgPC9wb2xwLWJzLXNjaGVkdWxlLXRpbWUtcGlja2VyPlxuICAgIFxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGEgb2YgYWxlcnRzXCI+XG4gICAgICAgIDxhbGVydCBbdHlwZV09XCJhLnR5cGVcIiBbZGlzbWlzc09uVGltZW91dF09XCJhLnRpbWVvdXRcIj5cbiAgICAgICAgICAgIHt7YS5tZXNzYWdlIHwgY3JvbkpvYkh5cGVyVHJhbnN9fVxuICAgICAgICA8L2FsZXJ0PlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIFxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSBtZS0yXCIgKGNsaWNrKT1cImNsb3NlKClcIj5cbiAgICAgICAgICAgIHt7J3BvbHBDcm9uSm9iLmNsb3NlQnRuJyB8IGNyb25Kb2JIeXBlclRyYW5zfX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgKm5nSWY9XCJpc1ZhbGlkXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiY29uZmlybUFzeW5jKClcIj5cbiAgICAgICAgICAgIHt7J3BvbHBDcm9uSm9iLmNvbmZpcm1CdG4nIHwgY3JvbkpvYkh5cGVyVHJhbnN9fVxuICAgICAgICAgICAgPGZhLWljb24gW2ljb25dPVwiZmFTcGlubmVyXCIgW3NwaW5dPVwidHJ1ZVwiIGNsYXNzPVwibXMtMVwiICpuZ0lmPVwiaXNTYXZpbmdcIj48L2ZhLWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuPC9kaXY+XG4iXX0=