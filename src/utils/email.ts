import emailjs from 'emailjs-com'

const sendEmail = async (to: string, message: string, link: string) => {
  const url = window.location.href.substring(0, window.location.href.indexOf('#') + 1)
  await emailjs.send(
    process.env.REACT_APP_EMAIL_SERVICE_ID || '',
    process.env.REACT_APP_EMAIL_TEMPLATE_ID || '',
    { to, message, link: `${url}/update-item/${link}` },
    process.env.REACT_APP_EMAIL_USER_ID || ''
  )
}

export default sendEmail
