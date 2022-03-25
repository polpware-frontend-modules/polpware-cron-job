import { __awaiter, __decorate, __extends, __generator, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { ObservableModalAbstractComponent } from '@polpware/bs-components';
import { AlertDefaultImpl } from '@polpware/ngx-alert';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
var ScheduleTimeModalComponent = /** @class */ (function (_super) {
    __extends(ScheduleTimeModalComponent, _super);
    function ScheduleTimeModalComponent(bsModalRef, bsModalService) {
        var _this = _super.call(this) || this;
        _this.bsModalRef = bsModalRef;
        _this.bsModalService = bsModalService;
        _this.faSpinner = faSpinner;
        _this.title = '';
        _this.alertProvider = new AlertDefaultImpl();
        return _this;
    }
    Object.defineProperty(ScheduleTimeModalComponent.prototype, "alerts", {
        get: function () {
            return this.alertProvider.data;
        },
        enumerable: true,
        configurable: true
    });
    ScheduleTimeModalComponent.prototype.ngOnInit = function () {
    };
    ScheduleTimeModalComponent.prototype.close = function () {
        this.closeModal(null);
    };
    ScheduleTimeModalComponent.prototype.updateScheduler = function (evt) {
        this.outputValue = evt;
    };
    ScheduleTimeModalComponent.prototype.validateScheduler = function (evt) {
        if (evt) {
            this.isValid = evt.valid;
        }
    };
    ScheduleTimeModalComponent.prototype.confirmAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ex_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.alertProvider.clean();
                        if (!this.isValid) {
                            this.alertProvider.warning('polpCronJob.general');
                            return [2 /*return*/];
                        }
                        this.isSaving = true;
                        this.alertProvider.info('polpCronJob.messages.working');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, this.onConfirmAsync(this.outputValue)];
                    case 2:
                        _a.sent();
                        this.closeModal(this.outputValue);
                        return [3 /*break*/, 5];
                    case 3:
                        ex_1 = _a.sent();
                        this.alertProvider.clean();
                        this.alertProvider.danger('polpCronJob.errors.somethingWrong!');
                        return [3 /*break*/, 5];
                    case 4:
                        this.isSaving = false;
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ScheduleTimeModalComponent.ctorParameters = function () { return [
        { type: BsModalRef },
        { type: BsModalService }
    ]; };
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
    return ScheduleTimeModalComponent;
}(ObservableModalAbstractComponent));
export { ScheduleTimeModalComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUtdGltZS1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvY3Jvbi1qb2IvIiwic291cmNlcyI6WyJsaWIvc2NoZWR1bGUtdGltZS1tb2RhbC9zY2hlZHVsZS10aW1lLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzlELE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzNFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBb0IsTUFBTSxxQkFBcUIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBZ0JqRTtJQUNZLDhDQUF3RTtJQWdCaEYsb0NBQ29CLFVBQXNCLEVBQ25CLGNBQThCO1FBRnJELFlBR0ksaUJBQU8sU0FDVjtRQUhtQixnQkFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNuQixvQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFmckQsZUFBUyxHQUFHLFNBQVMsQ0FBQztRQUViLFdBQUssR0FBVyxFQUFFLENBQUM7UUFTNUIsbUJBQWEsR0FBRyxJQUFJLGdCQUFnQixFQUFFLENBQUM7O0lBTXZDLENBQUM7SUFFRCxzQkFBSSw4Q0FBTTthQUFWO1lBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTtJQUVELDZDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsMENBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELG9EQUFlLEdBQWYsVUFBZ0IsR0FBa0I7UUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7SUFDM0IsQ0FBQztJQUVELHNEQUFpQixHQUFqQixVQUFrQixHQUF1QjtRQUNyQyxJQUFJLEdBQUcsRUFBRTtZQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztTQUM1QjtJQUNMLENBQUM7SUFFSyxpREFBWSxHQUFsQjs7Ozs7O3dCQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7d0JBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFOzRCQUNmLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7NEJBQ2xELHNCQUFPO3lCQUNWO3dCQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO3dCQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDOzs7O3dCQUVwRCxxQkFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBQTs7d0JBQTNDLFNBQTJDLENBQUM7d0JBQzVDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDOzs7O3dCQUVsQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDOzs7d0JBRWhFLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDOzs7Ozs7S0FFN0I7O2dCQTVDK0IsVUFBVTtnQkFDSCxjQUFjOztJQWI1QztRQUFSLEtBQUssRUFBRTs7NkRBQW9CO0lBQ25CO1FBQVIsS0FBSyxFQUFFOztvRUFBeUI7SUFDeEI7UUFBUixLQUFLLEVBQUU7O2lFQUEwQjtJQUN6QjtRQUFSLEtBQUssRUFBRTs7c0VBQXVEO0lBVHRELDBCQUEwQjtRQUx0QyxTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsNkJBQTZCO1lBQ3ZDLDZ0Q0FBbUQ7O1NBRXRELENBQUM7eUNBbUJrQyxVQUFVO1lBQ0gsY0FBYztPQW5CNUMsMEJBQTBCLENBZ0V0QztJQUFELGlDQUFDO0NBQUEsQUFoRUQsQ0FDWSxnQ0FBZ0MsR0ErRDNDO1NBaEVZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZmFTcGlubmVyIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCB7IE9ic2VydmFibGVNb2RhbEFic3RyYWN0Q29tcG9uZW50IH0gZnJvbSAnQHBvbHB3YXJlL2JzLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQWxlcnREZWZhdWx0SW1wbCwgSUhhc0FsZXJ0RmVhdHVyZSB9IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtYWxlcnQnO1xuaW1wb3J0IHsgQnNNb2RhbFJlZiwgQnNNb2RhbFNlcnZpY2UgfSBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsJztcbmltcG9ydCB7IElTY2hlZHVsZVRpbWUgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IElTZXR0aW5ncyB9IGZyb20gJy4uL3NjaGVkdWxlLXRpbWUtcGlja2VyL3NjaGVkdWxlLXRpbWUtcGlja2VyLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNjaGVkdWxlVGltZU1vZGFsSW5wdXQge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgaW5pdFNldHRpbmdzOiBJU2V0dGluZ3M7XG4gICAgaW5pdFZhbHVlOiBJU2NoZWR1bGVUaW1lO1xuICAgIG9uQ29uZmlybUFzeW5jOiAoZGF0YTogSVNjaGVkdWxlVGltZSkgPT4gUHJvbWlzZTxhbnk+O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BvbHAtYnMtc2NoZWR1bGUtdGltZS1tb2RhbCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NjaGVkdWxlLXRpbWUtbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3NjaGVkdWxlLXRpbWUtbW9kYWwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNjaGVkdWxlVGltZU1vZGFsQ29tcG9uZW50XG4gICAgZXh0ZW5kcyBPYnNlcnZhYmxlTW9kYWxBYnN0cmFjdENvbXBvbmVudDxJU2NoZWR1bGVUaW1lTW9kYWxJbnB1dCwgSVNjaGVkdWxlVGltZT5cbiAgICBpbXBsZW1lbnRzIE9uSW5pdCwgSUhhc0FsZXJ0RmVhdHVyZSB7XG5cbiAgICBmYVNwaW5uZXIgPSBmYVNwaW5uZXI7XG5cbiAgICBASW5wdXQoKSB0aXRsZTogc3RyaW5nID0gJyc7XG4gICAgQElucHV0KCkgaW5pdFNldHRpbmdzOiBJU2V0dGluZ3M7XG4gICAgQElucHV0KCkgaW5pdFZhbHVlOiBJU2NoZWR1bGVUaW1lO1xuICAgIEBJbnB1dCgpIG9uQ29uZmlybUFzeW5jOiAoZGF0YTogSVNjaGVkdWxlVGltZSkgPT4gUHJvbWlzZTxhbnk+O1xuXG4gICAgb3V0cHV0VmFsdWU6IElTY2hlZHVsZVRpbWU7XG4gICAgaXNWYWxpZDogYm9vbGVhbjtcblxuICAgIGlzU2F2aW5nOiBib29sZWFuO1xuICAgIGFsZXJ0UHJvdmlkZXIgPSBuZXcgQWxlcnREZWZhdWx0SW1wbCgpO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBic01vZGFsUmVmOiBCc01vZGFsUmVmLFxuICAgICAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgYnNNb2RhbFNlcnZpY2U6IEJzTW9kYWxTZXJ2aWNlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgZ2V0IGFsZXJ0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxlcnRQcm92aWRlci5kYXRhO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLmNsb3NlTW9kYWwobnVsbCk7XG4gICAgfVxuXG4gICAgdXBkYXRlU2NoZWR1bGVyKGV2dDogSVNjaGVkdWxlVGltZSkge1xuICAgICAgICB0aGlzLm91dHB1dFZhbHVlID0gZXZ0O1xuICAgIH1cblxuICAgIHZhbGlkYXRlU2NoZWR1bGVyKGV2dDogeyB2YWxpZDogYm9vbGVhbiB9KSB7XG4gICAgICAgIGlmIChldnQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IGV2dC52YWxpZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGNvbmZpcm1Bc3luYygpIHtcbiAgICAgICAgdGhpcy5hbGVydFByb3ZpZGVyLmNsZWFuKCk7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKSB7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0UHJvdmlkZXIud2FybmluZygncG9scENyb25Kb2IuZ2VuZXJhbCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc1NhdmluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuYWxlcnRQcm92aWRlci5pbmZvKCdwb2xwQ3JvbkpvYi5tZXNzYWdlcy53b3JraW5nJyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLm9uQ29uZmlybUFzeW5jKHRoaXMub3V0cHV0VmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKHRoaXMub3V0cHV0VmFsdWUpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgdGhpcy5hbGVydFByb3ZpZGVyLmNsZWFuKCk7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0UHJvdmlkZXIuZGFuZ2VyKCdwb2xwQ3JvbkpvYi5lcnJvcnMuc29tZXRoaW5nV3JvbmchJyk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICB0aGlzLmlzU2F2aW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==