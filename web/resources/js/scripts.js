
function validar(){
	var num = document.getElementById('emailIngreso').value;
	var pass = document.getElementById('passIngreso').value;

	if (num == '1007161220' && pass == "12345678") {
		window.location.href = '../SIGMECA/si/supervisor.html';		
	}
	else if (num == '12345678' && pass == "12345") {
		window.location.href = '../SIGMECA/si/cliente.html'
	}
	else if (num == '12345678' && pass == "123456") {
		window.location.href = '../SIGMECA/si/operario.html'
	}
	else{	
		swal({
			title: "Incorrecto",
			text: "Los datos digitados son incorrectos",
			icon: "error",
			dangerMode: true,
		});
	}	

}


function valida2(){
	swal({
			title: "Ingreser todos los datos por favor",
			text: "Datos incompletos",
			icon: "error",
			dangerMode: true,
		});
}

function validar3(){
	swal("Cita agendada", "Te esperamos pronto", "success");

}

function validar4(){
	swal({
			title: "Cancelada",
			text: "Cita cancelada",
			icon: "error",
			dangerMode: true,
		});
}

function validar5(){
	var num = document.getElementById('emailIngreso').value;
	var pass = document.getElementById('passIngreso').value;

	if (num == '1007161220' && pass == "12345678") {
		window.location.href = '../si/supervisor.html';		
	}
	else if (num == '12345678' && pass == "12345") {
		window.location.href = '../si/cliente.html'
	}
	else if (num == '12345678' && pass == "123456") {
		window.location.href = '../si/operario.html'
	}
	else{	
		swal({
			title: "Incorrecto",
			text: "Los datos digitados son incorrectos",
			icon: "error",
			dangerMode: true,
		});
	}	

}

function validar6(){
	swal("Recivo archivado", "Gracias por preferirnos", "success",);

}
function validar7(){
	var email = document.getElementById('emailIngres').value;
	if (email == 'yefercg2001@gmail.com') {
		swal("Recuperacion exitosa", "Enviamos un mensaje de recuperacion a tu correo electronico", "success",);
	}else{	
		swal({
			title: "Incorrecto",
			text: "Por favor ingrese un correo valido",
			icon: "error",
			dangerMode: true,
		});
	}	

}


function valid(){
swal("Mensajes", "...");
}

function vali2(){
swal("Notificaciones", "...");
}


function vsuper(){
	var text = document.getElementById('inputnombre').value;
	var text = document.getElementById('inputapellido').value;
	var text = document.getElementById('inputId').value;
	var text = document.getElementById('inputDi').value;
	var text = document.getElementById('inputTel').value;

	if (text == text) {
	 swal("Cambios guardados", "", "success",);
	}
	else{	
		swal({
			title: "Incorrecto",
			text: "Los datos digitados son incorrectos",
			icon: "error",
			dangerMode: true,
		});
	}	

}

function mbn(){
	swal({
  title: "Estas seguro de eliminar este evento?",	
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    swal("Evento eliminado", {
      icon: "success",
    });
  } else {
    swal("Es bueno gurdar datos");
  }
});
}






