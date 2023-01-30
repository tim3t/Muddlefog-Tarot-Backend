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

	static async post(data) {
		const result = await db.query(
			`INSERT INTO spreads (timedate, title, spread, comments, username) 
			VALUES ($1, $2, $3, $4, $5) RETURNING id, timedate, title, spread, comments, username`,
			[ data.timedate, data.title, data.spread, data.comments, data.username ]
		);
		let newSpread = result.rows[0];
		return newSpread;
	}
}

module.exports = Spread;
