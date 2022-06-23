function Img({ url, styles, handelClick }) {
	return <img src={url} alt='' className={`rounded-sm cursor-pointer ${styles}`} onClick={handelClick} />;
}

export default Img;
