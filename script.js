export function aufgabe01(args) {
  const input = args
  const result = []

 for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    

  //Wenn das aktuelle Zeichen ein 'e' ist, hänge nichts an die Liste an
    if (currentElement ==='e') {
      result .push("")
  //Wenn das aktuelle Zeichen ein 'E' ist, hänge nichts an die Liste an
    } else if (currentElement === 'E') {
     result.push("")
    } else { // Das aktuelle Zeichen ist weder ein 'e' noch ein 'E' , hänge also das aktuelle zeichen
    result. push(currentElement)
    }
  }
     
  return result.join("")
}

export function aufgabe02(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
  //Wandle das aktuelle Element in einen Grossbuchstaben um
  const capitalizedElement = currentElement.toUpperCase()

  //Hänge den Grossbuchstaben an das Resultat an...
  result.push(capitalizedElement)
  }

 return result.join("")
}

export function aufgabe03(args) {
  const input = args
  const result = []
  let count = 0
for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
  //Teste ob ein 'e'enthalten ist

if(currentElement === 'e') {
count = count + 1
}
if(currentElement === 'E') {
  count = count + 1
 }
  }
return count
 }

 export function aufgabe04(args) {
  const input = args
  const result = []
  let count = 0
  assert.equal(res,4)
 
  // Sollte 4 Wörter zählen.
  for (let i = 0; i < input.length; i++) {
const currentElement = input[i]
 
if (currentElement === ' '){
count = count + 1
 
}
  }
  count = count + 1
  return count
}



  export function aufgabe05(args) {
    const input = args
    const result = []
  let capitalLetters = 0
   
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      //Teste ob in einem Text mindestens ein Grossbuchstabe vorkommt

      const ascii = currentElement.charCodeAt(0)
   
      if ( 65 <= ascii && ascii <= 90) {
        return true
      }
    }
    return false
  }



  export function aufgabe06 (args) {
    const input = args
   
   
    for (let i = 1; i < input.length; i++) {
      const currentElement = input[i]
      const ascii = currentElement.charCodeAt(0)
      if (48<= ascii && ascii <= 57) {
        // mache nichts; ist eine Zahl

      } else if (65<= ascii && ascii <= 90) {
        // mache nichts; ist A-Z

      }else if (97<= ascii && ascii <= 122) {
        // mache nichts; ist a-z

      }else if (currentElement=== " ") {

     


      } else {
        return true
      }
    }
    return false
  }


export function aufgabe07 (args) {
    const input = args
    const result = []
 
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
 
    // Wird getestet, ob das Wort "und" im Text enthalten ist.
      if(currentElement === "u") {
        if (input[i+1]=== "n") {
          if (input[i+2]=== "d") {
            return true
          }
        }
      }
    }
    return false // Wenn kein "und" im Text enthalten ist, ist die Aussage falsch und es wird abgebrochen.
  }










export function aufgabe08(args) {
  const input = args
  const result = []
 
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
 
   //ersetzt "e" mit "3"
  if (currentElement === 'e') {
    result.push("3")
  
  } else if (currentElement === 'E') {
    result.push("E")
 
  } else {
    result.push(currentElement)
  }
 
 
}
return result.join("")

}

//Überprüfe, ob eine Angabe genau sechs Zeichen beträgt.
export function aufgabe09(args) {
  const input = args
  let len = 0
  for (let i = 0; i < input.length; i++) { 
 len++
  }

  if (len=== 6) { 
   return true
 } else { 
    return false
    }
    }

    
export function aufgabe10(args) {
    const input = args
   
    if (input.length !== 7) return false
    if (input[0] !== "#") return false
 
    for (let i = 1; i < input.length; i++) {
      const currentElement = input[i]
      const ascii = currentElement.charCodeAt(0)
      if (48 <= ascii && ascii <= 57) {
        //mach nichts: ist eine Zahl
       } else if (65 <= ascii && ascii <= 70) {
        // mache nichts: ist A-F
       }   else {
            return false
       
       
      }
     
    }
 
    return true
  }





    export function aufgabe11(args) {
      //Gib den ASCII code eines einzelnen Buchstabens an.
      const input = args
      let ascii = null

      if ( input.length > 1) { //Funktionswächter
        return null
      }
       

      for (let i = 0; i < input.length; i++) { 
     const currentElement = input [i]
     ascii = currentElement.charCodeAt(0)
     return ascii
      }
  return null
   }
    


   export function aufgabe12 (args) {
    const input = args

    // Position des ersten "e" suchen
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      if (currentElement === 'e') { 
        return i
      }

    }
      return -1
   }

//Suche die Position des letzten 'e's in einem Text.
export function aufgabe13 (args) {
  const input = args
  const result = []

  let positionOfLastE = -1

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[input.length - i -1]

    if (currentElement === "e") {
      return (input.length-1) - i
    }
    
  }
  
  return -1
}

//Suche die Position des dritten 'e' in einem Text.
export function aufgabe14 (args) {
  const input = args
  const result = []
  let countE = 0
  for (let i = 0; i < input .length; i++) {
    const currentElement = input[i]
  if (currentElement === 'e') {
      countE++
    if (countE === 3) {
     return i

      }
    }
  }
  return -1
 
}

export function aufgabe15 (args) {
  const input = args
  const result = []
 
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
 
//Stelle das Leerzeichen fest.
    if (currentElement === ' ') {
    return result.join("")
  }
  //Falls kein Leerzeichen vorhanden ist, unterbrich nicht.
  result.push(currentElement)
 
}
 
return result.join("")
 
}





export function aufgabe16 (args) {
  const input = args
  const result = []
  
  return result.join("")
}

export function aufgabe17(args) {
  const input = args;
  const result = input.split(',') //das result ist der input der mit einem , getrennt ist.
 
 
for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
 
}
 
  return result.join(',') //das result wird zurückgegeben.
}




//Sollte Name und Alter schreiben
export function aufgabe18 (args) {
  const input = "17  Julia"
  const result = []
  const text = "Ich heisse Julia und bin 17 Jahre alt."
  const phrases = []
  let currentPhrase = []
  for (let i = 0; i < args.length; i++) {
    const currentElement = [i]
    if (currentElement === ',') {
      // Wenn wir hier sind haben wir einen '.' gefunden, und möchten den aktuellen Satz als eine Element in phrases speichern.
      phrases.push(currentPhrase.join(""))
      currentPhrase = []  // Damit löschen wir alles was im aktuellen Satz drin war.
    } else {
      // Wenn wir keinen '.' lesen, dann möchten wir die Zeichen an den aktuellen Satz anhängen.
      currentPhrase.push(currentElement)
    }
  }
  return phrases


  
  return result.join("")
}




//Verdopple alle Zeichen die in der Eingabe enthalten sind
export function aufgabe19(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // es wird zu jedem Element ein Element nochmals angesetzt
    result.push(currentElement)
    result.push(currentElement)
  
  
  }
  return result.join("")
}

//Prüfen Sie ob nach jedem `.` ein Leerschlag kommt.
export function aufgabe20 (args) {
  const input = args
  const result = []
 
 
  for(let i =0; i < input.length; i++) {
    const currentElement = input[i]
 
    if (currentElement === ".") {
      if (input[i+1] === " ")  {
        return true
      }
 
    }
 
}
  return false
}




export function aufgabe21 (args) {
  const input = args
  const result = []
 
for (let i = input.length -1; i>=0; i--) {
  const currentElement = input[i]
  result.push(currentElement)//kehrt die Eingabe um.
 
}
  return result.join("")
}
 
// alle Zeichen aus der Eingabe mit `_` ersetzten, bis zum ersten `k`
export function aufgabe22 (args) {
 
  const input = args
  const result = []
  let firstPart = true
   
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
   
    if (firstPart === true) {
      result.push("_")
    } else {
      result.push(currentElement)
    }
   
   
    if (currentElement === 'k') {
      firstPart = false
    }
   
  }
  return result.join("")
  }
  



export function aufgabe23(args) {
    const input = args;
    const result = [];
 
    if (input.length === 0) {
      return ''; // Soll leer zurückgeben
    }
 
    const firstChar = input.charAt(0);
 
    result.push(firstChar); // Soll erstes Zeichen am Anfang der Ausgabe anhängen
 
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i];
      result.push(currentElement);
    }
 
    result.push(firstChar); //Soll erstes Zeichen am Schluss der Ausgabe anhängen
 
    return result.join('');
  }
 

 //Das erste und das letzte Zeichen der Eingabe sollen vertauscht werden.
  export function aufgabe24 (args) {
    const input = args
    const result = []
   
    if (input.length === 1) return input
    const firstElem=input[0]
    const lastElem=input[input.length-1]
   
    result.push(lastElem)
    for (let i = 1; i < input.length -1; i++) {
      const currentElement = input[i]
      result.push(currentElement)
    }
   
  result.push(firstElem)
    return result.join("")
  }


//das mittlere Zeichen der Eingabe soll gelöscht weren.
export function aufgabe25 (args) {
  const input = args
  const result = []
 
  if (input.length % 2 === 0) {
  //Prüft ob Input.length gerade ist.
 
 //brauchen -1 um auf position zu kommen, weil wir bei 0 zu zählen beginnen.
const pos = input.length / 2 - 1
 
for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
  if (i === pos || i === pos + 1){
    //macht nichts.
  }else {
    result.push(currentElement)
}
}
 
 
  } else {  
     //Input.length ist ungerade 


 
  const pos = Math.floor (input.length / 2 )
//Das mittlere Zeichen soll gelöscht werden
for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
 
  if (i === pos){
//macht nichts
}else {
  result.push(currentElement)
}
}
}
  return result.join("")
}
 

 
 

//Text verwandeln um Elemente zu vertauschen
export function aufgabe26 (args) {
  const list = args. split("") 
  for (let i = 0; i < list.length - 1; i++) { 
  const currentElement = list[i]
  const nextElement = list[i+1]
  if (currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) { 
const tmp = list[i+1]
list[+1] = list[i]
list[i]= tmp
i= 0
  }
   }
  const result = list.join("")
  return (result)
   }

   export function aufgabe27 (args) {
    const input = args
    const result = []
    //Testen sie, ob eine Eingabe eine Zahl ist.
    if (input.length === 0) {return false}
    for (let i = 0; i < input.length; i++) {
   
      const currentElement = input[i]
      const ascii = currentElement.charCodeAt(0)
      if (48 <= ascii && ascii <= 57) {
   
      }
      else return false
    }
    return true
  }


  export function  aufgabe28 (args) {
    const input = args
    const zahlen = input.split(' ')
   
    if (zahlen.length === 2 && !isNaN(zahlen[0]) && !isNaN(zahlen[1])) {
      const zahl1 = parseFloat(zahlen[0]);
      const zahl2 = parseFloat(zahlen[1]);
     
      const summe = zahl1 + zahl2;
      return `${summe}`;
  } else {
      return null;
  }
  }

   export function bubbleSort(args) {
 
    const text = args
    const list = text.split("") //Damit wandeln wir den Text in eine Liste um, das brauchen wir, wenn wir Elemente vertauschen möchte.
    for (let i = 0; i < list.length - 1; i++) {
      const currentElement = list[i]
      const nextElement = list[i+1]
      if (currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
   
        //Reihenfolge stimmt nicht, Elemente müssen getauscht werden.
        const tmp = list[i + 1]
        list[i + 1] = list[i]
        list[i] = tmp
        i = -1 //starte von vorene wenn etwas vertauscht wurde.
    }
  }
    const result = list.join("") // mache text
    console.log(result)
   
    return result
   
   
  }
  


