module.exports = {
    configureWebpack: {
        module: {
            rules: [{
                test: /\.(graphql|gql)$/,
                exclude: /node_modules/,
                loader: 'graphql-tag/loader'
            }]
        },
    }
  }