import { useState, useRef } from 'react';
import { Formik}  from 'formik'
import emailjs from '@emailjs/browser'

const Formulario = () => {

	const form = useRef();

	const [formularioenviado, setformularioenviado] = useState(false);

	const sendEmail = () =>{
		emailjs.sendForm('service_f8cxw7w','template_84xbcfa', form.current, '3TkCFtArpfX95oASO')
			.then(response => console.log(response))
			.catch(er => console.log(er))
	}

	return (
		<Formik
			initialValues={{
				nombre: '',
				correo: ''
			}}

			validate={(valores)=>{
				let  errores = {}; 

				if(!valores.nombre){
					errores.nombre = 'Por favor ingresa un nombre';
				} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
							errores.nombre = 'El nombre solo puede contener letras y espacios';
						}

				if(!valores.correo){
					errores.correo = 'Por favor ingresa un correo'
				} else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
							errores.correo = 'El correo debe tener el sig. formato correo@correo.com';
						}

				return errores;
			}}

			onSubmit={(valores, {resetForm})=>{
				sendEmail();
				resetForm()
				setformularioenviado(true);
				setTimeout(()=>{
					setformularioenviado(false)
				}, 4000)
			}}
		>
			{({values,errors, touched, handleSubmit, handleChange, handleBlur})=>(

				<form ref={form} className='formulario' onSubmit={handleSubmit}>
					<div>
						<label htmlFor='nombre'>Nombre: </label>
						<input 
							type='text' 
							id='nombre' 
							name='nombre' 
							placeholder='Nombre'
							value={values.nombre}
							onChange={handleChange}
							onBlur={handleBlur} />
					</div>  
					{ touched.nombre && errors.nombre && <div className='error'> {errors.nombre} </div> }
					<div>
						<label htmlFor='correo'>Correo: </label>
						<input 
							type='text' 
							id='correo' 
							name='correo' 
							placeholder='micorreo@dominio.com'
							value={values.correo}
							onChange={handleChange}
							onBlur={handleBlur} />
					</div>
					{ touched.correo && errors.correo && <div className='error'> {errors.correo} </div> }
					<button type='submit'>Enviar</button>
					{ formularioenviado && <p className='exito'>Formulario enviado con exito</p>}
				</form>

			)}
		</Formik>
	);
}
 
export default Formulario;