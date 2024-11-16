import React, { useState } from 'react'
import { NullableSelectOption, SelectOption } from './SelectOption.dto'
import './Select.scss'

type SelectProps = {
  selectId: string
  placeholder: string
  options: SelectOption[]
  onSelectChange: (option: NullableSelectOption) => void
  label?: string
  selectedOption?: NullableSelectOption
  style?: 'border' | 'grey'
  error?: string | null
  success?: string | null
  required?: boolean
}

export const Select: React.FC<SelectProps> = ({
  selectId,
  placeholder,
  options,
  onSelectChange,
  label,
  selectedOption = null,
  style = 'border',
  error = null,
  success = null,
  required = false
}) => {
  const [currentOption, setCurrentOption] =
    useState<NullableSelectOption>(selectedOption)

  const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let selected: NullableSelectOption
    const { value } = event.target

    if (value === '') {
      selected = null
    } else {
      selected = options.find((option) => option.id === String(value)) || null
    }

    setCurrentOption(selected)
    onSelectChange(selected)
  }

  return (
    <div data-testid={`select-${selectId}`} className="select">
      {label && (
        <label
          className="select__label"
          data-testid={`select-${selectId}-label`}
          htmlFor={selectId}
        >
          {label}
        </label>
      )}

      <select
        name={selectId}
        data-testid={`select-${selectId}-field`}
        className={`select__field select__field--${style} 
          ${error ? 'select__field--error' : ''} 
          ${success ? 'select__field--success' : ''}`
        }
        onChange={onChangeHandler}
        value={currentOption ? currentOption.id : ''}
        required={required}
      >
        {!currentOption && (
          <option key="default" value="">
            {placeholder}
          </option>
        )}

        {options.map((option: SelectOption) => (
          <option key={option.id} value={option.id}>
            {option.text}
          </option>
        ))}
      </select>

      {error && (
        <p data-testid={`select-${selectId}-error`} className="select__error">
          {error}
        </p>
      )}

      {success && (
        <p data-testid={`select-${selectId}-success`} className="select__success">
          {success}
        </p>
      )}
    </div>
  )
}
