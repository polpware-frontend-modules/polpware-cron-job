import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { MultiDateModalComponent } from './multi-date-modal/multi-date-modal.component';
import { ScheduleTimeModalComponent } from './schedule-time-modal/schedule-time-modal.component';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/modal";
let UtilsService = class UtilsService {
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
};
UtilsService.ctorParameters = () => [
    { type: BsModalService }
];
UtilsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function UtilsService_Factory() { return new UtilsService(i0.ɵɵinject(i1.BsModalService)); }, token: UtilsService, providedIn: "root" });
UtilsService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [BsModalService])
], UtilsService);
export { UtilsService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9jcm9uLWpvYi8iLCJzb3VyY2VzIjpbImxpYi91dGlscy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQXdCLHVCQUF1QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDOUcsT0FBTyxFQUEyQiwwQkFBMEIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDOzs7QUFLMUgsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBWTtJQUVyQixZQUE2QixhQUE2QjtRQUE3QixrQkFBYSxHQUFiLGFBQWEsQ0FBZ0I7SUFBSSxDQUFDO0lBRS9ELDJCQUEyQixDQUFDLEtBQThCO1FBQ3RELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLDBCQUEwQixFQUFFO1lBQ2pFLFFBQVEsRUFBRSxJQUFJO1lBQ2QsbUJBQW1CLEVBQUUsSUFBSTtZQUN6QixZQUFZLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDO1lBQ3RDLFFBQVEsRUFBRSxLQUFLO1lBQ2YsS0FBSyxFQUFFLHVCQUF1QjtTQUNqQyxDQUFDLENBQUM7UUFFSCxPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFFRCx3QkFBd0IsQ0FBQyxLQUEyQjtRQUNoRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtZQUM5RCxRQUFRLEVBQUUsSUFBSTtZQUNkLG1CQUFtQixFQUFFLElBQUk7WUFDekIsWUFBWSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQztZQUN0QyxRQUFRLEVBQUUsS0FBSztZQUNmLEtBQUssRUFBRSx1QkFBdUI7U0FDakMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0NBRUosQ0FBQTs7WUExQitDLGNBQWM7OztBQUZqRCxZQUFZO0lBSHhCLFVBQVUsQ0FBQztRQUNSLFVBQVUsRUFBRSxNQUFNO0tBQ3JCLENBQUM7cUNBRzhDLGNBQWM7R0FGakQsWUFBWSxDQTRCeEI7U0E1QlksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJzTW9kYWxTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9tb2RhbCc7XG5pbXBvcnQgeyBJTXVsdGlEYXRlTW9kYWxJbnB1dCwgTXVsdGlEYXRlTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL211bHRpLWRhdGUtbW9kYWwvbXVsdGktZGF0ZS1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSVNjaGVkdWxlVGltZU1vZGFsSW5wdXQsIFNjaGVkdWxlVGltZU1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9zY2hlZHVsZS10aW1lLW1vZGFsL3NjaGVkdWxlLXRpbWUtbW9kYWwuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBVdGlsc1NlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfbW9kYWxTZXJ2aWNlOiBCc01vZGFsU2VydmljZSkgeyB9XG5cbiAgICBzaG93U2NoZWR1bGVUaW1lRWRpdG9yQXN5bmMoaW5wdXQ6IElTY2hlZHVsZVRpbWVNb2RhbElucHV0KSB7XG4gICAgICAgIGNvbnN0IG1vZGFsUmVmID0gdGhpcy5fbW9kYWxTZXJ2aWNlLnNob3coU2NoZWR1bGVUaW1lTW9kYWxDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgICAgICAgICAgaWdub3JlQmFja2Ryb3BDbGljazogdHJ1ZSxcbiAgICAgICAgICAgIGluaXRpYWxTdGF0ZTogT2JqZWN0LmFzc2lnbih7fSwgaW5wdXQpLFxuICAgICAgICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxuICAgICAgICAgICAgY2xhc3M6ICdtb2RhbC1kaWFsb2ctY2VudGVyZWQnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBtb2RhbFJlZi5jb250ZW50LnJlc3VsdC50b1Byb21pc2UoKTtcbiAgICB9XG5cbiAgICBzaG93TXVsdGlEYXRlRWRpdG9yQXN5bmMoaW5wdXQ6IElNdWx0aURhdGVNb2RhbElucHV0KSB7XG4gICAgICAgIGNvbnN0IG1vZGFsUmVmID0gdGhpcy5fbW9kYWxTZXJ2aWNlLnNob3coTXVsdGlEYXRlTW9kYWxDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgICAgICAgICAgaWdub3JlQmFja2Ryb3BDbGljazogdHJ1ZSxcbiAgICAgICAgICAgIGluaXRpYWxTdGF0ZTogT2JqZWN0LmFzc2lnbih7fSwgaW5wdXQpLFxuICAgICAgICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxuICAgICAgICAgICAgY2xhc3M6ICdtb2RhbC1kaWFsb2ctY2VudGVyZWQnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBtb2RhbFJlZi5jb250ZW50LnJlc3VsdC50b1Byb21pc2UoKTtcbiAgICB9XG5cbn1cbiJdfQ==