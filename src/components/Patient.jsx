export default function Patient({ patient, setPatient, deletePatient }){
    const { pet, owner, email, admissionDate, symptoms } = patient

    const handleDeletePatient = () => {
        const response = confirm('Do you really wish to delete this registry?');
        if (response) deletePatient(patient.id);
    };

    return(
        <div className='mx-4 mb-4 bg-white shadow-md px-5 py-10 rounded-xl'>

                <p className='font-bold mb-3 text-gray-700 uppercase'>
                    Name: 
                    <span className='font-normal normal-case'> {pet}</span>
                </p>

                <p className='font-bold mb-3 text-gray-700 uppercase'>
                    Owner: 
                    <span className='font-normal normal-case'> {owner}</span>
                </p>

                <p className='font-bold mb-3 text-gray-700 uppercase'>
                    email: 
                    <span className='font-normal normal-case'> {email}</span>
                </p>

                <p className='font-bold mb-3 text-gray-700 uppercase'>
                    Admission date: 
                    <span className='font-normal normal-case'> {admissionDate}</span>
                </p>

                <p className='font-bold mb-3 text-gray-700 uppercase'>
                    Symptoms: 
                    <span className='font-normal normal-case'> {symptoms}</span>
                </p>

                <div className='flex justify-between mt-5'>
                    <button
                        type='button'
                        className='py-1 px-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'
                        onClick={() => setPatient(patient)}
                    >
                        Edit
                    </button>
                    <button
                        type='button'
                        className='py-1 px-5 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'
                        onClick={handleDeletePatient}
                    >
                        Delete
                    </button>
                </div>

        </div>
    )
}