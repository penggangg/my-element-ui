module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset'
    ],
    plugins: [
        [
            'component',
            {
                libraryName: 'element-ui',
                styleLibraryName: 'theme-chalk'
            },
            'element'
        ],
        [
            'component',
            {
                libraryName: '@penggang/zct-ui',
                style: false
            },
            'zct'
        ]
    ]
};
