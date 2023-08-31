const selectProspecto = document.querySelector('#selectProspecto');
const opcionesProspecto = document.querySelector('#opcionesProspecto');
const contenidoSelectProspecto = document.querySelector('#selectProspecto .contenido-selectProspecto');
const hiddenInputProspecto = document.querySelector('#inputSelectProspecto');

document.querySelectorAll('#opcionesProspecto > .opcionProspecto').forEach((opcion) => {
	opcion.addEventListener('click', (e) => {
		e.preventDefault();
		contenidoSelectProspecto.innerHTML = e.currentTarget.innerHTML;
		selectProspecto.classList.toggle('active');
		opcionesProspecto.classList.toggle('active');
		hiddenInputProspecto.value = e.currentTarget.querySelector('.tituloProspecto').innerText;
	});
});

selectProspecto.addEventListener('click', () => {
	selectProspecto.classList.toggle('active');
	opcionesProspecto.classList.toggle('active');
}); 

// Select de tipo de motivo
const select = document.querySelector('#select');
const opciones = document.querySelector('#opciones');
const contenidoSelect = document.querySelector('#select .contenido-select');
const hiddenInput = document.querySelector('#inputSelect');

document.querySelectorAll('#opciones > .opcion').forEach((opcion) => {
	opcion.addEventListener('click', (e) => {
		e.preventDefault();
		contenidoSelect.innerHTML = e.currentTarget.innerHTML;
		select.classList.toggle('active');
		opciones.classList.toggle('active');
		hiddenInput.value = e.currentTarget.querySelector('.titulo').innerText;
	});
});

select.addEventListener('click', () => {
	select.classList.toggle('active');
	opciones.classList.toggle('active');
});


// Select de tipo de departamento
const selectDepartamento = document.querySelector('#selectDepartamento');
const opcionesDepartamento = document.querySelector('#opcionesDepartamento');
const contenidoSelectDepartamento = document.querySelector('#selectDepartamento .contenido-selectDepartamento');
const hiddenInputDepartamento = document.querySelector('#inputSelectDepartamento');

document.querySelectorAll('#opcionesDepartamento > .opcionDepartamento').forEach((opcion) => {
	opcion.addEventListener('click', (e) => {
		e.preventDefault();
		contenidoSelectDepartamento.innerHTML = e.currentTarget.innerHTML;
		selectDepartamento.classList.toggle('active');
		opcionesDepartamento.classList.toggle('active');
		hiddenInputDepartamento.value = e.currentTarget.querySelector('.tituloDepartamento').innerText;
	});
});

selectDepartamento.addEventListener('click', () => {
	selectDepartamento.classList.toggle('active');
	opcionesDepartamento.classList.toggle('active');
});


// Select de tipo de procedencia
const selectProcedencia = document.querySelector('#selectProcedencia');
const opcionesProcedencia = document.querySelector('#opcionesProcedencia');
const contenidoSelectProcedencia = document.querySelector('#selectProcedencia .contenido-selectProcedencia');
const hiddenInputProcedencia = document.querySelector('#inputSelectProcedencia');

document.querySelectorAll('#opcionesProcedencia > .opcionProcedencia').forEach((opcion) => {
	opcion.addEventListener('click', (e) => {
		e.preventDefault();
		contenidoSelectProcedencia.innerHTML = e.currentTarget.innerHTML;
		selectProcedencia.classList.toggle('active');
		opcionesProcedencia.classList.toggle('active');
		hiddenInputProcedencia.value = e.currentTarget.querySelector('.tituloProcedencia').innerText;
	});
});

selectProcedencia.addEventListener('click', () => {
	selectProcedencia.classList.toggle('active');
	opcionesProcedencia.classList.toggle('active');
});



// Select de tipo de motivo
const selectEmpleado = document.querySelector('#selectEmpleado');
const opcionesEmpleado = document.querySelector('#opcionesEmpleado');
const contenidoSelectEmpleado = document.querySelector('#selectEmpleado .contenido-selectEmpleado');
const hiddenInputEmpleado = document.querySelector('#inputSelectEmpleado');

document.querySelectorAll('#opcionesEmpleado > .opcionEmpleado').forEach((opcion) => {
	opcion.addEventListener('click', (e) => {
		e.preventDefault();
		contenidoSelectEmpleado.innerHTML = e.currentTarget.innerHTML;
		selectEmpleado.classList.toggle('active');
		opcionesEmpleado.classList.toggle('active');
		hiddenInputEmpleado.value = e.currentTarget.querySelector('.tituloEmpleado').innerText;
	});
});

selectEmpleado.addEventListener('click', () => {
	selectEmpleado.classList.toggle('active');
	opcionesEmpleado.classList.toggle('active');
});



// Select de ingreso o recepcion

const selectAsideRecepcion = document.querySelector('#selectAsideRecepcion');
const opcionesAsideRecepcion = document.querySelector('#opcionesAsideRecepcion');
const contenidoSelectAsideRecepcion = document.querySelector('#selectAsideRecepcion .contenido-selectAsideRecepcion');
const hiddenInputAsideRecepcion = document.querySelector('#inputSelectAsideRecepcion');

document.querySelectorAll('#opcionesAsideRecepcion > .opcionAsideRecepcion').forEach((opcion) => {
	opcion.addEventListener('click', (e) => {
		e.preventDefault();
		contenidoSelectAsideRecepcion.innerHTML = e.currentTarget.innerHTML;
		selectAsideRecepcion.classList.toggle('active');
		opcionesAsideRecepcion.classList.toggle('active');
		hiddenInputAsideRecepcion.value = e.currentTarget.querySelector('.tituloAsideRecepcion').innerText;
	});
});

selectAsideRecepcion.addEventListener('click', () => {
	selectAsideRecepcion.classList.toggle('active');
	opcionesAsideRecepcion.classList.toggle('active');
});