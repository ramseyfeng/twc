import {BREAKPOINT} from '@angular/flex-layout';

export const CUSTOM_HEIGHT_BREAKPOINTS = [
  {
    alias: 'yba-min-height',
    mediaQuery: 'screen and (max-height: 660px)',
    overlapping: false,
    suffix: 'YbaMinHeight'
  },
  [
    {alias: 'sm', suffix: 'Sm', mediaQuery: 'screen and (max-width: 767px)', overlapping: false},
    {alias: 'md', suffix: 'Md', mediaQuery: 'screen and (min-width: 768px) and (max-width: 1023)', overlapping: false},
    {alias: 'lg', suffix: 'Lg', mediaQuery: 'screen and (min-width: 1024px) and (max-width: 1199px)', overlapping: false},
    {alias: 'xl', suffix: 'Xl', mediaQuery: 'screen and (min-width: 1200px)', overlapping: false},
    {alias: 'lt-sm', suffix: 'Lt-Sm', mediaQuery: 'screen and (max-width: 767px)', overlapping: false},
    {alias: 'lt-md', suffix: 'Lt-Md', mediaQuery: 'screen and (max-width: 1023)', overlapping: false},
    {alias: 'lt-lg', suffix: 'Lt-Lg', mediaQuery: 'screen and (max-width: 1199px)', overlapping: false},
    {alias: 'lt-xl', suffix: 'Lt-Xl', mediaQuery: 'screen and (min-width: 1200px)', overlapping: false}
  ]
];

export const CustomBreakPointsProvider = {
  multi: true,
  provide: BREAKPOINT,
  useValue: CUSTOM_HEIGHT_BREAKPOINTS
};
