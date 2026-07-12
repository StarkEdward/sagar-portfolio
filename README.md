# Sagar Kamble - Portfolio

A modern, responsive portfolio built with React, Vite, and Tailwind CSS.

## 🚀 Deployment on Netlify

This project is fully configured for deployment on Netlify.

### Build Settings
When deploying on Netlify, ensure your build settings are configured exactly like this:
- **Build command:** `npm run build`
- **Publish directory:** `dist`

*Note: If Netlify auto-detects `remix vite:build` or `dist/client`, make sure to manually override them with the values above.*

## 📧 EmailJS Setup (Contact Form)

The "Contact Me" form requires EmailJS to send emails directly to your inbox without a backend server. If you skip this, the website will still build and deploy perfectly, but the contact form will not send messages.

### How to get your keys:
1. Go to [emailjs.com](https://www.emailjs.com/) and sign up for a free account.
2. **Service ID:** Go to **Email Services** -> **Add New Service** (e.g., Gmail). Copy the `Service ID` (e.g., `service_abcd123`).
3. **Template ID:** Go to **Email Templates** -> **Create New Template**. Make sure the email body includes the variables used in the code: `{{name}}`, `{{email}}`, and `{{message}}`. Save it and copy the `Template ID`.
4. **Public Key:** Go to your **Account Settings** (top right profile icon) and copy the **Public Key**.

### Adding Keys to Netlify
In your Netlify dashboard, go to **Site configuration > Environment variables** and add the following keys with the values you copied:
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

*(You can add these at any time. If you deploy without them, the site works fine, but the form won't send emails).*

## 🛠️ Local Development

To run this project locally:

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```
