"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.swapController = void 0;
var _models = _interopRequireDefault(require("../../database/models"));
var _sequelize = require("sequelize");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const newSwap = async (req, res) => {
  try {
    var meta = req.body.meta;
    const response = await _models.default.swaps.create({
      metadata: JSON.stringify(meta),
      status: 1,
      init_address: meta.init.address,
      accept_address: meta.accept.address
    });
    if (response) {
      res.json({
        success: true,
        message: "new_swap",
        data: response
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "***new_swap error"
    });
  }
};
const updateSwap = async (req, res) => {
  try {
    const response = await _models.default.swaps.update({
      status: req.body.status
    }, {
      where: {
        metadata: req.body.meta
      }
    });
    if (response) {
      res.json({
        success: true,
        message: "update_swap",
        data: response
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: `***update_swap error`
    });
  }
};
const getPending = async (req, res) => {
  try {
    const response = await _models.default.swaps.findAll({
      where: {
        [_sequelize.Op.and]: {
          status: 1,
          [_sequelize.Op.or]: [{
            accept_address: req.body.address
          }, {
            init_address: req.body.address
          }]
        }
      }
    });
    if (response) {
      res.json({
        success: true,
        message: "get_pending",
        data: response
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: `***get_pending error`
    });
  }
};
const history = async (req, res) => {
  try {
    const response = await _models.default.swaps.findAll({
      //attributes: ["createdAt", "status"],
      where: {
        [_sequelize.Op.or]: [{
          accept_address: req.body.address
        }, {
          init_address: req.body.address
        }]
      }
    });
    if (response) {
      res.json({
        success: true,
        message: "history",
        data: response
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: `***history error`
    });
  }
};
const sendSign = async (req, res) => {
  try {
    const response = await _models.default.swaps.update({
      init_sign: req.body.sign
    }, {
      where: {
        init_address: req.body.address
      }
    });
    if (response) {
      res.json({
        success: true,
        message: "send_sign",
        data: response
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: `***send_sign error`
    });
  }
};
const swapController = {
  updateSwap,
  newSwap,
  getPending,
  history,
  sendSign
};
exports.swapController = swapController;
//# sourceMappingURL=swapController.js.map