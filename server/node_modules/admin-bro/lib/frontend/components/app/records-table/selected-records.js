"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _actionButton = _interopRequireDefault(require("../action-button"));

var _getBulkActionsFromRecords = _interopRequireDefault(require("./utils/get-bulk-actions-from-records"));

var _designSystem = require("../../design-system");

var _hooks = require("../../../hooks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SelectedRecords = props => {
  const {
    resource,
    selectedRecords
  } = props;
  const {
    translateLabel
  } = (0, _hooks.useTranslation)();

  if (!selectedRecords || !selectedRecords.length) {
    return null;
  }

  const bulkActions = (0, _getBulkActionsFromRecords.default)(selectedRecords);
  return _react.default.createElement(_designSystem.TableCaption, null, _react.default.createElement(_designSystem.Text, {
    as: "span",
    mr: "lg"
  }, translateLabel('selectedRecords', resource.id, {
    selected: selectedRecords.length
  })), bulkActions.map(action => _react.default.createElement(_actionButton.default, {
    action: action,
    key: action.name,
    resourceId: resource.id,
    recordIds: selectedRecords.map(records => records.id)
  }, _react.default.createElement(_designSystem.Button, {
    variant: "text",
    size: "sm"
  }, _react.default.createElement(_designSystem.Icon, {
    icon: action.icon
  }), action.label))));
};

var _default = SelectedRecords;
exports.default = _default;