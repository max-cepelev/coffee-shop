const coffeeDB = [
    {   
        id: 1,
        brand: "AROMISTICO",
        weight: "1 kg",
        countryOfOrigin: "Brazil",
        name: "NAPOLI, Dark Roast",
        description: "SMOKY, MALTY & DARK CHOCOLATE-LIKE<br>This full-bodied coffee has a richly intense toasted flavour. It has a long lasting aftertaste and releases notes of malt and dark chocolate.",
        price: 10.92,
        imageUrl: "/images/coffee/Napoli.jpg",
        inBest: true
    },
    {   
        id: 2,
        brand: "AROMISTICO",
        weight: "1 kg",
        countryOfOrigin: "Brazil",
        name: "GARDA - Intense Bold Dark Roast",
        description: "DARK CHOCOLATE TRUFFLE, CINNAMON & CARAMEL-LIKE<br>With its original bold flavours, in this incredible blend we have incorporated the strength of our passion for coffee, as well as our gratitude to hard working communities of coffee growers all around the world.",
        price: 8.99,
        imageUrl: "/images/coffee/Garda.jpeg",
        inBest: false
    },
    {   
        id: 3,
        brand: "PRESTO",
        weight: "1 kg",
        countryOfOrigin: "Brazil",
        name: "HOUSE ESPRESSO COFFEE BEANS",
        description: "Notes of Almand & Dark Cocoa",
        price: 16.99,
        imageUrl: "/images/coffee/EspressoRoast.jpg",
        inBest: false
    },
    {   
        id: 4,
        brand: "PRESTO",
        weight: "1 kg",
        countryOfOrigin: "Brazil",
        name: "BRAZILIAN BLEND COFFEE BEANS",
        description: "Notes of Caramel and Chocolates",
        price: 16.99,
        imageUrl: "/images/coffee/EspressoRoast.jpg",
        inBest: true
    },
    {   
        id: 5,
        brand: "PRESTO",
        weight: "1 kg",
        countryOfOrigin: "Brazil, Vietnam, India, Ethiopia",
        name: "CREMA ESPRESSO COFFEE BEANS",
        description: "Notes of Caramel and Chocolates",
        price: 16.99,
        imageUrl: "/images/coffee/CremaEspresso.jpg",
        inBest: false
    },
    {   
        id: 6,
        brand: "PRESTO",
        weight: "1 kg",
        countryOfOrigin: "Mogiana, Brazil",
        name: "DECAF COFFEE BEANS",
        description: "Notes of Dark Cocoa, Almonds & Peanuts",
        price: 16.99,
        imageUrl: "/images/coffee/DecafRoast.jpg",
        inBest: false
    },
    {   
        id: 7,
        brand: "PRESTO",
        weight: "1 kg",
        countryOfOrigin: "Vietnam",
        name: "ROCKET ROAST COFFEE BEANS",
        description: "Notes of Dark Chocolate & Fruit",
        price: 15.99,
        imageUrl: "/images/coffee/RocketRoast.jpg",
        inBest: false
    },
    {   
        id: 8,
        brand: "PRESTO",
        weight: "1 kg",
        countryOfOrigin: "Santa Barbara, Honduras & Morgiana, Brazil",
        name: "ROCKET ROAST COFFEE BEANS",
        description: "A deliciously smooth blend of beans, cultivated in the high altitude regions of Santa Bárbara, Honduras and Mogiana, Brazil. These beans are wonderfully rich, with notes of dark chocolate and roasted pecans finished with a soft, well-balanced fruity finish.",
        price: 19.99,
        imageUrl: "/images/coffee/CarbonCoffee.jpg",
        inBest: true
    },
    {   
        id: 9,
        brand: "DON PABLO",
        weight: "907 g",
        countryOfOrigin: "Colombia",
        name: "COLOMBIAN SUPREMO",
        description: "Don Pablo knows Colombia and knows where to find the best Supremo. Our mild, sweet, rich and smooth Colombian Supremo has a medium body, pleasant acidity, citrus notes, and a lasting chocolate, walnut finish. The finish is very smooth with low acidity.<br><br>The slight caramelization of the natural sugars in the bean give this Medium-Dark coffee a touch of roastiness, while it still retains its natural flavor character, giving it a sweet, pleasant aftertaste. 100% Arabica Coffee, GMO free.",
        price: 14.99,
        imageUrl: "/images/coffee/Don-Pablo-Colombian-Supremo.jpg",
        inBest: false
    },
    {   
        id: 10,
        brand: "DON PABLO",
        weight: "907 g",
        countryOfOrigin: "Colombia",
        name: "COLOMBIAN DECAF – MEDIUM-DARK ROAST",
        description: "Don Pablo first started growing coffee in the lush hills of Colombia – so our Colombian coffee is one of our specialties, and our world famous Colombian Decaf is no exception. These exceptional beans are decaffeinated with the all-natural Swiss Water® Process, using nothing but pure water to gently rinse the beans of their caffeine content without disrupting their natural flavor. This process ensures the beans are guaranteed to be 99.9% caffeine free. Then, we put them through our artisan small-batch roasting process to slightly caramelize the coffee’s natural sugars to add a light roastiness and malt to a naturally smooth, sweet coffee. The result is a sweet, rich, and oh-so-smooth low-acid coffee that tastes just like you hoped it would – without the caffeine content!",
        price: 17.99,
        imageUrl: "/images/coffee/colombian-decaf.jpg",
        inBest: false
    },
    {   
        id: 11,
        brand: "DON PABLO",
        weight: "907 g",
        countryOfOrigin: "Colombia",
        name: "SIGNATURE BLEND",
        description: "Blended for taste, each of these coffees, Colombia, Guatemala, and Brazil, have distinct body characters making the coffee more complex in the cup than a single origin varietal. The taste is sweet and well integrated and the body medium to full. The finish is cocoa-toned and very smooth with low acidity.<br><br>The slight caramelization of the natural sugars in the bean give this Medium-Dark coffee a touch of roastiness, while it still retains its natural flavor character, giving it a sweet, pleasant aftertaste.",
        price: 14.99,
        imageUrl: "/images/coffee/Don-Pablo-Signature-Blend.jpg",
        inBest: false
    },
    {   
        id: 12,
        brand: "VOLCANICA",
        weight: "454 g",
        countryOfOrigin: "Kenya",
        name: "Kenya AA Coffee",
        description: "The Kenya AA Coffee has a reputation as an unsurpassed top-quality coffee. This meticulously prepared East African coffee is famous for its rich body, pleasant, vibrant acidity, fragrant aroma, and winy aftertaste with overtones of berries and citrus. Kenyan coffee is commonly described as having an almost sweet taste accompanied by wine-like or fruity overtones. They are well-known all over the world and sought after for their bold, intense, full-bodied flavors accompanied by overtones of berry, citrus fruits, and mild floral fragrances. This has lead to Kenya AA coffee being described as sweet with a bright acidity. It is proven that coffees made with Kenyan AA coffee beans contain little-to-no bitter flavors.",
        price: 23.99,
        imageUrl: "/images/coffee/kenyaAA.png",
        inBest: false
    },
    {   
        id: 13,
        brand: "COOPER'S",
        weight: "454 g",
        countryOfOrigin: "Kenya",
        name: "KENYA AA MEDIUM-DARK ROAST",
        description: "We select only the highest grade, Kenya AA of the Bourbon varietal.  These beans exhibit a great combination of tart and dark fruit notes.  The aromas have a molasses honey wheat tea biscuit like scent.  It is roasted to a slightly darker medium roast to bring out a bitter sweet chocolate and dark cherry fruited sweetness.",
        price: 17.95,
        imageUrl: "/images/coffee/kenya5.jpg",
        inBest: true
    },
]

export default coffeeDB;