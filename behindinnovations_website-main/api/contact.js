import nodemailer from 'nodemailer'

// Every inquiry is delivered to this inbox.
const TO = 'Behindinnovations@gmail.com'

const clean = (v, max) => String(v ?? '').replace(/[\r\n]+/g, ' ').trim().slice(0, max)
const escapeHtml = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const body = req.body || {}

  // Honeypot: real users never fill this hidden field, bots do.
  if (body.company) return res.status(200).json({ ok: true })

  const name = clean(body.name, 100)
  const email = clean(body.email, 150)
  const topic = clean(body.topic, 100) || 'General Enquiry'
  const message = String(body.message ?? '').trim().slice(0, 5000)

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Please fill in all fields with valid details.' })
  }

  const { GMAIL_USER, GMAIL_APP_PASSWORD } = process.env
  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    console.error('Missing GMAIL_USER / GMAIL_APP_PASSWORD env vars')
    return res.status(500).json({ error: 'Email service is not configured.' })
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
  })

  try {
    await transporter.sendMail({
      from: `"BI Website" <${GMAIL_USER}>`,
      to: TO,
      replyTo: `"${name.replace(/"/g, '')}" <${email}>`, // hit Reply to answer the visitor directly
      subject: `[${topic}] New inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\nMessage:\n${message}`,
      html: `
        <h2>New website inquiry</h2>
        <p><b>Name:</b> ${escapeHtml(name)}<br>
        <b>Email:</b> ${escapeHtml(email)}<br>
        <b>Topic:</b> ${escapeHtml(topic)}</p>
        <p><b>Message:</b></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>`,
    })
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('sendMail failed:', err)
    return res.status(500).json({ error: 'Could not send your message. Please try again.' })
  }
}