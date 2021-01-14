import * as React from 'react';
import { Renderer } from 'amis';
import './Emoji.css'
/**
 * 这个组件要接受什么参数呢？
 * 我肯定是要把我选中的emoji发出怎么发，在这种amis中怎么发呢？
 * 
 * - show?
 * 
 */

export class Emoji extends React.Component {
    state = {
        textareaValue: ""
    }

    logEmoji(emoji) {
        console.log(emoji)
        this.setState({
            textareaValue: this.state.textareaValue + emoji.unicode
        })
    }

    // this.logEmoji.bind(this)
    render() {
        const { clickHandle } = this.props;
        return (
            <div className="emoji">
                <div className="emoji-picker"> 
                </div>
            </div>
        )
    }
}

const EmojiRender = Renderer({
    test: /(^|\/)enoji$/,
    name: "enoji"
})(Emoji)
export default EmojiRender;