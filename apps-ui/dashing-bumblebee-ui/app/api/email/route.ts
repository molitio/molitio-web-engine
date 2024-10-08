import { NextRequest, NextResponse } from 'next/server';
/* 
export const config = {
    api: {
        bodyParser: {
            sizeLimit: '1mb',
        },
    },
    maxDuration: 5,
}; */

export async function POST(req: NextRequest, res: NextResponse) {
    const { from_name, from_email, message } = (await req.json()) ?? '';

    const emailData = {
        service_id: process.env.EMAILJS_SERVICE_ID ?? '',
        template_id: process.env.EMAILJS_TEMPLATE_ID ?? '',
        user_id: process.env.NEXT_PUBLIC_EMAILJS_API_KEY ?? '',
        template_params: {
            from_name,
            from_email,
            message,
        },
    };

    if (!emailData) {
        NextResponse.json({ error: 'Email data not found' }, { status: 400 });
    } else {
        const result = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            body: JSON.stringify(emailData),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        NextResponse.json({ result });
    }

    return NextResponse.json({ message: 'Email sent successfully' });
}
