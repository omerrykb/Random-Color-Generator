const hexKoduYazilacakYer = document.querySelector("#hexCode");
const RenkSablonu = document.querySelector(".content-bottom");
const olusturBtn = document.querySelector("#btn-crt");//
const temizleBtn = document.querySelector("#btn-clean");//


function renkOlustur() {

    let Renkler = "ABCDEF1234567890";
    let RenklerDizi = Renkler.split("");
    let DataBase = [];

    DataBase.push("#");

    for (let i = 0; i < 6; i++) {
        let rstSecIndex = Math.floor(Math.random() * RenklerDizi.length);
        DataBase.push(RenklerDizi[rstSecIndex]);
    };

    //console.log(`Renk Oluşturuldu: ${DataBase.join("")}`);
    if (hexKoduYazilacakYer.textContent == "") {
        hexKoduYazilacakYer.style.animation = "olusturmaAnimasyonu .6s linear forwards"
    }
    hexKoduYazilacakYer.textContent = DataBase.join("");
    RenkSablonu.style.background = `${DataBase.join("")}`;
    RenkSablonu.style.animation = "RenkTablosuAnimasyonu .2s linear infinite"
    setTimeout(() => {
        RenkSablonu.style.animation = ""
    }, 600);


};

function clean() {
    RenkSablonu.style.background = "";
    hexKoduYazilacakYer.style.animation = "temizlemeAnimasyonu .6s linear forwards"
    setTimeout(() => {
        hexKoduYazilacakYer.textContent = "";
    }, 600);
}