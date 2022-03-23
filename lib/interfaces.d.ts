import { IntervalEnum } from '@polpware/fe-utilities';
export declare enum ScheduleTypeEnum {
    OneTime = 1,
    Recurrent = 2
}
export interface IScheduleTime {
    isRecurrent: boolean;
    recurrence?: IntervalEnum;
    holidays?: string;
    excludeWeekends?: boolean;
    otherDays?: string;
    customExpr?: string;
    startDate?: Date;
    endDate?: Date;
    time?: Date;
    monthOfYear?: number;
    dayOfMonth?: number;
    dayOfWeek?: number;
}
export declare function getDefaultScheduleTime(): IScheduleTime;
