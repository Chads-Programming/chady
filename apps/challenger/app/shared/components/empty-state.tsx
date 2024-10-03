import Image from 'next/image'

interface Props {
  title: string
  description?: string
}

export const EmptyState = ({ title, description }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <Image src="/sad-cheems.svg" alt={title} width={200} height={200} />
      <h4 className="font-semibold text-lg text-pretty text-center text-amber-400">
        {title}
      </h4>
      {description && (
        <p className="font-medium text-sm text-center text-gray-500">
          {description}
        </p>
      )}
    </div>
  )
}
