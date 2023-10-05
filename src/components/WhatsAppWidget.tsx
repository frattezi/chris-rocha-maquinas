const WHATSAPP_REDIRECT_URL = 'https://wa.me/'

const WhatsAppWidget = () => {
  const buildWhatsAppUrl = (phone: string, message: string) => {
    const url = new URL(WHATSAPP_REDIRECT_URL + phone)
    url.searchParams.append('text', message)
    return url.toString()
  }

  return <></>
}

export default WhatsAppWidget
