// ===== BUSINESS SETTINGS =====
const businessName = "Success Computer Institute";
const googleReviewLink = "https://g.page/r/CUBQP7ARgyFREBM/review";

// YOUR GOOGLE WEB APP URL
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwY1oliKu0BJzS12VL0SI2V_ZPrkpKMa6d3M6BBuevgtATsMZJPWT0Y0S_y_XGlnEjIbg/exec"; 

// ===== REVIEW TEMPLATES (HUMAN & CASUAL TONE) =====
const templates = {
  // ---------- ENGLISH ----------
  en: {
    intro: [
      "Honestly, joining [BIZ] was the best decision.",
      "If you want to learn computers, [BIZ] is the spot.",
      "Had such a great time learning at [BIZ].",
      "Can't say enough good things about [BIZ].",
      "Just finished my course at [BIZ] and I loved it.",
      "Such a cool vibe at [BIZ].", 
      "I was nervous at first, but [BIZ] made it so easy.", 
      "Seriously the best computer classes in the area.", 
      "A friend told me about [BIZ] and I'm glad I joined.", 
      "[BIZ] completely changed how I look at coding and tech."
    ],
    middle: [
      "The teachers are super chill and explain things without making it complicated.",
      "No boring lectures here, everything is actually hands-on.",
      "I went from zero knowledge to actually knowing my stuff.",
      "They don't just read from a book, they make sure you actually get it.",
      "The PCs are fast and the labs are always open if you need extra practice.",
      "The staff is super friendly and always ready to help with doubts.", 
      "I made a lot of friends and learned a ton at the same time.", 
      "The way they teach makes even the hard topics feel really simple.", 
      "They give you real projects to work on, not just theory.", 
      "You get so much personal attention compared to other places."
    ],
    ending: [
      "Definitely go for it guys!",
      "100% recommend checking them out.",
      "Best place in town, hands down.",
      "You won't regret joining.",
      "Loved every minute of it.",
      "Totally worth the money.", 
      "Big thanks to the whole team!", 
      "Do yourself a favor and enroll here.", 
      "10/10 experience.", 
      "I'll definitely be coming back for more advanced courses."
    ]
  },

  // ---------- HINDI ----------
  hi: {
    intro: [
      "सच बताऊँ तो [BIZ] ज्वाइन करना एकदम सही फैसला था।",
      "कंप्यूटर सीखना है तो भाई [BIZ] से बेस्ट कुछ नहीं।",
      "[BIZ] में क्लास करने में बहुत मज़ा आया।",
      "मैंने [BIZ] में एडमिशन लिया और एक्सपीरियंस एकदम झकास रहा।",
      "[BIZ] के टीचर्स बहुत ही सही हैं।",
      "पहले मुझे कंप्यूटर से डर लगता था, पर [BIZ] ने सब आसान कर दिया।", 
      "यहाँ का माहौल एकदम मस्त है।", 
      "[BIZ] के बारे में दोस्त ने बताया था, थैंक्स टू हिम।", 
      "क्लासेस इतनी अच्छी हैं कि बोरियत बिलकुल नहीं होती।", 
      "सीरियसली, [BIZ] इस एरिया का सबसे बेस्ट इंस्टीट्यूट है।"
    ],
    middle: [
      "टीचर्स एकदम दोस्त की तरह पढ़ाते हैं, कुछ भी पूछने में झिझक नहीं होती।",
      "यहाँ रट्टा नहीं मरवाते, सब कुछ प्रैक्टिकल करके दिखाते हैं।",
      "मुझे पहले कुछ नहीं आता था, अब सब अच्छे से समझ आ गया है।",
      "लैब में प्रैक्टिस करने के लिए पूरा टाइम मिलता है।",
      "सर हर डाउट को बहुत आराम से और आसानी से क्लियर कर देते हैं।",
      "स्टाफ बहुत हेल्पफुल है और हमेशा सपोर्ट करता है।", 
      "किताबी ज्ञान नहीं, बल्कि असल में काम आने वाली चीजें सिखाते हैं।", 
      "कठिन टॉपिक भी इतनी आसानी से समझा देते हैं कि मज़ा आ जाता है।", 
      "हर स्टूडेंट पर पूरा ध्यान दिया जाता है, भीड़ भाड़ वाला काम नहीं है।", 
      "यहाँ आकर मेरा कॉन्फिडेंस बहुत बढ़ गया है।"
    ],
    ending: [
      "आँख बंद करके एडमिशन ले लो भाई।",
      "मेरी तरफ से 100% रिकमेंडेड है।",
      "पैसे बिलकुल वेस्ट नहीं होंगे, पक्की बात है।",
      "एकदम शानदार एक्सपीरियंस रहा।",
      "जरूर ट्राई करो यार, पछताओगे नहीं।",
      "पैसे और टाइम दोनों वसूल।", 
      "पूरी टीम को बहुत-बहुत थैंक्स!", 
      "यहाँ सीखना एकदम वर्थ इट है।", 
      "10/10 रेटिंग मेरी तरफ से।", 
      "मैं तो अपने सारे दोस्तों को यहीं भेजूंगा।"
    ]
  },

  // ---------- MARATHI ----------
  mr: {
    intro: [
      "खरं सांगायचं तर [BIZ] लावणं हा माझा बेस्ट निर्णय होता.",
      "कंप्यूटर शिकायचं असेल तर [BIZ] ला नक्की जा.",
      "[BIZ] मध्ये शिकताना खूप मज्जा आली.",
      "[BIZ] चे क्लास एकदम भारी आहेत यार.",
      "मी नुकताच [BIZ] मध्ये माझा कोर्स पूर्ण केला आणि खूप भारी वाटलं.",
      "[BIZ] चं वातावरण एकदम मस्त आहे.", 
      "सुरुवातीला मला थोडी भीती वाटत होती, पण [BIZ] मुळे सगळं सोपं झालं.", 
      "खरंच, या एरियामधला हा सर्वात बेस्ट क्लास आहे.", 
      "एका मित्राने [BIZ] बद्दल सांगितलं आणि मी लगेच ऍडमिशन घेतलं.", 
      "इथले क्लास इतके भारी आहेत की कंटाळा अजिबात येत नाही."
    ],
    middle: [
      "इथले सर एकदम मित्रासारखे शिकवतात, काहीही विचारायला भीती वाटत नाही.",
      "नुसतं पुस्तकी ज्ञान नाही, तर प्रॅक्टिकलवर जास्त भर देतात.",
      "मला आधी काहीच जमत नव्हतं, पण आता सगळं अगदी सोपं वाटतं.",
      "लॅबमध्ये प्रॅक्टिस करायला आपल्याला हवा तेवढा वेळ मिळतो.",
      "काहीही अडचण आली तरी सर लगेच आणि सोप्या भाषेत समजावून सांगतात.",
      "इथला स्टाफ खूप चांगला आणि मदत करणारा आहे.", 
      "खूप काही नवीन शिकायला मिळालं आणि कॉन्फिडन्सही वाढला.", 
      "अवघड गोष्टी सुद्धा सर खूप सोप्या करून सांगतात.", 
      "इथे प्रत्येक विद्यार्थ्यावर वैयक्तिक लक्ष दिलं जातं, गर्दी नसते.", 
      "फक्त थेअरी नाही, तर प्रत्यक्ष काम कसं करायचं हे शिकवतात."
    ],
    ending: [
      "डोळे झाकून ऍडमिशन घ्या भावांनो.",
      "माझ्याकडून १००% रेकमेंडेड.",
      "पैसे वसूल क्लास आहे एकदम.",
      "खूप भारी अनुभव होता.",
      "नक्की जाऊन बघा एकदा, अजिबात पश्चात्ताप होणार नाही.",
      "वेळ आणि पैसे दोन्ही सत्कारणी लागले.", 
      "संपूर्ण टीमचे खूप खूप आभार!", 
      "इथे ऍडमिशन घेणं एकदम वर्थ आहे.", 
      "माझ्याकडून १० पैकी १० मार्क.", 
      "पुढच्या कोर्ससाठी मी नक्कीच इथेच येणार."
    ]
  }
};

// ===== APP STATE =====
let currentLang = "en";
let shownCount = 0;
const batchSize = 10;
let generatedReviews = [];
let usedReviewsFromServer = []; 

// ===== HELPERS =====
function randomItem(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function createReview(lang) {
  const t = templates[lang];
  const intro = randomItem(t.intro).replace("[BIZ]", businessName);
  return `${intro} ${randomItem(t.middle)} ${randomItem(t.ending)}`;
}

// ===== INIT APP & CONNECT TO DB =====
async function initApp() {
  document.getElementById("reviews").innerHTML = "<p style='text-align:center; color: gray;'>Loading fresh reviews...</p>";
  document.getElementById("loadMoreBtn").style.display = "none";
  
  try {
    const response = await fetch(WEB_APP_URL);
    usedReviewsFromServer = await response.json();
  } catch (error) {
    console.error("Could not connect to database. Starting fresh.", error);
    usedReviewsFromServer = [];
  }
  
  setLanguage('en'); 
}

// ===== BUILD SAFE REVIEWS & FAILSAFE =====
function buildPool() {
  generatedReviews = [];
  const used = new Set();
  let safetyCounter = 0; 

  while (used.size < 30 && safetyCounter < 3000) {
    safetyCounter++;
    const newReview = createReview(currentLang);
    if (!usedReviewsFromServer.includes(newReview) && !used.has(newReview)) {
      used.add(newReview);
    }
  }

  generatedReviews = [...used];
  shownCount = 0;

  // The Failsafe: If all 1000 combinations are used in this language
  if (generatedReviews.length === 0) {
    document.getElementById("reviews").innerHTML = `
      <div style="text-align:center; padding: 30px 10px;">
        <h3 style="margin-bottom:10px;">🎉 Thank You!</h3>
        <p style="color:gray;">We have received an overwhelming amount of support. All available unique reviews in this language have been posted.</p>
      </div>`;
    document.getElementById("loadMoreBtn").style.display = "none";
    return false; // Tells the app to stop loading
  }
  return true; 
}

// ===== LOAD MORE =====
function loadMore() {
  const box = document.getElementById("reviews");

  for (let i = 0; i < batchSize; i++) {
    if (shownCount >= generatedReviews.length) {
      document.getElementById("loadMoreBtn").style.display = "none";
      return;
    }

    const review = generatedReviews[shownCount];
    shownCount++;

    const card = document.createElement("div");
    card.className = "review-card";

    const text = document.createElement("p");
    text.textContent = review;

    const btn = document.createElement("button");
    btn.textContent = "Post Review";
    btn.className = "post-btn";
    btn.onclick = () => postReview(review);

    card.appendChild(text);
    card.appendChild(btn);
    box.appendChild(card);
  }
}

// ===== LANGUAGE SWITCH =====
function setLanguage(lang) {
  currentLang = lang;
  document.getElementById("reviews").innerHTML = "";
  document.getElementById("loadMoreBtn").style.display = "block";
  
  const poolBuilt = buildPool();
  if (poolBuilt) { loadMore(); }
}

// ===== COPY + OPEN GOOGLE + SAVE TO DB =====
function postReview(text) {
  navigator.clipboard.writeText(text).then(() => {
    window.open(googleReviewLink, "_blank");
    alert("Review copied 👍 Paste it on Google and press POST.");

    fetch(WEB_APP_URL, {
      method: 'POST',
      mode: '
