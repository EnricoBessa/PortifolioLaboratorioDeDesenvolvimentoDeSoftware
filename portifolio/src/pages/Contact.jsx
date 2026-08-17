import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaUser, FaEnvelope, FaCommentDots, FaLinkedin, FaGithub, FaAt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');
  const { t } = useTranslation();

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'error_name';
    if (!form.email.trim()) {
      newErrors.email = 'error_email_required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'error_email_invalid';
    }
    if (form.message.trim().length < 10) newErrors.message = 'error_message';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess('');
      return;
    }

    setErrors({});
    setSuccess('sending');

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLETE_ID,
      {
        from_name: form.name,
        from_email: form.email,
        to_name: 'Enrico Bessa',
        to_email: 'enricobessa@gmail.com',
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
    )
      .then(() => {
        setSuccess('success');
        setForm({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Email error:', error);
        setSuccess('error_send');
      });
  };

  return (
    <>
      <section className="min-h-[80vh] px-6 pt-24 pb-10 bg-[#1F1F1F]">
        <div className="flex-1 max-w-[600px] mx-auto">

          <h1 className="text-white text-3xl sm:text-4xl font-bold text-center">
            {t('contact_title')}
          </h1>

          <form className="w-full flex flex-col gap-6 mt-10" onSubmit={handleSubmit}>
            
            {/* Nome */}
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <FaUser className="text-gray-400" />
                <label className="text-gray-300 font-medium">{t('name')}</label>
              </div>

              <input
                type="text"
                name="name"
                className="w-full rounded bg-[#2B2B2B] text-white p-2 border border-gray-600 focus:border-white focus:outline-none"
                placeholder={t('placeholder_name')}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />

              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{t(errors.name)}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <FaEnvelope className="text-gray-400" />
                <label className="text-gray-300 font-medium">{t('email')}</label>
              </div>

              <input
                type="text"
                name="email"
                className="w-full rounded bg-[#2B2B2B] text-white p-2 border border-gray-600 focus:border-white focus:outline-none"
                placeholder={t('placeholder_email')}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />

              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{t(errors.email)}</p>
              )}
            </div>

            {/* Mensagem */}
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <FaCommentDots className="text-gray-400" />
                <label className="text-gray-300 font-medium">{t('message')}</label>
              </div>

              <textarea
                name="message"
                rows={4}
                className="w-full rounded bg-[#2B2B2B] text-white p-2 border border-gray-600 focus:border-white focus:outline-none"
                placeholder={t('placeholder_message')}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />

              {errors.message && (
                <p className="text-red-400 text-sm mt-1">{t(errors.message)}</p>
              )}
            </div>

            {/* Botão */}
            <div className="flex justify-end">
              <button type="submit" className="px-6 py-2 rounded bg-[#FF6A3D] hover:bg-[#e35c33] transition text-white font-semibold">
                {t('submit')}
              </button>
            </div>

            {success && (
              <p className="text-green-400 text-sm mt-2">{t(success)}</p>
            )}
          </form>
        </div>
      </section>

      {/* Redes Sociais (minimalista) */}
      <section className="bg-[#1F1F1F] pb-14 flex flex-col items-center">
        <h2 className="text-gray-300 text-lg font-medium mb-4">
          {t('contact_socials') || 'Me encontre também em:'}
        </h2>

        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/enricobessa/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white text-3xl transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/EnricoBessa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white text-3xl transition"
          >
            <FaGithub />
          </a>

          <a
            href="mailto:enricobessa@gmail.com"
            className="text-gray-300 hover:text-white text-3xl transition"
          >
            <FaAt />
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
