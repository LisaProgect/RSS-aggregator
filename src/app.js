import i18next from 'i18next';
import axios from 'axios';
import { v4 } from 'uuid';
import view from './view.js';
import resources from './locales/index.js';
import validator from './validator.js';
import parser from './parser.js';

export default () => {
    const i18nextInstance = i18next.createInstance();
    i18nextInstance.init({
        lng: 'en',
        debug: false,
        resources,
    });

    const elements = {
        form: document.querySelector('.rss-form'),
        input: document.querySelector('#url-input'),
        btn: document.querySelector('.rss-btn-form'),
        feedback: document.querySelector('.feedback'),
        feeds: document.querySelector('#feeds'),
        posts: document.querySelector('#posts'),
        title: document.querySelector('#title'),
        modal: document.querySelector('#modal'),
    };
    elements.title.textContent = i18nextInstance.t('title');
    const state = {
        ln: 'en',
        links: [],
        posts: [],
        feeds: [],
        readPosts: [],
        form: {
            processState: '',
            fields: { name: { message: null, valid: true } },
        },
    };

    const addPostId = (posts) =>
        posts.map((post) => ({
            id: v4(),
            ...post,
        }));

    const routers = (target) =>
        `https://scrappy-php.herokuapp.com/?url=${target}`;

    const watchedState = view(state, elements, i18nextInstance);

    elements.form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const valueUser = formData.get('url');

        validator(valueUser, state.links)
            .then((url) => {
                watchedState.form.processState = 'loading';
                watchedState.links = [...state.links, url];
                return axios.get(routers(url));
            })
            .then((response) => {
                const rssData = parser(response.data);
                watchedState.feeds = [...state.feeds, rssData.feed];
                const posts = addPostId(rssData.posts);
                watchedState.posts = [...state.posts, ...posts];
                watchedState.form.processState = 'sent';
                watchedState.form.fields.name = {
                    message: 'sent',
                    valid: true,
                };
            })
            .catch((err) => {
                watchedState.form.processState = 'failed';
                watchedState.form.fields.name = {
                    message: err.message,
                    valid: false,
                };
            });
    });
};
