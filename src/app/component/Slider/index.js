import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return <div className={className} style={{ ...style, display: 'block', background: 'black' }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return <div className={className} style={{ ...style, display: 'block', background: 'black' }} onClick={onClick} />;
}

export default class ResponsiveSampleNextArrowSamplePrevArrow extends Component {
	render() {
		var settings = {
			className: 'center',
			centerMode: true,
			centerPadding: '20px',
			autoplay: true,
			autoplaySpeed: 2000,
			pauseOnHover: true,
			dots: true,
			infinite: true,
			speed: 800,
			slidesToShow: 4,
			slidesToScroll: 1,
			initialSlide: 2,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
			responsive: [
				{
					breakpoint: 1280,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						infinite: true,
					},
				},
				{
					breakpoint: 1025,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						infinite: true,
						centerPadding: '100px',
						nextArrow: false,
						prevArrow: false,
					},
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						initialSlide: 2,
						centerPadding: '0px',
						nextArrow: false,
						prevArrow: false,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						nextArrow: false,
						prevArrow: false,
					},
				},
			],
		};
		return (
			<div>
				<Slider {...settings}>
					<div>
						{this?.props?.item1}
						{this?.props?.btn1}
					</div>
					<div>
						{this?.props?.item2}
						{this?.props?.btn2}
					</div>
					<div>
						{this?.props?.item3}
						{this?.props?.btn3}
					</div>
					<div>
						{this?.props?.item4}
						{this?.props?.btn4}
					</div>
					<div>
						{this?.props?.item5}
						{this?.props?.btn5}
					</div>
					<div>
						{this?.props?.item6}
						{this?.props?.btn6}
					</div>
				</Slider>
			</div>
		);
	}
}
