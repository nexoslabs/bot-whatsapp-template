
/**
 
 * GOJO BOT MENU
 * Usage: !help
 */
const helpText = `
🔥 GOJO BOT MENU 🔥

🎵 !song       - تحميل أغاني
🤖 !ai         - الذكاء الاصطناعي
🎮 !game       - ألعاب
💍 !marry      - زواج افتراضي
👮 !admin      - أوامر الإدارة
🚫 !antilink   - منع الروابط
👋 !welcome    - ترحيب مع صورة
😢 !goodbye    - رسالة وداع
🏓 !ping       - سرعة البوت
🖼️ !image      - إرسال صورة
🕒 !time       - الوقت الحالي
👋 !hi         - ترحيب سريع
📊 !poll       - استطلاع رأي
❓ !help       - عرض القائمة

━━━━━━━━━━━━━━━━━━
🌿 GOJO BOT SYSTEM
━━━━━━━━━━━━━━━━━━
`;

module.exports = {
  name: "help",
  description: "GOJO BOT MENU",

  execute: async (sock, from, args) => {
    await sock.sendMessage(from, {
      text: helpText,
    });
  }
};
