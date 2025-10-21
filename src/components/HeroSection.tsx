import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { AnimatedProduct } from '@/components/AnimatedProduct'

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-carnales-red via-carnales-orange to-carnales-yellow">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Floating products */}
      <AnimatedProduct 
        src="https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=200&h=200&fit=crop"
        className="absolute top-20 left-10 w-24 h-24 md:w-32 md:h-32"
        delay={0}
      />
      <AnimatedProduct 
        src="https://images.unsplash.com/photo-1613919113640-25732ec5e61f?w=200&h=200&fit=crop"
        className="absolute top-40 right-20 w-20 h-20 md:w-28 md:h-28"
        delay={0.5}
      />
      <AnimatedProduct 
        src="https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=200&h=200&fit=crop"
        className="absolute bottom-32 left-20 w-28 h-28 md:w-36 md:h-36"
        delay={1}
      />
      <AnimatedProduct 
        src="https://images.unsplash.com/photo-1582169296194-e4d644c48063?w=200&h=200&fit=crop"
        className="absolute bottom-20 right-10 w-24 h-24 md:w-32 md:h-32"
        delay={1.5}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[90vh] flex items-center justify-center">
        <div className="text-center">
          {/* Logo/Brand */}
          <div className="mb-8 animate-float">
            <h1 className="font-bungee text-6xl md:text-8xl lg:text-9xl text-white drop-shadow-2xl mb-4">
              LOS CARNALES
            </h1>
            <div className="flex items-center justify-center gap-4 text-white text-xl md:text-2xl font-bold">
              <span className="animate-flame">🔥</span>
              <p className="font-montserrat uppercase tracking-wider">
                Authentic Mexican Flavor
              </p>
              <span className="animate-flame">🔥</span>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-white text-2xl md:text-3xl font-bold mb-8 drop-shadow-lg max-w-3xl mx-auto">
            Intense. Bold. Unapologetically Mexican.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/">
              <Button 
                size="lg" 
                className="bg-carnales-black hover:bg-carnales-black/90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-2xl hover-lift"
              >
                Shop Now 🛒
              </Button>
            </Link>
            <Link to="/about">
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white/90 hover:bg-white text-carnales-black font-bold text-lg px-8 py-6 rounded-full shadow-2xl hover-lift border-4 border-carnales-black"
              >
                Our Story 📖
              </Button>
            </Link>
          </div>

          {/* Social proof */}
          <div className="mt-12 flex items-center justify-center gap-8 text-white">
            <div className="text-center">
              <p className="text-3xl font-bold">10K+</p>
              <p className="text-sm uppercase tracking-wide">Happy Carnales</p>
            </div>
            <div className="h-12 w-px bg-white/30" />
            <div className="text-center">
              <p className="text-3xl font-bold">100%</p>
              <p className="text-sm uppercase tracking-wide">Authentic</p>
            </div>
            <div className="h-12 w-px bg-white/30" />
            <div className="text-center">
              <p className="text-3xl font-bold">🇲🇽</p>
              <p className="text-sm uppercase tracking-wide">Made in Mexico</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}