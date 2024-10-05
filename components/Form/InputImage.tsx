import { Input } from "../ui/input";

export default function InputImage() {
  return (
    <Input
      id="image"
      name="image"
      type="file"
      required
      accept="image/*"
      className="max-w-xs mb-4"
    />
  );
}
