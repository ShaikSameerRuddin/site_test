import React from 'react';
import { components, DropdownIndicatorProps } from 'react-select';
import { dropDown } from '../../icons';

export const DropdownIndicator = (props: DropdownIndicatorProps) => {
  return (
    <components.DropdownIndicator {...props}>
      <img src={dropDown} alt="" width="10px" style={{ marginRight: '10px' }} />
    </components.DropdownIndicator>
  );
};
