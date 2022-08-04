import { BsModalService } from 'ngx-bootstrap/modal';
import { IScheduleTimeModalInput } from './schedule-time-modal/schedule-time-modal.component';
import * as i0 from "@angular/core";
export declare class UtilsService {
    private readonly _modalService;
    constructor(_modalService: BsModalService);
    showScheduleTimeEditorAsync(input: IScheduleTimeModalInput): Promise<import("@polpware/cron-job").IScheduleTime>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UtilsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UtilsService>;
}
