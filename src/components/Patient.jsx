import { useRef } from 'react';

export default function Patient({ patient, setPatient, deletePatient }){
    const { pet, owner, email, admissionDate, symptoms } = patient

    const handleEdit = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
        setPatient(patient);
    }

    const handleDeletePatient = () => {
        const response = confirm('Do you really wish to delete this registry?');
        if (response) deletePatient(patient.id);
    };

    return(
        <div className='bg-bone shadow-xl rounded-lg p-5 mb-10'>
            <div className='mb-2'>
                <div className='
                grid grid-cols-5 grid-rows-2 gap-2 mb-4
                md:grid-cols-10 md:grid-rows-1 md:gap-10 md:mb-2'>
                    <div className='
                    col-span-2'>
                        <div className='text-xs block text-gunmetal-medium uppercase font-bold'>Name</div>
                        <div className='
                        text-sm -ml-1 mt-1 px-3 py-0.5 rounded-full w-fit text-gunmetal bg-gunmetal-lightest normal-case
                        md:min-w-[100%]'> {pet}</div>
                    </div>
                    <div className='col-span-3'>
                        <div className='text-xs block text-gunmetal-medium uppercase font-bold'>Owner</div>
                        <div  className='
                        text-sm -ml-1 mt-1 px-3 py-0.5 rounded-full w-fit text-gunmetal bg-gunmetal-lightest normal-case truncate max-w-[100%]
                        md:min-w-[100%]'>{owner}</div>
                    </div>
                    <div className='col-span-2'>
                        <div className='text-xs block text-gunmetal-medium uppercase font-bold'>Admission</div>
                        <div className='
                        text-sm -ml-1 mt-1 px-3 py-0.5 rounded-full w-fit text-gunmetal bg-gunmetal-lightest normal-case
                        md:min-w-[100%]'> {admissionDate.split('-').reverse().join('/')}</div>
                    </div>
                    <div className='col-span-3'>
                        <div className='text-xs block text-gunmetal-medium uppercase font-bold'>email</div>
                        <div className='
                        text-sm -ml-1 mt-1 px-3 py-0.5 rounded-full w-fit text-gunmetal bg-gunmetal-lightest normal-case truncate max-w-[100%]
                        md:min-w-[100%]'> {email}</div>
                    </div>
                </div>
                <details className='mb-2'>
                    <summary className='text-xs text-gunmetal-medium uppercase font-bold'>
                        Symtpoms
                    </summary>
                    <div className='content text-sm -ml-1 mt-1 px-3 py-1 rounded-xl text-justify w-fit text-gunmetal bg-gunmetal-lightest normal-case'>{symptoms}</div>
                </details>
            </div>
            <div className='flex justify-end gap-2'>
                <button
                    type='button'
                    className='
                    text-xs px-4 py-1.5 rounded-xl bg-gunmetal-lightest shadow-lg
                    font-bold uppercase text-bone-dark
                    cursor-pointer transition-all duration-500
                    hover:bg-gunmetal hover:text-gunmetal-lightest'
                    onClick={handleEdit}
                >
                    Edit
                </button>
                <button
                    type='button'
                    className='
                    text-xs px-4 py-1.5 rounded-xl bg-red-100 shadow-lg
                    font-bold uppercase text-red-800
                    cursor-pointer transition-all duration-500
                    hover:bg-red-800 hover:text-red-100'
                    onClick={handleDeletePatient}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}