const express = require('express');
const { ensureCorrectUserOrAdmin } = require('../middleware/auth');
const { BadRequestError } = require('../expressError');
const Spread = require('../models/spreads');

const router = express.Router();

router.get('/:username', ensureCorrectUserOrAdmin, async function(req, res, next) {
	try {
		const userSpreads = await Spread.get(req.params.username);
		return res.json({ userSpreads });
	} catch (err) {
		return next(err);
	}
});

module.exports = router;
