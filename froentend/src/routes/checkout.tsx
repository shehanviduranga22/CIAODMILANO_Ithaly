import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCommerce } from "@/components/storefront";
import { money } from "@/lib/catalog";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — CIAO D MILANO" },
      { name: "description", content: "Secure checkout for your CIAO D MILANO order." },
      { property: "og:title", content: "Checkout — CIAO D MILANO" },
      { property: "og:description", content: "Complete your CIAO D MILANO order." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Checkout,
});

function Checkout() {
  const { cart, catalogProducts, isAuthenticated, isAuthLoading } = useCommerce();
  const navigate = useNavigate();
  const lines = catalogProducts.filter((product) => cart[product.id]);
  const total = lines.reduce((sum, product) => sum + product.price * (cart[product.id] ?? 0), 0);

  useEffect(() => {
    if (!isAuthLoading && !isAuthenticated) {
      navigate({ to: "/account", search: { redirectTo: "/checkout" } });
    }
  }, [isAuthenticated, isAuthLoading, navigate]);

  if (isAuthLoading || !isAuthenticated) {
    return (
      <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
        <h1 className="font-serif text-4xl">Sign in to continue</h1>
        <p className="mt-4 max-w-md text-sm text-stone">
          Your account is required to proceed to checkout.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link to="/account" search={{ redirectTo: "/checkout" }}>
            Enter My Account
          </Link>
        </Button>
      </section>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        sessionStorage.setItem(
          "ciao-d-milano-checkout",
          JSON.stringify({
            contactInformation: { email: formData.get("email") },
            shippingAddress: {
              firstName: formData.get("firstName"),
              lastName: formData.get("lastName"),
              address: formData.get("address"),
              city: formData.get("city"),
              postalCode: formData.get("postalCode"),
              country: formData.get("country"),
            },
          }),
        );
        navigate({ to: "/payment" });
      }}
      className="mx-auto grid max-w-[1200px] gap-12 px-6 py-16 lg:grid-cols-[minmax(0,1fr)_380px] lg:px-10"
    >
      <div>
        <h1 className="font-serif text-5xl">Checkout</h1>
        <CheckoutSection n="01" title="Contact Information">
          <Input
            required
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Email address"
          />
        </CheckoutSection>
        <CheckoutSection n="02" title="Shipping Address">
          <div className="grid gap-4 sm:grid-cols-2">
            <Input required name="firstName" autoComplete="given-name" placeholder="First name" />
            <Input required name="lastName" autoComplete="family-name" placeholder="Last name" />
            <Input
              required
              name="address"
              autoComplete="street-address"
              placeholder="Address"
              className="sm:col-span-2"
            />
            <Input required name="city" autoComplete="address-level2" placeholder="City" />
            <Input
              required
              name="postalCode"
              autoComplete="postal-code"
              placeholder="Postal code"
            />
            <Input
              required
              name="country"
              autoComplete="country-name"
              placeholder="Country"
              className="sm:col-span-2"
            />
          </div>
        </CheckoutSection>
        <CheckoutSection n="03" title="Delivery Method">
          <label className="grid grid-cols-[auto_minmax(0,1fr)_auto] gap-4 border border-ink p-4 text-sm">
            <input type="radio" defaultChecked />
            <span>
              Express Delivery
              <br />
              <small className="text-stone">2–4 business days</small>
            </span>
            <span>Complimentary</span>
          </label>
        </CheckoutSection>
      </div>
      <aside className="bg-ivory p-6 lg:sticky lg:top-24 lg:self-start">
        <h2 className="font-serif text-2xl">Order Summary</h2>
        <div className="mt-6 space-y-5">
          {lines.map((product) => (
            <div key={product.id} className="grid grid-cols-[64px_minmax(0,1fr)_auto] gap-3">
              <img
                src={product.image}
                alt=""
                width={128}
                height={160}
                className="aspect-[3/4] object-cover"
              />
              <div>
                <p className="text-sm">{product.name}</p>
                <p className="mt-1 text-xs text-stone">Qty {cart[product.id]}</p>
              </div>
              <span className="text-sm">{money(product.price * (cart[product.id] ?? 0))}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-between border-t border-border pt-5">
          <span>Total</span>
          <strong>{money(total)}</strong>
        </div>
        <Button type="submit" size="lg" className="mt-6 w-full" disabled={!lines.length}>
          Place Order
        </Button>
      </aside>
    </form>
  );
}

function CheckoutSection({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-12 border-t border-border pt-6">
      <p className="text-[9px] uppercase tracking-[.18em] text-stone">{n}</p>
      <h2 className="mb-6 mt-2 font-serif text-2xl">{title}</h2>
      {children}
    </section>
  );
}
