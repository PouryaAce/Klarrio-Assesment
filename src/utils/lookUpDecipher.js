// decipher function for transforming input_title to lookUpKey

export const decipher = (string) => {
  return string
    .replace(/ *\([^)]*\) */g, "")
    .replace(/ *\([^)]*\ */g, "")
    .replace(/\[[^)]*/g, "")
    .replace(/^The/g, "")
    .replace(/The /g, "")
    .replace(/^Un /g, "")
    .replace(/^La /g, "")
    .replace(/^El /g, "")
    .replace(/^Ein /g, "")
    .replace(/^Il /g, "")
    .replace(/^Das /g, "")
    .replace(/^St\./g, "")
    .replace(/ing$/g, "in")
    .replace(/ing /g, "in")
    .replace(/And /g, "&")
    .replace(/ and /g, " & ")
    .replace(/ les$/g, "")
    .replace(/s  $/g, "")
    .replace(/'n'/g, "&")
    .replace(/ n'/g, "&")
    .replace(/86A /g, "86A")
    .replace(/A /g, "")
    .replace(/ a /g, "")
    .replace(/ the /g, "")
    .replace(/ Part /g, "pt")
    .replace(/alize/g, "alise")
    .replace(/ll/g, "l")
    .replace(/Ll/g, "l")
    .replace(/Aa/g, "a")
    .replace(/pp/g, "p")
    .replace(/dd/g, "d")
    .replace(/aa/g, "a")
    .replace(/bb/g, "b")
    .replace(/cc/g, "c")
    .replace(/tt/g, "t")
    .replace(/rr/g, "r")
    .replace(/nn/g, "n")
    .replace(/gg/g, "g")
    .replace(/hh/g, "h")
    .replace(/dd/g, "d")
    .replace(/mm/g, "m")
    .replace(/ff/g, "f")
    .replace(/zz/g, "z")
    .replace(/yy/g, "y")
    .replace(/WW/g, "w")
    .replace(/ss$/g, "sss")
    .replace(/ss/g, "s")
    .replace(/[Â©]/g, "E")
    .replace(/[Â¤]/g, "A")
    .replace(/[Â±]/g, "I")
    .replace(/[Â³]/g, "O")
    .replace(/[Â¶]/g, "O")
    .replace(/[Â¡]/g, "A")
    .replace(/[Â¨]/g, "E")
    .replace(/Ã­$/g, "I")
    .replace(/s$/g, "")
    .replace(/[^a-zA-Z0-9& ]/g, "")
    .replace(/[\])}[{(]/g, "")
    .replace(/\s/g, "")
    .replace(/Ver/g, "vera")
    .toUpperCase()
    .substring(0, 25);
};