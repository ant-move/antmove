const utils = require("./utils");
const infoObj = {showActionSheet:{status:1,desc:"显示操作菜单",url:{wechat:"https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showActionSheet.html",alipay:"https://docs.alipay.com/mini/api/hr092g",},body:{msg:"入参参数名称差异/参数缺失",params:{props:{itemList:{type:1,desc:"按钮的文字数组, wx: itemList(数组长度最大为6), alipay: items",},itemColor:{type:0,desc:"按钮的文字颜色",},},},},},showModal:{status:1,desc:"显示模态对话框",url:{wechat:"https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showModal.html",alipay:"https://docs.alipay.com/mini/api/lt3uqc",},body:{msg:"入参参数名称差异/参数缺失/返回值名称差异",params:{props:{confirmText:{type:1,desc:"确认按钮的文字，最多 4 个字符, wx: confirmText, alipay: confirmButtonText",},cancelText:{type:1,desc:"取消按钮的文字，最多 4 个字符, wx: cancelText, alipay: cancelButtonText",},showCancel:{type:0,desc:"是否显示取消按钮",},cancelColor:{type:0,desc:"取消按钮的文字颜色，必须是 16 进制格式的颜色字符串",},confirmColor:{type:0,desc:"确认按钮的文字颜色，必须是 16 进制格式的颜色字符串",},},},returnValue:{props:{confirm:{type:1,desc:"wx: 为true时，表示用户点击了确定按钮, alipay: 点击confirm返回true，点击cancel返回false",},cancel:{type:1,desc:"wx: 为 true 时，表示用户点击了取消（用于 Android 系统区分点击蒙层关闭还是点击取消按钮关闭）",},},},},},navigateTo:{status:0,desc:"保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。使用 wx.navigateBack 可以返回到原页面。小程序中页面栈最多十层。",url:{wechat:"https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateTo.html",alipay:"https://docs.alipay.com/mini/api/zwi8gx",},body:{},},getSystemInfo:{status:1,desc:"获取系统信息",url:{wechat:"https://developers.weixin.qq.com/miniprogram/dev/api/base/system/system-info/wx.getSystemInfo.html",alipay:"https://docs.alipay.com/mini/api/system-info",},body:{msg:"返回值属性值缺失",returnValue:{props:{SDKVersion:{type:0,desc:"客户端基础库版本",},benchmarkLevel:{type:0,desc:"仅 Android 小游戏 设备性能等级取值为：-2 或 0",},albumAuthorized:{type:0,desc:"允许微信使用相册的开关 仅 iOS 有效",},cameraAuthorized:{type:0,desc:"允许微信使用摄像头的开关",},locationAuthorized:{type:0,desc:"允许微信使用定位的开关",},microphoneAuthorized:{type:0,desc:"允许微信使用麦克风的开关",},notificationAuthorized:{type:0,desc:"允许微信通知的开关 仅 iOS 有效",},notificationAlertAuthorized:{type:0,desc:"允许微信通知带有提醒的开关 仅 iOS 有效",},notificationBadgeAuthorized:{type:0,desc:"允许微信通知带有标记的开关 仅 iOS 有效",},notificationSoundAuthorized:{type:0,desc:"允许微信通知带有声音的开关 仅 iOS 有效",},bluetoothEnabled:{type:0,desc:"蓝牙的系统开关",},locationEnabled:{type:0,desc:"地理位置的系统开关",},wifiEnabled:{type:0,desc:"Wi-Fi 的系统开关",},},},},},showToast:{status:1,desc:"显示消息提示框",url:{wechat:"https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showToast.html",alipay:"https://docs.alipay.com/mini/api/fhur8f",},body:{msg:"入参参数差异/缺失",params:{props:{title:{type:1,desc:"提示的内容, wx: title, alipay: content",},icon:{type:1,desc:"图标, wx: icon, alipay: type",},image:{type:0,desc:"自定义图标的本地路径，image 的优先级高于 icon",},mask:{type:0,desc:"是否显示透明蒙层，防止触摸穿透",},icon的合法值:{type:0,desc:"显示加载图标，此时 title 文本最多显示 7 个汉字长度",},},},},},chooseImage:{status:1,desc:"从本地相册选择图片或使用相机拍照",url:{wechat:"https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseImage.html",alipay:"https://docs.alipay.com/mini/api/media-image#a-nameeh9ddfamychooseimage",},body:{msg:"返回值属性缺失",returnValue:{props:{tempFiles:{type:0,desc:"图片的本地临时文件列表",},},},},},previewImage:{status:0,desc:"在新页面中全屏预览图片",url:{wechat:"https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.previewImage.html",alipay:"https://docs.alipay.com/mini/api/eei0av",},body:{},},}
module.exports = infoObj;