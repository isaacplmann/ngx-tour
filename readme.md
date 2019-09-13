# Ng2 Tour

[![Dependency Status](https://david-dm.org/isaacplmann/ng2-tour.svg)](https://david-dm.org/isaacplmann/ngx-tour)
[![devDependency Status](https://david-dm.org/isaacplmann/ng2-tour/dev-status.svg)](https://david-dm.org/isaacplmann/ngx-tour?type=dev)

Check out the [documentation/demo page](https://isaacplmann.github.io/ngx-tour).

This is a product tour library built with Angular. It's inspired by [angular-ui-tour](http://benmarch.github.io/angular-ui-tour).

# Difference to base library

* Added noScroll, observables, toClick, bugfixes ...

* Implemented workaround for bug where the backdrop did not move during scrolling even though the page did.

* Added 3 new observables:
  - next$: When the next step is loaded
  - prev$: When the previous step is loaded
  - callback$: When the backdrop is clicked while a toClick is defined

* _toClick_:
When it is defined, clicking the backdrop does NOT close the tour. Instead, the element set as toClick is clicked automatically. This works for buttons, anchors (links), etc. Useful if you want to open a modal with the next step.

* Clicking 'right' at the last step now ends the tour

* Added enum 'TourDirection' that allows to get the current tour direction

* Fixed unknown bug that occured when a step has a backdrop and the next step can not be loaded while on a different route. In this case, the backdrop seemed to stay

* Fixed the bug where the backdrop did not realign after a window resize.

* Changed cast syntax to newer standard
