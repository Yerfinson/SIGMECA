$(document).ready(function(){
	// NUMERO DE FICHA
	var contador_ficha = 1;
	$('#no_ficha').val(contador_ficha);
	// ORDEN DE TARBAJO
		//ID FICHA
		var id_ficha = Math.floor(Math.random()*(999999 - 1))+1;
		$('#id_ficha').val(id_ficha);
		// FECHA ACTUAL
		var fecha = new Date();
		var dia = fecha.getDay();
		var mes = fecha.getMonth();
		var año = fecha.getFullYear();
		var fecha_actual = dia + " / " + mes + " / " + año;
		$('#fecha_ficha').val(fecha_actual);
	// DATOS DEL CLIENTE
		// PERSONAS
		function Persona(id,nombre,apellido,telefono){
			this.id = id;
			this.nombre = nombre;
			this.apellido = apellido;
			this.telefono = telefono;
		}
			// CREACION DE PERSONAS
			var carlos = new Persona('8532',"Carlos","Gomez",'1234567');
			var andrea = new Persona('5632',"Andrea","Gutierres",'5743141');
			var diana = new Persona('9135',"Diana","Ramos",'8743423');
			var karen = new Persona('7519',"Karen","Ortiz",'7120462');
			var daniel = new Persona('4274',"Daniel","Zamora",'6240875');
			var geraldine = new Persona('3917',"Geraldie","Perez",'7492742');
			var nicol = new Persona('2208',"Nicol","Arias",'1354924');

		// ASIGNACION DE PERSONAS
		$('#id_cliente').change(function(){
			if($(this).val() == carlos.id){
				$('#nombre_cliente').val(carlos.nombre);
				$('#apellido_cliente').val(carlos.apellido);
				$('#telefono_cliente').val(carlos.telefono);
				console.log(carlos);
			} else if($(this).val() == andrea.id){
				$('#nombre_cliente').val(andrea.nombre);
				$('#apellido_cliente').val(andrea.apellido);
				$('#telefono_cliente').val(andrea.telefono);
			} else if($(this).val() == diana.id){
				$('#nombre_cliente').val(diana.nombre);
				$('#apellido_cliente').val(diana.apellido);
				$('#telefono_cliente').val(diana.telefono);
			}
			 else if($(this).val() == karen.id){
				$('#nombre_cliente').val(karen.nombre);
				$('#apellido_cliente').val(karen.apellido);
				$('#telefono_cliente').val(karen.telefono);
			}
			 else if($(this).val() == daniel.id){
				$('#nombre_cliente').val(daniel.nombre);
				$('#apellido_cliente').val(daniel.apellido);
				$('#telefono_cliente').val(daniel.telefono);
			}
			 else if($(this).val() == geraldine.id){
				$('#nombre_cliente').val(geraldine.nombre);
				$('#apellido_cliente').val(geraldine.apellido);
				$('#telefono_cliente').val(geraldine.telefono);
			}
			 else if($(this).val() == nicol.id){
				$('#nombre_cliente').val(nicol.nombre);
				$('#apellido_cliente').val(nicol.apellido);
				$('#telefono_cliente').val(nicol.telefono);
			} else {
				$('#nombre_cliente').val('Nombre de usuario no encontrado');
				$('#apellido_cliente').val('Apellido de usuario no encontrado');
				$('#telefono_cliente').val('Telefono de usuario no encontrado');
			}
		});
	// DATOS OPERARIO
		// OPERARIOS
		function Operario(id,nombre,apellido){
			this.id = id;
			this.nombre = nombre;
			this.apellido = apellido;
		}
			// CREACION DE OPERARIOS
			var samuel = new Operario('4624',"Samuel","Zarate");
			var camilo = new Operario('8345',"Camilo","Garzon");
			var sandra = new Operario('6234',"Sandra","Serna");
			var laura = new Operario('8206',"Laura","Garcia");
			var jefferson = new Operario('3900',"Jefferson","Martinez");
			var jorge = new Operario('1254',"Jorge","Garzon");
			var estiven = new Operario('7732',"Estiven","Mampira");

		// ASIGNACION DE OPERARIOS
		$('#id_operario').change(function(){
			if($(this).val() == samuel.id){
				$('#nombre_operario').text(samuel.nombre);
				$('#apellido_operario').text(samuel.apellido);
			} else if($(this).val() == camilo.id){
				$('#nombre_operario').text(camilo.nombre);
				$('#apellido_operario').text(camilo.apellido);
			} else if($(this).val() == sandra.id){
				$('#nombre_operario').text(sandra.nombre);
				$('#apellido_operario').text(sandra.apellido);
			}
			 else if($(this).val() == laura.id){
				$('#nombre_operario').text(laura.nombre);
				$('#apellido_operario').text(laura.apellido);
			}
			 else if($(this).val() == jefferson.id){
				$('#nombre_operario').text(jefferson.nombre);
				$('#apellido_operario').text(jefferson.apellido);
			}
			 else if($(this).val() == jorge.id){
				$('#nombre_operario').text(jorge.nombre);
				$('#apellido_operario').text(jorge.apellido);
			}
			 else if($(this).val() == estiven.id){
				$('#nombre_operario').text(estiven.nombre);
				$('#apellido_operario').text(estiven.apellido);
			} else {
				$('#nombre_operario').text('Nombre de usuario no encontrado');
				$('#apellido_operario').text('Apellido de usuario no encontrado');
			}
		});
});