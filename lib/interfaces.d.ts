import { IntervalEnum } from '@polpware/fe-utilities';
export declare enum ScheduleTypeEnum {
    OneTime = 1,
    Recurrent = 2,
    Asap = 3
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
export declare function getDefaultScheduleTime(startFromToday?: boolean): IScheduleTime;
export declare function isEqualString(left: string, right: string): boolean;
export declare function isEqualDate(left: Date, right: Date): boolean;
export declare function isEqualTime(left: Date, right: Date): boolean;
export declare function isEqualBool(left: boolean, right: boolean): boolean;
export declare function isEqualScheduleTime(left: IScheduleTime, right: IScheduleTime): boolean;
