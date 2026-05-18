import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/** Read at request time — avoids Next.js inlining static `process.env.X` at build (Amplify/Lambda). */
function env(name: string): string | undefined {
    return process.env[name];
}

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
    try {
        const body = await request.json().catch(() => null);

        if (!body) {
            return NextResponse.json({
                error: "Invalid request body"
            }, { status: 400 });
        }

        const { Name, Email, Contact, Company, Message } = body;

        if (!Name || !Email || !Contact || !Company || !Message) {
            return NextResponse.json({
                error: "Required fields are missing: Name, Email, Contact, Company, Message"
            }, { status: 400 });
        }

        const emailUser = env("SUPPORT_EMAIL_USER");
        const emailPass = env("SUPPORT_EMAIL_PASS");
        const emailFrom = env("SUPPORT_EMAIL_FROM");
        const emailTo = env("SUPPORT_EMAIL_TO");

        const missingEnv = [
            !emailUser && "SUPPORT_EMAIL_USER",
            !emailPass && "SUPPORT_EMAIL_PASS",
            !emailFrom && "SUPPORT_EMAIL_FROM",
            !emailTo && "SUPPORT_EMAIL_TO",
        ].filter(Boolean) as string[];

        if (missingEnv.length > 0) {
            console.error("Contact / email error: missing env:", missingEnv.join(", "));
            return NextResponse.json({
                error: "We could not send your message. Please try again later or contact us directly."
            }, { status: 500 });
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: emailUser,
                pass: emailPass,
            },
        });

        const mailOptions = {
            from: emailFrom,
            to: emailTo,
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

        return NextResponse.json({
            message: "Your message has been sent successfully."
        }, { status: 200 });
    } catch (err) {
        console.error("Contact / email error:", err);
        return NextResponse.json({
            error: "We could not send your message. Please try again later or contact us directly."
        }, { status: 500 });
    }
}
