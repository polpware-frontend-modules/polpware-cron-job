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
var PolpBsCronJobModule = /** @class */ (function () {
    function PolpBsCronJobModule() {
    }
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
    return PolpBsCronJobModule;
}());
export { PolpBsCronJobModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi1qb2IubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2Nyb24tam9iLyIsInNvdXJjZXMiOlsibGliL2Nyb24tam9iLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDaEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXRELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRXJFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVqRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQXFDakc7SUFBQTtJQUFtQyxDQUFDO0lBQXZCLG1CQUFtQjtRQW5DL0IsUUFBUSxDQUFDO1lBQ04sWUFBWSxFQUFFO2dCQUNWLDJCQUEyQjtnQkFDM0IsMEJBQTBCO2FBQzdCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLFlBQVk7Z0JBQ1osV0FBVztnQkFDWCxtQkFBbUI7Z0JBRW5CLGdCQUFnQjtnQkFDaEIsVUFBVTtnQkFDVixnQkFBZ0I7Z0JBQ2hCLFdBQVc7Z0JBQ1gsZUFBZTtnQkFDZixhQUFhO2dCQUNiLGFBQWE7Z0JBQ2IsY0FBYztnQkFDZCxXQUFXO2dCQUNYLGtCQUFrQjtnQkFDbEIsYUFBYTtnQkFDYixjQUFjO2dCQUNkLGlCQUFpQjtnQkFDakIsZ0JBQWdCO2dCQUVoQixpQkFBaUI7Z0JBRWpCLGFBQWE7Z0JBQ2IsbUJBQW1CO2FBQ3RCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLDJCQUEyQjtnQkFDM0IsMEJBQTBCO2FBQzdCO1NBQ0osQ0FBQztPQUNXLG1CQUFtQixDQUFJO0lBQUQsMEJBQUM7Q0FBQSxBQUFwQyxJQUFvQztTQUF2QixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBBY2NvcmRpb25Nb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2FjY29yZGlvbic7XG5pbXBvcnQgeyBBbGVydE1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvYWxlcnQnO1xuaW1wb3J0IHsgQnV0dG9uc01vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvYnV0dG9ucyc7XG5pbXBvcnQgeyBDYXJvdXNlbE1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvY2Fyb3VzZWwnO1xuaW1wb3J0IHsgQ29sbGFwc2VNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbGxhcHNlJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlck1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvZGF0ZXBpY2tlcic7XG5pbXBvcnQgeyBCc0Ryb3Bkb3duTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9kcm9wZG93bic7XG5pbXBvcnQgeyBNb2RhbE1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvbW9kYWwnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbk1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvcGFnaW5hdGlvbic7XG5pbXBvcnQgeyBQb3BvdmVyTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wb3BvdmVyJztcbmltcG9ydCB7IFByb2dyZXNzYmFyTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wcm9ncmVzc2Jhcic7XG5pbXBvcnQgeyBUYWJzTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC90YWJzJztcbmltcG9ydCB7IFRpbWVwaWNrZXJNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3RpbWVwaWNrZXInO1xuaW1wb3J0IHsgVG9vbHRpcE1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvdG9vbHRpcCc7XG5cbmltcG9ydCB7IEZ0QXV0b2ZvY3VzTW9kdWxlIH0gZnJvbSAnQDQwdGhyZWUvbmd4LWF1dG9mb2N1cy1kaXJlY3RpdmUnO1xuXG5pbXBvcnQgeyBOZ3hJMThuTW9kdWxlIH0gZnJvbSAnQHBvbHB3YXJlL25neC1pMThuJztcbmltcG9ydCB7IFBvbHBEcmFnZ2FibGVNb2R1bGUgfSBmcm9tICdAcG9scHdhcmUvbW9kYWwtZGlyZWN0aXZlcyc7XG5cbmltcG9ydCB7IFNjaGVkdWxlVGltZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vc2NoZWR1bGUtdGltZS1waWNrZXIvc2NoZWR1bGUtdGltZS1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNjaGVkdWxlVGltZU1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9zY2hlZHVsZS10aW1lLW1vZGFsL3NjaGVkdWxlLXRpbWUtbW9kYWwuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU2NoZWR1bGVUaW1lUGlja2VyQ29tcG9uZW50LFxuICAgICAgICBTY2hlZHVsZVRpbWVNb2RhbENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuXG4gICAgICAgIEJzRHJvcGRvd25Nb2R1bGUsXG4gICAgICAgIFRhYnNNb2R1bGUsXG4gICAgICAgIFBhZ2luYXRpb25Nb2R1bGUsXG4gICAgICAgIE1vZGFsTW9kdWxlLFxuICAgICAgICBBY2NvcmRpb25Nb2R1bGUsXG4gICAgICAgIFBvcG92ZXJNb2R1bGUsXG4gICAgICAgIFRvb2x0aXBNb2R1bGUsXG4gICAgICAgIENhcm91c2VsTW9kdWxlLFxuICAgICAgICBBbGVydE1vZHVsZSxcbiAgICAgICAgQnNEYXRlcGlja2VyTW9kdWxlLFxuICAgICAgICBCdXR0b25zTW9kdWxlLFxuICAgICAgICBDb2xsYXBzZU1vZHVsZSxcbiAgICAgICAgUHJvZ3Jlc3NiYXJNb2R1bGUsXG4gICAgICAgIFRpbWVwaWNrZXJNb2R1bGUsXG5cbiAgICAgICAgRnRBdXRvZm9jdXNNb2R1bGUsXG5cbiAgICAgICAgTmd4STE4bk1vZHVsZSxcbiAgICAgICAgUG9scERyYWdnYWJsZU1vZHVsZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBTY2hlZHVsZVRpbWVQaWNrZXJDb21wb25lbnQsXG4gICAgICAgIFNjaGVkdWxlVGltZU1vZGFsQ29tcG9uZW50XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBQb2xwQnNDcm9uSm9iTW9kdWxlIHsgfVxuIl19