import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { type Collection } from '@/lib/supabase'

interface CollectionCardProps {
  collection: Collection
  onViewProducts: (collectionId: string) => void
}

export const CollectionCard = ({ collection, onViewProducts }: CollectionCardProps) => {
  return (
    <Card className="bg-white border-4 border-carnales-black overflow-hidden shadow-carnales">
      <CardContent className="p-0">
        <div className="aspect-[4/3] bg-gradient-to-br from-carnales-yellow/20 to-carnales-orange/20 overflow-hidden relative group">
          {collection.image ? (
            <img 
              src={collection.image} 
              alt={collection.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
              No image
            </div>
          )}
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-carnales-black/0 group-hover:bg-carnales-black/20 transition-all duration-300" />
        </div>
        
        <div className="p-4 bg-white">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-bungee text-carnales-black text-lg line-clamp-1">
              {collection.name}
            </h3>
            {collection.featured && (
              <span className="bg-carnales-red text-white text-xs px-2 py-1 rounded font-bold">
                HOT 🔥
              </span>
            )}
          </div>
          
          {collection.description && (
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
              {collection.description}
            </p>
          )}
          
          <Button 
            className="w-full bg-carnales-red hover:bg-carnales-red/90 text-white font-bold border-2 border-carnales-black shadow-lg"
            onClick={() => onViewProducts(collection.id)}
          >
            View Products →
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}