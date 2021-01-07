import * as React from 'react';
import { FormItem } from 'amis';
import classnames from 'classnames'
import { Emoji } from './Emoji'
import './Textarea.css'


class Newtextarea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true,
            value: ""
        }
        this.clickToEmoji = this.clickToEmoji.bind(this);
    }
    openRecord() {
        console.log(
            `录音弹框`
        );
    }
    openEmoji() {
        this.setState({ isShow: !this.state.isShow })
        console.log(
            `表情弹框`
        );
    }

    clickToEmoji(value) {
        console.log(value);
        console.log(this);
        this.setState({
            value: this.state.value + value.unicode
        })
    }
    edit(e) {
        this.setState({
            value: e.target.value
        })
    }
    sendData(){
        this.props.env.fetcher('www.baidu.com',{data:this.state.value})
        console.log('发送');
    }
    render() {
        const { value, onChange } = this.props;

        return (
            <div className="custom-textarea">
                <textarea style={{ resize: "none" }} onInput={(e) => this.edit(e)} className="custom-textarea-con" name="" id="" cols="30" rows="10" value={this.state.value}></textarea>
                <div className="custom-textarea-icon">
                    <i className="iconfont icon-luyin" onClick={() => { this.openRecord() }}></i>
                    <i className="iconfont icon-biaoqing" onClick={() => { this.openEmoji() }}></i>
                    <i className="iconfont icon-icon-" onClick={() => { this.sendData() }}></i>
                </div>

                <div className={classnames("moni", {
                    show: this.state.isShow
                })}>
                    <Emoji
                        clickHandle={this.clickToEmoji}
                    />
                </div>
            </div>
        );
    }
}
const NewtextareaReader = FormItem({
    type: 'textarea11'
})(Newtextarea)
export default NewtextareaReader