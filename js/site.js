
alert('test')

const thrMusical = {
	name: "Le Rouge et Le Noir",
    englishName: "The Red and The Black",
	alsocalled: [ "红黑", "法红黑", "REN" ],
    CountryofOrigin: "France",
	isMusical: true,
	iisOpera: false,
    isRockOpera: true,
    language: "french",
    showTtime: "2017/1/9",
    producer:" Albert Cohen",
    otherInformation: "Le Rouge et le Noir is a rock opera produced by Albert Cohen and directed by François Chouquet and Laurent Seroussi adapted from Stendhal's novel of the same name. Performances take place from September 22, 2016, to January 29, 2017, at Palace à Paris.",
    characters:["Geronimo", "Julien Sorel", "Monsieur de Renal", "Madame de Renal","Elisa", "Monsieur Valenod",  "Madame Valenod", "Marquis de la Mole", "Mathilde de la Mole" ],


    performers:{
      casts:[
        {
        fredColas: ["Prest", "Judge", "housekeeper"], 
        valewuCynthiaTolleron: "Elisa",
        patriceMaktav: "Monsieur Valenod",
        elsaPerusin: "Madame Valenod",
        Haylen: "Louise de Renal",
        Come: "Julien Sorel",
        julieFournier: "Mathilde de la Mole",
        michelLerousseau: "Le Marquis de la Mole",
        philippeEscande: "Monsieur de Renal",
        noemieGarcia: "Madame de Fervaques",
        louisMichaut: "Marquis de Croisenois",
        yoannLaunay: "Geronimo"
        },
      ],

      bandMembers:[
        {Guitarist: "Mao Blanc",
        Drummer: ["Camille Bigeault", "Stephane Boutinaud"],
        bassPlayer: "Sabrina Boudaoud",
        keyboardPlayer: "Brice Mirrione"
        },
      ],
    },

   

    songList: [
        {
         songNumber: 1,
         saongName: "Ecouter son cour",
         translation: "Listen to the hearts"    
        },

        {
        songNumber: 2,
        saongName: "La sagesse est de tous les ages",
        translation: "Wisdom of all ages"    
        },

        {
        songNumber: 3,
        saongName: "Ding dong",
        translation: "Ding dong"    
        },

        {
        songNumber: 4,
        saongName: "Ce qui compte",
        translation: "The most important thing"    
        },
    
        {
        songNumber: 5,
        saongName: "La gloire a mes genius",
        translation: "The glory at my feet"    
        },

        {
        songNumber: 6,
        saongName: "Les maudits mots d’amour",
        translation: "Curse of love"    
        },
        
        {
        songNumber: 7,
        saongName: "Que c'est bon d'être un bourgeois",
        translation: "It’s good to be a bourgeois"    
        },

        
        {
        songNumber: 8,
        saongName: "Je suis lache, et alors?",
        translation: "I’m a coward, so what?"    
        },
        
        {
        songNumber: 9,
        saongName: "le Noir Je vois Rouge ",
        translation: "Light In the darkness"    
        },
    
        {
        songNumber: 10,
        saongName: "Quel ennui",
        translation: "How boring it is."    
        },
            
        {
        songNumber: 11,
        saongName: "Tout se perd",
        translation: "Everything is lost"    
        },
            
        {
            songNumber: 12,
            saongName: "Le temps passe avec vous",
            translation: " The time with you"    
            },
        
            {
            songNumber: 13,
            saongName: " Sans elles",
            translation: "Without the girls"    
            },
    
            {
            songNumber: 14,
            saongName: "il aurait suffi",
            translation: "it would have been enough"    
            },
            
            {
            songNumber: 15,
            saongName: "Pour qu’elles nous aiment ",
            translation: "So that they may love us"    
            },
    
            
            {
            songNumber: 16,
            saongName: "Mis a mort ",
            translation: " Kill"    
            },
            
            {
            songNumber: 17,
            saongName: "Ces peines perdues",
            translation: "Such a waste of efforts"    
            },
        
            {
            songNumber: 18,
            saongName: "L’amour nous de sarme",
            translation: "Love disarms us"    
            },
                
            {
            songNumber: 19,
            saongName: "Je vous laisse helas",
            translation: "I’ll wait for you"    
            },

            {
            songNumber: 20,
            saongName: "Le coeur est vainqueur ",
            translation: "The heart is victorious"    
            },
                    
            {
            songNumber: 21,
            saongName: "",
            translation: ""    
            },
         ],


	sayYourName: function(yourName) {
		if (!yourName) {
			console.log("You love Le Rouge et Le Noir ");
      return;
		}

		console.log(yourName +"loves Le Rouge et Le Noir");
	},


    comeCallsTaxi: function(come) {
		if (!come) {
			console.log("waive one's thumb");
      return;
		}

		console.log(come +"shouted toward the taxi：AHHHHHHHHHHHH😲");
	}




};