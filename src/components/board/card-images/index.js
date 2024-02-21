// const CARD_IMAGES = {
//  card1: require('./1.png').default,
//  card2: require('./2.png').default,
//  card3: require('./3.png').default,
//  card4: require('./4.png').default,
//  card5: require('./5.png').default,
//  card6: require('./6.png').default,
//  card7: require('./7.png').default,
//  card8: require('./8.png').default,
//
// }


const CARD_IMAGES = {};

for (let i = 1; i <= 36; i++) {
    // Use template literals to dynamically specify the image path
    import(`./${i}.png`).then((image) => {
      CARD_IMAGES[`card${i}`] = image.default;
    });
  }


export default CARD_IMAGES;