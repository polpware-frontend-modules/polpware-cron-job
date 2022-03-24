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
        this.closeModal(this.outputValue);
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
                this.alertProvider.warning('Data is not valid!');
                return;
            }
            this.isSaving = true;
            this.alertProvider.warning('Working ....');
            try {
                yield this.onConfirmAsync(this.outputValue);
                this.closeModal(this.outputValue);
            }
            catch (ex) {
                this.alertProvider.clean();
                this.alertProvider.danger('Something went wrong. Please try later!');
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
        template: "<div class=\"modal-header\" polpModalDraggable>\n    <h4 class=\"modal-title\">{{title}}</h4>\n</div>\n<div class=\"modal-body\">\n    <polp-bs-schedule-time-picker [initSettings]=\"initSettings\"\n                                  [initValue]=\"initValue\"\n                                  (onValidation)=\"validateScheduler($event)\"\n                                  (onValueChanged)=\"updateScheduler($event)\">\n    </polp-bs-schedule-time-picker>\n    \n    <ng-container *ngFor=\"let a of alerts\">\n        <alert [type]=\"a.type\" [dismissOnTimeout]=\"a.timeout\">\n            {{a.message}}\n        </alert>\n    </ng-container>\n    \n</div>\n<div class=\"modal-footer\">\n    <div class=\"d-flex justify-content-end\">\n        <button class=\"btn btn-secondary mr-2\" (click)=\"close()\">\n            Close\n        </button>\n        <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"isValid\"\n                (click)=\"confirmAsync()\">\n            Confirm\n            <fa-icon [icon]=\"faSpinner\" [spin]=\"true\" class=\"ml-1\" *ngIf=\"isSaving\"></fa-icon>\n        </button>\n    </div>\n</div>\n",
        styles: [""]
    }),
    __metadata("design:paramtypes", [BsModalRef,
        BsModalService])
], ScheduleTimeModalComponent);
export { ScheduleTimeModalComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUtdGltZS1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvY3Jvbi1qb2IvIiwic291cmNlcyI6WyJsaWIvc2NoZWR1bGUtdGltZS1tb2RhbC9zY2hlZHVsZS10aW1lLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzlELE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzNFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBb0IsTUFBTSxxQkFBcUIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBZ0JqRSxJQUFhLDBCQUEwQixHQUF2QyxNQUFhLDBCQUNULFNBQVEsZ0NBQTREO0lBZ0JwRSxZQUNvQixVQUFzQixFQUNuQixjQUE4QjtRQUNqRCxLQUFLLEVBQUUsQ0FBQztRQUZRLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDbkIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBZnJELGNBQVMsR0FBRyxTQUFTLENBQUM7UUFFYixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBUzVCLGtCQUFhLEdBQUcsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO0lBTXZDLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDTixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQ25DLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVELEtBQUs7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsZUFBZSxDQUFDLEdBQWtCO1FBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO0lBQzNCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxHQUF1QjtRQUNyQyxJQUFJLEdBQUcsRUFBRTtZQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztTQUM1QjtJQUNMLENBQUM7SUFFSyxZQUFZOztZQUNkLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztnQkFDakQsT0FBTzthQUNWO1lBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDM0MsSUFBSTtnQkFDQSxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUM1QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUNyQztZQUFDLE9BQU8sRUFBRSxFQUFFO2dCQUNULElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLHlDQUF5QyxDQUFDLENBQUM7YUFDeEU7b0JBQVM7Z0JBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7YUFDekI7UUFDTCxDQUFDO0tBQUE7Q0FFSixDQUFBOztZQTlDbUMsVUFBVTtZQUNILGNBQWM7O0FBYjVDO0lBQVIsS0FBSyxFQUFFOzt5REFBb0I7QUFDbkI7SUFBUixLQUFLLEVBQUU7O2dFQUF5QjtBQUN4QjtJQUFSLEtBQUssRUFBRTs7NkRBQTBCO0FBQ3pCO0lBQVIsS0FBSyxFQUFFOztrRUFBdUQ7QUFUdEQsMEJBQTBCO0lBTHRDLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSw2QkFBNkI7UUFDdkMsdW5DQUFtRDs7S0FFdEQsQ0FBQztxQ0FtQmtDLFVBQVU7UUFDSCxjQUFjO0dBbkI1QywwQkFBMEIsQ0FnRXRDO1NBaEVZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZmFTcGlubmVyIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCB7IE9ic2VydmFibGVNb2RhbEFic3RyYWN0Q29tcG9uZW50IH0gZnJvbSAnQHBvbHB3YXJlL2JzLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQWxlcnREZWZhdWx0SW1wbCwgSUhhc0FsZXJ0RmVhdHVyZSB9IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtYWxlcnQnO1xuaW1wb3J0IHsgQnNNb2RhbFJlZiwgQnNNb2RhbFNlcnZpY2UgfSBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsJztcbmltcG9ydCB7IElTY2hlZHVsZVRpbWUgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IElTZXR0aW5ncyB9IGZyb20gJy4uL3NjaGVkdWxlLXRpbWUtcGlja2VyL3NjaGVkdWxlLXRpbWUtcGlja2VyLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU1vZGFsSW5wdXQge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgaW5pdFNldHRpbmdzOiBJU2V0dGluZ3M7XG4gICAgaW5pdFZhbHVlOiBJU2NoZWR1bGVUaW1lO1xuICAgIG9uQ29uZmlybUFzeW5jOiAoZGF0YTogSVNjaGVkdWxlVGltZSkgPT4gUHJvbWlzZTxhbnk+O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BvbHAtYnMtc2NoZWR1bGUtdGltZS1tb2RhbCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NjaGVkdWxlLXRpbWUtbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3NjaGVkdWxlLXRpbWUtbW9kYWwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNjaGVkdWxlVGltZU1vZGFsQ29tcG9uZW50XG4gICAgZXh0ZW5kcyBPYnNlcnZhYmxlTW9kYWxBYnN0cmFjdENvbXBvbmVudDxJTW9kYWxJbnB1dCwgSVNjaGVkdWxlVGltZT5cbiAgICBpbXBsZW1lbnRzIE9uSW5pdCwgSUhhc0FsZXJ0RmVhdHVyZSB7XG5cbiAgICBmYVNwaW5uZXIgPSBmYVNwaW5uZXI7XG5cbiAgICBASW5wdXQoKSB0aXRsZTogc3RyaW5nID0gJyc7XG4gICAgQElucHV0KCkgaW5pdFNldHRpbmdzOiBJU2V0dGluZ3M7XG4gICAgQElucHV0KCkgaW5pdFZhbHVlOiBJU2NoZWR1bGVUaW1lO1xuICAgIEBJbnB1dCgpIG9uQ29uZmlybUFzeW5jOiAoZGF0YTogSVNjaGVkdWxlVGltZSkgPT4gUHJvbWlzZTxhbnk+O1xuXG4gICAgb3V0cHV0VmFsdWU6IElTY2hlZHVsZVRpbWU7XG4gICAgaXNWYWxpZDogYm9vbGVhbjtcblxuICAgIGlzU2F2aW5nOiBib29sZWFuO1xuICAgIGFsZXJ0UHJvdmlkZXIgPSBuZXcgQWxlcnREZWZhdWx0SW1wbCgpO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBic01vZGFsUmVmOiBCc01vZGFsUmVmLFxuICAgICAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgYnNNb2RhbFNlcnZpY2U6IEJzTW9kYWxTZXJ2aWNlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgZ2V0IGFsZXJ0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxlcnRQcm92aWRlci5kYXRhO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLmNsb3NlTW9kYWwodGhpcy5vdXRwdXRWYWx1ZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlU2NoZWR1bGVyKGV2dDogSVNjaGVkdWxlVGltZSkge1xuICAgICAgICB0aGlzLm91dHB1dFZhbHVlID0gZXZ0O1xuICAgIH1cblxuICAgIHZhbGlkYXRlU2NoZWR1bGVyKGV2dDogeyB2YWxpZDogYm9vbGVhbiB9KSB7XG4gICAgICAgIGlmIChldnQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IGV2dC52YWxpZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGNvbmZpcm1Bc3luYygpIHtcbiAgICAgICAgdGhpcy5hbGVydFByb3ZpZGVyLmNsZWFuKCk7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKSB7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0UHJvdmlkZXIud2FybmluZygnRGF0YSBpcyBub3QgdmFsaWQhJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzU2F2aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hbGVydFByb3ZpZGVyLndhcm5pbmcoJ1dvcmtpbmcgLi4uLicpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5vbkNvbmZpcm1Bc3luYyh0aGlzLm91dHB1dFZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbCh0aGlzLm91dHB1dFZhbHVlKTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgIHRoaXMuYWxlcnRQcm92aWRlci5jbGVhbigpO1xuICAgICAgICAgICAgdGhpcy5hbGVydFByb3ZpZGVyLmRhbmdlcignU29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgbGF0ZXIhJyk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICB0aGlzLmlzU2F2aW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==