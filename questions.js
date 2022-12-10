var round=3;
var startcontrol="LordN";
var message="x";

var qhistory = new Array(
[1,6,3,"CTS-1",'(no answer)',-100,0]
,[1,3,3,"Dirtrum",'(no answer)',-100,0]
,[1,5,4,"LordN",'(no answer)',-100,0]
,[1,4,3,"CTS-1",'Calaquendi',300,0]
,[1,6,1,"Dirtrum",'Wing Nut Films',100,0]
,[1,5,2,"LordN",'(no answer)',-100,0]
,[1,6,2,"CTS-1",'(no answer)',-100,0]
,[1,1,4,"Dirtrum",'Tobold (incomplete answer)',-100,0]
,[1,2,2,"LordN",'Glorfindel and Ecthelion; Gondolin',200,0]
,[1,2,4,"CTS-1",'Nan Dungortheb, Mirkwood, and the tunnels underneath Cirith Ungol',400,0]
,[1,1,2,"Dirtrum",'Benson',-100,100]
,[1,3,2,"LordN",'(no answer)',-100,0]
,[1,4,5,"CTS-1",'She mandated that the vessel of the Sun and the vessel of the Moon should not be in the sky at the same time',500,0]
,[1,1,3,"Dirtrum",'(no answer)',-100,0]
,[1,5,3,"LordN",'(no answer)',-100,0]
,[1,4,4,"CTS-1",'Sauron and the Balrog',400,0]
,[1,6,4,"Dirtrum",'Womanizer and his bans',-100,0]
,[1,3,4,"LordN",'The Elendilmir',400,0]
,[1,6,5,"CTS-1",'2000',-100,0]
,[1,2,3,"Dirtrum",'(no answer)',-100,0]
,[1,3,5,"LordN",'Glorfindel',-100,0]
,[1,1,5,"CTS-1",'Marcho & Blanco',500,0]
,[1,5,5,"Dirtrum",'Xena',-100,0]
,[1,4,2,"LordN",'Ulmo',200,0]
,[1,5,1,"CTS-1",'It was a donkey or animal voice',-100,0]
,[1,4,1,"Dirtrum",'Manw&euml;',100,0]
,[1,3,1,"LordN",'The Ring was destroyed in March of 3019 of the Third Age',100,0]
,[1,1,1,"CTS-1",'Bullroarer Took',100,0]
,[1,2,5,"Dirtrum",'I cannot get all four',-100,0]
,[1,2,1,"LordN",'Gothmog',-100,0]
,[2,5,5,"CTS-1",'Arwen Evenstar',-200,0]
,[2,2,3,"Dirtrum",'(no answer)',-200,0]
,[2,6,3,"LordN",'Doriath',-200,0]
,[2,2,5,"CTS-1",'Erendis',1000,0]
,[2,3,4,"Dirtrum",'Anduril and Glamdring',-200,0]
,[2,6,2,"LordN",'The Tower Mountains',-200,0]
,[2,5,4,"CTS-1",'Daeron',800,0]
,[2,4,5,"Dirtrum",'(no answer)',-200,0]
,[2,2,2,"LordN",'E&auml;rendil, and...',-200,0]
,[2,1,5,"CTS-1",'(no answer)',-200,200]
,[2,3,5,"Dirtrum",'"Battle Under the Stars"',1000,0]
,[2,5,3,"LordN",'Tuor and Idril',600,0]
,[2,4,4,"CTS-1",'It was known colloquially as "The Bird and the Baby" but its actual name was "The Eagle and the Child"',800,0]
,[2,4,3,"Dirtrum",'Niggle',600,0]
,[2,6,4,"LordN",'Two',-200,0]
,[2,6,5,"CTS-1",'Steward Boromir',-200,0]
,[2,3,3,"Dirtrum",'Spear, "Property of Gil-galad"',-200,0]
,[2,1,3,"LordN",'Boromir and Merry and ...',-200,0]
,[2,6,1,"CTS-1",'Cerin... oh, shoot',-200,0]
,[2,4,2,"Dirtrum",'Exeter',400,0]
,[2,3,1,"LordN",'Sting left with Frodo, Glamdring left with Gandalf, and...Orcrist?',-200,0]
,[2,2,4,"CTS-1",'Orom&euml; and Vaira',-200,0]
,[2,1,4,"Dirtrum","I can't remember",-200,0]
,[2,2,1,"LordN",'Aragorn',200,0]
,[2,4,1,"CTS-1",'Sir Gawain and the Green Knight',-200,0]
,[2,5,1,"Dirtrum",'(no answer)',-200,0]
,[2,3,2,"LordN",'T&uacute;rin',400,0]
,[2,1,1,"CTS-1",'Carenentorn',-200,200]
,[2,5,2,"Dirtrum",'Elendil',-200,0]
,[2,1,2,"LordN",'Hurin',-200,0]
,[3,100,0,100,'Annuminas, Amon Sul, Minas Anor, Orthanc, Osgiliath, Minas Ithil, Tower Hills','xx','Amon Sul, Minas Anor, Orthanc, Minas Ithil, Tower Hills',100,0,-100]
);

//,[0,0,0,"NAME",'x',0,0]

//,[3,0,0,0,'x','x','x',0,0,0]

var answerkey = 329456;




var questiondata = new Array(
[["Who was the first King of Arnor?","Elendil"],[["What was Professor Tolkien's wife's name, and what is inscribed on her tombstone?","Edith; 'Luthien'"],["What famous battle did JRR Tolkien take part in?","The Somme"],[1,1]],[["What was the name of Tolkien's first published poem?","'Goblin Feet'"],["What is the name of the poem Bilbo recited in Rivendell's Hall of Fire?","'Errantry'"],[2,1]],[["At what age did both Bilbo and Frodo each start out on their quests?","50"],["What was the name of Theoden's sword?","Herugrim"],[1,1]],[["Name three of the symbols on the West Door of Moria","Complete the verse: 'seven stars and seven stones and ???????'"],["Hammer and anvil, many-rayed star, two trees, crown","One White Tree."],[1,1]],[["In what building was the Master Palantir housed?","Where do Sam's descendants, the Fairbairns, make their home?"],["The 'Dome of Stars' in Osgiliath","The Tower Hills"],[1,2]]],
[["Symbols","Family Trees"],[["Of what is the writing on the Doors of Moria made?","Who was Elros' grandfather?"],["Mithril","Dior"],[1,1]],[["Who was Frodo's mother?","Who was Bilbo's father?"],["Primula Brandybuck","Bungo Baggins"],[1,2]],[["Through how many generations is Aragorn descended from Elros?","Whose words were these? 'I gave hope to the Dunedain, I have kept none for myself."],["39","Gilraen"],[1,1]],[["Who is the herald of Manwe?","Who was the only of the four chief Hobbits to name a child after another non-Hobbit character in the story?"],["Eownwe","Pippin (Faramir)"],[1,1]],[["What was the name of Morgoth's original fortress?","Name three kingdoms of Elves in Beleriand"],["Utumno","Doriath, Nargothrond, Hithlum"],[1,1]]],
[["Potent Potatables","What is Samwise Gamgee's name for rabbits?"],[["Radagast the Brown","'Coneys'"],["What cordial did Gandalf carry with him on the Quest?","miruvor"],[1,1]],[["What do Elves wrap Lembas in?","To what food does Bilbo compare himself to upon the eagles' rescue of Thorin and Company?"],["Mallorn leaves","bacon"],[1,1]],[["What meat is served at the Unexpected Party?","Who delivered the shards of Narsil to Rivendell?"],["bacon and cold chicken","Ohtar"],[1,1]],[["Who is Samwise's second child?","In the book version, what are the statues at the Argonath holding?"],["Frodo","axes"],[1,1]],[["What is the source of the River Running?","What is the waybread of the Dwarves called?"],["The Front Gate of Erebor","cram"],[1,1]]],
[["Land of the Star","Nicknames"],[["What is the name of the mountain that rose from the middle of Numenor?","What name did Eomer give to Aragorn?"],["The Meneltarma","Wingfoot"],[1,1]],[["What is the name of the region of Numenor that was home to the Faithful?","What does King Finrod's nickname, 'Felagund', mean?"],["Anuminae","'Lord of Caves'"],[1,1]],[["Who slew Beleg Strongbow?","What is the name of the necklace to which the Dwarves of Belegost added a Silmaril for Thingol?"],["Turin Turambar","The Nauglimir"],[1,1]],[["Where did the fleet of Ar-Pharazon land when the King took Sauron back to Numenor?","What does 'Elessar' mean?"],["Umbar","'Elfstone'"],[1,1]],[["Who was the first ruling Queen of Numenor?","Who discovered the Arkenstone?"],["Tar-Ancalime","Thrain I"],[1,1]]],
[["Love Gondorian Style","Is this a Dagor before me?"],[["Who was the wife of Aragorn","Question five one 2"],["Arwen","Answer five one 2"],[1,1]],[["Name the fourth battle of the War of the Jewels","Which Steward gave the keys to Orthanc to Saruman?"],["Beren","Dagor Bragollach ('Sudden flame')"],[1,1]],[["Who was the wife of Denethor?","Where did the host of Gondor land their force in the battle to overthrow the Witch King of Angmar?"],["Findulais","The Forlond and the Harlond"],[1,1]],[["Who snuck into Armenolos to steal a seed of the White Tree of Numenor?","Who is the son of Beregond?"],["Isildur","Bergil"],[1,1]],[["Who was the mother of Eldacar?","Whom did Pippin marry?"],["Vidumavi","Diamond of Long Cleeve"],[1,1]]],
[["Towers and Gates","Bestiary"],[["Name the Towers of the Teeth","According to the filmmakers, do Balrogs have wings?"],["Narchrost and Carchrost","yes"],[1,1]],[["Of what are the rebuilt gates of Minas Tirith made?","Who was the first of the flying dragons?"],["Mithril","Ancalagon the Black"],[1,1]],[["For what purpose was Cirith Ungol built?","To guard the entrance to Mordor via the Morgul Vale"],["What flows before the gates of Barad-Dur?","Lava from Mount Doom"],[1,1]],[["What did rumor have it Rohan paid in tribute to Mordor?","How many towers did Gil-galad build in the Emyn Beriad?"],["Black horses","three"],[1,1]],[["What is the Dwarves' name for their race?","By what name is 'There and Back Again' also called?"],["Khazad","The Red Book of the Westmarch"],[1,1]]]
)

function formatNumber(number)
{
var hundreds = number % 1000;
if (hundreds>=0)
	{if (hundreds < 10) {var hundredstext="00" + hundreds;}
	else if (hundreds < 100) {var hundredstext="0" + hundreds;}
	else {var hundredstext=hundreds;}}
else
	{if (hundreds > -10) {var hundredstext="00" + (-hundreds);}
	else if (hundreds > -100) {var hundredstext="0" + (-hundreds);}
	else {var hundredstext=-hundreds;}}
var thousands = (number - hundreds) / 1000;
if (thousands == 0) {var result=hundreds;}
else {var result=thousands + "," + hundredstext;}
if (number==-1000) {result="-1,000";}
return result;
}