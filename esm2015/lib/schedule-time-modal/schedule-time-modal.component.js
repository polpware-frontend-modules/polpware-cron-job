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
                if (this.onConfirmAsync) {
                    yield this.onConfirmAsync(this.outputValue);
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
        template: "<div class=\"modal-header\" polpModalDraggable>\n    <h4 class=\"modal-title\">{{title | cronJobHyperTrans}}</h4>\n</div>\n<div class=\"modal-body\">\n    <polp-bs-schedule-time-picker [initSettings]=\"initSettings\"\n                                  [initValue]=\"initValue\"\n                                  (onValidation)=\"validateScheduler($event)\"\n                                  (onValueChanged)=\"updateScheduler($event)\">\n    </polp-bs-schedule-time-picker>\n    \n    <ng-container *ngFor=\"let a of alerts\">\n        <alert [type]=\"a.type\" [dismissOnTimeout]=\"a.timeout\">\n            {{a.message | cronJobHyperTrans}}\n        </alert>\n    </ng-container>\n    \n</div>\n<div class=\"modal-footer\">\n    <div class=\"d-flex justify-content-end\">\n        <button class=\"btn btn-secondary mr-2\" (click)=\"close()\">\n            {{'polpCronJob.closeBtn' | cronJobHyperTrans}}\n        </button>\n        <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"isValid\"\n                (click)=\"confirmAsync()\">\n            {{'polpCronJob.confirmBtn' | cronJobHyperTrans}}\n            <fa-icon [icon]=\"faSpinner\" [spin]=\"true\" class=\"ml-1\" *ngIf=\"isSaving\"></fa-icon>\n        </button>\n    </div>\n</div>\n",
        styles: [""]
    }),
    __metadata("design:paramtypes", [BsModalRef,
        BsModalService])
], ScheduleTimeModalComponent);
export { ScheduleTimeModalComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUtdGltZS1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvY3Jvbi1qb2IvIiwic291cmNlcyI6WyJsaWIvc2NoZWR1bGUtdGltZS1tb2RhbC9zY2hlZHVsZS10aW1lLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzlELE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzNFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBb0IsTUFBTSxxQkFBcUIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBZ0JqRSxJQUFhLDBCQUEwQixHQUF2QyxNQUFhLDBCQUNULFNBQVEsZ0NBQXdFO0lBZ0JoRixZQUNvQixVQUFzQixFQUNuQixjQUE4QjtRQUNqRCxLQUFLLEVBQUUsQ0FBQztRQUZRLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDbkIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBZnJELGNBQVMsR0FBRyxTQUFTLENBQUM7UUFFYixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBUzVCLGtCQUFhLEdBQUcsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO0lBTXZDLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDTixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQ25DLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVELEtBQUs7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxlQUFlLENBQUMsR0FBa0I7UUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7SUFDM0IsQ0FBQztJQUVELGlCQUFpQixDQUFDLEdBQXVCO1FBQ3JDLElBQUksR0FBRyxFQUFFO1lBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1NBQzVCO0lBQ0wsQ0FBQztJQUVLLFlBQVk7O1lBQ2QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDZixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2dCQUNsRCxPQUFPO2FBQ1Y7WUFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1lBQ3hELElBQUk7Z0JBQ0EsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO29CQUNyQixNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2lCQUMvQztnQkFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUNyQztZQUFDLE9BQU8sRUFBRSxFQUFFO2dCQUNULElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLG1DQUFtQyxDQUFDLENBQUM7YUFDbEU7b0JBQVM7Z0JBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7YUFDekI7UUFDTCxDQUFDO0tBQUE7Q0FFSixDQUFBOztZQWhEbUMsVUFBVTtZQUNILGNBQWM7O0FBYjVDO0lBQVIsS0FBSyxFQUFFOzt5REFBb0I7QUFDbkI7SUFBUixLQUFLLEVBQUU7O2dFQUF5QjtBQUN4QjtJQUFSLEtBQUssRUFBRTs7NkRBQTBCO0FBQ3pCO0lBQVIsS0FBSyxFQUFFOztrRUFBdUQ7QUFUdEQsMEJBQTBCO0lBTHRDLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSw2QkFBNkI7UUFDdkMsaXZDQUFtRDs7S0FFdEQsQ0FBQztxQ0FtQmtDLFVBQVU7UUFDSCxjQUFjO0dBbkI1QywwQkFBMEIsQ0FrRXRDO1NBbEVZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZmFTcGlubmVyIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCB7IE9ic2VydmFibGVNb2RhbEFic3RyYWN0Q29tcG9uZW50IH0gZnJvbSAnQHBvbHB3YXJlL2JzLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQWxlcnREZWZhdWx0SW1wbCwgSUhhc0FsZXJ0RmVhdHVyZSB9IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtYWxlcnQnO1xuaW1wb3J0IHsgQnNNb2RhbFJlZiwgQnNNb2RhbFNlcnZpY2UgfSBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsJztcbmltcG9ydCB7IElTY2hlZHVsZVRpbWUgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IElTZXR0aW5ncyB9IGZyb20gJy4uL3NjaGVkdWxlLXRpbWUtcGlja2VyL3NjaGVkdWxlLXRpbWUtcGlja2VyLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNjaGVkdWxlVGltZU1vZGFsSW5wdXQge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgaW5pdFNldHRpbmdzOiBJU2V0dGluZ3M7XG4gICAgaW5pdFZhbHVlOiBJU2NoZWR1bGVUaW1lO1xuICAgIG9uQ29uZmlybUFzeW5jOiAoZGF0YTogSVNjaGVkdWxlVGltZSkgPT4gUHJvbWlzZTxhbnk+O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BvbHAtYnMtc2NoZWR1bGUtdGltZS1tb2RhbCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NjaGVkdWxlLXRpbWUtbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3NjaGVkdWxlLXRpbWUtbW9kYWwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNjaGVkdWxlVGltZU1vZGFsQ29tcG9uZW50XG4gICAgZXh0ZW5kcyBPYnNlcnZhYmxlTW9kYWxBYnN0cmFjdENvbXBvbmVudDxJU2NoZWR1bGVUaW1lTW9kYWxJbnB1dCwgSVNjaGVkdWxlVGltZT5cbiAgICBpbXBsZW1lbnRzIE9uSW5pdCwgSUhhc0FsZXJ0RmVhdHVyZSB7XG5cbiAgICBmYVNwaW5uZXIgPSBmYVNwaW5uZXI7XG5cbiAgICBASW5wdXQoKSB0aXRsZTogc3RyaW5nID0gJyc7XG4gICAgQElucHV0KCkgaW5pdFNldHRpbmdzOiBJU2V0dGluZ3M7XG4gICAgQElucHV0KCkgaW5pdFZhbHVlOiBJU2NoZWR1bGVUaW1lO1xuICAgIEBJbnB1dCgpIG9uQ29uZmlybUFzeW5jOiAoZGF0YTogSVNjaGVkdWxlVGltZSkgPT4gUHJvbWlzZTxhbnk+O1xuXG4gICAgb3V0cHV0VmFsdWU6IElTY2hlZHVsZVRpbWU7XG4gICAgaXNWYWxpZDogYm9vbGVhbjtcblxuICAgIGlzU2F2aW5nOiBib29sZWFuO1xuICAgIGFsZXJ0UHJvdmlkZXIgPSBuZXcgQWxlcnREZWZhdWx0SW1wbCgpO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBic01vZGFsUmVmOiBCc01vZGFsUmVmLFxuICAgICAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgYnNNb2RhbFNlcnZpY2U6IEJzTW9kYWxTZXJ2aWNlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgZ2V0IGFsZXJ0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxlcnRQcm92aWRlci5kYXRhO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLmNsb3NlTW9kYWwobnVsbCk7XG4gICAgfVxuXG4gICAgdXBkYXRlU2NoZWR1bGVyKGV2dDogSVNjaGVkdWxlVGltZSkge1xuICAgICAgICB0aGlzLm91dHB1dFZhbHVlID0gZXZ0O1xuICAgIH1cblxuICAgIHZhbGlkYXRlU2NoZWR1bGVyKGV2dDogeyB2YWxpZDogYm9vbGVhbiB9KSB7XG4gICAgICAgIGlmIChldnQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IGV2dC52YWxpZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGNvbmZpcm1Bc3luYygpIHtcbiAgICAgICAgdGhpcy5hbGVydFByb3ZpZGVyLmNsZWFuKCk7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKSB7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0UHJvdmlkZXIud2FybmluZygncG9scENyb25Kb2IuZ2VuZXJhbCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc1NhdmluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuYWxlcnRQcm92aWRlci5pbmZvKCdwb2xwQ3JvbkpvYi5tZXNzYWdlcy53b3JraW5nJyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vbkNvbmZpcm1Bc3luYykge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMub25Db25maXJtQXN5bmModGhpcy5vdXRwdXRWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwodGhpcy5vdXRwdXRWYWx1ZSk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0UHJvdmlkZXIuY2xlYW4oKTtcbiAgICAgICAgICAgIHRoaXMuYWxlcnRQcm92aWRlci5kYW5nZXIoJ3BvbHBDcm9uSm9iLmVycm9ycy5zb21ldGhpbmdXcm9uZycpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgdGhpcy5pc1NhdmluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iXX0=