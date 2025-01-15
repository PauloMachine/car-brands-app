import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from "react-native";

export type TInput = {
  label: string;
  placeholder: string;
  value?: string | undefined;
  onBlur?:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
  onChange?: ((text: string) => void) | undefined;
  error: string | undefined;
  keyboardType?: KeyboardTypeOptions | undefined;
};
