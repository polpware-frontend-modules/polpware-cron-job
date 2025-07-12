import { Component, Input } from '@angular/core';
import { ObservableModalAbstractComponent } from '@polpware/bs-components';
import { AlertDefaultImpl } from '@polpware/ngx-alert';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/modal";
import * as i2 from "@angular/common";
import * as i3 from "ngx-bootstrap/alert";
import * as i4 from "@polpware/modal-directives";
import * as i5 from "../multi-date-picker/multi-date-picker.component";
import * as i6 from "../cron-job-hyper-trans.pipe";
function MultiDateModalComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
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
function MultiDateModalComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵlistener("click", function MultiDateModalComponent_button_12_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.confirm()); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "cronJobHyperTrans");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "polpCronJob.confirmBtn"), " ");
} }
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
    static { this.ɵfac = function MultiDateModalComponent_Factory(t) { return new (t || MultiDateModalComponent)(i0.ɵɵdirectiveInject(i1.BsModalRef), i0.ɵɵdirectiveInject(i1.BsModalService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MultiDateModalComponent, selectors: [["polp-bs-multi-date-modal"]], inputs: { title: "title", initValue: "initValue" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 13, vars: 9, consts: [["polpModalDraggable", "", 1, "modal-header"], [1, "modal-title"], [1, "modal-body"], [3, "initValue", "onValidation", "onValueChanged"], [4, "ngFor", "ngForOf"], [1, "modal-footer"], [1, "d-flex", "justify-content-end"], [1, "btn", "btn-secondary", "me-2", 3, "click"], ["type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"], [3, "type", "dismissOnTimeout"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function MultiDateModalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "h4", 1);
            i0.ɵɵtext(2);
            i0.ɵɵpipe(3, "cronJobHyperTrans");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(4, "div", 2)(5, "polp-bs-multi-date-picker", 3);
            i0.ɵɵlistener("onValidation", function MultiDateModalComponent_Template_polp_bs_multi_date_picker_onValidation_5_listener($event) { return ctx.validate($event); })("onValueChanged", function MultiDateModalComponent_Template_polp_bs_multi_date_picker_onValueChanged_5_listener($event) { return ctx.updateValue($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(6, MultiDateModalComponent_ng_container_6_Template, 4, 5, "ng-container", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 5)(8, "div", 6)(9, "button", 7);
            i0.ɵɵlistener("click", function MultiDateModalComponent_Template_button_click_9_listener() { return ctx.close(); });
            i0.ɵɵtext(10);
            i0.ɵɵpipe(11, "cronJobHyperTrans");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(12, MultiDateModalComponent_button_12_Template, 3, 3, "button", 8);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, ctx.title));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("initValue", ctx.initValue);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.alerts);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(11, 7, "polpCronJob.cancelBtn"), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.isValid);
        } }, dependencies: [i2.NgForOf, i2.NgIf, i3.AlertComponent, i4.polpModalDraggableDirective, i5.MultiDatePickerComponent, i6.CronJobHyperTransPipe] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MultiDateModalComponent, [{
        type: Component,
        args: [{ selector: 'polp-bs-multi-date-modal', template: "<div class=\"modal-header\" polpModalDraggable>\n    <h4 class=\"modal-title\">{{title | cronJobHyperTrans}}</h4>\n</div>\n<div class=\"modal-body\">\n    <polp-bs-multi-date-picker [initValue]=\"initValue\"\n                               (onValidation)=\"validate($event)\"\n                               (onValueChanged)=\"updateValue($event)\">\n    </polp-bs-multi-date-picker>\n    \n    <ng-container *ngFor=\"let a of alerts\">\n        <alert [type]=\"a.type\" [dismissOnTimeout]=\"a.timeout\">\n            {{a.message | cronJobHyperTrans}}\n        </alert>\n    </ng-container>\n    \n</div>\n<div class=\"modal-footer\">\n    <div class=\"d-flex justify-content-end\">\n        <button class=\"btn btn-secondary me-2\" (click)=\"close()\">\n            {{'polpCronJob.cancelBtn' | cronJobHyperTrans}}\n        </button>\n        <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"isValid\"\n                (click)=\"confirm()\">\n            {{'polpCronJob.confirmBtn' | cronJobHyperTrans}}\n        </button>\n    </div>\n</div>\n" }]
    }], function () { return [{ type: i1.BsModalRef }, { type: i1.BsModalService }]; }, { title: [{
            type: Input
        }], initValue: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktZGF0ZS1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9jcm9uLWpvYi9zcmMvbGliL211bHRpLWRhdGUtbW9kYWwvbXVsdGktZGF0ZS1tb2RhbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9jcm9uLWpvYi9zcmMvbGliL211bHRpLWRhdGUtbW9kYWwvbXVsdGktZGF0ZS1tb2RhbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQW9CLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7OztJQ09yRSw2QkFBdUM7SUFDbkMsZ0NBQXNEO0lBQ2xELFlBQ0o7O0lBQUEsaUJBQVE7SUFDWiwwQkFBZTs7O0lBSEosZUFBZTtJQUFmLGdDQUFlLGtDQUFBO0lBQ2xCLGVBQ0o7SUFESSxtRUFDSjs7OztJQVNBLGtDQUM0QjtJQUFwQix3S0FBUyxlQUFBLGdCQUFTLENBQUEsSUFBQztJQUN2QixZQUNKOztJQUFBLGlCQUFTOztJQURMLGVBQ0o7SUFESSwrRUFDSjs7QURSUixNQUFNLE9BQU8sdUJBQXdCLFNBQVEsZ0NBQWdFO0lBV3pHLFlBQ29CLFVBQXNCLEVBQ25CLGNBQThCO1FBQ2pELEtBQUssRUFBRSxDQUFDO1FBRlEsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNuQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFWNUMsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixjQUFTLEdBQWEsRUFBRSxDQUFDO1FBR2xDLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFFekIsa0JBQWEsR0FBRyxJQUFJLGdCQUFnQixFQUFFLENBQUM7SUFNdkMsQ0FBQztJQUVELElBQUksTUFBTTtRQUNOLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7SUFDbkMsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDO0lBRUQsS0FBSztRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELFdBQVcsQ0FBQyxHQUE4QztRQUN0RCxJQUFJLEdBQUcsRUFBRTtZQUNMLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM1QztJQUNMLENBQUM7SUFFRCxRQUFRLENBQUMsR0FBdUI7UUFDNUIsSUFBSSxHQUFHLEVBQUU7WUFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7U0FDNUI7SUFDTCxDQUFDO0lBRUQsT0FBTztRQUNILElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3JDO0lBQ0wsQ0FBQzt3RkE1Q1EsdUJBQXVCO29FQUF2Qix1QkFBdUI7WUNoQnBDLDhCQUE2QyxZQUFBO1lBQ2pCLFlBQTZCOztZQUFBLGlCQUFLLEVBQUE7WUFFOUQsOEJBQXdCLG1DQUFBO1lBRU8sMklBQWdCLG9CQUFnQixJQUFDLGtJQUNmLHVCQUFtQixJQURKO1lBRTVELGlCQUE0QjtZQUU1QiwwRkFJZTtZQUVuQixpQkFBTTtZQUNOLDhCQUEwQixhQUFBLGdCQUFBO1lBRXFCLG9HQUFTLFdBQU8sSUFBQztZQUNwRCxhQUNKOztZQUFBLGlCQUFTO1lBQ1QsZ0ZBR1M7WUFDYixpQkFBTSxFQUFBOztZQXhCa0IsZUFBNkI7WUFBN0IscURBQTZCO1lBRzFCLGVBQXVCO1lBQXZCLHlDQUF1QjtZQUt0QixlQUFTO1lBQVQsb0NBQVM7WUFVN0IsZUFDSjtZQURJLCtFQUNKO1lBQytDLGVBQWE7WUFBYixrQ0FBYTs7O3VGREx2RCx1QkFBdUI7Y0FMbkMsU0FBUzsyQkFDSSwwQkFBMEI7MEZBTzNCLEtBQUs7a0JBQWIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGVNb2RhbEFic3RyYWN0Q29tcG9uZW50IH0gZnJvbSAnQHBvbHB3YXJlL2JzLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQWxlcnREZWZhdWx0SW1wbCwgSUhhc0FsZXJ0RmVhdHVyZSB9IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtYWxlcnQnO1xuaW1wb3J0IHsgQnNNb2RhbFJlZiwgQnNNb2RhbFNlcnZpY2UgfSBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsJztcblxuXG5leHBvcnQgaW50ZXJmYWNlIElNdWx0aURhdGVNb2RhbElucHV0IHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGluaXRWYWx1ZTogc3RyaW5nW107XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncG9scC1icy1tdWx0aS1kYXRlLW1vZGFsJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbXVsdGktZGF0ZS1tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbXVsdGktZGF0ZS1tb2RhbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTXVsdGlEYXRlTW9kYWxDb21wb25lbnQgZXh0ZW5kcyBPYnNlcnZhYmxlTW9kYWxBYnN0cmFjdENvbXBvbmVudDxJTXVsdGlEYXRlTW9kYWxJbnB1dCwgc3RyaW5nW10+XG4gICAgaW1wbGVtZW50cyBPbkluaXQsIElIYXNBbGVydEZlYXR1cmUge1xuXG4gICAgQElucHV0KCkgdGl0bGU6IHN0cmluZyA9ICcnO1xuICAgIEBJbnB1dCgpIGluaXRWYWx1ZTogc3RyaW5nW10gPSBbXTtcblxuICAgIG91dHB1dFZhbHVlOiBzdHJpbmdbXTtcbiAgICBpc1ZhbGlkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBhbGVydFByb3ZpZGVyID0gbmV3IEFsZXJ0RGVmYXVsdEltcGwoKTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgYnNNb2RhbFJlZjogQnNNb2RhbFJlZixcbiAgICAgICAgcHJvdGVjdGVkIHJlYWRvbmx5IGJzTW9kYWxTZXJ2aWNlOiBCc01vZGFsU2VydmljZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGdldCBhbGVydHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFsZXJ0UHJvdmlkZXIuZGF0YTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5jbG9zZU1vZGFsKG51bGwpO1xuICAgIH1cblxuICAgIHVwZGF0ZVZhbHVlKGV2dDogQXJyYXk8eyBkaXNwbGF5OiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfT4pIHtcbiAgICAgICAgaWYgKGV2dCkge1xuICAgICAgICAgICAgdGhpcy5vdXRwdXRWYWx1ZSA9IGV2dC5tYXAoYSA9PiBhLnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhbGlkYXRlKGV2dDogeyB2YWxpZDogYm9vbGVhbiB9KSB7XG4gICAgICAgIGlmIChldnQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IGV2dC52YWxpZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbmZpcm0oKSB7XG4gICAgICAgIGlmICh0aGlzLmlzVmFsaWQpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbCh0aGlzLm91dHB1dFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG4iLCI8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCIgcG9scE1vZGFsRHJhZ2dhYmxlPlxuICAgIDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+e3t0aXRsZSB8IGNyb25Kb2JIeXBlclRyYW5zfX08L2g0PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxuICAgIDxwb2xwLWJzLW11bHRpLWRhdGUtcGlja2VyIFtpbml0VmFsdWVdPVwiaW5pdFZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25WYWxpZGF0aW9uKT1cInZhbGlkYXRlKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvblZhbHVlQ2hhbmdlZCk9XCJ1cGRhdGVWYWx1ZSgkZXZlbnQpXCI+XG4gICAgPC9wb2xwLWJzLW11bHRpLWRhdGUtcGlja2VyPlxuICAgIFxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGEgb2YgYWxlcnRzXCI+XG4gICAgICAgIDxhbGVydCBbdHlwZV09XCJhLnR5cGVcIiBbZGlzbWlzc09uVGltZW91dF09XCJhLnRpbWVvdXRcIj5cbiAgICAgICAgICAgIHt7YS5tZXNzYWdlIHwgY3JvbkpvYkh5cGVyVHJhbnN9fVxuICAgICAgICA8L2FsZXJ0PlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIFxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSBtZS0yXCIgKGNsaWNrKT1cImNsb3NlKClcIj5cbiAgICAgICAgICAgIHt7J3BvbHBDcm9uSm9iLmNhbmNlbEJ0bicgfCBjcm9uSm9iSHlwZXJUcmFuc319XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiICpuZ0lmPVwiaXNWYWxpZFwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImNvbmZpcm0oKVwiPlxuICAgICAgICAgICAge3sncG9scENyb25Kb2IuY29uZmlybUJ0bicgfCBjcm9uSm9iSHlwZXJUcmFuc319XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuPC9kaXY+XG4iXX0=