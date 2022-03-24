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
import { ScheduleTimePickerComponent } from './schedule-time-picker/schedule-time-picker.component';
import { ScheduleTimeModalComponent } from './schedule-time-modal/schedule-time-modal.component';
let PolpBsCronJobModule = class PolpBsCronJobModule {
};
PolpBsCronJobModule = __decorate([
    NgModule({
        declarations: [
            ScheduleTimePickerComponent,
            ScheduleTimeModalComponent
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
            PolpDraggableModule
        ],
        exports: [
            ScheduleTimePickerComponent,
            ScheduleTimeModalComponent
        ]
    })
], PolpBsCronJobModule);
export { PolpBsCronJobModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi1qb2IubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2Nyb24tam9iLyIsInNvdXJjZXMiOlsibGliL2Nyb24tam9iLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDaEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXRELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRXJFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVqRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQXFDakcsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7Q0FBSSxDQUFBO0FBQXZCLG1CQUFtQjtJQW5DL0IsUUFBUSxDQUFDO1FBQ04sWUFBWSxFQUFFO1lBQ1YsMkJBQTJCO1lBQzNCLDBCQUEwQjtTQUM3QjtRQUNELE9BQU8sRUFBRTtZQUNMLFlBQVk7WUFDWixXQUFXO1lBQ1gsbUJBQW1CO1lBRW5CLGdCQUFnQjtZQUNoQixVQUFVO1lBQ1YsZ0JBQWdCO1lBQ2hCLFdBQVc7WUFDWCxlQUFlO1lBQ2YsYUFBYTtZQUNiLGFBQWE7WUFDYixjQUFjO1lBQ2QsV0FBVztZQUNYLGtCQUFrQjtZQUNsQixhQUFhO1lBQ2IsY0FBYztZQUNkLGlCQUFpQjtZQUNqQixnQkFBZ0I7WUFFaEIsaUJBQWlCO1lBRWpCLGFBQWE7WUFDYixtQkFBbUI7U0FDdEI7UUFDRCxPQUFPLEVBQUU7WUFDTCwyQkFBMkI7WUFDM0IsMEJBQTBCO1NBQzdCO0tBQ0osQ0FBQztHQUNXLG1CQUFtQixDQUFJO1NBQXZCLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEFjY29yZGlvbk1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvYWNjb3JkaW9uJztcbmltcG9ydCB7IEFsZXJ0TW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9hbGVydCc7XG5pbXBvcnQgeyBCdXR0b25zTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9idXR0b25zJztcbmltcG9ydCB7IENhcm91c2VsTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jYXJvdXNlbCc7XG5pbXBvcnQgeyBDb2xsYXBzZU1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvY29sbGFwc2UnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyJztcbmltcG9ydCB7IEJzRHJvcGRvd25Nb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Ryb3Bkb3duJztcbmltcG9ydCB7IE1vZGFsTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9tb2RhbCc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wYWdpbmF0aW9uJztcbmltcG9ydCB7IFBvcG92ZXJNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3BvcG92ZXInO1xuaW1wb3J0IHsgUHJvZ3Jlc3NiYXJNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3Byb2dyZXNzYmFyJztcbmltcG9ydCB7IFRhYnNNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3RhYnMnO1xuaW1wb3J0IHsgVGltZXBpY2tlck1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvdGltZXBpY2tlcic7XG5pbXBvcnQgeyBUb29sdGlwTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC90b29sdGlwJztcblxuaW1wb3J0IHsgRnRBdXRvZm9jdXNNb2R1bGUgfSBmcm9tICdANDB0aHJlZS9uZ3gtYXV0b2ZvY3VzLWRpcmVjdGl2ZSc7XG5cbmltcG9ydCB7IE5neEkxOG5Nb2R1bGUgfSBmcm9tICdAcG9scHdhcmUvbmd4LWkxOG4nO1xuaW1wb3J0IHsgUG9scERyYWdnYWJsZU1vZHVsZSB9IGZyb20gJ0Bwb2xwd2FyZS9tb2RhbC1kaXJlY3RpdmVzJztcblxuaW1wb3J0IHsgU2NoZWR1bGVUaW1lUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9zY2hlZHVsZS10aW1lLXBpY2tlci9zY2hlZHVsZS10aW1lLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2NoZWR1bGVUaW1lTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL3NjaGVkdWxlLXRpbWUtbW9kYWwvc2NoZWR1bGUtdGltZS1tb2RhbC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTY2hlZHVsZVRpbWVQaWNrZXJDb21wb25lbnQsXG4gICAgICAgIFNjaGVkdWxlVGltZU1vZGFsQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG5cbiAgICAgICAgQnNEcm9wZG93bk1vZHVsZSxcbiAgICAgICAgVGFic01vZHVsZSxcbiAgICAgICAgUGFnaW5hdGlvbk1vZHVsZSxcbiAgICAgICAgTW9kYWxNb2R1bGUsXG4gICAgICAgIEFjY29yZGlvbk1vZHVsZSxcbiAgICAgICAgUG9wb3Zlck1vZHVsZSxcbiAgICAgICAgVG9vbHRpcE1vZHVsZSxcbiAgICAgICAgQ2Fyb3VzZWxNb2R1bGUsXG4gICAgICAgIEFsZXJ0TW9kdWxlLFxuICAgICAgICBCc0RhdGVwaWNrZXJNb2R1bGUsXG4gICAgICAgIEJ1dHRvbnNNb2R1bGUsXG4gICAgICAgIENvbGxhcHNlTW9kdWxlLFxuICAgICAgICBQcm9ncmVzc2Jhck1vZHVsZSxcbiAgICAgICAgVGltZXBpY2tlck1vZHVsZSxcblxuICAgICAgICBGdEF1dG9mb2N1c01vZHVsZSxcblxuICAgICAgICBOZ3hJMThuTW9kdWxlLFxuICAgICAgICBQb2xwRHJhZ2dhYmxlTW9kdWxlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFNjaGVkdWxlVGltZVBpY2tlckNvbXBvbmVudCxcbiAgICAgICAgU2NoZWR1bGVUaW1lTW9kYWxDb21wb25lbnRcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFBvbHBCc0Nyb25Kb2JNb2R1bGUgeyB9XG4iXX0=