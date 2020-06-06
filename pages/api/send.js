const sgMail = require('@sendgrid/mail')

export default async function(req, res) {
  sgMail.setApiKey(process.env.NOW_API_KEY)

  const { email, message, lastName, firstName } = req.body

  const content = {
    to: 'makuch.nick@gmail.com',
    from: email,
    subject: `New Message From: ${firstName} ${lastName} - ${email}`,
    text: message,
    html: `<p>${message}</p>`
  }

  try {
    await sgMail.send(content)
    res.status(200).send('Message sent successfully.')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Message not sent.')
  }
}