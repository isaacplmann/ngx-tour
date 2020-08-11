# IsInviewport

A simple library to check if html element is in the viewport.

## Usage

Check if the whole html element is visible:
```ts
import {isInviewport} from 'is-inviewport';

isInviewport(htmlElement);
```

Check if top is visible:
```ts
import {isInviewport, ElementSides} from 'is-inviewport';

isInviewport(htmlElement, ElementSides.Top);
```

Check if bottom is visible:
```ts
import {isInviewport, ElementSides} from 'is-inviewport';

isInviewport(htmlElement, ElementSides.Bottom);
```
