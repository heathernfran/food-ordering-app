const { db } = require("@vercel/postgres");

async function main() {
  const client = await db.connect();

  console.log("seed data");

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
