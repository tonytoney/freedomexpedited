# Google Analytics Setup Guide for Freedom Expedited

## 🎯 **Step-by-Step Setup Instructions**

### **Step 1: Create Google Analytics Account**
1. Go to [analytics.google.com](https://analytics.google.com)
2. Click "Start measuring"
3. Fill in account details:
   - **Account name**: Freedom Expedited
   - **Data sharing settings**: Choose your preferences

### **Step 2: Create Property**
1. **Property name**: Freedom Expedited Website
2. **Reporting time zone**: Eastern Time
3. **Currency**: USD
4. **Industry category**: Transportation
5. **Business size**: Small business

### **Step 3: Set Up Data Stream**
1. **Platform**: Web
2. **Website URL**: `https://freedomexpedited.com`
3. **Stream name**: Freedom Expedited Main Site
4. **Copy the Measurement ID** (starts with "G-")

### **Step 4: Add Environment Variable**
1. In your `.env.local` file, add:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
   (Replace G-XXXXXXXXXX with your actual Measurement ID)

2. In Vercel, add the same environment variable:
   - Go to your Vercel project dashboard
   - Settings → Environment Variables
   - Add `NEXT_PUBLIC_GA_ID` with your Measurement ID

### **Step 5: Deploy and Test**
1. Deploy the site with the new environment variable
2. Visit your site and check browser console for any errors
3. Test the analytics by:
   - Submitting an agent application
   - Clicking "Apply Now" buttons
   - Navigating between pages

## 📊 **What We're Tracking**

### **Form Submissions**
- Agent application form submissions
- Contact form submissions

### **Button Clicks**
- "Apply Now" buttons (hero and footer)
- Navigation buttons

### **Page Views**
- All page visits are automatically tracked

### **Custom Events**
- Form submissions with form names
- Button clicks with button identifiers

## 🔍 **Verification Steps**

### **1. Check Google Analytics Real-Time**
1. Go to Google Analytics → Reports → Realtime
2. Visit your website
3. You should see your visit in real-time

### **2. Test Form Tracking**
1. Submit an agent application
2. Check Google Analytics → Events → Engagement
3. Look for "form_submit" events

### **3. Test Button Tracking**
1. Click "Apply Now" buttons
2. Check for "button_click" events

## 📈 **Key Metrics to Monitor**

### **Conversion Tracking**
- Agent application form submissions
- Contact form submissions
- Button click rates

### **Traffic Sources**
- Organic search traffic
- Direct traffic
- Referral traffic

### **Page Performance**
- Most visited pages
- Bounce rate
- Time on site

## 🎯 **Next Steps After Setup**

### **1. Set Up Goals**
1. Go to Admin → Goals
2. Create goals for:
   - Agent application submissions
   - Contact form submissions
   - Page views of key pages

### **2. Set Up Enhanced Ecommerce (Optional)**
- Track quote requests
- Track service inquiries

### **3. Set Up Custom Reports**
- Agent application funnel
- Traffic source analysis
- Geographic data

## 🔧 **Troubleshooting**

### **If Analytics Not Working:**
1. Check environment variable is set correctly
2. Verify Measurement ID is correct
3. Check browser console for errors
4. Ensure site is deployed with latest changes

### **If Events Not Tracking:**
1. Check browser console for JavaScript errors
2. Verify gtag function is available
3. Test with Google Analytics Debugger extension

## 📱 **Mobile Analytics**
- Analytics automatically tracks mobile visits
- No additional setup required
- Mobile-specific insights available in reports

## 🔒 **Privacy Compliance**
- Analytics respects user privacy settings
- No personally identifiable information collected
- Compliant with GDPR and CCPA

---

**Need Help?** Check the browser console for any JavaScript errors or contact your developer for assistance.
