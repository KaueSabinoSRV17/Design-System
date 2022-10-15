import { InputHTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'

interface SlotProps {
    children: ReactNode
}

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputRootProps {
    children: ReactNode
}

export interface TextInputIconProps {
    children: ReactNode
}

function TextInputRoot({ children }: TextInputRootProps) {
    return (
        <div className='flex items-center gap-3 py-4 px-3 rounded bg-grey-800 focus-within:ring-2 ring-cyan-400'>
            {children}
        </div>
    )
}
TextInputRoot.displayName = 'TextInput.Root'

function TextInputIcon({ children }: TextInputIconProps) {
    return (
        <Slot className='w-6 h-6 text-grey-400'>
            {children}
        </Slot>
    )
}
TextInputIcon.displayName = 'TextInput.Icon' // StoryBook se confunde quando retornamos diretamente um Slot

function TextInputInput(props: TextInputInputProps) {

    return (
        <input className='bg-transparent flex-1 text-grey-100 text-xs placeholder:text-grey-400 outline-none' {...props}/>
    )
}
TextInputInput.displayName = 'TextInput.Input'


export const TextInput = {
    Root: TextInputRoot,
    Icon: TextInputIcon,
    Input: TextInputInput
}