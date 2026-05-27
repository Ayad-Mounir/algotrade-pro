# 📋 خطة: AlgoTrade Pro — إصلاحات وتطوير

**التاريخ:** 2026-05-27
**الحالة:** ✅ المرحلة 2 مكتملة

---

## 🎯 الهدف
إصلاح الأخطاء الحرجة + إضافة Twelve Data كمصدر بيانات مجاني للتجربة

---

## 📊 المراحل

### ✅ المرحلة 1: إصلاح الأخطاء الحرجة — مكتملة
- [x] حذف `SYMBOLS.forEach` — كان يسبب ReferenceError فور تحميل الصفحة
- [x] إعادة كتابة `runCycle()` بالكامل بدون SYMBOLS/brokerSymbolMap
- [x] إصلاح const sym تعارض في loop
- [x] تحديث `formatPrice()` بكشف ديناميكي
- [x] إضافة تحقق في `toggleBot()` من اختيار الأزواج
- [x] تصحيح `setStatus()` عند قطع الاتصال العادي

### ✅ المرحلة 2: Twelve Data Integration — مكتملة
- [x] Mode Toggle: MetaApi ↔ Twelve Data
- [x] `handleTDConnect()` — تحقق من API Key + اتصال
- [x] `tdFetch()` — wrapper لـ Twelve Data API
- [x] `tdFetchPrice()` — جلب السعر الحالي
- [x] `tdFetchCandles()` — جلب بيانات الشمعات
- [x] `loadTDSymbols()` — 35 زوج: Forex + Metals + Crypto + Indices
- [x] Paper Trading في `placeOrder()` — صفقات محاكاة
- [x] عرض الرصيد الافتراضي في stats
- [x] Interval 60 ثانية لاحترام حد 8 طلبات/دقيقة
- [x] حفظ/استعادة API Key في localStorage

### ⏳ المرحلة 3: تحسينات UX — لم تبدأ
- [ ] Stop Loss / Take Profit للصفقات
- [ ] عرض الصفقات المفتوحة في جدول منفصل
- [ ] ملخص الأداء: P&L إجمالي + Win Rate
- [ ] إشعار عند كل صفقة جديدة
- [ ] Retry logic عند فشل fetchPrice

---

## 🔗 آخر تحديث
المرحلة 2 مكتملة — الفرع: feature/twelvedata-mode → main
