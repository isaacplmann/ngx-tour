export enum ElementSides {
    Top,
    Bottom,
    All
}

export function isInviewport(htlmElement: HTMLElement, sidesToCheck: ElementSides = ElementSides.All): boolean {
    const viewportWidth = window.innerWidth,
        viewportHeight = window.innerHeight,
        boundingRectangle = htlmElement.getBoundingClientRect(),
        areCornersInviewport = boundingRectangle.left >= 0 && boundingRectangle.right <= viewportWidth,
        isTopInviewport = boundingRectangle.top >= 0,
        isBottomInviewport = boundingRectangle.bottom <= viewportHeight;

    if (sidesToCheck === ElementSides.Top) {
        return isTopInviewport && areCornersInviewport;
    }
    if (sidesToCheck === ElementSides.Bottom) {
        return isBottomInviewport && areCornersInviewport;
    }

    return isTopInviewport && isBottomInviewport && areCornersInviewport;
}
