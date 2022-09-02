"use strict";

function extStrong(text) {
  const __$matches = text.match(/\$\{(.+?)\}/);

  if (!__$matches || __$matches.length < 2 || !__$matches[1]) return "<strong>".concat(text, "</strong>"); // .oakd-sd sdsf filter not bu

  const oriMatched = __$matches[1];

  const __$clz = __$matches[1].split(' ').filter(function (_v) {
    return /^\.[a-zA-Z0-9\_\-\$&]+$/.test(_v);
  }).map(v => v.slice(1));

  if (!__$clz.length) {
    return "<strong>".concat(text, "</strong>");
  }

  const __$clzStr = __$clz.join(' ');

  const _text = text.slice(oriMatched.length + 3);

  return "<strong class=\"".concat(__$clzStr, "\">").concat(_text, "</strong>");
}
