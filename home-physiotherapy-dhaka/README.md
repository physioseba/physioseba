# Required Images

Add the following optimized images (WebP or compressed JPG recommended, target < 150KB each)
to this folder before deploying. File names must match exactly — they're already referenced in index.html.

| File name | Recommended size | Used for |
|---|---|---|
| favicon.png | 32x32 or 64x64 | Browser tab icon |
| og-cover.jpg | 1200x630 | Open Graph / Twitter share image |
| hero-physiotherapist-home-visit-dhaka.jpg | 560x620 | Hero section |
| service-stroke-rehabilitation.jpg | 320x200 | Services card |
| service-pain-management.jpg | 320x200 | Services card |
| service-neurological-physiotherapy.jpg | 320x200 | Services card |
| service-sports-injury-rehab.jpg | 320x200 | Services card |
| service-post-surgery-rehabilitation.jpg | 320x200 | Services card |
| service-walking-balance-training.jpg | 320x200 | Services card |
| service-geriatric-physiotherapy.jpg | 320x200 | Services card |
| service-home-exercise-program.jpg | 320x200 | Services card |
| success-story-stroke-recovery.jpg | 480x360 | Success story section |

Tips:
- Compress with Squoosh or TinyPNG before uploading.
- Keep the hero image and og-cover.jpg high priority (hero uses `fetchpriority="high"`, no lazy-load).
- All other images use `loading="lazy"` already in the HTML.
