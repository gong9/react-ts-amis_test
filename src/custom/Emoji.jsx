import * as React from 'react';
import { Renderer } from 'amis';
import Picker from '../lib/Picker'
import { Scrollbars } from 'react-custom-scrollbars';

import './Emoji.css'

// const scroll = {
//     // 如果最终结果表格内容与表格头部无法对齐。
//     // 表格头需要增加空白列，弹性布局
//     width: '100%',
//     // 最大高度，内容超出该高度会出现滚动条
//     height: 100,
// }
class Emoji extends React.Component {
    state = {
        textareaValue: "1234"
    }
    // handleScrollStop = () => {
    //     if (this.scrollbarsRef.current) {
    //         this.scrollTop = this.scrollbarsRef.current.getScrollTop();
    //     }
    // };
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (this.scrollbarsRef.current) {
    //         this.scrollbarsRef.current.scrollTop(this.scrollTop);
    //     }
    // }
    // componentDidMount() {
    //     //  覆盖自带滚动条样式
    //     // document.querySelector('.ant-table-scroll > .ant-table-body').style.overflow = 'hidden';
    //     // 滚动条组件ref，重新设置滚动位置
    //     this.scrollbarsRef = React.createRef();
    // }
    logEmoji(emoji) {
        console.log(emoji.unicode)
        this.setState({
            textareaValue: this.state.textareaValue + emoji.unicode
        })
    }

    edit(e) {
        this.setState({
            textareaValue: e.target.value
        })

    }

    sendData() {
        fetch('www.baidu.com?args=' + this.state.textareaValue)
    }

    render() {
        const self = this;
        return (
            <div className="emoji">
                <h2>emoji组件</h2>
                <div className="expl">
                    {this.state.textareaValue}
                </div>
                <textarea name="" id="" cols="30" rows="10" value={this.state.textareaValue} onChange={(e) => this.edit(e)}></textarea>

                <div className="emoji-picker">
                    <Picker onEmojiSelected={this.logEmoji.bind(this)} />
                </div>
                <button onClick={() => this.sendData()}>提交</button>
            </div>
        )
    }
}

const EmojiRender = Renderer({
    test: /(^|\/)enoji$/,
    name: "enoji"
})(Emoji)
export default EmojiRender;