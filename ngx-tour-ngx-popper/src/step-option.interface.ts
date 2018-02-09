import { IStepOption } from 'ngx-tour-core';
import { Placement, Trigger } from 'ngx-popper';

export interface INgxpStepOption extends IStepOption {
    placement?: Placement;
    popperSettings?:{
        boundariesElement?: string;
        closeOnClickOutside?: boolean;
        disableAnimation?: boolean;
        disabled?: boolean;
        disableStyle?: boolean;
        forceDetection?: boolean;
        hideOnClickOutside?: boolean;
        hideOnScroll?: boolean;
        hideTimeout?: number;
        popperModifiers?: any;
        popperOnHidden?: any;
        popperOnShown?: any;
        positionFixed?: boolean;
        showDelay?: number;
        showOnStart?: boolean;
        showTrigger?: Trigger;
        targetElement?: HTMLElement;
        timeoutAfterShow?: number;
    }
}
