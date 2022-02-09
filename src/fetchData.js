const fakeProductData = [
	{
		id: "123",
		title: "Blue Drumset",
		brand: "Yamaha",
		price: 89999,
		image:
			"https://www.yamaha.com/yamahavgn/PIM/Images/19027_12073_1_1200x1200_80813f268e73483818697e99937dbd59.jpg",
		description:
			"This beginner drumset comes with everything you need to rock your neighbors socks off any day of the week.",
	},
	{
		id: "456",
		title: "Red Drumset",
		brand: "Yamaha",
		price: 99999,
		image:
			"https://media.sweetwater.com/images/items/750/SBP8F3CR-large.jpg?v=59a77bcd3841c67a",
		description:
			"This beginner drumset comes with everything you need to rock your neighbors socks off any day of the week.",
	},
	{
		id: "789",
		title: "Guitar",
		brand: "Fender",
		price: 69999,
		image:
			"https://sc1.musik-produktiv.com/pic-010105746xxl/fender-player-stratocaster-pf-3ts.jpg",
		description:
			"The good, old standard series is getting up in the years so it's time for something new! The Player Stratocaster PF 3TS made in Mexico is a worthy ...",
	},
	{
		id: "111",
		title: "Flute",
		brand: "blowMe",
		price: 99999,
		image: "https://m.media-amazon.com/images/I/716R2xL2mPL._AC_SL1500_.jpg",
		description:
			"YFL-222 Standard Flute Offset G C-Foot. The Yamaha YFL-222 Standard flute in C features drawn and curled tone holes, covered keys and an offset G. It ...",
	},
];


export const fetchProducts = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    try {
      resolve(fakeProductData)
    } catch (error) {
      reject(error)
    }
  }, 1000);
});

