import { DemoModuleNgFactory } from './demo/demo.module.ngfactory';
import { platformBrowser } from '@angular/platform-browser';

platformBrowser().bootstrapModuleFactory(DemoModuleNgFactory);
