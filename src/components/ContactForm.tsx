"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="premium-card rounded-[2rem] p-7 sm:p-9">
      {submitted ? (
        <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-brand text-white shadow-[0_12px_24px_rgba(0,133,102,0.35)]">
            <svg
              viewBox="0 0 24 24"
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <h3 className="font-display mt-5 text-2xl font-bold text-foreground">
            Request received
          </h3>
          <p className="mt-3 max-w-sm text-muted">
            Thank you. We&apos;ll be in touch soon to schedule your appointment.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="First name" name="firstName" required />
            <Field label="Last name" name="lastName" required />
          </div>
          <Field label="Email" name="email" type="email" required />
          <Field label="Phone (optional)" name="phone" type="tel" />
          <div>
            <label
              htmlFor="goal"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              What do you need?
            </label>
            <select
              id="goal"
              name="goal"
              required
              className="h-12 w-full rounded-xl border border-border bg-white px-4 text-sm text-foreground outline-none transition focus:border-brand focus:shadow-[0_0_0_3px_rgba(0,133,102,0.12)]"
              defaultValue=""
            >
              <option value="" disabled>
                Select a focus
              </option>
              <option>Nutrition & meal planning</option>
              <option>Dermatology / skin concerns</option>
              <option>Dual specialty (nutrition + skin)</option>
              <option>Acne / gut–skin support</option>
              <option>General wellness consult</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="Share a bit about your goals..."
              className="w-full resize-none rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition focus:border-brand focus:shadow-[0_0_0_3px_rgba(0,133,102,0.12)]"
            />
          </div>
          <button type="submit" className="btn-primary w-full">
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="h-12 w-full rounded-xl border border-border bg-white px-4 text-sm text-foreground outline-none transition focus:border-brand focus:shadow-[0_0_0_3px_rgba(0,133,102,0.12)]"
      />
    </div>
  );
}
