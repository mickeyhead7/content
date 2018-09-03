import { animation, pallette } from '@packages/web/themes/default/settings';

export const Label = `
  background-color: transparent;
  border: 2px solid ${pallette.iron};
  border-radius: .125rem;
  cursor: pointer;
  display: block;
  height: 1rem;
  transition: background-color ${animation.speed.fast} ${animation.easing.default};
  width: 1rem;
`;

export const LabelChecked = `
  ${Label}
  background-color: ${pallette.iron};
`;

export const Checkbox = `
  display: none;
`;
