// Solution Code from Justin T - Hyper Brew
// https://community.adobe.com/t5/after-effects-discussions/reading-the-label-colors-from-preferences-file/m-p/11945764#M167347

// I will need getLabelsFromPrefs() to color the buttons in the panel

var table1252 = {
    "€":128,
    "‚":130,
    "ƒ":131,
    "„":132,
    "…":133,
    "†":134,
    "‡":135,
    "ˆ":136,
    "‰":137,
    "Š":138,
    "‹":139,
    "Œ":140,
    "Ž":142,
    "‘":145,
    "’":146,
    "“":147,
    "”":148,
    "•":149,
    "–":150,
    "—":151,
    "˜":152,
    "™":153,
    "š":154,
    "›":155,
    "œ":156,
    "ž":158,
    "Ÿ":159,
    "¡":161,
    "¢":162,
    "£":163,
    "¤":164,
    "¥":165,
    "¦":166,
    "§":167,
    "¨":168,
    "©":169,
    "ª":170,
    "«":171,
    "¬":172,
    "�­":173,
    "®":174,
    "¯":175,
    "°":176,
    "±":177,
    "²":178,
    "³":179,
    "´":180,
    "µ":181,
    "¶":182,
    "·":183,
    "¸":184,
    "¹":185,
    "º":186,
    "»":187,
    "¼":188,
    "½":189,
    "¾":190,
    "¿":191,
    "À":192,
    "Á":193,
    "Â":194,
    "Ã":195,
    "Ä":196,
    "Å":197,
    "Æ":198,
    "Ç":199,
    "È":200,
    "É":201,
    "Ê":202,
    "Ë":203,
    "Ì":204,
    "Í":205,
    "Î":206,
    "Ï":207,
    "Ð":208,
    "Ñ":209,
    "Ò":210,
    "Ó":211,
    "Ô":212,
    "Õ":213,
    "Ö":214,
    "×":215,
    "Ø":216,
    "Ù":217,
    "Ú":218,
    "Û":219,
    "Ü":220,
    "Ý":221,
    "Þ":222,
    "ß":223,
    "à":224,
    "á":225,
    "â":226,
    "ã":227,
    "ä":228,
    "å":229,
    "æ":230,
    "ç":231,
    "è":232,
    "é":233,
    "ê":234,
    "ë":235,
    "ì":236,
    "í":237,
    "î":238,
    "ï":239,
    "ð":240,
    "ñ":241,
    "ò":242,
    "ó":243,
    "ô":244,
    "õ":245,
    "ö":246,
    "÷":247,
    "ø":248,
    "ù":249,
    "ú":250,
    "û":251,
    "ü":252,
    "ý":253,
    "þ":254,
    "ÿ":255
    };
    
    function getLabelsFromPrefs(){
      $.appEncoding = 'CP1252';
    
      var sectionName = "Label Preference Color Section 5";
      var prefFile = PREFType.PREF_Type_MACHINE_INDEPENDENT;
      var keyName;
      var mypref;
      var resArray = [];
    
      for(var i = 1; i <= 16; i++){
        keyName = "Label Color ID 2 # " + i.toString();
        mypref = app.preferences.getPrefAsString(sectionName, keyName, prefFile);
    
        var res = '';
        for(var j = 1; j < mypref.length; j++) {
                var charCode = mypref.charCodeAt(j);
        if(charCode > 254){
            charCode = table1252[mypref[j]]
        }
        var newCode = charCode.toString(16).toUpperCase();
        if(newCode.toString().length === 1){
            newCode = '0'+newCode;
        }
        // alert(mypref[i] +' is '+charCode)
            res += newCode;
        }
        resArray.push(res);
      }
        return resArray;
    };
    
    // B53838, E4D84C, A9CBC7, E5BCC9, A9A9CA, E7C19E, B3C7B3, 677DE0, 4AA44C, 8E2C9A, E8920D, 7F452A, F46DD6, 3DA2A5, A89677, 1E401E
    
    alert(
    "B53838 - " + getLabelsFromPrefs()[0] + " - " + (getLabelsFromPrefs()[0] === "B53838") + "\n"+
    "E4D84C - " + getLabelsFromPrefs()[1] + " - " + (getLabelsFromPrefs()[1] === "E4D84C") + "\n"+
    "A9CBC7 - " + getLabelsFromPrefs()[2] + " - " + (getLabelsFromPrefs()[2] === "A9CBC7") + "\n"+
    "E5BCC9 - " + getLabelsFromPrefs()[3] + " - " + (getLabelsFromPrefs()[3] === "E5BCC9") + "\n"+
    "A9A9CA - " + getLabelsFromPrefs()[4] + " - " + (getLabelsFromPrefs()[4] === "A9A9CA") + "\n"+
    "E7C19E - " + getLabelsFromPrefs()[5] + " - " + (getLabelsFromPrefs()[5] === "E7C19E") + "\n"+ 
    "B3C7B3 - " + getLabelsFromPrefs()[6] + " - " + (getLabelsFromPrefs()[6] === "B3C7B3") + "\n"+
    "677DE0 - " + getLabelsFromPrefs()[7] + " - " + (getLabelsFromPrefs()[7] === "677DE0") + "\n"+
    "4AA44C - " + getLabelsFromPrefs()[8] + " - " + (getLabelsFromPrefs()[8] === "4AA44C") + "\n"+
    "8E2C9A - " + getLabelsFromPrefs()[9] + " - " + (getLabelsFromPrefs()[9] === "8E2C9A") + "\n"+ 
    "E8920D - " + getLabelsFromPrefs()[10] + " - " + (getLabelsFromPrefs()[10] === "E8920D") + "\n"+ 
    "7F452A - " + getLabelsFromPrefs()[11] + " - " + (getLabelsFromPrefs()[11] === "7F452A") + "\n"+
    "F46DD6 - " + getLabelsFromPrefs()[12] + " - " + (getLabelsFromPrefs()[12] === "F46DD6") + "\n"+
    "3DA2A5 - " + getLabelsFromPrefs()[13] + " - " + (getLabelsFromPrefs()[13] === "3DA2A5") + "\n"+
    "A89677 - " + getLabelsFromPrefs()[14] + " - " + (getLabelsFromPrefs()[14] === "A89677") + "\n"+ 
    "1E401E - " + getLabelsFromPrefs()[15] + " - " + (getLabelsFromPrefs()[15] === "1E401E")
    );