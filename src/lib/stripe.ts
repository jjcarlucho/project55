import { loadStripe } from '@stripe/stripe-js';

// Configuración de Stripe
const stripePublishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;

if (!stripePublishableKey) {
  console.error('❌ VITE_STRIPE_PUBLISHABLE_KEY no está configurada');
  console.log('📋 Agrega tu clave pública de Stripe en las variables de entorno');
}

export const stripePromise = loadStripe(stripePublishableKey);

// Configuración del producto
export const PRODUCT_CONFIG = {
  name: 'UN JUEGO. UN SISTEMA. - Método Matemático Secreto',
  description: 'Sistema matemático completo + Bonos valorados en $1,296 USD',
  price: 4700, // $47.00 en centavos
  currency: 'usd',
  images: ['/cover.jpeg'],
  metadata: {
    product_type: 'digital_book',
    includes_bonuses: 'true',
    bonus_value: '1296',
    total_value: '1296',
    preventa: 'true',
    cupos_restantes: '23'
  }
};

// Función para crear sesión de checkout
export const createCheckoutSession = async (customerEmail?: string) => {
  try {
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...PRODUCT_CONFIG,
        customer_email: customerEmail,
        success_url: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${window.location.origin}/?canceled=true`,
      }),
    });

    if (!response.ok) {
      throw new Error('Error creating checkout session');
    }

    const session = await response.json();
    return session;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// Función para redirigir a Stripe Checkout
export const redirectToCheckout = async (customerEmail?: string) => {
  try {
    const stripe = await stripePromise;
    if (!stripe) throw new Error('Stripe not loaded');

    const session = await createCheckoutSession(customerEmail);
    
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      throw new Error(result.error.message);
    }
  } catch (error) {
    console.error('Error redirecting to checkout:', error);
    throw error;
  }
};
