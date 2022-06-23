import Button from '../../Button';
import Img from '../../Img';
import SecTitle from '../../Sec_Title';

function ShelvingSection() {
	return (
		<section className='bg-[#FBFAF8] py-12 '>
			<div className='container mx-auto lg:px-12 px-4'>
				<div className='flex flex-col md:flex-row items-center'>
					{/* Shelving section content */}
					<div className='md:w-6/12 md:pt-10 '>
						<SecTitle
							title='The Shelving System'
							content={`Probably the world's most modular shelving system. When it comes to modularity, the limit does not exist. Start with one Shelf and add expansion units and add-ons to build a shelving system that works perfectly in your space - either now or in the future.
                            `}
							stylesH1='lg:text-3xl text-2xl font-extrabold'
							stylesP='xl:pr-52 lg:pr-20 pr-10 pb-8'
						/>
						<Button title='Shop Now' styles='bg-[#211F1C] py-3 px-6 font-medium rounded-sm' />
					</div>

					{/* Shelving section image */}
					<div className='md:w-6/12 lg:pt-12 md:pt-0 pt-10  '>
						<Img url='../../../../../img/img2.png' styles='md:w-9/12 md:pl-14' />
					</div>
				</div>
			</div>
		</section>
	);
}

export default ShelvingSection;
