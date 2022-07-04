import onChange from 'on-change';
import renderStatusForm from './render/renderStatusForm.js';
import renderMessage from './render/renderMessage.js';

export default (state, elements) =>
    onChange(state, (path, value) =>
        path === 'form.fields.name' || console.log(path)
            ? renderMessage(elements, state)
            : renderStatusForm(elements, value)
    );
