import onChange from 'on-change';
import renderStatusForm from './render/renderStatusForm.js';
import renderMessage from './render/renderMessage.js';
import renderPosts from './render/renderPosts.js';
import renderFeeds from './render/renderFeeds.js';

export default (state, elements, i18nextInstance) =>
    onChange(state, (path, value) => {
        switch (path) {
            case 'form.fields.name':
                renderMessage(elements, state, i18nextInstance);
                break;

            case 'form.processState':
                renderStatusForm(elements, value);
                break;

            case 'posts':
                renderPosts(elements, value, state, i18nextInstance);
                break;

            case 'feeds':
                renderFeeds(elements, value, i18nextInstance);
                break;

            default:
                break;
        }
    });
