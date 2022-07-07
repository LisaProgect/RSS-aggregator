export default (elements, state, i18nextInstance) => {
    const { input, feedback } = elements;
    if (state.form.fields.name.valid) {
        input.classList.remove('invalid');
        input.classList.add('input');
    } else {
        input.classList.add('invalid');
        input.classList.remove('input');
    }
    if (state.form.processState === 'sent') {
        feedback.classList.add('text-green-500');
        feedback.classList.remove('text-red-500');
    } else {
        feedback.classList.remove('text-green-500');
        feedback.classList.add('text-red-500');
    }
    feedback.textContent =
        i18nextInstance.t(state.form.fields.name.message) ||
        state.form.fields.name.message;
};
