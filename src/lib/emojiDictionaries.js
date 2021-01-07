/**
 * emojiz字典
 * 
 * 我这边需要替换处理的有两个地方

- 表情展示时
    这里好处理，改img添加一个data属性，点击它实际拿到的是图片描述
- 从后台拿过来的时 
    正则过滤一下呗
 */
import imgMap from './imgmap'
const emojiDictionary = {
    "[微笑]": imgMap.img01,
    "[撇嘴]": imgMap.img02,
    "[色]":   imgMap.img03,
    "[发呆]": imgMap.img04,
    "[得意]": imgMap.img05,
    "[流泪]": imgMap.img06,
    "[害羞]": imgMap.img07,
    "[闭嘴]": imgMap.img08,
    "[睡]":   imgMap.img09,
    "[大哭]": imgMap.img10,
    "[尴尬]": imgMap.img11,
    "[发怒]": imgMap.img12,
    "[调皮]": imgMap.img13,
    "[龇牙]": imgMap.img14,
    "[惊讶]": imgMap.img15,
    "[难过]": imgMap.img16,
    "[酷]":   imgMap.img17,
    "[冷汗]": imgMap.img18,
    "[抓狂]": imgMap.img19,
    "[吐]":   imgMap.img20,
    "[偷笑]": imgMap.img21,
    "[可爱]": imgMap.img22,
    "[白眼]": imgMap.img23,
    "[傲慢]": imgMap.img24,
    "[饥饿]": imgMap.img25,
    "[困]":   imgMap.img26,
    "[惊恐]": imgMap.img27,
    "[流汗]": imgMap.img28,
    "[憨笑]": imgMap.img29,
    "[大兵]": imgMap.img30,
    "[奋斗]": imgMap.img31,
    "[咒骂]": imgMap.img32,
    "[疑问]": imgMap.img33,
    "[嘘]":   imgMap.img34,
    "[晕]":   imgMap.img35,
    "[折磨]": imgMap.img36,
    "[衰]":   imgMap.img37,
    "[骷髅]": imgMap.img38,
    "[敲打]": imgMap.img39,
    "[再见]": imgMap.img40,
    "[擦汗]": imgMap.img41,
    "[抠鼻]": imgMap.img42,
    "[鼓掌]": imgMap.img43,
   "[糗大了]":imgMap.img44,
    "[坏笑]": imgMap.img45,
  "[左哼哼]": imgMap.img46,
  "[右哼哼]": imgMap.img47,
    "[哈欠]": imgMap.img48,
    "[鄙视]": imgMap.img49,
    "[委屈]": imgMap.img50,
  "[快哭了]": imgMap.img51,
    "[阴险]": imgMap.img52,
    "[亲亲]": imgMap.img53,
    "[吓]":   imgMap.img54,
    "[可怜]": imgMap.img55,
    "[菜刀]": imgMap.img56,
    "[西瓜]": imgMap.img57,
    "[啤酒]": imgMap.img58,
    "[篮球]": imgMap.img59,
    "[乒乓]": imgMap.img60,
    "[咖啡]": imgMap.img61,
    "[饭]":   imgMap.img62,
    "[猪头]": imgMap.img63,
    "[玫瑰]": imgMap.img64,
    "[凋谢]": imgMap.img65,
    "[示爱]": imgMap.img66,
    "[爱心]": imgMap.img67,
    "[心碎]": imgMap.img68,
    "[蛋糕]": imgMap.img69,
    "[闪电]": imgMap.img70,
    "[炸弹]": imgMap.img71,
    "[刀]":   imgMap.img72,
    "[足球]": imgMap.img73,
    "[瓢虫]": imgMap.img74,
    "[便便]": imgMap.img75,
    "[月亮]": imgMap.img76,
    "[太阳]": imgMap.img77,
    "[礼物]": imgMap.img78,
    "[拥抱]": imgMap.img79,
    "[强]":   imgMap.img80,
    "[弱]":   imgMap.img81,
    "[握手]": imgMap.img82,
    "[胜利]": imgMap.img83,
    "[抱拳]": imgMap.img84,
    "[勾引]": imgMap.img85,
    "[拳头]": imgMap.img86,
    "[差劲]": imgMap.img87,
    "[爱你]": imgMap.img88,
    "[不是]": imgMap.img89,
    "[好的]": imgMap.img90,
}

export default emojiDictionary;

// 如果匹配到了就转义，否则就原样输出。写到过滤器不更好吗？

// 过滤一下白！

let str = "hiuhwius[好的]hsiwhiui好的[huhiuswhhuhhi]"
let newStr = str.replace(/\[(.+?)\]/g, (match) => {
    if (match in emojiDictionary) {
        return `<img src="${emojiDictionary[match]}">`
    } else {
        return match;
    }
})
console.log(newStr);