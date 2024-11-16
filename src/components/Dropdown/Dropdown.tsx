import React, { useEffect, useRef, useState } from 'react'
import { DropdownOption, NullableDropdownOption } from './Dropdown.dto'
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline'
import './Dropdown.scss'

type DropdownProps = {
  placeholder: string
  options: DropdownOption[]
  onSelectOption: (option: NullableDropdownOption) => void
  label?: string
  selectedOption?: NullableDropdownOption
  style?: 'border' | 'grey'
}

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  placeholder,
  options,
  onSelectOption,
  selectedOption = null,
  style = 'border',
}) => {
  const [selected, setSelected] =
    useState<NullableDropdownOption>(selectedOption)
  const [showOptions, setShowOptions] = useState<boolean>(false)
  const optionsRef = useRef<HTMLUListElement>(null)
  const placeholderRef = useRef<HTMLParagraphElement>(null)

  const onOptionClickHandler = (option: NullableDropdownOption) => {
    setSelected(option)
    setShowOptions(false)
    onSelectOption(option)
  }

  const onPlaceholderClickHandler = () => {
    setShowOptions(!showOptions)
  }

  const onClearHandler = () => {
    setSelected(null)
    setShowOptions(false)
    onSelectOption(null)
  }

  useEffect(() => {
    const clickHandler = (event: MouseEvent) => {
      if (
        optionsRef.current &&
        placeholderRef.current &&
        !optionsRef.current.contains(event.target as Node) &&
        !placeholderRef.current.contains(event.target as Node)
      ) {
        setShowOptions(false)
      }
    }

    document.addEventListener('mousedown', clickHandler)
  }, [])

  return (
    <div className="dropdown">
      {label && (
        <p className="dropdown__label" data-testid="dropdown-label">
          {label}
        </p>
      )}
      <p
        ref={placeholderRef}
        data-testid="dropdown-placeholder"
        className={`dropdown__placeholder dropdown__placeholder--${style}
        ${showOptions ? 'dropdown__placeholder--active' : ''} 
        ${selected ? 'dropdown__placeholder--selected' : ''}
      `}
      >
        <button
          className={`dropdown__placeholder-button 
          ${showOptions ? 'dropdown__placeholder-button--active' : ''} 
          ${selected ? 'dropdown__placeholder-button--selected' : ''}
        `}
          data-testid="dropdown-placeholder-button"
          onClick={onPlaceholderClickHandler}
        >
          <span>{selected?.text || placeholder}</span>
          {!selected && (
            <span data-testid="dropdown-chevron">
              <ChevronDownIcon />
            </span>
          )}
        </button>

        {selected && (
          <button
            className="dropdown__placeholder-clear"
            data-testid="dropdown-clear"
            onClick={onClearHandler}
          >
            <XMarkIcon />
          </button>
        )}
      </p>

      {showOptions && (
        <ul
          ref={optionsRef}
          className="dropdown__options"
          data-testid="dropdown-options"
        >
          {options.map((option) => (
            <li
              key={option.id}
              className="dropdown__option"
              data-testid={`dropdown-option-${option.id}`}
            >
              <button
                className={`dropdown__option-button ${option.id == selected?.id ? 'dropdown__option-button--active' : ''}`}
                data-testid={`dropdown-option-${option.id}-button`}
                onClick={(e) => onOptionClickHandler(option)}
              >
                {option.text}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
