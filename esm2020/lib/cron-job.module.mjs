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
import { AutofocusFixModule } from 'ngx-autofocus-fix';
import { NgxI18nModule } from '@polpware/ngx-i18n';
import { PolpDraggableModule } from '@polpware/modal-directives';
import { TagInputModule } from 'ngx-chips';
import { ScheduleTimePickerComponent } from './schedule-time-picker/schedule-time-picker.component';
import { ScheduleTimeModalComponent } from './schedule-time-modal/schedule-time-modal.component';
import { CronJobHyperTransPipe } from './cron-job-hyper-trans.pipe';
import { MultiDatePickerComponent } from './multi-date-picker/multi-date-picker.component';
import { MultiDateModalComponent } from './multi-date-modal/multi-date-modal.component';
import * as i0 from "@angular/core";
export class PolpBsCronJobModule {
}
PolpBsCronJobModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PolpBsCronJobModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PolpBsCronJobModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PolpBsCronJobModule, declarations: [ScheduleTimePickerComponent,
        ScheduleTimeModalComponent,
        CronJobHyperTransPipe,
        MultiDatePickerComponent,
        MultiDateModalComponent], imports: [CommonModule,
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
        AutofocusFixModule,
        NgxI18nModule,
        PolpDraggableModule,
        TagInputModule], exports: [ScheduleTimePickerComponent,
        ScheduleTimeModalComponent,
        CronJobHyperTransPipe,
        MultiDatePickerComponent,
        MultiDateModalComponent] });
PolpBsCronJobModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PolpBsCronJobModule, imports: [[
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
            AutofocusFixModule,
            NgxI18nModule,
            PolpDraggableModule,
            TagInputModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PolpBsCronJobModule, decorators: [{
            type: NgModule,
            args: [{
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
                        AutofocusFixModule,
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
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi1qb2IubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcG9scHdhcmUvY3Jvbi1qb2Ivc3JjL2xpYi9jcm9uLWpvYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDaEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXRELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVqRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTNDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDOztBQTZDeEYsTUFBTSxPQUFPLG1CQUFtQjs7aUhBQW5CLG1CQUFtQjtrSEFBbkIsbUJBQW1CLGlCQXpDeEIsMkJBQTJCO1FBQzNCLDBCQUEwQjtRQUMxQixxQkFBcUI7UUFDckIsd0JBQXdCO1FBQ3hCLHVCQUF1QixhQUd2QixZQUFZO1FBQ1osV0FBVztRQUNYLG1CQUFtQjtRQUVuQixnQkFBZ0I7UUFDaEIsVUFBVTtRQUNWLGdCQUFnQjtRQUNoQixXQUFXO1FBQ1gsZUFBZTtRQUNmLGFBQWE7UUFDYixhQUFhO1FBQ2IsY0FBYztRQUNkLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsZ0JBQWdCO1FBRWhCLGtCQUFrQjtRQUVsQixhQUFhO1FBQ2IsbUJBQW1CO1FBRW5CLGNBQWMsYUFHZCwyQkFBMkI7UUFDM0IsMEJBQTBCO1FBQzFCLHFCQUFxQjtRQUNyQix3QkFBd0I7UUFDeEIsdUJBQXVCO2tIQUdsQixtQkFBbUIsWUFuQ25CO1lBQ0wsWUFBWTtZQUNaLFdBQVc7WUFDWCxtQkFBbUI7WUFFbkIsZ0JBQWdCO1lBQ2hCLFVBQVU7WUFDVixnQkFBZ0I7WUFDaEIsV0FBVztZQUNYLGVBQWU7WUFDZixhQUFhO1lBQ2IsYUFBYTtZQUNiLGNBQWM7WUFDZCxXQUFXO1lBQ1gsa0JBQWtCO1lBQ2xCLGFBQWE7WUFDYixjQUFjO1lBQ2QsaUJBQWlCO1lBQ2pCLGdCQUFnQjtZQUVoQixrQkFBa0I7WUFFbEIsYUFBYTtZQUNiLG1CQUFtQjtZQUVuQixjQUFjO1NBQ2pCOzRGQVNRLG1CQUFtQjtrQkEzQy9CLFFBQVE7bUJBQUM7b0JBQ04sWUFBWSxFQUFFO3dCQUNWLDJCQUEyQjt3QkFDM0IsMEJBQTBCO3dCQUMxQixxQkFBcUI7d0JBQ3JCLHdCQUF3Qjt3QkFDeEIsdUJBQXVCO3FCQUMxQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsWUFBWTt3QkFDWixXQUFXO3dCQUNYLG1CQUFtQjt3QkFFbkIsZ0JBQWdCO3dCQUNoQixVQUFVO3dCQUNWLGdCQUFnQjt3QkFDaEIsV0FBVzt3QkFDWCxlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsYUFBYTt3QkFDYixjQUFjO3dCQUNkLFdBQVc7d0JBQ1gsa0JBQWtCO3dCQUNsQixhQUFhO3dCQUNiLGNBQWM7d0JBQ2QsaUJBQWlCO3dCQUNqQixnQkFBZ0I7d0JBRWhCLGtCQUFrQjt3QkFFbEIsYUFBYTt3QkFDYixtQkFBbUI7d0JBRW5CLGNBQWM7cUJBQ2pCO29CQUNELE9BQU8sRUFBRTt3QkFDTCwyQkFBMkI7d0JBQzNCLDBCQUEwQjt3QkFDMUIscUJBQXFCO3dCQUNyQix3QkFBd0I7d0JBQ3hCLHVCQUF1QjtxQkFDMUI7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBBY2NvcmRpb25Nb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2FjY29yZGlvbic7XG5pbXBvcnQgeyBBbGVydE1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvYWxlcnQnO1xuaW1wb3J0IHsgQnV0dG9uc01vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvYnV0dG9ucyc7XG5pbXBvcnQgeyBDYXJvdXNlbE1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvY2Fyb3VzZWwnO1xuaW1wb3J0IHsgQ29sbGFwc2VNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbGxhcHNlJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlck1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvZGF0ZXBpY2tlcic7XG5pbXBvcnQgeyBCc0Ryb3Bkb3duTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9kcm9wZG93bic7XG5pbXBvcnQgeyBNb2RhbE1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvbW9kYWwnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbk1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvcGFnaW5hdGlvbic7XG5pbXBvcnQgeyBQb3BvdmVyTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wb3BvdmVyJztcbmltcG9ydCB7IFByb2dyZXNzYmFyTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wcm9ncmVzc2Jhcic7XG5pbXBvcnQgeyBUYWJzTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC90YWJzJztcbmltcG9ydCB7IFRpbWVwaWNrZXJNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3RpbWVwaWNrZXInO1xuaW1wb3J0IHsgVG9vbHRpcE1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvdG9vbHRpcCc7XG5cbmltcG9ydCB7IEF1dG9mb2N1c0ZpeE1vZHVsZSB9IGZyb20gJ25neC1hdXRvZm9jdXMtZml4JztcblxuaW1wb3J0IHsgTmd4STE4bk1vZHVsZSB9IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtaTE4bic7XG5pbXBvcnQgeyBQb2xwRHJhZ2dhYmxlTW9kdWxlIH0gZnJvbSAnQHBvbHB3YXJlL21vZGFsLWRpcmVjdGl2ZXMnO1xuXG5pbXBvcnQgeyBUYWdJbnB1dE1vZHVsZSB9IGZyb20gJ25neC1jaGlwcyc7XG5cbmltcG9ydCB7IFNjaGVkdWxlVGltZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vc2NoZWR1bGUtdGltZS1waWNrZXIvc2NoZWR1bGUtdGltZS1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNjaGVkdWxlVGltZU1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9zY2hlZHVsZS10aW1lLW1vZGFsL3NjaGVkdWxlLXRpbWUtbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IENyb25Kb2JIeXBlclRyYW5zUGlwZSB9IGZyb20gJy4vY3Jvbi1qb2ItaHlwZXItdHJhbnMucGlwZSc7XG5pbXBvcnQgeyBNdWx0aURhdGVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL211bHRpLWRhdGUtcGlja2VyL211bHRpLWRhdGUtcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNdWx0aURhdGVNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vbXVsdGktZGF0ZS1tb2RhbC9tdWx0aS1kYXRlLW1vZGFsLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFNjaGVkdWxlVGltZVBpY2tlckNvbXBvbmVudCxcbiAgICAgICAgU2NoZWR1bGVUaW1lTW9kYWxDb21wb25lbnQsXG4gICAgICAgIENyb25Kb2JIeXBlclRyYW5zUGlwZSxcbiAgICAgICAgTXVsdGlEYXRlUGlja2VyQ29tcG9uZW50LFxuICAgICAgICBNdWx0aURhdGVNb2RhbENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuXG4gICAgICAgIEJzRHJvcGRvd25Nb2R1bGUsXG4gICAgICAgIFRhYnNNb2R1bGUsXG4gICAgICAgIFBhZ2luYXRpb25Nb2R1bGUsXG4gICAgICAgIE1vZGFsTW9kdWxlLFxuICAgICAgICBBY2NvcmRpb25Nb2R1bGUsXG4gICAgICAgIFBvcG92ZXJNb2R1bGUsXG4gICAgICAgIFRvb2x0aXBNb2R1bGUsXG4gICAgICAgIENhcm91c2VsTW9kdWxlLFxuICAgICAgICBBbGVydE1vZHVsZSxcbiAgICAgICAgQnNEYXRlcGlja2VyTW9kdWxlLFxuICAgICAgICBCdXR0b25zTW9kdWxlLFxuICAgICAgICBDb2xsYXBzZU1vZHVsZSxcbiAgICAgICAgUHJvZ3Jlc3NiYXJNb2R1bGUsXG4gICAgICAgIFRpbWVwaWNrZXJNb2R1bGUsXG5cbiAgICAgICAgQXV0b2ZvY3VzRml4TW9kdWxlLFxuXG4gICAgICAgIE5neEkxOG5Nb2R1bGUsXG4gICAgICAgIFBvbHBEcmFnZ2FibGVNb2R1bGUsXG5cbiAgICAgICAgVGFnSW5wdXRNb2R1bGVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU2NoZWR1bGVUaW1lUGlja2VyQ29tcG9uZW50LFxuICAgICAgICBTY2hlZHVsZVRpbWVNb2RhbENvbXBvbmVudCxcbiAgICAgICAgQ3JvbkpvYkh5cGVyVHJhbnNQaXBlLFxuICAgICAgICBNdWx0aURhdGVQaWNrZXJDb21wb25lbnQsXG4gICAgICAgIE11bHRpRGF0ZU1vZGFsQ29tcG9uZW50XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBQb2xwQnNDcm9uSm9iTW9kdWxlIHsgfVxuIl19