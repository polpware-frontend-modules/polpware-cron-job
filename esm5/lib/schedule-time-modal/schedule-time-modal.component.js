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
        this.closeModal(this.outputValue);
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
                            this.alertProvider.warning('Data is not valid!');
                            return [2 /*return*/];
                        }
                        this.isSaving = true;
                        this.alertProvider.warning('Working ....');
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
                        this.alertProvider.danger('Something went wrong. Please try later!');
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
            template: "<div class=\"modal-header\" polpModalDraggable>\n    <h4 class=\"modal-title\">{{title}}</h4>\n</div>\n<div class=\"modal-body\">\n    <polp-bs-schedule-time-picker [initSettings]=\"initSettings\"\n                                  [initValue]=\"initValue\"\n                                  (onValidation)=\"validateScheduler($event)\"\n                                  (onValueChanged)=\"updateScheduler($event)\">\n    </polp-bs-schedule-time-picker>\n    \n    <ng-container *ngFor=\"let a of alerts\">\n        <alert [type]=\"a.type\" [dismissOnTimeout]=\"a.timeout\">\n            {{a.message}}\n        </alert>\n    </ng-container>\n    \n</div>\n<div class=\"modal-footer\">\n    <div class=\"d-flex justify-content-end\">\n        <button class=\"btn btn-secondary mr-2\" (click)=\"close()\">\n            Close\n        </button>\n        <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"isValid\"\n                (click)=\"confirmAsync()\">\n            Confirm\n            <fa-icon [icon]=\"faSpinner\" [spin]=\"true\" class=\"ml-1\" *ngIf=\"isSaving\"></fa-icon>\n        </button>\n    </div>\n</div>\n",
            styles: [""]
        }),
        __metadata("design:paramtypes", [BsModalRef,
            BsModalService])
    ], ScheduleTimeModalComponent);
    return ScheduleTimeModalComponent;
}(ObservableModalAbstractComponent));
export { ScheduleTimeModalComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUtdGltZS1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvY3Jvbi1qb2IvIiwic291cmNlcyI6WyJsaWIvc2NoZWR1bGUtdGltZS1tb2RhbC9zY2hlZHVsZS10aW1lLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzlELE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzNFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBb0IsTUFBTSxxQkFBcUIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBZ0JqRTtJQUNZLDhDQUE0RDtJQWdCcEUsb0NBQ29CLFVBQXNCLEVBQ25CLGNBQThCO1FBRnJELFlBR0ksaUJBQU8sU0FDVjtRQUhtQixnQkFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNuQixvQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFmckQsZUFBUyxHQUFHLFNBQVMsQ0FBQztRQUViLFdBQUssR0FBVyxFQUFFLENBQUM7UUFTNUIsbUJBQWEsR0FBRyxJQUFJLGdCQUFnQixFQUFFLENBQUM7O0lBTXZDLENBQUM7SUFFRCxzQkFBSSw4Q0FBTTthQUFWO1lBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTtJQUVELDZDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsMENBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxvREFBZSxHQUFmLFVBQWdCLEdBQWtCO1FBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO0lBQzNCLENBQUM7SUFFRCxzREFBaUIsR0FBakIsVUFBa0IsR0FBdUI7UUFDckMsSUFBSSxHQUFHLEVBQUU7WUFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7U0FDNUI7SUFDTCxDQUFDO0lBRUssaURBQVksR0FBbEI7Ozs7Ozt3QkFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTs0QkFDZixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDOzRCQUNqRCxzQkFBTzt5QkFDVjt3QkFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzt3QkFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7Ozs7d0JBRXZDLHFCQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFBOzt3QkFBM0MsU0FBMkMsQ0FBQzt3QkFDNUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Ozs7d0JBRWxDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7d0JBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLHlDQUF5QyxDQUFDLENBQUM7Ozt3QkFFckUsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Ozs7OztLQUU3Qjs7Z0JBNUMrQixVQUFVO2dCQUNILGNBQWM7O0lBYjVDO1FBQVIsS0FBSyxFQUFFOzs2REFBb0I7SUFDbkI7UUFBUixLQUFLLEVBQUU7O29FQUF5QjtJQUN4QjtRQUFSLEtBQUssRUFBRTs7aUVBQTBCO0lBQ3pCO1FBQVIsS0FBSyxFQUFFOztzRUFBdUQ7SUFUdEQsMEJBQTBCO1FBTHRDLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSw2QkFBNkI7WUFDdkMsdW5DQUFtRDs7U0FFdEQsQ0FBQzt5Q0FtQmtDLFVBQVU7WUFDSCxjQUFjO09BbkI1QywwQkFBMEIsQ0FnRXRDO0lBQUQsaUNBQUM7Q0FBQSxBQWhFRCxDQUNZLGdDQUFnQyxHQStEM0M7U0FoRVksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmYVNwaW5uZXIgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZU1vZGFsQWJzdHJhY3RDb21wb25lbnQgfSBmcm9tICdAcG9scHdhcmUvYnMtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBBbGVydERlZmF1bHRJbXBsLCBJSGFzQWxlcnRGZWF0dXJlIH0gZnJvbSAnQHBvbHB3YXJlL25neC1hbGVydCc7XG5pbXBvcnQgeyBCc01vZGFsUmVmLCBCc01vZGFsU2VydmljZSB9IGZyb20gJ25neC1ib290c3RyYXAvbW9kYWwnO1xuaW1wb3J0IHsgSVNjaGVkdWxlVGltZSB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgSVNldHRpbmdzIH0gZnJvbSAnLi4vc2NoZWR1bGUtdGltZS1waWNrZXIvc2NoZWR1bGUtdGltZS1waWNrZXIuY29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBJTW9kYWxJbnB1dCB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBpbml0U2V0dGluZ3M6IElTZXR0aW5ncztcbiAgICBpbml0VmFsdWU6IElTY2hlZHVsZVRpbWU7XG4gICAgb25Db25maXJtQXN5bmM6IChkYXRhOiBJU2NoZWR1bGVUaW1lKSA9PiBQcm9taXNlPGFueT47XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncG9scC1icy1zY2hlZHVsZS10aW1lLW1vZGFsJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vc2NoZWR1bGUtdGltZS1tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vc2NoZWR1bGUtdGltZS1tb2RhbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2NoZWR1bGVUaW1lTW9kYWxDb21wb25lbnRcbiAgICBleHRlbmRzIE9ic2VydmFibGVNb2RhbEFic3RyYWN0Q29tcG9uZW50PElNb2RhbElucHV0LCBJU2NoZWR1bGVUaW1lPlxuICAgIGltcGxlbWVudHMgT25Jbml0LCBJSGFzQWxlcnRGZWF0dXJlIHtcblxuICAgIGZhU3Bpbm5lciA9IGZhU3Bpbm5lcjtcblxuICAgIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgPSAnJztcbiAgICBASW5wdXQoKSBpbml0U2V0dGluZ3M6IElTZXR0aW5ncztcbiAgICBASW5wdXQoKSBpbml0VmFsdWU6IElTY2hlZHVsZVRpbWU7XG4gICAgQElucHV0KCkgb25Db25maXJtQXN5bmM6IChkYXRhOiBJU2NoZWR1bGVUaW1lKSA9PiBQcm9taXNlPGFueT47XG5cbiAgICBvdXRwdXRWYWx1ZTogSVNjaGVkdWxlVGltZTtcbiAgICBpc1ZhbGlkOiBib29sZWFuO1xuXG4gICAgaXNTYXZpbmc6IGJvb2xlYW47XG4gICAgYWxlcnRQcm92aWRlciA9IG5ldyBBbGVydERlZmF1bHRJbXBsKCk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IGJzTW9kYWxSZWY6IEJzTW9kYWxSZWYsXG4gICAgICAgIHByb3RlY3RlZCByZWFkb25seSBic01vZGFsU2VydmljZTogQnNNb2RhbFNlcnZpY2UpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBnZXQgYWxlcnRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hbGVydFByb3ZpZGVyLmRhdGE7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuY2xvc2VNb2RhbCh0aGlzLm91dHB1dFZhbHVlKTtcbiAgICB9XG5cbiAgICB1cGRhdGVTY2hlZHVsZXIoZXZ0OiBJU2NoZWR1bGVUaW1lKSB7XG4gICAgICAgIHRoaXMub3V0cHV0VmFsdWUgPSBldnQ7XG4gICAgfVxuXG4gICAgdmFsaWRhdGVTY2hlZHVsZXIoZXZ0OiB7IHZhbGlkOiBib29sZWFuIH0pIHtcbiAgICAgICAgaWYgKGV2dCkge1xuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gZXZ0LnZhbGlkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgY29uZmlybUFzeW5jKCkge1xuICAgICAgICB0aGlzLmFsZXJ0UHJvdmlkZXIuY2xlYW4oKTtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWxlcnRQcm92aWRlci53YXJuaW5nKCdEYXRhIGlzIG5vdCB2YWxpZCEnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNTYXZpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmFsZXJ0UHJvdmlkZXIud2FybmluZygnV29ya2luZyAuLi4uJyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLm9uQ29uZmlybUFzeW5jKHRoaXMub3V0cHV0VmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKHRoaXMub3V0cHV0VmFsdWUpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgdGhpcy5hbGVydFByb3ZpZGVyLmNsZWFuKCk7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0UHJvdmlkZXIuZGFuZ2VyKCdTb21ldGhpbmcgd2VudCB3cm9uZy4gUGxlYXNlIHRyeSBsYXRlciEnKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRoaXMuaXNTYXZpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIl19