"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Drawer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _drawerFooter = _interopRequireDefault(require("./drawer-footer"));

var _cssClass = require("../../utils/css-class");

var _constants = require("../../../../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-shadow */
const variants = (0, _styledSystem.variant)({
  variants: {
    filter: {
      bg: 'filterBg',
      width: '400px',
      color: 'white',
      className: (0, _cssClass.cssClass)(['Drawer', 'Drawer_Filter'])
    }
  }
});
/**
 * Drawer component renders a huge side area where {@link BaseActionComponent} renders
 * all actions where {@link Action.showInDrawer} is set to true.
 *
 * You probably don't want to use it directly in your actions, but if you decide to set
 * `showInDrawer` to true you will probably want to use `DrawerContent` or `DrawerFooter`
 * components.
 *
 * All these components: Drawer, DrawerContent and Drawer Footer extends {@link SpaceProps}.
 *
 * Usage
 * ```javascript
 * import { Drawer, DrawerProps, DrawerContent, DrawerFooter } from 'admin-bro
 * ```
 *
 * @component
 * @subcategory Molecules
 * @example
 * return (
 * <Box height="500px">
 *   <Drawer>
 *     <DrawerContent>
 *       <Header.H3>
 *         <Button size="icon" rounded mr="lg">
 *           <Icon icon="ChevronRight" />
 *         </Button>
 *         Edit
 *       </Header.H3>
 *       <Box my="x3" p={0}>
 *         <Button size="sm">
 *           <Icon icon="Information" />
 *           Info
 *         </Button>
 *         <Button size="sm" ml="lg">
 *           <Icon icon="Delete" />
 *           Delete
 *         </Button>
 *       </Box>
 *
 *     </DrawerContent>
 *     <DrawerFooter>
 *       <Button variant="primary">
 *         Save
 *       </Button>
 *     </DrawerFooter>
 *   </Drawer>
 * </Box>
 * )
 */

const Drawer = _styledComponents.default.section.withConfig({
  displayName: "drawer__Drawer",
  componentId: "cg2yfu-0"
})(["z-index:100;position:fixed;display:flex;flex-direction:column;top:0;right:", ";&.hidden{right:", ";}box-shadow:0 3px 6px ", ";height:100%;overflow-y:auto;overflow-x:hidden;transition:all 500ms;background:", ";box-sizing:border-box;& > ", "{border-top:1px solid ", ";", ";}max-width:100%;", ";", ";", ";"], ({
  isHidden,
  width
}) => isHidden ? `-${width === null || width === void 0 ? void 0 : width.toString()}` : '0px;', ({
  width
}) => `-${width === null || width === void 0 ? void 0 : width.toString()}`, ({
  theme
}) => theme.colors.grey40, ({
  theme
}) => theme.colors.white, _drawerFooter.default, ({
  theme
}) => theme.colors.primary20, ({
  variant,
  theme
}) => variant === 'filter' ? `border-color: ${theme.colors.filterInputBorder}` : '', _styledSystem.space, _styledSystem.layout, variants);

exports.Drawer = Drawer;
Drawer.defaultProps = {
  width: _constants.DEFAULT_DRAWER_WIDTH,
  className: (0, _cssClass.cssClass)('Drawer')
};
var _default = Drawer;
exports.default = _default;