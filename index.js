// Aşağıdaki görevleri tamamlayın

/*
  GÖREV 1
    - Bir Kisi Constructor'ı yazın 'isim ve 'yas' argümanları alsın.
    - Tüm Kisi örnekleri boş bir `mide` dizisi ile yüklensin.
    - Kisi örneklerine `.ye("birYemek")` yeteneği ekleyin:
        + .ye() parametre olarak bir string almalıdır, bu parametre yenilebilir bir yiyeceği temsil eder
        + Bir yiyecek yenildiğinde, `mide` dizisine eklenir.
        + Mide dizisinde 10 eleman varsa `ye` metodu hiçbir etki yapmaz.
    - Kisi örneklerine `.bosalt()` yeteneği ekleyin:
        + Eğer bosalt tetiklenirse, 'mide' dizisi boşaltılır.
    - Kisi örneklerine `.toString()` metodu ekleyin:
        + Bu `isim` ve `yas` i içeren bir string döndürmelidir Örnek: "Mary, 50"
*/
// function Kullanici(isim) {
//   this.isim = isim;
//   this.yoneticiMi = false;
// }

// let adam = new Kullanici("İhsan");
// let adam3 = new Kullanici("Melis");
// // alert(kullanici.isim); // İhsan
// // alert(kullanici.yoneticiMi); // false
// console.log(adam.isim);

// let adam2 = {
//   isim: "Emre",
//   yoneticiMi: true,
//   yazdir: function(){
//     return "ismim :" + this.isim;
//   }
// }
// adam2.isim= "Ahmet";
// console.log(adam2.yazdir());
// console.log(adam3.yazdir());


function Kisi(isim, yas) {
  this.isim = isim;
  this.yas = yas;
  this.mide =[];
  this.ye = function(yemek){
    if(this.mide.length<10){
    return this.mide.push(yemek);
    }
  }
  this.bosalt = function(){ 
    this.mide =[];
  }
 
  this.toString = function() {
    return this.isim + ', ' + this.yas;
  };
} 


let name1 = new Kisi("İhsan", 40);
name1.ye("Patates")
name1.ye("Ekmek")
name1.toString()

console.log(name1.mide)


/*
  GÖREV 2
    - Bir Araba constructoru yazın, parametre olarak `model` ve `milesPerGallon` alsın.
    - Tüm Araba örnekleri:
        + `tank` ı 0 olarak yüklensin
        + `odometer` ı 0 olarak yüklensin
    - Arabalara `.fill(gallons)` metoduyla depoyu fulleme kabiliyeti ekleyin
      + 'gallons', galon sayısını parametre olarak alacak
      + girilen galonu `tank` a ekleyecek.
    - ESNEK: Arabalara `.drive(distance)` yeteneği ekleyin. Distance ile ilgili:
        + `odometer` ın yükselmesine neden olmalı.
        + `MilesPerGallon` hesaba katılarak `tankın` düşmesine neden olmalıdır.
    - ESNEK: Bir arabanın benzini biterse drive metodu etkisiz şunu döndürmelidir:
        +  "x milde benzinim bitti!" x değişkeni `odometer` daki sayı olmalıdır.
*/

function Araba(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;

  this.fill = function(gallons) {
    this.tank += gallons;
  };

  this.drive = function(distance) {
    let gerekenYakit = distance / this.milesPerGallon;
    if (gerekenYakit > this.tank) {
      console.log(`${this.odometer} milde benzinim bitti!`);
      } else {
  this.odometer += distance;
      this.tank -= gerekenYakit;
    };
  }
}








/* 
  GÖREV 3
  Kendi cümlelerinizle "this" kelimesinin 4 prensibini açıklayın:

  1.Global scope üzerinde kullanıldığında window/console nesnesi olur.
  
  2.Implicit(Örtük) Binding = 
  En yaygın kullanımı bu şekilde olur. Bir fonksiyonu çağırmak için kullanılır. 
  
  3. New Binding = 
  Constructor fonksiyonu ile yeni bir obje tanımlarken kullanılır. Bu objenin properties değerlerini girerken ve içindeki fonksiyonları tanımlarken kullanırız. 

  4. Explicit (Açık) Binding =
  call ve apply ile birlikte bu yöntem kullanılır. -Benim anladığım ve şimdiye kadar gördüğüm kadarıyla- daha önce tanımladığımız bir objeye dışarıdan müdahale ederek 
  bu objenin propertylerini değiştirmek için kullanırız. 



*/


/* !!!! Burdan aşağısını değiştirmeyin !!!! */
function as(){
  console.log('Kodlar sorunsuz çalışıyor!');
  return 'sa';
}
as();
module.exports = {
  as,
  Kisi, 
  Araba,
  /* Bebek */
}
