// utils/deviceDetector.js
/** * 判断当前设备是否为移动端 * 基于用户代理字符串匹配常见的移动设备关键词 * @returns {boolean} */
export function isMobileDevice() {
    const userAgent = navigator.userAgent.toLowerCase();
    // 匹配手机、平板等移动设备的关键词列表
    const mobileKeywords = [
        'phone', 'pad', 'iphone', 'ipod', 'ios', 'ipad',
        'android', 'mobile', 'blackberry', 'iemobile',
        'mqqbrowser', 'juc', 'fennec', 'wosbrowser',
        'browserng', 'webos', 'symbian', 'windows phone'
    ];
    // 使用正则表达式构造一个匹配任意关键词的模式
    const pattern = new RegExp(mobileKeywords.join('|'), 'i');
    return pattern.test(userAgent);
}