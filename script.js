class EmailVerification {
    constructor(input, errorIcon) {
        this.DOMInput = input;
        this.errorIcon = errorIcon;
    }
    addEvent(eventType) {
        this.DOMInput.addEventListener(eventType, this.verify);
        console.log(this.DOMInput); // DOMElement is logged
    }

    verify() {
        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        console.log(this.DOMInput); // but it's undefined here :(
        if(!emailRegex.test(this.DOMInput)) {
            console.log(this.DOMInput);
            this.errorIcon.classList.add('display-error-icon');
            this.DOMInput.classList.add('email-input-not-valid');
        }
        else {
            this.DOMInput.classList.remove('email-input-not-valid');
            this.errorIcon.classList.remove('display-error-icon');
        }
    }
}
let DOMEmailInput = document.getElementById('email-input');
let errorIcon = document.getElementById('error-icon');
let emailInput = new EmailVerification(DOMEmailInput, errorIcon);
emailInput.addEvent('input');