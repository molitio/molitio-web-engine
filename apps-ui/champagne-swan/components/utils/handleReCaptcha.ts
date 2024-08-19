export const handleRecaptcha = async (action: string, key: string) => {
  try {
    const token = await grecaptcha.enterprise?.execute(key, {
      action: action,
    });

    const response = await fetch("/api/recaptcha", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, action: action }),
    });

    const responseData = await response.json();

    if (responseData?.score > 0.6) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("error", error);
    return false;
  }
};
