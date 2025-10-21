import { EcommerceTemplate } from '@/templates/EcommerceTemplate'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'
import { Package, TrendingUp, Handshake, Award } from 'lucide-react'

const Wholesale = () => {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    businessType: '',
    location: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "¡Gracias, carnal!",
        description: "We'll get back to you within 24 hours.",
      })
      setFormData({
        businessName: '',
        contactName: '',
        email: '',
        phone: '',
        businessType: '',
        location: '',
        message: ''
      })
      setIsSubmitting(false)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <EcommerceTemplate 
      showCart={true}
      headerClassName="bg-carnales-black"
    >
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-carnales-purple via-carnales-red to-carnales-orange overflow-hidden">
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
            Wholesale
          </h1>
          <p className="text-white text-xl md:text-2xl font-bold drop-shadow-lg">
            Partner with Los Carnales and bring authentic flavor to your customers 🤝
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-bungee text-4xl text-carnales-black mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join hundreds of retailers across the U.S. who trust Los Carnales to deliver quality and flavor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover-lift border-2 border-carnales-red">
              <CardContent className="p-6 text-center">
                <Package className="w-12 h-12 mx-auto mb-4 text-carnales-red" />
                <h3 className="font-bold text-xl text-carnales-black mb-2">
                  Competitive Pricing
                </h3>
                <p className="text-gray-600">
                  Attractive wholesale rates with volume discounts for larger orders.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift border-2 border-carnales-orange">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-12 h-12 mx-auto mb-4 text-carnales-orange" />
                <h3 className="font-bold text-xl text-carnales-black mb-2">
                  High Demand
                </h3>
                <p className="text-gray-600">
                  Our products fly off shelves. Customers actively seek us out.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift border-2 border-carnales-yellow">
              <CardContent className="p-6 text-center">
                <Handshake className="w-12 h-12 mx-auto mb-4 text-carnales-yellow" />
                <h3 className="font-bold text-xl text-carnales-black mb-2">
                  Marketing Support
                </h3>
                <p className="text-gray-600">
                  POS materials, social media assets, and promotional support included.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift border-2 border-carnales-purple">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 mx-auto mb-4 text-carnales-purple" />
                <h3 className="font-bold text-xl text-carnales-black mb-2">
                  Quality Guarantee
                </h3>
                <p className="text-gray-600">
                  Premium products with consistent quality. Your customers will love them.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gradient-to-br from-carnales-yellow/10 to-carnales-orange/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-bungee text-4xl text-carnales-black mb-4">
              Get Started Today
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and our wholesale team will contact you within 24 hours.
            </p>
          </div>

          <Card className="border-4 border-carnales-red shadow-carnales">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="businessName" className="text-carnales-black font-bold">
                      Business Name *
                    </Label>
                    <Input
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      required
                      className="mt-2"
                      placeholder="Your Store Name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="contactName" className="text-carnales-black font-bold">
                      Contact Name *
                    </Label>
                    <Input
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      required
                      className="mt-2"
                      placeholder="Your Name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="text-carnales-black font-bold">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-carnales-black font-bold">
                      Phone *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="mt-2"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="businessType" className="text-carnales-black font-bold">
                      Business Type *
                    </Label>
                    <Input
                      id="businessType"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      required
                      className="mt-2"
                      placeholder="e.g., Grocery Store, Restaurant"
                    />
                  </div>

                  <div>
                    <Label htmlFor="location" className="text-carnales-black font-bold">
                      Location *
                    </Label>
                    <Input
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      className="mt-2"
                      placeholder="City, State"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-carnales-black font-bold">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2"
                    rows={5}
                    placeholder="Tell us about your business and what products you're interested in..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-carnales-red hover:bg-carnales-red/90 text-white font-bold text-lg py-6 rounded-full shadow-xl hover-lift"
                >
                  {isSubmitting ? 'Sending...' : 'Submit Inquiry 📧'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-carnales-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-bungee text-4xl text-center mb-12">
            Common Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white/5 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">What's the minimum order quantity?</h3>
              <p className="text-gray-300">
                Our minimum order is 50 units (mixed products allowed). We offer better pricing for larger orders.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Do you offer exclusive territory rights?</h3>
              <p className="text-gray-300">
                Yes! For qualified partners, we can discuss exclusive distribution rights in specific areas.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">What's the typical delivery time?</h3>
              <p className="text-gray-300">
                Standard delivery is 5-7 business days. Expedited shipping available for urgent orders.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Do you provide marketing materials?</h3>
              <p className="text-gray-300">
                Absolutely! We provide POS displays, posters, social media graphics, and product samples.
              </p>
            </div>
          </div>
        </div>
      </section>
    </EcommerceTemplate>
  )
}

export default Wholesale