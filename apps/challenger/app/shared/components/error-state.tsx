import Image from 'next/image'

interface Props {
  title: string
  description?: string
}

export const ErrorState = ({ title, description }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 w-full">
      <Image src="/cheems-samurai.svg" alt={title} width={200} height={200} />
      <h4 className="font-semibold text-lg text-pretty text-center text-red-500">
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
