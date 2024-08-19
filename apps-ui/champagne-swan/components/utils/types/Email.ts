export type Email = {
  from_name: string;
  from_email: string;
  message: string;
};

export type SendResult = "success" | "error";

export type EmailJsConfig = {
  serviceId: string;
  templateId: string;
  apiKey: string;
};
