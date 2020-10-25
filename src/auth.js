class Auth{

    constructor() {
        this.authencation = false
    }

    login(cb) {

        // api call, localstorage, sessionstorage

        this.authencation = true;

        cb()
    }

    logout(cb) {
        this.authencation = false;
        cb()
    }

    isAutentation() {
        return this.authencation
    }


}

// Authorioze



export default new Auth()