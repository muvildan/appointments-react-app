import { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import PatientsList from './components/PatientsList';

export default function App() {
  const [patients, setPatients] = useState(JSON.parse(localStorage.getItem('patients')) ?? []);
  const [patient, setPatient] = useState({});

  const deletePatient = (id) => {
    const updatedPatients = patients.filter((patient) => patient.id !== id);
    setPatients(updatedPatients);
  };

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify( patients ))
  }, [patients]);

  return (
    <div className='container my-10 mx-auto'>
      <Header />
      <div className='mt-5 md:flex'>

        <Form 
        patients={patients}
        setPatients={setPatients}
        patient={patient}
        setPatient={setPatient}/>

        <PatientsList 
        patients={patients}
        setPatient={setPatient}
        deletePatient={deletePatient}
        />

      </div>
    </div>
  )
}