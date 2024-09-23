import type { NextApiRequest, NextApiResponse } from 'next';

const submitEmail = async (req: NextApiRequest, res: NextApiResponse) => {
    const { from_name, from_email, message } = req?.body ?? '';

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

    const result = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        body: JSON.stringify(emailData),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    res.status(200).json({ result });
};

export default submitEmail;
