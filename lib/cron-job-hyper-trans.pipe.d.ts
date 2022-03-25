import { ChangeDetectorRef } from '@angular/core';
import { HyperTranslatePipeBase } from '@polpware/ngx-i18n';
import { CronJobTranslatorService } from './cron-job-translator.service';
export declare class CronJobHyperTransPipe extends HyperTranslatePipeBase {
    protected _translate: CronJobTranslatorService;
    protected _ref: ChangeDetectorRef;
    constructor(_translate: CronJobTranslatorService, _ref: ChangeDetectorRef);
}
