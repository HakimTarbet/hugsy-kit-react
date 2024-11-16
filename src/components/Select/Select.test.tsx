import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Select } from './Select';
import { selectOptions } from './SelectOption.dto';

const onSelectChange = jest.fn();
const renderSelect = (props = {}) => {
  return render(
    <Select 
      selectId='unique-select-id'
      placeholder='Select an option' 
      options={selectOptions}
      onSelectChange={onSelectChange}
      {...props}
    />
  );
};

describe('Select Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('should renders', () => {
    it('label if indicated by props', () => {
      renderSelect({ label: 'Select field label' });

      const labelElement = screen.getByTestId('select-unique-select-id-label');
      expect(labelElement).toBeInTheDocument();
      expect(labelElement).toHaveTextContent('Select field label');
    });

    it('placeholder option if selectedOption is not set', () => {
      renderSelect();
      
      const placeholderOption = screen.getAllByRole('option')[0];
      expect(placeholderOption).toHaveTextContent('Select an option');

      const selectElement = screen.getByTestId('select-unique-select-id-field');
      expect(selectElement).toHaveValue('');
    });

    it('all options provided in the options prop', () => {
      renderSelect();
      
      const renderedOptions = screen.getAllByRole('option');
      expect(renderedOptions).toHaveLength(selectOptions.length + 1);

      selectOptions.forEach(option => {
        expect(screen.getByText(option.text)).toBeInTheDocument();
      });
    });

    it('the correct option as selected when selectedOption is provided', () => {
      const selectedOption = selectOptions[1];
      renderSelect({ selectedOption });

      const selectElement = screen.getByTestId('select-unique-select-id-field');
      expect(selectElement).toHaveValue(selectedOption.id);
    });

    it('applies the correct style based on the style prop', () => {
      renderSelect({ style: 'grey' });

      const selectElement = screen.getByTestId('select-unique-select-id-field');
      expect(selectElement).toHaveClass('select__field--grey');
    });

    it('the select element with the required attribute when required is true', () => {
      renderSelect({ required: true })
    
      const selectElement = screen.getByTestId('select-unique-select-id-field');
      expect(selectElement).toHaveAttribute('required');
    });
    
    it('does not render the required attribute when required is false or undefined', () => {
      renderSelect()
    
      const selectElement = screen.getByTestId('select-unique-select-id-field');
      expect(selectElement).not.toHaveAttribute('required');
    });
    
  });

  describe('onSelectChange callback', () => {
    it('calls onSelectChange with the correct value when an option is selected', () => {
      renderSelect();

      const selectElement = screen.getByTestId('select-unique-select-id-field');
      fireEvent.change(selectElement, { target: { value: selectOptions[0].id } });

      expect(onSelectChange).toHaveBeenCalledTimes(1);
      expect(onSelectChange).toHaveBeenCalledWith(selectOptions[0]);
    });

    it('calls onSelectChange with null when an invalid option is selected', () => {
      renderSelect();
    
      const selectElement = screen.getByTestId('select-unique-select-id-field');
      
      fireEvent.change(selectElement, { target: { value: '47' } });
    
      expect(onSelectChange).toHaveBeenCalledTimes(1);
      expect(onSelectChange).toHaveBeenCalledWith(null);
    });

    it('calls onSelectChange with null when the placeholder is selected', () => {
      renderSelect();

      const selectElement = screen.getByTestId('select-unique-select-id-field');
      fireEvent.change(selectElement, { target: { value: '' } });

      expect(onSelectChange).toHaveBeenCalledTimes(1);
      expect(onSelectChange).toHaveBeenCalledWith(null);
    });

    it('updates currentOption with the correct option when an option is selected', () => {
      renderSelect();
  
      const selectElement = screen.getByTestId('select-unique-select-id-field');
      fireEvent.change(selectElement, { target: { value: selectOptions[0].id } });
  
      expect(selectElement).toHaveValue(selectOptions[0].id);
    });

    it('updates currentOption to null when when an invalid option is selected', () => {
      renderSelect();
  
      const selectElement = screen.getByTestId('select-unique-select-id-field');
      fireEvent.change(selectElement, { target: { value: '47' } });
  
      expect(selectElement).toHaveValue('');
    });
  
    it('updates currentOption to null when the placeholder is selected', () => {
      renderSelect({ selectedOption: selectOptions[1] });
  
      const selectElement = screen.getByTestId('select-unique-select-id-field');
      fireEvent.change(selectElement, { target: { value: '' } });
      
      expect(selectElement).toHaveValue('');
    });
  });

  describe('Error and Success States', () => {
    it('renders an error message when the error prop is provided', () => {
      renderSelect({ error: 'This field is required' });
  
      const errorElement = screen.getByTestId('select-unique-select-id-error');
      expect(errorElement).toBeInTheDocument();
      expect(errorElement).toHaveTextContent('This field is required');
    });
  
    it('does not render the error message when the error prop is not provided', () => {
      renderSelect();
  
      const errorElement = screen.queryByTestId('select-unique-select-id-error');
      expect(errorElement).not.toBeInTheDocument();
    });
  
    it('renders a success message when the success prop is provided', () => {
      renderSelect({ success: 'select option is valid' });
  
      const successElement = screen.getByTestId('select-unique-select-id-success');
      expect(successElement).toBeInTheDocument();
      expect(successElement).toHaveTextContent('select option is valid');
    });
  
    it('does not render the success message when the success prop is not provided', () => {
      renderSelect();
  
      const successElement = screen.queryByTestId('select-unique-select-id-success');
      expect(successElement).not.toBeInTheDocument();
    });
  
    it('applies the error style when the error prop is provided', () => {
      renderSelect({ error: 'This field is required' });
  
      const selectElement = screen.getByTestId('select-unique-select-id-field');
      expect(selectElement).toHaveClass('select__field--error');
    });
  
    it('applies the success style when the success prop is provided', () => {
      renderSelect({ success: 'select option is valid' });
  
      const selectElement = screen.getByTestId('select-unique-select-id-field');
      expect(selectElement).toHaveClass('select__field--success');
    });
  
    it('applies neither error nor success style when neither prop is provided', () => {
      renderSelect();
  
      const selectElement = screen.getByTestId('select-unique-select-id-field');
      expect(selectElement).not.toHaveClass('select__field--error');
      expect(selectElement).not.toHaveClass('select__field--success');
    });
  });
})
