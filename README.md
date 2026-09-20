# وب‌سایت آکادمی تخصصی شنا استاد اکبر قربانی 🏊‍♂️

این پروژه بر پایه‌ی **Next.js (App Router)** و **Tailwind CSS** توسعه یافته است و به صورت کاملاً بهینه برای اجرای آنلاین روی **GitHub Pages**، **Vercel** یا هر هاست دیگری پیکربندی شده است.

---

## 🚀 راهنمای آنلاین کردن روی گیت‌هاب (GitHub Pages)

پروژه دارای ورک‌فلو آماده‌ی GitHub Actions در مسیر `.github/workflows/deploy.yml` است. برای آنلاین کردن سایت مراحل زیر را انجام دهید:

### ۱. بارگذاری روی مخزن گیت‌هاب:
```bash
git init
git add .
git commit -m "Initial commit - Next.js Swimming Academy"
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY_NAME.git
git push -u origin main
```

### ۲. فعال‌سازی GitHub Pages در ریپازیتوری:
1. در مخزن گیت‌هاب خود به تب **Settings** بروید.
2. از منوی سمت چپ بخش **Pages** را انتخاب کنید.
3. در قسمت **Build and deployment**، بخش **Source** را روی **GitHub Actions** بگذارید.
4. با هر بار `git push` به شاخه `main`، پروژه به طور خودکار بیلد شده و سایت شما روی آدرس اختصاصی گیت‌هاب آنلاین می‌شود:
   `https://USERNAME.github.io/REPOSITORY_NAME`

---

## ⚡ آنلاین کردن سریع‌تر با Vercel (پیشنهادی برای Next.js)

1. وارد سایت [vercel.com](https://vercel.com) شوید.
2. روی دکمه **Add New Project** کلیک کنید و مخزن گیت‌هاب خود را انتخاب کنید.
3. ورسل به طور خودکار Next.js را شناسایی کرده و ظرف ۳۰ ثانیه سایت را با دامنه رایگان SSL آنلاین می‌کند!

---

## 💻 اجرای لوکال (روی کامپیوتر خودتان)

### ۱. نصب وابستگی‌ها:
```bash
npm install
```

### ۲. اجرای سرور توسعه Next.js:
```bash
npm run next:dev
```
سپس آدرس `http://localhost:3000` را در مرورگر باز کنید.

### ۳. خروجی نهایی استاتیک (Build):
```bash
npm run next:build
```
فایل‌های آماده برای هاست در پوشه `out/` ایجاد می‌شوند.
