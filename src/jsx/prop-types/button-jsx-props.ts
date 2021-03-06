import type { AttributeBool } from "../base-html-tag-props";

export interface ButtonTagProps {
  autofocus?: AttributeBool;
  disabled?: string;
  form?: string;
  formaction?: string;
  formenctype?: string;
  formmethod?: string;
  formnovalidate?: string;
  formtarget?: string;
  name?: string;
  type?: "button" | "reset" | "submit";
  value?: string;
}
