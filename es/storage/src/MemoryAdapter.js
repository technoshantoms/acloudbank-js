import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import Adapter from "./Adapter";
import { sha256 } from "../../ecc/src/hash";

/**
 * Memory client adapter for CloudStorage class.
 * Implemented for testing purposes.
 */
var MemoryAdapter = /*#__PURE__*/function (_Adapter) {
  _inheritsLoose(MemoryAdapter, _Adapter);
  /**
   * @param {*} options required options: {}
   */
  function MemoryAdapter(options) {
    var _this;
    if (options === void 0) {
      options = {};
    }
    _this = _Adapter.call(this, options) || this;
    _this.memory = {};
    return _this;
  }

  /**
   * Store the passed value
   *
   * @param {string|Buffer} val
   * @param {Object} options
   * @returns {Promise<String>}
   */
  var _proto = MemoryAdapter.prototype;
  _proto.put =
  /*#__PURE__*/
  function () {
    var _put = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(val, options) {
      var id;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (options === void 0) {
              options = {};
            }
            id = sha256(val, 'hex');
            this.memory[id] = val;
            return _context.abrupt("return", id);
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee, this);
    }));
    function put(_x, _x2) {
      return _put.apply(this, arguments);
    }
    return put;
  }()
  /**
   * Retrieve the value for the passed key
   *
   * @param {String} key
   * @param {Object} options
   * @returns {Promise<Buffer>}
   */
  ;
  _proto.get =
  /*#__PURE__*/
  function () {
    var _get = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(key, options) {
      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (options === void 0) {
              options = {};
            }
            return _context2.abrupt("return", this.memory[key]);
          case 2:
          case "end":
            return _context2.stop();
        }
      }, _callee2, this);
    }));
    function get(_x3, _x4) {
      return _get.apply(this, arguments);
    }
    return get;
  }()
  /**
   * Remove the record for the passed key
   *
   * @param {String} key
   * @param {Object} options
   * @returns {Promise<boolean>}
   */
  ;
  _proto["delete"] =
  /*#__PURE__*/
  function () {
    var _delete2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(key, options) {
      var _this2 = this;
      return _regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (options === void 0) {
              options = {};
            }
            return _context3.abrupt("return", new Promise(function (resolve, reject) {
              delete _this2.memory[key];
              resolve();
            }));
          case 2:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    function _delete(_x5, _x6) {
      return _delete2.apply(this, arguments);
    }
    return _delete;
  }();
  return MemoryAdapter;
}(Adapter);
export default MemoryAdapter;