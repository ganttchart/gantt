import sass from 'rollup-plugin-sass';
import uglify from 'rollup-plugin-uglify';
import merge from 'deepmerge';
import babel from 'rollup-plugin-babel';

const dev = {
    input: 'src/index.js',
    output: {
        name: 'Gantt',
        file: 'dist/frappe-gantt.js',
        format: 'umd'
    },
    plugins: [
        sass({
            output: 'dist/frappe-gantt.css'
        }),
        babel({
            exclude: 'node_modules/**',
        })
    ]
};
const prod = merge(dev, {
    output: {
        file: 'dist/frappe-gantt.min.js'
    },
    plugins: [uglify()]
});

export default [dev, prod];
