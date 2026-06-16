export const WHATSAPP_NUMBER = "252618240346";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export function getWhatsAppLink(message?: string) {
  if (!message) return WHATSAPP_URL;
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}
