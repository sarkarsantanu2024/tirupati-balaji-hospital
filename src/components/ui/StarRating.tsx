import { cn } from '@/lib/utils'

interface StarRatingProps {
  rating: number
  max?: number
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function StarRating({ rating, max = 5, className, size = 'md' }: StarRatingProps) {
  const sizeMap = { sm: 14, md: 18, lg: 24 }
  return (
    <div className={cn('flex items-center gap-0.5', className)}>
      {Array.from({ length: max }).map((_, i) => (
        <span
          key={i}
          className={cn('material-symbols-outlined', i < rating ? 'text-amber-400' : 'text-neutral-200')}
          style={{ fontSize: sizeMap[size], fontVariationSettings: "'FILL' 1" }}
        >
          star
        </span>
      ))}
    </div>
  )
}
