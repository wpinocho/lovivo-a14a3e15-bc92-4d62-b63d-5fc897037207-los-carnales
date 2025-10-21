import { cn } from '@/lib/utils'

interface AnimatedProductProps {
  src: string
  className?: string
  delay?: number
}

export const AnimatedProduct = ({ src, className, delay = 0 }: AnimatedProductProps) => {
  return (
    <div 
      className={cn("animate-float-slow", className)}
      style={{
        animationDelay: `${delay}s`
      }}
    >
      <img 
        src={src} 
        alt="Product"
        className="w-full h-full object-contain drop-shadow-2xl transform hover:scale-110 transition-transform duration-300"
      />
    </div>
  )
}