'use client';

import { FormEvent, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface ContactFormState {
  name: string;
  email: string;
  company: string;
  message: string;
}

const initialState: ContactFormState = {
  name: '',
  email: '',
  company: '',
  message: '',
};

export function ContactForm() {
  const [form, setForm] = useState<ContactFormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || 'Unable to send your message.');
      }

      setSuccessMessage(result.message || 'Message sent.');
      setForm(initialState);
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : 'Unable to send your message.',
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-border bg-card-bg p-6 md:p-8"
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text-primary">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={(event) =>
              setForm((current) => ({ ...current, name: event.target.value }))
            }
            className="mt-2 w-full rounded-md border border-border bg-surface px-3 py-2 text-sm text-text-primary outline-none focus:border-accent"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-primary">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={(event) =>
              setForm((current) => ({ ...current, email: event.target.value }))
            }
            className="mt-2 w-full rounded-md border border-border bg-surface px-3 py-2 text-sm text-text-primary outline-none focus:border-accent"
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="company" className="block text-sm font-medium text-text-primary">
          Company (optional)
        </label>
        <input
          id="company"
          name="company"
          type="text"
          value={form.company}
          onChange={(event) =>
            setForm((current) => ({ ...current, company: event.target.value }))
          }
          className="mt-2 w-full rounded-md border border-border bg-surface px-3 py-2 text-sm text-text-primary outline-none focus:border-accent"
        />
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="block text-sm font-medium text-text-primary">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={form.message}
          onChange={(event) =>
            setForm((current) => ({ ...current, message: event.target.value }))
          }
          className="mt-2 w-full resize-y rounded-md border border-border bg-surface px-3 py-2 text-sm text-text-primary outline-none focus:border-accent"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`
          mt-6 inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-medium transition-colors
          ${
            isSubmitting
              ? 'cursor-not-allowed bg-border text-text-secondary'
              : 'bg-accent text-bg hover:bg-accent-hover'
          }
        `}
      >
        {isSubmitting ? 'Sending...' : 'Send message'}
      </button>

      <AnimatePresence>
        {successMessage && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="mt-4 rounded-md border border-accent/30 bg-accent/10 p-3 text-sm text-text-primary"
            aria-live="polite"
          >
            <div className="flex items-start gap-2">
              <motion.svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className="mt-0.5 shrink-0 text-accent"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.25 }}
              >
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                <motion.path
                  d="M8 12.5L10.5 15L16 9.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.35, delay: 0.1 }}
                />
              </motion.svg>
              <p>{successMessage}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {errorMessage && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="mt-4 rounded-md border border-red-500/40 bg-red-500/10 p-3 text-sm text-red-200"
            aria-live="polite"
          >
            {errorMessage}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
