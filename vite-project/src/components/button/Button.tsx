import { ReactNode } from 'react'
import {Slot} from '@radix-ui/react-slot'

export interface ButtonProps {
    children: ReactNode,
    asChild?: boolean
}

export function Button({ children, asChild }: ButtonProps) {

    const Tag = asChild ? Slot : 'button'
    const className = `
        py-4 
        px-3 
        w-full
        rounded 
        transition-colors 
        hover:bg-cyan-400 
        focus:ring-2 ring-black
        bg-cyan-500 
        font-semibold 
        text-black 
        text-sm 
    ` // Classe grande demais! não suporto espaço horizontal demais. ao trabalhar comigo, opte por esta forma de de clarar os estilos Tailwind!

    return (
        <Tag className={className}>
            {children}
        </Tag>
    )
}