import { IStepOption } from 'ngx-tour-core';

export interface INgxnfStepOption extends IStepOption {
    placement?: 'top' | 'bottom' | 'left' | 'right' | 'auto';
}
