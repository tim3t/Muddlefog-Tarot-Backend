const db = require('../db');

class Spread {
	static async get(username) {
		const spreadRes = await db.query(
			`SELECT id, timedate, title, spread, comments, username
        FROM spreads
        WHERE username=$1`,
			[ username ]
		);

		return spreadRes.rows;
	}
}

module.exports = Spread;
