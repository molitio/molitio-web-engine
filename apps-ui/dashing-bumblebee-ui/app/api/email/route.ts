import type { NextApiRequest, NextApiResponse } from 'next';
/* 
export const config = {
    api: {
        bodyParser: {
            sizeLimit: '1mb',
        },
    },
    maxDuration: 5,
}; */

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    const { from_name, from_email, message } = req?.body ?? '';
    let response = res;

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

    console.log('email data', emailData);

    if (!emailData) {
        response.status(400).json({ error: 'Email data not found' });
    } else {
        /*         const result = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            body: JSON.stringify(emailData),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        response.status(200).json({ result }); */
    }

    return Response.json({ message: 'Email sent successfully' });
    /*   return response; */
}
