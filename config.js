/* ============================================================
   MARONG COMMUNITY CHURCH — SITE SETTINGS
   ============================================================
   This is the ONLY file you need to edit for day-to-day changes.
   You can edit it straight from GitHub (pencil icon -> commit).

   After you edit and commit, the live site updates within a minute.
   ============================================================ */

window.SITE_CONFIG = {

  /* ----------------------------------------------------------
     1) NOTICE BANNER  (the bold bar at the very top of the page)
     ----------------------------------------------------------
     Use this for special services, holiday times, cancellations, etc.

     - enabled:  true  = banner shows
                 false = banner is hidden
     - message:  the text people see. Keep it short and clear.
     - buttonText / buttonLink: optional button on the banner.
                 Leave buttonText as "" to hide the button.
     ---------------------------------------------------------- */
  notice: {
    enabled: false,
    message: "",
    buttonLink: "#contact"
  },

  /* ----------------------------------------------------------
     2) CONTACT FORM
     ----------------------------------------------------------
     The form is powered by Formspree.

     formspreeEndpoint is the form's address from your Formspree
     dashboard (looks like https://formspree.io/f/xxxxxxxx).
     Submissions are emailed to the address on that Formspree form.
     Leave it as "" and the form will show a setup message instead.
     ---------------------------------------------------------- */
  form: {
    formspreeEndpoint: "https://formspree.io/f/maenkgwy"
  },

  /* ----------------------------------------------------------
     3) SOCIAL LINKS
     ----------------------------------------------------------
     Paste your Facebook page address between the quotes.
     The Facebook icon (next to "Find us" and in the footer)
     appears automatically once a link is set. Leave it as ""
     to hide the icon.

     Example: "https://www.facebook.com/YourChurchPage"
     ---------------------------------------------------------- */
  social: {
    facebookUrl: "https://www.facebook.com/61594631863354/"
  }

};
