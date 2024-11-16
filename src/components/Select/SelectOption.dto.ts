export type SelectOption = {
    id: string;
    text: string;
}

export type NullableSelectOption = SelectOption | null;

export const selectOptions: SelectOption[] = [
    { id: "1", text: "Select option 1" },
    { id: "2", text: "Select option 2" },
    { id: "3", text: "Select option 3" },
    { id: "4", text: "Select option 4" },
    { id: "5", text: "Select option 5" },
]