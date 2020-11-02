const path = require('path');

function getSfraBuilderConfig() {
    let sfraBuilderConfig;
    let projectDir = process.env.PWD;
    try {
        let cartridgeSfraBuilderConfig = require(projectDir + '/package').sfraBuilderConfig;
        let sfraBuilderConfigPath = path.resolve(projectDir, cartridgeSfraBuilderConfig);
        sfraBuilderConfig = sfraBuilderConfigPath;
    } catch (e) {
        sfraBuilderConfig = path.resolve(projectDir, './webpackHandling/sfraBuilderConfig.js');
        
    }

    return sfraBuilderConfig;
}

function getSfraBuilderFixtureConfig() {
    let sfraBuilderConfig;
    let projectDir = process.env.PWD;
    sfraBuilderConfig =  path.resolve(projectDir, './webpackHandling/fixture_sfraBuilderConfig.js');
    return sfraBuilderConfig;
}

module.exports = {
    getSfraBuilderConfig: getSfraBuilderConfig,
    getSfraBuilderFixtureConfig: getSfraBuilderFixtureConfig
};
