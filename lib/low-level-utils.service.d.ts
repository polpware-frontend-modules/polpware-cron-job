import { BsModalService } from 'ngx-bootstrap/modal';
import { IMultiDateModalInput } from './multi-date-modal/multi-date-modal.component';
import * as i0 from "@angular/core";
export declare class LowLevelUtilsService {
    private readonly _modalService;
    constructor(_modalService: BsModalService);
    showMultiDateEditorAsync(input: IMultiDateModalInput): Promise<string[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LowLevelUtilsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LowLevelUtilsService>;
}
