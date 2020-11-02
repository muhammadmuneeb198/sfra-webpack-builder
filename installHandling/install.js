'use strict';

/**
 * Multicartridge npm installer command.
 */

const helper = require('../helper/helper');
const sfraBuilderConfigPath = helper.getSfraBuilderConfig();
const sfraBuilderConfig = require(sfraBuilderConfigPath);
const npmInstallHelper = require('./installHelper');

(() => {
    sfraBuilderConfig.cartridges.forEach(cartridge => {
        npmInstallHelper.npmInstall(cartridge);
    });
})();
