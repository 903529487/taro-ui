"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/prop-types/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = require("../../npm/classnames/index.js");

var _index6 = _interopRequireDefault(_index5);

var _component = require("../../common/component.js");

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AtSwitch = function (_AtComponent) {
  _inherits(AtSwitch, _AtComponent);

  function AtSwitch() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtSwitch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtSwitch.__proto__ || Object.getPrototypeOf(AtSwitch)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "checked", "color", "title"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtSwitch, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(AtSwitch.prototype.__proto__ || Object.getPrototypeOf(AtSwitch.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      this.__triggerPropsFn("onChange", [null].concat([e.detail.value]));
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};

      _objectDestructuringEmpty(this);

      var _props = this.__props,
          customStyle = _props.customStyle,
          className = _props.className,
          disabled = _props.disabled,
          border = _props.border,
          title = _props.title,
          checked = _props.checked,
          color = _props.color;


      var anonymousState__temp = (0, _index6.default)({
        'at-switch': true,
        'at-switch--without-border': !border
      }, className);
      var anonymousState__temp2 = (0, _index.internal_inline_style)(customStyle);
      var anonymousState__temp3 = (0, _index6.default)({
        'at-switch__container': true,
        'at-switch--disabled': disabled
      });
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        checked: checked,
        color: color,
        title: title
      });
      return this.__state;
    }
  }]);

  return AtSwitch;
}(_component2.default);

AtSwitch.properties = {
  "__fn_onChange": {
    "type": null,
    "value": null
  },
  "customStyle": {
    "type": null,
    "value": null
  },
  "className": {
    "type": null,
    "value": null
  },
  "disabled": {
    "type": null,
    "value": null
  },
  "border": {
    "type": null,
    "value": null
  },
  "title": {
    "type": null,
    "value": null
  },
  "checked": {
    "type": null,
    "value": null
  },
  "color": {
    "type": null,
    "value": null
  }
};
AtSwitch.$$events = ["handleChange"];
AtSwitch.defaultProps = {
  customStyle: '',
  className: '',
  title: '',
  color: '#6190e8',
  border: true,
  disabled: false,
  checked: false,
  onChange: function onChange() {}
};
AtSwitch.propTypes = {
  customStyle: _index4.default.oneOfType([_index4.default.object, _index4.default.string]),
  className: _index4.default.oneOfType([_index4.default.array, _index4.default.string]),
  title: _index4.default.string,
  color: _index4.default.string,
  checked: _index4.default.bool,
  border: _index4.default.bool,
  disabled: _index4.default.bool,
  onChange: _index4.default.func
};
exports.default = AtSwitch;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(AtSwitch));