import { __decorate, __extends, __metadata } from "tslib";
import { ChangeDetectorRef, Pipe } from '@angular/core';
import { HyperTranslatePipeBase } from '@polpware/ngx-i18n';
import { CronJobTranslatorService } from './cron-job-translator.service';
var CronJobHyperTransPipe = /** @class */ (function (_super) {
    __extends(CronJobHyperTransPipe, _super);
    function CronJobHyperTransPipe(_translate, _ref) {
        var _this = _super.call(this) || this;
        _this._translate = _translate;
        _this._ref = _ref;
        return _this;
    }
    CronJobHyperTransPipe.ctorParameters = function () { return [
        { type: CronJobTranslatorService },
        { type: ChangeDetectorRef }
    ]; };
    CronJobHyperTransPipe = __decorate([
        Pipe({
            name: 'cronJobHyperTrans',
            pure: false
        }),
        __metadata("design:paramtypes", [CronJobTranslatorService, ChangeDetectorRef])
    ], CronJobHyperTransPipe);
    return CronJobHyperTransPipe;
}(HyperTranslatePipeBase));
export { CronJobHyperTransPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi1qb2ItaHlwZXItdHJhbnMucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9jcm9uLWpvYi8iLCJzb3VyY2VzIjpbImxpYi9jcm9uLWpvYi1oeXBlci10cmFucy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzVELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBTXpFO0lBQTJDLHlDQUFzQjtJQUU3RCwrQkFBc0IsVUFBb0MsRUFBWSxJQUF1QjtRQUE3RixZQUNJLGlCQUFPLFNBQ1Y7UUFGcUIsZ0JBQVUsR0FBVixVQUFVLENBQTBCO1FBQVksVUFBSSxHQUFKLElBQUksQ0FBbUI7O0lBRTdGLENBQUM7O2dCQUZpQyx3QkFBd0I7Z0JBQWtCLGlCQUFpQjs7SUFGcEYscUJBQXFCO1FBSmpDLElBQUksQ0FBQztZQUNGLElBQUksRUFBRSxtQkFBbUI7WUFDekIsSUFBSSxFQUFFLEtBQUs7U0FDZCxDQUFDO3lDQUdvQyx3QkFBd0IsRUFBa0IsaUJBQWlCO09BRnBGLHFCQUFxQixDQU1qQztJQUFELDRCQUFDO0NBQUEsQUFORCxDQUEyQyxzQkFBc0IsR0FNaEU7U0FOWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHlwZXJUcmFuc2xhdGVQaXBlQmFzZSB9IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtaTE4bic7XG5pbXBvcnQgeyBDcm9uSm9iVHJhbnNsYXRvclNlcnZpY2UgfSBmcm9tICcuL2Nyb24tam9iLXRyYW5zbGF0b3Iuc2VydmljZSc7XG5cbkBQaXBlKHtcbiAgICBuYW1lOiAnY3JvbkpvYkh5cGVyVHJhbnMnLFxuICAgIHB1cmU6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIENyb25Kb2JIeXBlclRyYW5zUGlwZSBleHRlbmRzIEh5cGVyVHJhbnNsYXRlUGlwZUJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIF90cmFuc2xhdGU6IENyb25Kb2JUcmFuc2xhdG9yU2VydmljZSwgcHJvdGVjdGVkIF9yZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG59XG4iXX0=