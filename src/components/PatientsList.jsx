import Patient from './Patient';

export default function PatientsList({ patients, setPatient, deletePatient }){

    return(
        <div className='mx-4'>
        {patients && patients.length ?
        <>
            <h2 className='text-gunmetal font-black text-xl text-start'>Patients list</h2>
            <div className='text-bone-dark text-sm mb-5 -mt-1 text-start'>Manage your patients & appointments</div>
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
            <h2 className='text-gunmetal font-black text-xl text-start'>No patients to show</h2>
            <p className='text-bone-dark text-sm mb-5 -mt-1 text-start'>Start adding patients and they will appear here</p>
        </>
        }
        </div>
    )
} 