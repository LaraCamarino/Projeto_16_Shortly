import connection from "../dbStrategy/postgres.js";

async function signUp(name, email, encryptedPassword) {
     return connection.query("INSERT INTO users (name, email, password) VALUES ($1, $2, $3)", [name, email, encryptedPassword]);
}

async function verifyExistingUser(email) {
     return connection.query("SELECT * FROM users WHERE email = $1", [email]);
}

async function signIn(id, token) {
     return connection.query(`INSERT INTO sessions ("userId", token) VALUES ($1, $2)`, [id, token]);
}

export const authRepository = {
	signUp,
     verifyExistingUser,
     signIn
}