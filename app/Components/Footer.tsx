import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div className='mt-12 space-y-6 p-6 bg-black w-full h-auto'>
        <p className='text-white'><span className='font-semibold'>Note :</span> This chat bot does not provide 100% reliable information as it relies on publicly available data from the internet. It is intended to give you a general idea and save you time, but it is not a substitute for professional medical advice. Please consult your doctor before taking any medication. Thank you.</p>
        <p className='text-white text-sm md:text-md text-start ml-2 md:ml-0 whitespace-nowrap md:text-center'>All rights reserved <Link href="" className='text-gray-200 hover:text-white '>@syedshahmirsultan</Link></p>
        </div>
    );
}

export default Footer;
