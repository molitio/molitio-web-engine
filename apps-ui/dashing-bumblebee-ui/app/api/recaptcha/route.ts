import { RecaptchaEnterpriseServiceClient } from '@google-cloud/recaptcha-enterprise';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, res: NextResponse) {
    const client = new RecaptchaEnterpriseServiceClient({
        credentials: {
            client_id: process?.env?.GOOGLE_RECAPTCHA_CLIENT_ID,
            client_email: process?.env?.GOOGLE_RECAPTCHA_CLIENT_EMAIL,
            private_key: process?.env?.GOOGLE_RECAPTCHA_PRIVATE_KEY?.replace(/\\n/gm, '\n'),
        },
    });

    const body = await req.json();

    if (!body?.token) {
        NextResponse.json({ message: 'No token provided' }, { status: 400 });
    }

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
