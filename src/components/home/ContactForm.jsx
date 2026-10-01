'use client';

import { useState } from 'react';
import MagneticButton from '@/components/ui/MagneticButton';

export default function ContactForm() {
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('access_key', 'e73d2d24-9206-48fc-a7e3-b1904246d512');

    setStatus({ state: 'submitting', message: 'Sending message...' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          state: 'success',
          message: 'Success! Your message has been sent. We will get back to you within a day.',
        });
        form.reset();
      } else {
        setStatus({
          state: 'error',
          message: data.message || 'Error sending message. Please try again or email us directly.',
        });
      }
    } catch (error) {
      setStatus({
        state: 'error',
        message: 'Something went wrong. Please check your connection or write directly to info@ncstudios.in',
      });
    }
  };

  return (
    <form id="form" className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your name"
            disabled={status.state === 'submitting'}
          />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="you@email.com"
            disabled={status.state === 'submitting'}
          />
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="phone">
          Phone <span className="optional">(optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="+91 00000 00000"
          disabled={status.state === 'submitting'}
        />
      </div>

      <div className="form-field">
        <label htmlFor="message">Project details</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us what you're looking to build..."
          disabled={status.state === 'submitting'}
        />
      </div>

      <MagneticButton
        type="submit"
        className="form-submit"
        id="magnet"
        disabled={status.state === 'submitting'}
      >
        {status.state === 'submitting' ? 'Sending...' : 'Send message'}
      </MagneticButton>

      {status.state === 'success' && (
        <div className="form-status-msg success" role="alert">
          {status.message}
        </div>
      )}

      {status.state === 'error' && (
        <div className="form-status-msg error" role="alert">
          {status.message}
        </div>
      )}
    </form>
  );
}
