const express = require('express');
const Account = require('../../models/account.model');
const AccountController = require('../../controllers/account.controller')(Account);

const router = express.Router();

/* GET users listing. */
router.get('/', AccountController.GetAccount);
router.post('/', AccountController.PostAccount);
router.put('/', AccountController.UpdateAccount);
router.delete('/', AccountController.DeleteAccount);

module.exports = router;
