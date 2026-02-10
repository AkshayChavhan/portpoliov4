'use client';

import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle, Mail, MapPin, Clock, Github, Linkedin, Twitter } from 'lucide-react';
import { SITE_CONFIG, SOCIAL_LINKS, FORMSPREE_ENDPOINT } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { playSuccessBeep, playErrorBeep, playClickBeep } from '@/lib/sounds';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function ContactSection() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    playClickBeep();
    setStatus('submitting');

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        playSuccessBeep();
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        playErrorBeep();
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch {
      setStatus('error');
      playErrorBeep();
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-28 scroll-mt-20"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <Container>
        <SectionHeading
          label="GET IN TOUCH"
          title="Let's Work Together"
          subtitle="Have a project in mind? I'd love to hear about it."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid lg:grid-cols-5 gap-8 lg:gap-12"
        >
          {/* Left: Contact Form */}
          <motion.form
            variants={fadeInUp}
            onSubmit={handleSubmit}
            className="lg:col-span-3 rounded-xl border p-6 sm:p-8 space-y-5"
            style={{
              backgroundColor: 'var(--card-bg)',
              borderColor: 'var(--border)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Input
                label="Name"
                placeholder="Your name"
                required
                value={formData.name}
                onChange={(e) => setFormData((f) => ({ ...f, name: e.target.value }))}
              />
              <Input
                label="Email"
                type="email"
                placeholder="you@example.com"
                required
                value={formData.email}
                onChange={(e) => setFormData((f) => ({ ...f, email: e.target.value }))}
              />
            </div>

            <Input
              label="Subject"
              placeholder="Project inquiry"
              value={formData.subject}
              onChange={(e) => setFormData((f) => ({ ...f, subject: e.target.value }))}
            />

            <Textarea
              label="Message"
              placeholder="Tell me about your project..."
              required
              value={formData.message}
              onChange={(e) => setFormData((f) => ({ ...f, message: e.target.value }))}
            />

            <MagneticButton>
              <Button
                type="submit"
                variant="primary"
                className="w-full sm:w-auto"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' && (
                  <Loader2 className="w-4 h-4 animate-spin" />
                )}
                {status === 'success' && (
                  <CheckCircle className="w-4 h-4" />
                )}
                {status === 'idle' && <Send className="w-4 h-4" />}
                {status === 'error' && <Send className="w-4 h-4" />}

                {status === 'idle' && 'Send Message'}
                {status === 'submitting' && 'Sending...'}
                {status === 'success' && 'Message Sent!'}
                {status === 'error' && 'Try Again'}
              </Button>
            </MagneticButton>

            {status === 'success' && (
              <p className="text-sm text-green-600">
                Thanks for reaching out! I&apos;ll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-500">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </motion.form>

          {/* Right: Contact Info */}
          <motion.div variants={fadeInUp} className="lg:col-span-2 space-y-6">
            {/* Contact details */}
            <div
              className="rounded-xl border p-6 space-y-5"
              style={{
                backgroundColor: 'var(--card-bg)',
                borderColor: 'var(--border)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <h4
                className="text-lg font-semibold"
                style={{ color: 'var(--text-primary)' }}
              >
                Contact Information
              </h4>

              <div className="space-y-4">
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-3 text-sm transition-colors duration-200"
                  style={{ color: 'var(--text-body)' }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: 'var(--accent-light)',
                      color: 'var(--accent)',
                    }}
                  >
                    <Mail className="w-4 h-4" />
                  </div>
                  {SITE_CONFIG.email}
                </a>

                <div
                  className="flex items-center gap-3 text-sm"
                  style={{ color: 'var(--text-body)' }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: 'var(--accent-light)',
                      color: 'var(--accent)',
                    }}
                  >
                    <MapPin className="w-4 h-4" />
                  </div>
                  {SITE_CONFIG.location}
                </div>

                <div
                  className="flex items-center gap-3 text-sm"
                  style={{ color: 'var(--text-body)' }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: 'var(--accent-light)',
                      color: 'var(--accent)',
                    }}
                  >
                    <Clock className="w-4 h-4" />
                  </div>
                  {SITE_CONFIG.availability}
                </div>
              </div>
            </div>

            {/* Social links */}
            <div
              className="rounded-xl border p-6"
              style={{
                backgroundColor: 'var(--card-bg)',
                borderColor: 'var(--border)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <h4
                className="text-lg font-semibold mb-4"
                style={{ color: 'var(--text-primary)' }}
              >
                Find Me Online
              </h4>

              <div className="flex gap-3">
                {[
                  { icon: <Github className="w-5 h-5" />, href: SOCIAL_LINKS.github, label: 'GitHub' },
                  { icon: <Linkedin className="w-5 h-5" />, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
                  { icon: <Twitter className="w-5 h-5" />, href: SOCIAL_LINKS.twitter, label: 'Twitter' },
                  { icon: <Mail className="w-5 h-5" />, href: SOCIAL_LINKS.email, label: 'Email' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-lg border flex items-center justify-center transition-all duration-200"
                    style={{
                      borderColor: 'var(--border)',
                      color: 'var(--text-body)',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--accent-light)';
                      (e.currentTarget as HTMLElement).style.color = 'var(--accent)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                      (e.currentTarget as HTMLElement).style.color = 'var(--text-body)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                    }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Schedule a call */}
            <div
              className="rounded-xl p-6 text-center"
              style={{
                background: 'linear-gradient(135deg, var(--accent), var(--accent-hover))',
              }}
            >
              <p className="text-white text-sm font-medium mb-3">
                Prefer a conversation?
              </p>
              <a
                href={`mailto:${SITE_CONFIG.email}?subject=Schedule%20a%20Call`}
                onClick={() => playClickBeep()}
                className="inline-flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.2)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.3)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.2)';
                }}
              >
                Schedule a Call
              </a>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
