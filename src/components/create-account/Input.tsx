import { TextField } from '@radix-ui/themes'

export default function Input({
  placeholder,
  handleChange,
  required,
  type,
}: {
  placeholder: string
  handleChange: React.Dispatch<React.SetStateAction<string>>
  required?: boolean
  type?: string
}) {
  return (
    <TextField.Input
      placeholder={placeholder}
      size={'3'}
      radius="small"
      className="py-4 text-lg"
      onChange={(e) => handleChange(e.target.value)}
      required={required}
      type={type}
    />
  )
}
