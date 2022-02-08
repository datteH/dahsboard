/*var url = window.location.origin + '/esd-api/Login/iniciarSesion';
var data = {user: 'JLOPEZ'};

fetch(url).then(res => res.json()).catch(error => console.error('Error:', error)).then(response => console.log('Success:', response));*/

import {systemConnections} from 'conection.js';

class Login {
    validateForm(){
        if (username.value.trim() == '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ingrese su nombre de usuario',
              })
        }else if (password.value.trim() == '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ingrese su contraseña',
              })
        }else{

        }
    }
}

async function iniciarSesion() {
	let package = {};
	let variables={};
	let head = {};
	let body = [];
	/*get data*/
    head.username = document.getElementById("username").value;
	head.password = document.getElementById('password').value;
	head.compania = 2000;
    /*condicion*/
	if (username != '' && password != ''){
        console.log('variables');
		package.query="iniciarSesion";
		variables.auth = "";
		head.bandera=1;
		variables.head = head;
		variables.body = body;
		package.variables=variables;
		let info =JSON.stringify(package);

		const validar = await fetch(url, {
			method: 'POST',
			mode: 'no-cors',
			cache: 'no-cache',
			headers: {
				'Content-Type': 'application/json'
			},
			body: info
		});
		const content = await validar.json();
		crearSession(content);
	}
}

window.login = new Login;
var el = document.getElementById("btn_sub");
el.addEventListener('click', _ => { window.login.iniciarSesion();});