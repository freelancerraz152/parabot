import CoffeeSection from './app/component/Section/Coffee_Section';
import DiscoverSection from './app/component/Section/Discover_Section';
import Footer from './app/component/Section/Footer';
import Header from './app/component/Section/Header';
import JoinSection from './app/component/Section/Join_Section';
import ServiceSection from './app/component/Section/Service_Section';
import ShelvingSection from './app/component/Section/Shelving_Section';
import ShopSection from './app/component/Section/Shop_Section';
import TestomonialSection from './app/component/Section/Testomonial_Section';

function App() {
	return (
		<div>
			<Header />
			<ServiceSection />
			<CoffeeSection />
			<ShelvingSection />
			<ShopSection />
			<DiscoverSection />
			<TestomonialSection />
			<JoinSection/>
			<Footer/>
		</div>
	);
}

export default App;
