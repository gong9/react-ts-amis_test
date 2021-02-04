import * as React from 'react';
import { useEffect } from 'react'
import { Scrollbars } from 'react-custom-scrollbars';


import emojiDictionary from '../lib/emojiDictionaries'
const newEmojiDictionary = Object.entries(emojiDictionary)

const EmojiItem = (props) => {
    const { msg, pic, clickEmoji } = props
    return (
        <span className="emoji-item-img" onClick={() => { clickEmoji(pic, msg) }}>
            <img src={pic} data-msg={msg} />
        </span>
    )
}


const EmojiNew = (props) => {
    const { clickEmoji } = props
    useEffect(() => {
        console.log();
    })
    return (
        <Scrollbars
            style={{ height: '100px' }}
            autoHide
        >
            <div className="emoji-new">

                {
                    newEmojiDictionary.map(
                        item => {
                            return <EmojiItem
                                key={item[0]}
                                msg={item[0]}
                                pic={item[1]}
                                clickEmoji={clickEmoji}
                            />
                        }
                    )
                }

            </div>
        </Scrollbars >
    );
}

export default EmojiNew;