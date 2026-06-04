// ============================================================
//  DAARU HOUSE — Data
//  Edit this file to update menu items, featured dishes,
//  reviews, and filter categories.
// ============================================================

const MENU_DATA = [
  // ── South Indian Breakfast ──────────────────────────────
  { id: 1,  name: "Idly (3 pcs)",               price: 100, cat: "Breakfast", veg: true,  emoji: "🍚",image: "images/menu/breakFast/idly2.jpg" },
  { id: 2,  name: "Sambar Idly (3 pcs)",         price: 120, cat: "Breakfast", veg: true,  emoji: "🍲" ,image: "images/menu/breakFast/sambarIdly.jpg"},
  { id: 3,  name: "Vada (3 pcs)",                price: 100, cat: "Breakfast", veg: true,  emoji: "🍩",image: "images/menu/breakFast/vada.jpg" },
  { id: 4,  name: "Idly 2 pcs + Vada 1 pc",     price: 100, cat: "Breakfast", veg: true,  emoji: "🍱" ,image:"images/menu/breakFast/2idly1vada.jpg"},
  { id: 5,  name: "Puri Bhaji (3 pcs)",          price: 120, cat: "Breakfast", veg: true,  emoji: "🫓" ,image:"images/menu/breakFast/puri.jpg"},
  { id: 6,  name: "Chole Bhature (2 pcs)",       price: 120, cat: "Breakfast", veg: true,  emoji: "🥙" ,image:"images/menu/breakFast/choleyBaturi.jpg"},
  { id: 7,  name: "Pongal",                      price: 120, cat: "Breakfast", veg: true,  emoji: "🍛" ,image:"images/menu/breakFast/pongal.jpg"},
  { id: 8,  name: "Upma",                        price: 80,  cat: "Breakfast", veg: true,  emoji: "🍿" ,image:"images/menu/breakFast/upma.jpg"},
  { id: 9,  name: "Plain Dosa",                  price: 100, cat: "Breakfast", veg: true,  emoji: "🥞" ,image:"images/menu/breakFast/dosa.jpg"},
  { id: 10, name: "Masala Dosa",                 price: 120, cat: "Breakfast", veg: true,  emoji: "🥞" ,image:"images/menu/breakFast/masalaDosa.jpg"},
  { id: 11, name: "Onion Dosa",                  price: 120, cat: "Breakfast", veg: true,  emoji: "🥞" ,image:"images/menu/breakFast/onionDosa.jpg"},
  { id: 12, name: "Egg Dosa",                    price: 120, cat: "Breakfast", veg: false, emoji: "🥚" ,image:"images/menu/breakFast/eggDosa.jpg"},
  { id: 13, name: "Chicken Keema Dosa",          price: 160, cat: "Breakfast", veg: false, emoji: "🥞" ,image:"images/menu/breakFast/ChickenKeemaDosa.jpg"},
  { id: 14, name: "Upma Dosa",                   price: 120, cat: "Breakfast", veg: true,  emoji: "🥞" ,image:"images/menu/breakFast/upmaDosa.jpeg"},
  { id: 15, name: "Onion Uttapam",               price: 120, cat: "Breakfast", veg: true,  emoji: "🥞" ,image:"images/menu/breakFast/OnionUttapam.jpg"},
  { id: 16, name: "Lemon Rice",                  price: 140, cat: "Breakfast", veg: true,  emoji: "🍋" ,image:"images/menu/breakFast/LemonRice.jpg"},
  { id: 17, name: "Tomato Rice",                 price: 140, cat: "Breakfast", veg: true,  emoji: "🍅" ,image:"images/menu/breakFast/TomatoRice.jpg"},
  { id: 18, name: "Sambar Rice",                 price: 130, cat: "Breakfast", veg: true,  emoji: "🍲" ,image:"images/menu/breakFast/SambarRice.jpeg"},
  { id: 19, name: "Dal Khichdi",                 price: 130, cat: "Breakfast", veg: true,  emoji: "🍛" ,image:"images/menu/breakFast/DalKhichdi.jpg"},

  // ── Veg Starters ────────────────────────────────────────
  { id: 20, name: "Onion Pakoda",                price: 100, cat: "Veg-Starters",  veg: true,  emoji: "🧅",image:"images/menu/VegStarters/OnionPakoda.jpg" },
  { id: 21, name: "French Fries",                price: 100, cat: "Veg-Starters",  veg: true,  emoji: "🍟" ,image:"images/menu/VegStarters/FrenchFries.jpg"},
  { id: 22, name: "Fry Peanut Masala",           price: 100, cat: "Veg-Starters",  veg: true,  emoji: "🥜",image:"images/menu/VegStarters/FryPeanutMasala.jpg" },
  { id: 23, name: "Boiled Peanut Masala",        price: 100, cat: "Veg-Starters",  veg: true,  emoji: "🥜",image:"images/menu/VegStarters/BoiledPeanutMasala.jpg" },
  { id: 24, name: "Veg Manchuria",               price: 150, cat: "Veg-Starters",  veg: true,  emoji: "🥦" ,image:"images/menu/VegStarters/VegManchuria.jpg"},
  { id: 25, name: "Gobi Manchuria",              price: 170, cat: "Veg-Starters",  veg: true,  emoji: "🥦" ,image:"images/menu/VegStarters/GobiManchuria.jpeg"},
  { id: 26, name: "Crispy Baby Corn",            price: 150, cat: "Veg-Starters",  veg: true,  emoji: "🌽" ,image:"images/menu/VegStarters/CrispyBabyCorn.jpg"},
  { id: 27, name: "Chilli Paneer",               price: 180, cat: "Veg-Starters",  veg: true,  emoji: "🧀" ,image:"images/menu/VegStarters/ChilliPaneer.jpg"},
  { id: 28, name: "Paneer Pakoda",               price: 180, cat: "Veg-Starters",  veg: true,  emoji: "🧀" ,image:"images/menu/VegStarters/PaneerPakoda.jpg"},
  { id: 29, name: "Roasted Papad (2 pcs)",       price: 20,  cat: "Veg-Starters",  veg: true,  emoji: "🫓" ,image:"images/menu/VegStarters/RoastedPapad.jpg"},
  { id: 30, name: "Masala Papad (2 pcs)",        price: 50,  cat: "Veg-Starters",  veg: true,  emoji: "🫓" ,image:"images/menu/VegStarters/MasalaPapad.jpg"},

  // ── Non-Veg Starters ────────────────────────────────────
  { id: 31, name: "Boiled Egg (2 pcs)",          price: 40,  cat: "Non-Veg-Starters",  veg: false, emoji: "🥚" ,image:"images/menu/Non-VegStarters/BoiledEgg.jpg"},
  { id: 32, name: "Masala Omlet",                price: 50,  cat: "Non-Veg-Starters",  veg: false, emoji: "🍳" ,image:"images/menu/Non-VegStarters/MasalaOmlet.jpg"},
  { id: 33, name: "Egg Burji",                   price: 100, cat: "Non-Veg-Starters",  veg: false, emoji: "🍳" ,image:"images/menu/Non-VegStarters/EggBurji.jpg"},
  { id: 34, name: "Chicken Nuggets (8 pcs)",     price: 100, cat: "Non-Veg-Starters",  veg: false, emoji: "🍗" ,image:"images/menu/Non-VegStarters/ChickenNuggets.jpg"},
  { id: 35, name: "Chilli Chicken",              price: 170, cat: "Non-Veg-Starters",  veg: false, emoji: "🌶️" ,image:"images/menu/Non-VegStarters/ChilliChicken.jpg"},
  { id: 36, name: "Chicken 65",                  price: 170, cat: "Non-Veg-Starters",  veg: false, emoji: "🍗" ,image:"images/menu/Non-VegStarters/Chicken65.jpg"},
  { id: 37, name: "Chicken Lollipop (6 pcs)",    price: 180, cat: "Non-Veg-Starters",  veg: false, emoji: "🍖" ,image:"images/menu/Non-VegStarters/ChickenLollipop.jpg"},
  { id: 38, name: "Chicken Manchuria",           price: 170, cat: "Non-Veg-Starters",  veg: false, emoji: "🍗" ,image:"images/menu/Non-VegStarters/ChickenManchuria.jpeg"},
  { id: 39, name: "Chicken Pakoda",              price: 150, cat: "Non-Veg-Starters",  veg: false, emoji: "🍗" ,image:"images/menu/Non-VegStarters/ChickenPakoda.jpg"},
  { id: 40, name: "Chicken Pop Corn",            price: 150, cat: "Non-Veg-Starters",  veg: false, emoji: "🍿" ,image:"images/menu/Non-VegStarters/ChickenPopCorn.jpg"},
  { id: 41, name: "Cashewnut Chicken",           price: 200, cat: "Non-Veg-Starters",  veg: false, emoji: "🍗" ,image:"images/menu/Non-VegStarters/CashewnutChicken.jpg"},
  { id: 42, name: "Chilli Prawn",                price: 200, cat: "Non-Veg-Starters",  veg: false, emoji: "🦐" ,image:"images/menu/Non-VegStarters/ChilliPrawn.jpg"},
  { id: 43, name: "Butter Garlic Prawns",        price: 200, cat: "Non-Veg-Starters",  veg: false, emoji: "🦐" ,image:"images/menu/Non-VegStarters/ButterGarlicPrawn.jpg"},
  { id: 44, name: "Chicken Keema Balls",         price: 200, cat: "Non-Veg-Starters",  veg: false, emoji: "🍖" ,image:"images/menu/Non-VegStarters/ChickenKeemaBalls.jpg"},
  { id: 45, name: "Tawa Fish",                   price: 100, cat: "Non-Veg-Starters",  veg: false, emoji: "🐟" ,image:"images/menu/Non-VegStarters/TawaFish.jpg"},
  { id: 46, name: "Chilli Fish",                 price: 150, cat: "Non-Veg-Starters",  veg: false, emoji: "🐟" ,image:"images/menu/Non-VegStarters/ChilliFish.jpeg"},

  // ── Veg Main Course ─────────────────────────────────────
  { id: 47, name: "Aloo Mutter Masala",          price: 140, cat: "Veg-Main Course", veg: true,  emoji: "🥔",image:"images/menu/VegMainCourse/AlooMutterMasala.jpg" },
  { id: 48, name: "Gobi Masala",                 price: 140, cat: "Veg-Main Course", veg: true,  emoji: "🥦",image:"images/menu/VegMainCourse/GobiMasala.jpg" },
  { id: 49, name: "Baby Corn Masala",            price: 140, cat: "Veg-Main Course", veg: true,  emoji: "🌽",image:"images/menu/VegMainCourse/BabyCornMasala.jpg" },
  { id: 50, name: "Kadai Veg",                   price: 140, cat: "Veg-Main Course", veg: true,  emoji: "🥘",image:"images/menu/VegMainCourse/KadaiVeg.jpeg" },
  { id: 51, name: "Mix Veg Curry",               price: 150, cat: "Veg-Main Course", veg: true,  emoji: "🍛",image:"images/menu/VegMainCourse/MixVegCurry.jpg" },
  { id: 52, name: "Tomato Curry",                price: 120, cat: "Veg-Main Course", veg: true,  emoji: "🍅",image:"images/menu/VegMainCourse/TomatoCurry.jpeg" },
  { id: 53, name: "Kaju Tomato Curry",           price: 170, cat: "Veg-Main Course", veg: true,  emoji: "🥜",image:"images/menu/VegMainCourse/KajuTomatoCurry.jpg" },
  { id: 54, name: "Kaju mutter Masala",          price: 150, cat: "Veg-Main Course", veg: true,  emoji: "🌿",image:"images/menu/VegMainCourse/KajuMutterMasala.jpg" },
  { id: 55, name: "Chole Masala",                price: 120, cat: "Veg-Main Course", veg: true,  emoji: "🫘",image:"images/menu/VegMainCourse/CholeMasala.jpg" },
  { id: 56, name: "Paneer Butter Masala",        price: 180, cat: "Veg-Main Course", veg: true,  emoji: "🧀",image:"images/menu/VegMainCourse/PaneerButterMasala.jpg" },
  { id: 57, name: "Palak Paneer",                price: 180, cat: "Veg-Main Course", veg: true,  emoji: "🌿",image:"images/menu/VegMainCourse/PalakPaneer.jpg" },
  { id: 58, name: "Shahi Paneer",                price: 180, cat: "Veg-Main Course", veg: true,  emoji: "🧀",image:"images/menu/VegMainCourse/ShahiPaneer.jpg" },
  { id: 59, name: "Kadai Paneer",                price: 180, cat: "Veg-Main Course", veg: true,  emoji: "🧀",image:"images/menu/VegMainCourse/KadaiPaneer.jpg" },
  { id: 60, name: "mutter Paneer",               price: 180, cat: "Veg-Main Course", veg: true,  emoji: "🌿",image:"images/menu/VegMainCourse/PaneerButterMasala.jpg" },
  { id: 61, name: "Dal Tadka",                   price: 120, cat: "Veg-Main Course", veg: true,  emoji: "🍲",image:"images/menu/VegMainCourse/DalTadka.jpg" },
  { id: 62, name: "Dal Makhani",                 price: 150, cat: "Veg-Main Course", veg: true,  emoji: "🍲",image:"images/menu/VegMainCourse/DalMakhani.jpg" },
  { id: 63, name: "Rajma Dal Masala",            price: 120, cat: "Veg-Main Course", veg: true,  emoji: "🫘",image:"images/menu/VegMainCourse/RajmaDalMasala.jpg" },

  // ── Non-Veg Main Course ─────────────────────────────────
  { id: 64, name: "Onion Egg Fry",               price: 100, cat: "Non-Veg Main Course", veg: false, emoji: "🍳" ,image:"images/menu/NonVegMainCourse/OnionEggFry.jpg"},
  { id: 65, name: "Egg Masala",                  price: 120, cat: "Non-Veg Main Course", veg: false, emoji: "🥚" ,image:"images/menu/NonVegMainCourse/EggMasala.jpg"},
  { id: 66, name: "Chicken Masala (Bone)",       price: 150, cat: "Non-Veg Main Course", veg: false, emoji: "🍗" ,image:"images/menu/NonVegMainCourse/ChickenMasalaBone.jpg"},
  { id: 67, name: "Chicken Masala (Boneless)",   price: 160, cat: "Non-Veg Main Course", veg: false, emoji: "🍗" ,image:"images/menu/NonVegMainCourse/ChickenMasalaBoneless.jpg"},
  { id: 68, name: "Chicken Chettinad",           price: 170, cat: "Non-Veg Main Course", veg: false, emoji: "🌶️" ,image:"images/menu/NonVegMainCourse/ChickenChettinad.jpg"},
  { id: 69, name: "Butter Chicken",              price: 180, cat: "Non-Veg Main Course", veg: false, emoji: "🧈" ,image:"images/menu/NonVegMainCourse/ButterChicken.jpg"},
  { id: 70, name: "Kadai Chicken",               price: 170, cat: "Non-Veg Main Course", veg: false, emoji: "🍗" ,image:"images/menu/NonVegMainCourse/KadaiChicken.jpg"},
  { id: 71, name: "Mughlai Chicken",             price: 200, cat: "Non-Veg Main Course", veg: false, emoji: "👑" ,image:"images/menu/NonVegMainCourse/MughlaiChicken.jpg"},
  { id: 72, name: "Chicken Keema butter",        price: 180, cat: "Non-Veg Main Course", veg: false, emoji: "🍖" ,image:"images/menu/NonVegMainCourse/ChickenKeemaMutter.jpg"},
  { id: 73, name: "Prawn Masala",                price: 200, cat: "Non-Veg Main Course", veg: false, emoji: "🦐" ,image:"images/menu/NonVegMainCourse/PrawnMasala.jpg"},
  { id: 74, name: "Mutton Masala",               price: 240, cat: "Non-Veg Main Course", veg: false, emoji: "🥩" ,image:"images/menu/NonVegMainCourse/MuttonMasala.jpg"},
  { id: 75, name: "Mutton Rogan Josh",           price: 250, cat: "Non-Veg Main Course", veg: false, emoji: "🍖" ,image:"images/menu/NonVegMainCourse/MuttonRoganJosh.jpg"},
  { id: 76, name: "Mutton Keema Mutter",         price: 280, cat: "Non-Veg Main Course", veg: false, emoji: "🥩" ,image:"images/menu/NonVegMainCourse/MuttonKeemaMutter.jpg"},
  { id: 77, name: "Fish Masala",                 price: 220, cat: "Non-Veg Main Course", veg: false, emoji: "🐟" ,image:"images/menu/NonVegMainCourse/FishMasala.jpg"},

  // ── Biryani ─────────────────────────────────────────────
  { id: 78, name: "Veg Biryani",                 price: 150, cat: "Biryani", veg: true,  emoji: "🍛" ,image:"images/menu/Biryani/VegBiryani.jpg"},
  { id: 79, name: "Egg Biryani",                 price: 160, cat: "Biryani", veg: false, emoji: "🥚" ,image:"images/menu/Biryani/EggBiryani.jpg"},
  { id: 80, name: "Hyderabad Chicken Dum Biryani", price: 180, cat: "Biryani", veg: false, emoji: "🏆",image:"images/menu/Biryani/HyderabadChickenDumBiryani.jpg" },
  { id: 81, name: "Chicken 65 Biryani",          price: 220, cat: "Biryani", veg: false, emoji: "🌶️" ,image:"images/menu/Biryani/Chicken65Biryani.jpg" },
  { id: 82, name: "Chicken Fry Piece Biryani",   price: 200, cat: "Biryani", veg: false, emoji: "🍗" ,image:"images/menu/Biryani/ChickenFryPieceBiryani.jpg"},
  { id: 83, name: "Mughlai Chicken Biryani",     price: 220, cat: "Biryani", veg: false, emoji: "👑" ,image:"images/menu/Biryani/MughlaiChickenBiryani.jpeg"},
  { id: 84, name: "Mutton Biryani",              price: 250, cat: "Biryani", veg: false, emoji: "🥩" ,image:"images/menu/Biryani/MuttonBiryani.jpg"},
  { id: 85, name: "Prawn Biryani",               price: 230, cat: "Biryani", veg: false, emoji: "🦐" ,image:"images/menu/Biryani/PrawnBiryani.jpg"},


    // ── Rice & Chinese ──────────────────────────────────────
  { id: 86, name: "Veg Fried Rice", price: 120, cat: "Rice & Chinese", veg: true, emoji: "🍚" ,image:"images/menu/Rice&Chinese/VegFriedRice.jpg"},
  { id: 87, name: "Veg Schezwan Fried Rice", price: 140, cat: "Rice & Chinese", veg: true, emoji: "🍚" ,image:"images/menu/Rice&Chinese/VegSchezwanFriedRice.jpg"},
  { id: 88, name: "Egg Fried Rice", price: 150, cat: "Rice & Chinese", veg: false, emoji: "🥚" ,image:"images/menu/Rice&Chinese/EggFriedRice.jpg"},
  { id: 89, name: "Egg Schezwan Fried Rice", price: 160, cat: "Rice & Chinese", veg: false, emoji: "🥚" ,image:"images/menu/Rice&Chinese/EggSchezwanFriedRice.jpg"},
  { id: 90, name: "Chicken Fried Rice", price: 160, cat: "Rice & Chinese", veg: false, emoji: "🍗" ,image:"images/menu/Rice&Chinese/ChickenFriedRice.jpg"},
  { id: 91, name: "Chicken Schezwan Fried Rice", price: 170, cat: "Rice & Chinese", veg: false, emoji: "🍗" ,image:"images/menu/Rice&Chinese/ChickenSchezwanFriedRice.jpg"},
  { id: 92, name: "Special Chicken Fried Rice", price: 180, cat: "Rice & Chinese", veg: false, emoji: "🍗" ,image:"images/menu/Rice&Chinese/SpecialChickenFriedRice.jpeg"},
  { id: 93, name: "Mutton Fried Rice", price: 200, cat: "Rice & Chinese", veg: false, emoji: "🥩" ,image:"images/menu/Rice&Chinese/MuttonFriedRice.jpg"},
  { id: 94, name: "Mutton Schezwan Fried Rice", price: 220, cat: "Rice & Chinese", veg: false, emoji: "🥩" ,image:"images/menu/Rice&Chinese/MuttonSchezwanFriedRice.jpg"},
  { id: 95, name: "Mixed Fried Rice", price: 250, cat: "Rice & Chinese", veg: false, emoji: "🍛" ,image:"images/menu/Rice&Chinese/MixedFriedRice.jpeg"},
  { id: 96, name: "Jeera Rice", price: 120, cat: "Rice & Chinese", veg: true, emoji: "🍚" ,image:"images/menu/Rice&Chinese/JeeraRice.jpg"},
  { id: 97, name: "Cashewnut Rice", price: 140, cat: "Rice & Chinese", veg: true, emoji: "🍚" ,image:"images/menu/Rice&Chinese/CashewnutRice.jpg"},
  { id: 98, name: "Curd Rice", price: 100, cat: "Rice & Chinese", veg: true, emoji: "🥛" ,image:"images/menu/Rice&Chinese/CurdRice.jpg"},
  { id: 99, name: "Plain Rice (Thai/Basmati)", price: 60, cat: "Rice & Chinese", veg: true, emoji: "🍚" ,image:"images/menu/Rice&Chinese/PlainRice.jpg"},

  // ── Indian Bread ───────────────────────────────────────
  { id: 100, name: "Pulka", price: 20, cat: "Indian Bread", veg: true, emoji: "🫓" ,image:"images/menu/IndianBread/Pulka.jpeg"},
  { id: 101, name: "Chapathi", price: 25, cat: "Indian Bread", veg: true, emoji: "🫓" ,image:"images/menu/IndianBread/Chapathi.jpg"},
  { id: 102, name: "Lacha Parata", price: 35, cat: "Indian Bread", veg: true, emoji: "🫓" ,image:"images/menu/IndianBread/LachaParata.jpg"},
  { id: 103, name: "Malabar Parata", price: 50, cat: "Indian Bread", veg: true, emoji: "🫓" ,image:"images/menu/IndianBread/MalabarParata.jpg"},
  { id: 104, name: "Paneer Parata", price: 80, cat: "Indian Bread", veg: true, emoji: "🧀" ,image:"images/menu/IndianBread/PaneerParata.jpg"},
  { id: 105, name: "Aloo Parata with Curd", price: 80, cat: "Indian Bread", veg: true, emoji: "🥔" ,image:"images/menu/IndianBread/AlooParatawithCurd.jpg"},
  { id: 106, name: "Gobi Parata with Curd", price: 80, cat: "Indian Bread", veg: true, emoji: "🥦" ,image:"images/menu/IndianBread/GobiParatawithCurd.jpg"},
  { id: 107, name: "Onion Parata with Curd", price: 80, cat: "Indian Bread", veg: true, emoji: "🧅" ,image:"images/menu/IndianBread/OnionParatawithCurd.jpeg"},
  { id: 108, name: "Cheese Parata", price: 100, cat: "Indian Bread", veg: true, emoji: "🧀" ,image:"images/menu/IndianBread/CheeseParata.jpg"},
  { id: 109, name: "Egg Parata", price: 100, cat: "Indian Bread", veg: false, emoji: "🥚" ,image:"images/menu/IndianBread/EggParata.jpg"},
  { id: 110, name: "Chicken Keema Parata", price: 130, cat: "Indian Bread", veg: false, emoji: "🍗" ,image:"images/menu/IndianBread/ChickenKeemaParata.jpg"},

  // ── Thali & Buffet ─────────────────────────────────────
  { id: 111, name: "Veg Thali", price: 130, cat: "Thali", veg: true, emoji: "🍱" ,image:"images/menu/Thali&Buffet/VegThali.jpg"},
  { id: 112, name: "Special Veg Thali", price: 150, cat: "Thali", veg: true, emoji: "🍱" ,image:"images/menu/Thali&Buffet/SpecialVegThali.jpg"},
  { id: 113, name: "Non Veg Thali", price: 150, cat: "Thali", veg: false, emoji: "🍽️" ,image:"images/menu/Thali&Buffet/NonVegThali.jpg"},
  { id: 114, name: "Special Non Veg Thali", price: 170, cat: "Thali", veg: false, emoji: "🍽️" ,image:"images/menu/Thali&Buffet/SpecialNonVegThali.jpg"},
  { id: 115, name: "Unlimited Buffet", price: 180, cat: "Thali", veg: false, emoji: "🥘" ,image:"images/menu/Thali&Buffet/UnlimitedBuffet.jpg"},

  // ── Evening Snacks ─────────────────────────────────────
  { id: 116, name: "Samosa (2 pcs)", price: 50, cat: "Snacks", veg: true, emoji: "🥟",image:"images/menu/Snacks/Samosa.jpg" },
  { id: 117, name: "Bread Omlet", price: 70, cat: "Snacks", veg: false, emoji: "🍳" ,image:"images/menu/Snacks/BreadOmlet.jpg"},
  { id: 118, name: "Aloo Bajji / Aloo Bonda (2 pcs)", price: 60, cat: "Snacks", veg: true, emoji: "🥔" ,image:"images/menu/Snacks/AlooBajji.jpg"},
  { id: 119, name: "Bread Bajji", price: 60, cat: "Snacks", veg: true, emoji: "🍞" ,image:"images/menu/Snacks/BreadBajji.jpeg"},

  // ── Desserts ───────────────────────────────────────────
  { id: 120, name: "Gulab Jamun (1 pc)", price: 30, cat: "Desserts", veg: true, emoji: "🍨",image:"images/menu/Desserts/GulabJamun.jpg" },
  { id: 121, name: "Vermicelli Kheer (Payasam)", price: 50, cat: "Desserts", veg: true, emoji: "🥣" ,image:"images/menu/Desserts/VermicelliKheer .jpg"},
  { id: 122, name: "Sooji Halwa with Ghee", price: 50, cat: "Desserts", veg: true, emoji: "🍮" ,image:"images/menu/Desserts/SoojiHalwawithGhee.jpg"},
  { id: 123, name: "Ice Cream", price: 50, cat: "Desserts", veg: true, emoji: "🍦" ,image:"images/menu/Desserts/IceCream.jpg"},
  { id: 124, name: "Sweet Lassi", price: 50, cat: "Desserts", veg: true, emoji: "🥤" ,image:"images/menu/Desserts/SweetLassi.jpg"},
  { id: 125, name: "Plain Curd", price: 30, cat: "Desserts", veg: true, emoji: "🥛" ,image:"images/menu/Desserts/PlainCurd.jpg"},
  { id: 126, name: "Butter Milk Salted", price: 40, cat: "Desserts", veg: true, emoji: "🥛" ,image:"images/menu/Desserts/ButterMilkSalted.jpg"}
];

// ── Featured dishes shown on homepage (use IDs from MENU_DATA) ──
const FEATURED = [
  { id: 80, name: "Hyderabad Chicken Dum Biryani", price: 180, cat: "Biryani",      veg: false, emoji: "🏆" ,image: "images/menu/Biryani/HyderabadChickenDumBiryani.jpg"},
  { id: 69, name: "Butter Chicken",                price: 180, cat: "Main Course",  veg: false, emoji: "🧈",image: "images/menu/NonVegMainCourse/ButterChicken.jpg " },
  { id: 36, name: "Chicken 65",                    price: 170, cat: "Starters",     veg: false, emoji: "🍗",image: "images/menu/Non-VegStarters/Chicken65.jpg" },
  { id: 56, name: "Paneer Butter Masala",          price: 180, cat: "Main Course",  veg: true,  emoji: "🧀",image: "images/menu/VegMainCourse/PaneerButterMasala.jpg" },
  { id: 84, name: "Mutton Biryani",                price: 250, cat: "Biryani",      veg: false, emoji: "🥩",image: "images/menu/Biryani/MuttonBiryani.jpg" },
  { id: 85, name: "Prawn Biryani",                 price: 230, cat: "Biryani",      veg: false, emoji: "🦐",image: "images/menu/Biryani/PrawnBiryani.jpg" },
];

// ── Customer reviews ─────────────────────────────────────────────
const REVIEWS = [
  { text: "The Hyderabadi Dum Biryani transported me straight back to Charminar. Every grain of rice was perfectly cooked, fragrant with saffron. Absolute perfection!", name: "Priya Sharma",  loc: "Bangkok, Thailand",   stars: 5, init: "P" },
  { text: "Finally found authentic South Indian breakfast in Thailand! The Masala Dosa was crispy and delicious, and the sambar was spot-on. Feels just like home.",       name: "Rajesh Kumar",  loc: "Chiang Mai, Thailand", stars: 5, init: "R" },
  { text: "Butter Chicken here is legendary. Rich, creamy, perfectly spiced — better than most places I've tried in India. Daaru House is a gem!",                         name: "Anita Reddy",   loc: "Pattaya, Thailand",    stars: 5, init: "A" },
  { text: "We celebrated my husband's birthday here. The Mutton Rogan Josh was outstanding. The ambience is warm and welcoming. We'll be back every week!",                name: "Meena Patel",   loc: "Phuket, Thailand",     stars: 5, init: "M" },
  { text: "Chicken 65 was absolutely brilliant — crispy outside, juicy inside, perfectly spiced. The whole family loved it. Highly recommend this place!",                 name: "Suresh Nair",   loc: "Bangkok, Thailand",    stars: 5, init: "S" },
  { text: "Authentic flavors that remind me of my grandmother's cooking. The Dal Makhani is rich and creamy, and the Indian bread is perfectly soft. Five stars!",         name: "Kavitha Rao",   loc: "Hua Hin, Thailand",    stars: 5, init: "K" },
];

// ── Filter categories shown on the menu page ─────────────────────
const FILTERS = ["All Items", "Breakfast", "Veg-Starters", "Non-Veg-Starters", "Veg-Main Course", "Non-Veg Main Course", "Biryani","Rice & Chinese","Indian Bread", "Thali", "Snacks", "Desserts"];
