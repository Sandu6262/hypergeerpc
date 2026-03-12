'use client'

import { cn } from '@/lib/utils'

interface MenuToggleIconProps {
  open: boolean
  className?: string
}

export function MenuToggleIcon({ open, className }: MenuToggleIconProps) {
  return (
    <div className={cn('flex flex-col justify-center items-center w-6 h-6 gap-1.5', className)}>
      <span
        className={cn(
          'block h-0.5 w-full bg-current transition-all duration-300 origin-center',
          open && 'translate-y-2 rotate-45'
        )}
      />
      <span
        className={cn(
          'block h-0.5 w-full bg-current transition-all duration-300',
          open && 'opacity-0 scale-x-0'
        )}
      />
      <span
        className={cn(
          'block h-0.5 w-full bg-current transition-all duration-300 origin-center',
          open && '-translate-y-2 -rotate-45'
        )}
      />
    </div>
  )
}
