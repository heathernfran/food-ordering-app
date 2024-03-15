const { db } = require("@vercel/postgres");
const { products } = require("./data.js");

async function seedProducts(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS products (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price INT NOT NULL,
        image VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        calorie INT NOT NULL,
        slug VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "products" table`);

    const insertedProducts = await Promise.all(
      products.map(
        (product) => client.sql`
        INSERT INTO products (name, price, image, description, calorie, slug)
        VALUES (${product.name}, ${product.price}, ${product.image}, ${product.description}, ${product.calorie}, ${product.slug})
        ON CONFLICT (id) DO NOTHING
      `
      )
    );

    console.log(`Seeded ${insertedProducts.length} products`);

    return {
      createTable,
      products: insertedProducts,
    };
  } catch (error) {
    console.error("Error seeding products:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedProducts(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
