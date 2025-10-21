import { EcommerceTemplate } from '@/templates/EcommerceTemplate'
import { Card, CardContent } from '@/components/ui/card'
import { MapPin, Store, Phone, Clock } from 'lucide-react'

const FindUs = () => {
  const stores = [
    {
      name: "Los Carnales Flagship Store",
      address: "123 Mission Street, San Francisco, CA 94103",
      phone: "(415) 555-0123",
      hours: "Mon-Sat: 9AM-8PM, Sun: 10AM-6PM",
      type: "Flagship"
    },
    {
      name: "Carnicería El Mexicano",
      address: "456 Cesar Chavez St, Los Angeles, CA 90033",
      phone: "(213) 555-0456",
      hours: "Daily: 8AM-9PM",
      type: "Retailer"
    },
    {
      name: "La Bodega Latina",
      address: "789 Broadway, New York, NY 10003",
      phone: "(212) 555-0789",
      hours: "Mon-Sun: 7AM-10PM",
      type: "Retailer"
    },
    {
      name: "Mercado Mexicano",
      address: "321 W 26th St, Chicago, IL 60616",
      phone: "(312) 555-0321",
      hours: "Mon-Sat: 8AM-8PM, Sun: 9AM-7PM",
      type: "Retailer"
    },
    {
      name: "Tienda Los Amigos",
      address: "654 Westheimer Rd, Houston, TX 77006",
      phone: "(713) 555-0654",
      hours: "Daily: 9AM-9PM",
      type: "Retailer"
    },
    {
      name: "El Rincón Mexicano",
      address: "987 E Camelback Rd, Phoenix, AZ 85014",
      phone: "(602) 555-0987",
      hours: "Mon-Sat: 8AM-8PM, Sun: 10AM-6PM",
      type: "Retailer"
    }
  ]

  return (
    <EcommerceTemplate 
      showCart={true}
      headerClassName="bg-carnales-black"
    >
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-carnales-yellow via-carnales-orange to-carnales-red overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-bungee text-5xl md:text-7xl text-white mb-6 drop-shadow-2xl">
            Find Us
          </h1>
          <p className="text-white text-xl md:text-2xl font-bold drop-shadow-lg">
            Visit us in person and taste the difference 🗺️
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-bungee text-4xl text-carnales-black mb-4">
              Store Locations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find Los Carnales products at these locations across the United States. Can't find us near you? Order online!
            </p>
          </div>

          {/* Map placeholder */}
          <div className="bg-gradient-to-br from-carnales-yellow/20 to-carnales-orange/20 rounded-lg p-8 mb-12 text-center">
            <MapPin className="w-16 h-16 mx-auto mb-4 text-carnales-red" />
            <p className="text-gray-700 text-lg font-semibold">
              Interactive map coming soon! For now, check out our store list below.
            </p>
          </div>

          {/* Store List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stores.map((store, index) => (
              <Card key={index} className="hover-lift border-2 border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Store className="w-8 h-8 text-carnales-red flex-shrink-0" />
                    {store.type === 'Flagship' && (
                      <span className="bg-carnales-red text-white text-xs px-3 py-1 rounded-full font-bold">
                        FLAGSHIP
                      </span>
                    )}
                  </div>
                  
                  <h3 className="font-bold text-xl text-carnales-black mb-4">
                    {store.name}
                  </h3>
                  
                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-5 h-5 text-carnales-orange flex-shrink-0 mt-0.5" />
                      <p className="text-sm">{store.address}</p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-carnales-orange flex-shrink-0" />
                      <p className="text-sm">{store.phone}</p>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <Clock className="w-5 h-5 text-carnales-orange flex-shrink-0 mt-0.5" />
                      <p className="text-sm">{store.hours}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-carnales-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bungee text-4xl mb-6">
            Want to Carry Los Carnales?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Are you a retailer interested in stocking our products? We'd love to hear from you!
          </p>
          <a 
            href="/wholesale"
            className="inline-block bg-carnales-red hover:bg-carnales-red/90 text-white font-bold text-lg px-8 py-4 rounded-full shadow-xl hover-lift transition-all"
          >
            Become a Retailer →
          </a>
        </div>
      </section>
    </EcommerceTemplate>
  )
}

export default FindUs