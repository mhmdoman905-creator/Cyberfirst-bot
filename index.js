const { Telegraf } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply('Halo! Bot CyberFirst udah jalan 🔥\nKetik /help buat liat menu.');
});

bot.help((ctx) => {
  ctx.reply('Menu:\n/start - Mulai bot\n/help - Menu ini\n/ping - Cek bot hidup');
});

bot.command('ping', (ctx) => {
  ctx.reply('Pong! Bot hidup ✅');
});

bot.on('text', (ctx) => {
  ctx.reply('Gue terima pesan lu: ' + ctx.message.text);
});

bot.launch().then(() => {
  console.log('Bot jalan...');
});

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
