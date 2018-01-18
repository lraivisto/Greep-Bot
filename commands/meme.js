  const Discord = require('discord.js');
exports.run = (client, message) => {
   
    var memes=["http://i3.kym-cdn.com/photos/images/newsfeed/001/217/729/f9a.jpg", 
               "https://i.ytimg.com/vi/HaLbRJ9VR68/maxresdefault.jpg",
               "https://i.ytimg.com/vi/mQ8lrBjy-7E/maxresdefault.jpg",
               "https://i.imgflip.com/20lq06.jpg",
               "https://img-9gag-fun.9cache.com/photo/aQ3qpr8_460s.jpg",
               "https://img-9gag-fun.9cache.com/photo/ap2qoeE_460s_v1.jpg",
               "https://i.imgflip.com/22nf48.jpg",
               "https://i.imgflip.com/22ndg6.jpg",
               "https://i.imgflip.com/22ne9i.jpg",
               "https://i.imgflip.com/22ol1f.jpg",
               "https://i.imgflip.com/22mzk5.jpg",
               "https://images-cdn.9gag.com/photo/avrzLN5_700b.jpg",
               "https://img.memecdn.com/grandma-computer-expert_o_1142296.jpg",
               "https://i1.wp.com/picsmine.com/wp-content/uploads/2017/03/Hey-girls-lets-burn-some-rubber-Car-Memes.jpg?resize=640%2C773",
               "https://images1.westword.com/imager/u/745xauto/7979742/colorado.car.memes.13.jpg",
               "https://drivetribe.imgix.net/VFBy1i1WQQuArXPPk1aGXA?w=400&h=400&fm=pjpg&auto=compress&fit=crop&crop=faces,edges",
               "https://worldwideinterweb.com/wp-content/uploads/2015/11/cold-weather-funny-images.jpg",
    "https://i.pinimg.com/236x/96/73/d7/9673d7a46780bbf9dfb173abe2c9f6b5--minecraft-memes-minecraft-stuff.jpg",
    "http://i0.kym-cdn.com/photos/images/facebook/000/233/630/6cf.jpg",
    "https://pics.me.me/when-the-fbi-breaks-through-your-window-an-asks-if-26088337.png",
    "https://res.cloudinary.com/lmn/image/upload/c_limit,e_sharpen:150,f_auto,fl_lossy,h_360,q_80,w_640/v1/gameskinnyc/s/p/o/spongebob-58687.jpg",
    "https://media1.popsugar-assets.com/files/thumbor/Jd4nQ83myp6U6gWLzHV8aCkp6Lo/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2015/07/30/615/n/1922153/6f32db66ead6ded2_Screen_Shot_2015-07-29_at_5.21.10_PM/i/Funny-Beauty-Memes.png",
    "https://fthmb.tqn.com/8cdFIfAhwNAdNAJelEebxEhrmTI=/735x0/success-56a9fd1f3df78cf772abee09.jpg",
    "http://solifequotes.com/wp-content/uploads/2016/07/35-Hilarious-Memes-1-Hilarious-Memes.jpg",
    "https://i.imgflip.com/136tm8.jpg",
    "https://img-9gag-fun.9cache.com/photo/a2ozQGw_460s.jpg",
    "https://images-ext-2.discordapp.net/external/5DhNamxy3YXmxbqsZlziJ02QahC_6my-GYZ5KqfyzVo/https/i.imgur.com/tLEnhrT.png?width=329&height=344",
    "http://images.memes.com/meme/5325.jpg",
    "https://i.imgflip.com/20kax7.jpg",
    "http://cdn.ebaumsworld.com/mediaFiles/picture/2388802/84820180.jpg",
    "https://i.pinimg.com/736x/9b/77/97/9b7797ce389244b0da6837f95fa1e112--generator-memes-monkey-memes.jpg",
    "https://media.licdn.com/mpr/mpr/shrinknp_800_800/AAEAAQAAAAAAAASIAAAAJGUxNzViZjY3LTdmYzQtNGNlMC05MDk1LWM5ZTJlYjI0OWNhYw.png",
    "https://i.pinimg.com/736x/e7/b5/9f/e7b59ffb213f99002a5cbb531ede8a8e--crazy-girlfriend-quotes-crazy-girlfriend-meme.jpg",
    "https://pics.me.me/girl-touches-my-noodle-dooodle-region-me-mess-with-this-17999703.png",
    "https://pics.me.me/ifyour-boyfriend-hasntbeen-in-the-military-then-you-have-a-2523866.png",
    "https://pics.me.me/your-girl-when-shes-mad-vs-your-girl-when-you-16255543.png",
    "http://cdn2-www.craveonline.com/assets/uploads/2017/04/2.png",
    "https://img.memecdn.com/the-struggle-v-v_o_1788253.jpg",
    "http://images.memes.com/meme/6083.jpg",
    "https://i.imgflip.com/20kax7.jpg",
    "https://pics.me.me/when-your-card-declines-and-the-total-only-2-18-the-28951063.png",
    "https://cdn.discordapp.com/attachments/270195186846531585/375657514680844289/DNaJJDSV4AAMttn.jpg",
    "**I can't always give out free memes, **:stuck_out_tongue_winking_eye: ",
    "https://tr3.cbsistatic.com/hub/i/2017/03/23/fd2cfe38-d0b2-4fee-9450-03b3d5f521d8/c3f153e108263291254737cffd045982/funnytechmemes1thumb800.jpg",
    "https://pbs.twimg.com/media/DO4xwBPX0AAHs0X.jpg",
    "http://s2.quickmeme.com/img/a6/a602774c48e075657a37b3a60bec501e58f0269dd7ce71ee0c7adf9ce6f96987.jpg",
    "http://cdn2-www.craveonline.com/assets/uploads/2017/07/0-900x713.jpg",
    "https://virily.com/wp-content/uploads/2017/03/d465cdff909bb9b3327827bf89c0061d.jpg",
    "http://cdn.ebaumsworld.com/mediaFiles/picture/730195/85460504.jpg",
    "https://appamatix.com/wp-content/uploads/2015/07/Ice_cubes_float.png",
    "http://i0.kym-cdn.com/photos/images/newsfeed/000/264/057/d1b.jpg",
    "https://i.imgflip.com/hwxkx.jpg",
    "https://i.imgflip.com/129fam.jpg",
    "https://i.imgflip.com/129fmf.jpg",
    "https://i.imgflip.com/20nhuk.jpg",
    "https://pbs.twimg.com/media/DOzFlcuW0AA81Ad.jpg",
    "https://i.imgflip.com/c01na.jpg",
    "http://thepopularteen.com/wp-content/uploads/2015/09/promposal.jpg",
    "https://i.pinimg.com/736x/43/78/63/43786326c61ecec1ddd810bc6e71e930--wolf-warriors-teen-wolf-humor.jpg",
    "https://images.rapgenius.com/8e6c529155e7f05303dd2f6ef3036a8b.400x571x1.jpg",
    "https://pbs.twimg.com/media/DOycWnxVwAA37LJ.jpg",
    "http://visionity.com/wp-content/uploads/2016/06/Grab-your-umbrella-adult-meme.jpg",
    "https://i.imgflip.com/t9w98.jpg",
    "https://i.imgflip.com/20l7a5.jpg",
    "https://i.imgflip.com/g2aql.jpg",
    "https://i.imgflip.com/t8evn.jpg",
    "https://i.imgflip.com/dt3op.jpg",
    "https://i.imgflip.com/20mm5k.jpg",
    "https://i.imgflip.com/129fzx.jpg",
    "https://i.imgflip.com/1m9zim.jpg",
    "https://i.chzbgr.com/full/9014775808/hC8B5B275/",
    "https://i.imgur.com/zk85pjN.jpg",
    "https://i.imgflip.com/li65g.jpg",
    "https://i.imgflip.com/1uu0w7.jpg",
    "https://i.imgflip.com/goo47.jpg",
    "https://i.imgflip.com/1rgwbz.jpg",
    "https://i.imgflip.com/yepnf.png",
    "http://i0.kym-cdn.com/photos/images/original/001/220/291/0fc.png",
    "https://winkgo.com/wp-content/uploads/2016/06/23-Funny-Baby-Memes-That-Are-Adorably-Cute-16.jpg",
    "http://www.mommyshorts.com/wp-content/uploads/2014/09/6a0133f30ae399970b0192aa1b4c77970d-800wi.jpg",
    "http://worldwideinterweb.com/wp-content/uploads/2017/10/funny-baby-meme-photos.jpg",
    "https://i.imgflip.com/129g5s.jpg",
    "https://i.imgflip.com/656kc.jpg",
    "https://i.imgflip.com/1s1ucg.jpg",
    "https://pics.me.me/w03-sv96-via-meme-enteric-only-men-will-understand-%E0%B8%81%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%8A%E0%B8%B2%E0%B8%A2%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B9%83%E0%B8%88-http-9gag-com-gag-axa9m7g-6252743.png",
    "https://i.pinimg.com/736x/13/30/df/1330dfcd76cb635f59a372037ef6a234--fitness-memes-gym-memes.jpg",
    "https://i.pinimg.com/736x/2a/f3/81/2af381715d4d6c0cc84de507c0f74815--soccer-memes-kid-memes.jpg",
    "https://i.imgflip.com/129g2g.jpg",
    "https://i.imgflip.com/1uu12h.jpg",
    "http://www.dumpaday.com/wp-content/uploads/2012/12/bad-kid-meme-funny-pictures.jpg",
    "https://funnymemes.co/memes/Full_blown_lobsters_Funny_Meme.jpg",
    "https://i.imgur.com/iMXsX2T.jpg",
    "https://i.imgflip.com/8mm1m.jpg",
    "http://www.pmslweb.com/the-blog/wp-content/uploads/2013/11/35-turning-right-in-5-miles-grandma-meme.jpg",
    "https://heavyeditorial.files.wordpress.com/2013/07/m11.jpg?quality=65&strip=all",          
    "http://www.wastedpotatoes.com/subcategories/2016/video_game_memes/image/video_game_memes34.jpg",
    "http://quotesnhumor.com/wp-content/uploads/2015/08/Top-30-Funny-animal-memes-and-quotes-Funniest-animals.jpg",
    "https://pics.me.me/anyone-see-a-catp-adult-humour-click-like-if-you-4953924.png",
    "https://jokideo.com/wp-content/uploads/meme/2014/04/Adult-meme---Scientists-have-discovered.jpg",
    "http://www.pmslweb.com/the-blog/wp-content/uploads/2017/06/6-how-to-know-if-your-girlfriend-is-horny-funny-adult-meme.jpg",
    "http://www.corcell.com/wp-content/uploads/8-hilarious-baby-memes-for-new-parents1.png",
    "https://i.pinimg.com/originals/90/fa/0b/90fa0ba11859183592ad27e6dd92a88a.jpg",
    "https://www.50-best.com/images/animal_memes/request_your_assistance.jpg",
    "https://pics.me.me/he-birth-of-an-autist-9gag-memes-are-dank-af-18831993.png",
    "https://images-cdn.9gag.com/photo/avrzLN5_700b.jpg",
    "http://res.cloudinary.com/nextermedia/image/fetch/w_728/http://gabworthy.com/wp-content/uploads/2015/07/Dont-like-my-sarcasm-meme.jpg",
    "http://quotespill.com/wp-content/uploads/2017/10/9a7f9b1e437b39b6dd1972700fbebc939793228b3b0e31d900713cdfcd1e2b78-min-300x295.jpg",
    "http://s.quickmeme.com/img/13/13c136ff3d2bacd0f25e6d67420a8da7135cba9f2d268a14bdf03e797f890dd0.jpg",
    "https://fthmb.tqn.com/I0AhpJFS9kVD-gpNqG782SEOWDo=/768x0/filters:no_upscale()/trump-supporters-stupid-56b6de965f9b5829f835018e.jpg",
    "https://i.imgflip.com/ukvtb.jpg",
    "https://i.imgflip.com/fc1hn.jpg",          
    "http://i0.kym-cdn.com/photos/images/original/001/165/960/049.jpg",
    "https://pics.me.me/living-with-parents-v-s-living-alone-idk-about-you-people-23816783.png",
    "https://i.imgflip.com/1uikdz.jpg",
    "https://pbs.twimg.com/media/DOuk8n0XkAAzNnN.jpg",]

    
    var memesans = memes[Math.floor(Math.random()*memes.length)];
    
    var memesanswer = memesans.toString();
  
    
    message.channel.send(
    
      new Discord.RichEmbed()
    
      .setAuthor("Greep - Meme",client.user.avatarURL)
      .setDescription(`Your meme, <@!${message.author.id}>!`)
      .setColor(0xECEDEE)
      .setImage(memesanswer));
  
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'meme',
  description: 'View e meme.',
  usage: 'meme'
}
