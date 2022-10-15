import { clsx } from 'clsx'
import { ReactNode } from 'react'
import {Slot} from '@radix-ui/react-slot'

export interface HeadingProps {
    size?: 'sm' | 'md' | 'lg',
    children: ReactNode,
    asChild?: boolean
}

export function Heading({ size = 'md', children, asChild }: HeadingProps) {

    const Tag = asChild ? Slot : 'h2'

    return (
        <Tag 
            className={
                clsx('text-grey-100 font-bold', 
                { // Classes condicionais, de acordo com o valor da Prop 'size'.
                    'text-lg': size === 'sm',
                    'text-xl': size === 'md', 
                    'text-2xl': size === 'lg'
                }
            )}
        >
            {children}
        </Tag>
    )
}