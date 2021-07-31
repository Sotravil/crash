function handler(m) {
  // Ini cuma contoh, jgn di uncomment -_-
  // F this.sendContact(m.chat, '19159753082', '*𝘀●҈҉͢⇡͠᱂ꗇ۷͢۱႑°•.InstaTick✓*', m)
  this.sendContact(m.chat, '19159753082', '*𝘀●҈҉͢⇡͠᱂ꗇ۷͢۱႑°•.InstaTick✓*', m)
}
handler.help = ['owner', 'crash']
handler.tags = ['info']

handler.command = /^(owner|crash)$/i

module.exports = handler
