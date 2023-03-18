import React from 'react';
import Select from 'react-select';
import { DropdownIndicator } from './DropdownIndicator';
import { customStyles, LabelText, SelectDiv } from './style';

interface I_CustomSelectProps {
  defaultOption?: any;
  selectOptions?: Array<any>;
  styles?: any;
  placeholder?: string;
  components?: any;
  onChange?: (value: any) => void;
  value?: {};
  onInputChange?: (inputValue: string) => void;
  margin?: string;
  padding?: string | undefined;
  isSearchable?: boolean;
  closeMenuOnSelect?: boolean;
  menuPlacement?: 'auto' | 'bottom' | 'top';
  label?: string | undefined;
  wider?: string | undefined;
  noMargin?: string | undefined;
  width?: string | undefined;
}
export const CustomSelect = (props: I_CustomSelectProps) => {
  const {
    defaultOption,
    selectOptions,
    styles = customStyles,
    placeholder,
    components = { DropdownIndicator },
    onChange,
    value,
    onInputChange,
    margin,
    padding,
    isSearchable,
    closeMenuOnSelect = true,
    menuPlacement = 'auto',
    label,
    wider,
    noMargin,
    width,
  } = props;

  return (
    <SelectDiv
      margin={margin}
      padding={padding}
      wider={wider}
      noMargin={noMargin}
      width={width}
    >
      {!!label ? <LabelText>{label}</LabelText> : ''}
      <Select
        closeMenuOnSelect={closeMenuOnSelect}
        isSearchable={isSearchable}
        styles={styles}
        options={selectOptions}
        defaultValue={defaultOption}
        placeholder={placeholder}
        onChange={onChange}
        components={components}
        value={value}
        onInputChange={onInputChange}
        menuPlacement={menuPlacement}
      />
    </SelectDiv>
  );
};
