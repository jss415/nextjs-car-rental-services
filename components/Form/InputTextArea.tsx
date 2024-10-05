import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface InputTextAreaProps {
  name: string;
  labelText?: string;
  defaultValue?: string;
}

const otherDefaultValue = "Please enter the description of the car";

export default function InputTextArea({
  name,
  labelText,
  defaultValue,
}: InputTextAreaProps) {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {labelText || name}
      </Label>
      <Textarea
        id={name}
        name={name}
        defaultValue={defaultValue || otherDefaultValue}
        rows={5}
        required
        className="leading-loose"
      />
    </div>
  );
}
