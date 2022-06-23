import Button from '../../Button';
import Img from '../../Img';
import SecTitle from '../../Sec_Title';

function CoffeeSection() {
	return (
		<section className='bg-[#FBFAF8] py-12'>
			<div className='container mx-auto lg:px-12 px-4'>
				<div className='flex flex-col md:flex-row items-center  '>
					{/* coffee section image */}
					<div className='md:w-6/12  md:pt-6 '>
						<Img
							url='https://images.unsplash.com/photo-1526134679303-e64bf84c176e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnVybml0dXJlJTIwdGFiZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
							styles='lg:w-9/12 md:w-11/12 lg:pl-14 pl-0'
						/>
					</div>
					{/* coffee section content */}
					<div className='md:w-6/12 md:pl-10 pt-12 '>
						<SecTitle
							title='The Coffee Table'
							content='The perfect companion for your sofa. Sturdy, powder coated steel legs attach in seconds to a surface sized to fit everything you need close at hand. High-grade plywood is finished with timeless birch or FSC certified walnut veneer. Available in oval or round.'
							stylesH1='lg:text-3xl text-2xl font-extrabold'
							stylesP='xl:pr-44 lg:pr-10 md:pr-0 pr-10 pb-8'
						/>
						<Button title='Shop Now' styles='bg-[#211F1C] py-3 px-6 font-medium rounded-sm' />
					</div>
				</div>
			</div>
		</section>
	);
}

export default CoffeeSection;
