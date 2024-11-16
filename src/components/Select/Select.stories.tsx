import { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select'
import { selectOptions } from './SelectOption.dto'

const meta: Meta<typeof Select> = {
  component: Select,
}

export default meta

type Story = StoryObj<typeof Select>

export const Default: Story = {
  args: {
    selectId: 'default-select',
    placeholder: 'Select an option',
    options: selectOptions,
    onSelectChange: () => undefined,
  },
}

export const GreyBackgroudStyle: Story = {
  args: {
    selectId: 'grey-background-select',
    placeholder: 'Select an option',
    options: selectOptions,
    style: "grey",
    onSelectChange: () => undefined,
  },
}

export const WithSelectedOption: Story = {
  args: {
    selectId: 'with-selected-option',
    placeholder: 'Select an option',
    options: selectOptions,
    selectedOption: selectOptions[2],
    onSelectChange: () => undefined,
  },
}

export const WithSelectLabel: Story = {
  args: {
    selectId: 'with-select-label',
    placeholder: 'Select an option',
    options: selectOptions,
    label: 'Select field label',
    onSelectChange: () => undefined,
  },
}

export const WithErrorMessage: Story = {
  args: {
    selectId: 'with-select-label',
    placeholder: 'Select an option',
    options: selectOptions,
    label: 'Select field label',
    error: 'This field is required',
    onSelectChange: () => undefined,
  },
}

export const WithSuccessMessage: Story = {
  args: {
    selectId: 'with-select-label',
    placeholder: 'Select an option',
    options: selectOptions,
    label: 'Select field label',
    error: 'Success placeholder',
    onSelectChange: () => undefined,
  },
}
