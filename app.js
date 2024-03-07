// 17 SAVOL

// 17.Basketbol o’yinida ikki ochkolik va uch ochkolik gollar
// mavjud. Agar funksiya 1-argument sifatida ikki ochkolik gollar
// sonini va 2-argument sifatida uch ochkolik gollar sonini qabul
// qilsa, jamoaning jami ochkosini qaytaradigan funksiya yasang.


// JAVOBI


// function ochkolar() {
//     var x = prompt("Iltimos, ikki ochkolik zarbalar sonini kiriting:");
//     var y = prompt("Iltimos, uch ochkolik zarbalar sonini kiriting:");

//     x = parseInt(x, 10);
//     y = parseInt(y, 10);

//     var umumiyBallar = (x * 2) + (y * 3);
//     console.log("Jamoaning jami ochkosi:", umumiyBallar);
// }

// ochkolar();



// 18 SAVOL

// 18.Quyidagi namunalarni kuzatgan holda unga muvofiq
// funksiya yasang.


// JAVOB

// function sozlar() {
//     var x = prompt("Iltimos soz kirdiring");

//     let a = "Mubashir";
//     let b = "Matt";
//     let v = "javaScript";

//     var umumiy = (a + x);
//     var umumiy2 = (b + x);
//     var umumiy3 = (v + x);


//     console.log(umumiy);
//     console.log(umumiy2);
//     console.log(umumiy3);

// }

// sozlar();



// 19 SAVOL

// 19.Ikkita son kiritilsa, agar ularning yig’indisi 100dan kichkina
// bo’lsa rost, katta bo’lsa yolg’on qiymat qaytaradigan funksiya
// yasang.

// JAVOB


// function noldanKatta() {
//     let raqam1 = +prompt("Iltimos 1-inchi soni kiriting");
//     let raqam2 = +prompt("Iltimos 2-inchi soni kiriting");



//     raqam1 = parseFloat(raqam1 + raqam2);


//     if (raqam1 > 100) {
//         console.log("false");
//     } else {
//         console.log("true");
//     }
// }

// noldanKatta();



// 20 SAVOL

// 20.Quyidagi namunalarni kuzatgan holda unga muvofiq keladigan funksiya yasang.


// JAVOB


// function printArray(n) {
//     let arr = []

//     for(let i = 1; i <=n; i++){
//         arr.push(i)
//     }

//     return arr;

// }

// console.log(printArray(+prompt("iltimos son kiriting")));



// 21 SAVOL

// 21.Fermada turli xildagi hayvonlar mavjud. Shunday funksiya
// yasangki, ushbu funksiya jami fermadagi hayvonlar oyoqlari
// nechta ekanligini hisoblab qaytarsin. Bunda funksiya birinchi
// argument sifatida tovuqlar sonini, ikkinchi argument sifatida
// qo’ylarni va uchinchi argument sifatida sigirlarning sonini
// qabul qiladi.

//JAVOB



// function oyoqlar() {

//     var tovuq = parseInt(prompt("Tovuqlar sonini kiriting:"));
//     var qoy = parseInt(prompt("Qo'y sonini kiriting:"));
//     var sigir = parseInt(prompt("Sigir sonini kiriting:"));

//     var tovuqOyoqlar = tovuq * 2;
//     var qoyOyoqlar = qoy * 4;
//     var sigirOyoqlar = sigir * 4;

//     var jamiOyoqlar = tovuqOyoqlar + qoyOyoqlar + sigirOyoqlar;

//     var malumot = `Tovuqlar: ${tovuq}, Qo'y: ${qoy}, Sigir: ${sigir} \nTovuqlar Oyoqlari: ${tovuqOyoqlar}, Qo'y Oyoqlari: ${qoyOyoqlar}, Sigir Oyoqlari: ${sigirOyoqlar}, \nJami Oyoqlar: ${jamiOyoqlar}`;

//     console.log(malumot);

//     return jamiOyoqlar;
// }

// oyoqlar();



// 22 SAVOL

//SAVOL


// 22.Javascriptda “&&” matiqiy operatori mavjud. Ushbu operator ikkita mantiqiy ifoda qabul qiladi. Quyidagi namunaga
// muvofiq keladigan funskiya yasang. Ushbu operatordan foydalangan holda!

//JAVOBI


// function and(x, y) {
//     return x && y;
// }

// // Test ma'lumotlar
// console.log(and(true, false)); // false
// console.log(and(true, true)); // true
// console.log(and(false, true)); // false
// console.log(and(false, false)); // false



// 23 SAVOL

// 23.Funksiya 2ta son qiymat qabul qiladi. Agar 1-son 2-songa
// teng bo’lsa rost, aks holda yolg’on qiymat qaytsin. Bunda ikkala
// qiymatning ma’lumot turi bir xil bo’lsin.


//JAVOB

// function tekshir(son1, son2) {
//     if (son1 === son2) {
//         return true;
//     } else {
//         return false;
//     }
// }


// var son1 = parseInt(prompt("Birinchi sonni kiriting:"));
// var son2 = parseInt(prompt("Ikkinchi sonni kiriting:"));


// console.log(tekshir(son1, son2));


// 24 SAVOL

// 24.Futbolda ochkoni hisoblaydigan funksiya yasang. Bunda
// funksiya yutishlar soni, duranglar soni va mag’lubiyatlar sonini
// qabul qiladi. 1ta yutish = 3 ochko, 1ta durang = 1 ochko, 1ta
// mag’lubiyat = 0 ochko hisoblanadi.


//JAVOB

// function futbolOchko(yutishlar, duranglar, maglubiyatlar) {

//     var yutishOchko = yutishlar * 3;

//     var durangOchko = duranglar * 1;

//     var maglubiyatOchko = maglubiyatlar * 0;

//     var jamiOchko = yutishOchko + durangOchko + maglubiyatOchko;

//     return jamiOchko;
// }

// var yutishlar = parseInt(prompt("Yutishlar sonini kiriting:"));
// var duranglar = parseInt(prompt("Duranglar sonini kiriting:"));
// var maglubiyatlar = parseInt(prompt("Mag'lubiyatlar sonini kiriting:"));

// console.log(futbolOchko(yutishlar, duranglar, maglubiyatlar));





//FizzBuzz

// function fizzbuzz(n) {
//     for (let i = 1; i <= n; i++) {
//         if (i % 15 === 0) {
//             console.log("FIZZBUZZ");
//         }
//         else if (i % 3 === 0) {
//             console.log("FIZZ");
//         }
//         else if (i % 5 === 0) {
//             console.log("BUZZ");
//         }
//         else {
//             console.log(i);
//         }
//     }
// }

// const number = parseInt(prompt("Qancha son uchun FizzBuzz o'yini o'ynashni istaysiz?"));
// fizzbuzz(number);


//Fibonachi

// function fibonacci(n) {
//     let fib = [0, 1];
//     for (let i = 2; i < n; i++) {
//         fib.push(fib[i - 1] + fib[i - 2]);
//     }
//     return fib;
// }

// const count = parseInt(prompt("Qancha Fibonachi sonlari ko'rsatilsin?"));
// const fibSeries = fibonacci(count);
// console.log(fibSeries.join(", "));


