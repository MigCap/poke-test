const fs = require('fs')
const path = require('path')

const prettierOptions = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
)

module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
      },
    extends: ['react-app', 'react-app/jest', 'prettier', 'prettier/react'],
    plugins: ["html", 'prettier'],
    rules: {
        'prettier/prettier': ['error', prettierOptions],
    },
    overrides: [
        {
            files: ['**/*.ts?(x)'],
            rules: { 'prettier/prettier': ['warn', prettierOptions] },
        },
    ],
}
