/**
 * emojiz字典
 * 
 * 我这边需要替换处理的有两个地方

- 表情展示时
    这里好处理，改img添加一个data属性，点击它实际拿到的是图片描述
- 从后台拿过来的时 
    正则过滤一下呗
 */

const emojiDictionary = {
    "[微笑]": "./emoji_1_.png",
    "[撇嘴]": "./emoji_2_.png",
    "[色]": "./emoji_3_.png",
    "[发呆]": "./emoji_4_.png",
    "[得意]": "./emoji_5_.png",
    "[流泪]": "./emoji_6_.png",
    "[害羞]": "./emoji_7_.png",
    "[闭嘴]": "./emoji_8_.png",
    "[睡]": "./emoji_9_.png",
    "[大哭]": "./emoji_10_.png",
    "[尴尬]": "./emoji_11_.png",
    "[发怒]": "./emoji_12_.png",
    "[调皮]": "./emoji_13_.png",
    "[龇牙]": "./emoji_14_.png",
    "[惊讶]": "./emoji_15_.png",
    "[难过]": "./emoji_16_.png",
    "[酷]": "./emoji_17_.png",
    "[冷汗]": "./emoji_18_.png",
    "[抓狂]": "./emoji_19_.png",
    "[吐]": "./emoji_20_.png",
    "[偷笑]": "./emoji_21_.png",
    "[可爱]": "./emoji_22_.png",
    "[白眼]": "./emoji_23_.png",
    "[傲慢]": "./emoji_24_.png",
    "[饥饿]": "./emoji_25_.png",
    "[困]": "./emoji_26_.png",
    "[惊恐]": "./emoji_27_.png",
    "[流汗]": "./emoji_28_.png",
    "[憨笑]": "./emoji_29_.png",
    "[大兵]": "./emoji_30_.png",
    "[奋斗]": "./emoji_31_.png",
    "[咒骂]": "./emoji_32_.png",
    "[疑问]": "./emoji_33_.png",
    "[嘘]": "./emoji_34_.png",
    "[晕]": "./emoji_35_.png",
    "[折磨]": "./emoji_36_.png",
    "[衰]": "./emoji_37_.png",
    "[骷髅]": "./emoji_38_.png",
    "[敲打]": "./emoji_39_.png",
    "[再见]": "./emoji_40_.png",
    "[擦汗]": "./emoji_41_.png",
    "[抠鼻]": "./emoji_42_.png",
    "[鼓掌]": "./emoji_43_.png",
    "[糗大了]": "./emoji_44_.png",
    "[坏笑]": "./emoji_45_.png",
    "[左哼哼]": "./emoji_46_.png",
    "[右哼哼]": "./emoji_47_.png",
    "[哈欠]": "./emoji_48_.png",
    "[鄙视]": "./emoji_49_.png",
    "[委屈]": "./emoji_50_.png",
    "[快哭了]": "./emoji_51_.png",
    "[阴险]": "./emoji_52_.png",
    "[亲亲]": "./emoji_53_.png",
    "[吓]": "./emoji_54_.png",
    "[可怜]": "./emoji_55_.png",
    "[菜刀]": "./emoji_56_.png",
    "[西瓜]": "./emoji_57_.png",
    "[啤酒]": "./emoji_58_.png",
    "[篮球]": "./emoji_59_.png",
    "[乒乓]": "./emoji_60_.png",
    "[咖啡]": "./emoji_61_.png",
    "[饭]": "./emoji_62_.png",
    "[猪头]": "./emoji_63_.png",
    "[玫瑰]": "./emoji_64_.png",
    "[凋谢]": "./emoji_65_.png",
    "[示爱]": "./emoji_66_.png",
    "[爱心]": "./emoji_67_.png",
    "[心碎]": "./emoji_68_.png",
    "[蛋糕]": "./emoji_69_.png",
    "[闪电]": "./emoji_70_.png",
    "[炸弹]": "./emoji_71_.png",
    "[刀]": "./emoji_72_.png",
    "[足球]": "./emoji_73_.png",
    "[瓢虫]": "./emoji_74_.png",
    "[便便]": "./emoji_75_.png",
    "[月亮]": "./emoji_76_.png",
    "[太阳]": "./emoji_77_.png",
    "[礼物]": "./emoji_78_.png",
    "[拥抱]": "./emoji_79_.png",
    "[强]": "./emoji_80_.png",
    "[弱]": "./emoji_81_.png",
    "[握手]": "./emoji_82_.png",
    "[胜利]": "./emoji_83_.png",
    "[抱拳]": "./emoji_84_.png",
    "[勾引]": "./emoji_85_.png",
    "[拳头]": "./emoji_86_.png",
    "[差劲]": "./emoji_87_.png",
    "[爱你]": "./emoji_88_.png",
    "[不是]": "./emoji_89_.png",
    "[好的]": "./emoji_90_.png",
}

// export default emojiDictionary;

// 如果匹配到了就转义，否则就原样输出。写到过滤器不更好吗？

let str = "hiuhwius[好的]hsiwhiui好的[huhiuswhhuhhi]"
let newStr = str.replace(/\[(.+?)\]/g, (match) => {
    if (match in emojiDictionary) {
        return `<img src="${emojiDictionary[match]}">`
    } else {
        return match;
    }
})
console.log(newStr);