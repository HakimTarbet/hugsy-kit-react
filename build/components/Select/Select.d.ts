import React from 'react';
import { NullableSelectOption, SelectOption } from './SelectOption.dto';
import './Select.scss';
type SelectProps = {
    selectId: string;
    placeholder: string;
    options: SelectOption[];
    onSelectChange: (option: NullableSelectOption) => void;
    label?: string;
    selectedOption?: NullableSelectOption;
    style?: 'border' | 'grey';
    error?: string | null;
    success?: string | null;
    required?: boolean;
};
export declare const Select: React.FC<SelectProps>;
export {};
