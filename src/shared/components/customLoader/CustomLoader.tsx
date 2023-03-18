import React from 'react';
import styled from 'styled-components';
import { globalLoader } from '../../icons';

interface I_LoaderWrapProps {
  size: string;
}

export const LoaderWrap = styled.div<I_LoaderWrapProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${({ size }) => (size === 'true' ? '200px' : '80vh')};

  img {
    width: ${({ size }) => (size === 'true' ? '100px' : '300px')};
    height: 100%;
  }
`;

interface I_LoaderProps {
  size?: string;
}

export const CustomLoader: React.FC<I_LoaderProps> = (props) => {
  const { size } = props;
  return (
    <LoaderWrap size={size === 'small' ? 'true' : 'false'}>
      <img src={globalLoader} alt="globalLoader" />
    </LoaderWrap>
  );
};
