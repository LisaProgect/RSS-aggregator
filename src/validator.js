import * as yub from 'yup';

export default (value, links) => {
    yub.setLocale({
        mixed: {
            notOneOf: () => 'duplicateUrl',
        },
    });
    return yub.string().url().trim().required().notOneOf(links).validate(value);
};
