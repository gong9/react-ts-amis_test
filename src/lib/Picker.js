"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _emojione = _interopRequireDefault(require("emojione"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCustomScrollbars = require("react-custom-scrollbars");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n  cursor: pointer;\n\n  img {\n    opacity: ", ";\n    height: 24px !important;\n    width: 24px !important;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin: 0 0.8rem;\n  padding-bottom: 6px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  border-bottom:1px solid #d7d9d4 ;   \n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.21rem;\n  img {\n    height: 24px !important;\n    width: 24px !important;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0.8rem;\n  border-radius: 2px;\n  align-items: baseline;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  .emoji-conntent{\n    width: 180px;\n    hight: 160px\n  }\n  .emoji-conntent-conntent{\n    position: relative;\n  }\n   \n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* list of emoji's sourced from http://getemoji.com */
var PEOPLE_EMOJIS = ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '😇', '🤣',  '😊', '🙂', '🙃', '😉', '😌', '😍', '😘', '😗', '😙', '😚', '😋', '😜', '😝', '😛', '🤑', '🤗', '🤓', '😎', '🤡', '🤠', '😏', '😒', '😞', '😔', '😟', '😕', '🙁', '☹️', '😣', '😖', '😫', '😩', '😤', '😠', '😡', '😶', '😐', '😑', '😯', '😦', '😧', '😮', '😲', '😵', '😳', '😱', '😨', '😰', '😢', '😥', '🤤', '😭', '😓', '😪', '😴', '🙄', '🤔', '🤥', '😬', '🤐', '🤢', '🤧', '😷', '🤒', '🤕', '😈', '👿', '👹', '👺', '💩', '👻', '💀', '☠️', '👽', '👾', '🤖', '🎃', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾', '👐', '🙌', '👏', '🙏', '🤝', '👍', '👎', '👊', '✊', '🤛', '🤜', '🤞', '✌️', '🤘', '👌', '👈', '👉', '👆', '👇', '☝️', '✋', '🤚', '🖐', '🖖', '👋', '🤙', '💪', '🖕', '✍️', '🤳', '💅', '🖖', '💄', '💋', '👄', '👅', '👂', '👃', '👣', '👁', '👀', '👗', '👠', '👞', '👟', '👒', '🎩', '🎓', '👑', '⛑', '🎒', '👝', '👛', '👜', '💼', '👓', '🕶', '☂️'];
var ANIMALS_NATURE_EMOJIS = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐽', '🐸', '🐵', '🙊', '🙉', '🙊', '🐒', '🐔', '🐧', '🐦', '🐤', '🐣', '🐥', '🦆', '🦅', '🦉', '🦇', '🐺', '🐗', '🐴', '🦄', '🐝', '🐛', '🦋', '🐌', '🐚', '🐞', '🐜', '🕷', '🕸', '🐢', '🐍', '🦎', '🦂', '🦀', '🦑', '🐙', '🦐', '🐠', '🐟', '🐡', '🐬', '🦈', '🐳', '🐋', '🐊', '🐆', '🐅', '🐃', '🐂', '🐄', '🦌', '🐪', '🐫', '🐘', '🦏', '🦍', '🐎', '🐖', '🐐', '🐏', '🐑', '🐕', '🐩', '🐈', '🐓', '🦃', '🕊', '🐇', '🐁', '🐀', '🐿', '🐾', '🐉', '🐲', '🌵', '🎄', '🌲', '🌳', '🌴', '🌱', '🌿', '☘️', '🍀', '🎍', '🎋', '🍃', '🍂', '🍁', '🍄', '🌾', '💐', '🌷', '🌹', '🥀', '🌻', '🌼', '🌸', '🌺', '🌎', '🌍', '🌏', '🌕', '🌖', '🌔', '🌚', '🌝', '🌞', '🌛', '🌜', '🌙', '💫', '⭐️', '🌟', '✨', '⚡️', '🔥', '💥', '☄️', '☀️', '🌤', '⛅️', '🌥', '🌦', '🌈', '☁️', '🌧', '⛈', '🌩', '🌨', '☃️', '⛄️', '❄️', '🌬', '💨', '🌪', '🌫', '🌊', '💧', '💦', '☔️'];
var FOOD_SPORTS_EMOJIS = ['🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈', '🍒', '🍑', '🍍', '🥝', '🥑', '🍅', '🍆', '🥒', '🥕', '🌽', '🌶', '🥔', '🍠', '🌰', '🥜', '🍯', '🥐', '🍞', '🥖', '🧀', '🥚', '🍳', '🥓', '🥞', '🍤', '🍗', '🍖', '🍕', '🌭', '🍔', '🍟', '🥙', '🌮', '🌯', '🥗', '🥘', '🍝', '🍜', '🍲', '🍥', '🍣', '🍱', '🍛', '🍚', '🍙', '🍘', '🍢', '🍡', '🍧', '🍨', '🍦', '🍰', '🎂', '🍮', '🍭', '🍬', '🍫', '🍿', '🍩', '🍪', '🥛', '🍼', '☕️', '🍵', '🍶', '🍺', '🍻', '🥂', '🍷', '🥃', '🍸', '🍹', '🍾', '🥄', '🍴', '🍽', '⚽️', '🏀', '🏈', '⚾️', '🎾', '🏐', '🏉', '🎱', '🏓', '🏸', '🥅', '🏒', '🏑', '🏏', '⛳️', '🏹', '🎣', '🥊', '🥋', '⛸', '🎿', '⛷', '🏂', '🏋', '🤺', '⛹️', '🏌', '🏄', '🏊', '🤽', '🚣', '🏇', '🚴', '🚵', '🎬', '🎤', '🎧', '🎼', '🎹', '🥁', '🎷', '🎺', '🎸', '🎻', '🎲', '🎯', '🎳', '🎮', '🏳', '🏴', '🏁', '🚩', '🎽', '🥇', '🥈', '🥉', '🏆'];
var TRAVEL_PLACES_EMOJIS = ['🚗', '🚕', '🚙', '🚌', '🚎', '🏎', '🚓', '🚑', '🚒', '🚐', '🚚', '🚛', '🚜', '🛴', '🚲', '🛵', '🏍', '🚨', '🚔', '🚍', '🚘', '🚖', '🚡', '🚠', '🚟', '🚃', '🚋', '🚞', '🚝', '🚄', '🚅', '🚈', '🚂', '🚆', '🚇', '🚊', '🚉', '🚁', '🛩', '✈️', '🛫', '🛬', '🚀', '🛰', '💺', '🛶', '⛵️', '🛥', '🚤', '🛳', '⛴', '🚢', '⚓️', '🚧', '⛽️', '🚏', '🚦', '🚥', '🗺', '🗿', '🗽', '⛲️', '🗼', '🏰', '🏯', '🏟', '🎡', '🎢', '🎠', '⛱', '🏖', '🏝', '⛰', '🏔', '🗻', '🌋', '🏜', '🏕', '⛺️', '🛤', '🛣', '🏗', '🏭', '🏠', '🏡', '🏘', '🏚', '🏢', '🏬', '🏣', '🏤', '🏥', '🏦', '🏨', '🏪', '🏫', '🏩', '💒', '🏛', '⛪️', '🕌', '🕍', '🕋', '⛩', '🗾', '🎑', '🏞', '🌅', '🌄', '🌠', '🎇', '🎆', '🌇', '🌆', '🏙', '🌃', '🌌', '🌉', '🌁', '🎭', '🎨'];
var OBJECTS_EMOJIS = ['🆓', '📗', '📕', '⌚️', '📱', '📲', '💻', '⌨️', '🖥', '🖨', '🖱', '🖲', '🕹', '🗜', '💽', '💾', '💿', '📀', '📼', '📷', '📸', '📹', '🎥', '📽', '🎞', '📞', '☎️', '📟', '📠', '📺', '📻', '🎙', '🎚', '🎛', '⏱', '⏲', '⏰', '🕰', '⌛️', '⏳', '📡', '🔋', '🔌', '💡', '🔦', '🕯', '🗑', '🛢', '💸', '💵', '💴', '💶', '💷', '💰', '💳', '💎', '⚖️', '🔧', '🔨', '⚒', '⛏', '⚙️', '💣', '🔪', '🗡', '⚔️', '🛡', '🚬', '⚰️', '⚱️', '🏺', '🔮', '📿', '💈', '⚗️', '🔭', '🔬', '🕳', '💊', '💉', '🌡', '🚽', '🚰', '🚿', '🛁', '🛀', '🛎', '🔑', '🗝', '🚪', '🛋', '🛏', '🖼', '🛍', '🛒', '🎁', '🎈', '🎏', '🎀', '🎊', '🎉', '🎎', '🏮', '🎐', '✉️', '📪', '📮', '📯', '📜', '📃', '📄', '📑', '📊', '📈', '📉', '🗒', '🗓', '📆', '📅', '📇', '🗃', '🗳', '🗄', '📋', '🗞', '📰', '📘', '📚', '📖', '🔖', '🔗', '📎', '📐', '📏', '📍', '📌', '🖊', '🖌', '🖍', '📝', '✏️', '🔍', '🔓'];
var SYMBOLS_FLAGS_EMOJIS = ['❤️', '💛', '💚', '💙', '💜', '🖤', '💔', '❣️', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '☮️', '✝️', '☪️', '🕉', '☸️', '✡️', '🔯', '🕎', '☯️', '☦️', '🛐', '⛎', '♈️', '♉️', '♊️', '♋️', '♌️', '♍️', '♎️', '♏️', '♐️', '♑️', '♒️', '♓️', '🆔', '⚛️', '🉑', '☢️', '☣️', '📴', '📳', '🈶', '🈚', '🈸', '🈺', '🈷', '✴️', '🆚', '💮', '🉐', '㊙️', '㊗️', '🈴', '🈵', '🈹', '🈲', '❌', '⭕️', '🛑', '⛔️', '📛', '🚫', '💯', '💢', '♨️', '🚷', '🚯', '🚳', '🚱', '🔞', '📵', '🚭', '❕', '❔', '‼️', '⁉️', '🔅', '🔆', '〽️', '⚠️', '🚸', '🔱', '⚜️', '🔰', '♻️', '✅', '🈯', '💹', '❇️', '✳️', '❎', '🌐', '💠', 'Ⓜ️', '🌀', '💤', '🚺', '🚼', '🎵', '🎶', '➕', '➖', '➗', '✖️', '💲', '💱', '™️', '©️', '®️', '〰️', '➰', '➿', '🔚', '🔙', '🔛', '🔝', '✔️', '☑️', '🔈', '🔇', '🔉', '🔊', '🔔', '🔕', '📣', '📢', '🗨', '💬', '💭', '🗯', '♠️', '♣️', '♥️', '♦️', '🃏', '🎴', '🀄'];

var _default = /*#__PURE__*/function (_Component) {
  _inherits(_default, _Component);

  var _super = _createSuper(_default);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _super.call(this, props);
    _this.state = {
      emojis: PEOPLE_EMOJIS,
      emojiCategory: 'PEOPLE_EMOJIS'
    };
    return _this;
  }

  _createClass(_default, [{
    key: "toggleEmojis",
    value: function toggleEmojis(emoji) {
      switch (emoji) {
        case 'PEOPLE_EMOJIS':
          this.setState({
            emojis: PEOPLE_EMOJIS,
            emojiCategory: 'PEOPLE_EMOJIS'
          });
          break;

        case 'ANIMALS_NATURE_EMOJIS':
          this.setState({
            emojis: ANIMALS_NATURE_EMOJIS,
            emojiCategory: 'ANIMALS_NATURE_EMOJIS'
          });
          break;

        case 'FOOD_SPORTS_EMOJIS':
          this.setState({
            emojis: FOOD_SPORTS_EMOJIS,
            emojiCategory: 'FOOD_SPORTS_EMOJIS'
          });
          break;

        case 'TRAVEL_PLACES_EMOJIS':
          this.setState({
            emojis: TRAVEL_PLACES_EMOJIS,
            emojiCategory: 'TRAVEL_PLACES_EMOJIS'
          });
          break;

        case 'OBJECTS_EMOJIS':
          this.setState({
            emojis: OBJECTS_EMOJIS,
            emojiCategory: 'OBJECTS_EMOJIS'
          });
          break;

        case 'SYMBOLS_FLAGS_EMOJIS':
          this.setState({
            emojis: SYMBOLS_FLAGS_EMOJIS,
            emojiCategory: 'SYMBOLS_FLAGS_EMOJIS'
          });
          break;

        default:
          this.setState({
            emojis: PEOPLE_EMOJIS,
            emojiCategory: 'PEOPLE_EMOJIS'
          });
      }
    }
  }, {
    key: "onEmojiSelect",
    value: function onEmojiSelect(e) {
      if (e.target.alt === undefined) {
        return;
      }

      var emoji = {
        image: e.target,
        unicode: e.target.alt,
        shortname: e.target.title
      };
      this.props.onEmojiSelected(emoji);
    }
  }, {
    key: "renderTabs",
    value: function renderTabs() {
      var _this2 = this;

      var emojiCategory = this.state.emojiCategory;
      return /*#__PURE__*/_react.default.createElement(Tabs, null, /*#__PURE__*/_react.default.createElement(Title, {
        selected: emojiCategory === 'PEOPLE_EMOJIS',
        onClick: function onClick() {
          _this2.toggleEmojis('PEOPLE_EMOJIS');
        },
        dangerouslySetInnerHTML: {
          __html: _emojione.default.unicodeToImage('😀')
        }
      }), /*#__PURE__*/_react.default.createElement(Title, {
        selected: emojiCategory === 'ANIMALS_NATURE_EMOJIS',
        onClick: function onClick() {
          _this2.toggleEmojis('ANIMALS_NATURE_EMOJIS');
        },
        dangerouslySetInnerHTML: {
          __html: _emojione.default.unicodeToImage('🦊')
        }
      }), /*#__PURE__*/_react.default.createElement(Title, {
        selected: emojiCategory === 'FOOD_SPORTS_EMOJIS',
        onClick: function onClick() {
          _this2.toggleEmojis('FOOD_SPORTS_EMOJIS');
        },
        dangerouslySetInnerHTML: {
          __html: _emojione.default.unicodeToImage('🍏')
        }
      }), /*#__PURE__*/_react.default.createElement(Title, {
        selected: emojiCategory === 'TRAVEL_PLACES_EMOJIS',
        onClick: function onClick() {
          _this2.toggleEmojis('TRAVEL_PLACES_EMOJIS');
        },
        dangerouslySetInnerHTML: {
          __html: _emojione.default.unicodeToImage('🚗')
        }
      }), /*#__PURE__*/_react.default.createElement(Title, {
        selected: emojiCategory === 'OBJECTS_EMOJIS',
        onClick: function onClick() {
          _this2.toggleEmojis('OBJECTS_EMOJIS');
        },
        dangerouslySetInnerHTML: {
          __html: _emojione.default.unicodeToImage('💎')
        }
      }), /*#__PURE__*/_react.default.createElement(Title, {
        selected: emojiCategory === 'SYMBOLS_FLAGS_EMOJIS',
        onClick: function onClick() {
          _this2.toggleEmojis('SYMBOLS_FLAGS_EMOJIS');
        },
        dangerouslySetInnerHTML: {
          __html: _emojione.default.unicodeToImage('❤️')
        }
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var emojis = this.state.emojis;
      return /*#__PURE__*/_react.default.createElement(Wrapper, null, /*#__PURE__*/_react.default.createElement("div", {
        className: "emoji-conntent"
      }, /*#__PURE__*/_react.default.createElement(_reactCustomScrollbars.Scrollbars, {
        style: {
          height: '160px'
        },
        autoHide: true
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "emoji-conntent-emoji"
      }, /*#__PURE__*/_react.default.createElement(EmojiWrapper, null, emojis.map(function (emoji, index) {
        return /*#__PURE__*/_react.default.createElement(Emoji, {
          className: "ld-emoji",
          key: index,
          role: "presentation",
          onClick: _this3.onEmojiSelect.bind(_this3),
          dangerouslySetInnerHTML: {
            __html: _emojione.default.unicodeToImage(emoji)
          }
        });
      }))))));
    }
  }], [{
    key: "propTypes",
    get: function get() {
      return {
        onEmojiSelected: _propTypes.default.func.isRequired,
        visible: _propTypes.default.bool,
        modal: _propTypes.default.bool
      };
    }
  }, {
    key: "defaultProps",
    get: function get() {
      return {
        visible: true,
        modal: false
      };
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;

var Wrapper = _styledComponents.default.div(_templateObject());

var EmojiWrapper = _styledComponents.default.div(_templateObject2());

var Emoji = _styledComponents.default.span(_templateObject3());

var Tabs = _styledComponents.default.div(_templateObject4());

var Title = _styledComponents.default.p(_templateObject5(), function (props) {
  return props.selected ? '1' : '0.5';
});