import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { priceId } = req.body;

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed." });
  }

  if (!priceId) {
    return res.status(400).json({ error: "Preço não informado." });
  }

  const baseUrl =
    process.env.NEXT_URL ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");
  const successUrl = `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${baseUrl}/`;

  try {
    const checkoutSession = await stripe.checkout.sessions.create({
      success_url: successUrl,
      cancel_url: cancelUrl,
      mode: "payment",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
    });

    if (!checkoutSession.url) {
      return res.status(500).json({
        error: "Stripe não retornou URL de checkout. Verifique a configuração.",
      });
    }

    return res.status(201).json({
      checkoutUrl: checkoutSession.url,
    });
  } catch (err: unknown) {
    console.error("[checkout]", err);
    const message =
      err && typeof err === "object" && "message" in err
        ? String((err as { message: unknown }).message)
        : "Erro ao criar sessão de checkout.";
    return res.status(500).json({
      error: "Erro no servidor ao criar checkout.",
      details: message,
    });
  }
}
