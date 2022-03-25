import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { MultiDateModalComponent } from './multi-date-modal/multi-date-modal.component';
import { ScheduleTimeModalComponent } from './schedule-time-modal/schedule-time-modal.component';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/modal";
var UtilsService = /** @class */ (function () {
    function UtilsService(_modalService) {
        this._modalService = _modalService;
    }
    UtilsService.prototype.showScheduleTimeEditorAsync = function (input) {
        var modalRef = this._modalService.show(ScheduleTimeModalComponent, {
            animated: true,
            ignoreBackdropClick: true,
            initialState: Object.assign({}, input),
            keyboard: false,
            class: 'modal-dialog-centered'
        });
        return modalRef.content.result.toPromise();
    };
    UtilsService.prototype.showMultiDateEditorAsync = function (input) {
        var modalRef = this._modalService.show(MultiDateModalComponent, {
            animated: true,
            ignoreBackdropClick: true,
            initialState: Object.assign({}, input),
            keyboard: false,
            class: 'modal-dialog-centered'
        });
        return modalRef.content.result.toPromise();
    };
    UtilsService.ctorParameters = function () { return [
        { type: BsModalService }
    ]; };
    UtilsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function UtilsService_Factory() { return new UtilsService(i0.ɵɵinject(i1.BsModalService)); }, token: UtilsService, providedIn: "root" });
    UtilsService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [BsModalService])
    ], UtilsService);
    return UtilsService;
}());
export { UtilsService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9jcm9uLWpvYi8iLCJzb3VyY2VzIjpbImxpYi91dGlscy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQXdCLHVCQUF1QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDOUcsT0FBTyxFQUEyQiwwQkFBMEIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDOzs7QUFLMUg7SUFFSSxzQkFBNkIsYUFBNkI7UUFBN0Isa0JBQWEsR0FBYixhQUFhLENBQWdCO0lBQUksQ0FBQztJQUUvRCxrREFBMkIsR0FBM0IsVUFBNEIsS0FBOEI7UUFDdEQsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLEVBQUU7WUFDakUsUUFBUSxFQUFFLElBQUk7WUFDZCxtQkFBbUIsRUFBRSxJQUFJO1lBQ3pCLFlBQVksRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUM7WUFDdEMsUUFBUSxFQUFFLEtBQUs7WUFDZixLQUFLLEVBQUUsdUJBQXVCO1NBQ2pDLENBQUMsQ0FBQztRQUVILE9BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVELCtDQUF3QixHQUF4QixVQUF5QixLQUEyQjtRQUNoRCxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtZQUM5RCxRQUFRLEVBQUUsSUFBSTtZQUNkLG1CQUFtQixFQUFFLElBQUk7WUFDekIsWUFBWSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQztZQUN0QyxRQUFRLEVBQUUsS0FBSztZQUNmLEtBQUssRUFBRSx1QkFBdUI7U0FDakMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMvQyxDQUFDOztnQkF4QjJDLGNBQWM7OztJQUZqRCxZQUFZO1FBSHhCLFVBQVUsQ0FBQztZQUNSLFVBQVUsRUFBRSxNQUFNO1NBQ3JCLENBQUM7eUNBRzhDLGNBQWM7T0FGakQsWUFBWSxDQTRCeEI7dUJBcENEO0NBb0NDLEFBNUJELElBNEJDO1NBNUJZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCc01vZGFsU2VydmljZSB9IGZyb20gJ25neC1ib290c3RyYXAvbW9kYWwnO1xuaW1wb3J0IHsgSU11bHRpRGF0ZU1vZGFsSW5wdXQsIE11bHRpRGF0ZU1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9tdWx0aS1kYXRlLW1vZGFsL211bHRpLWRhdGUtbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IElTY2hlZHVsZVRpbWVNb2RhbElucHV0LCBTY2hlZHVsZVRpbWVNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vc2NoZWR1bGUtdGltZS1tb2RhbC9zY2hlZHVsZS10aW1lLW1vZGFsLmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVXRpbHNTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgX21vZGFsU2VydmljZTogQnNNb2RhbFNlcnZpY2UpIHsgfVxuXG4gICAgc2hvd1NjaGVkdWxlVGltZUVkaXRvckFzeW5jKGlucHV0OiBJU2NoZWR1bGVUaW1lTW9kYWxJbnB1dCkge1xuICAgICAgICBjb25zdCBtb2RhbFJlZiA9IHRoaXMuX21vZGFsU2VydmljZS5zaG93KFNjaGVkdWxlVGltZU1vZGFsQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBhbmltYXRlZDogdHJ1ZSxcbiAgICAgICAgICAgIGlnbm9yZUJhY2tkcm9wQ2xpY2s6IHRydWUsXG4gICAgICAgICAgICBpbml0aWFsU3RhdGU6IE9iamVjdC5hc3NpZ24oe30sIGlucHV0KSxcbiAgICAgICAgICAgIGtleWJvYXJkOiBmYWxzZSxcbiAgICAgICAgICAgIGNsYXNzOiAnbW9kYWwtZGlhbG9nLWNlbnRlcmVkJ1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbW9kYWxSZWYuY29udGVudC5yZXN1bHQudG9Qcm9taXNlKCk7XG4gICAgfVxuXG4gICAgc2hvd011bHRpRGF0ZUVkaXRvckFzeW5jKGlucHV0OiBJTXVsdGlEYXRlTW9kYWxJbnB1dCkge1xuICAgICAgICBjb25zdCBtb2RhbFJlZiA9IHRoaXMuX21vZGFsU2VydmljZS5zaG93KE11bHRpRGF0ZU1vZGFsQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBhbmltYXRlZDogdHJ1ZSxcbiAgICAgICAgICAgIGlnbm9yZUJhY2tkcm9wQ2xpY2s6IHRydWUsXG4gICAgICAgICAgICBpbml0aWFsU3RhdGU6IE9iamVjdC5hc3NpZ24oe30sIGlucHV0KSxcbiAgICAgICAgICAgIGtleWJvYXJkOiBmYWxzZSxcbiAgICAgICAgICAgIGNsYXNzOiAnbW9kYWwtZGlhbG9nLWNlbnRlcmVkJ1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbW9kYWxSZWYuY29udGVudC5yZXN1bHQudG9Qcm9taXNlKCk7XG4gICAgfVxuXG59XG4iXX0=