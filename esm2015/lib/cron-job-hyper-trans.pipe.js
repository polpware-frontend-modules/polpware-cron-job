import { __decorate, __metadata } from "tslib";
import { ChangeDetectorRef, Pipe } from '@angular/core';
import { HyperTranslatePipeBase } from '@polpware/ngx-i18n';
import { CronJobTranslatorService } from './cron-job-translator.service';
let CronJobHyperTransPipe = class CronJobHyperTransPipe extends HyperTranslatePipeBase {
    constructor(_translate, _ref) {
        super();
        this._translate = _translate;
        this._ref = _ref;
    }
};
CronJobHyperTransPipe.ctorParameters = () => [
    { type: CronJobTranslatorService },
    { type: ChangeDetectorRef }
];
CronJobHyperTransPipe = __decorate([
    Pipe({
        name: 'cronJobHyperTrans',
        pure: false
    }),
    __metadata("design:paramtypes", [CronJobTranslatorService, ChangeDetectorRef])
], CronJobHyperTransPipe);
export { CronJobHyperTransPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi1qb2ItaHlwZXItdHJhbnMucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9jcm9uLWpvYi8iLCJzb3VyY2VzIjpbImxpYi9jcm9uLWpvYi1oeXBlci10cmFucy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzVELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBTXpFLElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXNCLFNBQVEsc0JBQXNCO0lBRTdELFlBQXNCLFVBQW9DLEVBQVksSUFBdUI7UUFDekYsS0FBSyxFQUFFLENBQUM7UUFEVSxlQUFVLEdBQVYsVUFBVSxDQUEwQjtRQUFZLFNBQUksR0FBSixJQUFJLENBQW1CO0lBRTdGLENBQUM7Q0FFSixDQUFBOztZQUpxQyx3QkFBd0I7WUFBa0IsaUJBQWlCOztBQUZwRixxQkFBcUI7SUFKakMsSUFBSSxDQUFDO1FBQ0YsSUFBSSxFQUFFLG1CQUFtQjtRQUN6QixJQUFJLEVBQUUsS0FBSztLQUNkLENBQUM7cUNBR29DLHdCQUF3QixFQUFrQixpQkFBaUI7R0FGcEYscUJBQXFCLENBTWpDO1NBTlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh5cGVyVHJhbnNsYXRlUGlwZUJhc2UgfSBmcm9tICdAcG9scHdhcmUvbmd4LWkxOG4nO1xuaW1wb3J0IHsgQ3JvbkpvYlRyYW5zbGF0b3JTZXJ2aWNlIH0gZnJvbSAnLi9jcm9uLWpvYi10cmFuc2xhdG9yLnNlcnZpY2UnO1xuXG5AUGlwZSh7XG4gICAgbmFtZTogJ2Nyb25Kb2JIeXBlclRyYW5zJyxcbiAgICBwdXJlOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBDcm9uSm9iSHlwZXJUcmFuc1BpcGUgZXh0ZW5kcyBIeXBlclRyYW5zbGF0ZVBpcGVCYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfdHJhbnNsYXRlOiBDcm9uSm9iVHJhbnNsYXRvclNlcnZpY2UsIHByb3RlY3RlZCBfcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxufVxuIl19