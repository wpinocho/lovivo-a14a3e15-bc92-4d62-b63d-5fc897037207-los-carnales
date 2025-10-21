import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { SettingsProvider } from "@/contexts/SettingsContext";
import { PixelProvider } from "@/contexts/PixelContext";
import { CartUIProvider } from "@/components/CartProvider";
import Index from "./pages/Index";
import About from "./pages/About";
import FindUs from "./pages/FindUs";
import Wholesale from "./pages/Wholesale";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <PixelProvider>
      <SettingsProvider>
        <CartProvider>
          <CartUIProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/find-us" element={<FindUs />} />
                  <Route path="/wholesale" element={<Wholesale />} />
                  <Route path="/products/:slug" element={<ProductDetail />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/order-confirmation" element={<OrderConfirmation />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                </Routes>
              </BrowserRouter>
            </TooltipProvider>
          </CartUIProvider>
        </CartProvider>
      </SettingsProvider>
    </PixelProvider>
  </QueryClientProvider>
);

export default App;