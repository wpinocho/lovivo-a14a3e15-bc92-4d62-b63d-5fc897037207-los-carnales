import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { HeadlessProductCard } from "@/components/headless/HeadlessProductCard"
import type { Product } from "@/lib/supabase"

interface ProductCardUIProps {
  product: Product
}

export const ProductCardUI = ({ product }: ProductCardUIProps) => {
  return (
    <HeadlessProductCard product={product}>
      {(logic) => (
        <Card className="bg-white border-4 border-carnales-black shadow-carnales overflow-hidden group">
          <CardContent className="p-0">
            <Link to={`/products/${logic.product.slug}`} className="block">
              <div className="aspect-square bg-gradient-to-br from-carnales-yellow/20 to-carnales-orange/20 overflow-hidden relative">
                {(logic.matchingVariant?.image || (logic.product.images && logic.product.images.length > 0)) ? (
                  <img
                    src={(logic.matchingVariant?.image as any) || logic.product.images![0]}
                    alt={logic.product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    No image
                  </div>
                )}

                {/* Badges */}
                <div className="absolute top-2 left-2 flex flex-col gap-1">
                  {logic.discountPercentage && (
                    <span className="bg-carnales-red text-white text-xs px-2 py-1 rounded font-bold shadow-lg">
                      -{logic.discountPercentage}% OFF
                    </span>
                  )}
                  {logic.product.featured && (
                    <span className="bg-carnales-orange text-white text-xs px-2 py-1 rounded font-bold shadow-lg">
                      🔥 HOT
                    </span>
                  )}
                  {!logic.inStock && (
                    <span className="bg-carnales-black text-white text-xs px-2 py-1 rounded font-bold shadow-lg">
                      SOLD OUT
                    </span>
                  )}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-carnales-black/0 group-hover:bg-carnales-black/10 transition-all duration-300" />
              </div>
            </Link>

            <div className="p-4">
              <Link to={`/products/${logic.product.slug}`}>
                <h3 className="font-bold text-carnales-black text-base mb-1 line-clamp-2 hover:text-carnales-red transition-colors">
                  {logic.product.title}
                </h3>
                {logic.product.description && (
                  <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                    {logic.product.description.replace(/<[^>]*>/g, '')}
                  </p>
                )}
              </Link>

              {logic.hasVariants && logic.options && (
                <div className="mb-3 space-y-2">
                  {logic.options.map((opt) => (
                    <div key={opt.id}>
                      <div className="text-xs font-bold text-carnales-black mb-1">{opt.name}</div>
                      <div className="flex flex-wrap gap-2">
                        {opt.values.filter(val => logic.isOptionValueAvailable(opt.name, val)).map((val) => {
                          const isSelected = logic.selected[opt.name] === val
                          const swatch = opt.name.toLowerCase() === 'color' ? opt.swatches?.[val] : undefined

                          if (swatch) {
                            return (
                              <button
                                key={val}
                                type="button"
                                onClick={() => logic.handleOptionChange(opt.name, val)}
                                title={`${opt.name}: ${val}`}
                                className={`h-6 w-6 rounded-full border-2 ${
                                  isSelected ? 'border-carnales-black ring-2 ring-carnales-red' : 'border-gray-300'
                                } ${logic.selected[opt.name] && !isSelected ? 'opacity-40' : ''}`}
                                style={{ backgroundColor: swatch }}
                                aria-label={`${opt.name}: ${val}`}
                              />
                            )
                          }

                          return (
                            <button
                              key={val}
                              type="button"
                              onClick={() => logic.handleOptionChange(opt.name, val)}
                              className={`border-2 rounded px-2 py-1 text-xs font-bold transition-all ${
                                isSelected 
                                  ? 'border-carnales-black bg-carnales-red text-white' 
                                  : logic.selected[opt.name] && !isSelected
                                    ? 'border-gray-300 bg-white text-gray-700 opacity-40'
                                    : 'border-carnales-black bg-white text-carnales-black hover:bg-carnales-yellow'
                              }`}
                              aria-pressed={isSelected}
                              aria-label={`${opt.name}: ${val}`}
                              title={`${opt.name}: ${val}`}
                            >
                              {val}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-bungee text-carnales-black text-lg">
                    {logic.formatMoney(logic.currentPrice)}
                  </span>
                  {logic.currentCompareAt && logic.currentCompareAt > logic.currentPrice && (
                    <span className="text-gray-400 text-xs line-through">
                      {logic.formatMoney(logic.currentCompareAt)}
                    </span>
                  )}
                </div>
                <Button
                  size="sm"
                  onClick={() => {
                    logic.onAddToCartSuccess()
                    logic.handleAddToCart()
                  }}
                  disabled={!logic.canAddToCart}
                  className="bg-carnales-red hover:bg-carnales-red/90 text-white font-bold border-2 border-carnales-black disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  {logic.inStock ? 'Add 🛒' : 'Out of stock'}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </HeadlessProductCard>
  )
}