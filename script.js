// AGE GATE
document.addEventListener("DOMContentLoaded", () => {
  const gate = document.getElementById("age-gate");
  const btn = document.getElementById("enter-btn");
  if(btn){
    btn.addEventListener("click", () => {
      if (document.getElementById("agree").checked) {
        gate.style.display = "none";
      } else {
        alert("Anda harus mencentang persetujuan.");
      }
    });
  }

  // Timer realtime
  const timeEl = document.getElementById("time");
  if(timeEl){
    setInterval(() => {
      const now = new Date();
      timeEl.textContent = now.toLocaleString();
    }, 1000);
  }

  // Chat Bubble AI
  const bubble = document.getElementById("chat-bubble");
  const box = document.getElementById("chat-box");
  const input = document.getElementById("chat-input");
  const messages = document.getElementById("chat-messages");

  if(bubble && box){
    bubble.addEventListener("click", () => {
      box.style.display = box.style.display === "flex" ? "none" : "flex";
    });
  }

  if(input){
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        const userMsg = input.value;
        appendMsg("👤", userMsg);
        input.value = "";

        setTimeout(() => {
          if (userMsg.toLowerCase().includes("teknikal") || userMsg.toLowerCase().includes("indikator")) {
            appendMsg("🤖", "📉 Teknikal hanya pola. FUNDAMENTAL menjelaskan *mengapa* harga bergerak.");
          } else {
            appendMsg("🤖", "🔍 Fokus pada FUNDAMENTAL: inflasi, kebijakan moneter, supply-demand, dan geopolitik.");
          }
        }, 500);
      }
    });
  }

  function appendMsg(sender, text) {
    const div = document.createElement("div");
    div.textContent = sender + " " + text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  // Audio toggle
  const soundToggle = document.getElementById("sound-toggle");
  let soundEnabled = true;
  if(soundToggle){
    soundToggle.addEventListener("click", () => {
      soundEnabled = !soundEnabled;
      soundToggle.textContent = soundEnabled ? "🔊" : "🔇";
    });
  }

  function playSound(file) {
    if (soundEnabled) {
      const audio = new Audio("audio/" + file);
      audio.play();
    }
  }

  document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("mouseover", () => playSound("hover.mp3"));
    btn.addEventListener("click", () => playSound("click.mp3"));
  });
  window.addEventListener("scroll", () => playSound("scroll.mp3"));

  // Language switcher
  const translations = {
    id: {
      "hero-title": "Metode FUNDAMENTAL Adalah Kunci",
      "hero-sub": "Dari Intelejen Internasional Terpercaya",
      "cta-join": "Gabung Kelas Eksekutif",
      "cta-membership": "Lihat Membership",
      "why-title": "Mengapa FUNDAMENTAL Lebih Penting dari Teknikal?",
      "why-text": "Indikator hanya membaca pola masa lalu. FUNDAMENTAL menjelaskan alasan sebenarnya pergerakan harga.",
      "insight-title": "Market Insight",
      "program-title": "Struktur Program",
      "membership-title": "Membership Eksekutif",
      "cta-join2": "Gabung Sekarang",
      "whyus-title": "Mengapa Pilih Kami"
    },
    en: {
      "hero-title": "FUNDAMENTAL Method is the Key",
      "hero-sub": "From Trusted International Intelligence",
      "cta-join": "Join Executive Class",
      "cta-membership": "View Membership",
      "why-title": "Why FUNDAMENTAL is More Important than Technical?",
      "why-text": "Indicators only read past patterns. FUNDAMENTAL explains the real reasons behind price moves.",
      "insight-title": "Market Insight",
      "program-title": "Program Structure",
      "membership-title": "Executive Membership",
      "cta-join2": "Join Now",
      "whyus-title": "Why Choose Us"
    },
    ru: {
      "hero-title": "ФУНДАМЕНТАЛЬНЫЙ метод — ключ",
      "hero-sub": "От международной разведки",
      "cta-join": "Присоединиться к классу",
      "cta-membership": "Посмотреть членство",
      "why-title": "Почему ФУНДАМЕНТАЛ важнее техники?",
      "why-text": "Индикаторы читают прошлое. Фундамент объясняет настоящие причины движения цен.",
      "insight-title": "Анализ рынка",
      "program-title": "Структура программы",
      "membership-title": "Исполнительное членство",
      "cta-join2": "Присоединиться сейчас",
      "whyus-title": "Почему выбирают нас"
    },
    ar: {
      "hero-title": "الأساسيات هي المفتاح",
      "hero-sub": "من استخبارات دولية موثوقة",
      "cta-join": "انضم إلى الصف التنفيذي",
      "cta-membership": "عرض العضوية",
      "why-title": "لماذا الأساسيات أهم من التقنية؟",
      "why-text": "المؤشرات تقرأ الماضي فقط. الأساسيات تشرح الأسباب الحقيقية لتحرك الأسعار.",
      "insight-title": "رؤية السوق",
      "program-title": "هيكل البرنامج",
      "membership-title": "عضوية تنفيذية",
      "cta-join2": "انضم الآن",
      "whyus-title": "لماذا نحن؟"
    },
    zh: {
      "hero-title": "基本面方法是关键",
      "hero-sub": "来自国际情报机构",
      "cta-join": "加入高级班",
      "cta-membership": "查看会员",
      "why-title": "为什么基本面比技术更重要？",
      "why-text": "指标只读过去。基本面解释价格走势的真正原因。",
      "insight-title": "市场洞察",
      "program-title": "课程结构",
      "membership-title": "高级会员",
      "cta-join2": "立即加入",
      "whyus-title": "为什么选择我们"
    }
  };

  const switcher = document.querySelectorAll(".lang-switcher span");
  switcher.forEach(flag => {
    flag.addEventListener("click", () => {
      const lang = flag.dataset.lang;
      document.querySelectorAll("[data-key]").forEach(el => {
        el.textContent = translations[lang][el.dataset.key];
      });
    });
  });
});

// Join CTA
function joinNow() {
  window.open("https://wa.me/6281901212120", "_blank");
}
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
}
