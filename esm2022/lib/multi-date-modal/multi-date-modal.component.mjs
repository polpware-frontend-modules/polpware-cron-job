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
    const a_r1 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("type", a_r1.type)("dismissOnTimeout", a_r1.timeout);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 3, a_r1.message), " ");
} }
function MultiDateModalComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵlistener("click", function MultiDateModalComponent_button_12_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.confirm()); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "cronJobHyperTrans");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance();
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
    static { this.ɵfac = function MultiDateModalComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MultiDateModalComponent)(i0.ɵɵdirectiveInject(i1.BsModalRef), i0.ɵɵdirectiveInject(i1.BsModalService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MultiDateModalComponent, selectors: [["polp-bs-multi-date-modal"]], inputs: { title: "title", initValue: "initValue" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 13, vars: 9, consts: [["polpModalDraggable", "", 1, "modal-header"], [1, "modal-title"], [1, "modal-body"], [3, "onValidation", "onValueChanged", "initValue"], [4, "ngFor", "ngForOf"], [1, "modal-footer"], [1, "d-flex", "justify-content-end"], [1, "btn", "btn-secondary", "me-2", 3, "click"], ["type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"], [3, "type", "dismissOnTimeout"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function MultiDateModalComponent_Template(rf, ctx) { if (rf & 1) {
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
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.alerts);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(11, 7, "polpCronJob.cancelBtn"), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.isValid);
        } }, dependencies: [i2.NgForOf, i2.NgIf, i3.AlertComponent, i4.polpModalDraggableDirective, i5.MultiDatePickerComponent, i6.CronJobHyperTransPipe] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MultiDateModalComponent, [{
        type: Component,
        args: [{ selector: 'polp-bs-multi-date-modal', template: "<div class=\"modal-header\" polpModalDraggable>\n    <h4 class=\"modal-title\">{{title | cronJobHyperTrans}}</h4>\n</div>\n<div class=\"modal-body\">\n    <polp-bs-multi-date-picker [initValue]=\"initValue\"\n                               (onValidation)=\"validate($event)\"\n                               (onValueChanged)=\"updateValue($event)\">\n    </polp-bs-multi-date-picker>\n    \n    <ng-container *ngFor=\"let a of alerts\">\n        <alert [type]=\"a.type\" [dismissOnTimeout]=\"a.timeout\">\n            {{a.message | cronJobHyperTrans}}\n        </alert>\n    </ng-container>\n    \n</div>\n<div class=\"modal-footer\">\n    <div class=\"d-flex justify-content-end\">\n        <button class=\"btn btn-secondary me-2\" (click)=\"close()\">\n            {{'polpCronJob.cancelBtn' | cronJobHyperTrans}}\n        </button>\n        <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"isValid\"\n                (click)=\"confirm()\">\n            {{'polpCronJob.confirmBtn' | cronJobHyperTrans}}\n        </button>\n    </div>\n</div>\n" }]
    }], () => [{ type: i1.BsModalRef }, { type: i1.BsModalService }], { title: [{
            type: Input
        }], initValue: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MultiDateModalComponent, { className: "MultiDateModalComponent", filePath: "lib\\multi-date-modal\\multi-date-modal.component.ts", lineNumber: 17 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktZGF0ZS1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9jcm9uLWpvYi9zcmMvbGliL211bHRpLWRhdGUtbW9kYWwvbXVsdGktZGF0ZS1tb2RhbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9jcm9uLWpvYi9zcmMvbGliL211bHRpLWRhdGUtbW9kYWwvbXVsdGktZGF0ZS1tb2RhbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQW9CLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7OztJQ09yRSw2QkFBdUM7SUFDbkMsZ0NBQXNEO0lBQ2xELFlBQ0o7O0lBQUEsaUJBQVE7Ozs7SUFGRCxjQUFlO0lBQUMsQUFBaEIsZ0NBQWUsa0NBQStCO0lBQ2pELGNBQ0o7SUFESSxtRUFDSjs7OztJQVNBLGtDQUM0QjtJQUFwQix1TEFBUyxnQkFBUyxLQUFDO0lBQ3ZCLFlBQ0o7O0lBQUEsaUJBQVM7O0lBREwsY0FDSjtJQURJLCtFQUNKOztBRFJSLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxnQ0FBZ0U7SUFXekcsWUFDb0IsVUFBc0IsRUFDbkIsY0FBOEI7UUFDakQsS0FBSyxFQUFFLENBQUM7UUFGUSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ25CLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVY1QyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLGNBQVMsR0FBYSxFQUFFLENBQUM7UUFHbEMsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUV6QixrQkFBYSxHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztJQU12QyxDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ04sT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7SUFFRCxLQUFLO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsV0FBVyxDQUFDLEdBQThDO1FBQ3RELElBQUksR0FBRyxFQUFFLENBQUM7WUFDTixJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0MsQ0FBQztJQUNMLENBQUM7SUFFRCxRQUFRLENBQUMsR0FBdUI7UUFDNUIsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNOLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUM3QixDQUFDO0lBQ0wsQ0FBQztJQUVELE9BQU87UUFDSCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNmLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7SUFDTCxDQUFDO3dIQTVDUSx1QkFBdUI7b0VBQXZCLHVCQUF1QjtZQ2ZoQyxBQURKLDhCQUE2QyxZQUNqQjtZQUFBLFlBQTZCOztZQUN6RCxBQUR5RCxpQkFBSyxFQUN4RDtZQUVGLEFBREosOEJBQXdCLG1DQUc4QztZQUF2QyxBQURBLDJJQUFnQixvQkFBZ0IsSUFBQyxrSUFDZix1QkFBbUIsSUFBQztZQUNqRSxpQkFBNEI7WUFFNUIsMEZBQXVDO1lBTTNDLGlCQUFNO1lBR0UsQUFESixBQURKLDhCQUEwQixhQUNrQixnQkFDcUI7WUFBbEIsb0dBQVMsV0FBTyxJQUFDO1lBQ3BELGFBQ0o7O1lBQUEsaUJBQVM7WUFDVCxnRkFDNEI7WUFJcEMsQUFESSxpQkFBTSxFQUNKOztZQXpCc0IsZUFBNkI7WUFBN0IscURBQTZCO1lBRzFCLGVBQXVCO1lBQXZCLHlDQUF1QjtZQUt0QixjQUFTO1lBQVQsb0NBQVM7WUFVN0IsZUFDSjtZQURJLCtFQUNKO1lBQytDLGVBQWE7WUFBYixrQ0FBYTs7O2lGREx2RCx1QkFBdUI7Y0FMbkMsU0FBUzsyQkFDSSwwQkFBMEI7d0VBTzNCLEtBQUs7a0JBQWIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7O2tGQUpHLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZU1vZGFsQWJzdHJhY3RDb21wb25lbnQgfSBmcm9tICdAcG9scHdhcmUvYnMtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBBbGVydERlZmF1bHRJbXBsLCBJSGFzQWxlcnRGZWF0dXJlIH0gZnJvbSAnQHBvbHB3YXJlL25neC1hbGVydCc7XG5pbXBvcnQgeyBCc01vZGFsUmVmLCBCc01vZGFsU2VydmljZSB9IGZyb20gJ25neC1ib290c3RyYXAvbW9kYWwnO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgSU11bHRpRGF0ZU1vZGFsSW5wdXQge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgaW5pdFZhbHVlOiBzdHJpbmdbXTtcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb2xwLWJzLW11bHRpLWRhdGUtbW9kYWwnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9tdWx0aS1kYXRlLW1vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9tdWx0aS1kYXRlLW1vZGFsLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNdWx0aURhdGVNb2RhbENvbXBvbmVudCBleHRlbmRzIE9ic2VydmFibGVNb2RhbEFic3RyYWN0Q29tcG9uZW50PElNdWx0aURhdGVNb2RhbElucHV0LCBzdHJpbmdbXT5cbiAgICBpbXBsZW1lbnRzIE9uSW5pdCwgSUhhc0FsZXJ0RmVhdHVyZSB7XG5cbiAgICBASW5wdXQoKSB0aXRsZTogc3RyaW5nID0gJyc7XG4gICAgQElucHV0KCkgaW5pdFZhbHVlOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgb3V0cHV0VmFsdWU6IHN0cmluZ1tdO1xuICAgIGlzVmFsaWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGFsZXJ0UHJvdmlkZXIgPSBuZXcgQWxlcnREZWZhdWx0SW1wbCgpO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBic01vZGFsUmVmOiBCc01vZGFsUmVmLFxuICAgICAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgYnNNb2RhbFNlcnZpY2U6IEJzTW9kYWxTZXJ2aWNlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgZ2V0IGFsZXJ0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxlcnRQcm92aWRlci5kYXRhO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLmNsb3NlTW9kYWwobnVsbCk7XG4gICAgfVxuXG4gICAgdXBkYXRlVmFsdWUoZXZ0OiBBcnJheTx7IGRpc3BsYXk6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB9Pikge1xuICAgICAgICBpZiAoZXZ0KSB7XG4gICAgICAgICAgICB0aGlzLm91dHB1dFZhbHVlID0gZXZ0Lm1hcChhID0+IGEudmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFsaWRhdGUoZXZ0OiB7IHZhbGlkOiBib29sZWFuIH0pIHtcbiAgICAgICAgaWYgKGV2dCkge1xuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gZXZ0LnZhbGlkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uZmlybSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNWYWxpZCkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKHRoaXMub3V0cHV0VmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIiBwb2xwTW9kYWxEcmFnZ2FibGU+XG4gICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIj57e3RpdGxlIHwgY3JvbkpvYkh5cGVyVHJhbnN9fTwvaDQ+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG4gICAgPHBvbHAtYnMtbXVsdGktZGF0ZS1waWNrZXIgW2luaXRWYWx1ZV09XCJpbml0VmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvblZhbGlkYXRpb24pPVwidmFsaWRhdGUoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uVmFsdWVDaGFuZ2VkKT1cInVwZGF0ZVZhbHVlKCRldmVudClcIj5cbiAgICA8L3BvbHAtYnMtbXVsdGktZGF0ZS1waWNrZXI+XG4gICAgXG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgYSBvZiBhbGVydHNcIj5cbiAgICAgICAgPGFsZXJ0IFt0eXBlXT1cImEudHlwZVwiIFtkaXNtaXNzT25UaW1lb3V0XT1cImEudGltZW91dFwiPlxuICAgICAgICAgICAge3thLm1lc3NhZ2UgfCBjcm9uSm9iSHlwZXJUcmFuc319XG4gICAgICAgIDwvYWxlcnQ+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgXG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IG1lLTJcIiAoY2xpY2spPVwiY2xvc2UoKVwiPlxuICAgICAgICAgICAge3sncG9scENyb25Kb2IuY2FuY2VsQnRuJyB8IGNyb25Kb2JIeXBlclRyYW5zfX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgKm5nSWY9XCJpc1ZhbGlkXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiY29uZmlybSgpXCI+XG4gICAgICAgICAgICB7eydwb2xwQ3JvbkpvYi5jb25maXJtQnRuJyB8IGNyb25Kb2JIeXBlclRyYW5zfX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==