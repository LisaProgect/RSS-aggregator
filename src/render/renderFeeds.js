export default (elements, feeds, i18nextInstance) => {
    // eslint-disable-next-line no-param-reassign
    elements.feeds.textContent = '';
    const h2 = document.createElement('h2');
    h2.classList.add('text-2xl', 'font-medium', 'text-center', 'pb-10');
    h2.textContent = i18nextInstance.t('feeds');
    elements.feeds.append(h2);
    feeds.forEach(({ title, description }) => {
        const p = document.createElement('p');
        p.classList.add('font-medium', 'pb-2');
        p.textContent = title;
        elements.feeds.append(p);
        const span = document.createElement('span');
        span.classList.add('pb-5', 'block', 'text-sm', 'font-light');
        span.textContent = description;
        elements.feeds.append(span);
    });
};
