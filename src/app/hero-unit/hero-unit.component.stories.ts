import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome, Button } from '@storybook/angular/demo';
import { withScreenshot } from 'storybook-chrome-screenshot';
import { HeroUnitComponent } from './hero-unit.component';

storiesOf('HeroUnit', module)
  .add('default message', withScreenshot()(() => ({
    component: HeroUnitComponent,
    props: {},
  })))
  .add('hide greeting message', withScreenshot()(() => ({
    component: HeroUnitComponent,
    props: {
      disabledGreeting: true,
    },
  })))
  ;
