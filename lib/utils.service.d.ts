import { BsModalService } from 'ngx-bootstrap/modal';
import { IMultiDateModalInput } from './multi-date-modal/multi-date-modal.component';
import { IScheduleTimeModalInput } from './schedule-time-modal/schedule-time-modal.component';
export declare class UtilsService {
    private readonly _modalService;
    constructor(_modalService: BsModalService);
    showScheduleTimeEditorAsync(input: IScheduleTimeModalInput): Promise<import("./interfaces").IScheduleTime>;
    showMultiDateEditorAsync(input: IMultiDateModalInput): Promise<string[]>;
}
