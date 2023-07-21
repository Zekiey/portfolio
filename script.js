`use strict`;

/*Document.queryselector(`.home`).addEventListener
{
    `click`, function () {

        const social = document.querySelector(`.social`);
        //console.log(`eah`);
    }
}

let socials2 = document.querySelector(`.service`);
const socials = function () {

    return document.querySelector(`.service`);


}
//console.log(socials())
socials()

homer = socials2;
homer.addEventListener(`click`, socials);*/

let homer = document.querySelector(`.Home`);

homer.forEach((link) => {
    link.addEventListener(`click`, () => {
        homer((link) => ())
    }
    )
})

