function MenuItem({ title, styles, url = '#' }) {
	return (
		<>
			<a href={url} className={`text-sm font-lato font-medium tracking-wide transition-all duration-200 hover:text-[#0F172A] ${styles}`}>
				{title}
			</a>
		</>
	);
}

export default MenuItem;
