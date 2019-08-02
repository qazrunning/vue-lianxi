/**
 *  可伸缩布局方案
 * rem计算方式：设计图尺寸px / 100 = 实际rem  例: 100px = 1rem
 */
!function (window) {
    
        /* 设计图文档宽度 */
        var docWidth = 375;
    
        var doc = window.document,
            docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    
        var recalc = (function refreshRem () {
            var clientWidth = docEl.getBoundingClientRect().width;
    
            /* 17.1：小于320px不再缩小，22.4：大于420px不再放大 */
            docEl.style.fontSize = Math.max(Math.min(20 * (clientWidth / docWidth), 22.4), 17.1) * 0.8 + 'px';
    
            return refreshRem;
        })();
    
        /* 添加倍屏标识，安卓倍屏为1 */
        docEl.setAttribute('data-dpr', window.navigator.appVersion.match(/iphone/gi) ? window.devicePixelRatio : 1);
    
        if (/iP(hone|od|ad)/.test(window.navigator.userAgent)) {
            /* 添加IOS标识 */
            doc.documentElement.classList.add('ios');
            /* IOS8以上给html添加hairline样式，以便特殊处理 */
            if (parseInt(window.navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1], 10) >= 8)
                doc.documentElement.classList.add('hairline');
        }
    
        if (!doc.addEventListener) return;
        window.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
    
    }(window);
    