export default (response) => {
    const doc = new DOMParser().parseFromString(response, 'application/xml');
    const errorNode = doc.querySelector('parsererror');
    if (errorNode) {
        throw new Error('invalidRSS');
    }
    const channel = doc.querySelector('channel');
    const feed = {
        title: channel.querySelector('title').textContent,
        description: channel.querySelector('description').textContent,
    };
    const posts = [];
    doc.querySelectorAll('item').forEach((item) => {
        const title = item.querySelector('title');
        const description = item.querySelector('description');
        const link = item.querySelector('link');
        const post = {
            title: title ? title.textContent : '',
            description: description ? description.textContent : '',
            link: link ? link.textContent : '',
        };
        posts.push(post);
    });

    return { feed, posts };
};
