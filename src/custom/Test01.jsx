import * as React from 'react';
import { Renderer } from 'amis';
import Recorder from 'js-audio-recorder';
import lamejs from 'lamejs'

/**
 *  录音组件
 * 要接收哪些参数呢？
 * 1. 采样率
 * 2. 采样位数
 * 3. 声道
 * 
 * 4. 要上传的地址
 * 5. 
 * 
 * 
 * 要实现的功能
 * - 录音 （开始 暂停 继续 结束）
 * - 播放 （开始 暂停 继续 播放）
 * - 上传音源
 * - 下载音源
 */
let recorder = null;
class Record extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sampleBit: props.sampleBit, //采样率
      sampleRate: props.sampleRate,  //采样位数
      numChannel: props.numChannel, //声道
      isRecording: false,     // 是否正在录音
      duration: 0,
      fileSize: 0,
    }
  }

  // 获取配置信息
  getConfig() {
    return {
      sampleBits: this.sampleBit,
      sampleRate: this.sampleRate,
      numChannel: this.numChannel
    }
  }

  recorderStart() {
    recorder.start().then(() => {
      console.log('已经开始');
      this.setState({ isRecording: true })
    }, (error) => {
      console.log(`${error.name} : ${error.message}`);
    });
  }

  //开始
  start() {


    if (!recorder || !this.isRecording) {
      if (!recorder) {
        recorder = new Recorder(this.getConfig())

      }
      if (recorder && !this.isRecording) {
        // alert('要重新开始录制吗')
        this.stop()
      }
      this.recorderStart()
      recorder.onprogress = (params) => {
        this.setState({
          duration: params.duration.toFixed(5),
          fileSize: params.fileSize,
          // vol: params.vol.toFixed(2)
        });
      }
    }

  }

  // 暂停
  pause() {
    console.log('暂停');
    recorder.pause();
    this.setState({ isRecording: false })
  }

  // 继续录音
  resume() {
    if (!this.isRecording) {
      console.log('继续');
      recorder.resume()
      this.setState({ isRecording: true })
    }
  }

  // 结束
  stop() {
    console.log('结束');
    recorder.stop();
    this.setState({ isRecording: false })

  }

  // 播放
  play() {
    console.log('正在播放');
    recorder.play();
  }
  pausePlay() {
    recorder.pausePlay();
  }
  resumePlay() {
    recorder.resumePlay();
  }
  stopPlay() {
    recorder.stopPlay();
  }
  destroy() {
    recorder.destroy().then(function () {
      recorder = null;
    });
  }
  downloadPCM() {
    recorder.downloadPCM();
  }
  downloadWAV() {
    recorder.downloadWAV();
  }
  downloadMP3 = () => {

    const mp3Blob = this._convertToMp3(recorder.getWAV());

    console.log(mp3Blob);
    recorder.download(mp3Blob, 'recorder', 'mp3');

  }
  uploading() {
    fetch(this.props.url)

    // fetch(this.props.url, {
    //   method: 'PUT',
    //   body: recorder.getWAV()
    // })
    //   .then(response => response.json())
    //   .catch(error => console.error('Error:', error))
    //   .then(response => console.log('Success:', response));
  }

  _convertToMp3(wavDataView) {
    // 获取wav头信息
    const wav = lamejs.WavHeader.readHeader(wavDataView); // 此处其实可以不用去读wav头信息，毕竟有对应的config配置
    const { channels, sampleRate } = wav;
    console.log('wav', wav)
    const mp3enc = new lamejs.Mp3Encoder(channels, sampleRate, 128);
    // 获取左右通道数据
    const result = recorder.getChannelData()
    const buffer = [];

    const leftData = result.left && new Int16Array(result.left.buffer, 0, result.left.byteLength / 2);
    const rightData = result.right && new Int16Array(result.right.buffer, 0, result.right.byteLength / 2);
    const remaining = leftData.length + (rightData ? rightData.length : 0);

    const maxSamples = 1152;
    for (let i = 0; i < remaining; i += maxSamples) {
      const left = leftData.subarray(i, i + maxSamples);
      let right = null;
      let mp3buf = null;

      if (channels === 2) {
        right = rightData.subarray(i, i + maxSamples);
        mp3buf = mp3enc.encodeBuffer(left, right);
      } else {
        mp3buf = mp3enc.encodeBuffer(left);
      }

      if (mp3buf.length > 0) {
        buffer.push(mp3buf);
      }
    }

    const enc = mp3enc.flush();

    if (enc.length > 0) {
      buffer.push(enc);
    }

    return new Blob(buffer, { type: 'audio/mp3' });
  }
  render() {
    return (
      <div className="record">
        录音时长：{this.state.duration}
        文件大小：{this.state.fileSize}
        <div className="record-control-lu">
          <button onClick={() => this.start()}>开始录音</button>
          <button onClick={() => this.pause()}>暂停</button>
          <button onClick={() => this.resume()}>继续</button>
          <button onClick={() => this.stop()}>结束</button>
        </div>
        <div className='record-control-play'>
          <button onClick={() => this.play()}>播放</button>
          <button onClick={() => this.pausePlay()}>暂停播放</button>
          <button onClick={() => this.resumePlay()}>继续播放</button>
          <button onClick={() => this.stopPlay()}>停止播放</button>
          <button onClick={() => this.destroy()}>销毁该实例</button>
        </div>
        <div className='record-control-updown'>
          <button onClick={() => this.downloadPCM()}>下载pcm</button>
          <button onClick={() => this.downloadWAV()}>下载wav</button>
          <button onClick={() => this.downloadMP3()}>下载mp3</button>

          <button onClick={() => this.uploading()}>上传该条录音</button>

        </div>
      </div>
    );

  }
}
const RecordRender = Renderer({
  test: /(^|\/)record$/,
  name: "record"
})(Record)
export default RecordRender;