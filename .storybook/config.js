import { configure, addDecorator } from '@storybook/angular';
import { initScreenshot, setScreenshotOptions } from 'storybook-chrome-screenshot';

// automatically import all files ending in *.stories.ts
const req = require.context('../src', true, /.stories.ts$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(initScreenshot());

setScreenshotOptions({
  viewport: {
    width: 960,
    height: 500,
  },
  delay: 300,
});

configure(loadStories, module);
