"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detectLanguage = detectLanguage;
var UNKNOWN = {
    name: "Unknown language detected",
    country: "Unknown",
};
var NUMBER = {
    name: "number",
    country: "Unknown",
};
var BOOLEAN = {
    name: "boolean",
    country: "Unknown",
};
function detectLanguage(input) {
    // Check if input is empty or not a string
    if (input === null || input === undefined)
        return UNKNOWN;
    if (Array.isArray(input))
        return UNKNOWN;
    if (typeof input === "object" && Object.keys(input).length === 0)
        return "Unknown language detected"; // Handle empty objects as Unknown language detected
    if (typeof input === "number")
        return NUMBER; // Handle numbers as number type
    if (typeof input === "boolean")
        return BOOLEAN; // Handle booleans as boolean type
    if (typeof input === "bigint")
        return NUMBER; // Handle bigints as bigint type
    if (!input || typeof input !== "string")
        return UNKNOWN;
    input = input.trim();
    if (/^\d+$/.test(input))
        return NUMBER;
    // Unicode range-based detection
    var unicodeMap = [
        {
            name: "english",
            regex: /^[A-Za-z\s.,!?'"-]+$/,
            country: "United Kingdom, United States, Canada, Australia, etc.",
        },
        { name: "hindi", regex: /[\u0900-\u097F]/, country: "India" },
        { name: "bengali", regex: /[\u0980-\u09FF]/, country: "Bangladesh, India" },
        { name: "punjabi", regex: /[\u0A00-\u0A7F]/, country: "India, Pakistan" },
        { name: "gujarati", regex: /[\u0A80-\u0AFF]/, country: "India" },
        {
            name: "tamil",
            regex: /[\u0B80-\u0BFF]/,
            country: "India, Sri Lanka, Singapore",
        },
        { name: "telugu", regex: /[\u0C00-\u0C7F]/, country: "India" },
        { name: "kannada", regex: /[\u0C80-\u0CFF]/, country: "India" },
        { name: "malayalam", regex: /[\u0D00-\u0D7F]/, country: "India" },
        {
            name: "arabic",
            regex: /[\u0600-\u06FF]/,
            country: "Saudi Arabia, Egypt, Iraq, Syria, etc.",
        },
        { name: "russian", regex: /[\u0400-\u04FF]/, country: "Russia" },
        { name: "chinese", regex: /[\u4E00-\u9FFF]/, country: "China" },
        { name: "japanese", regex: /[\u3040-\u30FF]/, country: "Japan" },
        {
            name: "korean",
            regex: /[\uAC00-\uD7AF]/,
            country: "South Korea, North Korea",
        },
        { name: "thai", regex: /[\u0E00-\u0E7F]/, country: "Thailand" },
        { name: "hebrew", regex: /[\u0590-\u05FF]/, country: "Israel" },
        { name: "greek", regex: /[\u0370-\u03FF]/, country: "Greece, Cyprus" },
        {
            name: "spanish",
            regex: /[ñáéíóúüÑÁÉÍÓÚÜ]/,
            country: "Spain, Mexico, Argentina, Colombia, etc.",
        },
        {
            name: "french",
            regex: /[àâçéèêëîïôûùüÿœ]/i,
            country: "France, Belgium, Switzerland, Canada, etc.",
        },
        {
            name: "german",
            regex: /[äöüßÄÖÜ]/,
            country: "Germany, Austria, Switzerland",
        },
        {
            name: "urdu",
            regex: /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/,
            country: "Pakistan, India",
        },
        { name: "sinhala", regex: /[\u0D80-\u0DFF]/, country: "Sri Lanka" },
        { name: "burmese", regex: /[\u1000-\u109F]/, country: "Myanmar" },
        { name: "khmer", regex: /[\u1780-\u17FF]/, country: "Cambodia" },
        { name: "lao", regex: /[\u0E80-\u0EFF]/, country: "Laos" },
        { name: "tibetan", regex: /[\u0F00-\u0FFF]/, country: "China (Tibet)" },
        { name: "georgian", regex: /[\u10A0-\u10FF]/, country: "Georgia" },
        { name: "armenian", regex: /[\u0530-\u058F]/, country: "Armenia" },
        { name: "mongolian", regex: /[\u1800-\u18AF]/, country: "Mongolia" },
        { name: "thai", regex: /[\u0E00-\u0E7F]/, country: "Thailand" },
        { name: "vietnamese", regex: /[ăâđêôơưĂÂĐÊÔƠƯ]/i, country: "Vietnam" },
        { name: "polish", regex: /[ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/, country: "Poland" },
        { name: "czech", regex: /[čďěňřšťžůČĎĚŇŘŠŤŽŮ]/, country: "Czech Republic" },
        {
            name: "slovak",
            regex: /[áäčďéíĺľňóôŕšťúýžÁÄČĎÉÍĹĽŇÓÔŔŠŤÚÝŽ]/,
            country: "Slovakia",
        },
        { name: "hungarian", regex: /[áéíóöőúüűÁÉÍÓÖŐÚÜŰ]/, country: "Hungary" },
        { name: "romanian", regex: /[ăâîșțĂÂÎȘȚ]/, country: "Romania, Moldova" },
        { name: "turkish", regex: /[çğıİöşüÇĞIİÖŞÜ]/, country: "Turkey" },
        {
            name: "portuguese",
            regex: /[ãõáâàçéêíóôúüÃÕÁÂÀÇÉÊÍÓÔÚÜ]/,
            country: "Portugal, Brazil",
        },
        {
            name: "italian",
            regex: /[àèéìíîòóùúÀÈÉÌÍÎÒÓÙÚ]/,
            country: "Italy, Switzerland",
        },
        { name: "swedish", regex: /[åäöÅÄÖ]/, country: "Sweden, Finland" },
        { name: "norwegian", regex: /[æøåÆØÅ]/, country: "Norway" },
        { name: "danish", regex: /[æøåÆØÅ]/, country: "Denmark" },
        { name: "finnish", regex: /[äöÄÖ]/, country: "Finland" },
        { name: "icelandic", regex: /[ðÐþÞæÆöÖ]/, country: "Iceland" },
        { name: "esperanto", regex: /[ĉĝĥĵŝŭĈĜĤĴŜŬ]/, country: "International" },
        { name: "syriac", regex: /[\u0700-\u074F]/, country: "Syria, Iraq" },
        { name: "thaana", regex: /[\u0780-\u07BF]/, country: "Maldives" },
        {
            name: "nko",
            regex: /[\u07C0-\u07FF]/,
            country: "West Africa (Guinea, Mali, etc.)",
        },
        {
            name: "samaritan",
            regex: /[\u0800-\u083F]/,
            country: "Israel (Samaritan community)",
        },
        { name: "mandaic", regex: /[\u0840-\u085F]/, country: "Iraq, Iran" },
        {
            name: "devanagariExtended",
            regex: /[\uA8E0-\uA8FF]/,
            country: "India, Nepal",
        },
        {
            name: "bengaliExtended",
            regex: /[\u1C50-\u1C7F]/,
            country: "Bangladesh, India",
        },
        {
            name: "chakma",
            regex: /[\u11100-\u1114F]/,
            country: "Bangladesh, India",
        },
        { name: "meeteiMayek", regex: /[\uABC0-\uABFF]/, country: "India" },
        { name: "sundanese", regex: /[\u1B80-\u1BBF]/, country: "Indonesia" },
        { name: "batak", regex: /[\u1BC0-\u1BFF]/, country: "Indonesia" },
        {
            name: "lepcha",
            regex: /[\u1C00-\u1C4F]/,
            country: "India, Nepal, Bhutan",
        },
        { name: "olChiki", regex: /[\u1C50-\u1C7F]/, country: "India" },
        { name: "vai", regex: /[\uA500-\uA63F]/, country: "Liberia, Sierra Leone" },
        { name: "saurashtra", regex: /[\uA880-\uA8DF]/, country: "India" },
        { name: "kayahLi", regex: /[\uA900-\uA92F]/, country: "Myanmar, Thailand" },
        { name: "rejang", regex: /[\uA930-\uA95F]/, country: "Indonesia" },
        { name: "javanese", regex: /[\uA980-\uA9DF]/, country: "Indonesia" },
        { name: "myanmarExtended", regex: /[\uAA60-\uAA7F]/, country: "Myanmar" },
        {
            name: "taiTham",
            regex: /[\u1A20-\u1AAF]/,
            country: "Thailand, Laos, China",
        },
        { name: "buginese", regex: /[\u1A00-\u1A1F]/, country: "Indonesia" },
        { name: "balinese", regex: /[\u1B00-\u1B7F]/, country: "Indonesia" },
        { name: "sundanese", regex: /[\u1B80-\u1BBF]/, country: "Indonesia" },
        { name: "cham", regex: /[\uAA00-\uAA5F]/, country: "Vietnam, Cambodia" },
        { name: "taiViet", regex: /[\uAA80-\uAADF]/, country: "Vietnam" },
        {
            name: "newTaiLue",
            regex: /[\u1980-\u19DF]/,
            country: "China, Laos, Thailand",
        },
        { name: "khmerSymbols", regex: /[\u19E0-\u19FF]/, country: "Cambodia" },
        { name: "limbu", regex: /[\u1900-\u194F]/, country: "Nepal, India" },
        { name: "taiLe", regex: /[\u1950-\u197F]/, country: "China" },
        { name: "bassaVah", regex: /[\u16AD0-\u16AFF]/, country: "Liberia" },
        { name: "bamum", regex: /[\uA6A0-\uA6FF]/, country: "Cameroon" },
        {
            name: "ethiopic",
            regex: /[\u1200-\u137F]/,
            country: "Ethiopia, Eritrea",
        },
        {
            name: "ethiopicSupplement",
            regex: /[\u1380-\u139F]/,
            country: "Ethiopia, Eritrea",
        },
        {
            name: "cherokee",
            regex: /[\u13A0-\u13FF]/,
            country: "United States (Cherokee Nation)",
        },
        { name: "canadianAboriginal", regex: /[\u1400-\u167F]/, country: "Canada" },
        {
            name: "ogham",
            regex: /[\u1680-\u169F]/,
            country: "Ireland (historical)",
        },
        {
            name: "runic",
            regex: /[\u16A0-\u16FF]/,
            country: "Scandinavia (historical)",
        },
        { name: "tagalog", regex: /[\u1700-\u171F]/, country: "Philippines" },
        { name: "hanunoo", regex: /[\u1720-\u173F]/, country: "Philippines" },
        { name: "buhid", regex: /[\u1740-\u175F]/, country: "Philippines" },
        { name: "tagbanwa", regex: /[\u1760-\u177F]/, country: "Philippines" },
        {
            name: "sylotiNagri",
            regex: /[\uA800-\uA82F]/,
            country: "Bangladesh, India",
        },
        {
            name: "tifinagh",
            regex: /[\u2D30-\u2D7F]/,
            country: "Morocco, Algeria, Mali, Niger",
        },
        { name: "osmanya", regex: /[\u10480-\u104AF]/, country: "Somalia" },
        {
            name: "elbasan",
            regex: /[\u10500-\u1052F]/,
            country: "Albania (historical)",
        },
        { name: "coptic", regex: /[\u2C80-\u2CFF]/, country: "Egypt" },
        {
            name: "glagolitic",
            regex: /[\u2C00-\u2C5F]/,
            country: "Croatia, Bulgaria (historical)",
        },
        {
            name: "gothic",
            regex: /[\u10330-\u1034F]/,
            country: "Eastern Europe (historical)",
        },
        {
            name: "oldItalic",
            regex: /[\u10300-\u1032F]/,
            country: "Italy (historical)",
        },
        {
            name: "deseret",
            regex: /[\u10400-\u1044F]/,
            country: "United States (historical, Mormon)",
        },
        {
            name: "shavian",
            regex: /[\u10450-\u1047F]/,
            country: "United Kingdom (constructed)",
        },
        {
            name: "linearB",
            regex: /[\u10000-\u1007F]/,
            country: "Greece (historical)",
        },
        {
            name: "cypriotSyllabary",
            regex: /[\u10800-\u1083F]/,
            country: "Cyprus (historical)",
        },
        {
            name: "phoenician",
            regex: /[\u10900-\u1091F]/,
            country: "Lebanon, Syria (historical)",
        },
        {
            name: "lydian",
            regex: /[\u10920-\u1093F]/,
            country: "Turkey (historical)",
        },
        {
            name: "carian",
            regex: /[\u102A0-\u102DF]/,
            country: "Turkey (historical)",
        },
        {
            name: "lycian",
            regex: /[\u10280-\u1029F]/,
            country: "Turkey (historical)",
        },
        {
            name: "oldPersian",
            regex: /[\u103A0-\u103DF]/,
            country: "Iran (historical)",
        },
        {
            name: "ugaritic",
            regex: /[\u10380-\u1039F]/,
            country: "Syria (historical)",
        },
        {
            name: "oldSouthArabian",
            regex: /[\u10A60-\u10A7F]/,
            country: "Yemen (historical)",
        },
        {
            name: "imperialAramaic",
            regex: /[\u10840-\u1085F]/,
            country: "Middle East (historical)",
        },
        {
            name: "palmyrene",
            regex: /[\u10860-\u1087F]/,
            country: "Syria (historical)",
        },
        {
            name: "nabataean",
            regex: /[\u10880-\u108AF]/,
            country: "Jordan (historical)",
        },
        {
            name: "hatran",
            regex: /[\u108E0-\u108FF]/,
            country: "Iraq (historical)",
        },
        {
            name: "phagsPa",
            regex: /[\uA840-\uA87F]/,
            country: "China (historical)",
        },
        { name: "saurashtra", regex: /[\uA880-\uA8DF]/, country: "India" },
        {
            name: "kharoshthi",
            regex: /[\u10A00-\u10A5F]/,
            country: "Pakistan, Afghanistan (historical)",
        },
        { name: "kaithi", regex: /[\u11080-\u110CF]/, country: "India" },
        { name: "soraSompeng", regex: /[\u110D0-\u110FF]/, country: "India" },
        {
            name: "chakma",
            regex: /[\u11100-\u1114F]/,
            country: "Bangladesh, India",
        },
        {
            name: "mahajani",
            regex: /[\u11150-\u1117F]/,
            country: "India (historical)",
        },
        { name: "sharada", regex: /[\u11180-\u111DF]/, country: "India, Pakistan" },
        { name: "khojki", regex: /[\u11200-\u1124F]/, country: "Pakistan, India" },
        { name: "multani", regex: /[\u11280-\u112AF]/, country: "Pakistan" },
        { name: "khudawadi", regex: /[\u112B0-\u112FF]/, country: "Pakistan" },
        { name: "grantha", regex: /[\u11300-\u1137F]/, country: "India" },
        { name: "newa", regex: /[\u11400-\u1147F]/, country: "Nepal" },
        { name: "tirhuta", regex: /[\u11480-\u114DF]/, country: "India, Nepal" },
        {
            name: "siddham",
            regex: /[\u11580-\u115FF]/,
            country: "India, Nepal (historical)",
        },
        { name: "modi", regex: /[\u11600-\u1165F]/, country: "India (historical)" },
        { name: "takri", regex: /[\u11680-\u116CF]/, country: "India, Pakistan" },
        { name: "ahom", regex: /[\u11700-\u1173F]/, country: "India" },
        { name: "warangCiti", regex: /[\u118A0-\u118FF]/, country: "India" },
        {
            name: "zanabazarSquare",
            regex: /[\u11A00-\u11A4F]/,
            country: "Mongolia",
        },
        { name: "soyombo", regex: /[\u11A50-\u11AAF]/, country: "Mongolia" },
        { name: "pauCinHau", regex: /[\u11AC0-\u11AFF]/, country: "Myanmar" },
        { name: "bhaiksuki", regex: /[\u11C00-\u11C6F]/, country: "India, Nepal" },
        { name: "marchen", regex: /[\u11C70-\u11CBF]/, country: "China (Tibet)" },
        { name: "masaramGondi", regex: /[\u11D00-\u11D5F]/, country: "India" },
        { name: "gunjalaGondi", regex: /[\u11D60-\u11DAF]/, country: "India" },
        { name: "makasar", regex: /[\u11EE0-\u11EFF]/, country: "Indonesia" },
        {
            name: "kawi",
            regex: /[\u11F00-\u11F5F]/,
            country: "Indonesia (historical)",
        },
        {
            name: "lisu",
            regex: /[\uA4D0-\uA4FF]/,
            country: "China, Myanmar, Thailand, India",
        },
        { name: "vai", regex: /[\uA500-\uA63F]/, country: "Liberia, Sierra Leone" },
        { name: "bassaVah", regex: /[\u16AD0-\u16AFF]/, country: "Liberia" },
        {
            name: "duployan",
            regex: /[\u1BC00-\u1BC9F]/,
            country: "France, Canada, United States (historical)",
        },
        { name: "mro", regex: /[\u16A40-\u16A6F]/, country: "Bangladesh" },
        { name: "buginese", regex: /[\u1A00-\u1A1F]/, country: "Indonesia" },
        {
            name: "taiTham",
            regex: /[\u1A20-\u1AAF]/,
            country: "Thailand, Laos, China",
        },
        { name: "batak", regex: /[\u1BC0-\u1BFF]/, country: "Indonesia" },
        {
            name: "brahmi",
            regex: /[\u11000-\u1107F]/,
            country: "India (historical)",
        },
        { name: "soraSompeng", regex: /[\u110D0-\u110FF]/, country: "India" },
        {
            name: "chakma",
            regex: /[\u11100-\u1114F]/,
            country: "Bangladesh, India",
        },
        {
            name: "mahajani",
            regex: /[\u11150-\u1117F]/,
            country: "India (historical)",
        },
        { name: "sharada", regex: /[\u11180-\u111DF]/, country: "India, Pakistan" },
        { name: "khojki", regex: /[\u11200-\u1124F]/, country: "Pakistan, India" },
        { name: "multani", regex: /[\u11280-\u112AF]/, country: "Pakistan" },
        { name: "khudawadi", regex: /[\u112B0-\u112FF]/, country: "Pakistan" },
        { name: "grantha", regex: /[\u11300-\u1137F]/, country: "India" },
        { name: "newa", regex: /[\u11400-\u1147F]/, country: "Nepal" },
        { name: "tirhuta", regex: /[\u11480-\u114DF]/, country: "India, Nepal" },
        {
            name: "siddham",
            regex: /[\u11580-\u115FF]/,
            country: "India, Nepal (historical)",
        },
        { name: "modi", regex: /[\u11600-\u1165F]/, country: "India (historical)" },
        { name: "takri", regex: /[\u11680-\u116CF]/, country: "India, Pakistan" },
        { name: "ahom", regex: /[\u11700-\u1173F]/, country: "India" },
        { name: "warangCiti", regex: /[\u118A0-\u118FF]/, country: "India" },
        {
            name: "zanabazarSquare",
            regex: /[\u11A00-\u11A4F]/,
            country: "Mongolia",
        },
        { name: "soyombo", regex: /[\u11A50-\u11AAF]/, country: "Mongolia" },
        { name: "pauCinHau", regex: /[\u11AC0-\u11AFF]/, country: "Myanmar" },
        { name: "bassaVah", regex: /[\u16AD0-\u16AFF]/, country: "Liberia" },
        {
            name: "pahawhHmong",
            regex: /[\u16B00-\u16B8F]/,
            country: "Laos, Vietnam, China, Thailand",
        },
        { name: "medefaidrin", regex: /[\u16E40-\u16E9F]/, country: "Nigeria" },
        { name: "miao", regex: /[\u16F00-\u16F9F]/, country: "China" },
        {
            name: "tangut",
            regex: /[\u17000-\u187FF]/,
            country: "China (historical)",
        },
        {
            name: "tangutComponents",
            regex: /[\u18800-\u18AFF]/,
            country: "China (historical)",
        },
        { name: "kanaSupplement", regex: /[\u1B000-\u1B0FF]/, country: "Japan" },
        { name: "kanaExtendedA", regex: /[\u1B100-\u1B12F]/, country: "Japan" },
        { name: "nushu", regex: /[\u1B170-\u1B2FF]/, country: "China" },
        {
            name: "duployan",
            regex: /[\u1BC00-\u1BC9F]/,
            country: "France, Canada, United States (historical)",
        },
        {
            name: "signWriting",
            regex: /[\u1D800-\u1DAAF]/,
            country: "International",
        },
        {
            name: "adlam",
            regex: /[\u1E900-\u1E95F]/,
            country: "Guinea, Nigeria, Liberia, Sierra Leone",
        },
        {
            name: "osage",
            regex: /[\u104B0-\u104FF]/,
            country: "United States (Osage Nation)",
        },
        {
            name: "elbasan",
            regex: /[\u10500-\u1052F]/,
            country: "Albania (historical)",
        },
        {
            name: "caucasianAlbanian",
            regex: /[\u10530-\u1056F]/,
            country: "Azerbaijan (historical)",
        },
        {
            name: "linearA",
            regex: /[\u10600-\u1077F]/,
            country: "Greece (historical)",
        },
        {
            name: "latinExtendedAdditional",
            regex: /[\u1E00-\u1EFF]/,
            country: "Europe",
        },
        { name: "latinExtendedC", regex: /[\u2C60-\u2C7F]/, country: "Europe" },
        { name: "latinExtendedD", regex: /[\uA720-\uA7FF]/, country: "Europe" },
        { name: "latinExtendedE", regex: /[\uAB30-\uAB6F]/, country: "Europe" },
        {
            name: "cyrillicExtendedA",
            regex: /[\u2DE0-\u2DFF]/,
            country: "Russia, Eastern Europe",
        },
        {
            name: "cyrillicExtendedB",
            regex: /[\uA640-\uA69F]/,
            country: "Russia, Eastern Europe",
        },
        {
            name: "cyrillicExtendedC",
            regex: /[\u1C80-\u1C8F]/,
            country: "Russia, Eastern Europe",
        },
        {
            name: "arabicSupplement",
            regex: /[\u0750-\u077F]/,
            country: "Middle East, North Africa",
        },
        {
            name: "arabicExtendedA",
            regex: /[\u08A0-\u08FF]/,
            country: "Middle East, North Africa",
        },
        {
            name: "arabicExtendedB",
            regex: /[\u0870-\u089F]/,
            country: "Middle East, North Africa",
        },
        {
            name: "arabicPresentationFormsA",
            regex: /[\uFB50-\uFDFF]/,
            country: "Middle East, North Africa",
        },
        {
            name: "arabicPresentationFormsB",
            regex: /[\uFE70-\uFEFF]/,
            country: "Middle East, North Africa",
        },
        {
            name: "devanagariExtended",
            regex: /[\uA8E0-\uA8FF]/,
            country: "India, Nepal",
        },
        {
            name: "bengaliExtended",
            regex: /[\u1C50-\u1C7F]/,
            country: "Bangladesh, India",
        },
        {
            name: "tamilSupplement",
            regex: /[\u11FC0-\u11FFF]/,
            country: "India, Sri Lanka, Singapore",
        },
        {
            name: "cjkUnifiedIdeographsExtensionA",
            regex: /[\u3400-\u4DBF]/,
            country: "China, Japan, Korea",
        },
        {
            name: "cjkUnifiedIdeographsExtensionB",
            regex: /[\u20000-\u2A6DF]/,
            country: "China, Japan, Korea",
        },
        {
            name: "cjkUnifiedIdeographsExtensionC",
            regex: /[\u2A700-\u2B73F]/,
            country: "China, Japan, Korea",
        },
        {
            name: "cjkUnifiedIdeographsExtensionD",
            regex: /[\u2B740-\u2B81F]/,
            country: "China, Japan, Korea",
        },
        {
            name: "cjkUnifiedIdeographsExtensionE",
            regex: /[\u2B820-\u2CEAF]/,
            country: "China, Japan, Korea",
        },
        {
            name: "cjkUnifiedIdeographsExtensionF",
            regex: /[\u2CEB0-\u2EBEF]/,
            country: "China, Japan, Korea",
        },
        {
            name: "cjkCompatibilityIdeograph",
            regex: /[\uF900-\uFAFF]/,
            country: "China, Japan, Korea",
        },
        {
            name: "cjkCompatibilityIdeographsSupplement",
            regex: /[\u2F800-\u2FA1F]/,
            country: "China, Japan, Korea",
        },
        { name: "yiSyllables", regex: /[\uA000-\uA48F]/, country: "China" },
        { name: "yiRadicals", regex: /[\uA490-\uA4CF]/, country: "China" },
        { name: "tagalog", regex: /[\u1700-\u171F]/, country: "Philippines" },
        { name: "hanunoo", regex: /[\u1720-\u173F]/, country: "Philippines" },
        { name: "buhid", regex: /[\u1740-\u175F]/, country: "Philippines" },
        { name: "tagbanwa", regex: /[\u1760-\u177F]/, country: "Philippines" },
        {
            name: "hanifiRohingya",
            regex: /[\u10D00-\u10D3F]/,
            country: "Myanmar, Bangladesh",
        },
        {
            name: "adlam",
            regex: /[\u1E900-\u1E95F]/,
            country: "Guinea, Nigeria, Liberia, Sierra Leone",
        },
        {
            name: "osage",
            regex: /[\u104B0-\u104FF]/,
            country: "United States (Osage Nation)",
        },
        {
            name: "elbasan",
            regex: /[\u10500-\u1052F]/,
            country: "Albania (historical)",
        },
        {
            name: "caucasianAlbanian",
            regex: /[\u10530-\u1056F]/,
            country: "Azerbaijan (historical)",
        },
        {
            name: "linearA",
            regex: /[\u10600-\u1077F]/,
            country: "Greece (historical)",
        },
        {
            name: "latin",
            regex: /[A-Za-z]/,
            country: "Europe, Americas, Africa, Oceania",
        },
    ];
    for (var _i = 0, unicodeMap_1 = unicodeMap; _i < unicodeMap_1.length; _i++) {
        var _a = unicodeMap_1[_i], name_1 = _a.name, country = _a.country, regex = _a.regex;
        if (regex.test(input))
            return { name: name_1, country: country };
    }
    return UNKNOWN;
}
