const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];

    robots.forEach( (robot,index) => {
        const div = document.createElement('div');
        div.classList.add("card");
        const img = document.createElement('img');
        img.src = robot.image; // 'robotImg' + index.toString() + '.png';
        const name = document.createElement('p');
        name.classList.add("robotName");
        let txt = document.createTextNode(robot.name);
        name.appendChild(txt);
        const email = document.createElement('p');
        email.classList.add('robotEmail');
        txt = document.createTextNode(robot.email);
        email.appendChild(txt);
        div.appendChild(img);
        div.appendChild(name);
        div.appendChild(email);
        document.querySelector('#card-collection').appendChild(div);
    })

    document.querySelector('#searchBox').addEventListener('input',searchInput);

    function searchInput(evt) {
        text = document.querySelector('#searchBox input').value;
        if (text.length === 0) {
            showAllCards()
        } else {
            const filtered = robots.filter(elem => elem.name.slice(0,text.length).toLocaleLowerCase() === text.toLocaleLowerCase());
                showCard(filtered);
        }
    }

    function showCard(filtered) {
        for (let i=0; i<robots.length; i++) {
            document.querySelectorAll('#card-collection div')[i].style.display = 'none';
        }
        for (let i=0; i<filtered.length; i++) {
            document.querySelectorAll('#card-collection div')[filtered[i].id-1].style.display = 'flex';
        }
    }

    function showAllCards() {
        for (let i=0; i<robots.length; i++) {
            document.querySelectorAll('#card-collection div')[i].style.display = 'flex';
        }
    }