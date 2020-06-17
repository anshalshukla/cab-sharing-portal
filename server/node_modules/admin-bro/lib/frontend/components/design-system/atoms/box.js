"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Box = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _cssClass = require("../utils/css-class");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const variants = (0, _styledSystem.variant)({
  variants: {
    grey: {
      flexGrow: 1,
      bg: 'bg',
      py: 'xl',
      px: ['0', 'xl'],
      className: (0, _cssClass.cssClass)(['Box', 'Box_Grey'])
    },
    white: {
      px: ['default', 'xxl'],
      py: 'xxl',
      bg: 'white',
      className: (0, _cssClass.cssClass)(['Box', 'Box_White'])
    }
  }
});

/**
 * Main component which allows you to define entire layout of the application
 *
 * @component
 * @subcategory Atoms
 * @example <caption>Simple White/Gray wrapper</caption>
 * return (
 * <Box variant="grey">
 *   <Box variant="white">
 *     <Text>This is the default wrapper in the application</Text>
 *   </Box>
 * </Box>
 * )
 * @example <caption>Positioning buttons</caption>
 * return (
 * <Box variant="grey">
 *   <Box variant="white" flex flexDirection="row">
 *     <Box flexGrow={1}>
 *       <Header.H3>Some header</Header.H3>
 *     </Box>
 *     <Box flexShrink={0}>
 *       <Button>Example Button On The Right</Button>
 *     </Box>
 *   </Box>
 * </Box>
 * )
 */
const Box = _styledComponents.default.section.withConfig({
  displayName: "box__Box",
  componentId: "sc-2cgj74-0"
})(["box-sizing:border-box;min-width:0;", " font-family:", ";line-height:", ";font-size:", ";font-weight:normal;", ";", ";", ";", ";", ";", ";", ";", ";", ";"], ({
  flex
}) => flex && typeof flex === 'boolean' ? 'display: flex;' : '', ({
  theme
}) => theme.font, ({
  theme
}) => theme.lineHeights.default, ({
  theme
}) => theme.fontSizes.default, ({
  animate
}) => animate ? 'transition: all 500ms;' : '', _styledSystem.space, _styledSystem.color, _styledSystem.layout, _styledSystem.flexbox, _styledSystem.border, _styledSystem.shadow, _styledSystem.position, variants);

exports.Box = Box;
Box.defaultProps = {
  className: (0, _cssClass.cssClass)('Box')
};
var _default = Box;
exports.default = _default;