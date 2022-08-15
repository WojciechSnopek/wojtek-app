import { Controller } from "react-hook-form";
import {TextField} from '@mui/material';
import { FormInputProps } from "./FormInputProps";

export const FormInputText = ({ name, control, label, type }: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          color='success'
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant="outlined"
          type={type}
        />
      )}
    />
  );
};