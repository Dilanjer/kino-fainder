import { BellIcon, CogIcon, SearchIcon } from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import React from 'react';

const TheHeader = () => {
  return (
    <div className='flex sticky pt-8 z-10 pb-3 top-0 bg-sky-50 items-center justify-between'>
      <div>
        <form>
          <label className='border w-96 border-gray-400 py-1 px-3 flex rounded-lg'>
            <SearchIcon className='w-5 mr-3 text-gray-500' />
            <input
              placeholder='Search Films'
              className='bg-transparent focus:outline-none w-full py-1'
            />
          </label>
        </form>
      </div>

      <div className='space-x-3 flex items-center'>
        <button className='relative'>
          <span className='absolute w-2 h-2 rounded-full bg-red-500 right-0-0' />
          <BellIcon className='w-6 text-gray-600' />
        </button>

        <button>
          <CogIcon className='w-6 text-gray-600' />
        </button>

        <button className='flex items-center space-x-2'>
          <Image
            src={'https://i.pravatar.cc/45'}
            width={45}
            height={45}
            alt='avatar'
            className='rounded-full'
          />

          <span className='text-sm font-semibold'>Kevin</span>
          <ChevronDownIcon className='w-5 text-gray-500' />
        </button>
      </div>
    </div>
  );
};

export default TheHeader;
