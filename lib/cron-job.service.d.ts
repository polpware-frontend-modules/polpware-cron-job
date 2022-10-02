import { IScheduleTime } from './interfaces';
import * as i0 from "@angular/core";
export declare class CronJobService {
    constructor();
    parseCronExpr(source: string, target: IScheduleTime): void;
    composeCronExpr(source: IScheduleTime): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<CronJobService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CronJobService>;
}
