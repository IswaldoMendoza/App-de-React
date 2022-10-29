const products = [
  {
    id: '1',
    name: "Resident Evil 1",
    price: 400,
    category: 'Horror',
    img: "https://i.ebayimg.com/images/g/MaAAAOSwpdpVbnED/s-l600.jpg",
    stock: 50,
    description: 'videojuego descargable'
  },
  {
    id: '2',
    name: "Resident Evil 2",
    price: 400,
    category: 'Horror',
    img: "https://media.alvanista.com/uploads/review_image/2017/02/23/17457_2005891721.png",
    stock: 50,
    description: 'videojuego descargable'
  },
  {
    id: '3',
    name: "Resident Evil 3",
    price: 400,
    category: 'Horror',
    img: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/01/re-3-nemesis-portada-ficha-1856679.jpg?itok=c5zFs4kF",
    stock: 50,
    description: 'videojuego descargable'
  },
  {
    id: '4',
    name: "Resident Evil 4",
    price: 400,
    category: 'Horror',
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6524/6524186_sd.jpg",
    stock: 50,
    description: 'videojuego descargable'
  },
  {
    id: '5',
    name: "Resident Evil 5",
    price: 400,
    category: 'Horror',
    img: "https://playtecgames.com/wp-content/uploads/2020/02/resident-evil-5_3.jpg",
    stock: 50,
    description: 'videojuego descargable'
  },
  {
    id: '6',
    name: "Resident Evil 6",
    price: 400,
    category: 'Horror',
    img: "https://m.media-amazon.com/images/I/81JFLsPdccL._AC_SL1500_.jpg",
    stock: 50,
    description: 'videojuego descargable'
  },
  {
    id: '7',
    name: "Resident Evil 7",
    price: 400,
    category: 'Horror',
    img: "https://media.vandal.net/m/39839/resident-evil-7-201610614915_1.jpg",
    stock: 50,
    description: 'videojuego descargable'
  },
  {
    id: '8',
    name: "Resident Evil 8",
    price: 400,
    category: 'Horror',
    img: "https://media.vandal.net/m/86453/resident-evil-8-village-20211229461390_1.jpg",
    stock: 50,
    description: 'videojuego descargable'
  },
  {
    id: '9',
    name: "Silent Hill",
    price: 400,
    category: 'Horror',
    img: "https://upload.wikimedia.org/wikipedia/en/9/96/Silent_Hill_video_game_cover.png",
    stock: 50,
    description: 'videojuego descargable'
  },
  {
    id: '10',
    name: "Silent Hill 2",
    price: 400,
    category: 'Horror',
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Silent_Hill_2.jpg/220px-Silent_Hill_2.jpg",
    stock: 50,
    description: 'videojuego descargable'
  },
  {
    id: '11',
    name: "Crash Bandicoot: Warped",
    price: 400,
    category: 'Aventura',
    img: "http://www.retroplace.com/pics/ps/packshots/54389--crash-bandicoot.png",
    stock: 50,
    description: 'videojuego descargable'
  },
  {
    id: '12',
    name: "Alundra",
    price: 400,
    category: 'Aventura',
    img: "https://i.blogs.es/5f54c7/170812_alundra/1366_2000.jpg",
    stock: 50,
    description: 'videojuego descargable'
  },
  {
    id: '13',
    name: "Ratchet & Clank",
    price: 400,
    category: 'Aventura',
    img: "https://i.3djuegos.com/juegos/6962/ratchet__clank_1/fotos/ficha/ratchet__clank_1-1725356.jpg",
    stock: 50,
    description: 'videojuego descargable'
  },
  {
    id: '14',
    name: "Crash Team Racing",
    price: 400,
    category: 'Aventura',
    img: "http://d3ugyf2ht6aenh.cloudfront.net/stores/910/199/products/crash-bandicoot-team-racing1-d2c31a8c63d4dc1bd915545858603866-640-0.jpg",
    stock: 50,
    description: 'videojuego descargable'
  },
  {
    id: '15',
    name: "Rayman 2",
    price: 400,
    category: 'Aventura',
    img: "https://raymanpc.com/wiki/images/thumb/4/48/Rayman_2_PS1.jpg/300px-Rayman_2_PS1.jpg",
    stock: 50,
    description: 'videojuego descargable'
  },
  {
    id: '16',
    name: "Uncharted 1",
    price: 400,
    category: 'Aventura',
    img: "https://www.playlanmym.com/wp-content/uploads/2019/04/UNCHARTED-DRAKES-FORTUNE.png",
    stock: 50,
    description: 'videojuego descargable'
  },
  {
    id: '17',
    name: "Uncharted 2",
    price: 400,
    category: 'Aventura',
    img: "https://gamefinity.pl/public/uploads/2018/08/uncharted-2-pl-eng-ps3.jpg",
    stock: 50,
    description: 'videojuego descargable'
  },
  {
    id: '18',
    name: "Uncharted 3",
    price: 400,
    category: 'Aventura',
    img: "http://d3ugyf2ht6aenh.cloudfront.net/stores/095/446/products/uncharted-3-game-of-the-year-edition-2cfce371d6299c6f8a15122021616711-640-0.jpg",
    stock: 50,
    description: 'videojuego descargable'
  },
  {
    id: '19',
    name: "Bugs Bunny & Taz",
    price: 400,
    category: 'Aventura',
    img: "https://static.wikia.nocookie.net/looneytunes/images/c/ce/Bugs_y_taz.jpg/revision/latest/scale-to-width-down/250?cb=20130109212532&path-prefix=es",
    stock: 50,
    description: 'videojuego descargable'
  },
  {
    id: '20',
    name: "Crash Bash",
    price: 400,
    category: 'Aventura',
    img: "https://m.media-amazon.com/images/I/511HSZmeMNL._AC_SY1000_.jpg",
    stock: 50,
    description: 'videojuego descargable'
  },
  {
    id: '21',
    name: "Civilization evolution",
    price: 400,
    category: 'Estrategia',
    img: "https://i.3djuegos.com/juegos/2388/sid_meiers_civilization_revolution/fotos/ficha/sid_meiers_civilization_revolution-1688236.webp",
    stock: 50,
    description: 'videojuego descargable'
  },
  {
    id: '22',
    name: "Xcom 2",
    price: 400,
    category: 'Estrategia',
    img: "https://cl.buscafs.com/www.levelup.com/public/uploads/images/442833_256x319.jpg",
    stock: 50,
    description: 'videojuego descargable'
  },
  {
    id: '23',
    name: "Warcraft II",
    price: 400,
    category: 'Estrategia',
    img: "https://i.3djuegos.com/juegos/5251/warcraft_ii__the_dark_saga/fotos/ficha/warcraft_ii__the_dark_saga-1698063.webp",
    stock: 50,
    description: 'videojuego descargable'
  },
  {
    id: '24',
    name: "Comandos 2",
    price: 400,
    category: 'Estrategia',
    img: "https://i.3djuegos.com/juegos/16080/commandos_2_men_of_courage/fotos/ficha/commandos_2_men_of_courage-4622887.webp",
    stock: 50,
    description: 'videojuego descargable'
  },
  {
    id: '25',
    name: "Valkyria Chronicles",
    price: 400,
    category: 'Estrategia',
    img: "https://i.ebayimg.com/thumbs/images/g/a7UAAOSwlQ1h7agX/s-l300.jpg",
    stock: 50,
    description: 'videojuego descargable'
  },
  {
    id: '26',
    name: "DOTA 2",
    price: 400,
    category: 'Estrategia',
    img: "https://i.blogs.es/de368e/dota-2-wallpaper/1366_2000.jpg",
    stock: 50,
    description: 'videojuego descargable'
  },
  {
    id: '27',
    name: "League Of Legends",
    price: 400,
    category: 'Estrategia',
    img: "https://gametimers.it/wp-content/uploads/2016/09/league-of-legends-1200x900.jpg",
    stock: 50,
    description: 'videojuego descargable'
  },
  {
    id: '28',
    name: "Sheep Raider",
    price: 400,
    category: 'Estrategia',
    img: "https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co2hjq.jpg",
    stock: 50,
    description: 'videojuego descargable'
  },
  {
    id: '29',
    name: "Age Of Empires",
    price: 400,
    category: 'Estrategia',
    img: "https://www.elamigos-games.com/storage/games_tumbl/age-of-empires-ii-definitive-edition-cover-xep.jpg",
    stock: 50,
    description: 'videojuego descargable'
  },
  {
    id: '30',
    name: "Battle Realms",
    price: 400,
    category: 'Estrategia',
    img: "https://m.media-amazon.com/images/I/51TMY3Z9F9L._AC_SY780_.jpg",
    stock: 50,
    description: 'videojuego descargable'
  },
  {
    id: '31',
    name: "God Of War",
    price: 400,
    category: 'Accion',
    img: "https://media.vandal.net/m/3268/200562215934_1.jpg",
    stock: 50,
    description: 'videojuego descargable'
  },
  {
    id: '32',
    name: "God Of War 2",
    price: 400,
    category: 'Accion',
    img: "https://m.media-amazon.com/images/I/51-TFvrGFHL.jpg",
    stock: 50,
    description: 'videojuego descargable'
  },
  {
    id: '33',
    name: "God Of War 3",
    price: 400,
    category: 'Accion',
    img: "https://media.vandal.net/m/8024/2010313182528_1.jpg",
    stock: 50,
    description: 'videojuego descargable'
  },
  {
    id: '34',
    name: "God Of War Ragnarok",
    price: 400,
    category: 'Accion',
    img: "https://http2.mlstatic.com/D_NQ_NP_656199-MLA40734588842_022020-O.jpg",
    stock: 50,
    description: 'videojuego descargable'
  },
  {
    id: '35',
    name: "Assassins Creed Brotherhood",
    price: 400,
    category: 'Accion',
    img: "https://i.ebayimg.com/images/g/QkoAAOSwB7FeN4BZ/s-l500.jpg",
    stock: 50,
    description: 'videojuego descargable'
  },
  {
    id: '36',
    name: "Assassins Creed Revelations",
    price: 400,
    category: 'Accion',
    img: "http://d3ugyf2ht6aenh.cloudfront.net/stores/910/199/products/assassins-creed-revelations1-35ae82c868df7faa6615545027727226-640-0.jpg",
    stock: 50,
    description: 'videojuego descargable'
  },
  {
    id: '37',
    name: "Mortal Kombat X",
    price: 400,
    category: 'Accion',
    img: "https://media.vandal.net/m/24647/mortal-kombat-x-20154110511_1.jpg",
    stock: 50,
    description: 'videojuego descargable'
  },
  {
    id: '38',
    name: "Mortal Kombat 11",
    price: 400,
    category: 'Accion',
    img: "https://media.s-bol.com/R6qgx6LPnqO0/mQ3Kkl9/550x686.jpg",
    stock: 50,
    description: 'videojuego descargable'
  },
  {
    id: '39',
    name: "Tekken 7",
    price: 400,
    category: 'Accion',
    img: "https://m.media-amazon.com/images/I/81pe+cmVc0L._AC_SX522_.jpg",
    stock: 50,
    description: 'videojuego descargable'
  },
  {
    id: '40',
    name: "Terminator Resistance",
    price: 400,
    category: 'Accion',
    img: "https://www.puntogamer.com.ar/Image/0/550_550-terminator-resistance-608661.1.jpg",
    stock: 50,
    description: 'videojuego descargable'
  }
]




export const getProducts = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(products)
    }, 500)
  })
}

export const getProduct = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === id))
    }, 2000)
  })
}

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter(prod => prod.category === categoryId))
    }, 1500)
  })
}