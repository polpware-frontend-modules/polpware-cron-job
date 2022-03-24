import { IScheduleTime } from './interfaces';
export declare class CronJobService {
    constructor();
    parseCronExpr(source: string, target: IScheduleTime): void;
    composeCronExpr(source: IScheduleTime): string;
}
