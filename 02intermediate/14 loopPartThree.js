const websites = ['Youtube', 'facebook', 'amazon', 'twitter','instagram'];

// for (const n of websites){
//     console.log(n);
// }

const short = {
    yt:"youtube",
    fb:"facebook",
    ig:"instagram"
}

for(const n in short){
    console.log(`Key is: ${n}
    value is:  ${short[n]}`);
}