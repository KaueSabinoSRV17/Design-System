import * as RadixCheck from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

export interface CheckBoxProps {}

export function CheckBox({}: CheckBoxProps) {
    
    return (
        <RadixCheck.Root className='w-6 h-6 p-[2px] bg-grey-800 rounded'>
            <RadixCheck.Indicator asChild>
                <Check weight='bold' className='w-5 h-5 text-cyan-500' />
            </RadixCheck.Indicator>
        </RadixCheck.Root>
    )
}