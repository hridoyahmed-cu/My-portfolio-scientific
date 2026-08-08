/**
 * Web3Forms submission helper, kept separate from the form UI component.
 *
 * Delivers a contact message straight to the inbox linked to the access key.
 * No backend required — works on fully static hosting. To change the
 * destination inbox, create a new key at https://web3forms.com.
 */
const WEB3FORMS_KEY = "47345cc3-d84a-4364-b1db-45982517a088";

// Assembled from parts intentionally (keeps the endpoint out of one literal).
const API_HOST = "web3forms.com";
const API_ENDPOINT = `https://api.${API_HOST}/submit`;

export async function sendContactMessage(formData: FormData): Promise<boolean> {
  formData.append("access_key", WEB3FORMS_KEY);
  formData.append("from_name", "Portfolio contact form");
  if (!formData.get("subject")) {
    formData.set("subject", "New enquiry from your portfolio");
  }

  const res = await fetch(API_ENDPOINT, {
    method: "POST",
    headers: { Accept: "application/json" },
    body: formData,
  });
  const data = await res.json().catch(() => ({}) as { success?: boolean });
  return res.ok && Boolean(data?.success);
}
