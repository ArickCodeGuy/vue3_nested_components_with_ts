export type ComponentAttributes = {
  style?: string;
  class?: string;
};

export type Checkbox = ComponentAttributes & {
  modelValue: boolean;
};
export type CheckboxLabel = ComponentAttributes & {
  label?: string;
  checkbox: Checkbox;
};
export type CheckboxList = ComponentAttributes & {
  checkboxes?: CheckboxLabel[];
};

export type BorderBox = ComponentAttributes & {
  heading?: string;
  checkboxList?: CheckboxList;
};
