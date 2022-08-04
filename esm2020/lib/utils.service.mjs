import { Injectable } from '@angular/core';
import { ScheduleTimeModalComponent } from './schedule-time-modal/schedule-time-modal.component';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/modal";
export class UtilsService {
    constructor(_modalService) {
        this._modalService = _modalService;
    }
    showScheduleTimeEditorAsync(input) {
        const modalRef = this._modalService.show(ScheduleTimeModalComponent, {
            animated: true,
            ignoreBackdropClick: true,
            initialState: Object.assign({}, input),
            keyboard: false,
            class: 'modal-dialog-centered'
        });
        return modalRef.content.result.toPromise();
    }
}
UtilsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: UtilsService, deps: [{ token: i1.BsModalService }], target: i0.ɵɵFactoryTarget.Injectable });
UtilsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: UtilsService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: UtilsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.BsModalService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BvbHB3YXJlL2Nyb24tam9iL3NyYy9saWIvdXRpbHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBMkIsMEJBQTBCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQzs7O0FBSzFILE1BQU0sT0FBTyxZQUFZO0lBRXJCLFlBQTZCLGFBQTZCO1FBQTdCLGtCQUFhLEdBQWIsYUFBYSxDQUFnQjtJQUFJLENBQUM7SUFFL0QsMkJBQTJCLENBQUMsS0FBOEI7UUFDdEQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLEVBQUU7WUFDakUsUUFBUSxFQUFFLElBQUk7WUFDZCxtQkFBbUIsRUFBRSxJQUFJO1lBQ3pCLFlBQVksRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUM7WUFDdEMsUUFBUSxFQUFFLEtBQUs7WUFDZixLQUFLLEVBQUUsdUJBQXVCO1NBQ2pDLENBQUMsQ0FBQztRQUVILE9BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDL0MsQ0FBQzs7MEdBZFEsWUFBWTs4R0FBWixZQUFZLGNBRlQsTUFBTTs0RkFFVCxZQUFZO2tCQUh4QixVQUFVO21CQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJzTW9kYWxTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9tb2RhbCc7XG5pbXBvcnQgeyBJU2NoZWR1bGVUaW1lTW9kYWxJbnB1dCwgU2NoZWR1bGVUaW1lTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL3NjaGVkdWxlLXRpbWUtbW9kYWwvc2NoZWR1bGUtdGltZS1tb2RhbC5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFV0aWxzU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF9tb2RhbFNlcnZpY2U6IEJzTW9kYWxTZXJ2aWNlKSB7IH1cblxuICAgIHNob3dTY2hlZHVsZVRpbWVFZGl0b3JBc3luYyhpbnB1dDogSVNjaGVkdWxlVGltZU1vZGFsSW5wdXQpIHtcbiAgICAgICAgY29uc3QgbW9kYWxSZWYgPSB0aGlzLl9tb2RhbFNlcnZpY2Uuc2hvdyhTY2hlZHVsZVRpbWVNb2RhbENvbXBvbmVudCwge1xuICAgICAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgICAgICBpZ25vcmVCYWNrZHJvcENsaWNrOiB0cnVlLFxuICAgICAgICAgICAgaW5pdGlhbFN0YXRlOiBPYmplY3QuYXNzaWduKHt9LCBpbnB1dCksXG4gICAgICAgICAgICBrZXlib2FyZDogZmFsc2UsXG4gICAgICAgICAgICBjbGFzczogJ21vZGFsLWRpYWxvZy1jZW50ZXJlZCdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG1vZGFsUmVmLmNvbnRlbnQucmVzdWx0LnRvUHJvbWlzZSgpO1xuICAgIH1cblxufVxuIl19