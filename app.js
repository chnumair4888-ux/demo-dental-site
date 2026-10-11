/* CLIENT CONFIGURATION — edit this block for a real clinic demo.
   Use verified details only. Team entries are intentionally placeholders. */
const CONFIG = {
  name: "Smile Dental Studio",
  tagline: "Thoughtful dental care",
  phoneDisplay: "[Clinic phone number]",
  phoneDial: "", // digits only, include country code; blank disables calling
  whatsapp: "", // digits only, include country code; blank opens WhatsApp placeholder chat
  address: "[Clinic address, City]",
  mapQuery: "[Clinic address, City]",
  hours: [
    ["Monday", "9:00 AM – 6:00 PM"], ["Tuesday", "9:00 AM – 6:00 PM"],
    ["Wednesday", "9:00 AM – 6:00 PM"], ["Thursday", "9:00 AM – 6:00 PM"],
    ["Friday", "9:00 AM – 6:00 PM"], ["Saturday", "By appointment"],
    ["Sunday", "Closed"]
  ],
  services: [
    ["◉","Check-ups & cleaning","Routine examinations and cleaning, based on your clinician’s advice."],
    ["✳","Fillings","Assessment and repair options for cavities and damaged teeth."],
    ["⌁","Root canal treatment","Learn whether endodontic treatment may be suitable for your tooth."],
    ["≋","Braces & aligners","Discuss orthodontic options with a qualified dental professional."],
    ["✧","Teeth whitening","Ask about professional whitening options and suitability."],
    ["◇","Dental implants","Discuss tooth-replacement options, assessment and planning."],
    ["♡","Children’s dentistry","Supportive dental visits and age-appropriate oral health guidance."],
    ["＋","Emergency dental care","Prompt assessment for urgent dental concerns when available."]
  ],
  // Replace with verified staff names and approved role/qualification text.
  team: ["Dr. [Name]","Dr. [Name]","[Team Member]"],
  colors: { background:"#F8FBFD", surface:"#FFFFFF", ink:"#0B2540", muted:"#5B6B7A", accent:"#0369A1", hover:"#075985", soft:"#E8F4FA", border:"#E1ECF3" }
};
const $ = (s, root=document) => root.querySelector(s);
document.querySelectorAll("[data-name]").forEach(el => el.textContent = CONFIG.name);
document.querySelectorAll("[data-phone]").forEach(el => el.textContent = CONFIG.phoneDisplay);
document.querySelectorAll("[data-address]").forEach(el => el.textContent = CONFIG.address);
document.querySelectorAll("[data-wa]").forEach(el => {
  el.href = CONFIG.whatsapp ? "https://wa.me/" + CONFIG.whatsapp : "https://wa.me/";
  el.target = "_blank"; el.rel = "noopener";
});
document.querySelectorAll("[data-call]").forEach(el => {
  if (CONFIG.phoneDial) { el.href = "tel:+" + CONFIG.phoneDial; }
  else { el.href = "#contact"; el.addEventListener("click", e => { e.preventDefault(); alert("Demo placeholder: add the clinic phone number in app.js before using this link."); }); }
});
const map = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(CONFIG.mapQuery);
$("[data-map]").href = map;
$("#hours").innerHTML = CONFIG.hours.map(([day,time]) => '<div style="display:flex;justify-content:space-between;gap:12px;font-size:13px;padding:3px 0"><span>'+day+'</span><span>'+time+'</span></div>').join("");
$("#services-list").innerHTML = CONFIG.services.map(([icon,title,desc]) => '<article class="card"><div class="service-icon" aria-hidden="true">'+icon+'</div><h3>'+title+'</h3><p>'+desc+'</p></article>').join("");
$("#year").textContent = new Date().getFullYear();
$("#booking").addEventListener("submit", e => {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const lines = [
    "Hello " + CONFIG.name + ", I would like to request an appointment.",
    "Name: " + data.get("name"),
    "Phone: " + data.get("phone"),
    "Service: " + data.get("service"),
    "Preferred date: " + (data.get("date") || "Flexible"),
    "Note: " + (data.get("message") || "None"),
    "Please let me know available times. I understand this is a request, not a confirmed booking."
  ];
  const number = CONFIG.whatsapp;
  if (!number) {
    alert("This is a demo. Add the clinic WhatsApp number in the CONFIG block at the top of app.js to enable appointment requests.");
    return;
  }
  window.open("https://wa.me/" + number + "?text=" + encodeURIComponent(lines.join("\n")), "_blank", "noopener");
});
