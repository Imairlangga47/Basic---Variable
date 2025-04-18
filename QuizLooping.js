let enterkosong = '';


const paragraphs = [
    ['The quick brown fox', 'jumps over the lazy dog'],
    ['Lorem ipsum dolor sit amet', 'consectetur adipiscing elit'],
    ['Sed do eiusmod tempor incididunt', 'ut labore et dolore magna aliqua']
  ];

let eachWord = [];

for (let i = 0; i < paragraphs.length; i++) {
    const paragraph = paragraphs[i];

    for (let j = 0; j < paragraph.length; j++) {
        const sentences = paragraph[j];
        const word = sentences.split(' ');

        for (let K = 0; K < word.length; K++) {
            const words = word[K];
            eachWord.push(words);
        }
    }
}
console.log(eachWord);
console.log(eachWord.length);
  
  const salesData = [
    [120.50, 89.70, 45.60],
    [150.00, 130.20, 75.50],
    [200.10, 95.40, 180.60]
  ];
  
for (let i = 0; i < salesData.length; i++) {
    const SalesPerDay = salesData[i];
    let TotalSalesPerDay = 0;
    
    for (let j = 0; j < SalesPerDay.length; j++) {
        const SalePerItemPerDay = SalesPerDay[j];
        TotalSalesPerDay += SalePerItemPerDay;
    }
    console.log(`total sales day ${i+1} = ${TotalSalesPerDay.toFixed(1)}`);
}

console.log('===================');

  // Write a nested loop to calculate and print the total sales for each day.
  
  /* Expected Output:
  Total sales for day 1: 255.80
  Total sales for day 2: 355.70
  Total sales for day 3: 476.10
  */
  
  const sentencesArray = [
    ['The quick brown fox', 'jumps over the lazy dog'],
    ['The quick brown fox', 'is quick and agile'],
    ['A quick fox is hard to catch', 'but a lazy dog is easy']
  ];
  
  let QuickCountforQuick = 0;

  let wordVessel1 = [];
  
for (let i = 0; i < sentencesArray.length; i++) {
  const paragraph1 = sentencesArray[i];

  for (let j = 0; j < paragraph1.length; j++) {
    const sentences1 = paragraph1[j];
    const word1 = sentences1.split(' ');

    for (let k = 0; k < word1.length; k++) {
      const wordLooping = word1[k];

      if (wordLooping === 'quick') {
        QuickCountforQuick++; // "Variable Penampung++" itu sama aja kayak ngitung berapa Index-nya untuk suatu proses coding
      }
    };
  };
};

console.log(`the 'quick' word appears ${QuickCountforQuick} times`);

// sentences Write a nested loop to count and print the number of times the word 'quick' appears in the sentences array.
  
  /* Expected Output:
  The word 'quick' appears 4 times.
  */
console.log('====================')
  

  const socialPosts = [
    ['Loving the new #feature', '#excited for the update'],
    ['Had a great time at the #conference', 'Met some amazing people #networking'],
    ['#Throwback to the best vacation ever', 'Missing the #beach life']
  ];
  
for (let i = 0; i < socialPosts.length; i++) {
  const paragraph2 = socialPosts[i];

  for (let j = 0; j < paragraph2.length; j++) {
    const SingleSentences = paragraph2[j];
    const word2 = SingleSentences.split(' ');

    for (let k = 0; k < word2.length; k++) {
      const word2Looping = word2[k];
      
      if (word2Looping.startsWith('#')) {
        console.log(word2Looping);
      };
    };
  };
};

console.log('====================');

  // Write a nested loop to extract and print all hashtags from the socialPosts array.
  
  /* Expected Output:
  #feature
  #excited
  #conference
  #networking
  #Throwback
  #beach
  */
  
  const fruitGroups = [
    ['apple', 'banana', 'cherry'],
    ['date', 'elderberry', 'fig'],
    ['grape', 'honeydew', 'kiwi']
  ];
  const targetFruits = ['banana', 'fig', 'kiwi', 'mango'];

for (let i = 0; i < fruitGroups.length; i++) {
  const fruitGroupsLooping = fruitGroups[i];

  for (let j = 0; j < fruitGroupsLooping.length; j++) {
    const fruitGroupNestedLoop = fruitGroupsLooping[j];

    if (!targetFruits.includes(fruitGroupNestedLoop)) {
      console.log(fruitGroupNestedLoop);
    };
  };
};

console.log('==================');

// ini contoh kalau yang dicocokan itu fruitGroup2NestedLoop tanpa isi dari TargetFruits
// for (let x = 0; x < fruitGroups.length; x++) {
//   const fruitGroups2Looping = fruitGroups.length[x];

//   for (let y = 0; y < fruitGroups2Looping.length; y++) {
//     const fruitGroup2NestedLoop = fruitGroups2Looping[y];

//     if (targetFruits.includes(fruitGroup2NestedLoop)) {
//       console.log(fruitGroup2NestedLoop);
//     };
//   };
// };
  
  // Write a nested loop to find and print elements in fruitGroups that are not in targetFruits.
  
  /* Expected Output:
  apple
  cherry
  date
  elderberry
  grape
  honeydew
  */
  
  const petGroups = [
    ['cat', 'dog', 'bird'],
    ['fish', 'lizard', 'hamster'],
    ['horse', 'turtle', 'rabbit']
  ];
  const targetPets = ['dog', 'fish', 'rabbit', 'snake'];
  
  // Ver 1
let PetGroupsVessel = [];

for (let i = 0; i < petGroups.length; i++) {
  const petGroupsLooping = petGroups[i];

  for (let j = 0; j < petGroupsLooping.length; j++) {
    const petGroupsNestedLoop = petGroups[i][j];

    if (targetPets.includes(petGroupsNestedLoop)) {
      PetGroupsVessel.push("REPLACED");
    } else {
      PetGroupsVessel.push(petGroupsNestedLoop);
    };
  };
};

console.log(PetGroupsVessel);

console.log('===========================');
  
  // Write a nested loop to replace matching elements in nestedArray with 'REPLACED' and print the updated nestedArray.
  
  /* Expected Output:
  [
    ['cat', 'REPLACED', 'bird'],
    ['REPLACED', 'lizard', 'hamster'],
    ['horse', 'turtle', 'REPLACED']
  ]
  */
  
  const fruitBaskets = [
    ['apple', 'banana', 'cherry'],
    ['date', 'elderberry', 'fig'],
    ['grape', 'honeydew', 'kiwi']
  ];
  const exoticFruits = ['apricot', 'blueberry', 'citrus', 'dragonfruit'];

for (let x = 0; x < exoticFruits.length; x++) {
  const exoticFruitsLooping = exoticFruits[x];
  const FirstLetter = exoticFruitsLooping[0];


  for (let i = 0; i < fruitBaskets.length; i++) {
    const fruitBasketsLooping = fruitBaskets[i];
    
    for (let j = 0; j < fruitBasketsLooping.length; j++) {
      const fruitBasketNesteedLoop = fruitBaskets[i][j];
      
      if (fruitBaskets[i][j].startsWith(FirstLetter)) {
        console.log(fruitBaskets[i][j]);
      };  
    };
  };
};

  
  // Write a nested loop to find and print elements in nestedArray that start with the same letter as any element in compareArray.
  
  /* Expected Output:
  apple
  banana
  cherry
  date
  */