/** Contact page with demo request form */
export const CONTACT_PAGE_HREF = "/contact-us";

/** ID of the demo request form section */
export const CONTACT_FORM_ID = "contact-form";

/** In-page anchor for the demo form */
export const CONTACT_FORM_ANCHOR = `#${CONTACT_FORM_ID}`;

/** Full URL for demo CTAs from other pages */
export const BOOK_DEMO_HREF = `${CONTACT_PAGE_HREF}${CONTACT_FORM_ANCHOR}`;

export function scrollToContactForm(behavior: ScrollBehavior = "smooth") {
  const el = document.getElementById(CONTACT_FORM_ID);
  if (!el) return false;
  el.scrollIntoView({ behavior, block: "start" });
  window.history.replaceState(null, "", CONTACT_FORM_ANCHOR);
  return true;
}
