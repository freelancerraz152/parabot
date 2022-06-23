import Button from '../../Button';
import SecTitle from '../../Sec_Title';

function JoinSection() {
	return (
		<section className='lg:py-24 py-10 '>
			<div className='container mx-auto lg:px-12 px-4'>
				<div className='text-center'>
					{/* join section  content */}
					<SecTitle
						title='Join our newsletter for $10 off'
						content="We'll email you a voucher worth $10 off your first order over $50. By subscribing you agree to our Terms & Conditions and Privacy & "
						stylesH1='lg:text-4xl text-2xl font-bold'
						stylesP='md:w-5/12 md:mx-auto md:py-6 text-[13px]'
					/>
					{/* join section search */}
					<div className='flex items-center justify-center'>
						<form autoComplete='true'>
							<input
								type='text '
								placeholder='Enter email'
								className='text-sm text-gray-400  border border-gray-400 rounded-tl-xl rounded-bl-sm  p-[12px] pr-40 focus:outline-none focus:border-gray-300 '
							/>
						</form>
						<Button title='Subscribe' styles='text-sm bg-black font-semibold py-[13px] px-5 rounded-tr-sm rounded-br-xl' />
					</div>
				</div>
			</div>
		</section>
	);
}

export default JoinSection;
