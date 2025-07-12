import { NgxTranslatorImplService } from '@polpware/ngx-i18n';
import { defaultDict } from './i18n';
import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
// On purpose do not make it injectable 
export class CronJobTranslatorService extends NgxTranslatorImplService {
    constructor() {
        super();
        this._dict = defaultDict;
    }
    static { this.ɵfac = function CronJobTranslatorService_Factory(t) { return new (t || CronJobTranslatorService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CronJobTranslatorService, factory: CronJobTranslatorService.ɵfac }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CronJobTranslatorService, [{
        type: Injectable
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi1qb2ItdHJhbnNsYXRvci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcG9scHdhcmUvY3Jvbi1qb2Ivc3JjL2xpYi9jcm9uLWpvYi10cmFuc2xhdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNyQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUzQyx3Q0FBd0M7QUFFeEMsTUFBTSxPQUFPLHdCQUF5QixTQUFRLHdCQUF3QjtJQUVsRTtRQUNJLEtBQUssRUFBRSxDQUFDO1FBRVIsSUFBSSxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUM7SUFDN0IsQ0FBQzt5RkFOUSx3QkFBd0I7dUVBQXhCLHdCQUF3QixXQUF4Qix3QkFBd0I7O3VGQUF4Qix3QkFBd0I7Y0FEcEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5neFRyYW5zbGF0b3JJbXBsU2VydmljZSB9IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtaTE4bic7XG5pbXBvcnQgeyBkZWZhdWx0RGljdCB9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuLy8gT24gcHVycG9zZSBkbyBub3QgbWFrZSBpdCBpbmplY3RhYmxlIFxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENyb25Kb2JUcmFuc2xhdG9yU2VydmljZSBleHRlbmRzIE5neFRyYW5zbGF0b3JJbXBsU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLl9kaWN0ID0gZGVmYXVsdERpY3Q7XG4gICAgfVxufVxuIl19