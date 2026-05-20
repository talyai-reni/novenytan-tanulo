// --- 1. ADATOK ÉS TÉMA INICIALIZÁLÁS ---

const defaultData = {
    "Gyomnövény felismerés (Vizsga)": [
        // --- T1 CSOPORT ---
        { frontText: "Tyúkhúr (T1)", frontImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Stellaria_media_PR_1.jpg/320px-Stellaria_media_PR_1.jpg", backText: "Stellaria media (T1)", backImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Stellaria_media_PR_1.jpg/320px-Stellaria_media_PR_1.jpg" },
        { frontText: "Pásztortáska (T1)", frontImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Capsella_bursa-pastoris_002.jpg/320px-Capsella_bursa-pastoris_002.jpg", backText: "Capsella bursa-pastoris (T1)", backImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Capsella_bursa-pastoris_002.jpg/320px-Capsella_bursa-pastoris_002.jpg" },
        { frontText: "Pirosló árvacsalán (T1)", frontImg: "", backText: "Lamium purpureum (T1)", backImg: "" },
        { frontText: "Közönséges aggófű (T1)", frontImg: "", backText: "Senecio vulgaris (T1)", backImg: "" },
        { frontText: "Repkény veronika (T1)", frontImg: "", backText: "Veronica hederifolia (T1)", backImg: "" },
        { frontText: "Egynyári perje (T1)", frontImg: "", backText: "Poa annua (T1)", backImg: "" },
        
        // --- T2 CSOPORT ---
        { frontText: "Pipacs (T2)", frontImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Papaver_rhoeas_ssp_rhoeas001.jpg/320px-Papaver_rhoeas_ssp_rhoeas001.jpg", backText: "Papaver rhoeas (T2)", backImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Papaver_rhoeas_ssp_rhoeas001.jpg/320px-Papaver_rhoeas_ssp_rhoeas001.jpg" },
        { frontText: "Kék búzavirág (T2)", frontImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Centaurea_cyanus_001.jpg/320px-Centaurea_cyanus_001.jpg", backText: "Centaurea cyanus (T2)", backImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Centaurea_cyanus_001.jpg/320px-Centaurea_cyanus_001.jpg" },
        { frontText: "Mezei szarkaláb (T2)", frontImg: "", backText: "Consolida regalis (T2)", backImg: "" },
        { frontText: "Vetési hérics (T2)", frontImg: "", backText: "Adonis aestivalis (T2)", backImg: "" },
        { frontText: "Ragadós galaj (T2)", frontImg: "", backText: "Galium aparine (T2)", backImg: "" },
        { frontText: "Ebszékfű (T2)", frontImg: "", backText: "Matricaria inodora (T2)", backImg: "" },
        { frontText: "Szöszös pipitér (T2)", frontImg: "", backText: "Anthemis austriaca (T2)", backImg: "" },
        { frontText: "Mezei árvácska (T2)", frontImg: "", backText: "Viola arvensis (T2)", backImg: "" },
        { frontText: "Sebforrasztó zsombor (T2)", frontImg: "", backText: "Sisymbrium sophia (T2)", backImg: "" },
        { frontText: "Szöszös bükköny (T2)", frontImg: "", backText: "Vicia villosa (T2)", backImg: "" },
        { frontText: "Bürök gémorr (T2)", frontImg: "", backText: "Erodium cicutarium (T2)", backImg: "" },
        { frontText: "Nagy széltippan (T2)", frontImg: "", backText: "Apera spica-venti (T2)", backImg: "" },
        { frontText: "Meddő rozsnok (T2)", frontImg: "", backText: "Bromus sterilis (T2)", backImg: "" },

        // --- T3 CSOPORT ---
        { frontText: "Vadrepce (T3)", frontImg: "", backText: "Sinapis arvensis (T3)", backImg: "" },
        { frontText: "Repcsény retek (T3)", frontImg: "", backText: "Raphanus raphanistrum (T3)", backImg: "" },
        { frontText: "Hélazab (T3)", frontImg: "", backText: "Avena fatua (T3)", backImg: "" },

        // --- T4 CSOPORT ---
        { frontText: "Parlagfű (T4)", frontImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Ambrosia_artemisiifolia_02.jpg/320px-Ambrosia_artemisiifolia_02.jpg", backText: "Ambrosia elatior / artemisiifolia (T4)", backImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Ambrosia_artemisiifolia_02.jpg/320px-Ambrosia_artemisiifolia_02.jpg" },
        { frontText: "Fehér libatop (T4)", frontImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Chenopodium_album_a1.jpg/320px-Chenopodium_album_a1.jpg", backText: "Chenopodium album (T4)", backImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Chenopodium_album_a1.jpg/320px-Chenopodium_album_a1.jpg" },
        { frontText: "Pokolvar libatop (T4)", frontImg: "", backText: "Chenopodium hybridum (T4)", backImg: "" },
        { frontText: "Tatár laboda (T4)", frontImg: "", backText: "Atriplex tatarica (T4)", backImg: "" },
        { frontText: "Szőrös disznóparéj (T4)", frontImg: "", backText: "Amaranthus retroflexus (T4)", backImg: "" },
        { frontText: "Lapulevelű keserűfű (T4)", frontImg: "", backText: "Polygonum lapathifolium (T4)", backImg: "" },
        { frontText: "Madárkeserűfű (T4)", frontImg: "", backText: "Polygonum aviculare (T4)", backImg: "" },
        { frontText: "Szúrós csorbóka (T4)", frontImg: "", backText: "Sonchus asper (T4)", backImg: "" },
        { frontText: "Kanadai betyárkóró (T4)", frontImg: "", backText: "Erigeron canadensis (T4)", backImg: "" },
        { frontText: "Bojtorján szerbtövis (T4)", frontImg: "", backText: "Xanthium strumarium (T4)", backImg: "" },
        { frontText: "Csattanó maszlag (T4)", frontImg: "", backText: "Datura stramonium (T4)", backImg: "" },
        { frontText: "Kicsiny gombvirág (T4)", frontImg: "", backText: "Galinsoga parviflora (T4)", backImg: "" },
        { frontText: "Selyemmályva (T4)", frontImg: "", backText: "Abutilon theophrasti (T4)", backImg: "" },
        { frontText: "Varjúmák (T4)", frontImg: "", backText: "Hibiscus trionum (T4)", backImg: "" },
        { frontText: "Szuláklevelű keserűfű (T4)", frontImg: "", backText: "Bilderdykia convolvulus (T4)", backImg: "" },
        { frontText: "Fekete csucsor (T4)", frontImg: "", backText: "Solanum nigrum (T4)", backImg: "" },
        { frontText: "Napraforgó kutyatej (T4)", frontImg: "", backText: "Euphorbia helioscopia (T4)", backImg: "" },
        { frontText: "Vadkender (T4)", frontImg: "", backText: "Cannabis sativa (T4)", backImg: "" },
        { frontText: "Tarlóvirág (T4)", frontImg: "", backText: "Stachys annua (T4)", backImg: "" },
        { frontText: "Kövér porcsin (T4)", frontImg: "", backText: "Portulaca oleracea (T4)", backImg: "" },
        { frontText: "Aranka fajok (T4)", frontImg: "", backText: "Cuscuta spp. (T4)", backImg: "" },
        { frontText: "Napraforgó szádor (T4)", frontImg: "", backText: "Orobanche cumana (T4)", backImg: "" },
        { frontText: "Kakaslábfű (T4)", frontImg: "", backText: "Echinochloa crus-galli (T4)", backImg: "" },
        { frontText: "Fakó muhar (T4)", frontImg: "", backText: "Setaria pumila (T4)", backImg: "" },
        { frontText: "Zöld muhar (T4)", frontImg: "", backText: "Setaria viridis (T4)", backImg: "" },
        { frontText: "Pirók ujjasmuhar (T4)", frontImg: "", backText: "Digitaria sanguinalis (T4)", backImg: "" },
        { frontText: "Vadköles (T4)", frontImg: "", backText: "Panicum miliaceum (T4)", backImg: "" },

        // --- HT, H1, H2, H3, H4, H5 CSOPORTOK ---
        { frontText: "Nagy bojtorján (HT)", frontImg: "", backText: "Arctium lappa (HT)", backImg: "" },
        { frontText: "Útszéli bogáncs (HT)", frontImg: "", backText: "Carduus acanthoides (HT)", backImg: "" },
        { frontText: "Foltos bürök (HT)", frontImg: "", backText: "Conium maculatum (HT)", backImg: "" },
        { frontText: "Vadmurok (HT)", frontImg: "", backText: "Daucus carota (HT)", backImg: "" },
        { frontText: "Terjőke kígyószisz (HT)", frontImg: "", backText: "Echium vulgare (HT)", backImg: "" },
        { frontText: "Angolperje (H1)", frontImg: "", backText: "Lolium perenne (H1)", backImg: "" },
        { frontText: "Kerek repkény (H2)", frontImg: "", backText: "Glechoma hederacea (H2)", backImg: "" },
        { frontText: "Kúszó boglárka (H2)", frontImg: "", backText: "Ranunculus repens (H2)", backImg: "" },
        { frontText: "Vadrezeda (H3)", frontImg: "", backText: "Reseda lutea (H3)", backImg: "" },
        { frontText: "Pongyola pitypang (H3)", frontImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Taraxacum_officinale_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-135.jpg/320px-Taraxacum_officinale_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-135.jpg", backText: "Taraxacum officinale (H3)", backImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Taraxacum_officinale_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-135.jpg/320px-Taraxacum_officinale_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-135.jpg" },
        { frontText: "Mezei katáng (H3)", frontImg: "", backText: "Cichorium intybus (H3)", backImg: "" },
        { frontText: "Fehér mécsvirág (H4)", frontImg: "", backText: "Melandrium album (H4)", backImg: "" },
        { frontText: "Mezei iringó (H4)", frontImg: "", backText: "Eryngium campestre (H4)", backImg: "" },
        { frontText: "Lándzsás útifű (H5)", frontImg: "", backText: "Plantago lanceolata (H5)", backImg: "" },
        { frontText: "Széleslevelű útifű (H5)", frontImg: "", backText: "Plantago major (H5)", backImg: "" },
        { frontText: "Fekete üröm (H5)", frontImg: "", backText: "Artemisia vulgaris (H5)", backImg: "" },

        // --- G1, G2, G3 CSOPORTOK ---
        { frontText: "Nagy csalán (G1)", frontImg: "", backText: "Urtica dioica (G1)", backImg: "" },
        { frontText: "Mezei zsurló (G1)", frontImg: "", backText: "Equisetum arvense (G1)", backImg: "" },
        { frontText: "Nád (G1)", frontImg: "", backText: "Phragmites communis (G1)", backImg: "" },
        { frontText: "Fenyércirok (G1)", frontImg: "", backText: "Sorghum halepense (G1)", backImg: "" },
        { frontText: "Sövényszulák (G1)", frontImg: "", backText: "Calystegia sepium (G1)", backImg: "" },
        { frontText: "Közönséges cickafark (G1)", frontImg: "", backText: "Achillea millefolium (G1)", backImg: "" },
        { frontText: "Tarackbúza (G1)", frontImg: "", backText: "Agropyron repens (G1)", backImg: "" },
        { frontText: "Csillagpázsit (G1)", frontImg: "", backText: "Cynodon dactylon (G1)", backImg: "" },
        { frontText: "Mogyorós lednek (G2)", frontImg: "", backText: "Lathyrus tuberosus (G2)", backImg: "" },
        { frontText: "Vízi menta (G2)", frontImg: "", backText: "Mentha aquatica (G2)", backImg: "" },
        { frontText: "Apró szulák (G3)", frontImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Convolvulus_arvensis_01.jpg/320px-Convolvulus_arvensis_01.jpg", backText: "Convolvulus arvensis (G3)", backImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Convolvulus_arvensis_01.jpg/320px-Convolvulus_arvensis_01.jpg" },
        { frontText: "Mezei acat (G3)", frontImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Cirsium_arvense_20050720_085.jpg/320px-Cirsium_arvense_20050720_085.jpg", backText: "Cirsium arvense (G3)", backImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Cirsium_arvense_20050720_085.jpg/320px-Cirsium_arvense_20050720_085.jpg" },
        { frontText: "Hamvas szeder (G3)", frontImg: "", backText: "Rubus caesius (G3)", backImg: "" },
        { frontText: "Útszéli zsázsa (G3)", frontImg: "", backText: "Lepidium draba (G3)", backImg: "" },
        { frontText: "Szíriai selyemkóró (G3)", frontImg: "", backText: "Asclepias syriaca (G3)", backImg: "" }
    ]
};

// 2. ADATOK BETÖLTÉSE
let appData;
try {
    appData = JSON.parse(localStorage.getItem('myFlashcardsData'));
} catch (e) {
    appData = null;
}

if (!appData || appData["Növénytan (Példa)"] || !appData["Gyomnövény felismerés (Vizsga)"]) {
    appData = defaultData;
    localStorage.setItem('myFlashcardsData', JSON.stringify(appData));
}

let currentCategory = Object.keys(appData)[0];
let currentIndex = 0;
let currentMode = 'flashcard';
let editingIndex = null;
let gameCards = []; 

const gameArea = document.getElementById('game-area');
const categorySelect = document.getElementById('category-select');

// Téma beállítása
if (localStorage.getItem('theme') === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) themeIcon.classList.replace('fa-moon', 'fa-sun');
}

// --- 3. FŐ FUNKCIÓK ---
initCategories();
startMode('flashcard', document.querySelector('.tab.active'));

// Billentyűzet kezelés
document.addEventListener('keydown', (e) => {
    if (document.querySelector('.overlay:not(.hidden)')) return;
    if (e.code === 'Space' && currentMode === 'flashcard') {
        e.preventDefault();
        const card = document.querySelector('.card');
        if (card) card.classList.toggle('is-flipped');
    }
    if (e.code === 'ArrowRight') nextCard();
    if (e.code === 'ArrowLeft') prevCard();
});

function toggleTheme() {
    const body = document.body;
    const icon = document.getElementById('theme-icon');
    if (body.hasAttribute('data-theme')) {
        body.removeAttribute('data-theme');
        if(icon) icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        if(icon) icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    }
}

function initCategories() {
    if(!categorySelect) return;
    categorySelect.innerHTML = '';
    Object.keys(appData).forEach(catName => {
        const option = document.createElement('option');
        option.value = catName;
        option.textContent = catName;
        if (catName === currentCategory) option.selected = true;
        categorySelect.appendChild(option);
    });
}

function changeCategory() {
    currentCategory = categorySelect.value;
    currentIndex = 0;
    startMode(currentMode, document.querySelector('.tab.active'));
}

function addNewCategory() {
    const newCat = prompt("Új mappa neve:");
    if (newCat && !appData[newCat]) {
        appData[newCat] = [];
        saveData();
        initCategories();
        categorySelect.value = newCat;
        changeCategory();
        toggleEditor();
    }
}

// --- 4. JÁTÉKMOTOR ÉS RENDEZÉS ---

function toggleShuffle() {
    startMode(currentMode, document.querySelector('.tab.active'));
}

function startMode(mode, btnElement) {
    currentMode = mode;
    currentIndex = 0;
    if(btnElement) {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        btnElement.classList.add('active');
    }

    const originalCards = appData[currentCategory] || [];
    gameCards = [...originalCards];

    const shuffleToggle = document.getElementById('shuffle-toggle');
    const isShuffled = shuffleToggle ? shuffleToggle.checked : false;
    const abcLabel = document.getElementById('label-abc');
    const shuffleLabel = document.getElementById('label-shuffle');

    if (isShuffled) {
        gameCards.sort(() => Math.random() - 0.5);
        if(abcLabel) abcLabel.style.color = "var(--text-muted)";
        if(shuffleLabel) shuffleLabel.style.color = "var(--text)";
    } else {
        gameCards.sort((a, b) => a.frontText.localeCompare(b.frontText, 'hu'));
        if(abcLabel) abcLabel.style.color = "var(--text)";
        if(shuffleLabel) shuffleLabel.style.color = "var(--text-muted)";
    }

    // Haladásjelző elrejtése Áttekintés módban
    const progressInfo = document.querySelector('.progress-info');
    if (progressInfo) {
        progressInfo.style.display = (currentMode === 'overview') ? 'none' : 'block';
    }

    renderGame();
}

function renderGame() {
    if (currentMode !== 'overview') {
        updateProgress(gameCards.length);
    }

    if (gameCards.length === 0) {
        gameArea.innerHTML = `<div style="padding:40px; color:var(--text-muted);"><i class="fas fa-folder-open" style="font-size:3rem; margin-bottom:15px;"></i><h3>Üres mappa</h3><p>Használd a Szerkesztés gombot!</p></div>`;
        return;
    }
    if (currentIndex >= gameCards.length && currentMode !== 'overview') {
        gameArea.innerHTML = `<div style="padding:40px;"><h2 style="color:var(--primary);">Vége! 🎉</h2><button class="btn-primary" onclick="startMode('${currentMode}')">Újra</button></div>`;
        return;
    }

    if (currentMode === 'flashcard') loadFlashcard(gameCards[currentIndex]);
    else if (currentMode === 'choice') loadQuiz(gameCards[currentIndex], gameCards);
    else if (currentMode === 'typing') loadTyping(gameCards[currentIndex]);
    else if (currentMode === 'overview') loadOverview(gameCards); // Új játékmód
}

function updateProgress(total) {
    const bar = document.getElementById('progress-bar');
    const txt = document.getElementById('progress-text');
    if(!bar || !txt) return;
    
    let displayIdx = (currentIndex >= total) ? total : currentIndex + 1;
    if(total === 0) displayIdx = 0;
    txt.innerText = `${displayIdx} / ${total}`;
    bar.style.width = total > 0 ? `${(displayIdx / total) * 100}%` : '0%';
}

function nextCard() {
    if (currentIndex < gameCards.length) { currentIndex++; renderGame(); }
}
function prevCard() {
    if (currentIndex > 0) { currentIndex--; renderGame(); }
}

// --- 5. HTML GENERÁLÓK (KÁRTYA, KVÍZ, ÍRÁS ÉS ÁTTEKINTÉS) ---

function loadFlashcard(card) {
    gameArea.innerHTML = `
        <div class="scene"><div class="card" onclick="this.classList.toggle('is-flipped')">
            <div class="card-face">${card.frontImg ? `<img src="${card.frontImg}">` : ''}<h3>${card.frontText}</h3><p style="margin-top:auto; font-size:0.8rem; color:var(--text-muted);">(Kattints)</p></div>
            <div class="card-face card-face--back">${card.backImg ? `<img src="${card.backImg}">` : ''}<h3>${card.backText}</h3></div>
        </div></div>
        <div style="margin-top:20px; display:flex; justify-content:center; gap:20px;">
            <button class="btn-icon" onclick="prevCard()"><i class="fas fa-arrow-left fa-lg"></i></button>
            <button class="btn-icon" onclick="nextCard()"><i class="fas fa-arrow-right fa-lg"></i></button>
        </div>`;
}

function loadQuiz(card, allCards) {
    let opts = [card.backText];
    while (opts.length < 4 && allCards.length >= 4) {
        let rnd = allCards[Math.floor(Math.random()*allCards.length)].backText;
        if (!opts.includes(rnd)) opts.push(rnd);
    }
    opts.sort(() => Math.random() - 0.5);
    let btns = opts.map(o => `<button class="quiz-btn" onclick="checkAnswer(this, '${o.replace(/'/g,"\\'")}', '${card.backText.replace(/'/g,"\\'")}')">${o}</button>`).join('');
    
    gameArea.innerHTML = `<div class="quiz-container">${card.frontImg?`<img src="${card.frontImg}" style="max-height:150px; display:block; margin:0 auto;">`:''}
        <h3 style="text-align:center;">${card.frontText}</h3><div class="quiz-options">${btns}</div><div id="feedback" style="margin-top:15px; text-align:center; font-weight:bold; min-height:24px;"></div><button id="next-btn" class="btn-primary full-width" onclick="nextCard()" style="display:none;">Tovább</button></div>`;
}

function checkAnswer(btn, sel, corr) {
    const fb = document.getElementById('feedback');
    if (sel === corr) {
        btn.style.borderColor = "#28a745"; btn.style.backgroundColor = "rgba(40,167,69,0.1)";
        fb.innerHTML = "<span style='color:#28a745'>Helyes!</span>"; document.getElementById('next-btn').style.display = "block";
    } else {
        btn.style.borderColor = "#dc3545"; btn.style.backgroundColor = "rgba(220,53,69,0.1)";
        fb.innerHTML = "<span style='color:#dc3545'>Nem jó!</span>";
    }
}

function loadTyping(card) {
    gameArea.innerHTML = `<div class="quiz-container" style="text-align:center;">${card.frontImg?`<img src="${card.frontImg}" style="max-height:150px;">`:''}
        <h3>${card.frontText}</h3><input type="text" id="type-input" placeholder="Válasz..." style="width:80%; margin:15px 0; padding:10px;"><button class="btn-primary" onclick="checkType('${card.backText.replace(/'/g,"\\'")}')">Ellenőrzés</button>
        <div id="feedback" style="margin-top:15px; font-weight:bold;"></div><button id="next-btn" class="btn-primary" onclick="nextCard()" style="display:none; margin:10px auto;">Tovább</button></div>`;
}

function checkType(corr) {
    const inp = document.getElementById('type-input');
    const fb = document.getElementById('feedback');
    if (inp.value.trim().toLowerCase() === corr.toLowerCase()) {
        fb.innerHTML = "<span style='color:#28a745'>Helyes!</span>"; document.getElementById('next-btn').style.display="block";
    } else { fb.innerHTML = `<span style='color:#dc3545'>Helyes válasz: ${corr}</span>`; document.getElementById('next-btn').style.display="block"; }
}

// --- ÚJ FUNKCIÓ: ÁTTEKINTÉS LISTA ---
function loadOverview(cards) {
    let html = '<div class="overview-container">';
    
    cards.forEach((card, index) => {
        html += `
            <div class="overview-item">
                <div class="overview-number">${index + 1}.</div>
                <div class="overview-col">
                    ${card.frontImg ? `<img src="${card.frontImg}" alt="Kép">` : '<div style="width:70px; height:70px; background:transparent; display:flex; align-items:center; justify-content:center; color:var(--border);"><i class="fas fa-image fa-2x"></i></div>'}
                    <span class="overview-text">${card.frontText}</span>
                </div>
                <div class="overview-col">
                    ${card.backImg ? `<img src="${card.backImg}" alt="Kép">` : '<div style="width:70px; height:70px; background:transparent; display:flex; align-items:center; justify-content:center; color:var(--border);"><i class="fas fa-image fa-2x"></i></div>'}
                    <span class="overview-text">${card.backText}</span>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    gameArea.innerHTML = html;
}

// --- 6. SZERKESZTŐ ÉS KÉPFELDOLGOZÁS ---

function toggleEditor() {
    const ol = document.getElementById('editor-overlay');
    ol.classList.toggle('hidden');
    if(!ol.classList.contains('hidden')) { 
        document.getElementById('current-cat-name').textContent = currentCategory; 
        cancelEdit(); 
        renderList(); 
    } else {
        renderGame();
    }
}

function renderList() {
    const list = document.getElementById('card-list'); 
    list.innerHTML = '';
    const cards = appData[currentCategory] || [];
    if (cards.length === 0) { list.innerHTML = `<p style="color:var(--text-muted); text-align:center;">Még nincsenek kártyák ebben a mappában.</p>`; return; }

    cards.forEach((c, i) => {
        const imgHtml = c.frontImg ? `<img src="${c.frontImg}">` : `<div style="width:60px; height:60px; background:#eee; border-radius:6px; display:flex; align-items:center; justify-content:center; color:#ccc; flex-shrink:0;"><i class="fas fa-image"></i></div>`;
        list.innerHTML += `<div class="card-list-item"><div class="card-info">${imgHtml}<div class="card-texts"><span>${c.frontText}</span><small>${c.backText}</small></div></div><div class="list-actions"><button class="btn-icon" onclick="editCard(${i})" title="Szerkesztés" style="color:var(--primary)"><i class="fas fa-pencil-alt"></i></button><button class="btn-icon" onclick="delCard(${i})" title="Törlés" style="color:#dc3545"><i class="fas fa-trash-alt"></i></button></div></div>`;
    });
}

function editCard(index) {
    const card = appData[currentCategory][index];
    editingIndex = index;
    document.getElementById('new-front-text').value = card.frontText;
    document.getElementById('new-back-text').value = card.backText;
    document.getElementById('new-front-img-data').value = card.frontImg;
    document.getElementById('new-back-img-data').value = card.backImg;
    if(card.frontImg) { const p = document.getElementById('preview-front'); p.src = card.frontImg; p.style.display = 'block'; }
    if(card.backImg) { const p = document.getElementById('preview-back'); p.src = card.backImg; p.style.display = 'block'; }
    document.getElementById('save-card-btn').textContent = "Módosítás mentése";
    document.getElementById('save-card-btn').style.backgroundColor = "#ff9800";
    document.getElementById('cancel-edit-btn').style.display = "block";
    document.querySelector('.editor-modal').scrollTop = 0; 
}

function cancelEdit() {
    editingIndex = null;
    clearInputs();
    document.getElementById('save-card-btn').textContent = "Hozzáadás a listához";
    document.getElementById('save-card-btn').style.backgroundColor = "";
    document.getElementById('cancel-edit-btn').style.display = "none";
}

function saveNewCard() {
    const fT = document.getElementById('new-front-text').value;
    const bT = document.getElementById('new-back-text').value;
    const fI = document.getElementById('new-front-img-data').value || document.getElementById('new-front-url').value;
    const bI = document.getElementById('new-back-img-data').value || document.getElementById('new-back-url').value;
    
    if(!fT && !fI) return alert("Kártya elejére (kérdés) kell valami!");
    if(!bT && !bI) return alert("Kártya hátuljára (válasz) kell valami!");
    
    const newCardData = {frontText:fT, frontImg:fI, backText:bT, backImg:bI};
    if (editingIndex !== null) { 
        appData[currentCategory][editingIndex] = newCardData; 
        alert("Kártya módosítva!"); 
        cancelEdit(); 
    } else { 
        appData[currentCategory].push(newCardData); 
        clearInputs(); 
    }
    saveData(); 
    renderList();
}

function clearInputs() {
    document.getElementById('new-front-text').value=''; document.getElementById('new-front-url').value='';
    document.getElementById('new-front-img-data').value=''; document.getElementById('preview-front').style.display='none'; document.getElementById('preview-front').src='';
    document.getElementById('new-back-text').value=''; document.getElementById('new-back-url').value='';
    document.getElementById('new-back-img-data').value=''; document.getElementById('preview-back').style.display='none'; document.getElementById('preview-back').src='';
}

function delCard(i) { 
    if(confirm("Biztosan törlöd ezt a kártyát?")) { 
        appData[currentCategory].splice(i,1); 
        if(editingIndex === i) cancelEdit();
        saveData(); renderList(); 
    } 
}
function saveData() { localStorage.setItem('myFlashcardsData', JSON.stringify(appData)); }

function exportData() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appData));
    const dlAnchorElem = document.createElement('a'); 
    dlAnchorElem.setAttribute("href", dataStr); 
    dlAnchorElem.setAttribute("download", "tanulo_adatok.json"); 
    dlAnchorElem.click();
}

function importData(input) {
    const file = input.files[0]; if(!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        try { 
            const res = JSON.parse(e.target.result); 
            if(confirm("Ez felülírja a jelenlegi kártyáidat! Mehet?")) { 
                appData = res; saveData(); initCategories(); changeCategory(); renderList(); 
                alert("Sikeres betöltés!"); 
            } 
        } catch(err) { alert("Hiba a fájlban!"); }
    };
    reader.readAsText(file); input.value = '';
}

function processImage(input, hiddenInputId, previewId) {
    const file = input.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = function(event) {
        const img = new Image();
        img.onload = function() {
            const canvas = document.createElement('canvas'); const ctx = canvas.getContext('2d');
            const maxWidth = 600; let width = img.width; let height = img.height;
            if (width > maxWidth) { height *= maxWidth / width; width = maxWidth; }
            canvas.width = width; canvas.height = height; ctx.drawImage(img, 0, 0, width, height);
            const dataUrl = canvas.toDataURL('image/jpeg', 0.7);
            document.getElementById(hiddenInputId).value = dataUrl;
            const preview = document.getElementById(previewId); preview.src = dataUrl; preview.style.display = "block";
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(file);
}