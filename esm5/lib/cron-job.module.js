import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FtAutofocusModule } from '@40three/ngx-autofocus-directive';
import { NgxI18nModule } from '@polpware/ngx-i18n';
import { PolpDraggableModule } from '@polpware/modal-directives';
import { TagInputModule } from 'ngx-chips';
import { ScheduleTimePickerComponent } from './schedule-time-picker/schedule-time-picker.component';
import { ScheduleTimeModalComponent } from './schedule-time-modal/schedule-time-modal.component';
import { CronJobHyperTransPipe } from './cron-job-hyper-trans.pipe';
import { MultiDatePickerComponent } from './multi-date-picker/multi-date-picker.component';
import { MultiDateModalComponent } from './multi-date-modal/multi-date-modal.component';
var PolpBsCronJobModule = /** @class */ (function () {
    function PolpBsCronJobModule() {
    }
    PolpBsCronJobModule = __decorate([
        NgModule({
            declarations: [
                ScheduleTimePickerComponent,
                ScheduleTimeModalComponent,
                CronJobHyperTransPipe,
                MultiDatePickerComponent,
                MultiDateModalComponent
            ],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                BsDropdownModule,
                TabsModule,
                PaginationModule,
                ModalModule,
                AccordionModule,
                PopoverModule,
                TooltipModule,
                CarouselModule,
                AlertModule,
                BsDatepickerModule,
                ButtonsModule,
                CollapseModule,
                ProgressbarModule,
                TimepickerModule,
                FtAutofocusModule,
                NgxI18nModule,
                PolpDraggableModule,
                TagInputModule
            ],
            exports: [
                ScheduleTimePickerComponent,
                ScheduleTimeModalComponent,
                CronJobHyperTransPipe,
                MultiDatePickerComponent,
                MultiDateModalComponent
            ]
        })
    ], PolpBsCronJobModule);
    return PolpBsCronJobModule;
}());
export { PolpBsCronJobModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi1qb2IubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2Nyb24tam9iLyIsInNvdXJjZXMiOlsibGliL2Nyb24tam9iLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDaEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXRELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRXJFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVqRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTNDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBNkN4RjtJQUFBO0lBQW1DLENBQUM7SUFBdkIsbUJBQW1CO1FBM0MvQixRQUFRLENBQUM7WUFDTixZQUFZLEVBQUU7Z0JBQ1YsMkJBQTJCO2dCQUMzQiwwQkFBMEI7Z0JBQzFCLHFCQUFxQjtnQkFDckIsd0JBQXdCO2dCQUN4Qix1QkFBdUI7YUFDMUI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsWUFBWTtnQkFDWixXQUFXO2dCQUNYLG1CQUFtQjtnQkFFbkIsZ0JBQWdCO2dCQUNoQixVQUFVO2dCQUNWLGdCQUFnQjtnQkFDaEIsV0FBVztnQkFDWCxlQUFlO2dCQUNmLGFBQWE7Z0JBQ2IsYUFBYTtnQkFDYixjQUFjO2dCQUNkLFdBQVc7Z0JBQ1gsa0JBQWtCO2dCQUNsQixhQUFhO2dCQUNiLGNBQWM7Z0JBQ2QsaUJBQWlCO2dCQUNqQixnQkFBZ0I7Z0JBRWhCLGlCQUFpQjtnQkFFakIsYUFBYTtnQkFDYixtQkFBbUI7Z0JBRW5CLGNBQWM7YUFDakI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsMkJBQTJCO2dCQUMzQiwwQkFBMEI7Z0JBQzFCLHFCQUFxQjtnQkFDckIsd0JBQXdCO2dCQUN4Qix1QkFBdUI7YUFDMUI7U0FDSixDQUFDO09BQ1csbUJBQW1CLENBQUk7SUFBRCwwQkFBQztDQUFBLEFBQXBDLElBQW9DO1NBQXZCLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEFjY29yZGlvbk1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvYWNjb3JkaW9uJztcbmltcG9ydCB7IEFsZXJ0TW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9hbGVydCc7XG5pbXBvcnQgeyBCdXR0b25zTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9idXR0b25zJztcbmltcG9ydCB7IENhcm91c2VsTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jYXJvdXNlbCc7XG5pbXBvcnQgeyBDb2xsYXBzZU1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvY29sbGFwc2UnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyJztcbmltcG9ydCB7IEJzRHJvcGRvd25Nb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Ryb3Bkb3duJztcbmltcG9ydCB7IE1vZGFsTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9tb2RhbCc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wYWdpbmF0aW9uJztcbmltcG9ydCB7IFBvcG92ZXJNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3BvcG92ZXInO1xuaW1wb3J0IHsgUHJvZ3Jlc3NiYXJNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3Byb2dyZXNzYmFyJztcbmltcG9ydCB7IFRhYnNNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3RhYnMnO1xuaW1wb3J0IHsgVGltZXBpY2tlck1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvdGltZXBpY2tlcic7XG5pbXBvcnQgeyBUb29sdGlwTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC90b29sdGlwJztcblxuaW1wb3J0IHsgRnRBdXRvZm9jdXNNb2R1bGUgfSBmcm9tICdANDB0aHJlZS9uZ3gtYXV0b2ZvY3VzLWRpcmVjdGl2ZSc7XG5cbmltcG9ydCB7IE5neEkxOG5Nb2R1bGUgfSBmcm9tICdAcG9scHdhcmUvbmd4LWkxOG4nO1xuaW1wb3J0IHsgUG9scERyYWdnYWJsZU1vZHVsZSB9IGZyb20gJ0Bwb2xwd2FyZS9tb2RhbC1kaXJlY3RpdmVzJztcblxuaW1wb3J0IHsgVGFnSW5wdXRNb2R1bGUgfSBmcm9tICduZ3gtY2hpcHMnO1xuXG5pbXBvcnQgeyBTY2hlZHVsZVRpbWVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL3NjaGVkdWxlLXRpbWUtcGlja2VyL3NjaGVkdWxlLXRpbWUtcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTY2hlZHVsZVRpbWVNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vc2NoZWR1bGUtdGltZS1tb2RhbC9zY2hlZHVsZS10aW1lLW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDcm9uSm9iSHlwZXJUcmFuc1BpcGUgfSBmcm9tICcuL2Nyb24tam9iLWh5cGVyLXRyYW5zLnBpcGUnO1xuaW1wb3J0IHsgTXVsdGlEYXRlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9tdWx0aS1kYXRlLXBpY2tlci9tdWx0aS1kYXRlLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTXVsdGlEYXRlTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL211bHRpLWRhdGUtbW9kYWwvbXVsdGktZGF0ZS1tb2RhbC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTY2hlZHVsZVRpbWVQaWNrZXJDb21wb25lbnQsXG4gICAgICAgIFNjaGVkdWxlVGltZU1vZGFsQ29tcG9uZW50LFxuICAgICAgICBDcm9uSm9iSHlwZXJUcmFuc1BpcGUsXG4gICAgICAgIE11bHRpRGF0ZVBpY2tlckNvbXBvbmVudCxcbiAgICAgICAgTXVsdGlEYXRlTW9kYWxDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcblxuICAgICAgICBCc0Ryb3Bkb3duTW9kdWxlLFxuICAgICAgICBUYWJzTW9kdWxlLFxuICAgICAgICBQYWdpbmF0aW9uTW9kdWxlLFxuICAgICAgICBNb2RhbE1vZHVsZSxcbiAgICAgICAgQWNjb3JkaW9uTW9kdWxlLFxuICAgICAgICBQb3BvdmVyTW9kdWxlLFxuICAgICAgICBUb29sdGlwTW9kdWxlLFxuICAgICAgICBDYXJvdXNlbE1vZHVsZSxcbiAgICAgICAgQWxlcnRNb2R1bGUsXG4gICAgICAgIEJzRGF0ZXBpY2tlck1vZHVsZSxcbiAgICAgICAgQnV0dG9uc01vZHVsZSxcbiAgICAgICAgQ29sbGFwc2VNb2R1bGUsXG4gICAgICAgIFByb2dyZXNzYmFyTW9kdWxlLFxuICAgICAgICBUaW1lcGlja2VyTW9kdWxlLFxuXG4gICAgICAgIEZ0QXV0b2ZvY3VzTW9kdWxlLFxuXG4gICAgICAgIE5neEkxOG5Nb2R1bGUsXG4gICAgICAgIFBvbHBEcmFnZ2FibGVNb2R1bGUsXG5cbiAgICAgICAgVGFnSW5wdXRNb2R1bGVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU2NoZWR1bGVUaW1lUGlja2VyQ29tcG9uZW50LFxuICAgICAgICBTY2hlZHVsZVRpbWVNb2RhbENvbXBvbmVudCxcbiAgICAgICAgQ3JvbkpvYkh5cGVyVHJhbnNQaXBlLFxuICAgICAgICBNdWx0aURhdGVQaWNrZXJDb21wb25lbnQsXG4gICAgICAgIE11bHRpRGF0ZU1vZGFsQ29tcG9uZW50XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBQb2xwQnNDcm9uSm9iTW9kdWxlIHsgfVxuIl19