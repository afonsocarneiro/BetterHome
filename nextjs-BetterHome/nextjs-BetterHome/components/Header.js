import { useContext } from 'react';
import Link from 'next/link';
import { ProductsContext } from './ProductsContext';

export default function Header() {
	const { selectedProducts } = useContext(ProductsContext);
	return (
		<header className='flex justify-between py-5 px-5 bg-gray-200'>
			<Link href='/'>
				<a className='text-2xl font-bold'>BetterHome</a>
			</Link>
			<Link href='/checkout'>
				<a className='flex items-center'>
					<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M2.25 3h1.386c.51 0 .935.357 1.087.835l1.523 9.23c.18.881.001 2.974-.833 4.628l-10.437 6.312c-.761.379-2.066.379-2.837 0L.67 6.072zM2.25 3a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm9.5 10.28a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm5.368-2.68l-10.437-6.312a.768.768 0 00-.833-.546h-1.385a.768.768 0 00-.768.768v3.629l7.049 3.904 6.624-3.904v-3.629a.768.768 0 00-.768-.768z'
						/>
					</svg>
					<span className='ml-2'>{selectedProducts.length}</span>
				</a>
			</Link>
		</header>
	);
}
