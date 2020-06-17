"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoggedUser = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _box = require("../atoms/box");

var _index = require("./drop-down/index");

var _text = require("../atoms/text");

var _icon = require("../atoms/icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const height = '46px';
const LoggedUserInfo = (0, _styledComponents.default)(_box.Box).withConfig({
  displayName: "logged-user__LoggedUserInfo",
  componentId: "sc-18venfn-0"
})(["display:flex;flex-direction:row;vertical-align:middle;color:", ";height:", ";& img{border-radius:9999px;margin-right:0 8px;width:36px;height:36px;object-fit:cover;border-radius:9999px;}"], ({
  theme
}) => theme.colors.grey60, height);

const LoggedUser = props => {
  const {
    email,
    title,
    avatarUrl,
    children
  } = props;
  return _react.default.createElement(_index.DropDown, null, _react.default.createElement(_index.DropDownTrigger, null, _react.default.createElement(LoggedUserInfo, {
    pr: "xl"
  }, _react.default.createElement(_box.Box, {
    mr: "default"
  }, _react.default.createElement(_text.Text, {
    fontSize: "default",
    lineHeight: title ? 'lg' : 'xl',
    fontWeight: "normal"
  }, email), _react.default.createElement(_text.Text, {
    fontSize: "sm",
    color: "grey40",
    lineHeight: "sm"
  }, title)), avatarUrl ? _react.default.createElement("img", {
    src: avatarUrl,
    alt: "avatar"
  }) : null, _react.default.createElement(_icon.Icon, {
    icon: "OverflowMenuVertical",
    size: 16,
    my: "default",
    color: "grey60"
  }))), _react.default.createElement(_index.DropDownMenu, {
    top: height
  }, children));
};

exports.LoggedUser = LoggedUser;