

const su1Btn = document.getElementById("su1Btn");
const suaBtn = document.getElementById("suaBtn");
const genbunBtn = document.getElementById("genbunBtn");
const genkokuBtn = document.getElementById("genkokuBtn");
const eironBtn = document.getElementById("eironBtn");
const eicBtn = document.getElementById("eicBtn");
const rekisoBtn = document.getElementById("rekisoBtn");
const tirisoBtn = document.getElementById("tirisoBtn");
const kajinBtn = document.getElementById("kajinBtn");
const hokenBtn = document.getElementById("hokenBtn");
const kakiBtn = document.getElementById("kakiBtn");
const johoBtn = document.getElementById("johoBtn");
const tadokuBtn = document.getElementById("tadokuBtn");

const su1BtnOn = document.getElementById("su1BtnOn");
const suaBtnOn = document.getElementById("suaBtnOn");
const genbunBtnOn = document.getElementById("genbunBtnOn");
const genkokuBtnOn = document.getElementById("genkokuBtnOn");
const eironBtnOn = document.getElementById("eironBtnOn");
const eicBtnOn = document.getElementById("eicBtnOn");
const rekisoBtnOn = document.getElementById("rekisoBtnOn");
const tirisoBtnOn = document.getElementById("tirisoBtnOn");
const kajinBtnOn = document.getElementById("kajinBtnOn");
const hokenBtnOn = document.getElementById("hokenBtnOn");
const kakiBtnOn = document.getElementById("kakiBtnOn");
const johoBtnOn = document.getElementById("johoBtnOn");
const tadokuBtnOn = document.getElementById("tadokuBtnOn");

const su1 = document.getElementById("su1");
const sua = document.getElementById("sua");
const genbun = document.getElementById("genbun");
const genkoku = document.getElementById("genkoku");
const eiron = document.getElementById("eiron");
const eic = document.getElementById("eic");
const rekiso = document.getElementById("rekiso");
const tiriso = document.getElementById("tiriso");
const kajin = document.getElementById("kajin");
const hoken = document.getElementById("hoken");
const kaki = document.getElementById("kaki");
const joho = document.getElementById("joho");
const tadoku = document.getElementById("tadoku");

const pases1 = document.getElementById("pases1");
const pases2 = document.getElementById("pases2");

su1Btn.addEventListener("click",() => {
    su1BtnOn.classList.remove("hidden");
    suaBtn.classList.remove("hidden");
    genbunBtn.classList.remove("hidden");
    genkokuBtn.classList.remove("hidden");
    eironBtn.classList.remove("hidden");
    eicBtn.classList.remove("hidden");
    rekisoBtn.classList.remove("hidden");
    tirisoBtn.classList.remove("hidden");
    kajinBtn.classList.remove("hidden");
    hokenBtn.classList.remove("hidden");
    kakiBtn.classList.remove("hidden");
    johoBtn.classList.remove("hidden");
    tadokuBtn.classList.remove("hidden");

    su1Btn.classList.add("hidden");
    suaBtnOn.classList.add("hidden");
    genbunBtnOn.classList.add("hidden");
    genkokuBtnOn.classList.add("hidden");
    eironBtnOn.classList.add("hidden");
    eicBtnOn.classList.add("hidden");
    rekisoBtnOn.classList.add("hidden");
    tirisoBtnOn.classList.add("hidden");
    kajinBtnOn.classList.add("hidden");
    hokenBtnOn.classList.add("hidden");
    kakiBtnOn.classList.add("hidden");
    johoBtnOn.classList.add("hidden");
    tadokuBtnOn.classList.add("hidden");


    su1.classList.remove("hidden");
    sua.classList.add("hidden");
    genbun.classList.add("hidden");
    genkoku.classList.add("hidden");
    eiron.classList.add("hidden");
    eic.classList.add("hidden");
    rekiso.classList.add("hidden");
    tiriso.classList.add("hidden");
    kajin.classList.add("hidden");
    hoken.classList.add("hidden");
    kaki.classList.add("hidden");
    joho.classList.add("hidden");
    tadoku.classList.add("hidden");
});

suaBtn.addEventListener("click",() => {
    suaBtnOn.classList.remove("hidden");
    su1Btn.classList.remove("hidden");
    genbunBtn.classList.remove("hidden");
    genkokuBtn.classList.remove("hidden");
    eironBtn.classList.remove("hidden");
    eicBtn.classList.remove("hidden");
    rekisoBtn.classList.remove("hidden");
    tirisoBtn.classList.remove("hidden");
    kajinBtn.classList.remove("hidden");
    hokenBtn.classList.remove("hidden");
    kakiBtn.classList.remove("hidden");
    johoBtn.classList.remove("hidden");
    tadokuBtn.classList.remove("hidden");

    su1BtnOn.classList.add("hidden");
    suaBtn.classList.add("hidden");
    genbunBtnOn.classList.add("hidden");
    genkokuBtnOn.classList.add("hidden");
    eironBtnOn.classList.add("hidden");
    eicBtnOn.classList.add("hidden");
    rekisoBtnOn.classList.add("hidden");
    tirisoBtnOn.classList.add("hidden");
    kajinBtnOn.classList.add("hidden");
    hokenBtnOn.classList.add("hidden");
    kakiBtnOn.classList.add("hidden");
    johoBtnOn.classList.add("hidden");
    tadokuBtnOn.classList.add("hidden");


    sua.classList.remove("hidden");
    su1.classList.add("hidden");
    genbun.classList.add("hidden");
    genkoku.classList.add("hidden");
    eiron.classList.add("hidden");
    eic.classList.add("hidden");
    rekiso.classList.add("hidden");
    tiriso.classList.add("hidden");
    kajin.classList.add("hidden");
    hoken.classList.add("hidden");
    kaki.classList.add("hidden");
    joho.classList.add("hidden");
    tadoku.classList.add("hidden");
});
genbunBtn.addEventListener("click",() => {
    suaBtn.classList.remove("hidden");
    su1Btn.classList.remove("hidden");
    genbunBtnOn.classList.remove("hidden");
    genkokuBtn.classList.remove("hidden");
    eironBtn.classList.remove("hidden");
    eicBtn.classList.remove("hidden");
    rekisoBtn.classList.remove("hidden");
    tirisoBtn.classList.remove("hidden");
    kajinBtn.classList.remove("hidden");
    hokenBtn.classList.remove("hidden");
    kakiBtn.classList.remove("hidden");
    johoBtn.classList.remove("hidden");
    tadokuBtn.classList.remove("hidden");
    
    su1BtnOn.classList.add("hidden");
    suaBtnOn.classList.add("hidden");
    genbunBtn.classList.add("hidden");
    genkokuBtnOn.classList.add("hidden");
    eironBtnOn.classList.add("hidden");
    eicBtnOn.classList.add("hidden");
    rekisoBtnOn.classList.add("hidden");
    tirisoBtnOn.classList.add("hidden");
    kajinBtnOn.classList.add("hidden");
    hokenBtnOn.classList.add("hidden");
    kakiBtnOn.classList.add("hidden");
    johoBtnOn.classList.add("hidden");
    tadokuBtnOn.classList.add("hidden");

    genbun.classList.remove("hidden");
    sua.classList.add("hidden");
    su1.classList.add("hidden");
    genkoku.classList.add("hidden");
    eiron.classList.add("hidden");
    eic.classList.add("hidden");
    rekiso.classList.add("hidden");
    tiriso.classList.add("hidden");
    kajin.classList.add("hidden");
    hoken.classList.add("hidden");
    kaki.classList.add("hidden");
    joho.classList.add("hidden");
    tadoku.classList.add("hidden");
});

genkokuBtn.addEventListener("click",() => {
    suaBtn.classList.remove("hidden");
    su1Btn.classList.remove("hidden");
    genbunBtn.classList.remove("hidden");
    genkokuBtnOn.classList.remove("hidden");
    eironBtn.classList.remove("hidden");
    eicBtn.classList.remove("hidden");
    rekisoBtn.classList.remove("hidden");
    tirisoBtn.classList.remove("hidden");
    kajinBtn.classList.remove("hidden");
    hokenBtn.classList.remove("hidden");
    kakiBtn.classList.remove("hidden");
    johoBtn.classList.remove("hidden");
    tadokuBtn.classList.remove("hidden");
    
    su1BtnOn.classList.add("hidden");
    suaBtnOn.classList.add("hidden");
    genbunBtnOn.classList.add("hidden");
    genkokuBtn.classList.add("hidden");
    eironBtnOn.classList.add("hidden");
    eicBtnOn.classList.add("hidden");
    rekisoBtnOn.classList.add("hidden");
    tirisoBtnOn.classList.add("hidden");
    kajinBtnOn.classList.add("hidden");
    hokenBtnOn.classList.add("hidden");
    kakiBtnOn.classList.add("hidden");
    johoBtnOn.classList.add("hidden");
    tadokuBtnOn.classList.add("hidden");

    genkoku.classList.remove("hidden");
    sua.classList.add("hidden");
    su1.classList.add("hidden");
    genbun.classList.add("hidden");
    eiron.classList.add("hidden");
    eic.classList.add("hidden");
    rekiso.classList.add("hidden");
    tiriso.classList.add("hidden");
    kajin.classList.add("hidden");
    hoken.classList.add("hidden");
    kaki.classList.add("hidden");
    joho.classList.add("hidden");
    tadoku.classList.add("hidden");
});

eironBtn.addEventListener("click",() => {
    suaBtn.classList.remove("hidden");
    su1Btn.classList.remove("hidden");
    genbunBtn.classList.remove("hidden");
    genkokuBtn.classList.remove("hidden");
    eironBtnOn.classList.remove("hidden");
    eicBtn.classList.remove("hidden");
    rekisoBtn.classList.remove("hidden");
    tirisoBtn.classList.remove("hidden");
    kajinBtn.classList.remove("hidden");
    hokenBtn.classList.remove("hidden");
    kakiBtn.classList.remove("hidden");
    johoBtn.classList.remove("hidden");
    tadokuBtn.classList.remove("hidden");
    
    su1BtnOn.classList.add("hidden");
    suaBtnOn.classList.add("hidden");
    genbunBtnOn.classList.add("hidden");
    genkokuBtnOn.classList.add("hidden");
    eironBtn.classList.add("hidden");
    eicBtnOn.classList.add("hidden");
    rekisoBtnOn.classList.add("hidden");
    tirisoBtnOn.classList.add("hidden");
    kajinBtnOn.classList.add("hidden");
    hokenBtnOn.classList.add("hidden");
    kakiBtnOn.classList.add("hidden");
    johoBtnOn.classList.add("hidden");
    tadokuBtnOn.classList.add("hidden");

    eiron.classList.remove("hidden");
    sua.classList.add("hidden");
    su1.classList.add("hidden");
    genbun.classList.add("hidden");
    genkoku.classList.add("hidden");
    eic.classList.add("hidden");
    rekiso.classList.add("hidden");
    tiriso.classList.add("hidden");
    kajin.classList.add("hidden");
    hoken.classList.add("hidden");
    kaki.classList.add("hidden");
    joho.classList.add("hidden");
    tadoku.classList.add("hidden");
});

eicBtn.addEventListener("click",() => {
    suaBtn.classList.remove("hidden");
    su1Btn.classList.remove("hidden");
    genbunBtn.classList.remove("hidden");
    genkokuBtn.classList.remove("hidden");
    eironBtn.classList.remove("hidden");
    eicBtnOn.classList.remove("hidden");
    rekisoBtn.classList.remove("hidden");
    tirisoBtn.classList.remove("hidden");
    kajinBtn.classList.remove("hidden");
    hokenBtn.classList.remove("hidden");
    kakiBtn.classList.remove("hidden");
    johoBtn.classList.remove("hidden");
    tadokuBtn.classList.remove("hidden");
    
    su1BtnOn.classList.add("hidden");
    suaBtnOn.classList.add("hidden");
    genbunBtnOn.classList.add("hidden");
    genkokuBtnOn.classList.add("hidden");
    eironBtnOn.classList.add("hidden");
    eicBtn.classList.add("hidden");
    rekisoBtnOn.classList.add("hidden");
    tirisoBtnOn.classList.add("hidden");
    kajinBtnOn.classList.add("hidden");
    hokenBtnOn.classList.add("hidden");
    kakiBtnOn.classList.add("hidden");
    johoBtnOn.classList.add("hidden");
    tadokuBtnOn.classList.add("hidden");

    eic.classList.remove("hidden");
    sua.classList.add("hidden");
    su1.classList.add("hidden");
    genbun.classList.add("hidden");
    genkoku.classList.add("hidden");
    eiron.classList.add("hidden");
    rekiso.classList.add("hidden");
    tiriso.classList.add("hidden");
    kajin.classList.add("hidden");
    hoken.classList.add("hidden");
    kaki.classList.add("hidden");
    joho.classList.add("hidden");
    tadoku.classList.add("hidden");
});

rekisoBtn.addEventListener("click",() => {
    suaBtn.classList.remove("hidden");
    su1Btn.classList.remove("hidden");
    genbunBtn.classList.remove("hidden");
    genkokuBtn.classList.remove("hidden");
    eironBtn.classList.remove("hidden");
    eicBtn.classList.remove("hidden");
    rekisoBtnOn.classList.remove("hidden");
    tirisoBtn.classList.remove("hidden");
    kajinBtn.classList.remove("hidden");
    hokenBtn.classList.remove("hidden");
    kakiBtn.classList.remove("hidden");
    johoBtn.classList.remove("hidden");
    tadokuBtn.classList.remove("hidden");
    
    su1BtnOn.classList.add("hidden");
    suaBtnOn.classList.add("hidden");
    genbunBtnOn.classList.add("hidden");
    genkokuBtnOn.classList.add("hidden");
    eironBtnOn.classList.add("hidden");
    eicBtnOn.classList.add("hidden");
    rekisoBtn.classList.add("hidden");
    tirisoBtnOn.classList.add("hidden");
    kajinBtnOn.classList.add("hidden");
    hokenBtnOn.classList.add("hidden");
    kakiBtnOn.classList.add("hidden");
    johoBtnOn.classList.add("hidden");
    tadokuBtnOn.classList.add("hidden");

    rekiso.classList.remove("hidden");
    sua.classList.add("hidden");
    su1.classList.add("hidden");
    genbun.classList.add("hidden");
    genkoku.classList.add("hidden");
    eiron.classList.add("hidden");
    eic.classList.add("hidden");
    tiriso.classList.add("hidden");
    kajin.classList.add("hidden");
    hoken.classList.add("hidden");
    kaki.classList.add("hidden");
    joho.classList.add("hidden");
    tadoku.classList.add("hidden");
});

tirisoBtn.addEventListener("click",() => {
    suaBtn.classList.remove("hidden");
    su1Btn.classList.remove("hidden");
    genbunBtn.classList.remove("hidden");
    genkokuBtn.classList.remove("hidden");
    eironBtn.classList.remove("hidden");
    eicBtn.classList.remove("hidden");
    rekisoBtn.classList.remove("hidden");
    tirisoBtnOn.classList.remove("hidden");
    kajinBtn.classList.remove("hidden");
    hokenBtn.classList.remove("hidden");
    kakiBtn.classList.remove("hidden");
    johoBtn.classList.remove("hidden");
    tadokuBtn.classList.remove("hidden");
    
    su1BtnOn.classList.add("hidden");
    suaBtnOn.classList.add("hidden");
    genbunBtnOn.classList.add("hidden");
    genkokuBtnOn.classList.add("hidden");
    eironBtnOn.classList.add("hidden");
    eicBtnOn.classList.add("hidden");
    rekisoBtnOn.classList.add("hidden");
    tirisoBtn.classList.add("hidden");
    kajinBtnOn.classList.add("hidden");
    hokenBtnOn.classList.add("hidden");
    kakiBtnOn.classList.add("hidden");
    johoBtnOn.classList.add("hidden");
    tadokuBtnOn.classList.add("hidden");

    tiriso.classList.remove("hidden");
    sua.classList.add("hidden");
    su1.classList.add("hidden");
    genbun.classList.add("hidden");
    genkoku.classList.add("hidden");
    eiron.classList.add("hidden");
    eic.classList.add("hidden");
    rekiso.classList.add("hidden");
    kajin.classList.add("hidden");
    hoken.classList.add("hidden");
    kaki.classList.add("hidden");
    joho.classList.add("hidden");
    tadoku.classList.add("hidden");
});

kajinBtn.addEventListener("click",() => {
    suaBtn.classList.remove("hidden");
    su1Btn.classList.remove("hidden");
    genbunBtn.classList.remove("hidden");
    genkokuBtn.classList.remove("hidden");
    eironBtn.classList.remove("hidden");
    eicBtn.classList.remove("hidden");
    rekisoBtn.classList.remove("hidden");
    tirisoBtn.classList.remove("hidden");
    kajinBtnOn.classList.remove("hidden");
    hokenBtn.classList.remove("hidden");
    kakiBtn.classList.remove("hidden");
    johoBtn.classList.remove("hidden");
    tadokuBtn.classList.remove("hidden");
    
    su1BtnOn.classList.add("hidden");
    suaBtnOn.classList.add("hidden");
    genbunBtnOn.classList.add("hidden");
    genkokuBtnOn.classList.add("hidden");
    eironBtnOn.classList.add("hidden");
    eicBtnOn.classList.add("hidden");
    rekisoBtnOn.classList.add("hidden");
    tirisoBtnOn.classList.add("hidden");
    kajinBtn.classList.add("hidden");
    hokenBtnOn.classList.add("hidden");
    kakiBtnOn.classList.add("hidden");
    johoBtnOn.classList.add("hidden");
    tadokuBtnOn.classList.add("hidden");

    kajin.classList.remove("hidden");
    sua.classList.add("hidden");
    su1.classList.add("hidden");
    genbun.classList.add("hidden");
    genkoku.classList.add("hidden");
    eiron.classList.add("hidden");
    eic.classList.add("hidden");
    rekiso.classList.add("hidden");
    tiriso.classList.add("hidden");
    hoken.classList.add("hidden");
    kaki.classList.add("hidden");
    joho.classList.add("hidden");
    tadoku.classList.add("hidden");
});

hokenBtn.addEventListener("click",() => {
    suaBtn.classList.remove("hidden");
    su1Btn.classList.remove("hidden");
    genbunBtn.classList.remove("hidden");
    genkokuBtn.classList.remove("hidden");
    eironBtn.classList.remove("hidden");
    eicBtn.classList.remove("hidden");
    rekisoBtn.classList.remove("hidden");
    tirisoBtn.classList.remove("hidden");
    kajinBtn.classList.remove("hidden");
    hokenBtnOn.classList.remove("hidden");
    kakiBtn.classList.remove("hidden");
    johoBtn.classList.remove("hidden");
    tadokuBtn.classList.remove("hidden");
    
    su1BtnOn.classList.add("hidden");
    suaBtnOn.classList.add("hidden");
    genbunBtnOn.classList.add("hidden");
    genkokuBtnOn.classList.add("hidden");
    eironBtnOn.classList.add("hidden");
    eicBtnOn.classList.add("hidden");
    rekisoBtnOn.classList.add("hidden");
    tirisoBtnOn.classList.add("hidden");
    kajinBtnOn.classList.add("hidden");
    hokenBtn.classList.add("hidden");
    kakiBtnOn.classList.add("hidden");
    johoBtnOn.classList.add("hidden");
    tadokuBtnOn.classList.add("hidden");

    hoken.classList.remove("hidden");
    sua.classList.add("hidden");
    su1.classList.add("hidden");
    genbun.classList.add("hidden");
    genkoku.classList.add("hidden");
    eiron.classList.add("hidden");
    eic.classList.add("hidden");
    rekiso.classList.add("hidden");
    tiriso.classList.add("hidden");
    kajin.classList.add("hidden");
    kaki.classList.add("hidden");
    joho.classList.add("hidden");
    tadoku.classList.add("hidden");
});

kakiBtn.addEventListener("click",() => {
    suaBtn.classList.remove("hidden");
    su1Btn.classList.remove("hidden");
    genbunBtn.classList.remove("hidden");
    genkokuBtn.classList.remove("hidden");
    eironBtn.classList.remove("hidden");
    eicBtn.classList.remove("hidden");
    rekisoBtn.classList.remove("hidden");
    tirisoBtn.classList.remove("hidden");
    kajinBtn.classList.remove("hidden");
    hokenBtn.classList.remove("hidden");
    kakiBtnOn.classList.remove("hidden");
    johoBtn.classList.remove("hidden");
    tadokuBtn.classList.remove("hidden");
    
    su1BtnOn.classList.add("hidden");
    suaBtnOn.classList.add("hidden");
    genbunBtnOn.classList.add("hidden");
    genkokuBtnOn.classList.add("hidden");
    eironBtnOn.classList.add("hidden");
    eicBtnOn.classList.add("hidden");
    rekisoBtnOn.classList.add("hidden");
    tirisoBtnOn.classList.add("hidden");
    kajinBtnOn.classList.add("hidden");
    hokenBtnOn.classList.add("hidden");
    kakiBtn.classList.add("hidden");
    johoBtnOn.classList.add("hidden");
    tadokuBtnOn.classList.add("hidden");

    kaki.classList.remove("hidden");
    sua.classList.add("hidden");
    su1.classList.add("hidden");
    genbun.classList.add("hidden");
    genkoku.classList.add("hidden");
    eiron.classList.add("hidden");
    eic.classList.add("hidden");
    rekiso.classList.add("hidden");
    tiriso.classList.add("hidden");
    kajin.classList.add("hidden");
    hoken.classList.add("hidden");
    joho.classList.add("hidden");
    tadoku.classList.add("hidden");
});

johoBtn.addEventListener("click",() => {
    suaBtn.classList.remove("hidden");
    su1Btn.classList.remove("hidden");
    genbunBtn.classList.remove("hidden");
    genkokuBtn.classList.remove("hidden");
    eironBtn.classList.remove("hidden");
    eicBtn.classList.remove("hidden");
    rekisoBtn.classList.remove("hidden");
    tirisoBtn.classList.remove("hidden");
    kajinBtn.classList.remove("hidden");
    hokenBtn.classList.remove("hidden");
    kakiBtn.classList.remove("hidden");
    johoBtnOn.classList.remove("hidden");
    tadokuBtn.classList.remove("hidden");
    
    su1BtnOn.classList.add("hidden");
    suaBtnOn.classList.add("hidden");
    genbunBtnOn.classList.add("hidden");
    genkokuBtnOn.classList.add("hidden");
    eironBtnOn.classList.add("hidden");
    eicBtnOn.classList.add("hidden");
    rekisoBtnOn.classList.add("hidden");
    tirisoBtnOn.classList.add("hidden");
    kajinBtnOn.classList.add("hidden");
    hokenBtnOn.classList.add("hidden");
    kakiBtnOn.classList.add("hidden");
    johoBtn.classList.add("hidden");
    tadokuBtnOn.classList.add("hidden");

    joho.classList.remove("hidden");
    sua.classList.add("hidden");
    su1.classList.add("hidden");
    genbun.classList.add("hidden");
    genkoku.classList.add("hidden");
    eiron.classList.add("hidden");
    eic.classList.add("hidden");
    rekiso.classList.add("hidden");
    tiriso.classList.add("hidden");
    kajin.classList.add("hidden");
    hoken.classList.add("hidden");
    kaki.classList.add("hidden");
    tadoku.classList.add("hidden");
});

tadokuBtn.addEventListener("click",() => {
    suaBtn.classList.remove("hidden");
    su1Btn.classList.remove("hidden");
    genbunBtn.classList.remove("hidden");
    genkokuBtn.classList.remove("hidden");
    eironBtn.classList.remove("hidden");
    eicBtn.classList.remove("hidden");
    rekisoBtn.classList.remove("hidden");
    tirisoBtn.classList.remove("hidden");
    kajinBtn.classList.remove("hidden");
    hokenBtn.classList.remove("hidden");
    kakiBtn.classList.remove("hidden");
    johoBtn.classList.remove("hidden");
    tadokuBtnOn.classList.remove("hidden");
    
    su1BtnOn.classList.add("hidden");
    suaBtnOn.classList.add("hidden");
    genbunBtnOn.classList.add("hidden");
    genkokuBtnOn.classList.add("hidden");
    eironBtnOn.classList.add("hidden");
    eicBtnOn.classList.add("hidden");
    rekisoBtnOn.classList.add("hidden");
    tirisoBtnOn.classList.add("hidden");
    kajinBtnOn.classList.add("hidden");
    hokenBtnOn.classList.add("hidden");
    kakiBtnOn.classList.add("hidden");
    johoBtnOn.classList.add("hidden");
    tadokuBtn.classList.add("hidden");

    tadoku.classList.remove("hidden");
    sua.classList.add("hidden");
    su1.classList.add("hidden");
    genbun.classList.add("hidden");
    genkoku.classList.add("hidden");
    eiron.classList.add("hidden");
    eic.classList.add("hidden");
    rekiso.classList.add("hidden");
    tiriso.classList.add("hidden");
    kajin.classList.add("hidden");
    hoken.classList.add("hidden");
    kaki.classList.add("hidden");
    joho.classList.add("hidden");
});


const homeBtn = document.getElementById("homeBtn");
homeBtn.addEventListener("click",() => {
    window.location.reload();
    //location.href = 'https://omotaku.github.io/sakai_itinen_gakunenmatu/';
});


const selectToggle = document.getElementById('js_selectToggle');
if (selectToggle) {
  selectToggle.addEventListener('change', () => {
    const toggleVal = selectToggle.value;
    console.log(toggleVal)
    switch(toggleVal) {
        case 'selectCont01':
            document.title = "一年-学年末-勉強"
            pases1.classList.remove("hidden");
            pases2.classList.add("hidden");
            break;
        case 'selectCont02':
            document.title = "一年-学年末-復習"
            pases1.classList.add("hidden");
            pases2.classList.remove("hidden");
            break;
    };
  });
}