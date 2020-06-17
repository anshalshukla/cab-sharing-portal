"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  useResourceEdit: true,
  useResourceNew: true,
  updateRecord: true
};
Object.defineProperty(exports, "useResourceEdit", {
  enumerable: true,
  get: function () {
    return _useResourceEdit.default;
  }
});
Object.defineProperty(exports, "useResourceNew", {
  enumerable: true,
  get: function () {
    return _useResourceNew.default;
  }
});
Object.defineProperty(exports, "updateRecord", {
  enumerable: true,
  get: function () {
    return _updateRecord.default;
  }
});

var _useResourceEdit = _interopRequireDefault(require("./use-resource-edit"));

var _useResourceNew = _interopRequireDefault(require("./use-resource-new"));

var _useSelectedRecords = require("./use-selected-records");

Object.keys(_useSelectedRecords).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useSelectedRecords[key];
    }
  });
});

var _useNotice = require("./use-notice");

Object.keys(_useNotice).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useNotice[key];
    }
  });
});

var _useTranslation = require("./use-translation");

Object.keys(_useTranslation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useTranslation[key];
    }
  });
});

var _useRecord = require("./use-record");

Object.keys(_useRecord).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useRecord[key];
    }
  });
});

var _useRecords = require("./use-records");

Object.keys(_useRecords).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useRecords[key];
    }
  });
});

var _useCurrentAdmin = require("./use-current-admin");

Object.keys(_useCurrentAdmin).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useCurrentAdmin[key];
    }
  });
});

var _updateRecord = _interopRequireDefault(require("./update-record"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }