

// // تفعيل زر "Scroll to Top"
// document.querySelector('.up').addEventListener('click', function (e) {
//     e.preventDefault();
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     });
// });

// // تفعيل زر "Add to Cart"
// const addToCartButtons = document.querySelectorAll('.cart button');
// addToCartButtons.forEach(button => {
//     button.addEventListener('click', function () {
//         const productName = this.parentElement.querySelector('p').innerText;
//         alert(`تم إضافة "${productName}" إلى سلة التسوق!`);
//         // هنا يمكنك إضافة الكود لإرسال المنتج إلى سلة التسوق الفعلية (API أو localStorage).
//     });
// });

// // تفعيل البحث
// const searchForm = document.querySelector('.inputs form');
// searchForm.addEventListener('submit', function (e) {
//     e.preventDefault();
//     const searchQuery = this.querySelector('input[type="search"]').value;
//     if (searchQuery.trim() !== '') {
//         alert(`جارٍ البحث عن: "${searchQuery}"`);
//         // هنا يمكنك إضافة الكود لإرسال طلب البحث إلى API أو تصفية المنتجات.
//     } else {
//         alert('يرجى إدخال نص للبحث.');
//     }
// });

// // تفعيل أزرار التنقل في قسم "Explore Our Products"
// const exploreButtons = document.querySelectorAll('.Explore .btns button');
// const exploreCarts = document.querySelector('.Explore .carts');
// let scrollPosition = 0;

// exploreButtons.forEach(button => {
//     button.addEventListener('click', function () {
//         const scrollWidth = exploreCarts.scrollWidth / 4; // يتم التمرير بمقدار عرض 4 منتجات
//         if (this.querySelector('i').classList.contains('fa-arrow-left')) {
//             scrollPosition = Math.max(scrollPosition - scrollWidth, 0);
//         } else {
//             scrollPosition = Math.min(scrollPosition + scrollWidth, exploreCarts.scrollWidth - exploreCarts.clientWidth);
//         }
//         exploreCarts.scrollTo({
//             left: scrollPosition,
//             behavior: 'smooth'
//         });
//     });
// });

// // تفعيل زر "View All Products"
// const viewAllButton = document.querySelector('.Explore .all');
// viewAllButton.addEventListener('click', function () {
//     alert('جارٍ تحميل جميع المنتجات...');
//     // هنا يمكنك إضافة الكود لتحميل المزيد من المنتجات أو الانتقال إلى صفحة أخرى.
// });