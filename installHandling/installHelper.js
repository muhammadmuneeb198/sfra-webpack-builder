const path = require('path');
const fs = require('fs');
const childProcess = require('child_process');

/**
 * Runs 'npm install' for cartridge
 */
function npmInstall(cartridgeFolder) {
    console.log('cartridge', cartridgeFolder);
    const parentFolder = cartridgeFolder.split('cartridges')[0];
    const hasPackageJson = fs.existsSync(path.resolve(cartridgeFolder, 'package.json'));
    const parentHasPackageJson = parentFolder && fs.existsSync(path.resolve(parentFolder, 'package.json'))

    // Abort if there's no 'package.json' in this folder
    if (!hasPackageJson && !parentHasPackageJson) {
        return;
    }
    if (hasPackageJson) {
        childProcess.execSync('npm install', { cwd: cartridgeFolder, env: process.env, stdio: 'inherit', windowsHide: true });
    }
    if (parentHasPackageJson) {
        childProcess.execSync('npm install', { cwd: parentFolder, env: process.env, stdio: 'inherit', windowsHide: true });
    }
}

module.exports = {
    npmInstall: npmInstall
};
