//Inserting piece images
function insertImage() {
    document.querySelectorAll('.box').forEach(image => {

        if (image.innerText.length !== 0) {
            if (image.innerText == 'Wpawn' || image.innerText == 'Bpawn') {
                image.innerHTML = `${image.innerText} <img class = 'allimg allpawn' src = "${image.innerText}.png" alt ="">`
                image.style.cursor = 'pointer'
            }

            else {
                image.innerHTML = `${image.innerText} <img class = 'allimg' src = "${image.innerText}.png" alt ="">`
                image.style.cursor = 'pointer'
            }
        }
    })
}

insertImage()

//Inserting colors in the board

function coloring() {
    const color = document.querySelectorAll('.box')

    color.forEach(color => {

        getID = color.id
        arr = Array.from(getID)
        //console.log(arr)
        //arr.shift()
        //console.log(arr)
        aside = eval(arr.pop())
        aup = eval(arr.shift())
        a = aside + aup

        if (a % 2 == 0) {
            color.style.backgroundColor = 'rgb(208, 221, 227)'
        }
        if (a % 2 !== 0) {
            color.style.backgroundColor = 'rgb(125, 159, 180)'
        }
    })
}

coloring()

function reddish() {

    document.querySelectorAll('.box').forEach(i1 => {
        if (i1.style.backgroundColor == 'pink') {
            document.querySelectorAll('.box').forEach(i2 => {
                if (i2.style.backgroundColor == 'green' && i2.innerText.length !== 0) {

                    greenText = i2.innerText
                    pinkText = i1.innerText


                    pinkColor = ((Array.from(pinkText)).shift()).toString()
                    greenColor = ((Array.from(greenText)).shift()).toString()


                    getId = i2.id
                    arr = Array.from(getId)
                    arr.shift()
                    aside = eval(arr.pop())
                    aup = eval(arr.shift())
                    a = aside + aup

                    if (a % 2 == 0 && pinkColor == greenColor) {
                        i2.style.backgroundColor = 'rgb(240, 201, 150)'
                    }

                    if (a % 2 !== 0 && pinkColor == greenColor) {
                        i2.style.backgroundColor = 'rgb(77, 59, 36)'
                    }
                }
            })
        }
    })
}


tog = 1

document.querySelectorAll('.box').forEach(item => {

    item.addEventListener('click', function () {


        //delete a piece and replace it with the piece that killed it

        if (item.style.backgroundColor == 'green' && item.innerText.length == 0) {
            tog = tog + 1
        }

        else if (item.style.backgroundColor == 'green' && item.innerText.length !== 0) {

            document.querySelectorAll('.box').forEach(i => {
                if (i.style.backgroundColor == 'pink') {
                    pinkId = i.id
                    pinkText = i.innerText

                    document.getElementById(pinkId).innerText = ''
                    item.innerText = pinkText
                    coloring()
                    insertImage()
                    tog = tog + 1


                }
            })
        }

        getId = item.id
        arr = Array.from(getId);
        console.log(arr)
        //arr.shift()
        //console.log(arr)
        aside = eval(arr.pop())
        arr.push('0')
        console.log(arr)
        aup = eval(arr.join(''))
        a = aside + aup
        console.log(aside, aup, a)
        //console.log(arr)

        //Piece laws
        function whosTurn(toggle) {


            //a.Pawn
            if (item.innerText == `${toggle}pawn`) {
                item.style.backgroundColor = 'pink'

                if (tog % 2 !== 0 && aup < 800) {

                    if (document.getElementById(`${a + 100}`).innerText.length == 0) {
                        document.getElementById(`${a + 100}`).style.backgroundColor = 'green'
                    }

                    if (aside < 8 && document.getElementById(`${a + 100 + 1}`).innerText.length !== 0) {
                        document.getElementById(`${a + 100 + 1}`).style.backgroundColor = 'green'
                    }

                    if (aside > 1 && document.getElementById(`${a + 100 - 1}`).innerText.length !== 0) {
                        document.getElementById(`${a + 100 - 1}`).style.backgroundColor = 'green'
                    }
                }

                if (tog % 2 == 0 && aup > 100) {
                    if (document.getElementById(`${a - 100}`).innerText.length == 0) {
                        document.getElementById(`${a - 100}`).style.backgroundColor = 'green'
                    }

                    if (aside < 8 && document.getElementById(`${a - 100 + 1}`).innerText.length !== 0) {
                        document.getElementById(`${a - 100 + 1}`).style.backgroundColor = 'green'
                    }

                    if (aside > 1 && document.getElementById(`${a - 100 - 1}`).innerText.length !== 0) {
                        document.getElementById(`${a - 100 - 1}`).style.backgroundColor = 'green'
                    }
                }

            }

            //b.King

            if (item.innerText == `${toggle}king`) {

                if (aside < 8) {
                    document.getElementById(`${a + 1}`).style.backgroundColor = 'green'
                }

                if (aside > 1) {
                    document.getElementById(`${a - 1}`).style.backgroundColor = 'green'
                }

                if (aup < 800) {
                    document.getElementById(`${a + 100}`).style.backgroundColor = 'green'
                }

                if (aup > 100) {
                    document.getElementById(`${a - 100}`).style.backgroundColor = 'green'
                }

                if (aup > 100 && aside < 8) {
                    document.getElementById(`${a - 100 + 1}`).style.backgroundColor = 'green'
                }

                if (aup > 100 && aside > 1) {
                    document.getElementById(`${a - 100 - 1}`).style.backgroundColor = 'green'
                }

                if (aup < 800 && aside < 8) {
                    document.getElementById(`${a + 100 + 1}`).style.backgroundColor = 'green'
                }

                if (aup < 800 && aside > 1) {
                    document.getElementById(`${a + 100 - 1}`).style.backgroundColor = 'green'
                }
                item.style.backgroundColor = 'pink'
            }

            //c. Bishop



            if (item.innerText == `${toggle}bishop`) {


            }

            //d. Rook

            if (item.innerText == `${toggle}rook`) {

                for (let i = 1; i < 9; i++) {

                    if ((a + i * 100) < 900 && document.getElementById(`${a + i * 100}`).innerText == 0) {
                        document.getElementById(`${a + i * 100}`).style.backgroundColor = 'green'
                    }

                    else if ((a + i * 100) < 900 && document.getElementById(`${a + i * 100}`).innerText !== 0) {
                        document.getElementById(`${a + i * 100}`).style.backgroundColor = 'green'
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {

                    if ((a - i * 100) > 100 && document.getElementById(`${a - i * 100}`).innerText == 0) {
                        document.getElementById(`${a - i * 100}`).style.backgroundColor = 'green'
                    }

                    else if ((a - i * 100) > 100 && document.getElementById(`${a - i * 100}`).innerText !== 0) {
                        document.getElementById(`${a - i * 100}`).style.backgroundColor = 'green'
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {

                    if ((a + i) < (aup + 9) && document.getElementById(`${a + i}`).innerText == 0) {
                        document.getElementById(`${a + i}`).style.backgroundColor = 'green'
                    }
                    else if ((a + i) < (aup + 9) && document.getElementById(`${a + i}`).innerText !== 0) {
                        document.getElementById(`${a + i}`).style.backgroundColor = 'green'
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {

                    if ((a - i) > aup && document.getElementById(`${a - i}`).innerText == 0) {
                        document.getElementById(`${a - i}`).style.backgroundColor = 'green'
                    }

                    else if ((a - i) > aup && document.getElementById(`${a - i}`).innerText !== 0) {
                        document.getElementById(`${a - i}`).style.backgroundColor = 'green'
                        break
                    }
                }

                item.style.backgroundColor = 'pink'
            }

            //e. Queen

            if (item.innerText == `${toggle}queen`) {

                //Rook Movements

                for (let i = 1; i < 9; i++) {

                    if ((a + i * 100) < 900 && document.getElementById(`${a + i * 100}`).innerText == 0) {
                        document.getElementById(`${a + i * 100}`).style.backgroundColor = 'green'
                    }

                    else if ((a + i * 100) < 900 && document.getElementById(`${a + i * 100}`).innerText !== 0) {
                        document.getElementById(`${a + i * 100}`).style.backgroundColor = 'green'
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {

                    if ((a - i * 100) > 100 && document.getElementById(`${a - i * 100}`).innerText == 0) {
                        document.getElementById(`${a - i * 100}`).style.backgroundColor = 'green'
                    }

                    else if ((a - i * 100) > 100 && document.getElementById(`${a - i * 100}`).innerText !== 0) {
                        document.getElementById(`${a - i * 100}`).style.backgroundColor = 'green'
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {

                    if ((a + i) < (aup + 9) && document.getElementById(`${a + i}`).innerText == 0) {
                        document.getElementById(`${a + i}`).style.backgroundColor = 'green'
                    }
                    else if ((a + i) < (aup + 9) && document.getElementById(`${a + i}`).innerText !== 0) {
                        document.getElementById(`${a + i}`).style.backgroundColor = 'green'
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {

                    if ((a - i) > aup && document.getElementById(`${a - i}`).innerText == 0) {
                        document.getElementById(`${a - i}`).style.backgroundColor = 'green'
                    }

                    else if ((a - i) > aup && document.getElementById(`${a - i}`).innerText !== 0) {
                        document.getElementById(`${a - i}`).style.backgroundColor = 'green'
                        break
                    }
                }

                //Bishop Movements







                item.style.backgroundColor = 'pink'


            }

            if (item.innerText == `${toggle}knight`) {


                if (aside < 7 && aup < 800) {
                    document.getElementById(`${a + 100 + 2}`).style.backgroundColor = 'green'
                }

                if (aside < 7 && aup > 200) {
                    document.getElementById(`${a - 100 + 2}`).style.backgroundColor = 'green'
                }

                if (aside < 8 && aup < 700) {
                    document.getElementById(`${a + 200 + 1}`).style.backgroundColor = 'green'
                }

                if (aside > 1 && aup < 700) {
                    document.getElementById(`${a + 200 - 1}`).style.backgroundColor = 'green'
                }

                if (aside > 2 && aup < 800) {
                    document.getElementById(`${a + 100 - 2}`).style.backgroundColor = 'green'
                }

                if (aside > 2 && aup > 100) {
                    document.getElementById(`${a - 100 - 2}`).style.backgroundColor = 'green'
                }

                if (aside < 8 && aup > 200) {
                    document.getElementById(`${a - 200 + 1}`).style.backgroundColor = 'green'
                }

                if (aside > 1 && aup > 200) {
                    document.getElementById(`${a - 200 - 1}`).style.backgroundColor = 'green'
                }

                item.style.backgroundColor = 'pink'

            }



        }

        if (tog % 2 !== 0) {
            document.getElementById('tog').innerText = "White's Turn"

            whosTurn('W')
            //tog = tog + 1
        }

        if (tog % 2 == 0) {
            document.getElementById('tog').innerText = "Black's Turn"
            whosTurn('B')
            //tog = tog + 1
        }

        reddish()

        //whoWins?

        checkmate = 0
        document.querySelectorAll('.box').forEach(win => {

            if (win.innerText == 'Wking' || win.innerText == 'Bking') {
                checkmate += 1
            }
        })

        if (checkmate == 1) {
            setTimeout(() => {

                if (tog % 2 == 0) {
                    alert("White Wins!!")
                    location.reload()
                }

                else if (tog % 2 !== 0) {
                    alert("Black Wins!!")
                    location.reload()
                }
            }, 100)
        }

    })
})


document.querySelectorAll('.box').forEach(hathiTest => {

    hathiTest.addEventListener('click', function () {

        if (hathiTest.style.backgroundColor == 'pink') {

            pinkId = hathiTest.id
            pinkText = hathiTest.innerText

            document.querySelectorAll('.box').forEach(hathiTest2 => {

                hathiTest2.addEventListener('click', function () {
                    if (hathiTest2.style.backgroundColor == 'green' && hathiTest2.innerText.length == 0) {
                        document.getElementById(pinkId).innerText = ''
                        hathiTest2.innerText = pinkText
                        coloring()
                        insertImage()

                    }

                })
            })

        }

    })

})


z = 0
document.querySelectorAll('.box').forEach(ee => {
    ee.addEventListener('click', function () {
        z = z + 1
        if (z % 2 == 0 && ee.style.backgroundColor !== 'green') {
            coloring()
        }
    })
})