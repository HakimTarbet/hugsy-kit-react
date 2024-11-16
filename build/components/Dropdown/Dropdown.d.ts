import React from 'react';
import { DropdownOption, NullableDropdownOption } from './Dropdown.dto';
import './Dropdown.scss';
type DropdownProps = {
    placeholder: string;
    options: DropdownOption[];
    onSelectOption: (option: NullableDropdownOption) => void;
    label?: string;
    selectedOption?: NullableDropdownOption;
    style?: 'border' | 'grey';
};
export declare const Dropdown: React.FC<DropdownProps>;
export {};
