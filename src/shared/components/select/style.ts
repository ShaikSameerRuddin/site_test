import styled from 'styled-components';
import { colors, screenSizes } from '../../../style/theme';

interface I_SelectDivProps {
  width?: string;
  margin?: string;
  padding?: string;
  wider?: string;
  noMargin?: string;
}

export const SelectDiv = styled.div<I_SelectDivProps>`
  width: ${({ width }) => (width ? width : '100%')};
  align-items: flex-start;
  color: ${colors.black};
  margin: ${({ margin }) => (margin ? margin : '')};
  padding: ${({ padding }) => (padding ? padding : '')};
  margin-bottom: ${({ wider, noMargin }) =>
    noMargin === 'true' ? 0 : wider === 'true' ? '38px' : '20px'};
`;

export const customStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    color: state.isSelected ? '#FF2290' : 'black',
    cursor: 'pointer',
    background: '#ebeef1',
    fontFamily: 'DMSansBold',
    fontSize: '14px',
  }),
  placeholder: (provided: any, state: any) => ({
    ...provided,
    opacity: 0.7,
    color: '#00000',
    '&:hover': {
      color: state.isDisabled ? '#ffffff' : '#c771ff',
    },
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    display: 'flex',
    borderRadius: '10px',
    background: 'white',
    padding: '6px',
    border: '1px solid rgba(207, 148, 255, 0.7)',
    '&:hover': {
      border: state.isDisabled
        ? '1px solid rgba(207, 148, 255, 0.7)'
        : '1px solid rgba(199, 113, 255, 1)',
    },
    boxShadow: state.isFocused
      ? `0px 0px 0 1px rgba(199, 113, 255, 1),  0 0 10px rgba(199, 113, 255, 1)`
      : 0,
    opacity: 1,
    cursor: 'pointer',
    fontSize: '14px',
    fontFamily: 'DMSansRegular',
  }),
  singleValue: (provided: any, state: any) => {
    const color = '#C771FF';

    return { ...provided, color };
  },
};

export const LabelText = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  opacity: 0.5;
  font-family: 'DMSansRegular';
  padding-bottom: 10px;
  @media (min-width: ${screenSizes.L}px) {
    font-size: 18px;
    line-height: 22px;
    padding-bottom: 17px;
  }
`;
