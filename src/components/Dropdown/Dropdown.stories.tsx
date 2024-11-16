import { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';
import { dropdownOptions } from './Dropdown.dto';

const meta: Meta<typeof Dropdown> = {
    title: 'Hugsy Kit/Dropdown',
    component: Dropdown,
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
    args: {
        placeholder: "Select Items",
        options: dropdownOptions,
        onSelectOption: () => undefined
    },
};
export const GreyBackgroudStyle: Story = {
    args: {
        placeholder: "Select Items",
        options: dropdownOptions,
        onSelectOption: () => undefined,
        style: "grey",
    },
};

export const WithSelectedOption: Story = {
    args: {
        placeholder: "Select Items",
        options: dropdownOptions,
        selectedOption: dropdownOptions[2],
        onSelectOption: () => undefined
    },
};

export const WithDropdownLabel: Story = {
    args: {
        label: "Dropdown Label",
        placeholder: "Select Items",
        options: dropdownOptions,
        onSelectOption: () => undefined
    },
};
  