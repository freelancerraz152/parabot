import Button from '../../Button';
import Img from '../../Img';
import SecTitle from '../../Sec_Title';

function DiscoverSection() {
	return (
		<section className=' lg:py-32 pt-24 pb-10'>
			<div className='container mx-auto lg:px-12 px-4'>
				<div className='flex flex-col md:flex-row items-center md:items-start '> 
					{/* discover section image */}
					<div className='md:w-6/12 w-8/12 md:pt-14 pb-10 md:pb-0  '>
						<Img url='../../../../../img/img3.png' styles='md:w-11/12 lg:pl-4 pl-0 rounded-[5px]' />
					</div>
					{/* discover section content */}
					<div className='lg:w-5/12 md:w-6/12 lg:pl-6 md:pl-12 '>
						<SecTitle
							title='Discover the interior design of your dreams'
							content='From mixing and matching woods to understanding which coffee tables are best for different types of sectionals, styling a room is an art.'
							stylesH1='lg:text-4xl text-2xl  font-extrabold '
							stylesP='pb-8  '
						/>
						<Button title='Get inspired' styles='text-sm bg-[#211F1C] py-3 px-6 font-medium rounded-sm' />
						<div className='md:pt-16 pt-10 flex justify-center md:justify-end'>
							<Img url='../../../../../img/img4.png' styles='md:w-10/12  rounded-[5px]'/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default DiscoverSection;
