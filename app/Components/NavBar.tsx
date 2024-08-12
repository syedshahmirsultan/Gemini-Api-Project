import React from 'react';

const NavBar = () => {
    return (
        <div className='p-6 md:top-0 md:sticky z-20'>
            {/* Logo*/}
        <h1 className='text-2xl cursor-pointer md:text-3xl font-semibold tracking-wide text-red-500'>Medi<span className='text-green-500'>tail</span></h1>
        </div>
    );
}

export default NavBar;
