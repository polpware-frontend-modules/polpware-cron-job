/**
 Get the timezone offset between the local time and Utc
 */
export function getTimezoneOffset() {
    var d = new Date();
    var n = d.getTimezoneOffset();
    return -Math.floor(n / 60);
}
export var IntervalEnum;
(function (IntervalEnum) {
    IntervalEnum[IntervalEnum["Day"] = 10] = "Day";
    IntervalEnum[IntervalEnum["Week"] = 50] = "Week";
    IntervalEnum[IntervalEnum["Month"] = 100] = "Month";
    IntervalEnum[IntervalEnum["Year"] = 500] = "Year";
    IntervalEnum[IntervalEnum["Custom"] = 10000] = "Custom";
})(IntervalEnum || (IntervalEnum = {}));
export var ScheduleTypeEnum;
(function (ScheduleTypeEnum) {
    ScheduleTypeEnum[ScheduleTypeEnum["OneTime"] = 1] = "OneTime";
    ScheduleTypeEnum[ScheduleTypeEnum["Recurrent"] = 2] = "Recurrent";
})(ScheduleTypeEnum || (ScheduleTypeEnum = {}));
export var MonthEnum;
(function (MonthEnum) {
    MonthEnum[MonthEnum["January"] = 1] = "January";
    MonthEnum[MonthEnum["February"] = 2] = "February";
    MonthEnum[MonthEnum["March"] = 3] = "March";
    MonthEnum[MonthEnum["April"] = 4] = "April";
    MonthEnum[MonthEnum["May"] = 5] = "May";
    MonthEnum[MonthEnum["June"] = 6] = "June";
    MonthEnum[MonthEnum["July"] = 7] = "July";
    MonthEnum[MonthEnum["August"] = 8] = "August";
    MonthEnum[MonthEnum["September"] = 9] = "September";
    MonthEnum[MonthEnum["October"] = 10] = "October";
    MonthEnum[MonthEnum["November"] = 11] = "November";
    MonthEnum[MonthEnum["December"] = 12] = "December";
})(MonthEnum || (MonthEnum = {}));
export function getMonthsOfYear() {
    var ret = [];
    for (var enumMember in MonthEnum) {
        var isValueProperty = parseInt(enumMember, 10) >= 0;
        if (isValueProperty) {
            ret.push({
                value: enumMember,
                text: 'polpCronJob.' + MonthEnum[enumMember]
            });
        }
    }
    return ret;
}
export var DayOfWeekEnum;
(function (DayOfWeekEnum) {
    DayOfWeekEnum[DayOfWeekEnum["Sunday"] = 0] = "Sunday";
    DayOfWeekEnum[DayOfWeekEnum["Monday"] = 1] = "Monday";
    DayOfWeekEnum[DayOfWeekEnum["Tuesday"] = 2] = "Tuesday";
    DayOfWeekEnum[DayOfWeekEnum["Wednesday"] = 3] = "Wednesday";
    DayOfWeekEnum[DayOfWeekEnum["Thursday"] = 4] = "Thursday";
    DayOfWeekEnum[DayOfWeekEnum["Friday"] = 5] = "Friday";
    DayOfWeekEnum[DayOfWeekEnum["Saturday"] = 6] = "Saturday";
})(DayOfWeekEnum || (DayOfWeekEnum = {}));
export function getDaysOfWeek() {
    var ret = [];
    for (var enumMember in DayOfWeekEnum) {
        var isValueProperty = parseInt(enumMember, 10) >= 0;
        if (isValueProperty) {
            ret.push({
                value: enumMember,
                text: 'polpCronJob.' + DayOfWeekEnum[enumMember]
            });
        }
    }
    return ret;
}
export function getDaysOfMonth() {
    var ret = [];
    for (var i = 1; i < 32; i++) {
        ret.push({
            value: i,
            text: i.toString()
        });
    }
    return ret;
}
export function getDefaultScheduleTime() {
    var today = new Date();
    var tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return {
        isRecurrent: false,
        recurrence: 0,
        holidays: '',
        excludeWeekends: false,
        otherDays: '',
        customExpr: '',
        timezone: getTimezoneOffset(),
        startDate: tomorrow,
        endDate: null,
        time: today,
        monthOfYear: MonthEnum.January,
        dayOfMonth: 1,
        dayOfWeek: DayOfWeekEnum.Monday
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9jcm9uLWpvYi8iLCJzb3VyY2VzIjpbImxpYi9pbnRlcmZhY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBQ0gsTUFBTSxVQUFVLGlCQUFpQjtJQUM3QixJQUFNLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ3JCLElBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ2hDLE9BQU8sQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUNoQyxDQUFDO0FBRUQsTUFBTSxDQUFOLElBQVksWUFNWDtBQU5ELFdBQVksWUFBWTtJQUNwQiw4Q0FBUSxDQUFBO0lBQ1IsZ0RBQVMsQ0FBQTtJQUNULG1EQUFXLENBQUE7SUFDWCxpREFBVSxDQUFBO0lBQ1YsdURBQWMsQ0FBQTtBQUNsQixDQUFDLEVBTlcsWUFBWSxLQUFaLFlBQVksUUFNdkI7QUFFRCxNQUFNLENBQU4sSUFBWSxnQkFHWDtBQUhELFdBQVksZ0JBQWdCO0lBQ3hCLDZEQUFXLENBQUE7SUFDWCxpRUFBYSxDQUFBO0FBQ2pCLENBQUMsRUFIVyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBRzNCO0FBRUQsTUFBTSxDQUFOLElBQVksU0FhWDtBQWJELFdBQVksU0FBUztJQUNqQiwrQ0FBVyxDQUFBO0lBQ1gsaURBQVEsQ0FBQTtJQUNSLDJDQUFLLENBQUE7SUFDTCwyQ0FBSyxDQUFBO0lBQ0wsdUNBQUcsQ0FBQTtJQUNILHlDQUFJLENBQUE7SUFDSix5Q0FBSSxDQUFBO0lBQ0osNkNBQU0sQ0FBQTtJQUNOLG1EQUFTLENBQUE7SUFDVCxnREFBTyxDQUFBO0lBQ1Asa0RBQVEsQ0FBQTtJQUNSLGtEQUFRLENBQUE7QUFDWixDQUFDLEVBYlcsU0FBUyxLQUFULFNBQVMsUUFhcEI7QUFFRCxNQUFNLFVBQVUsZUFBZTtJQUMzQixJQUFNLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDZixLQUFLLElBQUksVUFBVSxJQUFJLFNBQVMsRUFBRTtRQUM5QixJQUFJLGVBQWUsR0FBRyxRQUFRLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNuRCxJQUFJLGVBQWUsRUFBRTtZQUNqQixHQUFHLENBQUMsSUFBSSxDQUFDO2dCQUNMLEtBQUssRUFBRSxVQUFVO2dCQUNqQixJQUFJLEVBQUUsY0FBYyxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUM7YUFDL0MsQ0FBQyxDQUFDO1NBQ047S0FDSjtJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2YsQ0FBQztBQUdELE1BQU0sQ0FBTixJQUFZLGFBUVg7QUFSRCxXQUFZLGFBQWE7SUFDckIscURBQVUsQ0FBQTtJQUNWLHFEQUFNLENBQUE7SUFDTix1REFBTyxDQUFBO0lBQ1AsMkRBQVMsQ0FBQTtJQUNULHlEQUFRLENBQUE7SUFDUixxREFBTSxDQUFBO0lBQ04seURBQVEsQ0FBQTtBQUNaLENBQUMsRUFSVyxhQUFhLEtBQWIsYUFBYSxRQVF4QjtBQUdELE1BQU0sVUFBVSxhQUFhO0lBQ3pCLElBQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNmLEtBQUssSUFBSSxVQUFVLElBQUksYUFBYSxFQUFFO1FBQ2xDLElBQUksZUFBZSxHQUFHLFFBQVEsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ25ELElBQUksZUFBZSxFQUFFO1lBQ2pCLEdBQUcsQ0FBQyxJQUFJLENBQUM7Z0JBQ0wsS0FBSyxFQUFFLFVBQVU7Z0JBQ2pCLElBQUksRUFBRSxjQUFjLEdBQUcsYUFBYSxDQUFDLFVBQVUsQ0FBQzthQUNuRCxDQUFDLENBQUM7U0FDTjtLQUNKO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDO0FBRUQsTUFBTSxVQUFVLGNBQWM7SUFDMUIsSUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ2YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN6QixHQUFHLENBQUMsSUFBSSxDQUFDO1lBQ0wsS0FBSyxFQUFFLENBQUM7WUFDUixJQUFJLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRTtTQUNyQixDQUFDLENBQUM7S0FDTjtJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2YsQ0FBQztBQWtCRCxNQUFNLFVBQVUsc0JBQXNCO0lBQ2xDLElBQU0sS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUE7SUFDeEIsSUFBTSxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDaEMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUE7SUFFeEMsT0FBTztRQUNILFdBQVcsRUFBRSxLQUFLO1FBQ2xCLFVBQVUsRUFBRSxDQUFDO1FBQ2IsUUFBUSxFQUFFLEVBQUU7UUFDWixlQUFlLEVBQUUsS0FBSztRQUN0QixTQUFTLEVBQUUsRUFBRTtRQUNiLFVBQVUsRUFBRSxFQUFFO1FBQ2QsUUFBUSxFQUFFLGlCQUFpQixFQUFFO1FBQzdCLFNBQVMsRUFBRSxRQUFRO1FBQ25CLE9BQU8sRUFBRSxJQUFJO1FBQ2IsSUFBSSxFQUFFLEtBQUs7UUFDWCxXQUFXLEVBQUUsU0FBUyxDQUFDLE9BQU87UUFDOUIsVUFBVSxFQUFFLENBQUM7UUFDYixTQUFTLEVBQUUsYUFBYSxDQUFDLE1BQU07S0FDbEMsQ0FBQztBQUNOLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuIEdldCB0aGUgdGltZXpvbmUgb2Zmc2V0IGJldHdlZW4gdGhlIGxvY2FsIHRpbWUgYW5kIFV0Y1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0KCkge1xyXG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCBuID0gZC5nZXRUaW1lem9uZU9mZnNldCgpO1xyXG4gICAgcmV0dXJuIC0gTWF0aC5mbG9vcihuIC8gNjApO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBJbnRlcnZhbEVudW0ge1xyXG4gICAgRGF5ID0gMTAsXHJcbiAgICBXZWVrID0gNTAsXHJcbiAgICBNb250aCA9IDEwMCxcclxuICAgIFllYXIgPSA1MDAsXHJcbiAgICBDdXN0b20gPSAxMDAwMFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBTY2hlZHVsZVR5cGVFbnVtIHtcclxuICAgIE9uZVRpbWUgPSAxLFxyXG4gICAgUmVjdXJyZW50ID0gMlxyXG59XHJcblxyXG5leHBvcnQgZW51bSBNb250aEVudW0ge1xyXG4gICAgSmFudWFyeSA9IDEsXHJcbiAgICBGZWJydWFyeSxcclxuICAgIE1hcmNoLFxyXG4gICAgQXByaWwsXHJcbiAgICBNYXksXHJcbiAgICBKdW5lLFxyXG4gICAgSnVseSxcclxuICAgIEF1Z3VzdCxcclxuICAgIFNlcHRlbWJlcixcclxuICAgIE9jdG9iZXIsXHJcbiAgICBOb3ZlbWJlcixcclxuICAgIERlY2VtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNb250aHNPZlllYXIoKSB7XHJcbiAgICBjb25zdCByZXQgPSBbXTtcclxuICAgIGZvciAodmFyIGVudW1NZW1iZXIgaW4gTW9udGhFbnVtKSB7XHJcbiAgICAgICAgdmFyIGlzVmFsdWVQcm9wZXJ0eSA9IHBhcnNlSW50KGVudW1NZW1iZXIsIDEwKSA+PSAwXHJcbiAgICAgICAgaWYgKGlzVmFsdWVQcm9wZXJ0eSkge1xyXG4gICAgICAgICAgICByZXQucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogZW51bU1lbWJlcixcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdwb2xwQ3JvbkpvYi4nICsgTW9udGhFbnVtW2VudW1NZW1iZXJdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXQ7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZW51bSBEYXlPZldlZWtFbnVtIHtcclxuICAgIFN1bmRheSA9IDAsXHJcbiAgICBNb25kYXksXHJcbiAgICBUdWVzZGF5LFxyXG4gICAgV2VkbmVzZGF5LFxyXG4gICAgVGh1cnNkYXksXHJcbiAgICBGcmlkYXksXHJcbiAgICBTYXR1cmRheVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERheXNPZldlZWsoKSB7XHJcbiAgICBjb25zdCByZXQgPSBbXTtcclxuICAgIGZvciAodmFyIGVudW1NZW1iZXIgaW4gRGF5T2ZXZWVrRW51bSkge1xyXG4gICAgICAgIHZhciBpc1ZhbHVlUHJvcGVydHkgPSBwYXJzZUludChlbnVtTWVtYmVyLCAxMCkgPj0gMFxyXG4gICAgICAgIGlmIChpc1ZhbHVlUHJvcGVydHkpIHtcclxuICAgICAgICAgICAgcmV0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IGVudW1NZW1iZXIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAncG9scENyb25Kb2IuJyArIERheU9mV2Vla0VudW1bZW51bU1lbWJlcl1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERheXNPZk1vbnRoKCkge1xyXG4gICAgY29uc3QgcmV0ID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDMyOyBpKyspIHtcclxuICAgICAgICByZXQucHVzaCh7XHJcbiAgICAgICAgICAgIHZhbHVlOiBpLFxyXG4gICAgICAgICAgICB0ZXh0OiBpLnRvU3RyaW5nKClcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNjaGVkdWxlVGltZSB7XHJcbiAgICBpc1JlY3VycmVudDogYm9vbGVhbjtcclxuICAgIHJlY3VycmVuY2U/OiBJbnRlcnZhbEVudW07XHJcbiAgICBob2xpZGF5cz86IHN0cmluZztcclxuICAgIGV4Y2x1ZGVXZWVrZW5kcz86IGJvb2xlYW47XHJcbiAgICBvdGhlckRheXM/OiBzdHJpbmc7XHJcbiAgICBjdXN0b21FeHByPzogc3RyaW5nO1xyXG4gICAgdGltZXpvbmU6IG51bWJlcjtcclxuICAgIHN0YXJ0RGF0ZT86IERhdGU7XHJcbiAgICBlbmREYXRlPzogRGF0ZTtcclxuICAgIHRpbWU/OiBEYXRlO1xyXG4gICAgbW9udGhPZlllYXI/OiBudW1iZXI7XHJcbiAgICBkYXlPZk1vbnRoPzogbnVtYmVyO1xyXG4gICAgZGF5T2ZXZWVrPzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdFNjaGVkdWxlVGltZSgpOiBJU2NoZWR1bGVUaW1lIHtcclxuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKVxyXG4gICAgY29uc3QgdG9tb3Jyb3cgPSBuZXcgRGF0ZSh0b2RheSlcclxuICAgIHRvbW9ycm93LnNldERhdGUodG9tb3Jyb3cuZ2V0RGF0ZSgpICsgMSlcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGlzUmVjdXJyZW50OiBmYWxzZSxcclxuICAgICAgICByZWN1cnJlbmNlOiAwLFxyXG4gICAgICAgIGhvbGlkYXlzOiAnJyxcclxuICAgICAgICBleGNsdWRlV2Vla2VuZHM6IGZhbHNlLFxyXG4gICAgICAgIG90aGVyRGF5czogJycsXHJcbiAgICAgICAgY3VzdG9tRXhwcjogJycsXHJcbiAgICAgICAgdGltZXpvbmU6IGdldFRpbWV6b25lT2Zmc2V0KCksXHJcbiAgICAgICAgc3RhcnREYXRlOiB0b21vcnJvdyxcclxuICAgICAgICBlbmREYXRlOiBudWxsLFxyXG4gICAgICAgIHRpbWU6IHRvZGF5LFxyXG4gICAgICAgIG1vbnRoT2ZZZWFyOiBNb250aEVudW0uSmFudWFyeSxcclxuICAgICAgICBkYXlPZk1vbnRoOiAxLFxyXG4gICAgICAgIGRheU9mV2VlazogRGF5T2ZXZWVrRW51bS5Nb25kYXlcclxuICAgIH07XHJcbn1cclxuIl19