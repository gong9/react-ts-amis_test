import * as React from 'react';
import { Renderer } from 'amis';
import { Scrollbars } from 'react-custom-scrollbars';
import emojiDictionary from '../lib/emojiDictionaries'

import { Item } from 'amis/lib/store/list';
import './NewEmoji.css'

const newEmojiDictionary = Object.entries(emojiDictionary)
const NewEmojiItem = (props) => {
    const { picPath, dataMsg } = props;
    return (
        <span className="pic">
            <img className="pic-img" src={picPath} data-msg={dataMsg} />
        </span>
    )
}

class NewEmoji extends React.Component {
    state = {}
    componentDidMount() {
        console.log(newEmojiDictionary);
    }
    render() {
        return (
            <div className="newemoji">
                <Scrollbars
                    style={{ height: '200px' }}
                    autoHide
                >
                    {
                        newEmojiDictionary.map(item => {
                            return <NewEmojiItem
                                picPath={item[1]}
                                dataMsg={item[0]}
                                key={item[0]}
                            />
                        })
                    }
                </Scrollbars>
            </div>
        );
    }
}

const NewEmojiRender = Renderer({
    test: /(^|\/)new-enoji$/,
    name: "new-enoji"
})(NewEmoji)

export default NewEmojiRender;