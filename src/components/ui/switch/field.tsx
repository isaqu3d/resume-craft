import { Controller, useFormContext } from "react-hook-form";

import { Switch } from "./index.tsx";

type SwitchFieldProps = {
  name: string;
  className?: string;
};

export function SwitchField({ name, ...props }: SwitchFieldProps) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Switch
          {...props}
          checked={field.value}
          onCheckedChange={field.onChange}
        />
      )}
    />
  );
}
