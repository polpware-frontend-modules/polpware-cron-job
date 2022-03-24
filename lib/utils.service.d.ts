import { BsModalService } from 'ngx-bootstrap/modal';
import { IModalInput } from './schedule-time-modal/schedule-time-modal.component';
export declare class UtilsService {
    private readonly _modalService;
    constructor(_modalService: BsModalService);
    showScheduleTimeEditorAsync(input: IModalInput): Promise<import("./interfaces").IScheduleTime>;
}
