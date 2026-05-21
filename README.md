# ⚡ AlgoTrade Pro — بوت التداول الذكي

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-00ff88?style=for-the-badge&labelColor=050810)
![Status](https://img.shields.io/badge/status-في_التطوير-ffc340?style=for-the-badge&labelColor=050810)
![PWA](https://img.shields.io/badge/PWA-قابل_للتثبيت-4d9fff?style=for-the-badge&labelColor=050810)
![License](https://img.shields.io/badge/license-Private-ff3d5a?style=for-the-badge&labelColor=050810)

**بوت تداول آلي ذكي يعمل على خوارزمية Moving Average مع دعم MetaApi**

[🌐 تجربة مباشرة](https://YOUR_USERNAME.github.io/algotrade-pro/) • [📋 CHANGELOG](./CHANGELOG.md) • [🐛 الإبلاغ عن خطأ](../../issues)

</div>

---

## 📱 التثبيت كتطبيق (PWA)

يمكن تثبيت AlgoTrade Pro على أي جهاز مباشرةً من المتصفح — **بدون متجر تطبيقات**.

### موبايل Android
1. افتح الرابط في **Chrome**
2. اضغط على قائمة `⋮` ثم **"إضافة إلى الشاشة الرئيسية"**
3. اضغط **"تثبيت"** ✅

### موبايل iOS (iPhone / iPad)
1. افتح الرابط في **Safari**
2. اضغط على زر المشاركة `↑`
3. اختر **"إضافة إلى الشاشة الرئيسية"**
4. اضغط **"إضافة"** ✅

### حاسوب (Windows / Mac / Linux)
1. افتح الرابط في **Chrome أو Edge**
2. ابحث عن أيقونة التثبيت `⊕` في شريط العنوان
3. أو: اضغط `⋮` ← **"تثبيت AlgoTrade Pro"** ✅

---

## ✨ المميزات

| الميزة | الوصف |
|--------|-------|
| 📊 تحليل MA | خوارزمية Moving Average مع دعم متعدد الفترات |
| 💹 6 أزواج | EUR/USD, XAU/USD, GBP/USD, BTC/USD, USD/JPY, NAS100 |
| 📡 MetaApi | اتصال مباشر بحساب MT4/MT5 |
| 📈 الرسوم البيانية | Sparklines حية لكل زوج |
| 📋 سجل النظام | كونسول تفاعلي لمتابعة جميع الإشارات |
| 🌙 وضع ليلي | واجهة داكنة احترافية |
| 📱 PWA | تثبيت على موبايل وحاسوب |
| 🔌 عمل بدون نت | يعمل offline بعد أول تحميل |

---

## 🗂️ هيكل المشروع

```
algotrade-pro/
├── index.html              # التطبيق الرئيسي
├── manifest.json           # إعدادات PWA
├── sw.js                   # Service Worker (الكاش والعمل offline)
├── icons/                  # أيقونات التطبيق
│   ├── icon-192.png
│   └── icon-512.png
├── .github/
│   └── workflows/
│       └── deploy.yml      # نشر تلقائي على GitHub Pages
├── CHANGELOG.md            # سجل التحديثات
└── README.md               # هذا الملف
```

---

## 🚀 إعداد GitHub Pages (أول مرة)

1. **ارفع المشروع على GitHub:**
   ```bash
   git init
   git add .
   git commit -m "feat: 🚀 initial release v1.0.0"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/algotrade-pro.git
   git push -u origin main
   ```

2. **فعّل GitHub Pages:**
   - اذهب إلى `Settings` → `Pages`
   - في **Source** اختر: `GitHub Actions`
   - احفظ ✅

3. **انتظر دقيقة** ثم افتح:
   ```
   https://YOUR_USERNAME.github.io/algotrade-pro/
   ```

---

## 🔄 رفع تحديث جديد

```bash
# بعد أي تعديل:
git add .
git commit -m "fix: وصف التغيير"
git push

# سيتم النشر تلقائياً خلال ~60 ثانية ✅
```

---

## ⚙️ إعداد MetaApi

1. سجّل في [metaapi.cloud](https://metaapi.cloud)
2. أنشئ **API Token** من Dashboard
3. أضف حساب MT4/MT5 واحصل على **Account ID**
4. أدخلهما في الواجهة واضغط **"اتصال"**

---

## 📝 CHANGELOG

راجع [CHANGELOG.md](./CHANGELOG.md) لمتابعة جميع التحديثات.

---

## ⚠️ إخلاء المسؤولية

هذا التطبيق للأغراض التعليمية فقط. التداول في الأسواق المالية ينطوي على مخاطر عالية. المطوّر غير مسؤول عن أي خسائر مالية.

---

<div align="center">
صُنع بـ ❤️ | AlgoTrade Pro © 2025
</div>
