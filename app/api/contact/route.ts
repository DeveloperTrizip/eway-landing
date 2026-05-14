import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import pg from "@/app/db";

export async function POST(request: Request) {
    try {
        // Parse the JSON body from the request
        const body = await request.json().catch(() => null);

        if (!body) {
            return NextResponse.json({
                error: "Invalid request body"
            }, { status: 400 });
        }

        const { Name, Email, Contact, Company, Message } = body;

        // Basic validation
        if (!Name || !Email || !Contact || !Company || !Message) {
            return NextResponse.json({
                error: "Required fields are missing: Name, Email, Contact, Company, Message"
            }, { status: 400 });
        }

        // Insert into database using the PostgreSQL pool
        const result = await pg.query(
            'INSERT INTO "connectwithus"("Name", "Email", "Contact", "Company", "Message") VALUES($1, $2, $3, $4, $5)',
            [Name, Email, Contact, Company, Message]
        );

        if (result.rowCount && result.rowCount > 0) {
            // Send email to support
            try {
                // NOTE: You must update these credentials or move them to an .env file
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: process.env.SUPPORT_EMAIL_USER,
                        pass: process.env.SUPPORT_EMAIL_PASS
                    }
                });

                const mailOptions = {
                    from: process.env.SUPPORT_EMAIL_FROM,
                    to: process.env.SUPPORT_EMAIL_TO,
                    subject: `New Contact Request: ${Name} from ${Company}`,
                    html: `
                        <h2>New Contact Form Submission</h2>
                        <p><strong>Name:</strong> ${Name}</p>
                        <p><strong>Email:</strong> ${Email}</p>
                        <p><strong>Contact:</strong> ${Contact}</p>
                        <p><strong>Company:</strong> ${Company}</p>
                        <p><strong>Message:</strong></p>
                        <p style="white-space: pre-wrap;">${Message}</p>
                        <hr>
                        <p>Sent from Sharkship Eway-Bill Connect With Us Page</p>
                    `
                };

                await transporter.sendMail(mailOptions);
                console.log("Support email sent successfully");
            } catch {
                console.error("Email Sending Error");
                // We proceed with the database success even if email fails
            }

            return NextResponse.json({
                message: "Data has been sent successfully to the database and support notified"
            }, { status: 200 });
        }

        return NextResponse.json({
            error: "Failed to insert data - no rows affected"
        }, { status: 400 });

    } catch (err) {
        const error = err as { code?: string; message?: string };
        console.error("Database Error:", error);

        // Return a specific message if the table doesn't exist
        if (error.code === '42P01') {
            return NextResponse.json({
                error: "Table 'connectwithus' does not exist in the database."
            }, { status: 500 });
        }

        return NextResponse.json({
            error: "An error occurred while saving the data: " + (error.message || "Unknown error")
        }, { status: 500 });
    }
}
