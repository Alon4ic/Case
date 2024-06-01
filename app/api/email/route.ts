import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
    try {
        const { email, message } = await request.json();

        const transport = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.MY_EMAIL,
                pass: process.env.MY_PASSWORD,
            },
        });

        const mailOptions: Mail.Options = {
            from: process.env.MY_EMAIL,
            to: process.env.MY_EMAIL,
            subject: `Message from (${email})`,
            text: message,
        };

        await transport.sendMail(mailOptions);
        return NextResponse.json({ message: 'Email sent' });
    } catch (err) {
        console.error('Error sending email:', err);
        if (err instanceof Error) {
            return NextResponse.json({ error: err.message }, { status: 500 });
        }
        return NextResponse.json({ error: 'Unknown error' }, { status: 500 });
    }
}
