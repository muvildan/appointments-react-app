import { useState, useEffect } from 'react';
import Error from './Error';

export default function Form({ patients, setPatients, patient, setPatient }){
    const [pet, setPet] = useState('');
    const [owner, setOwner] = useState('');
    const [email, setEmail] = useState('');
    const [admissionDate, setAdmissionDate] = useState('');
    const [symptoms, setSymptoms] = useState('');
    const [error, setError] = useState(false);

    function getTodayDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      }
      
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('myDateInput').value = getTodayDate();
    });

    useEffect(() => {
        setAdmissionDate(getTodayDate())
    }, [])

    useEffect(() => {
        if(Object.keys(patient).length > 0){
            setPet(patient.pet);
            setOwner(patient.owner);
            setEmail(patient.email);
            setAdmissionDate(patient.admissionDate);
            setSymptoms(patient.symptoms);
        }
    }, [patient]);

    const generateId = () => {
        const random = Math.random().toString(36);
        const date = Date.now().toString(36);
        return random + date;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if ([pet, owner, email, admissionDate, symptoms].includes('')){
            setError(true);
            return;
        } else {
            setError(false);
            const patientObj = { pet, owner, email, admissionDate, symptoms }
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
            setAdmissionDate(getTodayDate());
            setSymptoms(''); 
        }
    };

    return(
        <div className='mx-4 my-2'>

            <h3 className='
            text-gunmetal font-black text-xl text-start
            md:text-2xl'>Patients admission</h3>
            <div className='
            text-bone-dark text-sm mb-2 -mt-1 text-start
            md:text-lg'>Add patients & manage them!</div>

            <form 
            className='bg-bone shadow-xl rounded-lg p-5'
            onSubmit={handleSubmit}>

                {error && 
                <Error>
                    <p>All fields are required</p>
                </Error>
                }
                <div className='md:flex flex-row justify-between gap-2'>
                    <div className='mb-5'>
                        <label 
                            htmlFor='pet'
                            className='
                            text-sm block text-gunmetal-medium uppercase font-bold
                            md:text-lg'>
                            Pet name
                        </label>
                        <input 
                            id='pet'
                            type='text'
                            placeholder='Bobbie'
                            className='
                            mt-2 px-2 py-1 text-xs rounded-md w-full text-gunmetal bg-gunmetal-lightest placeholder-gunmetal-light
                            md:mt-1 md:text-sm'
                            value={pet}
                            onChange={(e) => setPet(e.target.value)}
                            required
                        />
                    </div>

                    <div className='mb-5'>
                        <label 
                            htmlFor='owner'
                            className='
                            text-sm block text-gunmetal-medium uppercase font-bold
                            md:text-lg'>
                            Owner name
                        </label>
                        <input 
                            id='owner'
                            type='text'
                            placeholder='John Doe'
                            className='mt-2 px-2 py-1 text-xs rounded-md w-full text-gunmetal bg-gunmetal-lightest placeholder-gunmetal-light
                            md:mt-1 md:text-sm'
                            value={owner}
                            onChange={(e) => setOwner(e.target.value)}
                            required
                        />
                    </div>

                    <div className='mb-5'>
                        <label 
                            htmlFor='email'
                            className='
                            text-sm block text-gunmetal-medium uppercase font-bold
                            md:text-lg'>
                            email
                        </label>
                        <input 
                            id='email'
                            type='text'
                            placeholder='email@example.com'
                            autoComplete='on'
                            className='mt-2 px-2 py-1 text-xs rounded-md w-full text-gunmetal bg-gunmetal-lightest placeholder-gunmetal-light
                            md:mt-1 md:text-sm'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className='mb-5'>
                        <label 
                            htmlFor='myDateInput'
                            className='
                            text-sm block text-gunmetal-medium uppercase font-bold
                            md:text-lg'>
                            Admission date
                        </label>
                        <input 
                            id="myDateInput"
                            type='date'
                            className='mt-2 px-2 py-1 text-xs rounded-md w-full text-gunmetal bg-gunmetal-lightest placeholder-gunmetal-light
                            md:mt-1 md:text-sm'
                            value={admissionDate}
                            onChange={(e) => setAdmissionDate(e.target.value)}
                            required
                        />
                    </div>
                </div>
                

                <div className='mb-3'>
                    <label 
                        htmlFor='symptoms'
                        className='
                        text-sm block text-gunmetal-medium uppercase font-bold
                        md:text-lg'>
                        Symptoms
                    </label>
                    <textarea 
                        id='symptoms'
                        className='
                        mt-2 p-2 text-xs rounded-md w-full bg-gunmetal-lightest placeholder-gunmetal-light
                        md:mt-1 md:text-sm'
                        placeholder='Describe the symptoms'
                        value={symptoms}
                        onChange={(e) => setSymptoms(e.target.value)}
                        required
                    />
                </div>

                <div className='
                flex justify-center
                md:justify-end'>
                    <input 
                        type='submit'
                        className='
                        text-xs px-4 py-1.5 rounded-xl bg-gunmetal-lightest shadow-lg
                        font-bold uppercase text-bone-dark
                        cursor-pointer transition-all duration-500
                        hover:bg-gunmetal hover:text-gunmetal-lightest' 
                        value={ patient.id ? 'Edit patient' : 'Add patient'}
                    />
                </div>

            </form>
        </div>
    )
}