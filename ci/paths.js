const path = require("path");

module.exports = {
    isAbsolute: (p) => path.isAbsolute(p),
    R: (...p) => path.resolve(...p),
    join: (...p) => path.join(...p),
    ROOT_DIR: path.resolve(__dirname, ".."),
    DOCS_BASE: path.resolve(__dirname, "..",'docs'),
}