"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _actionButton = _interopRequireDefault(require("./action-button"));

var _viewHelpers = _interopRequireDefault(require("../../../backend/utils/view-helpers"));

var _useTranslation = require("../../hooks/use-translation");

var _designSystem = require("../design-system");

var _breadcrumbs = _interopRequireDefault(require("./breadcrumbs"));

var _cssClass = require("../design-system/utils/css-class");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StyledLink = (0, _styledComponents.default)(({
  rounded,
  ...rest
}) => _react.default.createElement(_reactRouterDom.Link, rest)).withConfig({
  displayName: "action-header__StyledLink",
  componentId: "sc-17u6jqx-0"
})(["", ""], _designSystem.ButtonCSS);
/**
 * Header of an action. It renders Action name with buttons for all the actions.
 *
 * @component
 * @subcategory Application
 */

const ActionHeader = props => {
  const {
    translateButton
  } = (0, _useTranslation.useTranslation)();
  const h = new _viewHelpers.default();
  const {
    resource,
    toggleFilter,
    actionPerformed,
    record,
    action,
    tag,
    omitActions
  } = props;

  if (action.hideActionHeader) {
    return null;
  }

  const resourceId = resource.id;
  const actions = record ? record.recordActions.filter(ra => !action || action.name !== ra.name) // only new action should be seen in regular "Big" actions place
  : resource.resourceActions.filter(ra => ra.name === 'new' && (!action || action.name !== ra.name)); // list and new actions are special and are are always

  const customResourceActions = resource.resourceActions.filter(ra => !['list', 'new'].includes(ra.name));
  const title = action ? action.label : resource.name;
  const isList = action && action.name === 'list';
  const listAction = resource.resourceActions.find(ra => ra.name === 'list'); // styled which differs if action header is in the drawer or not

  const cssIsRootFlex = !action.showInDrawer;
  const cssHeaderMT = action.showInDrawer ? '' : 'lg';
  const cssCloseIcon = action.showInDrawer ? 'ChevronRight' : 'ChevronLeft';
  const cssActionButtonSize = action.showInDrawer ? 'sm' : 'lg';
  const cssActionsMB = action.showInDrawer ? 'xl' : 'default';
  const CssHComponent = action.showInDrawer ? _designSystem.H3 : _designSystem.H2;
  return _react.default.createElement(_designSystem.Box, {
    className: (0, _cssClass.cssClass)('ActionHeader')
  }, action.showInDrawer ? '' : _react.default.createElement(_designSystem.Box, {
    flex: true,
    flexDirection: "row",
    px: ['default', 0]
  }, _react.default.createElement(_breadcrumbs.default, {
    resource: resource,
    actionName: action.name,
    record: record
  }), _react.default.createElement(_designSystem.Box, {
    flexShrink: 0
  }, customResourceActions.map(customAction => _react.default.createElement(_actionButton.default, {
    action: customAction,
    key: customAction.name,
    resourceId: resource.id
  }, _react.default.createElement(_designSystem.Link, {
    as: "span",
    ml: "lg"
  }, customAction.icon ? _react.default.createElement(_designSystem.Icon, {
    icon: customAction.icon
  }) : null, customAction.label))))), _react.default.createElement(_designSystem.Box, {
    display: ['block', cssIsRootFlex ? 'flex' : 'block']
  }, _react.default.createElement(_designSystem.Box, {
    mt: cssHeaderMT,
    flexGrow: 1,
    px: ['default', 0]
  }, _react.default.createElement(CssHComponent, {
    mb: "lg"
  }, !isList && listAction ? _react.default.createElement(StyledLink, {
    size: "icon",
    to: h.resourceUrl({
      resourceId,
      search: window.location.search
    }),
    rounded: true,
    mr: "lg",
    type: "button"
  }, _react.default.createElement(_designSystem.Icon, {
    icon: cssCloseIcon
  })) : '', title, tag ? _react.default.createElement(_designSystem.Badge, {
    variant: "primary",
    ml: "default"
  }, tag) : '')), omitActions ? '' : _react.default.createElement(_designSystem.Box, {
    mt: "xl",
    mb: cssActionsMB,
    flexShrink: 0
  }, actions.map(headerAction => _react.default.createElement(_actionButton.default, {
    action: headerAction,
    key: headerAction.name,
    actionPerformed: actionPerformed,
    resourceId: resource.id,
    recordId: record && record.id
  }, _react.default.createElement(_designSystem.Button, {
    as: "span",
    mr: action.showInDrawer ? 'default' : '',
    ml: !action.showInDrawer ? 'default' : '',
    mb: "default",
    variant: headerAction.name === 'new' ? 'primary' : undefined,
    size: cssActionButtonSize
  }, headerAction.icon ? _react.default.createElement(_designSystem.Icon, {
    icon: headerAction.icon
  }) : null, headerAction.label))), toggleFilter && _react.default.createElement(_designSystem.Button, {
    onClick: toggleFilter,
    ml: "default"
  }, _react.default.createElement(_designSystem.Icon, {
    icon: "SettingsAdjust"
  }), translateButton('filter', resource.id)))));
};

var _default = ActionHeader;
exports.default = _default;