import { ResizableHandle, cn } from '@repo/ui'

interface Props {
  horizontal?: boolean
}

export const CustomResizableHandle = ({ horizontal }: Props) => (
  <ResizableHandle
    withHandle={false}
    className={cn('w-5 bg-transparent group', {
      '!h-5 border border-x-0 border-y-border': horizontal,
    })}
  >
    <div
      className={cn(
        'transition-all ease-in bg-gray-600 group-hover:bg-primary rounded-md ',
        {
          '!w-2/3 !h-1 !rotate-180': horizontal,
          'h-1/4 w-1': !horizontal,
        },
      )}
    />
  </ResizableHandle>
)
