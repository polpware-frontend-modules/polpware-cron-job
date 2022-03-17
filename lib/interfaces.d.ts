/**
 Get the timezone offset between the local time and Utc
 */
export declare function getTimezoneOffset(): number;
export declare enum IntervalEnum {
    Day = 10,
    Week = 50,
    Month = 100,
    Year = 500,
    Custom = 10000
}
export declare enum ScheduleTypeEnum {
    OneTime = 1,
    Recurrent = 2
}
export declare enum MonthEnum {
    January = 1,
    February = 2,
    March = 3,
    April = 4,
    May = 5,
    June = 6,
    July = 7,
    August = 8,
    September = 9,
    October = 10,
    November = 11,
    December = 12
}
export declare function getMonthsOfYear(): any[];
export declare enum DayOfWeekEnum {
    Sunday = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6
}
export declare function getDaysOfWeek(): any[];
export declare function getDaysOfMonth(): any[];
export interface IScheduleTime {
    isRecurrent: boolean;
    recurrence?: IntervalEnum;
    holidays?: string;
    excludeWeekends?: boolean;
    otherDays?: string;
    customExpr?: string;
    timezone: number;
    startDate?: Date;
    endDate?: Date;
    time?: Date;
    monthOfYear?: number;
    dayOfMonth?: number;
    dayOfWeek?: number;
}
export declare function getDefaultScheduleTime(): IScheduleTime;
