"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DropZoneItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _box = require("../../atoms/box");

var _icon = require("../../atoms/icon");

var _button = require("../../atoms/button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DropZoneImg = _styledComponents.default.div.withConfig({
  displayName: "drop-zone-item__DropZoneImg",
  componentId: "sc-1nsf303-0"
})(["width:80px;height:80px;margin-right:", ";background-image:url(", ");background-size:cover;background-repeat:no-repeat;background-position:50% 50%;display:inline-block;"], ({
  theme
}) => theme.space.lg, ({
  src
}) => src);
/**
 * @memberof DropZoneItem
 * @alias DropZoneItemProps
 */


/**
 * Single uploaded file. Usually it is used within {@link DropZone}, but it can also be
 * reused anywhere
 *
 * @example
 * return (
 *  <DropZoneItem
 *    src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.npr.org%2F2019%2F05%2F17%2F724262019%2Fgrumpy-cat-dies-her-spirit-will-live-on-family-says&psig=AOvVaw2ZKtTEZr8N43fx9x-lTITa&ust=1581083274368000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKidqqyIvecCFQAAAAAdAAAAABAD"
 *    filename="shut-up-it-works.png"
 *  />
 * )
 * @component
 * @subcategory Molecules
 */
const DropZoneItem = props => {
  const {
    file,
    onRemove,
    filename
  } = props;
  let {
    src
  } = props;

  if (file && ['image/png', 'image/jpeg', 'image/gif'].includes(file.type)) {
    src = URL.createObjectURL(file);
  }

  return _react.default.createElement(_box.Box, {
    bg: "grey20",
    px: "lg",
    py: "default",
    mt: "default",
    flex: true,
    alignItems: "center"
  }, _react.default.createElement(_icon.Icon, {
    icon: "Attachment",
    mr: "default"
  }), src ? _react.default.createElement(DropZoneImg, {
    src: src
  }) : '', _react.default.createElement(_box.Box, {
    flexGrow: 1
  }, (file === null || file === void 0 ? void 0 : file.name) || filename), onRemove && _react.default.createElement(_button.Button, {
    variant: "text",
    m: "-8px",
    size: "icon",
    type: "button",
    onClick: () => onRemove && onRemove()
  }, _react.default.createElement(_icon.Icon, {
    icon: "Close"
  })));
};

exports.DropZoneItem = DropZoneItem;
var _default = DropZoneItem;
exports.default = _default;