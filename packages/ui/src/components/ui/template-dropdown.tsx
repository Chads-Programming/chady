import { CheckCircle2Icon, ChevronDown } from 'lucide-react'
import type React from 'react'
import { useMemo, useState } from 'react'

import { cn } from '@/lib/utils'

import { Button } from './button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from './command'
import { Popover, PopoverContent, PopoverTrigger } from './popover'

export interface DropdownItem<Data, Value = string | number> {
  value: Value
  label: string
  data: Data
}

interface Props<Data, Value = string | number> {
  title?: string
  items: DropdownItem<Data, Value>[]
  placeholder?: string
  searchLabel?: string
  value?: Value
  emptyState?: string
  onSelect: (item: DropdownItem<Data, Value>) => void
  children: (
    item: DropdownItem<Data, Value>,
    selected: boolean,
  ) => React.ReactNode
}

export const TemplateDropdown = <Data, Value extends string | number>({
  title,
  items,
  value,
  searchLabel,
  placeholder = 'Select an option',
  emptyState = 'No option found.',
  onSelect,
  children: renderItem,
}: Props<Data, Value>) => {
  const [currentValue, setSelectedValue] = useState<Value | undefined>(value)
  const [isOpen, setOpen] = useState(false)

  const valueContent = useMemo(() => {
    const option = items.find((item) => item.value === currentValue)

    if (!option) {
      return placeholder
    }

    return renderItem(option, true)
  }, [currentValue, items, placeholder, renderItem])

  return (
    <Popover open={isOpen} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={isOpen}
          className="w-[180px] justify-between"
        >
          {valueContent}
          {
            <ChevronDown
              className={cn(
                'ml-2 h-4 w-4 shrink-0 opacity-50 transition-all ease-in rotate-0',
                {
                  'rotate-180': isOpen,
                },
              )}
            />
          }
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[180px] p-0">
        <Command>
          {searchLabel && <CommandInput placeholder={searchLabel} />}
          <CommandEmpty>{emptyState}</CommandEmpty>
          {title && (
            <CommandGroup>
              <h3 className="text-sm text-primary/65 font-medium text-pretty mx-2 my-1">
                {title}
              </h3>
            </CommandGroup>
          )}

          <CommandList>
            <CommandGroup>
              {items.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.label}
                  className="cursor-pointer my-1"
                  onSelect={() => {
                    setSelectedValue(item.value)
                    setOpen(false)
                    onSelect(item)
                  }}
                >
                  <div className="inline-flex justify-start gap-2 w-full items-center">
                    {renderItem(item, currentValue === item.value)}
                    {currentValue === item.value && (
                      <CheckCircle2Icon className="w-5 h-5 text-primary/65" />
                    )}
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
