// import fastify, { FastifyRequest, FastifyReply } from "fastify";
// import pg from "./db";

// const app = fastify();

// app.post('/contact', async (req: FastifyRequest, res: FastifyReply) => {
//     // Specify the structure of the body for better type safety
//     const { name, email, contact, company, message } = req.body as any;

//     try {
//         // 1. Added await
//         // 2. Fixed typo 'valuse' to 'VALUES'
//         // 3. Added missing placeholder '$5'
//         const result = await pg.query(
//             "INSERT INTO ConnectWithUs(name, email, contact, company, message) VALUES($1, $2, $3, $4, $5)",
//             [name, email, contact, company, message]
//         );

//         // Check if the query was successful
//         if (result) {
//             res.send("Data has been sent successfully to the database");
//         }
//     } catch (err) {
//         console.error("Database Error:", err);
//         res.status(500).send("An error occurred while saving the data");
//     }
// });

// // Don't forget to start the server!
// app.listen({ port: 3001 }, (err, address) => {
//     if (err) {
//         console.error(err);
//         process.exit(1);
//     }
//     console.log(`Server listening at ${address}`);
// });
