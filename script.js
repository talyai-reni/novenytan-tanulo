// --- 1. ADATKEZELÉS ---

// Alapértelmezett kezdő adatok
const defaultData = 
{
    "Növénytan (Fajfelismerés)": 
    [
        { frontText: "Mi ez a virág?", frontImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Galanthus_nivalis.jpg/320px-Galanthus_nivalis.jpg", backText: "Hóvirág", backImg: "" },
        { frontText: "Mi ez a virág?", frontImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Papaver_rhoeas_ssp_rhoeas001.jpg/320px-Papaver_rhoeas_ssp_rhoeas001.jpg", backText: "Pipacs", backImg: "" }
    ],
    "Növénytermesztés (Magok)": 
    [
        { frontText: "Milyen mag ez?", frontImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Sunflower_sky_backdrop.jpg/320px-Sunflower_sky_backdrop.jpg", backText: "Napraforgó", backImg: "" },
        { frontText: "Milyen magja?", frontImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/B%C3%BAza_szemek.jpg/320px-B%C3%BAza_szemek.jpg", backText: "Búza", backImg: "" }
    ]
};

// Adatok betöltése
let appData = JSON.parse(localStorage.getItem('myFlashcardsData')) || defaultData;
let currentCategory = Object.keys(appData)[0];
let currentIndex = 0;
let currentMode = 'flashcard';

const gameArea = document.getElementById('game-area');
const categorySelect = document.getElementById('category-select');

// --- 2. TÉMA KEZELÉS (Nappal / Éjszaka) ---
function initTheme() 
{
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') 
    {
        document.body.setAttribute('data-theme', 'dark');
        document.getElementById('theme-icon').classList.replace('fa-moon', 'fa-sun');
    }
}

function toggleTheme() 
{
    const body = document.body;
    const icon = document.getElementById('theme-icon');
    
    // Ha jelenleg sötét van, váltunk világosra
    if (body.hasAttribute('data-theme')) 
    {
        body.removeAttribute('data-theme');
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    } 
    else 
    {
        // Ha világos van, váltunk sötétre
        body.setAttribute('data-theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    }
}

// --- 3. INICIALIZÁLÁS ---
initTheme();
initCategories();
startMode('flashcard', document.querySelector('.tab.active'));

// Billentyűzet vezérlés
document.addEventListener('keydown', (e) => 
{
    if (document.querySelector('.overlay:not(.hidden)')) return; 

    if (e.code === 'Space' && currentMode === 'flashcard') 
    {
        e.preventDefault();
        const card = document.querySelector('.card');
        if (card) card.classList.toggle('is-flipped');
    }
    if (e.code === 'ArrowRight') nextCard();
    if (e.code === 'ArrowLeft') prevCard();
});

// --- 4. FUNKCIÓK ---

function initCategories() 
{
    categorySelect.innerHTML = '';
    Object.keys(appData).forEach(catName => 
    {
        const option = document.createElement('option');
        option.value = catName;
        option.textContent = catName;
        if (catName === currentCategory) option.selected = true;
        categorySelect.appendChild(option);
    });
}

function changeCategory() 
{
    currentCategory = categorySelect.value;
    currentIndex = 0;
    startMode(currentMode, document.querySelector('.tab.active'));
}

function addNewCategory() 
{
    const newCat = prompt("Add meg az új mappa nevét:");
    if (newCat && !appData[newCat]) 
    {
        appData[newCat] = [];
        saveData();
        initCategories();
        categorySelect.value = newCat;
        changeCategory();
        toggleEditor(); // Azonnal nyissuk meg a szerkesztőt
    }
}

function startMode(mode, btnElement) 
{
    currentMode = mode;
    currentIndex = 0;
    
    // Aktív fül jelölése
    if(btnElement) 
    {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        btnElement.classList.add('active');
    }

    renderGame();
}

function renderGame() 
{
    const cards = appData[currentCategory];
    updateProgress(cards.length);

    // Üres mappa kezelése
    if (!cards || cards.length === 0) 
    {
        gameArea.innerHTML = `
            <div style="padding:40px; color:var(--text-muted);">
                <i class="fas fa-folder-open" style="font-size:3rem; margin-bottom:15px;"></i>
                <h3>Ez a mappa üres</h3>
                <p>Kattints a "Szerkesztés" gombra új kártyákhoz!</p>
            </div>`;
        return;
    }

    // Lecke vége kezelése
    if (currentIndex >= cards.length) 
    {
        gameArea.innerHTML = `
            <div style="padding:40px;">
                <h2 style="color:var(--primary);">Gratulálok, végigértél! 🎉</h2>
                <button class="btn-primary" onclick="startMode('${currentMode}')">Újrakezdés</button>
            </div>`;
        return;
    }

    // Mód betöltése
    if (currentMode === 'flashcard') loadFlashcard(cards[currentIndex]);
    else if (currentMode === 'choice') loadQuiz(cards[currentIndex], cards);
    else if (currentMode === 'typing') loadTyping(cards[currentIndex]);
}

function updateProgress(total) 
{
    const progressText = document.getElementById('progress-text');
    const progressBar = document.getElementById('progress-bar');
    
    let displayIndex = (currentIndex >= total) ? total : currentIndex + 1;
    if(total === 0) displayIndex = 0;

    progressText.innerText = `${displayIndex} / ${total}`;
    progressBar.style.width = total > 0 ? `${(displayIndex / total) * 100}%` : '0%';
}

function nextCard() 
{
    const cards = appData[currentCategory];
    if (currentIndex < cards.length) 
    {
        currentIndex++;
        renderGame();
    }
}

function prevCard() 
{
    if (currentIndex > 0) 
    {
        currentIndex--;
        renderGame();
    }
}

// --- JÁTÉKMÓD HTML GENERÁLÁS ---

function loadFlashcard(card) 
{
    gameArea.innerHTML = `
        <div class="scene">
            <div class="card" onclick="this.classList.toggle('is-flipped')">
                <div class="card-face">
                    ${card.frontImg ? `<img src="${card.frontImg}">` : ''}
                    <h3>${card.frontText}</h3>
                    <p style="margin-top:auto; font-size:0.8rem; color:var(--text-muted);">Kattints a fordításhoz</p>
                </div>
                <div class="card-face card-face--back">
                    ${card.backImg ? `<img src="${card.backImg}">` : ''}
                    <h3>${card.backText}</h3>
                </div>
            </div>
        </div>
        <div style="margin-top: 20px; display:flex; justify-content:center; gap:20px;">
            <button class="btn-icon" onclick="prevCard()"><i class="fas fa-arrow-left fa-lg"></i></button>
            <button class="btn-icon" onclick="nextCard()"><i class="fas fa-arrow-right fa-lg"></i></button>
        </div>
    `;
}

function loadQuiz(card, allCards) 
{
    // Válaszok generálása
    let options = [card.backText];
    while (options.length < 4 && allCards.length >= 4) 
    {
        const random = allCards[Math.floor(Math.random() * allCards.length)].backText;
        if (!options.includes(random)) options.push(random);
    }
    options.sort(() => Math.random() - 0.5);

    let buttonsHtml = '';
    options.forEach(opt => 
    {
        buttonsHtml += `<button class="quiz-btn" onclick="checkAnswer(this, '${opt.replace(/'/g, "\\'")}', '${card.backText.replace(/'/g, "\\'")}')">${opt}</button>`;
    });

    gameArea.innerHTML = `
        <div class="quiz-container">
            ${card.frontImg ? `<img src="${card.frontImg}" style="max-height:150px; display:block; margin:0 auto;">` : ''}
            <h3 style="text-align:center;">${card.frontText}</h3>
            <div class="quiz-options">${buttonsHtml}</div>
            <div id="feedback" style="margin-top:15px; text-align:center; font-weight:bold; min-height:24px;"></div>
            <button id="next-btn" class="btn-primary full-width" onclick="nextCard()" style="display:none;">Tovább</button>
        </div>
    `;
}

function checkAnswer(btn, selected, correct) 
{
    const feedback = document.getElementById('feedback');
    if (selected === correct) 
    {
        btn.style.backgroundColor = "rgba(40, 167, 69, 0.2)";
        btn.style.borderColor = "#28a745";
        feedback.innerHTML = "<span style='color:#28a745'>Helyes!</span>";
        document.getElementById('next-btn').style.display = "block";
    } 
    else 
    {
        btn.style.backgroundColor = "rgba(220, 53, 69, 0.2)";
        btn.style.borderColor = "#dc3545";
        feedback.innerHTML = "<span style='color:#dc3545'>Helytelen!</span>";
    }
}

function loadTyping(card) 
{
    gameArea.innerHTML = `
        <div class="quiz-container" style="text-align:center;">
            ${card.frontImg ? `<img src="${card.frontImg}" style="max-height:150px;">` : ''}
            <h3>${card.frontText}</h3>
            <input type="text" id="type-input" placeholder="Írd be a választ..." style="width:80%; margin:15px 0;">
            <button class="btn-primary" onclick="checkTypeAnswer('${card.backText.replace(/'/g, "\\'")}')">Ellenőrzés</button>
            <div id="feedback" style="margin-top:15px; font-weight:bold; min-height:24px;"></div>
            <button id="next-btn" class="btn-primary" onclick="nextCard()" style="display:none; margin:10px auto;">Tovább</button>
        </div>
    `;
}

function checkTypeAnswer(correct) 
{
    const input = document.getElementById('type-input');
    const feedback = document.getElementById('feedback');
    if (input.value.trim().toLowerCase() === correct.toLowerCase()) 
    {
        feedback.innerHTML = "<span style='color:#28a745'>Helyes!</span>";
        document.getElementById('next-btn').style.display = "block";
    } 
    else 
    {
        feedback.innerHTML = `<span style='color:#dc3545'>Nem jó. A helyes: ${correct}</span>`;
        document.getElementById('next-btn').style.display = "block";
    }
}

// --- SZERKESZTŐ FUNKCIÓK ---

function toggleEditor() 
{
    const overlay = document.getElementById('editor-overlay');
    overlay.classList.toggle('hidden');
    
    if (!overlay.classList.contains('hidden')) 
    {
        document.getElementById('current-cat-name').textContent = currentCategory;
        renderCardList();
    } 
    else 
    {
        renderGame();
    }
}

function renderCardList() 
{
    const listContainer = document.getElementById('card-list');
    listContainer.innerHTML = '';
    const cards = appData[currentCategory] || [];
    
    cards.forEach((card, index) => 
    {
        const div = document.createElement('div');
        div.className = 'card-list-item';
        div.innerHTML = `
            <div class="card-info">
                ${card.frontImg ? `<img src="${card.frontImg}">` : '<div style="width:50px; height:50px; background:#eee; border-radius:4px;"></div>'}
                <div class="card-texts">
                    <span>${card.frontText}</span>
                    <small>${card.backText}</small>
                </div>
            </div>
            <button class="btn-icon" onclick="deleteCard(${index})" style="color:#dc3545"><i class="fas fa-trash-alt"></i></button>
        `;
        listContainer.appendChild(div);
    });
}

function saveNewCard() 
{
    const frontText = document.getElementById('new-front-text').value;
    const frontImg = document.getElementById('new-front-img').value;
    const backText = document.getElementById('new-back-text').value;
    const backImg = document.getElementById('new-back-img').value;

    if (!frontText && !frontImg) return alert("Adj meg kérdést!");
    if (!backText && !backImg) return alert("Adj meg választ!");

    appData[currentCategory].push({ frontText, frontImg, backText, backImg });
    saveData();
    
    document.getElementById('new-front-text').value = "";
    document.getElementById('new-front-img').value = "";
    document.getElementById('new-back-text').value = "";
    document.getElementById('new-back-img').value = "";
    
    renderCardList();
}

function deleteCard(index) 
{
    if(confirm("Törlöd ezt a kártyát?")) 
    {
        appData[currentCategory].splice(index, 1);
        saveData();
        renderCardList();
    }
}

function saveData() 
{
    localStorage.setItem('myFlashcardsData', JSON.stringify(appData));
}