import Button from '../../Button';
import SecTitle from '../../Sec_Title';
import Responsive from '../../Slider';
import Img from '../../Img';

function ShopSection() {
	return (
		<section className='lg:py-28 py-10 '>
			<div className='container mx-auto lg:px-12 px-4'>
				{/* shop section  content */}
				<div className='flex flex-col md:flex-row md:justify-between '>
					<SecTitle
						title='Shop by Product'
						content="We'are solving the biggest problems in furniture. You can easily search for what product you want"
						stylesH1='lg:text-3xl text-2xl lg:pl-5'
						stylesP='md:py-0 py-2  md:w-[320px]'
					/>
				</div>
				{/* shop section slider */}
				<div className=' md:pt-20 pt-5 lg:h-[400px] h-[300px]'>
					<Responsive
						// item1 btn1
						item1={
							<Img
								url='https://images.unsplash.com/photo-1573659532403-260959eed48f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZnVybml0dXJlJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
								styles='object-cover lg:h-[400px] h-[300px] w-full pr-6'
							/>
						}
						btn1={<Button title='Bar Stool'styles='bg-black w-28 py-2 px-4 flex justify-center rounded-sm -translate-y-[80px]  sm:translate-x-[70px]'  />}
						// item2 btn2
						item2={
							<Img
								url='https://images.unsplash.com/photo-1604578762246-41134e37f9cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZnVybml0dXJlJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
								styles='object-cover lg:h-[400px] h-[300px] w-full pr-6'
							/>
						}
						btn2={<Button title='Tabel'styles='bg-black w-28 py-2 px-4 flex justify-center rounded-sm   sm:translate-x-[70px] -translate-y-[80px]'  />}
						// item3 btn3
						item3={
							<Img
								url='https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGZ1cm5pdHVyZSUyMGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
								styles='object-cover lg:h-[400px] h-[300px] w-full pr-6'
							/>
						}
						btn3={<Button title='Decor'styles='bg-black w-28 py-2 px-4 flex justify-center rounded-sm   sm:translate-x-[70px] -translate-y-[80px]'  />}
						// item4 btn4
						item4={
							<Img
								url='https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZ1cm5pdHVyZSUyMGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
								styles='object-cover lg:h-[400px] h-[300px] w-full pr-6'
							/>
						}
						btn4={<Button title='Book Self'styles='bg-black w-28 py-2 px-4 flex justify-center rounded-sm   sm:translate-x-[70px] -translate-y-[80px]'  />}
						// item5 btn5
						item5={
							<Img
								url='https://images.unsplash.com/photo-1616952391192-d8bc85de60d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGZ1cm5pdHVyZSUyMGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
								styles='object-cover lg:h-[400px] h-[300px] w-full pr-6'
							/>
						}
						btn5={<Button title='Inter'styles='bg-black w-28 py-2 px-4 flex justify-center rounded-sm   sm:translate-x-[70px] -translate-y-[80px]'  />}
						// item6 btn6
						item6={
							<Img
								url='https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGZ1cm5pdHVyZSUyMGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
								styles='object-cover lg:h-[400px] h-[300px] w-full pr-6'
							/>
						}
						btn6={<Button title='Lamp' styles='bg-black w-28 py-2 px-4 flex justify-center rounded-sm   sm:translate-x-[70px] -translate-y-[80px]' />}
					/>
				</div>
			</div>
		</section>
	);
}

export default ShopSection;
