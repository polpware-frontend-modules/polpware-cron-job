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
    ScheduleTimeModalComponent.prototype.updateStyle = function (evt) {
        if (evt && evt.opened) {
            var newClasses = this.extraClasses ? this.extraClasses + " has-child-modal" : 'has-child-modal';
            this.bsModalRef.setClass(newClasses);
        }
        else {
            var newClasses = this.extraClasses || '';
            this.bsModalRef.setClass(newClasses);
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
                        _a.trys.push([1, 4, 5, 6]);
                        if (!this.onConfirmAsync) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.onConfirmAsync(this.outputValue)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        this.closeModal(this.outputValue);
                        return [3 /*break*/, 6];
                    case 4:
                        ex_1 = _a.sent();
                        this.alertProvider.clean();
                        this.alertProvider.danger('polpCronJob.errors.somethingWrong');
                        return [3 /*break*/, 6];
                    case 5:
                        this.isSaving = false;
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
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
    return ScheduleTimeModalComponent;
}(ObservableModalAbstractComponent));
export { ScheduleTimeModalComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUtdGltZS1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvY3Jvbi1qb2IvIiwic291cmNlcyI6WyJsaWIvc2NoZWR1bGUtdGltZS1tb2RhbC9zY2hlZHVsZS10aW1lLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWdDLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0NBQWdDLEVBQW9DLE1BQU0seUJBQXlCLENBQUM7QUFDN0csT0FBTyxFQUFFLGdCQUFnQixFQUFvQixNQUFNLHFCQUFxQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFpQmpFO0lBQ1ksOENBQXdFO0lBb0JoRixvQ0FDb0IsVUFBc0IsRUFDbkIsY0FBOEI7UUFGckQsWUFHSSxpQkFBTyxTQUNWO1FBSG1CLGdCQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ25CLG9CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQW5CckQsZUFBUyxHQUFHLFNBQVMsQ0FBQztRQUViLFdBQUssR0FBVyxFQUFFLENBQUM7UUFXNUIsbUJBQWEsR0FBRyxJQUFJLGdCQUFnQixFQUFFLENBQUM7O0lBUXZDLENBQUM7SUFFRCxzQkFBSSw4Q0FBTTthQUFWO1lBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTtJQUVELDZDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsMENBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELG9EQUFlLEdBQWYsVUFBZ0IsR0FBa0I7UUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7SUFDM0IsQ0FBQztJQUVELHNEQUFpQixHQUFqQixVQUFrQixHQUF1QjtRQUNyQyxJQUFJLEdBQUcsRUFBRTtZQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztTQUM1QjtJQUNMLENBQUM7SUFFRCxnREFBVyxHQUFYLFVBQVksR0FBcUI7UUFDN0IsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRTtZQUNuQixJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBSSxJQUFJLENBQUMsWUFBWSxxQkFBa0IsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUM7WUFDbEcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDeEM7YUFBTTtZQUNILElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDO1lBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3hDO0lBQ0wsQ0FBQztJQUVLLGlEQUFZLEdBQWxCOzs7Ozs7d0JBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7NEJBQ2YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQzs0QkFDbEQsc0JBQU87eUJBQ1Y7d0JBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7d0JBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLENBQUM7Ozs7NkJBRWhELElBQUksQ0FBQyxjQUFjLEVBQW5CLHdCQUFtQjt3QkFDbkIscUJBQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUE7O3dCQUEzQyxTQUEyQyxDQUFDOzs7d0JBRWhELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDOzs7O3dCQUVsQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDOzs7d0JBRS9ELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDOzs7Ozs7S0FFN0I7O2dCQXhEK0IsVUFBVTtnQkFDSCxjQUFjOztJQWpCNUM7UUFBUixLQUFLLEVBQUU7OzZEQUFvQjtJQUNuQjtRQUFSLEtBQUssRUFBRTs7b0VBQXlCO0lBQ3hCO1FBQVIsS0FBSyxFQUFFOztpRUFBMEI7SUFDekI7UUFBUixLQUFLLEVBQUU7O3NFQUF1RDtJQUV0RDtRQUFSLEtBQUssRUFBRTs7b0VBQXNCO0lBWHJCLDBCQUEwQjtRQUx0QyxTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsNkJBQTZCO1lBQ3ZDLGcwQ0FBbUQ7O1NBRXRELENBQUM7eUNBdUJrQyxVQUFVO1lBQ0gsY0FBYztPQXZCNUMsMEJBQTBCLENBZ0Z0QztJQUFELGlDQUFDO0NBQUEsQUFoRkQsQ0FDWSxnQ0FBZ0MsR0ErRTNDO1NBaEZZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZhU3Bpbm5lciB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlTW9kYWxBYnN0cmFjdENvbXBvbmVudCwgSUhhc0NoaWxkTW9kYWwsIElDaGlsZE1vZGFsU3RhdGUgfSBmcm9tICdAcG9scHdhcmUvYnMtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBBbGVydERlZmF1bHRJbXBsLCBJSGFzQWxlcnRGZWF0dXJlIH0gZnJvbSAnQHBvbHB3YXJlL25neC1hbGVydCc7XG5pbXBvcnQgeyBCc01vZGFsUmVmLCBCc01vZGFsU2VydmljZSB9IGZyb20gJ25neC1ib290c3RyYXAvbW9kYWwnO1xuaW1wb3J0IHsgSVNjaGVkdWxlVGltZSB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgSVNldHRpbmdzIH0gZnJvbSAnLi4vc2NoZWR1bGUtdGltZS1waWNrZXIvc2NoZWR1bGUtdGltZS1waWNrZXIuY29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBJU2NoZWR1bGVUaW1lTW9kYWxJbnB1dCB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBpbml0U2V0dGluZ3M6IElTZXR0aW5ncztcbiAgICBpbml0VmFsdWU6IElTY2hlZHVsZVRpbWU7XG4gICAgZXh0cmFDbGFzc2VzOiBzdHJpbmc7XG4gICAgb25Db25maXJtQXN5bmM6IChkYXRhOiBJU2NoZWR1bGVUaW1lKSA9PiBQcm9taXNlPGFueT47XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncG9scC1icy1zY2hlZHVsZS10aW1lLW1vZGFsJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vc2NoZWR1bGUtdGltZS1tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vc2NoZWR1bGUtdGltZS1tb2RhbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2NoZWR1bGVUaW1lTW9kYWxDb21wb25lbnRcbiAgICBleHRlbmRzIE9ic2VydmFibGVNb2RhbEFic3RyYWN0Q29tcG9uZW50PElTY2hlZHVsZVRpbWVNb2RhbElucHV0LCBJU2NoZWR1bGVUaW1lPlxuICAgIGltcGxlbWVudHMgT25Jbml0LCBJSGFzQWxlcnRGZWF0dXJlLCBJSGFzQ2hpbGRNb2RhbCB7XG5cbiAgICBmYVNwaW5uZXIgPSBmYVNwaW5uZXI7XG5cbiAgICBASW5wdXQoKSB0aXRsZTogc3RyaW5nID0gJyc7XG4gICAgQElucHV0KCkgaW5pdFNldHRpbmdzOiBJU2V0dGluZ3M7XG4gICAgQElucHV0KCkgaW5pdFZhbHVlOiBJU2NoZWR1bGVUaW1lO1xuICAgIEBJbnB1dCgpIG9uQ29uZmlybUFzeW5jOiAoZGF0YTogSVNjaGVkdWxlVGltZSkgPT4gUHJvbWlzZTxhbnk+O1xuICAgIC8vIFdlIG5lZWQgdGhpcyBvbmUgdG8gZ2V0IHRoZSBpbml0IGNsYXNzLlxuICAgIEBJbnB1dCgpIGV4dHJhQ2xhc3Nlczogc3RyaW5nO1xuXG4gICAgb3V0cHV0VmFsdWU6IElTY2hlZHVsZVRpbWU7XG4gICAgaXNWYWxpZDogYm9vbGVhbjtcblxuICAgIGlzU2F2aW5nOiBib29sZWFuO1xuICAgIGFsZXJ0UHJvdmlkZXIgPSBuZXcgQWxlcnREZWZhdWx0SW1wbCgpO1xuXG4gICAgc2hvd0JhY2tkcm9wOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBic01vZGFsUmVmOiBCc01vZGFsUmVmLFxuICAgICAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgYnNNb2RhbFNlcnZpY2U6IEJzTW9kYWxTZXJ2aWNlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgZ2V0IGFsZXJ0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxlcnRQcm92aWRlci5kYXRhO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLmNsb3NlTW9kYWwobnVsbCk7XG4gICAgfVxuXG4gICAgdXBkYXRlU2NoZWR1bGVyKGV2dDogSVNjaGVkdWxlVGltZSkge1xuICAgICAgICB0aGlzLm91dHB1dFZhbHVlID0gZXZ0O1xuICAgIH1cblxuICAgIHZhbGlkYXRlU2NoZWR1bGVyKGV2dDogeyB2YWxpZDogYm9vbGVhbiB9KSB7XG4gICAgICAgIGlmIChldnQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IGV2dC52YWxpZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVN0eWxlKGV2dDogSUNoaWxkTW9kYWxTdGF0ZSkge1xuICAgICAgICBpZiAoZXZ0ICYmIGV2dC5vcGVuZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0NsYXNzZXMgPSB0aGlzLmV4dHJhQ2xhc3NlcyA/IGAke3RoaXMuZXh0cmFDbGFzc2VzfSBoYXMtY2hpbGQtbW9kYWxgIDogJ2hhcy1jaGlsZC1tb2RhbCc7XG4gICAgICAgICAgICB0aGlzLmJzTW9kYWxSZWYuc2V0Q2xhc3MobmV3Q2xhc3Nlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBuZXdDbGFzc2VzID0gdGhpcy5leHRyYUNsYXNzZXMgfHwgJyc7XG4gICAgICAgICAgICB0aGlzLmJzTW9kYWxSZWYuc2V0Q2xhc3MobmV3Q2xhc3Nlcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBjb25maXJtQXN5bmMoKSB7XG4gICAgICAgIHRoaXMuYWxlcnRQcm92aWRlci5jbGVhbigpO1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCkge1xuICAgICAgICAgICAgdGhpcy5hbGVydFByb3ZpZGVyLndhcm5pbmcoJ3BvbHBDcm9uSm9iLmdlbmVyYWwnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNTYXZpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmFsZXJ0UHJvdmlkZXIuaW5mbygncG9scENyb25Kb2IubWVzc2FnZXMud29ya2luZycpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHRoaXMub25Db25maXJtQXN5bmMpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLm9uQ29uZmlybUFzeW5jKHRoaXMub3V0cHV0VmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKHRoaXMub3V0cHV0VmFsdWUpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgdGhpcy5hbGVydFByb3ZpZGVyLmNsZWFuKCk7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0UHJvdmlkZXIuZGFuZ2VyKCdwb2xwQ3JvbkpvYi5lcnJvcnMuc29tZXRoaW5nV3JvbmcnKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRoaXMuaXNTYXZpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIl19