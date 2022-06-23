import Logo from '../../Logo';
import MenuItem from '../../Menu';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

function Footer() {
	return (
		<footer className='bg-[#484543] lg:pt-20 lg:pb-10 py-10 text-gray-300'>
			<div className='container mx-auto lg:px-12 px-4'>
				<div className='flex justify-between  flex-wrap'>
					{/* footer logo */}
					<div className='w-6/12 md:w-3/12  lg:pr-10 md:pr-5'>
						<Logo styles='text-gray-200 lg:text-3xl text-2xl' />
						<p className='lg:text-[14px] text-[12px] lg:pr-4 pr-0 lg:pb-16 md:pb-5 md:pt-6 py-3 font-Poppins font-normal tracking-wide'>625 E Franklin Ave, Minneapolis, MN 55404, USA</p>
						<p className='text-[12px] lg:text-[14px] font-Poppins font-medium tracking-wide'>© 2021 Parabot. All rights reserved.</p>
					</div>
					{/* footer about us */}
					<div className=' w-6/12 md:w-3/12 lg:pl-20 md:pl-5 text-center md:text-left'>
						<h2 className='lg:text-lg text-md font-semibold'>About us</h2>
						<MenuItem title='Our story' styles='block pt-1 md:pt-3 md:text-md text-sm' />
						<MenuItem title='Designer' styles='block pt-1 md:pt-3 md:text-md text-sm' />
						<MenuItem title='Craftsmanship' styles='block pt-1 md:pt-3 md:text-md text-sm' />
						<MenuItem title='Sustainability' styles='block pt-1 md:pt-3 md:text-md text-sm' />
					</div>
					{/* footer support */}
					<div className='w-6/12 md:w-3/12 lg:pr-24 md:pr-5 md:pt-0 pt-6'>
						<h2 className='lg:text-lg text-md font-semibold'>Support</h2>
						<MenuItem title="FAQ's" styles='block pt-1 md:pt-3 md:text-md text-sm' />
						<MenuItem title='Shipping & Returns' styles='block pt-1 md:pt-3 md:text-md text-sm' />
						<MenuItem title='Care guide' styles='block pt-1 md:pt-3 md:text-md text-sm' />
						<MenuItem title='Warranty' styles='block pt-1 md:pt-3 md:text-md text-sm' />
					</div>
					{/* footer contact us */}
					<div className=' w-6/12 md:w-3/12 pt-5 md:pt-0 text-center md:text-left'>
						<h2 className='lg:text-lg text-md font-semibold'>Contact us</h2>
						<div className=' flex justify-center md:justify-start  space-x-3 md:space-x-5 items-center md:pt-5 pt-2  cursor-pointer'>
							<BsTelephone size={18} />
							<p>+2 666.272.2147</p>
						</div>
						<div className='flex justify-center md:justify-start  space-x-3 lg:space-x-5 items-center py-4 md:py-6 cursor-pointer'>
							<AiOutlineMail size={18} />
							<p>hello@parabotku.com</p>
						</div>
						{/* footer icon */}
						<div className='flex justify-center md:justify-start space-x-8  items-center cursor-pointer pt-2 md:pt-5'>
							<FaFacebookF size={22} />
							<BsInstagram size={22} />
							<BsTwitter size={22} />
						</div>
					</div>
				</div>
				<div className='flex justify-center items-center md:pt-12 pt-8 space-x-1'>
					<MenuItem title='Privacy Policy |' styles='lg:text-[15px] text-[13px]' />
					<MenuItem title=' Term Of Use |' styles='lg:text-[15px] text-[13px]' />
					<MenuItem title=' California Code' styles='lg:text-[15px] text-[13px]' />
				</div>
			</div>
		</footer>
	);
}

export default Footer;
