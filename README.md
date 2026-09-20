# وب‌سایت آکادمی تخصصی شنا استاد اکبر قربانی 🏊‍♂️

این پروژه به همراه پیکربندی کامل برای استقرار روی **GitHub Pages** (توسط Vite و GitHub Actions) و همچنین پشتیبانی از Next.js آماده شده است.

---

## 🚀 راهنمای آنلاین کردن روی GitHub Pages (بدون صفحه سفید / Blank Screen)

برای جلوگیری از مشکل متداول **صفحه سفید (Blank Screen)** در گیت‌هاب پیجز، مسیر پایه در فایل `vite.config.ts` به صورت `base: './'` تنظیم شده است تا تمامی اسکریپت‌ها، استایل‌ها و فونت‌ها در هر نام مخزنی (Subfolder) به صورت خودکار لود شوند.

### مراحل انتشار:

#### ۱. ارسال کد به مخزن گیت‌هاب (Push):
```bash
git init
git add .
git commit -m "Configure GitHub Pages deployment with Vite"
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY_NAME.git
git push -u origin main
```
*(به جای `USERNAME` و `REPOSITORY_NAME` نام کاربری و نام مخزن خود را قرار دهید)*

#### ۲. فعال‌سازی GitHub Pages در تنظیمات مخزن:
1. در صفحه ریپازیتوری خود در گیت‌هاب، به تب **Settings** بروید.
2. از منوی سمت چپ گزینه **Pages** را انتخاب کنید.
3. در قسمت **Build and deployment**، گزینه **Source** را روی **GitHub Actions** بگذارید.
4. فایل آماده‌ی `.github/workflows/deploy.yml` به طور خودکار پروژه را با دستور `npm run build` بیلد کرده و محتوای پوشه `dist` را منتشر می‌کند.
5. ظرف ۱ الی ۲ دقیقه، وب‌سایت شما روی آدرس زیر در دسترس خواهد بود:
   `https://USERNAME.github.io/REPOSITORY_NAME/`

---

## 💻 اجرای لوکال (روی کامپیوتر)

```bash
# ۱. نصب پکیج‌ها
npm install

# ۲. اجرای پروژه در حالت توسعه
npm run dev

# ۳. تست بیلد نهایی
npm run build
```
