import type { NextPage } from 'next';
import {
  ChartSquareBarIcon,
  ChevronDownIcon,
  ClipboardListIcon,
  DocumentAddIcon,
  DocumentRemoveIcon,
  DotsCircleHorizontalIcon,
  FolderRemoveIcon,
  MoonIcon,
  PlayIcon,
  UserGroupIcon,
  ViewGridIcon,
} from '@heroicons/react/solid';
import { BellIcon, CogIcon, SearchIcon } from '@heroicons/react/outline';

import Link from 'next/link';
import Image from 'next/image';
import TheHeader from '../components/TheHeader';
import TheSidebar from '../components/TheSidebar';

const Home: NextPage = () => {
  return (
    <div className='flex'>
      <TheSidebar />
      <div className='ml-24 w-full'>
        <div className='px-5 flex flex-col w-full'>
          <TheHeader />

          <div className='space-y-3'>
            <h2 className='text-4xl font-semibold '>Discover</h2>

            <div className='flex space-x-5 relative'>
              <div className='overflow-hidden h-80 relative rounded-lg'>
                <Image
                  alt='film'
                  width={800}
                  height={550}
                  src={'/images/films/01.jpeg'}
                  className='rounded-xl'
                />
                <div className='absolute bottom-8 w-full'>
                  <div className='px-5 flex flex-col'>
                    <h1 className='uppercase text-white font-bold text-6xl mb-3'>
                      Eternals
                    </h1>
                    <div className='flex justify-between items-center'>
                      <button className='px-2 py-1.5 rounded-md flex self-start items-center bg-blue-500 text-white space-x-1'>
                        <PlayIcon className='w-5' />
                        <span>Watch Now</span>
                      </button>
                      <div className='text-black bg-white px-3 py-1 text-sm font-semibold rounded-3xl'>
                        2j 36m
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
