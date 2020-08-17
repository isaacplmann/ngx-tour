export enum ElementSides {
    Top,
    Bottom,
    All
}

export function isInViewport(htlmElement: HTMLElement, sidesToCheck: ElementSides = ElementSides.All): boolean {
    const viewportWidth = window.innerWidth,
        viewportHeight = window.innerHeight,
        boundingRectangle = htlmElement.getBoundingClientRect(),
        areCornersInViewport = boundingRectangle.left >= 0 && boundingRectangle.right <= viewportWidth,
        isTopInViewport = boundingRectangle.top >= 0,
        isBottomInViewport = boundingRectangle.bottom <= viewportHeight;

    if (sidesToCheck === ElementSides.Top) {
        return isTopInViewport && areCornersInViewport;
    }
    if (sidesToCheck === ElementSides.Bottom) {
        return isBottomInViewport && areCornersInViewport;
    }

    return isTopInViewport && isBottomInViewport && areCornersInViewport;
}
