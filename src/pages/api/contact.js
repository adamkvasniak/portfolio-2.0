import en from "../../locales/en/common.json";
import sk from "../../locales/sk/common.json";

const rateLimit = new Map();
const RATE_LIMIT_WINDOW = 10 * 60 * 1000; // 10 minutes

// --- helper: select correct language messages ---
function getMessages(locale) {
  const isSk = locale?.toLowerCase().startsWith("sk");
  return isSk ? sk.contact.messages : en.contact.messages;
}

// --- helper: apply simple rate limiting per IP ---
function isRateLimited(ip) {
  const now = Date.now();
  const last = rateLimit.get(ip);

  // cleanup old entries
  for (const [key, time] of rateLimit.entries()) {
    if (now - time > RATE_LIMIT_WINDOW) rateLimit.delete(key);
  }

  if (last && now - last < RATE_LIMIT_WINDOW) return true;
  rateLimit.set(ip, now);
  return false;
}

// --- main handler ---
export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  const { name, email, message, website, locale = "en" } = req.body;
  const t = getMessages(locale);

  // --- honeypot (bot protection) ---
  if (website) return res.status(400).json({ success: false, code: "bot" });

  // --- validation: missing fields ---
  if (!name?.trim() || !email?.trim() || !message?.trim())
    return res.status(400).json({ success: false, code: "invalid" });

  // --- rate limiting per IP ---
  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0] ||
    req.socket.remoteAddress ||
    "unknown";

  if (isRateLimited(ip))
    return res.status(429).json({ success: false, code: "limit" });

  // --- send to Web3Forms ---
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_KEY,
        name,
        email,
        message,
      }),
    });

    if (!response.ok)
      return res.status(500).json({ success: false, code: "error" });

    return res.status(200).json({ success: true, code: "sent" });
  } catch (err) {
    console.error("Contact API error:", err);
    return res.status(500).json({ success: false, code: "error" });
  }
}
