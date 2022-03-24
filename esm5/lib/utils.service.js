import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9jcm9uLWpvYi8iLCJzb3VyY2VzIjpbImxpYi91dGlscy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQWUsMEJBQTBCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQzs7O0FBSzlHO0lBRUksc0JBQTZCLGFBQTZCO1FBQTdCLGtCQUFhLEdBQWIsYUFBYSxDQUFnQjtJQUFJLENBQUM7SUFFL0Qsa0RBQTJCLEdBQTNCLFVBQTRCLEtBQWtCO1FBQzFDLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLDBCQUEwQixFQUFFO1lBQ2pFLFFBQVEsRUFBRSxJQUFJO1lBQ2QsbUJBQW1CLEVBQUUsSUFBSTtZQUN6QixZQUFZLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDO1lBQ3RDLFFBQVEsRUFBRSxLQUFLO1lBQ2YsS0FBSyxFQUFFLHVCQUF1QjtTQUNqQyxDQUFDLENBQUM7UUFFSCxPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQy9DLENBQUM7O2dCQVoyQyxjQUFjOzs7SUFGakQsWUFBWTtRQUh4QixVQUFVLENBQUM7WUFDUixVQUFVLEVBQUUsTUFBTTtTQUNyQixDQUFDO3lDQUc4QyxjQUFjO09BRmpELFlBQVksQ0FnQnhCO3VCQXZCRDtDQXVCQyxBQWhCRCxJQWdCQztTQWhCWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnNNb2RhbFNlcnZpY2UgfSBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsJztcbmltcG9ydCB7IElNb2RhbElucHV0LCBTY2hlZHVsZVRpbWVNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vc2NoZWR1bGUtdGltZS1tb2RhbC9zY2hlZHVsZS10aW1lLW1vZGFsLmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVXRpbHNTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgX21vZGFsU2VydmljZTogQnNNb2RhbFNlcnZpY2UpIHsgfVxuXG4gICAgc2hvd1NjaGVkdWxlVGltZUVkaXRvckFzeW5jKGlucHV0OiBJTW9kYWxJbnB1dCkge1xuICAgICAgICBjb25zdCBtb2RhbFJlZiA9IHRoaXMuX21vZGFsU2VydmljZS5zaG93KFNjaGVkdWxlVGltZU1vZGFsQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBhbmltYXRlZDogdHJ1ZSxcbiAgICAgICAgICAgIGlnbm9yZUJhY2tkcm9wQ2xpY2s6IHRydWUsXG4gICAgICAgICAgICBpbml0aWFsU3RhdGU6IE9iamVjdC5hc3NpZ24oe30sIGlucHV0KSxcbiAgICAgICAgICAgIGtleWJvYXJkOiBmYWxzZSxcbiAgICAgICAgICAgIGNsYXNzOiAnbW9kYWwtZGlhbG9nLWNlbnRlcmVkJ1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbW9kYWxSZWYuY29udGVudC5yZXN1bHQudG9Qcm9taXNlKCk7XG4gICAgfVxuXG59XG4iXX0=