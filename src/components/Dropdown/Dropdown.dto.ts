export type DropdownOption = {
    id: string | null;
    text: string;
}

export type NullableDropdownOption = DropdownOption | null;

export const dropdownOptions: DropdownOption[] = [
    { id: "1", text: "Dropdown Item 1" },
    { id: "2", text: "Dropdown Item 2" },
    { id: "3", text: "Dropdown Item 3" },
    { id: "4", text: "Dropdown Item 4" },
    { id: "5", text: "Dropdown Item 5" },
]