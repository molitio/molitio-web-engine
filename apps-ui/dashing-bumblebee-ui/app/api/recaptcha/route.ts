import type { NextApiRequest, NextApiResponse } from 'next';
import { RecaptchaEnterpriseServiceClient } from '@google-cloud/recaptcha-enterprise';
import { NextResponse } from 'next/server';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    const client = new RecaptchaEnterpriseServiceClient({
        credentials: {
            client_id: process?.env?.GOOGLE_RECAPTCHA_CLIENT_ID,
            client_email: process?.env?.GOOGLE_RECAPTCHA_CLIENT_EMAIL,
            private_key: process?.env?.GOOGLE_RECAPTCHA_PRIVATE_KEY?.replace(/\\n/gm, '\n'),
        },
    });

    async function streamToString(stream: any) {
        const chunks = [];
        for await (const chunk of stream) {
            chunks.push(chunk);
        }
        return Buffer.concat(chunks).toString('utf8');
    }

    const body = JSON.parse(await streamToString(req.body));

    const request = {
        parent: `projects/${process?.env?.GOOGLE_RECAPTCHA_PROJECT_ID}`,
        assessment: {
            event: {
                siteKey: process?.env?.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY,
                token: body?.token,
            },
        },
    };

    const [response] = await client.createAssessment(request);

    if (!response.tokenProperties?.valid) {
        NextResponse.json(
            {
                message: 'Invalid token',
                score: response?.riskAnalysis?.score,
                reason: response.tokenProperties?.invalidReason,
            },
            { status: 400 },
        );
    }

    if (response.tokenProperties?.action === 'CONTACT_FORM') {
        return NextResponse.json(
            {
                score: response?.riskAnalysis?.score,
                reason: response.riskAnalysis?.reasons,
                status: 'Ok',
            },
            { status: 200 },
        );
    } else {
        return NextResponse.json(
            {
                reason: response.riskAnalysis?.reasons,
                status: 'Fail',
            },
            { status: 500 },
        );
    }
}
