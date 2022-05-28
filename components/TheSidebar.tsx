import React from 'react';

import {
  ChartSquareBarIcon,
  ChevronDownIcon,
  ClipboardListIcon,
  DocumentAddIcon,
  DocumentRemoveIcon,
  DotsCircleHorizontalIcon,
  FolderRemoveIcon,
  MoonIcon,
  UserGroupIcon,
  ViewGridIcon,
} from '@heroicons/react/solid';
import Link from 'next/link';

const TheSidebar = () => {
  return (
    <div className='fixed w-24 bg-white h-screen'>
      <div className='flex flex-col items-center py-8 w-full h-full'>
        <div className='bg-blue-500 mb-9 text-white text-2xl w-14 h-14 flex items-center justify-center rounded-full'>
          Fl
        </div>

        <nav className='flex flex-col items-center w-full space-y-8'>
          <Link href={'/'}>
            <a className='flex w-full  border-r-2 border-orange-400 text-orange-500 items-center justify-center'>
              <ViewGridIcon className='w-7' />
            </a>
          </Link>

          <Link href={'/'}>
            <a className='flex w-full border-r-2 border-transparent text-gray-400 items-center justify-center'>
              <FolderRemoveIcon className='w-7' />
            </a>
          </Link>
          <Link href={'/'}>
            <a className='flex w-full border-r-2 border-transparent text-gray-400 items-center justify-center'>
              <ClipboardListIcon className='w-7' />
            </a>
          </Link>
          <Link href={'/'}>
            <a className='flex w-full border-r-2 border-transparent text-gray-400 items-center justify-center'>
              <ChartSquareBarIcon className='w-7' />
            </a>
          </Link>
          <div className='h-0.5 w-8 bg-gray-300' />
          <Link href={'/'}>
            <a className='flex w-full border-r-2 border-transparent text-gray-400 items-center justify-center'>
              <DotsCircleHorizontalIcon className='w-7' />
            </a>
          </Link>
          <Link href={'/'}>
            <a className='flex w-full border-r-2 border-transparent text-gray-400 items-center justify-center'>
              <DocumentAddIcon className='w-7' />
            </a>
          </Link>
          <Link href={'/'}>
            <a className='flex w-full border-r-2 border-transparent text-gray-400 items-center justify-center'>
              <UserGroupIcon className='w-7' />
            </a>
          </Link>
          <Link href={'/'}>
            <a className='flex w-full border-r-2 border-transparent text-gray-400 items-center justify-center'>
              <DocumentRemoveIcon className='w-7' />
            </a>
          </Link>
        </nav>

        <button className='mt-auto'>
          <MoonIcon className='w-7 text-indigo-600' />
        </button>
      </div>
    </div>
  );
};

export default TheSidebar;
