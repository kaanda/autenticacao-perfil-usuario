import { ComponentProps } from "react";

interface DynamicButtonProps extends ComponentProps<'button'> {
}


export default function DynamicButton({ ...props }: DynamicButtonProps) {
    return (
        <button {...props} />
    );
}