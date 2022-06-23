import { FaShoppingBag } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import { FcMenu } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import Button from '../../Button';
import SecTitle from '../../Sec_Title';
import MenuItem from '../../Menu';
import Logo from '../../Logo';
import Img from '../../Img';
import { useState } from 'react';

function Header() {
	// mobile menu
	const [showMenu, setShowMenu] = useState(false);
	const show = () => setShowMenu(!showMenu);

	// lightBox
	const [lightBox1, setLightBox1] = useState(false);
	const [lightBox2, setLightBox2] = useState(false);
	const [lightBox3, setLightBox3] = useState(false);
	const lightBoxFunction1 = () => setLightBox1(!lightBox1);
	const lightBoxFunction2 = () => setLightBox2(!lightBox2);
	const lightBoxFunction3 = () => setLightBox3(!lightBox3);

	return (
		<header className='bg-[#FDFCFA] pt-6 pb-14'>
			<div className='container mx-auto lg:px-12 px-4'>
				{/* navbar start */}
				<div className='flex justify-between items-center '>
					{/* logo */}
					<Logo styles='text-black text-lg' />
					{/* menu */}
					<div className='lg:block hidden'>
						<nav className='flex items-center space-x-24'>
							<MenuItem title='Home' styles='text-gray-600' />
							<MenuItem title='Products' styles='text-gray-600' />
							<MenuItem title='Collection' styles='text-gray-600' />
						</nav>
					</div>
					{/* navbar icon */}
					<div className='lg:block hidden'>
						<div className=' flex items-center space-x-8 text-gray-700 cursor-pointer '>
							<FaShoppingBag size={18} />
							<AiOutlineUser size={18} />
						</div>
					</div>
					{/* mobile menu icon */}
					<div className='lg:hidden block' onClick={show}>
						<FcMenu size={20} />
					</div>
				</div>
				{/* mobile menu */}
				<div className={`${showMenu ? 'block' : 'hidden'} text-gray-200  bg-gray-800 fixed left-0 top-0 z-40 w-4/12  h-screen `}>
					<nav className='flex flex-col space-y-4  p-8 h-full'>
						<MenuItem title='Home' styles='text-[15px] border-b-[1px] border-[#ffffff40] pb-2' />
						<MenuItem title='Products' styles='text-[15px] border-b-[1px] border-[#ffffff40] pb-2' />
						<MenuItem title='Collection' styles='text-[15px] border-b-[1px] border-[#ffffff40] pb-2' />
						<MenuItem title='Contact' styles='text-[15px] border-b-[1px] border-[#ffffff40] pb-2' />
						<MenuItem title='Privacy' styles='text-[15px] border-b-[1px] border-[#ffffff40] pb-2' />
						{/* mobile menu social icon */}
						<div className='flex justify-center space-x-8 items-center cursor-pointer pt-24'>
							<FaFacebookF size={20} />
							<BsTwitter size={20} />
							<BsInstagram size={20} />
							<BsLinkedin size={20} />
						</div>
					</nav>
				</div>
				{/* navbar end */}

				{/* hero section start */}
				<div className='flex flex-col md:flex-row mt-8 lg:h-[460px] md:h-[360px]  '>
					{/* hero content */}
					<div className='md:w-4/12 md:pt-16 md:pb-0 pb-10  '>
						<SecTitle
							title='Future of furniture'
							content='Find an elegant and luxurious interior designed by a professional interior designer.'
							stylesH1='md:text-[42px] lg:text-[52px]  text-[38px] leading-[54px]'
							stylesP='xl:pr-24 lg:pr-4 pr-2'
						/>
						{/* hero search */}
						<div className='flex items-center md:relative md:z-20'>
							<input
								type='text '
								placeholder='Search your product here...'
								className='text-xs text-gray-400  border border-gray-400 rounded-tl-xl rounded-bl-sm  p-[12px] pr-36 focus:outline-none focus:border-gray-300 '
							/>
							<Button title='Search' styles='bg-black font-semibold py-[13px] px-5 rounded-tr-sm rounded-br-xl' />
						</div>
					</div>
					{/* hero image */}
					<div className='md:w-8/12  md:relative'>
						<div className=' flex space-x-6 items-center  md:z-10 md:absolute xl:left-[-30px] w-full md:h-full h-[300px] shadow-2xl shadow-slate-100'>
							<Img
								url='https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
								styles={`${lightBox1 ? 'w-[50%]' : 'w-[35%]'} object-cover h-full transition-all duration-200`}
								handelClick={lightBoxFunction1}
							/>
							<Img
								url='https://images.unsplash.com/photo-1592106163564-ff2e75907459?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGZ1cm5pdHVyZSUyMGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
								styles={`${lightBox2 ? 'w-[50%]' : 'w-[25%]'} object-cover h-full transition-all duration-200`}
								handelClick={lightBoxFunction2}
							/>
							<Img
								url='https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGZ1cm5pdHVyZSUyMGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
								styles={`${lightBox3 ? 'w-[50%]' : 'w-[20%]'} object-cover h-full transition-all duration-200`}
								handelClick={lightBoxFunction3}
							/>
						</div>
					</div>
				</div>
				{/* hero section end */}
			</div>
		</header>
	);
}

export default Header;
