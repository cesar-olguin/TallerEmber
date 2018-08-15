var objeto ={
	nombre: 'Cesar Armando',
	apellido: 'Olguin',
}

var saludo = {
	mensaje: 'Que onda! ',
	autor: 'Cesar',

	mostrar: function(){
		var saludo = this.mensaje + 'dice: ' + this.autor;
		$('h1').text(saludi);
		return this;
	},
	prueba: function(){
		alert('Estoy encadenando metodos o funciones.');
		return this;
	},

	$(document).ready(function(){
		saludo.mostrar();
		$('h1').css({
			'font-size':72,
			'color':'green']);
		});

		$('#reset').on('click',function(){
			saludo.reset();
		});

		$('#dividir').click(function(){
			var num1 = $('#num1').val();
			var num2 = $('#num2').val();
		});

		if(num==0){
			alert('Numro Invalido');
		}else{
			var resultado = num1 / num2;
			$('#resultado').text(resultado);
		}

		if(num2==0){
			alert('Numro Invalido');
		}else{
			var resultado = num1 / num2;
			$('#resultado').text(resultado);
		}
	});
}