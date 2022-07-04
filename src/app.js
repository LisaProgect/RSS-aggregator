import validator from './validator.js';
import view from './view.js';

export default () => {
    const elements = {
        form: document.querySelector('.rss-form'),
        input: document.querySelector('#url-input'),
        btn: document.querySelector('.rss-btn-form'),
        feedback: document.querySelector('.feedback'),
    };
    const state = {
        links: [],
        errorApp: '',
        form: {
            processState: '',
            fields: { name: { message: null, valid: true } },
        },
    };
    elements.form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const valueUser = formData.get('url');

        validator(valueUser)
            .then((url) => {
                const watchedState = view(state, elements);
                if (!state.links.includes(url)) {
                    watchedState.links.push(url);
                    watchedState.form.fields.name = {
                        valid: true,
                        message: 'RSS successfully loaded',
                    };
                } else {
                    watchedState.form.fields.name = {
                        valid: false,
                        message: 'url already exists',
                    };
                }
            })
            .catch((err) => {
                view(state, elements).form.fields.name = {
                    message: err.message,
                    valid: false,
                };
            });
    });
};
