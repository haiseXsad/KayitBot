const Discord = require('discord.js');

exports.run = async (client, message, args) => {
if(!message.member.roles.cache.has('Yetkili Rol')) return message.channel.send("Bu komutu kullanmak için `\` ROL `\` olmalısın!")

let member = message.mentions.member.first();
let isim = args[1];
let yas = args[2];
let tag = "TAG";
let kayıtlırol = "ID";
//let kayıtlırol2 = "ID";
let kayıtsızrol = "ID";
//let kayıtsızrol2 = "ID";
let log = "LOG ID";

const pr = new Discord.MessageEmbed
if(!member) return message.channel.send("Lütfen Bir Kullanıcı Etiketleyin!");
message.channel.send(pr)
const pp = new Discord.MessageEmbed
if(!isim) return message.channel.send("Lütfen Bir İsim Girin!");
message.channel.send(pp)
const pre = new Discord.MessageEmbed
if(!yas) return message.channel.semd("Lütfen Bir Yaş Girin!");
message.channel.send(pre)

member.roles.add(kayıtlırol);
//member.roles.add(kayıtlırol2);
member.roles.remove(kayıtsızrol);
//member.roles.add(kayıtsızrol2);
member.setNickname(`${tag} ${isim} | ${yas}`);

const embed = new Discord.MessageEmbed
.setColor('#ff0a78')
.setTitle('Kayıt İşlemi Başarılı')
.setDescription(`                      
❯ .... Hoşgeldin!
❯ Kuralları Okumayı Unutma
❯ <$@&member.user.username> Aramıza Katıldı
     \`\` Kullanıcı Bilgileri \`\` 
     
❯ Yeni Adı : ${tag} ${isim} | ${yas}

❯ Kullanıcı Id : member.user.id

❯ Verilen Rol : kayıtlırol
 
❯ Alınan Rol :  kayıtsızrol
`)
.setFooter(`Artık Kanalları Görebilirsin - Public Odalarında Diğer Üyelerimizle Sohbet Edebilirsin!`)
.setThumbnail("SUNUCU GİF")
message.channel.send(embed)





const presty = new Discord.MessageEmbed
.setTitle('Kayıt İşlemi Başarılı')
.setColor('#ff0a78')
.addField('Kaydı Yapan Yetkili :\n', message.author.username)
.addField('Kayıt Olan Kullanıcı :\n', message.user.username)
.addField('Verilen Rol-Roller :\n', kayıtlırol)//+ kayıtlırol2 
.addField('Alınan Rol-Roller :\n', kayıtsızrol)//+ kayıtsızrol2
.addField('Yeni İsin :\n', `${tag} ${isim} | ${yas}`)
.setFooter(`Kayıt Zamanı `)
.setTimestamp()
message.channel.send(presty)
channel.send(log)
}


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: 'k',
  description: "....... Kız Kayıt",
  usage: 'DEVELOPER PRESTY'
}