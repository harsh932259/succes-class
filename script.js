// ===== BUSINESS SETTINGS =====

const businessName = "Success Computer Institute";

const googleReviewLink =
"https://g.page/r/CUBQP7ARgyFREBM/review";


// ===== REVIEW TEMPLATES =====

const templates = {

  // ---------- ENGLISH ----------
  en: {
    intro: [
      "Excellent learning experience at",
      "Very satisfied with the courses at",
      "Highly impressed with the teaching quality at",
      "Great coaching and computer training at",
      "Professional training provided by"
    ],

    middle: [
      "teachers explain concepts very clearly and make learning easy.",
      "computer courses and coaching classes are very well organized.",
      "faculty is supportive and focuses on practical learning.",
      "classes helped improve my skills and confidence.",
      "the environment for students is very positive and motivating."
    ],

    ending: [
      "Highly recommended for students!",
      "Best coaching and computer institute.",
      "Great place to learn and grow.",
      "Excellent training experience.",
      "Five star institute."
    ]
  },


  // ---------- HINDI ----------
  hi: {
    intro: [
      "Success Computer Institute में पढ़ाई का बहुत अच्छा अनुभव रहा",
      "यहाँ की कोचिंग और कंप्यूटर ट्रेनिंग से पूरी तरह संतुष्ट हूँ",
      "स्टूडेंट्स के लिए शानदार क्लासेस",
      "बहुत प्रोफेशनल तरीके से पढ़ाई कराई जाती है",
      "कंप्यूटर और कोचिंग के लिए बेहतरीन इंस्टीट्यूट"
    ],

    middle: [
      "टीचर्स बहुत अच्छे से समझाते हैं और हर स्टूडेंट पर ध्यान देते हैं।",
      "कंप्यूटर कोर्स और कोचिंग क्लासेस बहुत अच्छी हैं।",
      "स्टडी मटेरियल और गाइडेंस बहुत हेल्पफुल है।",
      "यहाँ पढ़कर मेरा कॉन्फिडेंस और स्किल्स दोनों बढ़े हैं।",
      "स्टूडेंट्स के लिए बहुत अच्छा लर्निंग एनवायरनमेंट है।"
    ],

    ending: [
      "स्टूडेंट्स के लिए जरूर रिकमेंड करूंगा।",
      "बहुत अच्छा इंस्टीट्यूट।",
      "सीखने के लिए बेहतरीन जगह।",
      "बहुत अच्छा अनुभव रहा।",
      "Highly recommended."
    ]
  },


  // ---------- MARATHI ----------
  mr: {
    intro: [
      "Success Computer Institute मध्ये शिकण्याचा खूप चांगला अनुभव आला",
      "इथली कोचिंग आणि कंप्यूटर ट्रेनिंग उत्कृष्ट आहे",
      "विद्यार्थ्यांसाठी खूप छान क्लासेस",
      "इथे खूप प्रोफेशनल पद्धतीने शिकवले जाते",
      "कंप्यूटर आणि कोचिंगसाठी उत्तम संस्था"
    ],

    middle: [
      "टीचर्स खूप स्पष्ट आणि सोप्या पद्धतीने समजावतात.",
      "कंप्यूटर कोर्स आणि कोचिंग क्लासेस खूप चांगले आहेत.",
      "स्टडी मटेरियल आणि मार्गदर्शन खूप उपयोगी आहे.",
      "इथे शिकल्यामुळे माझा आत्मविश्वास वाढला.",
      "विद्यार्थ्यांसाठी खूप चांगले वातावरण आहे."
    ],

    ending: [
      "विद्यार्थ्यांसाठी नक्की भेट द्या.",
      "खूप छान इंस्टिट्यूट.",
      "शिकण्यासाठी उत्तम जागा.",
      "खूप चांगला अनुभव.",
      "Highly recommended."
    ]
  }

};


// ===== APP STATE =====

let currentLang = "en";
let shownCount = 0;
const batchSize = 10;
let generatedReviews = [];


// ===== HELPERS =====

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function createReview(lang) {

  const t = templates[lang];

  return (
    randomItem(t.intro) + " " +
    businessName + ". " +
    randomItem(t.middle) + " " +
    randomItem(t.ending)
  );
}


// ===== BUILD 100 UNIQUE REVIEWS =====

function buildPool() {

  generatedReviews = [];
  const used = new Set();

  while (used.size < 100) {
    used.add(createReview(currentLang));
  }

  generatedReviews = [...used];
  shownCount = 0;
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
  buildPool();
  loadMore();
}


// ===== COPY + OPEN GOOGLE =====

function postReview(text) {

  navigator.clipboard.writeText(text).then(() => {

    window.open(googleReviewLink, "_blank");

    alert("Review copied 👍 Paste and press POST.");

  });
}


// ===== INIT =====

buildPool();
loadMore();

