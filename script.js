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
  }

 export function aufgabe05(args) {
  const input = args
  const result = []
  let capitalLetters = 0

//Setzte den counter auf 0
for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
  if ( currentElement ==="."){
    //do nothing
  }else if(currentElement=== " "){
    // ignoriere Leerschläge
  }else if(currentElement=== currentElement.toUpperCase()) {
    capitalLetters++
 }
}
if (capitalLetters > 0){
  return true
} else {
  return false
}
}



 

 export function aufgabe06 (args) {
  const input = args
  const result = []
  
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    
    if( currentElement === 'a')

 
 
  return result.join("")
 }

 }



export function aufgabe08(args) {
  const input = args
  const result = []
 
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
 
    // Text
  if (currentElement === 'e') {
    result.push("3")
    // Text
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

    
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      if (currentElement === 'e') { 
        return i
      }

    }
      return -1
   }