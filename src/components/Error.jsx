//import { useState, useEffect } from 'react';

export default function Error({ children }){
    return(
        <div className='bg-red-800 text-white text-center p-1 uppercase font-bold rounded-lg'>
            <p>{children}</p>
        </div>
    )
}