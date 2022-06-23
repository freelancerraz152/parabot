import Box from './Box';
import { FaTruck } from 'react-icons/fa';
import { SiXbox } from 'react-icons/si';
import { GiWoodFrame } from 'react-icons/gi';

function ServiceSection() {
	return (
		<section className='bg-slate-100 py-10'>
			<div className='container mx-auto lg:px-12 px-4'>
				{/* service box */}
				<div className='flex  items-center flex-wrap'>
					<Box icon={<FaTruck size={29} />} title='Fast & Free Shipping' content='Every single order ships for free. No minimums, no tiers, no fine print whatsoever.' />
					<Box icon={<SiXbox size={30} />} title='Modular easy-to-move' content='Our innovative modular design is driven by the belief that furniture should fit this home whatsoever.' />
					<Box icon={<GiWoodFrame size={30} />} title='Durable, premium materials' content='We use material like sustain ablyforested wood, strengthened steel hardware, and top-grain.' />
				</div>
			</div>
		</section>
	);
}

export default ServiceSection;
