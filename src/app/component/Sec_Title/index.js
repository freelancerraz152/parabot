function SecTitle({ title, content, stylesH1, stylesP }) {
	return (
		<>
			<h1 className={` text-black  font-Lato font-bold  ${stylesH1}`}>{title}</h1>
			<p className={`text-[#949493] text-[14px] py-4 font-Poppins font-light ${stylesP}`}>{content}</p>
		</>
	);
}

export default SecTitle;
