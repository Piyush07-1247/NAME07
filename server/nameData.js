module.exports = function (name) {
  const langs = [
    { lang: "Hindi", script: "हिन्दी", meaning: "A popular Indian name meaning divine or brave" },
    { lang: "Tamil", script: "தமிழ்", meaning: "Represents heritage and tradition" },
    { lang: "Bengali", script: "বাংলা", meaning: "Symbol of intellect or purity" },
    { lang: "Telugu", script: "తెలుగు", meaning: "Meaning depends on the syllables, often noble" },
    { lang: "Gujarati", script: "ગુજરાતી", meaning: "Represents cultural roots and virtues" },
    { lang: "Kannada", script: "ಕನ್ನಡ", meaning: "Name denotes dignity or pride" },
    { lang: "Malayalam", script: "മലയാളം", meaning: "Stands for purity or uniqueness" },
    { lang: "Punjabi", script: "ਪੰਜਾਬੀ", meaning: "Often represents strength or faith" },
    { lang: "Urdu", script: "اردو", meaning: "Refers to beauty or nobility" },
    { lang: "English", script: "English", meaning: "Depends on origin, often noble or bright" },
    { lang: "French", script: "Français", meaning: "Graceful or elegant" },
    { lang: "German", script: "Deutsch", meaning: "Strong or famous" },
    { lang: "Spanish", script: "Español", meaning: "Meaning linked to light or hope" },
    { lang: "Chinese", script: "中文", meaning: "Prosperity or brightness" },
    { lang: "Japanese", script: "日本語", meaning: "Peaceful or wise" },
    { lang: "Korean", script: "한국어", meaning: "Virtue or brilliance" },
    { lang: "Russian", script: "Русский", meaning: "Courageous or intelligent" }
  ];

  return langs.map(l => ({
    ...l,
    translatedName: `[${l.lang}] ${name}`,
    pronunciation: `${name}-pronounced-in-${l.lang.toLowerCase()}`
  }));
};
