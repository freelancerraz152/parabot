function Button({ title, styles, url = '#' }) {
	return (
		<a href={url} className={`text-gray-100 text-xs font-Montserrat hover:bg-slate-900 transition-all duration-200 ${styles}`}>
			{title}
		</a>
	);
}

export default Button;
