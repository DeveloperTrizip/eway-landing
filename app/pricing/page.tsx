import Navbar from '../components/Navbar';
import Pricing from '../components/Price/Pricing';
import Footer from '../components/Footer';

export const metadata = {
    title: 'Pricing - Sharkship',
    description: 'Simple, Transparent & Built for Businesses of All Sizes',
};

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-[#fafbfc] flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow">
                <Pricing />
            </main>
            <Footer />
        </div>
    );
}
