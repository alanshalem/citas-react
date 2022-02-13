import { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListadoPacientes from './components/ListadoPacientes';

function App() {
	const [pacientes, setPacientes] = useState([]);
	const [paciente, setPaciente] = useState({});

	useEffect(() => {
		const obtenerLS = () => {
			localStorage.getItem('pacientes') ?? [];
			setPacientes(listadoLocalStorage);
		};
		obtenerLS();
	}, []);

	useEffect(() => {
		localStorage.setItem('pacientes', JSON.stringify(pacientes));
	}, [pacientes]);

	const eliminarPaciente = (id) => {
		const pacientesActualizados = pacientes.filter(
			(paciente) => paciente.id !== id // Si el id del paciente es diferente al id que se esta pasando por parametro, lo traigo
		);
		setPacientes(pacientesActualizados);
	};

	return (
		<div className="container mx-auto mt-20">
			<Header />
			<div className="mt-12 md:flex">
				<Formulario
					pacientes={pacientes}
					setPacientes={setPacientes}
					paciente={paciente}
					setPaciente={setPaciente}
				/>

				<ListadoPacientes
					pacientes={pacientes}
					setPaciente={setPaciente}
					eliminarPaciente={eliminarPaciente}
				/>
			</div>
		</div>
	);
}

export default App;
