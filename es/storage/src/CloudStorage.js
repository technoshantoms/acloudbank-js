import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import Adapter from './Adapter';
import { encrypt_buffer, decrypt_buffer, encrypt_content, decrypt_content, encrypt_object, decrypt_object } from './crypto';
var CloudStorage = /*#__PURE__*/function () {
  /**
   * 
   * @param {Adapter} adapter
   */
  function CloudStorage(adapter) {
    this.client = adapter;
  }
  var _proto = CloudStorage.prototype;
  _proto.connect = /*#__PURE__*/function () {
    var _connect = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", this.client.open());
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee, this);
    }));
    function connect() {
      return _connect.apply(this, arguments);
    }
    return connect;
  }();
  _proto.disconnect = /*#__PURE__*/function () {
    var _disconnect = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", this.client.close());
          case 1:
          case "end":
            return _context2.stop();
        }
      }, _callee2, this);
    }));
    function disconnect() {
      return _disconnect.apply(this, arguments);
    }
    return disconnect;
  }();
  _proto.crypto_save_object = /*#__PURE__*/function () {
    var _crypto_save_object = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(obj, subject_private_key, operator_public_key) {
      var crypto_str;
      return _regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            crypto_str = encrypt_object(obj, subject_private_key, operator_public_key);
            return _context3.abrupt("return", this.client.put(crypto_str));
          case 2:
          case "end":
            return _context3.stop();
        }
      }, _callee3, this);
    }));
    function crypto_save_object(_x, _x2, _x3) {
      return _crypto_save_object.apply(this, arguments);
    }
    return crypto_save_object;
  }();
  _proto.crypto_load_object = /*#__PURE__*/function () {
    var _crypto_load_object = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(id, subject_public_key, operator_private_key) {
      var crypto_buf, crypto_str;
      return _regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return this.client.get(id);
          case 2:
            crypto_buf = _context4.sent;
            crypto_str = crypto_buf.toString();
            return _context4.abrupt("return", crypto_str ? decrypt_object(crypto_str, subject_public_key, operator_private_key) : null);
          case 5:
          case "end":
            return _context4.stop();
        }
      }, _callee4, this);
    }));
    function crypto_load_object(_x4, _x5, _x6) {
      return _crypto_load_object.apply(this, arguments);
    }
    return crypto_load_object;
  }();
  _proto.crypto_save_buffer = /*#__PURE__*/function () {
    var _crypto_save_buffer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5(buf, subject_private_key, operator_public_key) {
      var crypto_buf;
      return _regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            crypto_buf = encrypt_buffer(buf, subject_private_key, operator_public_key);
            return _context5.abrupt("return", this.client.put(crypto_buf));
          case 2:
          case "end":
            return _context5.stop();
        }
      }, _callee5, this);
    }));
    function crypto_save_buffer(_x7, _x8, _x9) {
      return _crypto_save_buffer.apply(this, arguments);
    }
    return crypto_save_buffer;
  }();
  _proto.crypto_load_buffer = /*#__PURE__*/function () {
    var _crypto_load_buffer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee6(id, subject_public_key, operator_private_key) {
      var crypto_buf;
      return _regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return this.client.get(id);
          case 2:
            crypto_buf = _context6.sent;
            return _context6.abrupt("return", crypto_buf ? decrypt_buffer(crypto_buf, subject_public_key, operator_private_key) : null);
          case 4:
          case "end":
            return _context6.stop();
        }
      }, _callee6, this);
    }));
    function crypto_load_buffer(_x10, _x11, _x12) {
      return _crypto_load_buffer.apply(this, arguments);
    }
    return crypto_load_buffer;
  }();
  _proto.crypto_save_content = /*#__PURE__*/function () {
    var _crypto_save_content = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee7(content_buf, content_key) {
      var crypto_buf;
      return _regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            crypto_buf = encrypt_content(content_buf, content_key);
            return _context7.abrupt("return", this.client.put(crypto_buf));
          case 2:
          case "end":
            return _context7.stop();
        }
      }, _callee7, this);
    }));
    function crypto_save_content(_x13, _x14) {
      return _crypto_save_content.apply(this, arguments);
    }
    return crypto_save_content;
  }();
  _proto.crypto_load_content = /*#__PURE__*/function () {
    var _crypto_load_content = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee8(id, content_key) {
      var crypto_buf;
      return _regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return this.client.get(id);
          case 2:
            crypto_buf = _context8.sent;
            return _context8.abrupt("return", crypto_buf ? decrypt_content(crypto_buf, content_key) : null);
          case 4:
          case "end":
            return _context8.stop();
        }
      }, _callee8, this);
    }));
    function crypto_load_content(_x15, _x16) {
      return _crypto_load_content.apply(this, arguments);
    }
    return crypto_load_content;
  }();
  _proto.del = /*#__PURE__*/function () {
    var _del = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee9(id) {
      return _regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            return _context9.abrupt("return", this.client["delete"](id));
          case 1:
          case "end":
            return _context9.stop();
        }
      }, _callee9, this);
    }));
    function del(_x17) {
      return _del.apply(this, arguments);
    }
    return del;
  }();
  return CloudStorage;
}();
export default CloudStorage;