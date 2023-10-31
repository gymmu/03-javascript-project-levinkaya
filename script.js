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
   }

   