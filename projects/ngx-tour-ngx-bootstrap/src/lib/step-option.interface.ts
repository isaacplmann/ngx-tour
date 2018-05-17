import { IStepOption } from 'ngx-tour-core';

export interface INgxbStepOption extends IStepOption {
    placement?: 'top' | 'bottom' | 'left' | 'right' | 'auto';
}
