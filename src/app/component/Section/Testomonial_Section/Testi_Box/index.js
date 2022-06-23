function TestiBox({ icon, content, img, name, title }) {
	return (
		<div className=" pr-6 pb-5 ">
			<div className=' text-[#949493] bg-transparent py-10 px-5 border-[1px] border[#00000047]  rounded-md cursor-pointer shadow-sm transition-all duration-200  hover:bg-white hover:text-black flex flex-col justify-center items-center lg:block '>
			{/* testi box icon */}
			<span className='bg-[#e9a8153b] text-xl  text-center p-2 rounded-full'>{icon}</span>
			{/* testi box content */}
			<p className='text-[13px] text-center lg:text-left py-8 font-Poppins font-light'>{content}</p>
			<div className="flex space-x-8 items-center">
				{/* testi box img */}
				<img src={img} className='object-cover w-12 h-12 rounded-full' alt='' />
				{/* testi box title or  name */}
				<div>
					<h1 className='text-black text-lg font-Lato font-semibold '>{name}</h1>
					<p className='text-[15px]  font-Poppins font-light'>{title}</p>
				</div>
			</div>
		</div>
		</div>
	);
}

export default TestiBox;
