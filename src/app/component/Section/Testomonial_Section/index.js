import ResponsiveSampleNextArrowSamplePrevArrow from '../../Slider';
import TestiBox from './Testi_Box';

function TestomonialSection() {
	return (
		<section className='bg-[#FBFAF8] md:py-16 py-10'>
			<div className='container mx-auto lg:px-12'>
				{/* testomonial title */}
				<h1 className='lg:text-4xl text-2xl text-black font-Lato font-extrabold 
				md:pb-14 pb-10'>Words from our customers</h1>
				{/* testomonial slider */}
				<div>
					<ResponsiveSampleNextArrowSamplePrevArrow
						item1={
							<TestiBox
								icon='😃'
								content='"Great experience overall. Easy to order, smooth delivery, responsive customer service and high quality furniture "'
								img='https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGdpcmwlMjBzbWlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
								name='Nessi'
								title='Brooklyn, NY'
							/>
						}
						item2={
							<TestiBox
								icon='😘'
								content='"Very intentional, thoughtful.Easy to order, smooth delivery, responsive customer service and high quality furniture "'
								img='https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
								name='David '
								title='Los Angeles, CA'
							/>
						}
						
						item3={
							<TestiBox
								icon='❤️'
								content='"Watching TV would not be the same without my Noord sofa! Watching TV would not be the same without my Noord sofa!"'
								img='https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
								name='Jenny '
								title='New York, NY'
							/>
						}
						item4={
							<TestiBox
								icon='😃'
								content='"Great experience overall. Easy to order, smooth delivery, responsive customer service and high quality furniture "'
								img='https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGdpcmwlMjBzbWlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
								name='Nessi'
								title='Brooklyn, NY'
							/>
						}
						item5={
							<TestiBox
								icon='😘'
								content='"Great experience overall. Easy to order, smooth delivery, responsive customer service and high quality furniture "'
								img='https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
								name='David '
								title='Los Angeles, CA'
							/>
						}
						
						item6={
							<TestiBox
								icon='❤️'
								content='"Watching TV would not be the same without my Noord sofa! Watching TV would not be the same without my Noord sofa!"'
								img='https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
								name='Jenny '
								title='New York, NY'
							/>
						}
						
					/>
				</div>
			</div>
		</section>
	);
}

export default TestomonialSection;
