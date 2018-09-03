import { pallette, spacing, typography } from '@packages/web/themes/default/settings';

export const Table = `
  border: 0;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;

  & last-child {
    border-bottom: 0;
  }
`;

export const Head = `
  margin: 0;
  padding: 0;
`;

export const Body = `
  margin: 0;
  padding: 0;
`;

const cell = `
  border-bottom: 1px solid ${pallette.iron};
  font-family: ${typography.fontFamilyDefault};
  font-size: ${typography.fontSizeNormal};
  margin: 0;
  padding: ${spacing.default} ${spacing.spacious};
  text-align: left;
  vertical-align: top;
`;

export const Cell = `
  ${cell}
  font-weight: ${typography.fontWeightDefault};
`;

export const CellAsNumber = `
  ${Cell}
  text-align: right;
`;

export const CellHead = `
  ${cell}
  font-weight: ${typography.fontWeightDense};
`;

export const CellHeadAsNumber = `
  ${CellHead}
  text-align: right;
`;
