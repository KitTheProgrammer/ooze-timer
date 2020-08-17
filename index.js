let usedLang = 'RU'
let langs = [ 'EN', 'UA' ]
function toggleMusic() {
  const player = document.getElementById('music')
  const icon = document.getElementById('music-obj')
  if (player.paused) {
    player.play().then(() => icon.data = 'assets/music_on.svg').catch(() => {})
  } else {
    icon.data = 'assets/music_off.svg'
    player.pause()
  }
}

function toggleLanguage(onlyOff = false) {
  const elem = document.getElementById('language-select')
  if (onlyOff) {
    if (elem.classList.contains('visible')) {
      elem.classList.toggle('language-select')
      elem.classList.toggle('visible')
    }
  } else {
    elem.classList.toggle('language-select')
    if (elem.classList.toggle('visible')) {
      const itemsToDelete = document.getElementsByClassName('lang-it')
      Array.from(itemsToDelete).forEach((it) => it.remove())
      elem.insertAdjacentHTML(
        'afterbegin',
        langs.reduce((a, c) => a + `<div class="lang-it" onclick="selectLanguage('${c}')">${c}</div>`, '')
      )
    }
  }
}

// And you are a stubborn guy, aren't you?)

function selectLanguage(lang) {
  const elem = document.getElementById('current-lang')
  elem.innerHTML=''
  const prevLang = usedLang
  usedLang = lang
  langs = langs.map((it) => it === lang ? prevLang : it)
  elem.insertAdjacentText('afterbegin', lang + ' ▼')
  toggleLanguage(true)
  setLangData()
}

// NO!

function setLangData() {
  const elems = []
  for (let i = 1; i <= 13; i++) {
    elems.push(document.getElementById(`${i}`))
  }
  elems.forEach((elem) => {
    elem.innerHTML = ''
    const id = elem.id
    if (usedLang === 'RU') {
      switch (id) {
        case '1':
          elem.insertAdjacentHTML('afterbegin', `<span class="white bold medium">Shivers -</span> <span class="green medium">новый альбом от OOZE</span>`)
          break
        case '2':
          elem.insertAdjacentHTML('afterbegin', `Слушать`)
          break
        case '3':
          elem.insertAdjacentHTML('afterbegin', `Контакты`)
          break
        case '4':
          elem.insertAdjacentHTML('afterbegin', `<span class="bolder">Shivers</span> - это второй релиз от <br> украинской группы`)
          break
        case '5':
          elem.insertAdjacentHTML('afterbegin', `Shivers - многосторонний и сложный продукт, над которым коллектив работал последнее время.
                    Релиз состоит из 4 тематических частей, но в тоже время является единым целым.<br><br>
                    Отличительная черта Shivers - непохожесть ни на что другое, рассказ драматической истории без единого слова.
                    Повествование<br> происходит через язык эмоций.`)
          break
        case '6':
          elem.insertAdjacentHTML('afterbegin', `Релиз альбома - <span class="green">7 августа 2020</span>, после которого он будет доступен для<br>
                    прослушивания на всех популярных музыкальных платформах.`)
          break
        case '7':
          elem.insertAdjacentHTML('afterbegin', `<div class="inf-it medium bold white">
                        Авторы:
                    </div>
                    <div class="inf-it medium white">
                        Егор Друзенко <br><span class="small green">(Бас-гитара)</span>
                    </div>
                    <div class="inf-it medium white">
                        Наталия Ивасюк <br><span class="small green">(Скрипка)</span>
                    </div>
                    <div class="inf-it medium white">
                        Максим Салов <br><span class="small green">(Гитара)</span>
                    </div>
                    <div class="inf-it medium white">
                        Евгений Хрулев <br><span class="small green">(Барабаны)</span>
                    </div>`)
          break
        case '8':
          elem.insertAdjacentHTML('afterbegin', `Shivers доступен для прослушивания.`)
          break
        case '9':
          elem.insertAdjacentHTML('afterbegin', `OOZE - мультижанровая<br>
                        Киево-Васильковская<br>
                        группа.<br>`)
          break
        case '10':
          elem.insertAdjacentHTML('afterbegin', `<span class="green">@</span> Мы три молодых парня, что по жизни в музыкальном процессе чувствуют себя
                        наиболее комфортно, стараемся любить не только себя в музыке, но и музыку в себе.`)
          break
        case '11':
          elem.insertAdjacentHTML('afterbegin', `Музыкальный коллектив основан в 2018 году Егором Друзенко,<br> Максимом Саловым и Евгением Хрулёвым.
                    Группа сотрудничает с<br> крупнейшим украинским лейблом тяжёлой музыки RobustFellow<br> Prods.`)
          break
        case '12':
          elem.insertAdjacentHTML('afterbegin', `<a target="_blank" class="button white" href="https://taplink.cc/oozeband">Контакты</a>
                        <a target="_blank" class="button white w-margin" href="http://smarturl.it/guh08v">Cableway EP</a>`)
          break
        case '13':
          elem.insertAdjacentHTML('afterbegin', `Shivers - уже второй крупный релиз от OOZE. В 2019 году группа<br>
                    дебютировала с альбомом “Cableway”, и клипом на один из треков.`)
          break
      }
    }
    if (usedLang === 'UA') {
      switch (id) {
        case '1':
          elem.insertAdjacentHTML('afterbegin', `<span class="white bold medium">Shivers -</span> <span class="green medium"> новий альбом від OOZE</span>`)
          break
        case '2':
          elem.insertAdjacentHTML('afterbegin', `Слухати`)
          break
        case '3':
          elem.insertAdjacentHTML('afterbegin', `Контакти`)
          break
        case '4':
          elem.insertAdjacentHTML('afterbegin', `<span class="bolder">Shivers</span> - це другий реліз від <br> українського гурту`)
          break
        case '5':
          elem.insertAdjacentHTML('afterbegin', `Shivers - багатосторонній і складний продукт, над яким колектив працював останній час. Реліз складається з 4 тематичних частин, але в той самий час є єдиним цілим. <br><br>
                    Особливість Shivers полягає в несхожості ні на що інше, розповідь драматичної історії без жодного слова. Оповідь відбувається за допомогою емоцій.`)
          break
        case '6':
          elem.insertAdjacentHTML('afterbegin', `Реліз альбому - <span class="green">7 серпня 2020</span>, після якого він буде доступний для<br>
                    прослуховування на всіх популярних музичних платформах.`)
          break
        case '7':
          elem.insertAdjacentHTML('afterbegin', `<div class="inf-it medium bold white">
                        Автори:
                    </div>
                    <div class="inf-it medium white">
                        Єгор Друзенко <br><span class="small green">(Бас-гітара)</span>
                    </div>
                    <div class="inf-it medium white">
                        Наталія Івасюк <br><span class="small green">(Скрипка)</span>
                    </div>
                    <div class="inf-it medium white">
                        Максим Салов <br><span class="small green">(Гітара)</span>
                    </div>
                    <div class="inf-it medium white">
                        Євгеній Хрульов <br><span class="small green">(Барабани)</span>
                    </div>`)
          break
        case '8':
          elem.insertAdjacentHTML('afterbegin', `Shivers доступний до прослуховування.`)
          break
        case '9':
          elem.insertAdjacentHTML('afterbegin', `OOZE - мультижанровий<br>
                        Києво-Васильківський<br>
                        гурт.<br>`)
          break
        case '10':
          elem.insertAdjacentHTML('afterbegin', `<span class="green">@</span> Ми три молодих хлопці, що по життю в музичному процесі відчуваємо себе найбільш комфортно, намагаємося любити не тільки себе в музиці, але і музику в собі.`)
          break
        case '11':
          elem.insertAdjacentHTML('afterbegin', `Музичний колектив заснований  в 2018 році Єгором Друзенко, Максимом Саловим та Євгенієм Хрульовим. Гурт співрацює з найбільшим українським дистриб’ютором важкої музики RobustFellow Prods.`)
          break
        case '12':
          elem.insertAdjacentHTML('afterbegin', `<a target="_blank" class="button white" href="https://taplink.cc/oozeband">Контакти</a>
                        <a target="_blank" class="button white w-margin" href="http://smarturl.it/guh08v">Cableway EP</a>`)
          break
        case '13':
          elem.insertAdjacentHTML('afterbegin', `Shivers - вже другий реліз від OOZE. В 2019 році гурт<br/> дебютував з альбомом “Cableway”, та кліпом на один з треків.`)
          break
      }
    }
    if (usedLang === 'EN') {
      switch (id) {
        case '1':
          elem.insertAdjacentHTML('afterbegin', `<span class="white bold medium">Shivers -</span> <span class="green medium">new EP by OOZE</span>`)
          break
        case '2':
          elem.insertAdjacentHTML('afterbegin', `Listen`)
          break
        case '3':
          elem.insertAdjacentHTML('afterbegin', `Contacts`)
          break
        case '4':
          elem.insertAdjacentHTML('afterbegin', `<span class="bolder">Shivers</span> - second <br> release by`)
          break
        case '5':
          elem.insertAdjacentHTML('afterbegin', `Shivers is a complex product, on which the band has been working on for the last couple of months. EP consists of 4 parts, which together form a long cohesive narrative.<br><br>
                    Shivers is unique due to its ability to tell a story without a single word - emotions speak.`)
          break
        case '6':
          elem.insertAdjacentHTML('afterbegin', `Shivers will be available on all streaming platforms starting <span class="green">from 7th of August 2020</span>.`)
          break
        case '7':
          elem.insertAdjacentHTML('afterbegin', `<div class="inf-it medium bold white">
                        Authors:
                    </div>
                    <div class="inf-it medium white">
                        Yehor Druzenko <br><span class="small green">(Bass)</span>
                    </div>
                    <div class="inf-it medium white">
                        Natalya Ivasiuk <br><span class="small green">(Violin)</span>
                    </div>
                    <div class="inf-it medium white">
                        Maksym Salov <br><span class="small green">(Guitar)</span>
                    </div>
                    <div class="inf-it medium white">
                        Evhenii Khrulov <br><span class="small green">(Drums)</span>
                    </div>`)
          break
        case '8':
          elem.insertAdjacentHTML('afterbegin', `Shivers  is available for streaming.`)
          break
        case '9':
          elem.insertAdjacentHTML('afterbegin', `OOZE -  Ukrainian<br>
                        multi-genre <br>
                        band.<br>`)
          break
        case '10':
          elem.insertAdjacentHTML('afterbegin', `<span class="green">@</span> We a three young fellers, who feel most comfortable making music, and who are trying not only to like ourselves in music, but also music in ourselves.`)
          break
        case '11':
          elem.insertAdjacentHTML('afterbegin', `The band was formed in 2018 with combined forces of  Yehor Druzenko, Maksym Salov and Evhenii Khrulov. at the end of 2019, trio has signed a contract with RobustFellow Prods - biggest distributor of underground music in Ukraine.`)
          break
        case '12':
          elem.insertAdjacentHTML('afterbegin', `<a target="_blank" class="button white" href="https://taplink.cc/oozeband">Contacts</a>
                        <a target="_blank" class="button white w-margin" href="http://smarturl.it/guh08v">Cableway EP</a>`)
          break
        case '13':
          elem.insertAdjacentHTML('afterbegin', `Shivers is a second release by OOZE, In 2019, the band released their debut Cableway EP with a music video for "Pillars of Creation".`)
          break
      }
    }
  })

  const listenButtons = Array.from(document.getElementsByClassName('listen-stuff-button'))

  listenButtons.forEach((elem) => {
    elem.innerHTML = ''
    if (usedLang === 'RU') {
      elem.insertAdjacentHTML('afterbegin', 'Слушать')
    }
    if (usedLang === 'UA') {
      elem.insertAdjacentHTML('afterbegin', 'Слухати')
    }
    if (usedLang === 'EN') {
      elem.insertAdjacentHTML('afterbegin', 'Listen')
    }
  })

  const main = document.getElementById('main')

  if (usedLang === 'RU') {
    main.style.backgroundImage = 'url(./assets/MainBG_RU.png)'
  }
  if (usedLang === 'UA') {
    main.style.backgroundImage = 'url(./assets/MainBG_UA.png)'
  }
  if (usedLang === 'EN') {
    main.style.backgroundImage = 'url(./assets/MainBG_EN.png)'
  }
}

// Did enjoy? Was it cool? I dont think so. Just try to forget this. It was only your fault...
