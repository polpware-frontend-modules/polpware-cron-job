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
    updateStyle(evt) {
        if (evt && evt.opened) {
            const newClasses = this.extraClasses ? `${this.extraClasses} has-child-modal` : 'has-child-modal';
            this.bsModalRef.setClass(newClasses);
        }
        else {
            const newClasses = this.extraClasses || '';
            this.bsModalRef.setClass(newClasses);
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
__decorate([
    Input(),
    __metadata("design:type", String)
], ScheduleTimeModalComponent.prototype, "extraClasses", void 0);
ScheduleTimeModalComponent = __decorate([
    Component({
        selector: 'polp-bs-schedule-time-modal',
        template: "<div class=\"modal-header\" polpModalDraggable>\n    <h4 class=\"modal-title\">{{title | cronJobHyperTrans}}</h4>\n</div>\n<div class=\"modal-body\">\n    <polp-bs-schedule-time-picker [initSettings]=\"initSettings\"\n                                  [initValue]=\"initValue\"\n                                  (childStateChanged)=\"updateStyle($event)\"\n                                  (onValidation)=\"validateScheduler($event)\"\n                                  (onValueChanged)=\"updateScheduler($event)\">\n    </polp-bs-schedule-time-picker>\n    \n    <ng-container *ngFor=\"let a of alerts\">\n        <alert [type]=\"a.type\" [dismissOnTimeout]=\"a.timeout\">\n            {{a.message | cronJobHyperTrans}}\n        </alert>\n    </ng-container>\n    \n</div>\n<div class=\"modal-footer\">\n    <div class=\"d-flex justify-content-end\">\n        <button class=\"btn btn-secondary mr-2\" (click)=\"close()\">\n            {{'polpCronJob.closeBtn' | cronJobHyperTrans}}\n        </button>\n        <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"isValid\"\n                (click)=\"confirmAsync()\">\n            {{'polpCronJob.confirmBtn' | cronJobHyperTrans}}\n            <fa-icon [icon]=\"faSpinner\" [spin]=\"true\" class=\"ml-1\" *ngIf=\"isSaving\"></fa-icon>\n        </button>\n    </div>\n</div>\n",
        styles: [""]
    }),
    __metadata("design:paramtypes", [BsModalRef,
        BsModalService])
], ScheduleTimeModalComponent);
export { ScheduleTimeModalComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUtdGltZS1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvY3Jvbi1qb2IvIiwic291cmNlcyI6WyJsaWIvc2NoZWR1bGUtdGltZS1tb2RhbC9zY2hlZHVsZS10aW1lLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWdDLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0NBQWdDLEVBQW9DLE1BQU0seUJBQXlCLENBQUM7QUFDN0csT0FBTyxFQUFFLGdCQUFnQixFQUFvQixNQUFNLHFCQUFxQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFpQmpFLElBQWEsMEJBQTBCLEdBQXZDLE1BQWEsMEJBQ1QsU0FBUSxnQ0FBd0U7SUFvQmhGLFlBQ29CLFVBQXNCLEVBQ25CLGNBQThCO1FBQ2pELEtBQUssRUFBRSxDQUFDO1FBRlEsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNuQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFuQnJELGNBQVMsR0FBRyxTQUFTLENBQUM7UUFFYixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBVzVCLGtCQUFhLEdBQUcsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO0lBUXZDLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDTixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQ25DLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVELEtBQUs7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxlQUFlLENBQUMsR0FBa0I7UUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7SUFDM0IsQ0FBQztJQUVELGlCQUFpQixDQUFDLEdBQXVCO1FBQ3JDLElBQUksR0FBRyxFQUFFO1lBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1NBQzVCO0lBQ0wsQ0FBQztJQUVELFdBQVcsQ0FBQyxHQUFxQjtRQUM3QixJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFO1lBQ25CLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksa0JBQWtCLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO1lBQ2xHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3hDO2FBQU07WUFDSCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQztZQUMzQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN4QztJQUNMLENBQUM7SUFFSyxZQUFZOztZQUNkLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztnQkFDbEQsT0FBTzthQUNWO1lBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQztZQUN4RCxJQUFJO2dCQUNBLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtvQkFDckIsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztpQkFDL0M7Z0JBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDckM7WUFBQyxPQUFPLEVBQUUsRUFBRTtnQkFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO2FBQ2xFO29CQUFTO2dCQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2FBQ3pCO1FBQ0wsQ0FBQztLQUFBO0NBRUosQ0FBQTs7WUExRG1DLFVBQVU7WUFDSCxjQUFjOztBQWpCNUM7SUFBUixLQUFLLEVBQUU7O3lEQUFvQjtBQUNuQjtJQUFSLEtBQUssRUFBRTs7Z0VBQXlCO0FBQ3hCO0lBQVIsS0FBSyxFQUFFOzs2REFBMEI7QUFDekI7SUFBUixLQUFLLEVBQUU7O2tFQUF1RDtBQUV0RDtJQUFSLEtBQUssRUFBRTs7Z0VBQXNCO0FBWHJCLDBCQUEwQjtJQUx0QyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsNkJBQTZCO1FBQ3ZDLGcwQ0FBbUQ7O0tBRXRELENBQUM7cUNBdUJrQyxVQUFVO1FBQ0gsY0FBYztHQXZCNUMsMEJBQTBCLENBZ0Z0QztTQWhGWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmYVNwaW5uZXIgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZU1vZGFsQWJzdHJhY3RDb21wb25lbnQsIElIYXNDaGlsZE1vZGFsLCBJQ2hpbGRNb2RhbFN0YXRlIH0gZnJvbSAnQHBvbHB3YXJlL2JzLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQWxlcnREZWZhdWx0SW1wbCwgSUhhc0FsZXJ0RmVhdHVyZSB9IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtYWxlcnQnO1xuaW1wb3J0IHsgQnNNb2RhbFJlZiwgQnNNb2RhbFNlcnZpY2UgfSBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsJztcbmltcG9ydCB7IElTY2hlZHVsZVRpbWUgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IElTZXR0aW5ncyB9IGZyb20gJy4uL3NjaGVkdWxlLXRpbWUtcGlja2VyL3NjaGVkdWxlLXRpbWUtcGlja2VyLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNjaGVkdWxlVGltZU1vZGFsSW5wdXQge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgaW5pdFNldHRpbmdzOiBJU2V0dGluZ3M7XG4gICAgaW5pdFZhbHVlOiBJU2NoZWR1bGVUaW1lO1xuICAgIGV4dHJhQ2xhc3Nlczogc3RyaW5nO1xuICAgIG9uQ29uZmlybUFzeW5jOiAoZGF0YTogSVNjaGVkdWxlVGltZSkgPT4gUHJvbWlzZTxhbnk+O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BvbHAtYnMtc2NoZWR1bGUtdGltZS1tb2RhbCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NjaGVkdWxlLXRpbWUtbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3NjaGVkdWxlLXRpbWUtbW9kYWwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNjaGVkdWxlVGltZU1vZGFsQ29tcG9uZW50XG4gICAgZXh0ZW5kcyBPYnNlcnZhYmxlTW9kYWxBYnN0cmFjdENvbXBvbmVudDxJU2NoZWR1bGVUaW1lTW9kYWxJbnB1dCwgSVNjaGVkdWxlVGltZT5cbiAgICBpbXBsZW1lbnRzIE9uSW5pdCwgSUhhc0FsZXJ0RmVhdHVyZSwgSUhhc0NoaWxkTW9kYWwge1xuXG4gICAgZmFTcGlubmVyID0gZmFTcGlubmVyO1xuXG4gICAgQElucHV0KCkgdGl0bGU6IHN0cmluZyA9ICcnO1xuICAgIEBJbnB1dCgpIGluaXRTZXR0aW5nczogSVNldHRpbmdzO1xuICAgIEBJbnB1dCgpIGluaXRWYWx1ZTogSVNjaGVkdWxlVGltZTtcbiAgICBASW5wdXQoKSBvbkNvbmZpcm1Bc3luYzogKGRhdGE6IElTY2hlZHVsZVRpbWUpID0+IFByb21pc2U8YW55PjtcbiAgICAvLyBXZSBuZWVkIHRoaXMgb25lIHRvIGdldCB0aGUgaW5pdCBjbGFzcy5cbiAgICBASW5wdXQoKSBleHRyYUNsYXNzZXM6IHN0cmluZztcblxuICAgIG91dHB1dFZhbHVlOiBJU2NoZWR1bGVUaW1lO1xuICAgIGlzVmFsaWQ6IGJvb2xlYW47XG5cbiAgICBpc1NhdmluZzogYm9vbGVhbjtcbiAgICBhbGVydFByb3ZpZGVyID0gbmV3IEFsZXJ0RGVmYXVsdEltcGwoKTtcblxuICAgIHNob3dCYWNrZHJvcDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgYnNNb2RhbFJlZjogQnNNb2RhbFJlZixcbiAgICAgICAgcHJvdGVjdGVkIHJlYWRvbmx5IGJzTW9kYWxTZXJ2aWNlOiBCc01vZGFsU2VydmljZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGdldCBhbGVydHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFsZXJ0UHJvdmlkZXIuZGF0YTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5jbG9zZU1vZGFsKG51bGwpO1xuICAgIH1cblxuICAgIHVwZGF0ZVNjaGVkdWxlcihldnQ6IElTY2hlZHVsZVRpbWUpIHtcbiAgICAgICAgdGhpcy5vdXRwdXRWYWx1ZSA9IGV2dDtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZVNjaGVkdWxlcihldnQ6IHsgdmFsaWQ6IGJvb2xlYW4gfSkge1xuICAgICAgICBpZiAoZXZ0KSB7XG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSBldnQudmFsaWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVTdHlsZShldnQ6IElDaGlsZE1vZGFsU3RhdGUpIHtcbiAgICAgICAgaWYgKGV2dCAmJiBldnQub3BlbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdDbGFzc2VzID0gdGhpcy5leHRyYUNsYXNzZXMgPyBgJHt0aGlzLmV4dHJhQ2xhc3Nlc30gaGFzLWNoaWxkLW1vZGFsYCA6ICdoYXMtY2hpbGQtbW9kYWwnO1xuICAgICAgICAgICAgdGhpcy5ic01vZGFsUmVmLnNldENsYXNzKG5ld0NsYXNzZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbmV3Q2xhc3NlcyA9IHRoaXMuZXh0cmFDbGFzc2VzIHx8ICcnO1xuICAgICAgICAgICAgdGhpcy5ic01vZGFsUmVmLnNldENsYXNzKG5ld0NsYXNzZXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgY29uZmlybUFzeW5jKCkge1xuICAgICAgICB0aGlzLmFsZXJ0UHJvdmlkZXIuY2xlYW4oKTtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWxlcnRQcm92aWRlci53YXJuaW5nKCdwb2xwQ3JvbkpvYi5nZW5lcmFsJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzU2F2aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hbGVydFByb3ZpZGVyLmluZm8oJ3BvbHBDcm9uSm9iLm1lc3NhZ2VzLndvcmtpbmcnKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9uQ29uZmlybUFzeW5jKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5vbkNvbmZpcm1Bc3luYyh0aGlzLm91dHB1dFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbCh0aGlzLm91dHB1dFZhbHVlKTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgIHRoaXMuYWxlcnRQcm92aWRlci5jbGVhbigpO1xuICAgICAgICAgICAgdGhpcy5hbGVydFByb3ZpZGVyLmRhbmdlcigncG9scENyb25Kb2IuZXJyb3JzLnNvbWV0aGluZ1dyb25nJyk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICB0aGlzLmlzU2F2aW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==