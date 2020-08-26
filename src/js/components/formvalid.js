export default class FormValidator {
  constructor(form) {
    this.form = form;
  }


  isValidate = (input) => {
    input.setCustomValidity("");
    if (input.validity.valueMissing) {
      input.setCustomValidity('Это обязательное поле');
      return false
    }
    if (input.validity.tooShort || input.validity.tooLong) {
      input.setCustomValidity('Должно быть от 2 до 30 символов');
      return false
    }
    return input.checkValidity();
  };

  isFieldValid = (input) => {
    const errorElem = this.form.nextElementSibling;
    const valid = this.isValidate(input);
    errorElem.textContent = input.validationMessage;
    return valid;
  };

  setSubmitButtonState = (button, state) => {
    if (state) {
      button.removeAttribute('disabled');
      button.classList.add(`search__button_active`);
    } else {
      button.setAttribute('disabled', "disabled");
      button.classList.remove(`search__button_active`);
    }
  };

  handlerInputForm = (evt) => {
    const submit = this.form.querySelector('.search__button');
    const [...inputs] = evt.currentTarget.elements;

    this.isFieldValid(evt.target);
    if (inputs.every(this.isValidate)) {
      this.setSubmitButtonState(submit, true);
    } else {
      this.setSubmitButtonState(submit, false);
    }
  };

  valid() {
    this.form.addEventListener('input', this.handlerInputForm, true);
  }

  reserError() {
    const myspan = this.form.querySelectorAll(".eror");
    myspan.forEach(element => {
      element.textContent = "";
    });
  };

}