"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _text = _interopRequireDefault(require("../../atoms/text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @component
 * @private
 */
const FormMessage = (0, _styledComponents.default)(_text.default).withConfig({
  displayName: "form-message__FormMessage",
  componentId: "t6vn9f-0"
})(["box-sizing:border-box;vertical-align:middle;height:", ";margin:", " 0 0;font-weight:normal;font-size:", ";"], ({
  theme
}) => theme.space.xl, ({
  theme
}) => theme.space.sm, ({
  theme
}) => theme.fontSizes.sm);
var _default = FormMessage;
exports.default = _default;