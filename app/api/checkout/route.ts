import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST() {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price: 'price_1Tg3BCHZMPMitDH83kkkwTeY',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'https://thriwana.com/success',
    cancel_url: 'https://thriwana.com',
  });

  return NextResponse.json({ url: session.url });
}