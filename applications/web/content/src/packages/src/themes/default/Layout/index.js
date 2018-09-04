import { pallette, spacing } from '@packages/themes/default/settings';

export const Body = `
  background-color: ${pallette.white};
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

export const Content = `
  flex-grow: 1;
  padding: ${spacing.spacious};
`;
