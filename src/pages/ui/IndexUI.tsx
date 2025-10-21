import { ProductCard } from '@/components/ProductCard';
import { CollectionCard } from '@/components/CollectionCard';
import { FloatingCart } from '@/components/FloatingCart';
import { NewsletterSection } from '@/components/NewsletterSection';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import { HeroSection } from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    loading,
    loadingCollections,
    selectedCollectionId,
    filteredProducts,
    handleViewCollectionProducts,
    handleShowAllProducts,
  } = logic;

  return (
    <EcommerceTemplate 
      showCart={true}
      headerClassName="bg-carnales-black"
    >
      {/* Hero Section */}
      <HeroSection />

      {/* Collections Section */}
      {!loadingCollections && collections.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-bungee text-4xl md:text-5xl text-carnales-black mb-4">
                Our Collections
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our authentic Mexican snacks. Each one crafted with passion and packed with flavor.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {collections.map((collection) => (
                <div key={collection.id} className="hover-lift">
                  <CollectionCard 
                    collection={collection} 
                    onViewProducts={handleViewCollectionProducts} 
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Section */}
      <section className="py-16 bg-gradient-to-br from-carnales-yellow/10 via-carnales-orange/10 to-carnales-red/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-bungee text-4xl md:text-5xl text-carnales-black mb-2">
                {selectedCollectionId 
                  ? collections.find(c => c.id === selectedCollectionId)?.name || 'Products'
                  : 'Featured Products'
                }
              </h2>
              <p className="text-gray-600">
                {selectedCollectionId 
                  ? 'Handpicked favorites from this collection'
                  : 'Our most popular snacks that keep carnales coming back'
                }
              </p>
            </div>
            {selectedCollectionId && (
              <Button 
                onClick={handleShowAllProducts}
                className="bg-carnales-red hover:bg-carnales-red/90 text-white font-bold"
              >
                See All Products
              </Button>
            )}
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg h-96 animate-pulse shadow-lg"></div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="hover-lift">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow-lg">
              <p className="text-gray-600 text-lg">
                No products available in this collection yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Why Los Carnales Section */}
      <section className="py-16 bg-carnales-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-bungee text-4xl md:text-5xl mb-4">
              Why Los Carnales?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just another snack brand. We're a movement. A celebration of authentic Mexican flavor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white/5 rounded-lg hover-lift">
              <div className="text-5xl mb-4">🇲🇽</div>
              <h3 className="font-bold text-2xl mb-3">100% Authentic</h3>
              <p className="text-gray-300">
                Real Mexican recipes passed down through generations. No shortcuts, no compromises.
              </p>
            </div>

            <div className="text-center p-6 bg-white/5 rounded-lg hover-lift">
              <div className="text-5xl mb-4">🔥</div>
              <h3 className="font-bold text-2xl mb-3">Bold Flavors</h3>
              <p className="text-gray-300">
                We don't do bland. Every bite is an explosion of authentic Mexican spices and heat.
              </p>
            </div>

            <div className="text-center p-6 bg-white/5 rounded-lg hover-lift">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="font-bold text-2xl mb-3">Premium Quality</h3>
              <p className="text-gray-300">
                Only the finest ingredients make it into our bags. Quality you can taste, carnal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />

      <FloatingCart />
    </EcommerceTemplate>
  );
};