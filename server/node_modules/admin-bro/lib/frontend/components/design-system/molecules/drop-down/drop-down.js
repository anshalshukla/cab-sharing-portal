"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DropDown = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const StyledDropDown = _styledComponents.default.div.withConfig({
  displayName: "drop-down__StyledDropDown",
  componentId: "nlvl2c-0"
})(["position:relative;display:inline-block;"]);
/**
 * Simple set of components allowing you to create a dropdowns.
 * Usage
 * ```javascript
 * import { DropDown, DropDownTrigger, DropDownMenu, DropDownItem } from 'admin-bro'
 * ```
 *
 * It contains couple of sub components:
 *
 * - DropDown - an actual wrapper for entire DropDown
 * - DropDownTrigger - it has to be right inside the DropDown.
 *   It is what user sees when the DropDown is not hovered
 * - DropDownMenu - wraps elements which are hidden by default.
 *   Shown after hovering Trigger
 * - DropDownMenuItem - it is a wrapper for a menu item list.
 *   It can next contain either Link or Button.
 *
 * Props:
 * - DropDownMenu extends {@link PositionProps}, so you can add prop like `top="xl"`
 * - DropDownItem extends {@link SpaceProps}
 * - DropDownTrigger also extends {@link SpaceProps}
 *
 * @example
 * return (
 *   <Box px="300px" pt="lg" pb="200px">
 *     <DropDown>
 *       <DropDownTrigger p="default">
 *         <Text as="span">This is trigger -> </Text>
 *         <Icon icon="OverflowMenuHorizontal" />
 *       </DropDownTrigger>
 *       <DropDownMenu top="xxl">
 *         <DropDownItem>
 *           <Link href="/some">
 *             <Icon icon="Video" />
 *             Some menu item
 *           </Link>
 *         </DropDownItem>
 *         <DropDownItem>
 *           <Link href="/some">Other item</Link>
 *         </DropDownItem>
 *       </DropDownMenu>
 *     </DropDown>
 *   </Box>
 * )
 * @component
 * @subcategory Molecules
 */


const DropDown = props => {
  const {
    children
  } = props;
  const [isVisible, setIsVisible] = (0, _react.useState)(false);

  const elements = _react.default.Children.map(children, child => {
    const type = child && child.type && child.type.displayName;

    if (type === 'DropDownTrigger') {
      return _react.default.cloneElement(child, {
        onMouseEnter: () => setIsVisible(true)
      });
    }

    if (type === 'DropDownMenu') {
      return _react.default.cloneElement(child, {
        isVisible
      });
    }

    return child;
  });

  return _react.default.createElement(StyledDropDown, {
    onMouseEnter: () => setIsVisible(true),
    onMouseLeave: () => setIsVisible(false)
  }, elements);
};

exports.DropDown = DropDown;
var _default = DropDown;
exports.default = _default;