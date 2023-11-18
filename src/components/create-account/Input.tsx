import { TextField } from "@radix-ui/themes";

export default function Input({ placeholder, handleChange }: { placeholder: string; handleChange: React.Dispatch<React.SetStateAction<string>> }) {
	return (
		<TextField.Input placeholder={placeholder} size={'3'} radius="small" className="py-6 text-xl" onChange={(e) => handleChange(e.target.value)} />
	)
}