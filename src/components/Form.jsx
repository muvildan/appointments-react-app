import { useState, useEffect } from 'react';
import Error from './Error';

export default function Form({ patients, setPatients, patient, setPatient }){
    const [pet, setPet] = useState('');
    const [owner, setOwner] = useState('');
    const [email, setEmail] = useState('');
    const [admissionDate, setAdmissionDate] = useState('');
    const [symptoms, setSymptoms] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        if(Object.keys(patient).length > 0){

            setPet(patient.pet);
            setOwner(patient.owner);
            setEmail(patient.email);
            setAdmissionDate(patient.admissionDate);
            setSymptoms(patient.symptoms);

        }
    }, [patient])

    const generateId = () => {
        const random = Math.random().toString(36);
        const date = Date.now().toString(36);

        return random + date;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ([pet, owner, email, admissionDate, symptoms].includes('')){
            setError(true);
            return;

        } else {
            setError(false);

            const patientObj = {
                pet,
                owner,
                email,
                admissionDate,
                symptoms,
            }

            if (patient.id) {
                patientObj.id = patient.id;
                const updatedPatients = patients.map( patientState => patientState.id === patient.id ? patientObj : patientState)
                
                setPatients(updatedPatients);
                setPatient({});

            } else {
                patientObj.id = generateId();
                
                setPatients([...patients, patientObj])
            }

            setPet('');
            setOwner('');
            setEmail('');
            setAdmissionDate('');
            setSymptoms(''); 
        }
    }

    return(
        <div className='md:w-1/2 lg:w-2/5'>

            <h2 className='font-black text-3xl text-center'>Patients admission</h2>

            <p className='text-lg my-2 text-center'>
                Add patients & <span className='text-indigo-600 font-bold'>manage</span> them.
            </p>

            <form 
            className='bg-white shadow-md rounded-lg p-5'
            onSubmit={handleSubmit}>

                {error && 
                <Error>
                    <p>All fields are required</p>
                </Error>
                }
                
                <div className='mb-5'>
                    <label 
                        htmlFor='pet'
                        className='block text-gray-700 uppercase font-bold'>
                        Pet name
                    </label>
                    <input 
                        id='pet'
                        type='text'
                        placeholder='Bobbie'
                        className='mt-2 px-2 py-1 rounded-md border-2 w-full placeholder-gray-400'
                        value={pet}
                        onChange={(e) => setPet(e.target.value)}
                    />
                </div>

                <div className='mb-5'>
                    <label 
                        htmlFor='owner'
                        className='block text-gray-700 uppercase font-bold'>
                        Owner name
                    </label>
                    <input 
                        id='owner'
                        type='text'
                        placeholder='John Doe'
                        className='mt-2 px-2 py-1 rounded-md border-2 w-full placeholder-gray-400'
                        value={owner}
                        onChange={(e) => setOwner(e.target.value)}
                    />
                </div>

                <div className='mb-5'>
                    <label 
                        htmlFor='email'
                        className='block text-gray-700 uppercase font-bold'>
                        email
                    </label>
                    <input 
                        id='email'
                        type='text'
                        placeholder='email@example.com'
                        className='mt-2 px-2 py-1 rounded-md border-2 w-full placeholder-gray-400'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='mb-5'>
                    <label 
                        htmlFor='admission'
                        className='block text-gray-700 uppercase font-bold'>
                        Admission date
                    </label>
                    <input 
                        id='admission'
                        type='date'
                        className='mt-2 px-2 py-1 rounded-md border-2 w-full placeholder-gray-400'
                        value={admissionDate}
                        onChange={(e) => setAdmissionDate(e.target.value)}
                    />
                </div>

                <div className='mb-5'>
                    <label 
                        htmlFor='symptoms'
                        className='block text-gray-700 uppercase font-bold'>
                        Symptoms
                    </label>
                    <textarea 
                        id='symptoms'
                        className='mt-2 p-2 rounded-md border-2 w-full placeholder-gray-400'
                        placeholder='Describe the symptoms'
                        value={symptoms}
                        onChange={(e) => setSymptoms(e.target.value)}
                    />
                </div>

                <input 
                    type='submit'
                    className='
                    w-full px-2 py-1 rounded-md bg-indigo-600
                    font-bold uppercase text-white
                    hover:bg-indigo-700 cursor-pointer transition-all' 
                    value={ patient.id ? 'Edit patient' : 'Add patient'}
                />

            </form>
        </div>
    )
}