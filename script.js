class EmailVerification {
    constructor(input, errorIcon, warning) {
        this.DOMInput = input;
        this.errorIcon = errorIcon;
        this.warning = warning;
    }
    addEvent(eventType) {
        this.DOMInput.addEventListener(eventType, () =>this.verify());
    }

    verify() {
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if(!emailRegex.test(this.DOMInput.value)) {
            this.errorIcon.classList.add('display-error-icon');
            this.DOMInput.classList.add('email-input-not-valid');
            this.warning.classList.add('display-warning')
        }
        else {
            this.DOMInput.classList.remove('email-input-not-valid');
            this.errorIcon.classList.remove('display-error-icon');
            this.warning.classList.remove('display-warning');
        }
    }
}
let DOMEmailInput = document.getElementById('email-input');
let errorIcon = document.getElementById('error-icon');
let warning = document.getElementById('email-warning')
let emailInput = new EmailVerification(DOMEmailInput, errorIcon, warning);
emailInput.addEvent('input');