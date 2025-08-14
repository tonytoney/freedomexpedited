# Google Analytics Verification Guide

## ✅ **Setup Complete!**

Your Google Analytics is now configured with Measurement ID: **G-8YNEPVJ5VT**

## 🔍 **How to Verify It's Working:**

### **1. Check Real-Time Analytics**
1. Go to [analytics.google.com](https://analytics.google.com)
2. Select your Freedom Expedited property
3. Go to **Reports** → **Realtime** → **Overview**
4. Visit your website: `https://freedomexpedited.com`
5. You should see your visit appear in real-time within 30 seconds

### **2. Test Form Tracking**
1. Go to your agent application page: `/agents`
2. Fill out and submit a test application
3. In Google Analytics, go to **Reports** → **Engagement** → **Events**
4. Look for events with:
   - **Event name**: `form_submit`
   - **Event label**: `agent_application`

### **3. Test Button Tracking**
1. Click the "Apply Now" buttons on the agents page
2. In Google Analytics Events, look for:
   - **Event name**: `button_click`
   - **Event labels**: `apply_now_hero` or `apply_now_footer`

### **4. Check Browser Console**
1. Open browser developer tools (F12)
2. Go to Console tab
3. Visit your website
4. You should see no errors related to Google Analytics
5. You might see gtag function calls (this is normal)

## 📊 **What's Being Tracked:**

### **Automatic Tracking:**
- ✅ Page views on all pages
- ✅ User sessions and bounce rate
- ✅ Traffic sources (organic, direct, referral)
- ✅ Geographic location of visitors
- ✅ Device types (desktop, mobile, tablet)

### **Custom Event Tracking:**
- ✅ Agent application form submissions
- ✅ "Apply Now" button clicks
- ✅ Contact form submissions (when added)

## 🎯 **Next Steps:**

### **1. Set Up Goals (Recommended)**
1. Go to **Admin** → **Goals**
2. Create a goal for "Agent Application Submission"
3. Set up conversion tracking

### **2. Monitor Key Metrics**
- Agent application conversion rate
- Most popular pages
- Traffic sources driving applications
- Geographic areas of interest

### **3. Set Up Alerts**
- Get notified when you receive agent applications
- Monitor for unusual traffic spikes

## 🔧 **If Something's Not Working:**

1. **Check the deployment** - Make sure the site has been deployed with the latest changes
2. **Clear browser cache** - Hard refresh (Ctrl+F5) the website
3. **Check browser console** - Look for any JavaScript errors
4. **Wait 24-48 hours** - Some analytics data takes time to appear

## 📱 **Mobile Testing:**
- Analytics works on all devices automatically
- Test the agent application form on mobile
- Check that button clicks are tracked on mobile

---

**Your Google Analytics is now live and tracking!** 🎉
