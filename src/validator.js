import * as yub from 'yup';

export default (value) =>
    yub
        .string()
        .url()
        .trim()
        .required()
        .matches()
        .matches(/(\.rss|\.xml)$/)
        .validate(value);
