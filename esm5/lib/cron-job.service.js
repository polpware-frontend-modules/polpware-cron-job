import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { IntervalEnum } from '@polpware/fe-utilities';
import { parseExpression } from 'cron-parser';
import * as moment from 'moment';
import * as i0 from "@angular/core";
var CronJobService = /** @class */ (function () {
    function CronJobService() {
    }
    CronJobService.prototype.parseCronExpr = function (source, target) {
        var a = parseExpression(source);
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
        var today = new Date();
        var timeInUtc = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate(), a.fields.hour[0] || 0, a.fields.minute[0] || 0));
        // Time
        target.time = timeInUtc;
    };
    CronJobService.prototype.composeCronExpr = function (source) {
        // IsRecurrent true
        // Convert it into Utc time
        var utc = new Date(source.time);
        var timeWrapper = moment(utc);
        var hour = timeWrapper.utc().hour();
        if (source.recurrence == IntervalEnum.Year) {
            return utc.getMinutes() + " " + hour + " " + source.dayOfMonth + " " + source.monthOfYear + " *";
        }
        else if (source.recurrence == IntervalEnum.Month) {
            return utc.getMinutes() + " " + hour + " " + source.dayOfMonth + " * *";
        }
        else if (source.recurrence == IntervalEnum.Week) {
            return utc.getMinutes() + " " + hour + " * * " + source.dayOfWeek;
        }
        else if (source.recurrence == IntervalEnum.Day) {
            return utc.getMinutes() + " " + hour + " * * *";
        }
        else if (source.recurrence == IntervalEnum.Custom) {
            return source.customExpr;
        }
        return '';
    };
    CronJobService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CronJobService_Factory() { return new CronJobService(); }, token: CronJobService, providedIn: "root" });
    CronJobService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CronJobService);
    return CronJobService;
}());
export { CronJobService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi1qb2Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9jcm9uLWpvYi8iLCJzb3VyY2VzIjpbImxpYi9jcm9uLWpvYi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzlDLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDOztBQU1qQztJQUVJO0lBQWdCLENBQUM7SUFFakIsc0NBQWEsR0FBYixVQUFjLE1BQWMsRUFBRSxNQUFxQjtRQUMvQyxJQUFNLENBQUMsR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFbEMsc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQy9ELE1BQU0sQ0FBQyxVQUFVLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQztTQUN6QzthQUFNLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLEVBQUU7WUFDbEMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUM7WUFDL0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNoQyxNQUFNLENBQUMsVUFBVSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7U0FDMUM7YUFBTSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxFQUFFO1lBQ2xDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sSUFBSSxFQUFFO1lBQ2hDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDaEMsTUFBTSxDQUFDLFVBQVUsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDO1NBQ3pDO2FBQU0sSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksRUFBRTtZQUNsQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLElBQUksRUFBRTtZQUNoQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ2hDLE1BQU0sQ0FBQyxVQUFVLElBQUksWUFBWSxDQUFDLEdBQUcsQ0FBQztTQUN6QzthQUFNO1lBQ0gsTUFBTSxDQUFDLFVBQVUsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDO1NBQzNDO1FBRUQsY0FBYztRQUNkLElBQU0sS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDekIsSUFBTSxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQ25ELEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFDaEIsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUNmLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFDckIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QixPQUFPO1FBQ1AsTUFBTSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7SUFDNUIsQ0FBQztJQUVELHdDQUFlLEdBQWYsVUFBZ0IsTUFBcUI7UUFDakMsbUJBQW1CO1FBRW5CLDJCQUEyQjtRQUMzQixJQUFNLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsSUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLElBQU0sSUFBSSxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUV0QyxJQUFJLE1BQU0sQ0FBQyxVQUFVLElBQUksWUFBWSxDQUFDLElBQUksRUFBRTtZQUN4QyxPQUFVLEdBQUcsQ0FBQyxVQUFVLEVBQUUsU0FBSSxJQUFJLFNBQUksTUFBTSxDQUFDLFVBQVUsU0FBSSxNQUFNLENBQUMsV0FBVyxPQUFJLENBQUM7U0FDckY7YUFBTSxJQUFJLE1BQU0sQ0FBQyxVQUFVLElBQUksWUFBWSxDQUFDLEtBQUssRUFBRTtZQUNoRCxPQUFVLEdBQUcsQ0FBQyxVQUFVLEVBQUUsU0FBSSxJQUFJLFNBQUksTUFBTSxDQUFDLFVBQVUsU0FBTSxDQUFDO1NBQ2pFO2FBQU0sSUFBSSxNQUFNLENBQUMsVUFBVSxJQUFJLFlBQVksQ0FBQyxJQUFJLEVBQUU7WUFDL0MsT0FBVSxHQUFHLENBQUMsVUFBVSxFQUFFLFNBQUksSUFBSSxhQUFRLE1BQU0sQ0FBQyxTQUFXLENBQUM7U0FDaEU7YUFBTSxJQUFJLE1BQU0sQ0FBQyxVQUFVLElBQUksWUFBWSxDQUFDLEdBQUcsRUFBRTtZQUM5QyxPQUFVLEdBQUcsQ0FBQyxVQUFVLEVBQUUsU0FBSSxJQUFJLFdBQVEsQ0FBQztTQUM5QzthQUFNLElBQUksTUFBTSxDQUFDLFVBQVUsSUFBSSxZQUFZLENBQUMsTUFBTSxFQUFFO1lBQ2pELE9BQU8sTUFBTSxDQUFDLFVBQVUsQ0FBQztTQUM1QjtRQUVELE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQzs7SUExRFEsY0FBYztRQUgxQixVQUFVLENBQUM7WUFDUixVQUFVLEVBQUUsTUFBTTtTQUNyQixDQUFDOztPQUNXLGNBQWMsQ0EyRDFCO3lCQXBFRDtDQW9FQyxBQTNERCxJQTJEQztTQTNEWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW50ZXJ2YWxFbnVtIH0gZnJvbSAnQHBvbHB3YXJlL2ZlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBwYXJzZUV4cHJlc3Npb24gfSBmcm9tICdjcm9uLXBhcnNlcic7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IElTY2hlZHVsZVRpbWUgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENyb25Kb2JTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBwYXJzZUNyb25FeHByKHNvdXJjZTogc3RyaW5nLCB0YXJnZXQ6IElTY2hlZHVsZVRpbWUpIHtcbiAgICAgICAgY29uc3QgYSA9IHBhcnNlRXhwcmVzc2lvbihzb3VyY2UpO1xuXG4gICAgICAgIC8vIENhc2UgMSAoZXZlcnkgeWVhcilcbiAgICAgICAgaWYgKGEuZmllbGRzLm1vbnRoLmxlbmd0aCA9PSAxICYmIGEuZmllbGRzLmRheU9mTW9udGgubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgIHRhcmdldC5yZWN1cnJlbmNlID0gSW50ZXJ2YWxFbnVtLlllYXI7XG4gICAgICAgIH0gZWxzZSBpZiAoYS5maWVsZHMubW9udGgubGVuZ3RoID09IDEyICYmXG4gICAgICAgICAgICBhLmZpZWxkcy5kYXlPZk1vbnRoLmxlbmd0aCA9PSAxICYmXG4gICAgICAgICAgICBhLmZpZWxkcy5kYXlPZldlZWsubGVuZ3RoID09IDgpIHtcbiAgICAgICAgICAgIHRhcmdldC5yZWN1cnJlbmNlID0gSW50ZXJ2YWxFbnVtLk1vbnRoO1xuICAgICAgICB9IGVsc2UgaWYgKGEuZmllbGRzLm1vbnRoLmxlbmd0aCA9PSAxMiAmJlxuICAgICAgICAgICAgYS5maWVsZHMuZGF5T2ZNb250aC5sZW5ndGggPT0gMzEgJiZcbiAgICAgICAgICAgIGEuZmllbGRzLmRheU9mV2Vlay5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgdGFyZ2V0LnJlY3VycmVuY2UgPSBJbnRlcnZhbEVudW0uV2VlaztcbiAgICAgICAgfSBlbHNlIGlmIChhLmZpZWxkcy5tb250aC5sZW5ndGggPT0gMTIgJiZcbiAgICAgICAgICAgIGEuZmllbGRzLmRheU9mTW9udGgubGVuZ3RoID09IDMxICYmXG4gICAgICAgICAgICBhLmZpZWxkcy5kYXlPZldlZWsubGVuZ3RoID09IDgpIHtcbiAgICAgICAgICAgIHRhcmdldC5yZWN1cnJlbmNlID09IEludGVydmFsRW51bS5EYXk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXQucmVjdXJyZW5jZSA9IEludGVydmFsRW51bS5DdXN0b207XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBIHV0YyB0aW1lIFxuICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IHRpbWVJblV0YyA9IG5ldyBEYXRlKERhdGUuVVRDKHRvZGF5LmdldEZ1bGxZZWFyKCksXG4gICAgICAgICAgICB0b2RheS5nZXRNb250aCgpLFxuICAgICAgICAgICAgdG9kYXkuZ2V0RGF0ZSgpLFxuICAgICAgICAgICAgYS5maWVsZHMuaG91clswXSB8fCAwLFxuICAgICAgICAgICAgYS5maWVsZHMubWludXRlWzBdIHx8IDApKTtcbiAgICAgICAgLy8gVGltZVxuICAgICAgICB0YXJnZXQudGltZSA9IHRpbWVJblV0YztcbiAgICB9XG5cbiAgICBjb21wb3NlQ3JvbkV4cHIoc291cmNlOiBJU2NoZWR1bGVUaW1lKSB7XG4gICAgICAgIC8vIElzUmVjdXJyZW50IHRydWVcblxuICAgICAgICAvLyBDb252ZXJ0IGl0IGludG8gVXRjIHRpbWVcbiAgICAgICAgY29uc3QgdXRjID0gbmV3IERhdGUoc291cmNlLnRpbWUpO1xuICAgICAgICBjb25zdCB0aW1lV3JhcHBlciA9IG1vbWVudCh1dGMpO1xuICAgICAgICBjb25zdCBob3VyID0gdGltZVdyYXBwZXIudXRjKCkuaG91cigpO1xuXG4gICAgICAgIGlmIChzb3VyY2UucmVjdXJyZW5jZSA9PSBJbnRlcnZhbEVudW0uWWVhcikge1xuICAgICAgICAgICAgcmV0dXJuIGAke3V0Yy5nZXRNaW51dGVzKCl9ICR7aG91cn0gJHtzb3VyY2UuZGF5T2ZNb250aH0gJHtzb3VyY2UubW9udGhPZlllYXJ9ICpgO1xuICAgICAgICB9IGVsc2UgaWYgKHNvdXJjZS5yZWN1cnJlbmNlID09IEludGVydmFsRW51bS5Nb250aCkge1xuICAgICAgICAgICAgcmV0dXJuIGAke3V0Yy5nZXRNaW51dGVzKCl9ICR7aG91cn0gJHtzb3VyY2UuZGF5T2ZNb250aH0gKiAqYDtcbiAgICAgICAgfSBlbHNlIGlmIChzb3VyY2UucmVjdXJyZW5jZSA9PSBJbnRlcnZhbEVudW0uV2Vlaykge1xuICAgICAgICAgICAgcmV0dXJuIGAke3V0Yy5nZXRNaW51dGVzKCl9ICR7aG91cn0gKiAqICR7c291cmNlLmRheU9mV2Vla31gO1xuICAgICAgICB9IGVsc2UgaWYgKHNvdXJjZS5yZWN1cnJlbmNlID09IEludGVydmFsRW51bS5EYXkpIHtcbiAgICAgICAgICAgIHJldHVybiBgJHt1dGMuZ2V0TWludXRlcygpfSAke2hvdXJ9ICogKiAqYDtcbiAgICAgICAgfSBlbHNlIGlmIChzb3VyY2UucmVjdXJyZW5jZSA9PSBJbnRlcnZhbEVudW0uQ3VzdG9tKSB7XG4gICAgICAgICAgICByZXR1cm4gc291cmNlLmN1c3RvbUV4cHI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxufVxuIl19