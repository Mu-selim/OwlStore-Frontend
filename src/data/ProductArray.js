import { Product } from "./Product";

const description = "It debuted in basketball and was transformed by subcultures around the globe. The adidas Campus trainer has made an impact everywhere, from stages to skate parks to city streets. Now, in collaboration with Footpatrol."
const clothesSize = ['xs', 's','m','l','xl'];
const trouserMen = [34, 36, 38, 40, 42, 44, 46, 48];
const trouserWomen = [26, 28, 30, 32, 34, 36, 38, 40, 42, 44];
const showSize = [41, 42, 43, 44, 45];
export const ProductArray =[
    
    new Product("CAMPUS FOOTPATROL SHOES", 50, [
    "/images/products/1.avif",
    "/images/products/2.avif",
    "/images/products/3.avif"]
    , description, "Shoes", showSize, ["gray", "black", "orange"], 4,"Adidas" ),

    new Product("‘ONE PIECE’ CHARACTERS T-SHIRT", 20, [
    "/images/products/‘ONE PIECE’ CHARACTERS T-SHIRT1.jpg",
    "/images/products/‘ONE PIECE’ CHARACTERS T-SHIRT2.jpg",
    "/images/products/‘ONE PIECE’ CHARACTERS T-SHIRT3.jpg"]
    , description, "T-shirt", clothesSize, ["White", "black", "orange"], 5,"Pull&Bear" ),

    new Product("AJAX AMSTERDAM OG TRACK JACKET", 70, [
    "/images/products/AJAX AMSTERDAM OG TRACK JACKET1.avif",
    "/images/products/AJAX AMSTERDAM OG TRACK JACKET2.avif",
    "/images/products/AJAX AMSTERDAM OG TRACK JACKET3.avif"]
    , description, "Jacket", clothesSize, ["gray", "black"], 3,"Adidas" ),

    new Product("BASIC LOOSE FIT DENIM BERMUDA SHORTS", 15, [
    "/images/products/BASIC LOOSE FIT DENIM BERMUDA SHORTS1.jpg",
    "/images/products/BASIC LOOSE FIT DENIM BERMUDA SHORTS2.jpg",
    "/images/products/BASIC LOOSE FIT DENIM BERMUDA SHORTS3.jpg"]
    , description, "Trouser", trouserMen, ["blue", "black"], 4,"Bershka" ),

    new Product("BASIC SHORT SLEEVE LINEN BLEND SHIRT", 25, [
    "/images/products/BASIC SHORT SLEEVE LINEN BLEND SHIRT1.jpg",
    "/images/products/BASIC SHORT SLEEVE LINEN BLEND SHIRT2.jpg",
    "/images/products/BASIC SHORT SLEEVE LINEN BLEND SHIRT3.jpg"]
    , description, "Shirt", clothesSize, ["white"], 5,"Pull&Bear" ),

    new Product("BASIC STANDARD FIT JEANS", 30, [
    "/images/products/BASIC STANDARD FIT JEANS1.jpg",
    "/images/products/BASIC STANDARD FIT JEANS2.jpg",
    "/images/products/BASIC STANDARD FIT JEANS3.jpg"]
    , description, "Trousers", trouserMen, ["blue", "black", "white"], 2,"Bershka" ),

    new Product("CARGO BERMUDA SHORTS", 35, [
    "/images/products/CARGO BERMUDA SHORTS1.jpg",
    "/images/products/CARGO BERMUDA SHORTS2.jpg",
    "/images/products/CARGO BERMUDA SHORTS3.jpg"]
    , description, "Trouser", trouserMen, ["green", "black", "blue"], 4,"Zara" ),

    new Product("CITY ESCAPE AEROREADY WARMING TRACK TOP", 60, [
    "/images/products/CITY ESCAPE AEROREADY WARMING TRACK TOP1.avif",
    "/images/products/CITY ESCAPE AEROREADY WARMING TRACK TOP2.avif",
    "/images/products/CITY ESCAPE AEROREADY WARMING TRACK TOP3.avif"]
    , description, "Jacket", clothesSize, ["black"], 4,"Adidas" ),

    new Product("DAME 9 TEE", 10, [
    "/images/products/DAME 9 TEE1.avif",
    "/images/products/DAME 9 TEE2.avif",
    "/images/products/DAME 9 TEE3.avif"]
    , description, "T-shirt", clothesSize, ["pink", "black", "yellow"], 4,"Adidas" ),

    new Product("DISNEY PRINCESS T-SHIRT1.jpg", 20, [
    "/images/products/DISNEY PRINCESS T-SHIRT1.jpg",
    "/images/products/DISNEY PRINCESS T-SHIRT2.jpg",
    "/images/products/DISNEY PRINCESS T-SHIRT3.jpg"]
    , description, "T-shirt", clothesSize, ["pink", "black", "orange"], 3,"Bershka" ),

    new Product("NARUTO PRINT T-SHIRT", 20, [
    "/images/products/NARUTO PRINT T-SHIRT1.jpg",
    "/images/products/NARUTO PRINT T-SHIRT2.jpg",
    "/images/products/NARUTO PRINT T-SHIRT3.jpg"]
    , description, "T-shirt", clothesSize, ["purple", "black", "white"], 4,"Pull&Bear" ),

    new Product("OVERSIZE HOODIE Gray", 30, [
    "/images/products/OVERSIZE HOODIE gray1.jpg",
    "/images/products/OVERSIZE HOODIE gray2.jpg",
    "/images/products/OVERSIZE HOODIE gray3.jpg"]
    , description, "T-shirt", clothesSize, ["gray"], 4,"Zara" ),

    new Product("OVERSIZE HOODIE", 30, [
    "/images/products/OVERSIZE HOODIE1.jpg",
    "/images/products/OVERSIZE HOODIE2.jpg",
    "/images/products/OVERSIZE HOODIE3.jpg"]
    , description, "Shoes", showSize, ["black", "white"], 5,"Zara" ),

    new Product("PUSH UP MID-RISE JEANS", 40, [
    "/images/products/PUSH UP MID-RISE JEANS1.jpg",
    "/images/products/PUSH UP MID-RISE JEANS2.jpg",
    "/images/products/PUSH UP MID-RISE JEANS3.jpg"]
    , description, "Trouser", trouserWomen, ["blue", "black", "white"], 4,"Pull&Bear" ),

    new Product("SASUKE UCHIHA T-SHIRT", 20, [
    "/images/products/SASUKE UCHIHA T-SHIRT1.jpg",
    "/images/products/SASUKE UCHIHA T-SHIRT2.jpg",
    "/images/products/SASUKE UCHIHA T-SHIRT3.jpg"]
    , description, "Shirt", clothesSize, ["green", "black", "white"], 5,"Defacto" ),

    new Product("SOFT-KNIT CARGO JOGGING TROUSERS", 70, [
    "/images/products/SOFT-KNIT CARGO JOGGING TROUSERS1.jpg",
    "/images/products/SOFT-KNIT CARGO JOGGING TROUSERS2.jpg",
    "/images/products/SOFT-KNIT CARGO JOGGING TROUSERS3.jpg"]
    , description, "Trouser", trouserMen, ["black", "blue"], 5,"Zara" ),

    new Product("STAND-UP COLLAR SHIRT", 30, [
    "/images/products/STAND-UP COLLAR SHIRT1.jpg",
    "/images/products/STAND-UP COLLAR SHIRT2.jpg",
    "/images/products/STAND-UP COLLAR SHIRT3.jpg"]
    , description, "Shirt", clothesSize, ["gray", "green", "black"], 4,"Bershka" ),

    new Product("STAND-UP COLLAR SHIRT", 60, [
    "/images/products/STAND-UP COLLAR SHIRT1.jpg",
    "/images/products/STAND-UP COLLAR SHIRT2.jpg",
    "/images/products/STAND-UP COLLAR SHIRT3.jpg"]
    , description, "Trouser", trouserWomen, ["green", "black","yellow"], 3,"Defacto" ),

    new Product("RUBBERISED HIGH-TOP TRAINERS", 100, [
    "/images/products/zaraBoot1.jpg",
    "/images/products/zaraBoot2.jpg",
    "/images/products/zaraBoot3.jpg"]
    , description, "Shoes", showSize, ["white"], 4,"Zara" ),

    new Product("POLO SHIRT WITH MERCERISED FINISH", 30, [
    "/images/products/zaraPolo1.jpg",
    "/images/products/zaraPolo2.jpg",
    "/images/products/zaraPolo3.jpg"]
    , description, "T-shirt", clothesSize, ["black", "green", "yellow"], 4,"Zara" ),

    new Product("POPLIN SHIRT", 40, [
    "/images/products/zaraShirt1.jpg",
    "/images/products/zaraShirt2.jpg",
    "/images/products/zaraShirt3.jpg"]
    , description, "Shirt", clothesSize, ["white", "green", "gray"], 5,"Zara" ),

    new Product("Boxy fit short sleeve print rhinestone T-shirt", 25, [
    "/images/products/Boxy fit short sleeve print rhinestone T-shirt1.webp",
    "/images/products/Boxy fit short sleeve print rhinestone T-shirt2.webp",
    "/images/products/Boxy fit short sleeve print rhinestone T-shirt3.webp"]
    , description, "T-shirt", clothesSize, ["Yellow", "green", "gray"], 4,"Bershka" ),

    new Product("Carrot fit jeans", 50, [
    "/images/products/Carrot fit jeans1.webp",
    "/images/products/Carrot fit jeans2.webp",
    "/images/products/Carrot fit jeans3.webp"]
    , description, "Trouser", trouserMen, ["blue", "light-blue", "black"], 3,"Pull&Bear" ),

    new Product("Flared jeans", 30, [
    "/images/products/Flared jeans1.webp",
    "/images/products/Flared jeans2.webp",
    "/images/products/Flared jeans3.webp"]
    , description, "Trouser", trouserWomen, ["white", "green", "gray"], 4,"Pull&Bear" ),

    new Product("Jogger jeans", 30, [
    "/images/products/Jogger jeans1.webp",
    "/images/products/Jogger jeans2.webp",
    "/images/products/Jogger jeans3.webp"]
    , description, "Trouser", trouserWomen, ["black", "green", "gray"], 2,"Defacto" ),

    new Product("Lightweight puffer jacket", 70, [
    "/images/products/Lightweight puffer jacket1.webp",
    "/images/products/Lightweight puffer jacket2.webp",
    "/images/products/Lightweight puffer jacket3.webp"]
    , description, "Jacket", clothesSize, ["white", "green", "gray"], 5,"Jack&Jones" ),

    new Product("Men's contrast mesh trainers", 90, [
    "/images/products/Men's contrast mesh trainers1.webp",
    "/images/products/Men's contrast mesh trainers2.webp",
    "/images/products/Men's contrast mesh trainers3.webp"]
    , description, "Shoes", showSize, ["gray"], 5,"Zara" ),

    new Product("Ripped wide-leg 90s jeans", 40, [
    "/images/products/Ripped wide-leg 90s jeans1.webp",
    "/images/products/Ripped wide-leg 90s jeans2.webp",
    "/images/products/Ripped wide-leg 90s jeans3.webp"]
    , description, "Trouser", trouserWomen, ["blue", "light-blue", "black"], 4,"Defacto" ),

    new Product("Vintage jeans", 30, [
    "/images/products/Vintage jeans1.webp",
    "/images/products/Vintage jeans2.webp",
    "/images/products/Vintage jeans3.webp"]
    , description, "Trouser", trouserMen, ["light-blue", "blue", "navy"], 5,"Zara" ),


];