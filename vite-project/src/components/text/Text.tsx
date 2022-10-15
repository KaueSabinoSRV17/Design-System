import { clsx } from 'clsx'
import { ReactNode } from 'react'
import {Slot} from '@radix-ui/react-slot'

export interface TextProps {
    size?: 'sm' | 'md' | 'lg',
    children: ReactNode,
    asChild?: boolean
}

export function Text({ size = 'md', children, asChild }: TextProps) {

    const Tag = asChild ? Slot : 'span'

    return (
        <Tag 
            className={
                clsx('text-grey-100', 
                { // Classes condicionais, de acordo com o valor da Prop 'size'.
                    'text-xs': size === 'sm',
                    'text-sm': size === 'md', 
                    'text-md': size === 'lg'
                }
            )}
        >
            {children}
        </Tag>
    )
}