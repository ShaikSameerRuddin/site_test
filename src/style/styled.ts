import styled from 'styled-components';

interface I_FlexColProps {
  justifyContent?: string;
  alignItems?: string;
  flex?: number;
  margin?: string;
}

interface I_FlexRowProps {
  gap?: string;
  alignItems?: string;
  justifyContent?: string;
}

export const FlexCol = styled.div<I_FlexColProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'center'};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  ${(props) => props.flex && `flex: ${props.flex};`}
  ${(props) => props.margin && `margin: ${props.margin};`}
`;

export const FlexRow = styled.div<I_FlexRowProps>`
  display: flex;
  flex-direction: row;
  gap: ${(props) => (props.gap ? props.gap : '')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : ''};
`;
