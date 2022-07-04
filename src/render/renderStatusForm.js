export default (elements, status) => {
    const { input, btn } = elements;

    switch (status) {
        case 'sent':
            btn.removeAttribute('disable');
            input.value = '';
            input.readOnly = false;
            break;

        case 'loading':
            btn.setAttribute('disable', true);
            input.readOnly = true;
            break;

        case 'failed':
            btn.removeAttribute('disable');
            input.readOnly = false;
            break;

        default:
            throw Error(`Invalid status ${status}`);
    }
};
