import { EcommerceTemplate } from '@/templates/EcommerceTemplate'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <EcommerceTemplate 
      showCart={true}
      headerClassName="bg-carnales-black"
    >
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-carnales-red via-carnales-orange to-carnales-yellow overflow-hidden">
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
            Our Story
          </h1>
          <p className="text-white text-xl md:text-2xl font-bold drop-shadow-lg">
            From the streets of Mexico to your hands 🇲🇽
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-bungee text-4xl text-carnales-black mb-6">
              Born from Passion, Built on Flavor
            </h2>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Los Carnales started with a simple idea: bring the authentic, bold flavors of Mexican street snacks to the United States. No watered-down versions. No compromises. Just pure, unapologetic Mexican flavor.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Growing up in Mexico, we were surrounded by incredible snacks—chicharrones from corner stores, spicy chips from street vendors, and seasonings that made everything taste better. When we moved to the U.S., we missed that authentic taste. So we decided to create it ourselves.
            </p>

            <div className="bg-gradient-to-br from-carnales-yellow/20 to-carnales-orange/20 p-8 rounded-lg my-8">
              <h3 className="font-bold text-2xl text-carnales-black mb-4">
                Our Mission 🎯
              </h3>
              <p className="text-gray-700 text-lg">
                To share the authentic flavors of Mexico with the world, one crunchy, spicy, delicious bite at a time. We're not just selling snacks—we're sharing our culture, our heritage, and our love for bold flavors.
              </p>
            </div>

            <h3 className="font-bungee text-3xl text-carnales-black mb-4 mt-12">
              What Makes Us Different
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-white border-4 border-carnales-red p-6 rounded-lg">
                <h4 className="font-bold text-xl text-carnales-black mb-3">🌶️ Real Ingredients</h4>
                <p className="text-gray-700">
                  We use authentic Mexican spices and ingredients. No artificial flavors trying to mimic the real thing.
                </p>
              </div>

              <div className="bg-white border-4 border-carnales-orange p-6 rounded-lg">
                <h4 className="font-bold text-xl text-carnales-black mb-3">👨‍🍳 Traditional Recipes</h4>
                <p className="text-gray-700">
                  Our recipes come from generations of Mexican snack-making tradition, perfected over time.
                </p>
              </div>

              <div className="bg-white border-4 border-carnales-yellow p-6 rounded-lg">
                <h4 className="font-bold text-xl text-carnales-black mb-3">🔥 Bold Flavors</h4>
                <p className="text-gray-700">
                  We don't hold back. Our snacks are intense, flavorful, and unapologetically spicy.
                </p>
              </div>

              <div className="bg-white border-4 border-carnales-purple p-6 rounded-lg">
                <h4 className="font-bold text-xl text-carnales-black mb-3">💯 Quality First</h4>
                <p className="text-gray-700">
                  Every batch is made with care and tested to ensure it meets our high standards.
                </p>
              </div>
            </div>

            <h3 className="font-bungee text-3xl text-carnales-black mb-4 mt-12">
              Join the Carnales Family
            </h3>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              When you buy Los Carnales, you're not just getting a snack—you're joining a community of people who appreciate authentic flavor, bold choices, and Mexican culture. You're becoming part of the familia.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Whether you're Mexican, Mexican-American, or just someone who loves great snacks, we welcome you. Share our products with your carnales, your family, your friends. Spread the flavor. Spread the love.
            </p>

            <div className="text-center mt-12">
              <Link to="/">
                <Button 
                  size="lg"
                  className="bg-carnales-red hover:bg-carnales-red/90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-xl hover-lift"
                >
                  Shop Our Products 🛒
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-carnales-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-bungee text-4xl md:text-5xl text-center mb-12">
            Our Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🤝</div>
              <h3 className="font-bold text-2xl mb-3">Authenticity</h3>
              <p className="text-gray-300">
                We stay true to our Mexican roots in everything we do. No shortcuts, no fake flavors.
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-4">❤️</div>
              <h3 className="font-bold text-2xl mb-3">Passion</h3>
              <p className="text-gray-300">
                We love what we do. Every product is made with care, dedication, and pride.
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-4">🌟</div>
              <h3 className="font-bold text-2xl mb-3">Innovation</h3>
              <p className="text-gray-300">
                We respect tradition but aren't afraid to innovate and create new flavor experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </EcommerceTemplate>
  )
}

export default About