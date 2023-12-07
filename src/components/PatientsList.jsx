import Patient from './Patient';

export default function PatientsList({ patients, setPatient, deletePatient }){

    return(
        <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
        {patients && patients.length ?
        <>
            <h2 className='font-black text-3xl text-center'>Patients list</h2> 
            <p className='text-lg my-2 text-center'>
                Manage your
                <span className='text-indigo-600 font-bold'> patients & appointments</span>
            </p>
            {patients && patients.map((patient) => (
                <Patient 
                key={patient.id} 
                patient={patient}
                setPatient={setPatient}
                deletePatient={deletePatient}
                />
            ))}
        </>

        :

        <>
            <h2 className='font-black text-3xl text-center'>No patients to show</h2> 
            <p className='text-lg my-2 text-center'>
                Start adding patients and they will appear
                <span className='text-indigo-600 font-bold'> here</span>
            </p>

        </>

        }
        </div>
    )
} 