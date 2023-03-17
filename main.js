// height はカードの強さを入れています。数が多いほど強い
const cardList = [
  { name: 'spade-2', link: './card/card_spade_02.png', height: 1 },
  { name: 'spade-3', link: './card/card_spade_03.png', height: 2 },
  { name: 'spade-4', link: './card/card_spade_04.png', height: 3 },
  { name: 'spade-5', link: './card/card_spade_05.png', height: 4 },
  { name: 'spade-6', link: './card/card_spade_06.png', height: 5 },
  { name: 'spade-7', link: './card/card_spade_07.png', height: 6 },
  { name: 'spade-8', link: './card/card_spade_08.png', height: 7 },
  { name: 'spade-9', link: './card/card_spade_09.png', height: 8 },
  { name: 'spade-10', link: './card/card_spade_10.png', height: 9 },
  { name: 'spade-jack', link: './card/card_spade_11.png', height: 10 },
  { name: 'spade-queen', link: './card/card_spade_12.png', height: 11 },
  { name: 'spade-king', link: './card/card_spade_13.png', height: 12 },
  { name: 'spade-A', link: './card/card_spade_01.png', height: 13 },

  { name: 'heart-2', link: './card/card_heart_02.png', height: 1 },
  { name: 'heart-3', link: './card/card_heart_03.png', height: 2 },
  { name: 'heart-4', link: './card/card_heart_04.png', height: 3 },
  { name: 'heart-5', link: './card/card_heart_05.png', height: 4 },
  { name: 'heart-6', link: './card/card_heart_06.png', height: 5 },
  { name: 'heart-7', link: './card/card_heart_07.png', height: 6 },
  { name: 'heart-8', link: './card/card_heart_08.png', height: 7 },
  { name: 'heart-9', link: './card/card_heart_09.png', height: 8 },
  { name: 'heart-10', link: './card/card_heart_10.png', height: 9 },
  { name: 'heart-jack', link: './card/card_heart_11.png', height: 10 },
  { name: 'heart-queen', link: './card/card_heart_12.png', height: 11 },
  { name: 'heart-king', link: './card/card_heart_13.png', height: 12 },
  { name: 'heart-A', link: './card/card_heart_01.png', height: 13 },

  { name: 'clover-2', link: './card/card_club_02.png', height: 1 },
  { name: 'clover-3', link: './card/card_club_03.png', height: 2 },
  { name: 'clover-4', link: './card/card_club_04.png', height: 3 },
  { name: 'clover-5', link: './card/card_club_05.png', height: 4 },
  { name: 'clover-6', link: './card/card_club_06.png', height: 5 },
  { name: 'clover-7', link: './card/card_club_07.png', height: 6 },
  { name: 'clover-8', link: './card/card_club_08.png', height: 7 },
  { name: 'clover-9', link: './card/card_club_09.png', height: 8 },
  { name: 'clover-10', link: './card/card_club_10.png', height: 9 },
  { name: 'clover-jack', link: './card/card_club_11.png', height: 10 },
  { name: 'clover-queen', link: './card/card_club_12.png', height: 11 },
  { name: 'clover-king', link: './card/card_club_13.png', height: 12 },
  { name: 'clover-A', link: './card/card_club_01.png', height: 13 },

  { name: 'diamond-2', link: './card/card_diamond_02.png', height: 1 },
  { name: 'diamond-3', link: './card/card_diamond_03.png', height: 2 },
  { name: 'diamond-4', link: './card/card_diamond_04.png', height: 3 },
  { name: 'diamond-5', link: './card/card_diamond_05.png', height: 4 },
  { name: 'diamond-6', link: './card/card_diamond_06.png', height: 5 },
  { name: 'diamond-7', link: './card/card_diamond_07.png', height: 6 },
  { name: 'diamond-8', link: './card/card_diamond_08.png', height: 7 },
  { name: 'diamond-9', link: './card/card_diamond_09.png', height: 8 },
  { name: 'diamond-10', link: './card/card_diamond_10.png', height: 9 },
  { name: 'diamond-jack', link: './card/card_diamond_11.png', height: 10 },
  { name: 'diamond-queen', link: './card/card_diamond_12.png', height: 11 },
  { name: 'diamond-king', link: './card/card_diamond_13.png', height: 12 },
  { name: 'diamond-A', link: './card/card_diamond_01.png', height: 13 },
]

//DOMの取得
const openCardArea = document.getElementById('js_openCardArea')
const hiddenCardArea = document.getElementById('js_hiddenCardArea')
const cemeteryCardArea = document.getElementById('cemetery')
const startButton = document.getElementById('start')
const buttonArea = document.getElementById('js_button-area')

//使い終わったカードをここで収納
const cemetery = []

//カードの枚数を定義
let num = 52

//スタートボタンを押すことでカード2枚とrow&hightのボタンを出現させてスタートボタンはhiddenにする
startButton.addEventListener('click', () => {
  const buttonName = ['row', 'hight']
  const buttonDom = buttonName.map(
    (name) => `<button id="${name}">${name}</button>`
  )
  const rowButtonDiv = document.createElement('div')
  const hightButtonDiv = document.createElement('div')
  rowButtonDiv.innerHTML = buttonDom[0]
  hightButtonDiv.innerHTML = buttonDom[1]
  buttonArea.appendChild(rowButtonDiv)
  buttonArea.appendChild(hightButtonDiv)
  startButton.setAttribute('hidden', 'hidden')

  const openRandomNum = Math.floor(Math.random() * num)
  openCard(openRandomNum)
  num--

  const hiddenRandomNum = Math.floor(Math.random() * num)
  hiddenCard(hiddenRandomNum)
  num--

  //スタートボタンを押した時に生成したhightButtonとrowButtonを取得してそれぞにれカードを比較するイベントを追加する
  //比較したあとはcemeteryにappendChildで挿入してulに入れることで捨て札的な扱いで表示できるようにする
  const hightButton = document.getElementById('hight')
  hightButton.addEventListener('click', () => {
    //カード比較をするためにdatasetから値を取得する
    const openedCardHight = document
      .getElementById('js_openCardArea')
      .children[0].getAttribute('data-set')
    const openedCardNum = Number(openedCardHight)

    const hiddenCardHight = document
      .getElementById('js_hiddenCardArea')
      .children[0].getAttribute('data-set')
    const hiddenCardNum = Number(hiddenCardHight)

    if (hiddenCardNum < openedCardNum) {
      alert('win! hiddenの方が小さいです')
    } else if (openedCardNum < hiddenCardNum) {
      alert('lose! openの方がの方が大きいです')
    }
  })

  const rowButton = document.getElementById('row')
  rowButton.addEventListener('click', () => {
    //カード比較をするためにdatasetから値を取得する
    const openedCardHight = document
      .getElementById('js_openCardArea')
      .children[0].getAttribute('data-set')
    const openedCardNum = Number(openedCardHight)

    const hiddenCardHight = document
      .getElementById('js_hiddenCardArea')
      .children[0].getAttribute('data-set')
    const hiddenCardNum = Number(hiddenCardHight)

    if (openedCardNum < hiddenCardNum) {
      alert('win! hiddenの方が小さいです')
    } else if (hiddenCardNum < openedCardNum) {
      alert('lose! openの方がの方が大きいです')
    }
  })
})

const openCard = (openRandomNum) => {
  openCardArea.innerHTML = pickUpCard(openRandomNum)
}

const hiddenCard = (hiddenRandomNum) => {
  hiddenCardArea.innerHTML = pickUpCard(hiddenRandomNum)
}

const pickUpCard = (pickUpNumber) => {
  const cardLink = cardList[pickUpNumber].link
  const cardName = cardList[pickUpNumber].name
  const cardHeight = cardList[pickUpNumber].height
  cardList.splice(pickUpNumber, 1)
  cemetery.push(cardList[pickUpNumber])
  return `<img src="${cardLink}" alt="${cardName}" data-set="${cardHeight}">`
}

// rowButton.addEventListener('click', () => {
//   console.log('hello')
// })
// highButton.addEventListener('click', () => {
//   const openRandomNum = Math.floor(Math.random() * num)
//   openCard(openRandomNum)
//   num--
//   const hiddenRandomNum = Math.floor(Math.random() * num)
//   hiddenCard(hiddenRandomNum)
//   num--
//   compareCards(openRandomNum, hiddenRandomNum)
// })

// rowButton.addEventListener('click', () => {
//   const openRandomNum = Math.floor(Math.random() * num)
//   openCard(openRandomNum)
//   num--
//   const hiddenRandomNum = Math.floor(Math.random() * num)
//   hiddenCard(hiddenRandomNum)
//   num--
//   compareCards(openRandomNum, hiddenRandomNum)
// })
