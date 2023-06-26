import { Pipe } from '@angular/core';
import { HyperTranslatePipeBase } from '@polpware/ngx-i18n';
import * as i0 from "@angular/core";
import * as i1 from "./cron-job-translator.service";
export class CronJobHyperTransPipe extends HyperTranslatePipeBase {
    constructor(_translate, _ref) {
        super();
        this._translate = _translate;
        this._ref = _ref;
    }
}
CronJobHyperTransPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: CronJobHyperTransPipe, deps: [{ token: i1.CronJobTranslatorService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Pipe });
CronJobHyperTransPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: CronJobHyperTransPipe, name: "cronJobHyperTrans", pure: false });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: CronJobHyperTransPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'cronJobHyperTrans',
                    pure: false
                }]
        }], ctorParameters: function () { return [{ type: i1.CronJobTranslatorService }, { type: i0.ChangeDetectorRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi1qb2ItaHlwZXItdHJhbnMucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BvbHB3YXJlL2Nyb24tam9iL3NyYy9saWIvY3Jvbi1qb2ItaHlwZXItdHJhbnMucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXFCLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7O0FBTzVELE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxzQkFBc0I7SUFFN0QsWUFBc0IsVUFBb0MsRUFBWSxJQUF1QjtRQUN6RixLQUFLLEVBQUUsQ0FBQztRQURVLGVBQVUsR0FBVixVQUFVLENBQTBCO1FBQVksU0FBSSxHQUFKLElBQUksQ0FBbUI7SUFFN0YsQ0FBQzs7bUhBSlEscUJBQXFCO2lIQUFyQixxQkFBcUI7NEZBQXJCLHFCQUFxQjtrQkFKakMsSUFBSTttQkFBQztvQkFDRixJQUFJLEVBQUUsbUJBQW1CO29CQUN6QixJQUFJLEVBQUUsS0FBSztpQkFDZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIeXBlclRyYW5zbGF0ZVBpcGVCYXNlIH0gZnJvbSAnQHBvbHB3YXJlL25neC1pMThuJztcbmltcG9ydCB7IENyb25Kb2JUcmFuc2xhdG9yU2VydmljZSB9IGZyb20gJy4vY3Jvbi1qb2ItdHJhbnNsYXRvci5zZXJ2aWNlJztcblxuQFBpcGUoe1xuICAgIG5hbWU6ICdjcm9uSm9iSHlwZXJUcmFucycsXG4gICAgcHVyZTogZmFsc2Vcbn0pXG5leHBvcnQgY2xhc3MgQ3JvbkpvYkh5cGVyVHJhbnNQaXBlIGV4dGVuZHMgSHlwZXJUcmFuc2xhdGVQaXBlQmFzZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX3RyYW5zbGF0ZTogQ3JvbkpvYlRyYW5zbGF0b3JTZXJ2aWNlLCBwcm90ZWN0ZWQgX3JlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbn1cbiJdfQ==