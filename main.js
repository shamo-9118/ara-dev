// height はカードの強さを入れています。数が多いほど強い
const cardList = [
  { name: 'spade-2', link: './card/spade_02.png', height: 1, mark: 4 },
  { name: 'spade-3', link: './card/spade_03.png', height: 2, mark: 4 },
  { name: 'spade-4', link: './card/spade_04.png', height: 3, mark: 4 },
  { name: 'spade-5', link: './card/spade_05.png', height: 4, mark: 4 },
  { name: 'spade-6', link: './card/spade_06.png', height: 5, mark: 4 },
  { name: 'spade-7', link: './card/spade_07.png', height: 6, mark: 4 },
  { name: 'spade-8', link: './card/spade_08.png', height: 7, mark: 4 },
  { name: 'spade-9', link: './card/spade_09.png', height: 8, mark: 4 },
  { name: 'spade-10', link: './card/spade_10.png', height: 9, mark: 4 },
  { name: 'spade-jack', link: './card/spade_11.png', height: 10, mark: 4 },
  {
    name: 'spade-queen',
    link: './card/spade_12.png',
    height: 11,
    mark: 4,
  },
  { name: 'spade-king', link: './card/spade_13.png', height: 12, mark: 4 },
  { name: 'spade-A', link: './card/spade_01.png', height: 13, mark: 4 },

  { name: 'heart-2', link: './card/heart_02.png', height: 1, mark: 3 },
  { name: 'heart-3', link: './card/heart_03.png', height: 2, mark: 3 },
  { name: 'heart-4', link: './card/heart_04.png', height: 3, mark: 3 },
  { name: 'heart-5', link: './card/heart_05.png', height: 4, mark: 3 },
  { name: 'heart-6', link: './card/heart_06.png', height: 5, mark: 3 },
  { name: 'heart-7', link: './card/heart_07.png', height: 6, mark: 3 },
  { name: 'heart-8', link: './card/heart_08.png', height: 7, mark: 3 },
  { name: 'heart-9', link: './card/heart_09.png', height: 8, mark: 3 },
  { name: 'heart-10', link: './card/heart_10.png', height: 9, mark: 3 },
  { name: 'heart-jack', link: './card/heart_11.png', height: 10, mark: 3 },
  {
    name: 'heart-queen',
    link: './card/heart_12.png',
    height: 11,
    mark: 3,
  },
  { name: 'heart-king', link: './card/heart_13.png', height: 12, mark: 3 },
  { name: 'heart-A', link: './card/heart_01.png', height: 13, mark: 3 },

  { name: 'clover-2', link: './card/club_02.png', height: 1, mark: 1 },
  { name: 'clover-3', link: './card/club_03.png', height: 2, mark: 1 },
  { name: 'clover-4', link: './card/club_04.png', height: 3, mark: 1 },
  { name: 'clover-5', link: './card/club_05.png', height: 4, mark: 1 },
  { name: 'clover-6', link: './card/club_06.png', height: 5, mark: 1 },
  { name: 'clover-7', link: './card/club_07.png', height: 6, mark: 1 },
  { name: 'clover-8', link: './card/club_08.png', height: 7, mark: 1 },
  { name: 'clover-9', link: './card/club_09.png', height: 8, mark: 1 },
  { name: 'clover-10', link: './card/club_10.png', height: 9, mark: 1 },
  { name: 'clover-jack', link: './card/club_11.png', height: 10, mark: 1 },
  {
    name: 'clover-queen',
    link: './card/club_12.png',
    height: 11,
    mark: 1,
  },
  { name: 'clover-king', link: './card/club_13.png', height: 12, mark: 1 },
  { name: 'clover-A', link: './card/club_01.png', height: 13, mark: 1 },

  { name: 'diamond-2', link: './card/diamond_02.png', height: 1, mark: 2 },
  { name: 'diamond-3', link: './card/diamond_03.png', height: 2, mark: 2 },
  { name: 'diamond-4', link: './card/diamond_04.png', height: 3, mark: 2 },
  { name: 'diamond-5', link: './card/diamond_05.png', height: 4, mark: 2 },
  { name: 'diamond-6', link: './card/diamond_06.png', height: 5, mark: 2 },
  { name: 'diamond-7', link: './card/diamond_07.png', height: 6, mark: 2 },
  { name: 'diamond-8', link: './card/diamond_08.png', height: 7, mark: 2 },
  { name: 'diamond-9', link: './card/diamond_09.png', height: 8, mark: 2 },
  {
    name: 'diamond-10',
    link: './card/diamond_10.png',
    height: 9,
    mark: 2,
  },
  {
    name: 'diamond-jack',
    link: './card/diamond_11.png',
    height: 10,
    mark: 2,
  },
  {
    name: 'diamond-queen',
    link: './card/diamond_12.png',
    height: 11,
    mark: 2,
  },
  {
    name: 'diamond-king',
    link: './card/diamond_13.png',
    height: 12,
    mark: 2,
  },
  {
    name: 'diamond-A',
    link: './card/diamond_01.png',
    height: 13,
    mark: 2,
  },
]

//裏面カードのDOM
const backCard = '<img src="./card/back.png" alt="裏面カード">'

//DOMの取得
const recordArea = document.getElementById('js_recordArea')
const totalCardRecord = document.getElementById('js_totalCardRecord')
const loseRecord = document.getElementById('js_loseRecord')
const rateRecord = document.getElementById('js_rateRecord')
const winRecord = document.getElementById('js_winRecord')
const gameDescription = document.getElementById('js_gameDescription')
const openCardArea = document.getElementById('js_openCardArea')
const hiddenCardArea = document.getElementById('js_hiddenCardArea')
const buttonArea = document.getElementById('js_button-area')
const startButton = document.getElementById('js_startButton')
const cemeteryCardArea = document.getElementById('js_cemetery')

//カードの枚数を定義
let totalGameCount = 0
const recordData = [
  { text: '残り枚数', count: 52, dom: totalCardRecord },
  { text: '正解数', count: 0, dom: winRecord },
  { text: '不正解数', count: 0, dom: loseRecord },
  { text: '勝率', count: 0, dom: rateRecord },
]
const resetRecord = () => {
  recordData.map((data) => {
    data.dom.textContent = `${data.text}：${data.count}`
  })
}
resetRecord()
//スタートボタンを押すことでカード2枚とlow&highのボタンを出現させてスタートボタンはhiddenにする
startButton.addEventListener('click', () => {
  gameDescription.setAttribute('hidden', 'hidden')
  const buttonName = ['low', 'high']
  const buttonDom = buttonName.map(
    (name) => `<button class="${name}" id="${name}">${name}</button>`
  )
  const lowButtonDiv = document.createElement('div')
  const highButtonDiv = document.createElement('div')
  lowButtonDiv.innerHTML = buttonDom[0]
  highButtonDiv.innerHTML = buttonDom[1]
  buttonArea.appendChild(lowButtonDiv)
  buttonArea.appendChild(highButtonDiv)
  startButton.setAttribute('hidden', 'hidden')

  showOpenCard(Math.floor(Math.random() * recordData[0].count))
  hiddenCardArea.innerHTML = backCard

  const highButton = document.getElementById('high')
  highButton.addEventListener('click', () => {
    highButton.disabled = true
    showHiddenCard(Math.floor(Math.random() * recordData[0].count), highButton)
    recordData[0].count--
  })

  const lowButton = document.getElementById('low')
  lowButton.addEventListener('click', () => {
    lowButton.disabled = true
    showHiddenCard(Math.floor(Math.random() * recordData[0].count), lowButton)
    recordData[0].count--
  })
})

const showOpenCard = (openRandomNum) => {
  openCardArea.innerHTML = pickUpCard(openRandomNum)
}
const showHiddenCard = (hiddenRandomNum, button) => {
  hiddenCardArea.innerHTML = pickUpCard(hiddenRandomNum)
  setTimeout(() => compareCards(button), 1000)
}

const pickUpCard = (pickUpNumber) => {
  const cardLink = cardList[pickUpNumber].link
  const cardName = cardList[pickUpNumber].name
  const cardHeight = cardList[pickUpNumber].height
  const cardMark = cardList[pickUpNumber].mark
  return `<img src="${cardLink}" alt="${cardName}" data-set="${cardHeight}" data-mark="${cardMark}">`
}

const compareCards = (button) => {
  const openedCard = document.getElementById('js_openCardArea').children[0]
  const openedCardNum = Number(openedCard.getAttribute('data-set'))
  const hiddenCard = document.getElementById('js_hiddenCardArea').children[0]
  const hiddenCardNum = Number(hiddenCard.getAttribute('data-set'))
  const openedCardMark = Number(openedCard.getAttribute('data-mark'))
  const hiddenCardMark = Number(openedCard.getAttribute('data-mark'))

  // data-setの値を比較してhigh or lowを出力
  if (hiddenCardNum === openedCardNum) {
    if (hiddenCardMark < openedCardMark) {
      alert('win! openの方が大きいです')
      recordData[1].count++
    } else if (openedCardMark < hiddenCardMark) {
      alert('lose! openの方が小さいです')
      recordData[2].count++
    }
  } else if (hiddenCardNum < openedCardNum) {
    alert('win! openの方が大きいです')
    recordData[1].count++
  } else if (openedCardNum < hiddenCardNum) {
    alert('lose! openの方が小さいです')
    recordData[2].count++
  }

  //捨て場にカードを入れる処理
  const liOpen = document.createElement('li')
  const liHidden = document.createElement('li')
  liOpen.appendChild(openedCard)
  liHidden.appendChild(hiddenCard)
  cemeteryCardArea.appendChild(liOpen)
  cemeteryCardArea.appendChild(liHidden)

  showOpenCard(Math.floor(Math.random() * recordData[0].count))
  recordData[0].count--

  // init
  hiddenCardArea.innerHTML = backCard
  totalGameCount++
  recordData[3].count = Math.round((recordData[1].count / totalGameCount) * 100)
  button.disabled = false
  resetRecord()
}
