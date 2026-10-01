# Marong Community Church — Website

A simple, fast, one-page website. No WordPress, no database, no monthly fees —
just static files hosted free on GitHub Pages.

## What's in here

| File / folder | What it is |
|---------------|------------|
| `index.html`  | The entire website. You rarely need to touch this. |
| `config.js`   | **The file you edit** — the notice banner, the contact form address and the Facebook link. |
| `images/`     | Your logos (icon, full colour, white, BUV, GiveWay) + favicon + social image. |

Everything is self-contained — no links back to the old WordPress site, so nothing
breaks when you move the domain.

---

## 1. The notice banner (special services)

This is the bold orange band that appears just below the welcome section —
designed to be impossible to miss when a service is at a different time or place.

Open **`config.js`** and edit the `notice` block:

```js
notice: {
  enabled: true,                                   // true = show,  false = hide
  message: "Special Easter Service ...",           // the text people see
  buttonText: "Questions? Contact us",             // button label ("" hides it)
  buttonLink: "#contact"                           // where the button goes
}
```

To **turn it off**, change `enabled: true` to `enabled: false` and commit.
You can do this right on GitHub: open `config.js` → pencil icon → edit →
"Commit changes". The live site updates within a minute.

---

## 2. The contact form

Already connected. It uses **Formspree**, and the form address is in `config.js`:

```js
form: { formspreeEndpoint: "https://formspree.io/f/maenkgwy" }
```

Submissions are emailed to the address set up on that Formspree form (and can be
viewed in your Formspree dashboard). Fields: **full name** (required), **phone**,
**email**, **message** (at least a phone or an email is required so you can reply).

Tip: send yourself one test message after it's live to confirm the emails arrive in
the right inbox (check spam the first time). Formspree may ask you to confirm the
form's email address the first time.

---

## 3. Photo carousel

A rotating photo carousel appears in the hero section (right side). It automatically cycles through photos every 5 seconds and includes manual next/previous buttons and dot indicators.

**To add or change photos:** Drop image files (JPG or PNG) into the `images/carousel/` folder. To update the list of filenames that the carousel displays, edit the `carouselImages` array in `index.html` around line 498. For example:

```js
var carouselImages=['photo1.jpg','photo2.jpg','photo3.jpg'];
```

Photos are displayed at 1280×720 (16:9 aspect ratio) — they're resized on-page, but look best if already roughly that ratio.

---

## 4. Facebook page

Open **`config.js`** and paste your Facebook page address:

```js
social: { facebookUrl: "https://www.facebook.com/YourChurchPage" }
```

Once set, a Facebook icon appears automatically next to **Find us** in the
Contact section and in the footer. Leave it as `""` to hide the icon.

---

## 5. Putting it online (GitHub Pages)

1. Create a new repository on GitHub (e.g. `marongcc`).
2. Upload **all** files, keeping the structure (`index.html`, `config.js` at the top
   level, and the `images/` folder).
3. Repo **Settings → Pages → Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main** → **/(root)** → Save.
4. After a minute the site is live at `https://YOUR-USERNAME.github.io/marongcc/`.

### Pointing marongcc.org.au at it

1. **Settings → Pages → Custom domain** → enter `marongcc.org.au` → Save.
   (GitHub adds a `CNAME` file automatically.)
2. At your DNS provider:
   - Four `A` records for the apex `marongcc.org.au`:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - One `CNAME` for `www` → `YOUR-USERNAME.github.io`
3. Back in Pages, tick **Enforce HTTPS** once it becomes available.

> Do this when you're ready to switch away from the old WordPress site. DNS changes
> can take a few hours to fully propagate.

---

*Built as a static replacement for the previous WordPress (Neve) site.
Brand colours: slate #2c4a52 · orange #e07b2c · teal #11a597.*
