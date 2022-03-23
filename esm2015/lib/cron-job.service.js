import { Injectable } from '@angular/core';
import { IntervalEnum } from '@polpware/fe-utilities';
import { parseExpression } from 'cron-parser';
import * as moment from 'moment';
import * as i0 from "@angular/core";
export class CronJobService {
    constructor() { }
    parseCronExpr(source, target) {
        const a = parseExpression(source);
        // Case 1 (every year)
        if (a.fields.month.length == 1 && a.fields.dayOfMonth.length == 1) {
            target.recurrence = IntervalEnum.Year;
        }
        else if (a.fields.month.length == 12 &&
            a.fields.dayOfMonth.length == 1 &&
            a.fields.dayOfWeek.length == 8) {
            target.recurrence = IntervalEnum.Month;
        }
        else if (a.fields.month.length == 12 &&
            a.fields.dayOfMonth.length == 31 &&
            a.fields.dayOfWeek.length == 1) {
            target.recurrence = IntervalEnum.Week;
        }
        else if (a.fields.month.length == 12 &&
            a.fields.dayOfMonth.length == 31 &&
            a.fields.dayOfWeek.length == 8) {
            target.recurrence == IntervalEnum.Day;
        }
        else {
            target.recurrence = IntervalEnum.Custom;
        }
        // A utc time 
        const today = new Date();
        const timeInUtc = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate(), a.fields.hour[0] || 0, a.fields.minute[0] || 0));
        // Time
        target.time = timeInUtc;
    }
    composeCronExpr(source) {
        // IsRecurrent true
        // Convert it into Utc time
        const utc = new Date(source.time);
        const timeWrapper = moment(utc);
        const hour = timeWrapper.utc().hour();
        if (source.recurrence == IntervalEnum.Year) {
            return `${utc.getMinutes()} ${hour} ${source.dayOfMonth} ${source.monthOfYear} *`;
        }
        else if (source.recurrence == IntervalEnum.Month) {
            return `${utc.getMinutes()} ${hour} ${source.dayOfMonth} * *`;
        }
        else if (source.recurrence == IntervalEnum.Week) {
            return `${utc.getMinutes()} ${hour} * * ${source.dayOfWeek}`;
        }
        else if (source.recurrence == IntervalEnum.Day) {
            return `${utc.getMinutes()} ${hour} * * *`;
        }
        else if (source.recurrence == IntervalEnum.Custom) {
            return source.customExpr;
        }
        return '';
    }
}
CronJobService.ɵfac = function CronJobService_Factory(t) { return new (t || CronJobService)(); };
CronJobService.ɵprov = i0.ɵɵdefineInjectable({ token: CronJobService, factory: CronJobService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CronJobService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi1qb2Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9jcm9uLWpvYi8iLCJzb3VyY2VzIjpbImxpYi9jcm9uLWpvYi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDOUMsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7O0FBTWpDLE1BQU0sT0FBTyxjQUFjO0lBRXZCLGdCQUFnQixDQUFDO0lBRWpCLGFBQWEsQ0FBQyxNQUFjLEVBQUUsTUFBcUI7UUFDL0MsTUFBTSxDQUFDLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWxDLHNCQUFzQjtRQUN0QixJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUMvRCxNQUFNLENBQUMsVUFBVSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUM7U0FDekM7YUFBTSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxFQUFFO1lBQ2xDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sSUFBSSxDQUFDO1lBQy9CLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDaEMsTUFBTSxDQUFDLFVBQVUsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO1NBQzFDO2FBQU0sSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksRUFBRTtZQUNsQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLElBQUksRUFBRTtZQUNoQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ2hDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQztTQUN6QzthQUFNLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLEVBQUU7WUFDbEMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLEVBQUU7WUFDaEMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNoQyxNQUFNLENBQUMsVUFBVSxJQUFJLFlBQVksQ0FBQyxHQUFHLENBQUM7U0FDekM7YUFBTTtZQUNILE1BQU0sQ0FBQyxVQUFVLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQztTQUMzQztRQUVELGNBQWM7UUFDZCxNQUFNLEtBQUssR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3pCLE1BQU0sU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUNuRCxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQ2hCLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFDZixDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQ3JCLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsT0FBTztRQUNQLE1BQU0sQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO0lBQzVCLENBQUM7SUFFRCxlQUFlLENBQUMsTUFBcUI7UUFDakMsbUJBQW1CO1FBRW5CLDJCQUEyQjtRQUMzQixNQUFNLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLE1BQU0sSUFBSSxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUV0QyxJQUFJLE1BQU0sQ0FBQyxVQUFVLElBQUksWUFBWSxDQUFDLElBQUksRUFBRTtZQUN4QyxPQUFPLEdBQUcsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsVUFBVSxJQUFJLE1BQU0sQ0FBQyxXQUFXLElBQUksQ0FBQztTQUNyRjthQUFNLElBQUksTUFBTSxDQUFDLFVBQVUsSUFBSSxZQUFZLENBQUMsS0FBSyxFQUFFO1lBQ2hELE9BQU8sR0FBRyxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksSUFBSSxJQUFJLE1BQU0sQ0FBQyxVQUFVLE1BQU0sQ0FBQztTQUNqRTthQUFNLElBQUksTUFBTSxDQUFDLFVBQVUsSUFBSSxZQUFZLENBQUMsSUFBSSxFQUFFO1lBQy9DLE9BQU8sR0FBRyxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksSUFBSSxRQUFRLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNoRTthQUFNLElBQUksTUFBTSxDQUFDLFVBQVUsSUFBSSxZQUFZLENBQUMsR0FBRyxFQUFFO1lBQzlDLE9BQU8sR0FBRyxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksSUFBSSxRQUFRLENBQUM7U0FDOUM7YUFBTSxJQUFJLE1BQU0sQ0FBQyxVQUFVLElBQUksWUFBWSxDQUFDLE1BQU0sRUFBRTtZQUNqRCxPQUFPLE1BQU0sQ0FBQyxVQUFVLENBQUM7U0FDNUI7UUFFRCxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7OzRFQTFEUSxjQUFjO3NEQUFkLGNBQWMsV0FBZCxjQUFjLG1CQUZYLE1BQU07a0RBRVQsY0FBYztjQUgxQixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnRlcnZhbEVudW0gfSBmcm9tICdAcG9scHdhcmUvZmUtdXRpbGl0aWVzJztcbmltcG9ydCB7IHBhcnNlRXhwcmVzc2lvbiB9IGZyb20gJ2Nyb24tcGFyc2VyJztcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgSVNjaGVkdWxlVGltZSB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ3JvbkpvYlNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIHBhcnNlQ3JvbkV4cHIoc291cmNlOiBzdHJpbmcsIHRhcmdldDogSVNjaGVkdWxlVGltZSkge1xuICAgICAgICBjb25zdCBhID0gcGFyc2VFeHByZXNzaW9uKHNvdXJjZSk7XG5cbiAgICAgICAgLy8gQ2FzZSAxIChldmVyeSB5ZWFyKVxuICAgICAgICBpZiAoYS5maWVsZHMubW9udGgubGVuZ3RoID09IDEgJiYgYS5maWVsZHMuZGF5T2ZNb250aC5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgdGFyZ2V0LnJlY3VycmVuY2UgPSBJbnRlcnZhbEVudW0uWWVhcjtcbiAgICAgICAgfSBlbHNlIGlmIChhLmZpZWxkcy5tb250aC5sZW5ndGggPT0gMTIgJiZcbiAgICAgICAgICAgIGEuZmllbGRzLmRheU9mTW9udGgubGVuZ3RoID09IDEgJiZcbiAgICAgICAgICAgIGEuZmllbGRzLmRheU9mV2Vlay5sZW5ndGggPT0gOCkge1xuICAgICAgICAgICAgdGFyZ2V0LnJlY3VycmVuY2UgPSBJbnRlcnZhbEVudW0uTW9udGg7XG4gICAgICAgIH0gZWxzZSBpZiAoYS5maWVsZHMubW9udGgubGVuZ3RoID09IDEyICYmXG4gICAgICAgICAgICBhLmZpZWxkcy5kYXlPZk1vbnRoLmxlbmd0aCA9PSAzMSAmJlxuICAgICAgICAgICAgYS5maWVsZHMuZGF5T2ZXZWVrLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICB0YXJnZXQucmVjdXJyZW5jZSA9IEludGVydmFsRW51bS5XZWVrO1xuICAgICAgICB9IGVsc2UgaWYgKGEuZmllbGRzLm1vbnRoLmxlbmd0aCA9PSAxMiAmJlxuICAgICAgICAgICAgYS5maWVsZHMuZGF5T2ZNb250aC5sZW5ndGggPT0gMzEgJiZcbiAgICAgICAgICAgIGEuZmllbGRzLmRheU9mV2Vlay5sZW5ndGggPT0gOCkge1xuICAgICAgICAgICAgdGFyZ2V0LnJlY3VycmVuY2UgPT0gSW50ZXJ2YWxFbnVtLkRheTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldC5yZWN1cnJlbmNlID0gSW50ZXJ2YWxFbnVtLkN1c3RvbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEEgdXRjIHRpbWUgXG4gICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgY29uc3QgdGltZUluVXRjID0gbmV3IERhdGUoRGF0ZS5VVEModG9kYXkuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgIHRvZGF5LmdldE1vbnRoKCksXG4gICAgICAgICAgICB0b2RheS5nZXREYXRlKCksXG4gICAgICAgICAgICBhLmZpZWxkcy5ob3VyWzBdIHx8IDAsXG4gICAgICAgICAgICBhLmZpZWxkcy5taW51dGVbMF0gfHwgMCkpO1xuICAgICAgICAvLyBUaW1lXG4gICAgICAgIHRhcmdldC50aW1lID0gdGltZUluVXRjO1xuICAgIH1cblxuICAgIGNvbXBvc2VDcm9uRXhwcihzb3VyY2U6IElTY2hlZHVsZVRpbWUpIHtcbiAgICAgICAgLy8gSXNSZWN1cnJlbnQgdHJ1ZVxuXG4gICAgICAgIC8vIENvbnZlcnQgaXQgaW50byBVdGMgdGltZVxuICAgICAgICBjb25zdCB1dGMgPSBuZXcgRGF0ZShzb3VyY2UudGltZSk7XG4gICAgICAgIGNvbnN0IHRpbWVXcmFwcGVyID0gbW9tZW50KHV0Yyk7XG4gICAgICAgIGNvbnN0IGhvdXIgPSB0aW1lV3JhcHBlci51dGMoKS5ob3VyKCk7XG5cbiAgICAgICAgaWYgKHNvdXJjZS5yZWN1cnJlbmNlID09IEludGVydmFsRW51bS5ZZWFyKSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7dXRjLmdldE1pbnV0ZXMoKX0gJHtob3VyfSAke3NvdXJjZS5kYXlPZk1vbnRofSAke3NvdXJjZS5tb250aE9mWWVhcn0gKmA7XG4gICAgICAgIH0gZWxzZSBpZiAoc291cmNlLnJlY3VycmVuY2UgPT0gSW50ZXJ2YWxFbnVtLk1vbnRoKSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7dXRjLmdldE1pbnV0ZXMoKX0gJHtob3VyfSAke3NvdXJjZS5kYXlPZk1vbnRofSAqICpgO1xuICAgICAgICB9IGVsc2UgaWYgKHNvdXJjZS5yZWN1cnJlbmNlID09IEludGVydmFsRW51bS5XZWVrKSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7dXRjLmdldE1pbnV0ZXMoKX0gJHtob3VyfSAqICogJHtzb3VyY2UuZGF5T2ZXZWVrfWA7XG4gICAgICAgIH0gZWxzZSBpZiAoc291cmNlLnJlY3VycmVuY2UgPT0gSW50ZXJ2YWxFbnVtLkRheSkge1xuICAgICAgICAgICAgcmV0dXJuIGAke3V0Yy5nZXRNaW51dGVzKCl9ICR7aG91cn0gKiAqICpgO1xuICAgICAgICB9IGVsc2UgaWYgKHNvdXJjZS5yZWN1cnJlbmNlID09IEludGVydmFsRW51bS5DdXN0b20pIHtcbiAgICAgICAgICAgIHJldHVybiBzb3VyY2UuY3VzdG9tRXhwcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG59XG4iXX0=