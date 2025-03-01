// رقم WhatsApp الخاص بك (بدون المسافات أو الرموز الخاصة)
const YOUR_PHONE_NUMBER = "201124964610"; // استبدل هذا الرقم برقمك

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // إنشاء نص الرسالة
    const message = `موقعك الحالي:\nLatitude: ${latitude}\nLongitude: ${longitude}`;

    // إنشاء رابط WhatsApp مع الرقم المحدد
    const whatsappLink = `https://wa.me/${YOUR_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;

    // تسجيل الرابط في الكونسول للاختبار
    console.log("WhatsApp Link:", whatsappLink);

}

function showError(error) {
    let errorMessage = "";
    switch (error.code) {
        case error.PERMISSION_DENIED:
            errorMessage = "لم تقم بمشاركة موقعك.";
            break;
        case error.POSITION_UNAVAILABLE:
            errorMessage = "معلومات الموقع غير متاحة.";
            break;
        case error.TIMEOUT:
            errorMessage = "انتهت مهلة الحصول على الموقع.";
            break;
        case error.UNKNOWN_ERROR:
            errorMessage = "حدث خطأ غير معروف.";
            break;
    }
    console.error("Error:", errorMessage); // تسجيل الخطأ في الكونسول
    alert(errorMessage);
}