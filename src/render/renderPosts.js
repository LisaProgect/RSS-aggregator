import renderModal from './renderModal.js';

export default (elements, posts, state, i18nextInstance) => {
    // eslint-disable-next-line no-param-reassign
    elements.posts.textContent = '';
    const h2 = document.createElement('h2');
    h2.classList.add('text-2xl', 'font-medium', 'text-center', 'pb-10');
    h2.textContent = i18nextInstance.t('posts');
    elements.posts.append(h2);
    const ul = document.createElement('ul');
    elements.posts.append(ul);
    posts.forEach((post) => {
        const li = document.createElement('li');
        li.classList.add('flex', 'justify-between', 'items-start', 'mb-5');
        ul.append(li);
        const link = document.createElement('a');
        link.classList.add('text-indigo-800');
        if (state.readPosts.includes(post.id)) {
            link.classList.add('font-normal');
        } else {
            link.classList.add('font-bold');
        }
        link.setAttribute('href', post.link);
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener');
        link.textContent = post.title;
        li.append(link);
        const btn = document.createElement('button');
        btn.classList.add('btn-empty', 'md:mx-5');
        btn.textContent = i18nextInstance.t('btnDetail');
        li.append(btn);
        btn.addEventListener('click', () => {
            state.readPosts.push(post.id);
            link.classList.add('font-normal');
            link.classList.remove('font-bold');

            renderModal(elements, state, i18nextInstance, post);
        });
    });
};
