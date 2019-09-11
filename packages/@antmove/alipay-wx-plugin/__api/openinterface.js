/**
 * type:0 missing
 * type:1 diff
 * type:3 - diffType - 类型不同
 * 
 */
const utils = require("./utils");
const descObj = require("./desc.js");

const apiObj = {
    getAuthCode: {
        fn (obj = {}) {
            utils.warn(
                `微信小程序发起授权请求获取用户信息时需要使用button按钮配合`,
                {
                    apiName: 'authorize',
                    errorType: 0,
                    type: 'api'
                }
            );
        }
    },
    getAuthUserInfo: {
        fn (obj = {}) {
            wx.getUserInfo({
                ...obj,
                success: res => {
                    res.nickName = res.userInfo.nickName;
                    res.avatar = res.userInfo.avatarUrl;
                    delete res.userInfo.nickName;
                    delete res.userInfo.avatarUrl;
                    obj.success && obj.success(res);
                }
            });
        }
    },
    getOpenUserInfo: {
        fn (obj = {}) {
            wx.getUserInfo({
                ...obj,
                success: res => {
                    res.nickName = res.userInfo.nickName;
                    res.avatar = res.userInfo.avatarUrl;
                    delete res.userInfo.nickName;
                    delete res.userInfo.avatarUrl;
                    obj.success && obj.success(res);
                }
            });
        }
    },
    getSetting: {
        fn (obj = {}) {
            function setLocation (cb) {
                wx.getLocation({
                    success (res) {
                        res.authSetting.location = true;
                        cb && cb();
                    }
                });
            }
            if (wx.getSetting) {
                wx.getSetting({
                    ...obj,
                    success (res) {
                        res.authSetting.location = res.authSetting['scope.userLocation'];
                        delete res.authSetting['scope.userLocation'];

                        res.authSetting.audioRecord = res.authSetting['scope.record'];
                        delete res.authSetting['scope.record'];

                        res.authSetting.userInfo = res.authSetting['scope.userInfo'];
                        delete res.authSetting['scope.userInfo'];

                        res.authSetting.album = res.authSetting['scope.writePhotosAlbum'];
                        delete res.authSetting['scope.writePhotosAlbum'];

                        res.authSetting.camera = res.authSetting['scope.camera'];
                        delete res.authSetting['scope.camera'];
                        obj.success && obj.success(res);
                    }
                });
            } else {
                let res = {};
                res.authSetting = {};
                /**
                        * scope=[userInfo, location, album, camera, audioRecord]
                        */

                if (obj && obj.success) {
                    setLocation(function () {
                        obj.success(res);
                    });
                }
            }
        }
    },
    tradePay: {
        fn (obj = {}) {
            let tradePayParams = descObj.tradePay.body.params.props;
            let tradePayReturnValue = descObj.tradePay.body.returnValue.props;
            let params = utils.defineGetter(obj, tradePayParams, function (obj, prop) {
                utils.warn(
                    `tradePay的参数不支持 ${prop} 属性!`,
                    {
                        apiName: prop,
                        errorType: tradePayParams[prop].type,
                        type: 'api'
                    }
                );
            });
            wx.requestPayment({
                ...params,
                success: res => {
                    let _res = utils.defineGetter(res, tradePayReturnValue, function (obj, prop) {
                        utils.warn(
                            `tradePay的参数不支持 ${prop} 属性!`,
                            {
                                apiName: prop,
                                errorType: tradePayReturnValue[prop].type,
                                type: 'api'
                            }
                        );
                    });
                    obj.success && obj.success(_res);
                }
            });
        }
    },
    openCardList: {
        fn (obj = {}) {
            if (!obj.cardList) {
                utils.warn(
                    `openCard的参数cardList是必传的!`,
                    {
                        apiName: 'openCard/cardList',
                        errorType: 0,
                        type: 'api'
                    }
                );
            } else {
                wx.openCard(obj);
            }
        }
    },
    addCardAuth: {
        fn (obj) {
            let addCardParams = descObj.addCard.body.params.props;
            let addCardReturnValue = descObj.addCard.body.returnValue.props;
            let params = utils.defineGetter(obj, addCardParams, function (obj, prop) {
                utils.warn(
                    `addCardAuth的参数不支持 ${prop} 属性!`,
                    {
                        apiName: prop,
                        errorType: addCardParams[prop].type,
                        type: 'api'
                    }
                );
            });
            wx.addCard({
                ...params,
                success: res => {
                    let _res = utils.defineGetter(res, addCardReturnValue, function (obj, prop) {
                        utils.warn(
                            `addCardAuth的参数不支持 ${prop} 属性!`,
                            {
                                apiName: prop,
                                errorType: addCardReturnValue[prop].type,
                                type: 'api'
                            }
                        );
                    });
                    obj.success && obj.success(_res);
                }
            });
        }
    },
    getRunData: {
        fn (obj = {}) {
            let getRunDataParams = descObj.getRunData.body.params.props;
            let getRunDataReturnValue = descObj.getRunData.body.returnValue.props;
            let params = utils.defineGetter(obj, getRunDataParams, function (obj, prop) {
                utils.warn(
                    `getRunData的参数不支持 ${prop} 属性!`,
                    {
                        apiName: prop,
                        errorType: getRunDataParams[prop].type,
                        type: 'api'
                    }
                );
            });
            wx.getWeRunData({
                ...params,
                success: res => {
                    let _res = utils.defineGetter(res, getRunDataReturnValue, function (obj, prop) {
                        utils.warn(
                            `getRunData的参数不支持 ${prop} 属性!`,
                            {
                                apiName: prop,
                                errorType: getRunDataReturnValue[prop].type,
                                type: 'api'
                            }
                        );
                    });
                    obj.success && obj.success(_res);
                }
            });
        }
    }
};

module.exports = apiObj;