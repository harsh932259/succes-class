// ===== BUSINESS SETTINGS =====
const businessName = "Success Computer Institute";
const googleReviewLink = "https://g.page/r/CUBQP7ARgyFREBM/review";

// YOUR NEW GOOGLE WEB APP URL
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwY1oliKu0BJzS12VL0SI2V_ZPrkpKMa6d3M6BBuevgtATsMZJPWT0Y0S_y_XGlnEjIbg/exec"; 

// ===== REVIEW TEMPLATES (1000 COMBINATIONS PER LANGUAGE) =====
const templates = {
  // ---------- ENGLISH ----------
  en: {
    intro: [
      "Excellent learning experience at [BIZ].",
      "Very satisfied with the courses at [BIZ].",
      "Highly impressed with the teaching quality at [BIZ].",
      "Great coaching and computer training at [BIZ].",
      "Professional training provided by [BIZ].",
      "Joined [BIZ] to improve my computer skills.", 
      "The training programs at [BIZ] are top-notch.", 
      "I had a great time learning at [BIZ].", 
      "[BIZ] is the perfect place for computer education.", 
      "Glad I chose [BIZ] for my coaching."
    ],
    middle: [
      "The teachers explain concepts very clearly and make learning easy.",
      "The computer courses and coaching classes are very well organized.",
      "The faculty is supportive and focuses on practical learning.",
      "The classes helped improve my skills and confidence.",
      "The environment for students is very positive and motivating.",
      "The syllabus is updated and very relevant to current tech.", 
      "Doubt clearing sessions are very helpful.", 
      "The lab facilities and computers are excellent.", 
      "Teachers give personal attention to everyone.", 
      "The mock tests really prepared me well."
    ],
    ending: [
      "Highly recommended for students!",
      "Best coaching and computer institute.",
      "Great place to learn and grow.",
      "Excellent training experience.",
      "Five star institute.",
      "A must-join for all students.", 
      "Totally worth the fees.", 
      "Couldn't ask for a better institute.", 
      "10/10 learning experience.", 
      "Highly satisfied with my progress."
    ]
  },

  // ---------- HINDI ----------
  hi: {
    intro: [
      "[BIZ] में पढ़ाई का बहुत अच्छा अनुभव रहा।",
      "[BIZ] की कोचिंग और कंप्यूटर ट्रेनिंग से पूरी तरह संतुष्ट हूँ।",
      "[BIZ] में स्टूडेंट्स के लिए शानदार क्लासेस हैं।",
      "[BIZ] में बहुत प्रोफेशनल तरीके से पढ़ाई कराई जाती है।",
      "[BIZ] कंप्यूटर और कोचिंग के लिए बेहतरीन इंस्टीट्यूट है।",
      "मैंने अपनी कंप्यूटर ट्रेनिंग [BIZ] से की है।", 
      "[BIZ] में कोचिंग का स्तर बहुत ऊँचा है।", 
      "[BIZ] कंप्यूटर सीखने के लिए एकदम सही जगह है।", 
      "[BIZ] में एडमिशन लेना मेरा सबसे अच्छा फैसला था।", 
      "[BIZ] का माहौल पढ़ाई के लिए बहुत अच्छा है।"
    ],
    middle: [
      "टीचर्स बहुत अच्छे से समझाते हैं और हर स्टूडेंट पर ध्यान देते हैं।",
      "कंप्यूटर कोर्स और कोचिंग क्लासेस बहुत अच्छी हैं।",
      "स्टडी मटेरियल और गाइडेंस बहुत हेल्पफुल है।",
      "यहाँ पढ़कर मेरा कॉन्फिडेंस और स्किल्स दोनों बढ़े हैं।",
      "स्टूडेंट्स के लिए बहुत अच्छा लर्निंग एनवायरनमेंट है।",
      "प्रैक्टिकल नॉलेज पर बहुत ज्यादा फोकस किया जाता है।", 
      "लैब की सुविधाएँ और कंप्यूटर्स बहुत अच्छे हैं।", 
      "टीचर्स हर डाउट को बहुत प्यार से क्लियर करते हैं।", 
      "कोर्स का सिलेबस बिल्कुल लेटेस्ट और काम का है।", 
      "यहाँ की ट्रेनिंग से मुझे जॉब के लिए बहुत तैयारी मिली।"
    ],
    ending: [
      "स्टूडेंट्स के लिए जरूर रिकमेंड करूंगा।",
      "बहुत अच्छा इंस्टीट्यूट।",
      "सीखने के लिए बेहतरीन जगह।",
      "बहुत अच्छा अनुभव रहा।",
      "Highly recommended.",
      "सभी स्टूडेंट्स को यहाँ आना चाहिए।", 
      "पैसा और समय दोनों वसूल।", 
      "इससे बेहतर कंप्यूटर क्लास नहीं मिल सकती।", 
      "पूरे 10/10 नंबर दूँगा।", 
      "मैं अपनी प्रोग्रेस से बहुत खुश हूँ।"
    ]
  },

  // ---------- MARATHI ----------
  mr: {
    intro: [
      "[BIZ] मध्ये शिकण्याचा खूप चांगला अनुभव आला.",
      "[BIZ] ची कोचिंग आणि कंप्यूटर ट्रेनिंग उत्कृष्ट आहे.",
      "[BIZ] मध्ये विद्यार्थ्यांसाठी खूप छान क्लासेस आहेत.",
      "[BIZ] मध्ये खूप प्रोफेशनल पद्धतीने शिकवले जाते.",
      "[BIZ] ही कंप्यूटर आणि कोचिंगसाठी उत्तम संस्था आहे.",
      "मी माझी कंप्यूटर ट्रेनिंग [BIZ] मधून पूर्ण केली.", 
      "[BIZ] मधील कोचिंगचा दर्जा खूप उच्च आहे.", 
      "[BIZ] हे कंप्यूटर शिकण्यासाठी अगदी योग्य ठिकाण आहे.", 
      "[BIZ] मध्ये प्रवेश घेणे हा माझा उत्तम निर्णय होता.", 
      "[BIZ] मधील शैक्षणिक वातावरण खूप छान आहे."
    ],
    middle: [
      "टीचर्स खूप स्पष्ट आणि सोप्या पद्धतीने समजावतात.",
      "कंप्यूटर कोर्स आणि कोचिंग क्लासेस खूप चांगले आहेत.",
      "स्टडी मटेरियल आणि मार्गदर्शन खूप उपयोगी आहे.",
      "इथे शिकल्यामुळे माझा आत्मविश्वास वाढला.",
      "विद्यार्थ्यांसाठी खूप चांगले वातावरण आहे.",
      "प्रॅक्टिकल नॉलेजवर खूप जास्त भर दिला जातो.", 
      "लॅबच्या सुविधा आणि कंप्यूटर्स अत्यंत उत्तम आहेत.", 
      "टीचर्स प्रत्येक शंका खूप चांगल्या प्रकारे सोडवतात.", 
      "कोर्सचा सिलॅबस अगदी नवीन आणि उपयुक्त आहे.", 
      "इथल्या ट्रेनिंगमुळे मला जॉबसाठी खूप मदत झाली."
    ],
    ending: [
      "विद्यार्थ्यांसाठी नक्की भेट द्या.",
      "खूप छान इंस्टिट्यूट.",
      "शिकण्यासाठी उत्तम जागा.",
      "खूप चांगला अनुभव.",
      "Highly recommended.",
      "सर्व विद्यार्थ्यांनी इथे नक्की प्रवेश घ्यावा.", 
      "पैसे आणि वेळेचे पूर्ण सार्थक झाले.", 
      "यापेक्षा चांगले कंप्यूटर क्लास मिळू शकत नाही.", 
      "माझ्याकडून १० पैकी १० गुण.", 
      "मी माझ्या प्रगतीवर खूप खूश आहे."
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
      mode: 'no-cors',
      body: JSON.stringify({ review: text })
    });

    usedReviewsFromServer.push(text);
  });
}

// ===== START THE ENGINE =====
initApp();
