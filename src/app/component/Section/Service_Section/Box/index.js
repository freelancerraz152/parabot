
function Box({ icon, title, content }) {
  return (
    <div className=' md:w-4/12  w-full flex flex-col justify-center lg:flex-row lg:justify-between  items-center space-x-6 pb-8 md:pb-0 '>
			{/* service box icon */}
			<div className='text-gray-700 bg-[#FDFCFA] p-3 rounded-full cursor-pointer'>
				{icon}
			</div>
			{/* service box content */}
			<div>
				<h1 className='text-md text-slate-700 text-center lg:text-left font-Lato font-extrabold tracking-wider'>{title}</h1>
				<p className='text-[#949493] text-[13px] text-center lg:text-left font-Poppins font-light xl:pr-[35px]  lg:pr-5 pt-2 leading-5'>{content}</p>
			</div>
		</div>
  )
}

export default Box