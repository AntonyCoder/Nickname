export default class Validator {
    validateUsername(username) {
        const regex = /^(?!.*\d{4,})(?!^[\d_-])(?!.*[\d_-]$)[a-zA-Z\d_-]+$/;
        return regex.test(username);
    }
}