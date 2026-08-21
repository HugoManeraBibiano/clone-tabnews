import database from "infra/database.js";

async function create(userInputValues) {
  const results = await database.query({
    text: `
            INSERT INTO 
              users (username, email, password) 
            VALUES 
              ($1, $2, $3)
            RETURNING
              *
          ;`,
    values: [
      userInputValues.username,
      userInputValues.email,
      userInputValues.password,
    ],
  });

  console.log("Result.rows:", results.rows[0]);
  return results.rows[0];
}

const user = {
  create,
};

export default user;
