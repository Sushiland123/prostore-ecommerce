import Link from 'next/link';
import { APP_NAME } from '@/lib/constants';

const Header = () => {
  return (
    <header className='w-full border-b'>
      <div className='max-w-7xl mx-auto p-5 flex justify-between items-center'>
        <div className='flex items-center'>
          <Link href='/' className='flex items-center'>
            <span className='font-bold text-2xl'>
              {APP_NAME}
            </span>
          </Link>
        </div>
        <div>
          <Link href='/cart' className='px-4 py-2 border rounded'>
            Cart
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;