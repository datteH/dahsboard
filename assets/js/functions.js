//import {routes} from './../App/config/routes.js';

/*class systemConnections{
    constructor() {
    }
    
     async connectionAsync(querymodel) {
       this.url = querymodel.url;
       this.datapackage = querymodel.datapackage;
       this.format = querymodel.format;
         let res = await fetch(this.url, {
                                 method: 'POST',
                                 mode: 'no-cors',
                                 cache: 'no-cache',
                                 headers: {
                                     'Content-Type': 'application/json'
                                 },
                                    body: JSON.stringify(this.datapackage)
                             });
 
         if (res) {
             if (this.format == 'json') {
                 return await res.json();
             }else if (this.format == 'text') {
                 return await res.text();
             }
         }else{
             return `Error: ${res.status}`;
         }
     }
 }
 
 export class login_model{

	constructor() {
		this.routes = new routes;
		this.systemConnections = new systemConnections;
		this.routes.login = this.routes.getRoutes('esdapi', 'login');
	}

	async iniciarSession(datapackage) {

		let url = this.routes.login.iniciarSesion;
		let querymodel = {};
		querymodel.url = url;
		querymodel.datapackage = datapackage;
		querymodel.format = 'json';
		let rest = await this.systemConnections.connectionAsync(querymodel).then(data => {
			return data;
		});
		if (rest) {
			return rest;
		}
	}
}*/

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

window.login = new Login;
var el = document.getElementById("btn_sub");
el.addEventListener('click', _ => { window.login.validateForm();});