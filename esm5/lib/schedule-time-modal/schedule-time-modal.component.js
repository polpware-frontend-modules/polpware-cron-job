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
    ScheduleTimeModalComponent = __decorate([
        Component({
            selector: 'polp-bs-schedule-time-modal',
            template: "<div class=\"modal-header\" polpModalDraggable>\n    <h4 class=\"modal-title\">{{title | cronJobHyperTrans}}</h4>\n</div>\n<div class=\"modal-body\">\n    <polp-bs-schedule-time-picker [initSettings]=\"initSettings\"\n                                  [initValue]=\"initValue\"\n                                  (onValidation)=\"validateScheduler($event)\"\n                                  (onValueChanged)=\"updateScheduler($event)\">\n    </polp-bs-schedule-time-picker>\n    \n    <ng-container *ngFor=\"let a of alerts\">\n        <alert [type]=\"a.type\" [dismissOnTimeout]=\"a.timeout\">\n            {{a.message | cronJobHyperTrans}}\n        </alert>\n    </ng-container>\n    \n</div>\n<div class=\"modal-footer\">\n    <div class=\"d-flex justify-content-end\">\n        <button class=\"btn btn-secondary mr-2\" (click)=\"close()\">\n            {{'polpCronJob.closeBtn' | cronJobHyperTrans}}\n        </button>\n        <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"isValid\"\n                (click)=\"confirmAsync()\">\n            {{'polpCronJob.confirmBtn' | cronJobHyperTrans}}\n            <fa-icon [icon]=\"faSpinner\" [spin]=\"true\" class=\"ml-1\" *ngIf=\"isSaving\"></fa-icon>\n        </button>\n    </div>\n</div>\n",
            styles: [""]
        }),
        __metadata("design:paramtypes", [BsModalRef,
            BsModalService])
    ], ScheduleTimeModalComponent);
    return ScheduleTimeModalComponent;
}(ObservableModalAbstractComponent));
export { ScheduleTimeModalComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUtdGltZS1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvY3Jvbi1qb2IvIiwic291cmNlcyI6WyJsaWIvc2NoZWR1bGUtdGltZS1tb2RhbC9zY2hlZHVsZS10aW1lLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzlELE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzNFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBb0IsTUFBTSxxQkFBcUIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBZ0JqRTtJQUNZLDhDQUF3RTtJQWdCaEYsb0NBQ29CLFVBQXNCLEVBQ25CLGNBQThCO1FBRnJELFlBR0ksaUJBQU8sU0FDVjtRQUhtQixnQkFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNuQixvQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFmckQsZUFBUyxHQUFHLFNBQVMsQ0FBQztRQUViLFdBQUssR0FBVyxFQUFFLENBQUM7UUFTNUIsbUJBQWEsR0FBRyxJQUFJLGdCQUFnQixFQUFFLENBQUM7O0lBTXZDLENBQUM7SUFFRCxzQkFBSSw4Q0FBTTthQUFWO1lBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTtJQUVELDZDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsMENBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELG9EQUFlLEdBQWYsVUFBZ0IsR0FBa0I7UUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7SUFDM0IsQ0FBQztJQUVELHNEQUFpQixHQUFqQixVQUFrQixHQUF1QjtRQUNyQyxJQUFJLEdBQUcsRUFBRTtZQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztTQUM1QjtJQUNMLENBQUM7SUFFSyxpREFBWSxHQUFsQjs7Ozs7O3dCQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7d0JBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFOzRCQUNmLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7NEJBQ2xELHNCQUFPO3lCQUNWO3dCQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO3dCQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDOzs7OzZCQUVoRCxJQUFJLENBQUMsY0FBYyxFQUFuQix3QkFBbUI7d0JBQ25CLHFCQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFBOzt3QkFBM0MsU0FBMkMsQ0FBQzs7O3dCQUVoRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzs7Ozt3QkFFbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsbUNBQW1DLENBQUMsQ0FBQzs7O3dCQUUvRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQzs7Ozs7O0tBRTdCOztnQkE5QytCLFVBQVU7Z0JBQ0gsY0FBYzs7SUFiNUM7UUFBUixLQUFLLEVBQUU7OzZEQUFvQjtJQUNuQjtRQUFSLEtBQUssRUFBRTs7b0VBQXlCO0lBQ3hCO1FBQVIsS0FBSyxFQUFFOztpRUFBMEI7SUFDekI7UUFBUixLQUFLLEVBQUU7O3NFQUF1RDtJQVR0RCwwQkFBMEI7UUFMdEMsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLDZCQUE2QjtZQUN2QyxpdkNBQW1EOztTQUV0RCxDQUFDO3lDQW1Ca0MsVUFBVTtZQUNILGNBQWM7T0FuQjVDLDBCQUEwQixDQWtFdEM7SUFBRCxpQ0FBQztDQUFBLEFBbEVELENBQ1ksZ0NBQWdDLEdBaUUzQztTQWxFWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZhU3Bpbm5lciB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlTW9kYWxBYnN0cmFjdENvbXBvbmVudCB9IGZyb20gJ0Bwb2xwd2FyZS9icy1jb21wb25lbnRzJztcbmltcG9ydCB7IEFsZXJ0RGVmYXVsdEltcGwsIElIYXNBbGVydEZlYXR1cmUgfSBmcm9tICdAcG9scHdhcmUvbmd4LWFsZXJ0JztcbmltcG9ydCB7IEJzTW9kYWxSZWYsIEJzTW9kYWxTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9tb2RhbCc7XG5pbXBvcnQgeyBJU2NoZWR1bGVUaW1lIH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBJU2V0dGluZ3MgfSBmcm9tICcuLi9zY2hlZHVsZS10aW1lLXBpY2tlci9zY2hlZHVsZS10aW1lLXBpY2tlci5jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTY2hlZHVsZVRpbWVNb2RhbElucHV0IHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGluaXRTZXR0aW5nczogSVNldHRpbmdzO1xuICAgIGluaXRWYWx1ZTogSVNjaGVkdWxlVGltZTtcbiAgICBvbkNvbmZpcm1Bc3luYzogKGRhdGE6IElTY2hlZHVsZVRpbWUpID0+IFByb21pc2U8YW55Pjtcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb2xwLWJzLXNjaGVkdWxlLXRpbWUtbW9kYWwnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zY2hlZHVsZS10aW1lLW1vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9zY2hlZHVsZS10aW1lLW1vZGFsLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTY2hlZHVsZVRpbWVNb2RhbENvbXBvbmVudFxuICAgIGV4dGVuZHMgT2JzZXJ2YWJsZU1vZGFsQWJzdHJhY3RDb21wb25lbnQ8SVNjaGVkdWxlVGltZU1vZGFsSW5wdXQsIElTY2hlZHVsZVRpbWU+XG4gICAgaW1wbGVtZW50cyBPbkluaXQsIElIYXNBbGVydEZlYXR1cmUge1xuXG4gICAgZmFTcGlubmVyID0gZmFTcGlubmVyO1xuXG4gICAgQElucHV0KCkgdGl0bGU6IHN0cmluZyA9ICcnO1xuICAgIEBJbnB1dCgpIGluaXRTZXR0aW5nczogSVNldHRpbmdzO1xuICAgIEBJbnB1dCgpIGluaXRWYWx1ZTogSVNjaGVkdWxlVGltZTtcbiAgICBASW5wdXQoKSBvbkNvbmZpcm1Bc3luYzogKGRhdGE6IElTY2hlZHVsZVRpbWUpID0+IFByb21pc2U8YW55PjtcblxuICAgIG91dHB1dFZhbHVlOiBJU2NoZWR1bGVUaW1lO1xuICAgIGlzVmFsaWQ6IGJvb2xlYW47XG5cbiAgICBpc1NhdmluZzogYm9vbGVhbjtcbiAgICBhbGVydFByb3ZpZGVyID0gbmV3IEFsZXJ0RGVmYXVsdEltcGwoKTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgYnNNb2RhbFJlZjogQnNNb2RhbFJlZixcbiAgICAgICAgcHJvdGVjdGVkIHJlYWRvbmx5IGJzTW9kYWxTZXJ2aWNlOiBCc01vZGFsU2VydmljZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGdldCBhbGVydHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFsZXJ0UHJvdmlkZXIuZGF0YTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5jbG9zZU1vZGFsKG51bGwpO1xuICAgIH1cblxuICAgIHVwZGF0ZVNjaGVkdWxlcihldnQ6IElTY2hlZHVsZVRpbWUpIHtcbiAgICAgICAgdGhpcy5vdXRwdXRWYWx1ZSA9IGV2dDtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZVNjaGVkdWxlcihldnQ6IHsgdmFsaWQ6IGJvb2xlYW4gfSkge1xuICAgICAgICBpZiAoZXZ0KSB7XG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSBldnQudmFsaWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBjb25maXJtQXN5bmMoKSB7XG4gICAgICAgIHRoaXMuYWxlcnRQcm92aWRlci5jbGVhbigpO1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCkge1xuICAgICAgICAgICAgdGhpcy5hbGVydFByb3ZpZGVyLndhcm5pbmcoJ3BvbHBDcm9uSm9iLmdlbmVyYWwnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNTYXZpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmFsZXJ0UHJvdmlkZXIuaW5mbygncG9scENyb25Kb2IubWVzc2FnZXMud29ya2luZycpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHRoaXMub25Db25maXJtQXN5bmMpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLm9uQ29uZmlybUFzeW5jKHRoaXMub3V0cHV0VmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKHRoaXMub3V0cHV0VmFsdWUpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgdGhpcy5hbGVydFByb3ZpZGVyLmNsZWFuKCk7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0UHJvdmlkZXIuZGFuZ2VyKCdwb2xwQ3JvbkpvYi5lcnJvcnMuc29tZXRoaW5nV3JvbmcnKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRoaXMuaXNTYXZpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIl19