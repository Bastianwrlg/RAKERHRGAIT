# Panduan Deploy Web Slider RAKER ke Cloudflare Pages

Aplikasi web slider RAKER HRGA-IT ini dibangun menggunakan React + Vite, sehingga merupakan Single Page Application (SPA) berbasis file statis (`dist/`) yang sangat cepat, aman, dan siap dideploy ke **Cloudflare Pages** secara gratis.

---

## ⚡ Metode 1: Deploy Otomatis via Git (GitHub / GitLab) — Paling Direkomendasikan

Jika repositori proyek Anda terhubung ke GitHub atau GitLab:

1. Buka [Cloudflare Dashboard](https://dash.cloudflare.com/) lalu pilih **Compute (Workers & Pages)** > **Create application** > **Pages** > **Connect to Git**.
2. Pilih repositori proyek ini.
3. Masukkan konfigurasi Build berikut:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (biarkan kosong / default)
4. Klik **Save and Deploy**.
5. Setiap kali Anda melakukan `git push`, Cloudflare Pages akan otomatis mem-build dan memperbarui web slider Anda di edge network global Cloudflare!

---

## 🚀 Metode 2: Deploy Cepat via Wrangler CLI (Terminal)

Jika Anda ingin mendeploy langsung dari komputer/terminal lokal:

1. **Build project** terlebih dahulu:
   ```bash
   npm run build
   ```
2. **Jalankan deploy ke Cloudflare Pages**:
   ```bash
   npx wrangler pages deploy dist --project-name=raker-hrga-it
   ```
   *(Atau gunakan perintah: `npm run deploy:pages`)*
3. Anda akan diminta login ke akun Cloudflare (jika belum login), dan Cloudflare akan memberikan URL live instan (contoh: `https://raker-hrga-it.pages.dev`).

---

## 📦 Metode 3: Direct Upload (Drag & Drop) di Cloudflare Dashboard

Jika tidak ingin menggunakan CLI atau Git:

1. Jalankan build di komputer Anda:
   ```bash
   npm run build
   ```
2. Folder `dist/` akan terbentuk dengan file `index.html`, script, dan aset lengkap.
3. Buka [Cloudflare Dashboard](https://dash.cloudflare.com/) > **Workers & Pages** > **Create application** > **Pages** > **Upload assets**.
4. Beri nama proyek (misal: `raker-hrga-it`), lalu drag & drop isi folder `dist/` atau zip folder `dist/` ke halaman upload.
5. Klik **Deploy site**.

---

## ⚙️ Konfigurasi Khusus yang Sudah Disediakan

Project ini sudah dikonfigurasi secara otomatis untuk Cloudflare Pages:
1. **`public/_redirects`**:
   Aturan `/*  /index.html  200` sudah disiapkan agar SPA routing dan refresh halaman tidak menghasilkan error 404 di Cloudflare Pages.
2. **`public/_headers`**:
   Header keamanan (`X-Frame-Options`, `nosniff`) dan header caching aset statis (`max-age=31536000`) sudah terpasang.
3. **`wrangler.toml`**:
   Konfigurasi default project name dan build output dir (`dist`) sudah disertakan di root project.
