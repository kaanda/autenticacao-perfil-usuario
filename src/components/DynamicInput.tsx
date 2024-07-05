import { ComponentProps } from "react";

interface DynamicInputProps extends ComponentProps<'input'> {
}


export default function DynamicInput({ ...props }: DynamicInputProps) {
    return (
        <input {...props} />
    );
}