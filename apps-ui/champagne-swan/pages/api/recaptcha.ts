import type { NextApiRequest, NextApiResponse } from "next";
import { RecaptchaEnterpriseServiceClient } from "@google-cloud/recaptcha-enterprise";

const createAssessment = async (req: NextApiRequest, res: NextApiResponse) => {
  const client = new RecaptchaEnterpriseServiceClient({
    credentials: {
      client_id: process?.env?.GOOGLE_RECAPTCHA_CLIENT_ID,
      client_email: process?.env?.GOOGLE_RECAPTCHA_CLIENT_EMAIL,
      private_key: process?.env?.GOOGLE_RECAPTCHA_PRIVATE_KEY?.replace(
        /\\n/gm,
        "\n"
      ),
    },
  });

  const request = {
    parent: `projects/${process?.env?.GOOGLE_RECAPTCHA_PROJECT_ID}`,
    assessment: {
      event: {
        siteKey: process?.env?.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY,
        token: req?.body.token,
      },
    },
  };

  const [response] = await client.createAssessment(request);

  if (!response.tokenProperties?.valid) {
    res.status(400)?.json({
      message: "Invalid token",
      score: response?.riskAnalysis?.score,
      reason: response.tokenProperties?.invalidReason,
    });
    return;
  }

  if (response.tokenProperties.action === "CONTACT_FORM") {
    return res.status(200)?.json({
      score: response?.riskAnalysis?.score,
      reason: response.riskAnalysis?.reasons,
      status: "Ok",
    });
  } else {
    return res.status(500)?.json({
      reason: response.riskAnalysis?.reasons,
      status: "Fail",
    });
  }
};

export default createAssessment;
