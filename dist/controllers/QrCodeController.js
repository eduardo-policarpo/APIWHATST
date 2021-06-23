"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GetQrCode = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

//Iniciar nova sessão
var GetQrCode = exports.GetQrCode = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
        var session;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        session = req.query.session;

                        if (!_SessionUtil.QRCodeArr[session]) {
                            _context.next = 6;
                            break;
                        }

                        _context.next = 4;
                        return res.status(200).json({ status: true, qrcode: _SessionUtil.QRCodeArr[session].qr });

                    case 4:
                        _context.next = 8;
                        break;

                    case 6:
                        _context.next = 8;
                        return res.status(401).json({ status: false, message: "session not found" });

                    case 8:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function GetQrCode(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var _SessionUtil = require("../util/SessionUtil");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=QrCodeController.js.map