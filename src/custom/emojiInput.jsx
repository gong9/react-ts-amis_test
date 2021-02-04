import * as React from 'react';
import { useState, useRef } from "react";
import { Renderer } from 'amis';
import classnames from 'classnames'

import Emoji from './emojinew'
import './blog.css'

let lastRange;
const EmojiInput = (props) => {

    const [show, setShow] = useState(true)
    const inputRef = useRef()

    const showEmoji = () => {
        setShow(!show)
    }
    const clickEmoji = (pic, msg) => {
        const img = document.createElement('img')
        img.src = pic
        img.setAttribute("data-msg", msg)
        let selection = window.getSelection()
        // 看一下有没有最后的光标对象
        if (lastRange) {
            selection.removeAllRanges()
            selection.addRange(lastRange)
        }
        let range = selection.getRangeAt(0)
        range.insertNode(img)
        range.collapse(false)
        lastRange = range

    }

    const record = () => {
        let selection = getSelection()
        let range = selection.getRangeAt(0)
        lastRange = range
    }


    const sendData = () => {
        let str = inputRef.current.innerHTML
        str = str.replace(/<div><\/div>/g, "")
        str = str.replace(/<div>/g, "\n")
        str = str.replace(/<br>/g, "\n")
        str = str.replace(/<\/div>/g, "")
        str = str.replace(/&nbsp;/g, " ")
        if (str.indexOf('\n') === 0) {
            str = str.replace(/\n/, "")
        }
        let imgReg = /<img.*?(?:>|\/>)/gi
        let nameReg = /<img[^>]+data-msg[=\'\"\s]+([^\'\"]*)[\'\"]?[\s\S]*/i
        let arr = str.match(imgReg)

        if (arr) {
            for (let i = 0; i < arr.length; i++) {
                let names = arr[i].match(nameReg)
                if (names && names[1]) {
                    str = str.replace(arr[i], names[1])
                }
            }
        }
        console.log(str)
    }
    return (
        <div className="emoji-input">
            <div className="input-textarea" ref={inputRef} contentEditable="plaintext-only"
                suppressContentEditableWarning={true} onBlur={record}
            >
                请输入...
            </div>
            <div className="input-col">
                <i className="iconfont icon-biaoqing" onClick={showEmoji}></i>
                <i className="iconfont icon-icon-" onClick={sendData}></i>
            </div>
            <div className={classnames('input-emoji', { show: show })}>
                <Emoji
                    clickEmoji={clickEmoji}
                />
            </div>
        </div>
    );
}


const EmojiInputRender = Renderer({
    test: /(^|\/)emoji-input$/,
    name: "emoji-input"
})(EmojiInput)
export default EmojiInputRender;