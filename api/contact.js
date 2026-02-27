// Secure API route for handling contact form submissions
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, project, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Use environment variables on server side (SECURE - not exposed to browser)
    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('Missing EmailJS environment variables');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    const templateParams = {
      name,
      email,
      project: project || '',
      message,
      time: new Date().toLocaleString()
    };

    const emailjsResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: templateParams
      })
    });

    const result = await emailjsResponse.json();

    if (emailjsResponse.ok) {
      console.log('Email sent successfully:', result);
      return res.status(200).json({ success: true });
    } else {
      console.error('EmailJS error:', result);
      return res.status(400).json({ error: result.message || 'Failed to send email' });
    }

  } catch (error) {
    console.error('Contact API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
