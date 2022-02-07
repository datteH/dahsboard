
export class routes {

    constructor() {
        this.hosts = {};
        this.routes = {};
    }

    setHosts() {
        this.hosts.base_url = window.parent.base_url;
        this.hosts.esdapi = window.location.origin + '/esd-api/';
    }

    setRoutes() {
        this.routes.esdapi.login.iniciarSesion = this.hosts.esdapi + 'Login/iniciarSesion';
        this.routes.esdapi.login.validarSession = this.hosts.esdapi + 'Login/validarSession';
    }

    getRoutes(api, modulo) {
		let result = this.setRoutes();
		return result[api][modulo];
	}
}