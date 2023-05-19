import knex from "knex";

const config = knex({
    client: "pg",
    connection : {
        host:"127.0.0.1",
        port: 5433,
        user: "postgres",
        password: "postgres",
        database : "sample_db"
    }
});

export default config;