export default (elements, state, i18nextInstance, post) => {
    elements.modal.classList.remove('hidden');
    const title = elements.modal.querySelector('h3');
    const description = elements.modal.querySelector('p');
    const link = elements.modal.querySelector('a');
    const btnCancel = elements.modal.querySelector('button');

    link.setAttribute('href', post.link);
    link.textContent = i18nextInstance.t('btnDetail');

    title.textContent = post.title;

    description.textContent = post.description;

    btnCancel.textContent = i18nextInstance.t('btnCancel');

    elements.modal.querySelectorAll('[data-close-modal]').forEach((button) => {
        button.addEventListener('click', () => {
            elements.modal.classList.add('hidden');
        });
    });
};
