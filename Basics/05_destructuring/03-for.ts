type JujutzuChar = {
  name: string;
  ritualTec: string;
}

const toji: JujutzuChar = {
  name: "Toji Fushiguro",
  ritualTec: "Atadura Celestial"
}

const gojo: JujutzuChar = {
  name: "Satoru Gojo",
  ritualTec: "Infinito"
}

const sukuna: JujutzuChar = {
  name: "Sukuna",
  ritualTec: "Santuario"
}

const arrayChars: JujutzuChar[] = [toji, gojo, sukuna];


for (let index = 0; index < arrayChars.length; index++) {
  const element = arrayChars[index];
  if (typeof element?.name === 'string') {
    console.table(element)
  }
}

// ============================================
// for - of
// ============================================

console.log("====== for - of ======")

for (let element of arrayChars) {
  console.table(element);
}