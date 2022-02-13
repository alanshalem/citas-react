import { useState } from 'react';
import Error from './Error';

const Formulario = ({ pacientes, setPacientes }) => {
	const [nombre, setNombre] = useState('');
	const [propietario, setPropietario] = useState('');
	const [email, setEmail] = useState('');
	const [fecha, setFecha] = useState('');
	const [sintomas, setSintomas] = useState('');
	const [error, setError] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		//Validacion del formulario
		// 1° FORMA
		// if (
		// 	nombre.trim() === '' ||
		// 	propietario.trim() === '' ||
		// 	email.trim() === '' ||
		// 	fecha.trim() === '' ||
		// 	sintomas.trim() === ''
		// ) {
		// 	alert('Todos los campos son obligatorios');
		// 	return;
		// }

		// 2° FORMA
		if ([nombre, propietario, email, fecha, sintomas].includes('')) {
			// Pregunta si alguno de los campos esta vacio
			console.log('Hay al menos un campo vacio');
			setError(true);
			return;
		}
		setError(false);
		//Construimos el objeto de paciente
		const objetoPaciente = {
			nombre,
			propietario,
			email,
			fecha,
			sintomas,
		};
		//Agregamos el paciente al state
		setPacientes((pacientes) => [...pacientes, objetoPaciente]);
	};
	return (
		<div className="md:w-1/2 lg:w-2/5 mx-5">
			<h2 className="font-black text-3xl text-center">
				Seguimiento Pacientes
			</h2>
			<p className="text-lg mt-5 mb-10 text-center">
				Añade Pacientes y{' '}
				<span className="text-indigo-600 font-bold">Administralos</span>
			</p>
			{error && <Error>Todos los campos son obligatorios</Error>}
			<form
				onSubmit={handleSubmit}
				className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
			>
				<div className="mb-5">
					<label
						htmlFor="mascota"
						className="block text-gray-700 uppercase font-bold"
					>
						Nombre Mascota:
						{/* {`${nombre}`} */}
					</label>
					<input
						id="mascota"
						type="text"
						placeholder="Nombre de la Mascota"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						value={nombre}
						onChange={(e) => setNombre(e.target.value)}
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="propietario"
						className="block text-gray-700 uppercase font-bold"
					>
						Nombre Propietario:{' '}
					</label>
					<input
						id="propietario"
						type="text"
						placeholder="Nombre del Propietario"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						value={propietario}
						onChange={(e) => setPropietario(e.target.value)}
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="email"
						className="block text-gray-700 uppercase font-bold"
					>
						Email:{' '}
					</label>
					<input
						id="email"
						type="email"
						placeholder="Email contacto Propietario"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="alta"
						className="block text-gray-700 uppercase font-bold"
					>
						Fecha Alta:{' '}
					</label>
					<input
						id="alta"
						type="date"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						value={fecha}
						onChange={(e) => setFecha(e.target.value)}
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="sintomas"
						className="block text-gray-700 uppercase font-bold"
					>
						Sintomas:{' '}
					</label>
					<textarea
						id="sintomas"
						placeholder="Describe los Sintomas"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						value={sintomas}
						onChange={(e) => setSintomas(e.target.value)}
					/>
				</div>
				<input
					type="submit"
					value="Añadir Paciente"
					className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-700 cursor-pointer transition-colors"
				/>
			</form>
		</div>
	);
};

export default Formulario;
