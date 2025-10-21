import { ReactNode } from 'react'
import { PageTemplate } from './PageTemplate'
import { SocialLinks } from '@/components/SocialLinks'
import { FloatingCart } from '@/components/FloatingCart'
import { ProfileMenu } from '@/components/ProfileMenu'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import { useCartUI } from '@/components/CartProvider'
import { useCart } from '@/contexts/CartContext'

interface EcommerceTemplateProps {
  children: ReactNode
  pageTitle?: string
  showCart?: boolean
  className?: string
  headerClassName?: string
  footerClassName?: string
  layout?: 'default' | 'full-width' | 'centered'
}

export const EcommerceTemplate = ({
  children,
  pageTitle,
  showCart = true,
  className,
  headerClassName,
  footerClassName,
  layout = 'default'
}: EcommerceTemplateProps) => {
  const { openCart } = useCartUI()
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  const header = (
    <div className={`py-4 ${headerClassName || 'bg-carnales-black'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <span className="font-bungee text-2xl md:text-3xl text-white">
                LOS CARNALES
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <Link 
                to="/" 
                className="text-white/90 hover:text-white transition-colors font-bold"
              >
                Shop
              </Link>
              <Link 
                to="/about" 
                className="text-white/90 hover:text-white transition-colors font-bold"
              >
                About
              </Link>
              <Link 
                to="/find-us" 
                className="text-white/90 hover:text-white transition-colors font-bold"
              >
                Find Us
              </Link>
              <Link 
                to="/wholesale" 
                className="text-white/90 hover:text-white transition-colors font-bold"
              >
                Wholesale
              </Link>
              <Link 
                to="/blog" 
                className="text-white/90 hover:text-white transition-colors font-bold"
              >
                Blog
              </Link>
            </nav>
          </div>

          {/* Profile & Cart */}
          <div className="flex items-center space-x-2">
            <ProfileMenu />
            
            {showCart && (
              <Button
                variant="ghost"
                size="icon"
                onClick={openCart}
                className="relative text-white hover:bg-white/10"
                aria-label="Ver carrito"
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-carnales-red text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </Button>
            )}
          </div>
        </div>

        {/* Page Title */}
        {pageTitle && (
          <div className="mt-6">
            <h1 className="font-bungee text-3xl text-white">
              {pageTitle}
            </h1>
          </div>
        )}
      </div>
    </div>
  )

  const footer = (
    <div className={`bg-carnales-black text-white py-12 ${footerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-bungee text-2xl mb-4">LOS CARNALES</h3>
            <p className="text-white/70">
              Authentic Mexican flavor meets badass modern design.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-bold mb-4 text-white">Shop</h4>
            <div className="space-y-2">
              <Link 
                to="/" 
                className="block text-white/70 hover:text-white transition-colors"
              >
                All Products
              </Link>
              <Link 
                to="/" 
                className="block text-white/70 hover:text-white transition-colors"
              >
                Best Sellers
              </Link>
              <Link 
                to="/" 
                className="block text-white/70 hover:text-white transition-colors"
              >
                New Arrivals
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4 text-white">Company</h4>
            <div className="space-y-2">
              <Link 
                to="/about" 
                className="block text-white/70 hover:text-white transition-colors"
              >
                About Us
              </Link>
              <Link 
                to="/find-us" 
                className="block text-white/70 hover:text-white transition-colors"
              >
                Find Us
              </Link>
              <Link 
                to="/wholesale" 
                className="block text-white/70 hover:text-white transition-colors"
              >
                Wholesale
              </Link>
              <Link 
                to="/blog" 
                className="block text-white/70 hover:text-white transition-colors"
              >
                Blog
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold mb-4 text-white">Follow Us</h4>
            <SocialLinks />
            <p className="text-white/70 text-sm mt-4">
              Tag us @loscarnales for a chance to be featured!
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/70">
          <p>&copy; 2024 Los Carnales. All rights reserved. Made with 🔥 in Mexico.</p>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <PageTemplate 
        header={header}
        footer={footer}
        className={className}
        layout={layout}
      >
        {children}
      </PageTemplate>
      
      {showCart && <FloatingCart />}
    </>
  )
}