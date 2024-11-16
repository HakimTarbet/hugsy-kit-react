import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { Dropdown } from './Dropdown';
import { dropdownOptions } from './Dropdown.dto';

const onSelectOption = jest.fn();
const renderDropdown = (props = {}) => {
  return render(
    <Dropdown 
      placeholder='Select Items' 
      options={dropdownOptions}
      onSelectOption={onSelectOption}
      {...props}
    />
  );
};

describe('Dropdown Component', () => {
  describe('should renders', () => {
    it('label if indicated by props', () => {
      renderDropdown({ label: 'Dropdown Label' });

      const labelElement = screen.getByTestId('dropdown-label');
      expect(labelElement).toBeInTheDocument();
      expect(labelElement).toHaveTextContent('Dropdown Label');
    });

    it('placeholder and not render the selected option', () => {
      renderDropdown();
      
      const placeholderElement = screen.getByTestId('dropdown-placeholder-button');
      expect(placeholderElement).toBeInTheDocument();
      expect(placeholderElement).toHaveTextContent('Select Items');
    });

    it('placeholder with border class as default style', () => {
      renderDropdown();
      
      const placeholderElement = screen.getByTestId('dropdown-placeholder');
      expect(placeholderElement).toBeInTheDocument();
      expect(placeholderElement).toHaveClass('dropdown__placeholder--border');
    });

    it('placeholder with grey background class if indicated by prop', () => {
      renderDropdown({ style: 'grey' });
      
      const placeholderElement = screen.getByTestId('dropdown-placeholder');
      expect(placeholderElement).toBeInTheDocument();
      expect(placeholderElement).toHaveClass('dropdown__placeholder--grey');
    });

    it('selected option text in placeholder', () => {
      renderDropdown({ selectedOption: dropdownOptions[0] });

      const placeholderElement = screen.getByTestId('dropdown-placeholder-button');
      expect(placeholderElement).toBeInTheDocument();
      expect(placeholderElement).toHaveTextContent('Dropdown Item 1');
    });

    it('chevron icon if selected option is not set', () => {
      renderDropdown();
      expect(screen.getByTestId('dropdown-chevron')).toBeInTheDocument();
    });

    it('clear icon if selected option defined', () => {
      renderDropdown({ selectedOption: dropdownOptions[0] });
      expect(screen.getByTestId('dropdown-clear')).toBeInTheDocument();
    });
  });

  describe('on placeholder click', () => {
    it('should opens options list', () => {
      renderDropdown();

      expect(screen.queryByTestId('dropdown-options')).not.toBeInTheDocument();
      fireEvent.click(screen.getByTestId('dropdown-placeholder-button'));
      expect(screen.getByTestId('dropdown-options')).toBeInTheDocument();
    });

    it('should closes options list if clicked twice', () => {
      renderDropdown();

      const placeholderElement = screen.getByTestId('dropdown-placeholder-button');

      expect(screen.queryByTestId('dropdown-options')).not.toBeInTheDocument();

      fireEvent.click(placeholderElement);
      expect(screen.getByTestId('dropdown-options')).toBeInTheDocument();

      fireEvent.click(placeholderElement);
      expect(screen.queryByTestId('dropdown-options')).not.toBeInTheDocument();
    });

    it('the placeholder element should have active class', () => {
      renderDropdown();

      const placeholderElement = screen.getByTestId('dropdown-placeholder-button');

      expect(placeholderElement).not.toHaveClass('dropdown__placeholder-button--active');

      fireEvent.click(placeholderElement);
      expect(placeholderElement).toHaveClass('dropdown__placeholder-button--active');
    });
  });

  describe('options list should', () => {
    it('not be rendered by default', () => {
      renderDropdown();

      expect(screen.queryByTestId('dropdown-options')).not.toBeInTheDocument();
    });

    it('have all options items', () => {
      renderDropdown();

      fireEvent.click(screen.getByTestId('dropdown-placeholder-button'));
      const optionsListElement = screen.getByTestId('dropdown-options');
      const optionsItemsElements = within(optionsListElement).getAllByRole('listitem');

      expect(optionsItemsElements).toHaveLength(5);
      expect(optionsItemsElements[0]).toHaveTextContent('Dropdown Item 1');
      expect(optionsItemsElements[1]).toHaveTextContent('Dropdown Item 2');
      expect(optionsItemsElements[2]).toHaveTextContent('Dropdown Item 3');
      expect(optionsItemsElements[3]).toHaveTextContent('Dropdown Item 4');
      expect(optionsItemsElements[4]).toHaveTextContent('Dropdown Item 5');
    });
  });

  describe('on an option clicked', () => {
    it('should set the selected text in placeholder', () => {
      renderDropdown();
      expect(screen.queryByTestId('dropdown-placeholder')).toHaveTextContent('Select Items');

      fireEvent.click(screen.getByTestId('dropdown-placeholder-button'));
      fireEvent.click(screen.getByTestId('dropdown-option-3-button'));

      expect(screen.queryByTestId('dropdown-placeholder')).toHaveTextContent('Dropdown Item 3');
    });

    it('should show clear button and hide chevron icon', () => {
      renderDropdown();

      expect(screen.getByTestId('dropdown-chevron')).toBeInTheDocument();
      expect(screen.queryByTestId('dropdown-clear')).not.toBeInTheDocument();

      fireEvent.click(screen.getByTestId('dropdown-placeholder-button'));
      fireEvent.click(screen.getByTestId('dropdown-option-3-button'));

      expect(screen.getByTestId('dropdown-clear')).toBeInTheDocument();
      expect(screen.queryByTestId('dropdown-chevron')).not.toBeInTheDocument();
    });

    it('should call to onSelectOption callback', () => {
      renderDropdown();

      fireEvent.click(screen.getByTestId('dropdown-placeholder-button'));
      fireEvent.click(screen.getByTestId('dropdown-option-3-button'));

      expect(onSelectOption).toHaveBeenCalledWith(dropdownOptions[2]);
    });

    it('the placeholder element should have selected class', () => {
      renderDropdown();

      const placeholderElement = screen.getByTestId('dropdown-placeholder-button');
      expect(placeholderElement).not.toHaveClass('dropdown__placeholder-button--selected');

      fireEvent.click(placeholderElement);
      fireEvent.click(screen.getByTestId('dropdown-option-3-button'));

      expect(placeholderElement).toHaveClass('dropdown__placeholder-button--selected');
    });

    it('the selected option should contain active class', () => {
      renderDropdown();

      const placeholderElement = screen.getByTestId('dropdown-placeholder-button');
      expect(placeholderElement).not.toHaveClass('dropdown__placeholder-button--selected');

      fireEvent.click(placeholderElement);
      fireEvent.click(screen.getByTestId('dropdown-option-3-button'));
      fireEvent.click(placeholderElement);

      expect(screen.getByTestId('dropdown-option-3-button')).toHaveClass('dropdown__option-button--active');
    });
  });

  describe('on clear button click', () => {
    it('should reset the placeholder text to defined by props', () => {
      renderDropdown({ selectedOption: dropdownOptions[2] });

      expect(screen.queryByTestId('dropdown-placeholder')).toHaveTextContent('Dropdown Item 3');
      expect(screen.getByTestId('dropdown-clear')).toBeInTheDocument();
      
      fireEvent.click(screen.getByTestId('dropdown-clear'));
      expect(screen.getByTestId('dropdown-placeholder-button')).toHaveTextContent('Select Items');
    });

    it('the placeholder should not have selected class', () => {
      renderDropdown({ selectedOption: dropdownOptions[2] });

      fireEvent.click(screen.getByTestId('dropdown-clear'));
    });

    it('should closes options list', () => {
      renderDropdown({ selectedOption: dropdownOptions[2] });

      fireEvent.click(screen.getByTestId('dropdown-placeholder-button'));
      expect(screen.getByTestId('dropdown-options')).toBeInTheDocument();

      fireEvent.click(screen.getByTestId('dropdown-clear'));

      expect(screen.queryByTestId('dropdown-options')).not.toBeInTheDocument();
    });

    it('should call to onSelectOption callback', () => {
      renderDropdown({ selectedOption: dropdownOptions[2] });

      fireEvent.click(screen.getByTestId('dropdown-clear'));

      expect(onSelectOption).toHaveBeenCalledWith(null);
    });
  });

  it('should close options list if click outside the list', () => {
    renderDropdown();

    fireEvent.click(screen.getByTestId('dropdown-placeholder-button'));
    expect(screen.getByTestId('dropdown-options')).toBeInTheDocument();

    fireEvent.mouseDown(document.body);
    
    expect(screen.queryByTestId('dropdown-options')).not.toBeInTheDocument();
  });
})
