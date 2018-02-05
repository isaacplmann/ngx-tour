import { IStepOption } from 'ngx-tour-core';

export interface INgxpStepOption extends IStepOption {
    placement?: 'top' | 'bottom' | 'left' | 'right' | 'auto';
}
