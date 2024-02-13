import { ThemeContext } from '@/context/ThemeProvider';
import Image from 'next/image';
import React, { useContext } from 'react'

export const Loader = () => {
  return (
    <div className="bg-slate-900 fixed top-0 left-0 w-full h-full flex justify-center items-center">
      <Image
        width={200}
        height={200}
        alt="Loading..."
        src="/loader.svg"
      />
    </div>
  );
}