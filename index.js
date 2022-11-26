window.onload = function () {
  const hamburgerButton = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  hamburgerButton.addEventListener('click', () => {
    hamburgerButton.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });

  const mobileMenuLinks = document.querySelectorAll('.mobile-nav');

  mobileMenuLinks.forEach((element) => {
    element.addEventListener('click', () => {
      hamburgerButton.classList.remove('active');
      mobileMenu.classList.remove('active');
    });
  });

  const artists = [
    {
      name: 'Dunsin Oyekan',
      picture: './assets/dunsin.webp',
      role: 'Performing Artist',
      description: 'Dunsin Oyekan is a Nigerian contemporary Christian, singer-songwriter, producer, multi- instrumentalist and recording artiste popularly referred to as The Eagle.',
    },
    {
      name: 'Travis Greene',
      picture: './assets/travis-greene-bio.webp',
      role: 'Performing Artist',
      description: 'Celebrated and notably recognized for his quintessential influence both in the gospel music realm and ministry, Travis Greene continues to reach new heights.',
    },
    {
      name: 'Mercy Chinwo',
      picture: './assets/mercy-bio.webp',
      role: 'Performing Artist',
      description: 'Mercy Chinwo is a Nigerian gospel musician, singer and songwriter. Winner of the Nigerian Idol Season 2 in 2012, Mercy is a powerful vocalist and a renowned songstress in the Nigerian music industry. She is currently signed to Eezee Conceptz record label.',
    },
    {
      name: 'Donnie Mcclurkin',
      picture: './assets/donnie-bio.webp',
      role: 'Performing Artist',
      description: 'Born Donald Andrew McClurkin Jr. in Chester, South Carolina, U.S.A on the 9th of November, 1959 to Frances and Donald McClurkin Sr. Donnie as he was fondly called by family and friends grew up in a house full of children. His mom and dad had ten children in all.',
    },
    {
      name: 'Sinach',
      picture: './assets/sinach-bio.webp',
      role: 'Performing Artist',
      description: 'Known for writing music and leading worship for over 30 years, Sinach is a multi-award winning Gospel Singer-songwriter and has written some of the most sung and streamed songs in our time, such as Holy Are You Lord, I Know Who I Am, Simply Devoted, Way Maker.',
    },
    {
      name: 'Phil Thompson',
      picture: './assets/Phil_Thompson.webp',
      role: 'Performing Artist',
      description: 'Though Phil has been singing since childhood, it wasn’t until he was 30 years old that he discovered his gifting in writing music. Not only did he establish himself as the writer behind Ashmont Hill’s hits, but he’s also inked songs for a multitude of artistes.',
    },
  ];

  const artistSection = document.getElementById('performersId');
  const artistsH3 = document.createElement('h3');
  artistsH3.className = 'main-title';
  artistsH3.innerText = 'Featured Artists';
  const artistsHr = document.createElement('hr');
  artistsHr.className = 'artists-line';
  const artistsUl = document.createElement('ul');
  artistsUl.className = 'artists-box';
  artistSection.append(artistsH3, artistsHr, artistsUl);
  for (let i = 0; i < 6; i += 1) {
    const artistsLi = document.createElement('li');
    if (i > 1) {
      artistsLi.className = 'desktop-only';
    }
    artistsUl.appendChild(artistsLi);
    const artistsDiv = document.createElement('div');
    artistsLi.appendChild(artistsDiv);
    const artistsUlMini = document.createElement('ul');
    artistsUlMini.className = 'artist-parts';
    artistsDiv.appendChild(artistsUlMini);
    const artistImageLi = document.createElement('li');
    artistImageLi.className = 'artist-img';
    artistsUlMini.appendChild(artistImageLi);
    const artistImage = document.createElement('img');
    artistImage.className = 'artist-pic';
    artistImage.src = artists[i].picture;
    artistImage.alt = 'artist-image';
    artistImageLi.appendChild(artistImage);
    const artistTextsLi = document.createElement('li');
    artistTextsLi.className = 'artist-text-box';
    artistsUlMini.appendChild(artistTextsLi);

    const artistDetailsUl = document.createElement('ul');
    artistDetailsUl.className = 'artist-details';
    artistTextsLi.appendChild(artistDetailsUl);

    const artistNameLi = document.createElement('li');
    artistNameLi.className = 'artist-name';
    artistDetailsUl.appendChild(artistNameLi);
    artistNameLi.innerText = artists[i].name;

    const artistRoleLi = document.createElement('li');
    artistRoleLi.className = 'artist-title';
    artistDetailsUl.appendChild(artistRoleLi);
    artistRoleLi.innerText = artists[i].role;

    const artistLine = document.createElement('hr');
    artistLine.className = 'artist-line';
    artistDetailsUl.appendChild(artistLine);

    const artistDescrLi = document.createElement('li');
    artistDescrLi.className = 'artist-description';
    artistDetailsUl.appendChild(artistDescrLi);
    artistDescrLi.innerText = artists[i].description;
  }

  const btnMore = document.createElement('button');
  btnMore.innerText = 'MORE';
  btnMore.className = 'btn-more';
  artistSection.append(btnMore);
};