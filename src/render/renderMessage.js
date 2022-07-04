export default (elements, state) => {
    const { input, feedback } = elements;
    if (state.form.fields.name.valid) {
        input.removeAttribute('invalid');
    } else {
        input.setAttribute('invalid', true);
    }
    feedback.innerHTML = state.form.fields.name.message;
};
