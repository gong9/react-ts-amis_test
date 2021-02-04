import * as React from 'react';
import { Renderer } from 'amis';
import { Scrollbars } from 'react-custom-scrollbars';
import emojiDictionary from '../lib/emojiDictionaries'
import { Image } from 'antd'
import 'react-photo-view/dist/index.css';

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
            <div  className="newemoji">
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
                {/* <PhotoProvider>
                    {photoImages.map((item, index) => (
                        <PhotoConsumer key={index} src={item} intro={item}>
                            <img src={item} alt="" />
                        </PhotoConsumer>
                    ))}
                </PhotoProvider> */}
                <Image
                    width={200}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
            </div>
        );
    }
}

const NewEmojiRender = Renderer({
    test: /(^|\/)new-enoji$/,
    name: "new-enoji"
})(NewEmoji)

export default NewEmojiRender;