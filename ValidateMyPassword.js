function validPass(password) {
    
    return /^(?=.*[0-9])(?=.*[a-z])[a-zA-Z0-9]{4,19}$/.test(password) ? 'VALID' : 'INVALID';

}
