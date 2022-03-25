import { __awaiter, __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { ObservableModalAbstractComponent } from '@polpware/bs-components';
import { AlertDefaultImpl } from '@polpware/ngx-alert';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
let ScheduleTimeModalComponent = class ScheduleTimeModalComponent extends ObservableModalAbstractComponent {
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
    confirmAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            this.alertProvider.clean();
            if (!this.isValid) {
                this.alertProvider.warning('polpCronJob.general');
                return;
            }
            this.isSaving = true;
            this.alertProvider.info('polpCronJob.messages.working');
            try {
                yield this.onConfirmAsync(this.outputValue);
                this.closeModal(this.outputValue);
            }
            catch (ex) {
                this.alertProvider.clean();
                this.alertProvider.danger('polpCronJob.errors.somethingWrong!');
            }
            finally {
                this.isSaving = false;
            }
        });
    }
};
ScheduleTimeModalComponent.ctorParameters = () => [
    { type: BsModalRef },
    { type: BsModalService }
];
__decorate([
    Input(),
    __metadata("design:type", String)
], ScheduleTimeModalComponent.prototype, "title", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ScheduleTimeModalComponent.prototype, "initSettings", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ScheduleTimeModalComponent.prototype, "initValue", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], ScheduleTimeModalComponent.prototype, "onConfirmAsync", void 0);
ScheduleTimeModalComponent = __decorate([
    Component({
        selector: 'polp-bs-schedule-time-modal',
        template: "<div class=\"modal-header\" polpModalDraggable>\n    <h4 class=\"modal-title\">{{title}}</h4>\n</div>\n<div class=\"modal-body\">\n    <polp-bs-schedule-time-picker [initSettings]=\"initSettings\"\n                                  [initValue]=\"initValue\"\n                                  (onValidation)=\"validateScheduler($event)\"\n                                  (onValueChanged)=\"updateScheduler($event)\">\n    </polp-bs-schedule-time-picker>\n    \n    <ng-container *ngFor=\"let a of alerts\">\n        <alert [type]=\"a.type\" [dismissOnTimeout]=\"a.timeout\">\n            {{a.message | cronJobHyperTrans}}\n        </alert>\n    </ng-container>\n    \n</div>\n<div class=\"modal-footer\">\n    <div class=\"d-flex justify-content-end\">\n        <button class=\"btn btn-secondary mr-2\" (click)=\"close()\">\n            {{'polpCronJob.closeBtn' | cronJobHyperTrans}}\n        </button>\n        <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"isValid\"\n                (click)=\"confirmAsync()\">\n            {{'polpCronJob.confirmBtn' | cronJobHyperTrans}}\n            <fa-icon [icon]=\"faSpinner\" [spin]=\"true\" class=\"ml-1\" *ngIf=\"isSaving\"></fa-icon>\n        </button>\n    </div>\n</div>\n",
        styles: [""]
    }),
    __metadata("design:paramtypes", [BsModalRef,
        BsModalService])
], ScheduleTimeModalComponent);
export { ScheduleTimeModalComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUtdGltZS1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvY3Jvbi1qb2IvIiwic291cmNlcyI6WyJsaWIvc2NoZWR1bGUtdGltZS1tb2RhbC9zY2hlZHVsZS10aW1lLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzlELE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzNFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBb0IsTUFBTSxxQkFBcUIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBZ0JqRSxJQUFhLDBCQUEwQixHQUF2QyxNQUFhLDBCQUNULFNBQVEsZ0NBQXdFO0lBZ0JoRixZQUNvQixVQUFzQixFQUNuQixjQUE4QjtRQUNqRCxLQUFLLEVBQUUsQ0FBQztRQUZRLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDbkIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBZnJELGNBQVMsR0FBRyxTQUFTLENBQUM7UUFFYixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBUzVCLGtCQUFhLEdBQUcsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO0lBTXZDLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDTixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQ25DLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVELEtBQUs7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxlQUFlLENBQUMsR0FBa0I7UUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7SUFDM0IsQ0FBQztJQUVELGlCQUFpQixDQUFDLEdBQXVCO1FBQ3JDLElBQUksR0FBRyxFQUFFO1lBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1NBQzVCO0lBQ0wsQ0FBQztJQUVLLFlBQVk7O1lBQ2QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDZixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2dCQUNsRCxPQUFPO2FBQ1Y7WUFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1lBQ3hELElBQUk7Z0JBQ0EsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDNUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDckM7WUFBQyxPQUFPLEVBQUUsRUFBRTtnQkFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO2FBQ25FO29CQUFTO2dCQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2FBQ3pCO1FBQ0wsQ0FBQztLQUFBO0NBRUosQ0FBQTs7WUE5Q21DLFVBQVU7WUFDSCxjQUFjOztBQWI1QztJQUFSLEtBQUssRUFBRTs7eURBQW9CO0FBQ25CO0lBQVIsS0FBSyxFQUFFOztnRUFBeUI7QUFDeEI7SUFBUixLQUFLLEVBQUU7OzZEQUEwQjtBQUN6QjtJQUFSLEtBQUssRUFBRTs7a0VBQXVEO0FBVHRELDBCQUEwQjtJQUx0QyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsNkJBQTZCO1FBQ3ZDLDZ0Q0FBbUQ7O0tBRXRELENBQUM7cUNBbUJrQyxVQUFVO1FBQ0gsY0FBYztHQW5CNUMsMEJBQTBCLENBZ0V0QztTQWhFWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZhU3Bpbm5lciB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlTW9kYWxBYnN0cmFjdENvbXBvbmVudCB9IGZyb20gJ0Bwb2xwd2FyZS9icy1jb21wb25lbnRzJztcbmltcG9ydCB7IEFsZXJ0RGVmYXVsdEltcGwsIElIYXNBbGVydEZlYXR1cmUgfSBmcm9tICdAcG9scHdhcmUvbmd4LWFsZXJ0JztcbmltcG9ydCB7IEJzTW9kYWxSZWYsIEJzTW9kYWxTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9tb2RhbCc7XG5pbXBvcnQgeyBJU2NoZWR1bGVUaW1lIH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBJU2V0dGluZ3MgfSBmcm9tICcuLi9zY2hlZHVsZS10aW1lLXBpY2tlci9zY2hlZHVsZS10aW1lLXBpY2tlci5jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTY2hlZHVsZVRpbWVNb2RhbElucHV0IHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGluaXRTZXR0aW5nczogSVNldHRpbmdzO1xuICAgIGluaXRWYWx1ZTogSVNjaGVkdWxlVGltZTtcbiAgICBvbkNvbmZpcm1Bc3luYzogKGRhdGE6IElTY2hlZHVsZVRpbWUpID0+IFByb21pc2U8YW55Pjtcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb2xwLWJzLXNjaGVkdWxlLXRpbWUtbW9kYWwnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zY2hlZHVsZS10aW1lLW1vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9zY2hlZHVsZS10aW1lLW1vZGFsLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTY2hlZHVsZVRpbWVNb2RhbENvbXBvbmVudFxuICAgIGV4dGVuZHMgT2JzZXJ2YWJsZU1vZGFsQWJzdHJhY3RDb21wb25lbnQ8SVNjaGVkdWxlVGltZU1vZGFsSW5wdXQsIElTY2hlZHVsZVRpbWU+XG4gICAgaW1wbGVtZW50cyBPbkluaXQsIElIYXNBbGVydEZlYXR1cmUge1xuXG4gICAgZmFTcGlubmVyID0gZmFTcGlubmVyO1xuXG4gICAgQElucHV0KCkgdGl0bGU6IHN0cmluZyA9ICcnO1xuICAgIEBJbnB1dCgpIGluaXRTZXR0aW5nczogSVNldHRpbmdzO1xuICAgIEBJbnB1dCgpIGluaXRWYWx1ZTogSVNjaGVkdWxlVGltZTtcbiAgICBASW5wdXQoKSBvbkNvbmZpcm1Bc3luYzogKGRhdGE6IElTY2hlZHVsZVRpbWUpID0+IFByb21pc2U8YW55PjtcblxuICAgIG91dHB1dFZhbHVlOiBJU2NoZWR1bGVUaW1lO1xuICAgIGlzVmFsaWQ6IGJvb2xlYW47XG5cbiAgICBpc1NhdmluZzogYm9vbGVhbjtcbiAgICBhbGVydFByb3ZpZGVyID0gbmV3IEFsZXJ0RGVmYXVsdEltcGwoKTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgYnNNb2RhbFJlZjogQnNNb2RhbFJlZixcbiAgICAgICAgcHJvdGVjdGVkIHJlYWRvbmx5IGJzTW9kYWxTZXJ2aWNlOiBCc01vZGFsU2VydmljZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGdldCBhbGVydHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFsZXJ0UHJvdmlkZXIuZGF0YTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5jbG9zZU1vZGFsKG51bGwpO1xuICAgIH1cblxuICAgIHVwZGF0ZVNjaGVkdWxlcihldnQ6IElTY2hlZHVsZVRpbWUpIHtcbiAgICAgICAgdGhpcy5vdXRwdXRWYWx1ZSA9IGV2dDtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZVNjaGVkdWxlcihldnQ6IHsgdmFsaWQ6IGJvb2xlYW4gfSkge1xuICAgICAgICBpZiAoZXZ0KSB7XG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSBldnQudmFsaWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBjb25maXJtQXN5bmMoKSB7XG4gICAgICAgIHRoaXMuYWxlcnRQcm92aWRlci5jbGVhbigpO1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCkge1xuICAgICAgICAgICAgdGhpcy5hbGVydFByb3ZpZGVyLndhcm5pbmcoJ3BvbHBDcm9uSm9iLmdlbmVyYWwnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNTYXZpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmFsZXJ0UHJvdmlkZXIuaW5mbygncG9scENyb25Kb2IubWVzc2FnZXMud29ya2luZycpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5vbkNvbmZpcm1Bc3luYyh0aGlzLm91dHB1dFZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbCh0aGlzLm91dHB1dFZhbHVlKTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgIHRoaXMuYWxlcnRQcm92aWRlci5jbGVhbigpO1xuICAgICAgICAgICAgdGhpcy5hbGVydFByb3ZpZGVyLmRhbmdlcigncG9scENyb25Kb2IuZXJyb3JzLnNvbWV0aGluZ1dyb25nIScpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgdGhpcy5pc1NhdmluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iXX0=