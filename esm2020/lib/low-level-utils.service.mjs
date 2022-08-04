import { Injectable } from '@angular/core';
import { MultiDateModalComponent } from './multi-date-modal/multi-date-modal.component';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/modal";
export class LowLevelUtilsService {
    constructor(_modalService) {
        this._modalService = _modalService;
    }
    showMultiDateEditorAsync(input) {
        const modalRef = this._modalService.show(MultiDateModalComponent, {
            animated: true,
            ignoreBackdropClick: true,
            initialState: Object.assign({}, input),
            keyboard: false,
            class: 'modal-dialog-centered'
        });
        return modalRef.content.result.toPromise();
    }
}
LowLevelUtilsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: LowLevelUtilsService, deps: [{ token: i1.BsModalService }], target: i0.ɵɵFactoryTarget.Injectable });
LowLevelUtilsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: LowLevelUtilsService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: LowLevelUtilsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.BsModalService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG93LWxldmVsLXV0aWxzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9jcm9uLWpvYi9zcmMvbGliL2xvdy1sZXZlbC11dGlscy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUF3Qix1QkFBdUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDOzs7QUFLOUcsTUFBTSxPQUFPLG9CQUFvQjtJQUU3QixZQUE2QixhQUE2QjtRQUE3QixrQkFBYSxHQUFiLGFBQWEsQ0FBZ0I7SUFBSSxDQUFDO0lBRS9ELHdCQUF3QixDQUFDLEtBQTJCO1FBQ2hELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFO1lBQzlELFFBQVEsRUFBRSxJQUFJO1lBQ2QsbUJBQW1CLEVBQUUsSUFBSTtZQUN6QixZQUFZLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDO1lBQ3RDLFFBQVEsRUFBRSxLQUFLO1lBQ2YsS0FBSyxFQUFFLHVCQUF1QjtTQUNqQyxDQUFDLENBQUM7UUFFSCxPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQy9DLENBQUM7O2tIQWRRLG9CQUFvQjtzSEFBcEIsb0JBQW9CLGNBRmpCLE1BQU07NEZBRVQsb0JBQW9CO2tCQUhoQyxVQUFVO21CQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJzTW9kYWxTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9tb2RhbCc7XG5pbXBvcnQgeyBJTXVsdGlEYXRlTW9kYWxJbnB1dCwgTXVsdGlEYXRlTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL211bHRpLWRhdGUtbW9kYWwvbXVsdGktZGF0ZS1tb2RhbC5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIExvd0xldmVsVXRpbHNTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgX21vZGFsU2VydmljZTogQnNNb2RhbFNlcnZpY2UpIHsgfVxuXG4gICAgc2hvd011bHRpRGF0ZUVkaXRvckFzeW5jKGlucHV0OiBJTXVsdGlEYXRlTW9kYWxJbnB1dCkge1xuICAgICAgICBjb25zdCBtb2RhbFJlZiA9IHRoaXMuX21vZGFsU2VydmljZS5zaG93KE11bHRpRGF0ZU1vZGFsQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBhbmltYXRlZDogdHJ1ZSxcbiAgICAgICAgICAgIGlnbm9yZUJhY2tkcm9wQ2xpY2s6IHRydWUsXG4gICAgICAgICAgICBpbml0aWFsU3RhdGU6IE9iamVjdC5hc3NpZ24oe30sIGlucHV0KSxcbiAgICAgICAgICAgIGtleWJvYXJkOiBmYWxzZSxcbiAgICAgICAgICAgIGNsYXNzOiAnbW9kYWwtZGlhbG9nLWNlbnRlcmVkJ1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbW9kYWxSZWYuY29udGVudC5yZXN1bHQudG9Qcm9taXNlKCk7XG4gICAgfVxuXG59XG4iXX0=