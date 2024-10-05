import { Label } from "../ui/label";
import { Input } from "../ui/input";

interface InputFormProps {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
}

export default function InputForm({
  label,
  name,
  type,
  defaultValue,
  placeholder,
}: InputFormProps) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={name}>{label || name}</Label>
      <Input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required
      />
    </div>
  );
}
