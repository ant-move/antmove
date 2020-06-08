const isSingle= require('./xmlConfig');
const createComponentNode = require('./processRelations');
const computedIndexSpaces = require('./computedIndexSpaces');
module.exports = {
    isSingle,
    createComponentNode,
    computedIndexSpaces,
    transformStr (type = '') {
        /**
         * 组件名字母大写转小写
         */
        type;
        type = type.replace(/^[A-Z]/, function ($) {
            return $.toLowerCase();
        });
    
        type = type.replace(/[A-Z]/g, function ($) {
            return '-' + $.toLowerCase();
        });
    
        return type;
    },
};