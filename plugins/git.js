const Maalutty = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Maalutty.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://i.ibb.co/BsVW6fM/IMG-20211210-WA0528.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `❤️Maalutty_v2💙



*owner number Devil* :https://wa.me/918848477621.
            

*owner id instagram* :https://instagram.com/athul_kochu_09871?utm_medium=copy_link.
.


*github* : https://github.com/jockersir/jocker_v2.


*audio commands* :https://github.com/jockersir/uploads/tree/main/bgm.


*sticker commands* :https://github.com/jockeesir/uploads/tree/main/stickers.

❤️jocker💙
■□ ~Devil sir~■□ 

`}) 

}));
