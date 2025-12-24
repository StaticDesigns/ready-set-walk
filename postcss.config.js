module.exports = {
    plugins: [
        require('postcss-import'),
        require('@tailwindcss/postcss'),
        require('autoprefixer'),
        require('@fullhuman/postcss-purgecss').default({
            content: [
                './layouts/**/*.html',
                './content/**/*.md',
                './themes/ready-set-walk/layouts/**/*.html',
                './themes/ready-set-walk/exampleSite/content/**/*.md'
            ],
            defaultExtractor: content => {
                const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
                const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []
                return broadMatches.concat(innerMatches)
            },
            safelist: {
                standard: [/^(?!\.?fa-).*/],
                deep: [],
                greedy: [],
                keyframes: [],
                variables: []
            }
        })
    ]
}
