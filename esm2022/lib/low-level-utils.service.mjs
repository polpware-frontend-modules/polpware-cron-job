import { Injectable } from '@angular/core';
import { MultiDateModalComponent } from './multi-date-modal/multi-date-modal.component';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/modal";
export class LowLevelUtilsService {
    constructor(_modalService) {
        this._modalService = _modalService;
    }
    showMultiDateEditorAsync(input) {
        const modalRef = this._modalService.show(MultiDateModalComponent, {
            animated: true,
            ignoreBackdropClick: true,
            initialState: Object.assign({}, input),
            keyboard: false,
            class: 'modal-dialog-centered'
        });
        return modalRef.content.result.toPromise();
    }
    static { this.ɵfac = function LowLevelUtilsService_Factory(t) { return new (t || LowLevelUtilsService)(i0.ɵɵinject(i1.BsModalService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LowLevelUtilsService, factory: LowLevelUtilsService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LowLevelUtilsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.BsModalService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG93LWxldmVsLXV0aWxzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9jcm9uLWpvYi9zcmMvbGliL2xvdy1sZXZlbC11dGlscy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUF3Qix1QkFBdUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDOzs7QUFLOUcsTUFBTSxPQUFPLG9CQUFvQjtJQUU3QixZQUE2QixhQUE2QjtRQUE3QixrQkFBYSxHQUFiLGFBQWEsQ0FBZ0I7SUFBSSxDQUFDO0lBRS9ELHdCQUF3QixDQUFDLEtBQTJCO1FBQ2hELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFO1lBQzlELFFBQVEsRUFBRSxJQUFJO1lBQ2QsbUJBQW1CLEVBQUUsSUFBSTtZQUN6QixZQUFZLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDO1lBQ3RDLFFBQVEsRUFBRSxLQUFLO1lBQ2YsS0FBSyxFQUFFLHVCQUF1QjtTQUNqQyxDQUFDLENBQUM7UUFFSCxPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQy9DLENBQUM7cUZBZFEsb0JBQW9CO3VFQUFwQixvQkFBb0IsV0FBcEIsb0JBQW9CLG1CQUZqQixNQUFNOztpRkFFVCxvQkFBb0I7Y0FIaEMsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnNNb2RhbFNlcnZpY2UgfSBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsJztcbmltcG9ydCB7IElNdWx0aURhdGVNb2RhbElucHV0LCBNdWx0aURhdGVNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vbXVsdGktZGF0ZS1tb2RhbC9tdWx0aS1kYXRlLW1vZGFsLmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTG93TGV2ZWxVdGlsc1NlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfbW9kYWxTZXJ2aWNlOiBCc01vZGFsU2VydmljZSkgeyB9XG5cbiAgICBzaG93TXVsdGlEYXRlRWRpdG9yQXN5bmMoaW5wdXQ6IElNdWx0aURhdGVNb2RhbElucHV0KSB7XG4gICAgICAgIGNvbnN0IG1vZGFsUmVmID0gdGhpcy5fbW9kYWxTZXJ2aWNlLnNob3coTXVsdGlEYXRlTW9kYWxDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgICAgICAgICAgaWdub3JlQmFja2Ryb3BDbGljazogdHJ1ZSxcbiAgICAgICAgICAgIGluaXRpYWxTdGF0ZTogT2JqZWN0LmFzc2lnbih7fSwgaW5wdXQpLFxuICAgICAgICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxuICAgICAgICAgICAgY2xhc3M6ICdtb2RhbC1kaWFsb2ctY2VudGVyZWQnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBtb2RhbFJlZi5jb250ZW50LnJlc3VsdC50b1Byb21pc2UoKTtcbiAgICB9XG5cbn1cbiJdfQ==