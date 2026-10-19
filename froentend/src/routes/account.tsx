import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Check, Eye, EyeOff, LogOut, PackageCheck } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCommerce } from "@/components/storefront";
import { getApiStatus, readApiJson } from "@/lib/api";
import { money } from "@/lib/catalog";
import atelierImage from "@/assets/ciao-women.jpg";

export const Route = createFileRoute("/account")({
  validateSearch: (search: Record<string, unknown>): { redirectTo?: string } =>
    typeof search["redirectTo"] === "string" ? { redirectTo: search["redirectTo"] } : {},
  head: () => ({
    meta: [
      { title: "Private Client Account — CIAO D MILANO" },
      {
        name: "description",
        content: "Sign in or create your CIAO D MILANO private client account.",
      },
      { property: "og:title", content: "Private Client Account — CIAO D MILANO" },
      {
        property: "og:description",
        content: "Access orders, saved pieces and private collection previews.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Account,
});

function PasswordField({ name, placeholder }: { name: string; placeholder: string }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative">
      <Input
        required
        name={name}
        minLength={8}
        maxLength={72}
        type={visible ? "text" : "password"}
        placeholder={placeholder}
        className="h-12 pr-12"
      />
      <Button
        type="button"
        variant="ghost"
        size="icon"
        aria-label={visible ? "Hide password" : "Show password"}
        title={visible ? "Hide password" : "Show password"}
        onClick={() => setVisible((current) => !current)}
        className="absolute right-1 top-1 h-10 w-10 text-stone hover:bg-transparent hover:text-ink"
      >
        {visible ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
      </Button>
    </div>
  );
}

type AccountProfile = {
  firstName: string;
  lastName: string;
  email: string;
  createdAt?: string;
};

type AccountOrder = {
  id: string;
  purchasedItems: {
    productId: string;
    name: string;
    unitPrice: number;
    quantity: number;
    lineTotal: number;
  }[];
  totalAmount: number;
  currency: string;
  paymentMethod: string;
  createdAt: string;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isAccountProfile(value: unknown): value is AccountProfile {
  return (
    isRecord(value) &&
    typeof value["firstName"] === "string" &&
    typeof value["lastName"] === "string" &&
    typeof value["email"] === "string" &&
    (value["createdAt"] === undefined || typeof value["createdAt"] === "string")
  );
}

function isAccountSession(value: unknown): value is {
  status?: string;
  account?: AccountProfile;
} {
  return (
    isRecord(value) &&
    (value["status"] === undefined || typeof value["status"] === "string") &&
    (value["account"] === undefined || isAccountProfile(value["account"]))
  );
}

function isAccountOrder(value: unknown): value is AccountOrder {
  return (
    isRecord(value) &&
    typeof value["id"] === "string" &&
    Array.isArray(value["purchasedItems"]) &&
    value["purchasedItems"].every(
      (item) =>
        isRecord(item) &&
        typeof item["productId"] === "string" &&
        typeof item["name"] === "string" &&
        typeof item["unitPrice"] === "number" &&
        typeof item["quantity"] === "number" &&
        typeof item["lineTotal"] === "number",
    ) &&
    typeof value["totalAmount"] === "number" &&
    typeof value["currency"] === "string" &&
    typeof value["paymentMethod"] === "string" &&
    typeof value["createdAt"] === "string"
  );
}

function isOrderHistory(value: unknown): value is { status?: string; orders?: AccountOrder[] } {
  return (
    isRecord(value) &&
    (value["status"] === undefined || typeof value["status"] === "string") &&
    (value["orders"] === undefined ||
      (Array.isArray(value["orders"]) && value["orders"].every(isAccountOrder)))
  );
}

function Account() {
  const { redirectTo } = Route.useSearch();
  const { catalogProducts, completeSignIn, signOut } = useCommerce();
  const router = useRouter();
  const [mode, setMode] = useState<"signin" | "register">("signin");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"error" | "success">("success");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [profile, setProfile] = useState<AccountProfile | null>(null);
  const [orders, setOrders] = useState<AccountOrder[]>([]);
  const [isCheckingAccount, setIsCheckingAccount] = useState(true);
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [accountError, setAccountError] = useState("");
  const [refreshAccount, setRefreshAccount] = useState(0);

  useEffect(() => {
    let active = true;

    async function loadAccount() {
      setIsCheckingAccount(true);
      setAccountError("");
      try {
        const sessionResponse = await fetch("/api/account/session");
        if (sessionResponse.status === 401) {
          if (active) setProfile(null);
          return;
        }
        if (!sessionResponse.ok) {
          throw new Error(`Account details request failed with status ${sessionResponse.status}`);
        }

        const session = await readApiJson(sessionResponse);
        if (!isAccountSession(session) || session.status !== "authenticated" || !session.account) {
          throw new Error("Account details response was incomplete");
        }

        if (active) setProfile(session.account);

        const ordersResponse = await fetch("/api/orders");
        if (!ordersResponse.ok) {
          throw new Error(`Order history request failed with status ${ordersResponse.status}`);
        }
        const orderResult = await readApiJson(ordersResponse);
        if (
          !isOrderHistory(orderResult) ||
          orderResult.status !== "ok" ||
          !Array.isArray(orderResult.orders)
        ) {
          throw new Error("Order history response was incomplete");
        }

        if (active) {
          setOrders(orderResult.orders);
        }
      } catch (error) {
        console.error("Could not load account details and order history", error);
        if (active) {
          setAccountError(
            "We could not load all of your account information. Please refresh to try again.",
          );
        }
      } finally {
        if (active) setIsCheckingAccount(false);
      }
    }

    void loadAccount();
    return () => {
      active = false;
    };
  }, [refreshAccount]);

  function selectMode(nextMode: "signin" | "register") {
    setMode(nextMode);
    setMessage("");
  }

  async function handleSignOut() {
    setIsSigningOut(true);
    setAccountError("");
    try {
      await signOut();
      setProfile(null);
      setOrders([]);
      setMode("signin");
      setIsCheckingAccount(false);
      setAccountError("");
      setMessage("You have been signed out.");
      setMessageType("success");
      router.history.replace("/account");
    } catch (error) {
      console.error("Could not sign out", error);
      setAccountError("We could not sign you out. Please try again.");
    } finally {
      setIsSigningOut(false);
    }
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    if (mode === "signin") {
      setIsSubmitting(true);
      setMessage("");

      try {
        const response = await fetch("/api/account/login", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            email: formData.get("email"),
            password: formData.get("password"),
          }),
        });
        const result = await readApiJson(response);

        if (response.ok && getApiStatus(result) === "authenticated") {
          completeSignIn();
          setRefreshAccount((current) => current + 1);
          setMessage("Login Successful");
          setMessageType("success");
          if (redirectTo?.startsWith("/") && !redirectTo.startsWith("//")) {
            const destination = new URL(redirectTo, window.location.origin);
            if (
              destination.origin === window.location.origin &&
              destination.pathname !== "/account"
            ) {
              router.history.push(
                `${destination.pathname}${destination.search}${destination.hash}`,
              );
            }
          }
        } else if (response.status === 401) {
          setMessage("The email or password is incorrect.");
          setMessageType("error");
        } else {
          setMessage("We could not sign in to your account. Please try again.");
          setMessageType("error");
        }
      } catch {
        setMessage("We could not reach the account service. Please try again.");
        setMessageType("error");
      } finally {
        setIsSubmitting(false);
      }
      return;
    }

    const password = String(formData.get("password") ?? "");
    const confirmation = String(formData.get("confirmation") ?? "");
    if (password !== confirmation) {
      setMessage("Passwords do not match.");
      setMessageType("error");
      return;
    }

    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/account", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          firstName: formData.get("firstName"),
          lastName: formData.get("lastName"),
          email: formData.get("email"),
          password,
          confirmation,
        }),
      });
      const result = await readApiJson(response);

      if (response.ok && getApiStatus(result) === "created") {
        setMessage("Your account has been created.");
        setMessageType("success");
        form.reset();
        setMode("signin");
      } else if (response.status === 409) {
        setMessage("An account with this email address already exists.");
        setMessageType("error");
      } else if (response.status === 400 && getApiStatus(result) === "password_mismatch") {
        setMessage("Passwords do not match.");
        setMessageType("error");
      } else if (response.status === 400) {
        setMessage("Please check your details and try again.");
        setMessageType("error");
      } else {
        setMessage("We could not create your account. Please try again.");
        setMessageType("error");
      }
    } catch {
      setMessage("We could not reach the account service. Please try again.");
      setMessageType("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  const isRegister = mode === "register";

  if (isCheckingAccount) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center px-6">
        <p className="text-sm text-stone">Checking your account…</p>
      </section>
    );
  }

  if (profile) {
    const lifetimeSpend = orders.reduce((sum, order) => sum + order.totalAmount, 0);
    const memberSince = profile.createdAt
      ? new Date(profile.createdAt).toLocaleDateString("en-IE", {
          month: "long",
          year: "numeric",
        })
      : "Private client";

    return (
      <section className="min-h-[70vh] bg-paper pb-24">
        <div className="mx-auto max-w-[1440px] px-4 pt-8 sm:px-6 lg:px-10">
          <nav
            aria-label="Breadcrumb"
            className="text-[9px] uppercase tracking-[0.18em] text-stone"
          >
            The House <span className="mx-2 text-border">/</span> Private Client
          </nav>
          <div className="relative mt-7 grid min-h-[300px] overflow-hidden bg-ink-deep text-paper md:min-h-[360px] md:grid-cols-[1.1fr_.9fr]">
            <div className="absolute inset-0 md:inset-y-0 md:left-1/2">
              <img src={atelierImage} alt="" className="h-full w-full object-cover opacity-45" />
              <div className="absolute inset-0 bg-gradient-to-r from-ink-deep via-ink-deep/55 to-ink-deep/10 md:bg-gradient-to-r md:from-ink-deep md:via-ink-deep/25 md:to-transparent" />
            </div>
            <div className="relative flex flex-col justify-between p-7 sm:p-10 lg:p-14">
              <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.22em] text-sand">
                <span className="h-px w-8 bg-sand" />
                Private client · Nº {profile.email.slice(0, 2).toUpperCase()}
              </div>
              <div className="mt-12">
                <p className="text-[10px] uppercase tracking-[0.18em] text-paper/60">
                  Benvenuto, {profile.firstName}
                </p>
                <h1 className="mt-3 max-w-xl font-serif text-5xl leading-[.98] sm:text-6xl">
                  Your world,
                  <br />
                  beautifully considered.
                </h1>
              </div>
              <p className="mt-8 max-w-sm text-xs leading-6 text-paper/65">
                A personal space for the pieces you love and the moments they become part of.
              </p>
            </div>
            <div className="relative hidden items-end justify-end p-8 md:flex lg:p-12">
              <div className="border-l border-sand/70 pl-5">
                <p className="text-[9px] uppercase tracking-[0.2em] text-paper/55">
                  A client since
                </p>
                <p className="mt-2 font-serif text-3xl">{memberSince}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(260px,.72fr)_minmax(0,1.6fr)]">
            <aside className="self-start border border-border bg-ivory p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div className="flex size-14 items-center justify-center bg-ink font-serif text-xl text-paper">
                  {profile.firstName.charAt(0)}
                  {profile.lastName.charAt(0)}
                </div>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  disabled={isSigningOut}
                  onClick={handleSignOut}
                  className="border-border bg-transparent"
                >
                  <LogOut />
                  {isSigningOut ? "Signing Out" : "Sign Out"}
                </Button>
              </div>
              <p className="mt-6 text-[9px] uppercase tracking-[0.2em] text-stone">Your Details</p>
              <h2 className="mt-2 font-serif text-3xl">
                {profile.firstName} {profile.lastName}
              </h2>
              <p className="mt-2 break-all text-xs text-stone">{profile.email}</p>
              <div className="mt-7 flex items-center gap-3 border-t border-border pt-5 text-xs text-stone">
                <CalendarDays className="size-4 text-burgundy" />
                <span>Member since {memberSince}</span>
              </div>
              <div className="mt-7 grid grid-cols-2 gap-3 border-t border-border pt-5">
                <div>
                  <p className="font-serif text-3xl">{orders.length.toString().padStart(2, "0")}</p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-stone">
                    Recent Orders
                  </p>
                </div>
                <div>
                  <p className="font-serif text-2xl">{money(lifetimeSpend)}</p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-stone">
                    Recent Spend
                  </p>
                </div>
              </div>
              <p className="mt-7 border-l border-burgundy pl-4 font-serif text-lg italic leading-snug text-stone">
                “Elegance is the balance between who you are and what you wear.”
              </p>
            </aside>

            <div className="min-w-0">
              <div className="flex items-end justify-between gap-4 border-b border-ink pb-5">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-stone">
                    Your journey with us
                  </p>
                  <h2 className="mt-2 font-serif text-4xl">Order History</h2>
                </div>
                <PackageCheck className="mb-1 size-6 text-burgundy" aria-hidden="true" />
              </div>
              {accountError ? (
                <p
                  role="alert"
                  className="mt-6 border-l-2 border-burgundy px-4 py-3 text-sm text-burgundy"
                >
                  {accountError}
                </p>
              ) : orders.length === 0 ? (
                <div className="mt-6 bg-ivory px-6 py-12 text-center sm:py-16">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-stone">
                    A story yet to begin
                  </p>
                  <h3 className="mt-3 font-serif text-3xl">Your first order awaits.</h3>
                  <p className="mx-auto mt-3 max-w-sm text-xs leading-6 text-stone">
                    Explore the collection and find a piece that feels unmistakably yours.
                  </p>
                  <Link
                    to="/new-arrivals"
                    className="mt-6 inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.18em] underline underline-offset-4"
                  >
                    Discover the collection <ArrowRight className="size-3" />
                  </Link>
                </div>
              ) : (
                <div className="mt-5 space-y-4">
                  {orders.map((order) => (
                    <article key={order.id} className="border border-border bg-white p-5 sm:p-7">
                      <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-border pb-4">
                        <div>
                          <p className="text-[9px] uppercase tracking-[0.17em] text-stone">
                            Order Nº {order.id.slice(-8).toUpperCase()}
                          </p>
                          <p className="mt-1 font-serif text-xl">
                            {new Date(order.createdAt).toLocaleDateString("en-IE", {
                              day: "2-digit",
                              month: "long",
                              year: "numeric",
                            })}
                          </p>
                        </div>
                        <span className="border border-border px-3 py-1 text-[8px] uppercase tracking-[0.16em] text-stone">
                          Confirmed
                        </span>
                      </div>
                      <div className="mt-5 space-y-4">
                        {order.purchasedItems.map((item) => {
                          const product = catalogProducts.find(
                            (piece) => piece.id === item.productId,
                          );
                          return (
                            <div key={item.productId} className="flex items-center gap-4">
                              {product && (
                                <img
                                  src={product.image}
                                  alt=""
                                  className="size-16 object-cover sm:size-[76px]"
                                />
                              )}
                              <div className="min-w-0 flex-1">
                                <p className="font-serif text-lg">{item.name}</p>
                                <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-stone">
                                  Quantity · {item.quantity}
                                </p>
                              </div>
                              <p className="shrink-0 text-sm">{money(item.lineTotal)}</p>
                            </div>
                          );
                        })}
                      </div>
                      <div className="mt-5 flex flex-wrap items-end justify-between gap-3 border-t border-border pt-4">
                        <p className="text-[9px] uppercase tracking-[0.14em] text-stone">
                          Paid by {order.paymentMethod}
                        </p>
                        <p className="text-[9px] uppercase tracking-[0.14em] text-stone">
                          Total{" "}
                          <strong className="ml-3 text-sm text-ink">
                            {money(order.totalAmount)}
                          </strong>
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="grid min-h-[calc(100svh-4rem)] bg-ivory lg:grid-cols-[minmax(0,1.08fr)_minmax(480px,0.92fr)]">
      <div className="relative min-h-[42svh] overflow-hidden bg-ink-deep lg:min-h-[760px]">
        <img
          src={atelierImage}
          alt="CIAO D MILANO atelier campaign"
          width={1024}
          height={1280}
          className="editorial-fade absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/85 via-transparent to-ink-deep/10" />
        <div className="absolute inset-x-0 bottom-0 p-7 text-paper sm:p-10 lg:p-14">
          <p className="text-[10px] uppercase tracking-[0.22em] text-sand">The Private Client</p>
          <blockquote className="mt-4 max-w-lg font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
            A more personal way to experience the house.
          </blockquote>
          <p className="mt-5 max-w-sm text-sm leading-6 text-paper/75">
            Save considered pieces, revisit your orders and receive first access to new collections.
          </p>
        </div>
      </div>

      <div className="flex items-center px-6 py-14 sm:px-12 lg:px-16 xl:px-24">
        <div className="editorial-rise mx-auto w-full max-w-lg">
          <div className="flex border-b border-ink" role="tablist" aria-label="Account access">
            <Button
              type="button"
              variant="ghost"
              role="tab"
              aria-selected={!isRegister}
              onClick={() => selectMode("signin")}
              className={`h-12 flex-1 border-b-2 px-2 ${!isRegister ? "border-ink text-ink" : "border-transparent text-stone"}`}
            >
              Sign In
            </Button>
            <Button
              type="button"
              variant="ghost"
              role="tab"
              aria-selected={isRegister}
              onClick={() => selectMode("register")}
              className={`h-12 flex-1 border-b-2 px-2 ${isRegister ? "border-ink text-ink" : "border-transparent text-stone"}`}
            >
              Create Account
            </Button>
          </div>

          <div className="py-9 sm:py-11">
            <p className="text-[10px] uppercase tracking-[0.22em] text-stone">CIAO D MILANO</p>
            <h1 className="mt-4 font-serif text-4xl leading-none sm:text-5xl">
              {isRegister ? "Join the House" : "Welcome Back"}
            </h1>
            <p className="mt-5 max-w-md text-sm leading-7 text-stone">
              {isRegister
                ? "Create your private account for a considered and personal shopping experience."
                : "Sign in to view your orders, saved pieces and private collection previews."}
            </p>
          </div>

          <form onSubmit={submit} className="grid gap-4" noValidate={false}>
            {accountError && (
              <p
                role="alert"
                className="border-l-2 border-burgundy px-4 py-3 text-xs text-burgundy"
              >
                {accountError}
              </p>
            )}
            {isRegister && (
              <div className="grid gap-4 sm:grid-cols-2">
                <Input
                  required
                  name="firstName"
                  maxLength={50}
                  autoComplete="given-name"
                  placeholder="First name"
                  className="h-12"
                />
                <Input
                  required
                  name="lastName"
                  maxLength={50}
                  autoComplete="family-name"
                  placeholder="Last name"
                  className="h-12"
                />
              </div>
            )}
            <Input
              required
              name="email"
              type="email"
              maxLength={255}
              autoComplete="email"
              placeholder="Email address"
              className="h-12"
            />
            <PasswordField name="password" placeholder="Password" />
            {isRegister && <PasswordField name="confirmation" placeholder="Confirm password" />}

            {!isRegister && (
              <div className="flex justify-end">
                <Button type="button" variant="link" className="h-auto px-0 text-[10px] text-stone">
                  Forgot password?
                </Button>
              </div>
            )}

            <Button size="lg" type="submit" disabled={isSubmitting} className="mt-2 h-13 w-full">
              {isSubmitting
                ? isRegister
                  ? "Creating Account..."
                  : "Signing In..."
                : isRegister
                  ? "Create My Account"
                  : "Enter My Account"}
            </Button>

            {message && (
              <p
                role="status"
                className={`border-l-2 px-4 py-3 text-xs ${messageType === "error" ? "border-burgundy text-burgundy" : "border-ink text-ink"}`}
              >
                {message}
              </p>
            )}
          </form>

          <div className="mt-10 border-t border-border pt-7">
            <p className="text-[10px] uppercase tracking-[0.18em] text-stone">
              Private account privileges
            </p>
            <ul className="mt-5 grid gap-3 text-xs text-ink sm:grid-cols-2">
              {["Saved pieces", "Order history", "Faster checkout", "Collection previews"].map(
                (benefit) => (
                  <li key={benefit} className="flex items-center gap-2">
                    <Check className="size-3 text-burgundy" aria-hidden="true" />
                    {benefit}
                  </li>
                ),
              )}
            </ul>
            <p className="mt-7 text-[10px] leading-5 text-stone">
              By continuing, you agree to our Terms & Conditions and acknowledge our Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
