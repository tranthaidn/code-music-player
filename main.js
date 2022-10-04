// Một số bài hát có thể bị lỗi do liên kết bị hỏng. Vui lòng thay thế liên kết khác để có thể phát
// Some songs may be faulty due to broken links. Please replace another link so that it can be played

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PlAYER_STORAGE_KEY = "F8_PLAYER";

const player = $(".player");
const cd = $(".cd");
const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
const playBtn = $(".btn-toggle-play");
const progress = $("#progress");
const prevBtn = $(".btn-prev");
const nextBtn = $(".btn-next");
const randomBtn = $(".btn-random");
const repeatBtn = $(".btn-repeat");
const playlist = $(".playlist");


const app = {
 currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  config: {},
  // (1/2) Uncomment the line below to use localStorage
  // config: JSON.parse(localStorage.getItem(PlAYER_STORAGE_KEY)) || {},
  songs: [
    {
      name: 'Little do you know',
      author: 'Alex & Sierra',
      image: './assets/img/Suzy4.jpg',
      path: './assets/music/Little_do_you_know_Alex_&_Sierra.mp3'
  },
  {
      name: 'When night falls',
      author: 'Eddi Kim',
      image: './assets/img/Suzy2.jpg',
      path: './assets/music/When_night_falls_Eddi_Kim.mp3'
  },
  {
      name: 'Too late',
      author: 'Addie Nicole',
      image: './assets/img/TooLate.jfif',
      path: './assets/music/Too_Late_Addie Nicole.mp3'
  },
  {
      name: 'Versace',
      author: 'The Same Persons',
      image: './assets/img/versace.jfif',
      path: './assets/music/Versace_The_Same_Persons.mp3'
  },
  {
      name: 'Set fire to the rain',
      author: 'Rain Adele ft. Vahn Remix',
      image: './assets/img/setFireToTheRain.jfif',
      path: './assets/music/Set_Fire_To_The_Rain_Adele_x_Vahn_Remix.mp3'
  },
  {
      name: 'Kiss Remix',
      author: 'Hung Bobi Remix',
      image: './assets/img/Kiss.jfif',
      path: './assets/music/Kiss_Hung_Bobi_Remix.mp3'
  },
  {
      name: 'Trap Queen Remix',
      author: 'Adriana Gomez',
      image: './assets/img/trapQueen.jfif',
      path: './assets/music/Trap_Queen_Remix_Adriana_Gomez.mp3'
  },
  {
      name: 'Devil From Heaven',
      author: 'TVT Remix',
      image: './assets/img/Devil.jpg',
      path: './assets/music/Ac_ma_den_tu_thien_duong_TVT_Remix.mp3'
  },
  {
      name: 'Cheap Thrills',
      author: 'Sia',
      image: './assets/img/CheapThrill.jfif',
      path: './assets/music/Cheap_Thrills_Sia.mp3'
  },
  {
      name: 'Let\'s marriage',
      author: 'Masew ft. Masiu',
      image: './assets/img/CuoiThoi.jpg',
      path: './assets/music/Cuoi_Thoi_Masew_x_Masiu.mp3'
  },
  {
      name: 'Diamond Ver 2',
      author: 'VQ Remix',
      image: './assets/img/diamond.jfif',
      path: './assets/music/Diamond_Ver2_VQ_Remix.mp3'
  },
  {
      name: 'Everytime we touch',
      author: 'Cascada',
      image: './assets/img/Everytimewetouch.jfif',
      path: './assets/music/Everytime_we_touch.mp3'
  },
  {
      name: 'How to love',
      author: 'Cash Cash ft. Sofia Reyes',
      image: './assets/img/howtolove.jfif',
      path: './assets/music/How_to_love_Cash_Cash_ft_Sofia_Reyes.mp3'
  },
  {
      name: 'I need your love',
      author: 'Madilyn Bailey',
      image: './assets/img/IneedYourLove.jfif',
      path: './assets/music/I_need_your_love_Madilyn_Bailey.mp3'
  },
  {
      name: 'Larg Remix',
      author: 'Elgit Doda',
      image: './assets/img/larg.jfif',
      path: './assets/music/Larg_Elgit_Doda.mp3'
  },
  {
      name: 'Love me like you do',
      author: 'Ellie Goulding',
      image: './assets/img/LoveMeLikeYouDo.jfif',
      path: './assets/music/Love_me_like_you_do_Ellie_Goulding.mp3'
  },
  {
      name: 'Love story',
      author: 'Taylor Swift',
      image: './assets/img/Taylor.jpg',
      path: './assets/music/Love_story_Taylor_Swift.mp3'
  },
  {
      name: 'Love the way you lie',
      author: 'Skylar Grey',
      image: './assets/img/Suzy3.jpg',
      path: './assets/music/Love_the_way_you_like_Skylar_Grey.mp3'
  },
  {
      name: 'Nevada',
      author: 'Vicetone ft. Cozi Zuehlsdorff',
      image: './assets/img/Nevada.jfif',
      path: './assets/music/Nevada_Vicetone_feat_Cozi_Zuehlsdorff.mp3'
  },
  {
      name: 'Payphone',
      author: 'Alex G',
      image: './assets/img/payphone.jfif',
      path: './assets/music/Payphone_Alex_G.mp3'
  }
  ],
  setConfig: function (key, value) {
    this.config[key] = value;
    // (2/2) Uncomment the line below to use localStorage
    // localStorage.setItem(PlAYER_STORAGE_KEY, JSON.stringify(this.config));
  },
  render: function () {
    const htmls = this.songs.map((song, index) => {
      return `
                        <div class="song ${
                          index === this.currentIndex ? "active" : ""
                        }" data-index="${index}">
                            <div class="thumb"
                                style="background-image: url('${song.image}')">
                            </div>
                            <div class="body">
                                <h3 class="title">${song.name}</h3>
                                <p class="author">${song.author}</p>
                            </div>
                            <div class="option">
                                <i class="fas fa-ellipsis-h"></i>
                            </div>
                        </div>
                    `;
    });
    playlist.innerHTML = htmls.join("");
  },
  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      }
    });
  },
  handleEvents: function () {
    const _this = this;
    const cdWidth = cd.offsetWidth;

    // Xử lý CD quay / dừng
    // Handle CD spins / stops
    const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
      duration: 10000, // 10 seconds
      iterations: Infinity
    });
    cdThumbAnimate.pause();

    // Xử lý phóng to / thu nhỏ CD
    // Handles CD enlargement / reduction
    document.onscroll = function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const newCdWidth = cdWidth - scrollTop;

      cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
      cd.style.opacity = newCdWidth / cdWidth;
    };

    // Xử lý khi click play
    // Handle when click play
    playBtn.onclick = function () {
      if (_this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    };

    // Khi song được play
    // When the song is played
    audio.onplay = function () {
      _this.isPlaying = true;
      player.classList.add("playing");
      cdThumbAnimate.play();
    };

    // Khi song bị pause
    // When the song is pause
    audio.onpause = function () {
      _this.isPlaying = false;
      player.classList.remove("playing");
      cdThumbAnimate.pause();
    };

    // Khi tiến độ bài hát thay đổi
    // When the song progress changes
    audio.ontimeupdate = function () {
      if (audio.duration) {
        const progressPercent = Math.floor(
          (audio.currentTime / audio.duration) * 100
        );
        progress.value = progressPercent;
      }
    };

    // Xử lý khi tua song
    // Handling when seek
    progress.onchange = function (e) {
      const seekTime = (audio.duration / 100) * e.target.value;
      audio.currentTime = seekTime;
    };

    // Khi next song
    // When next song
    nextBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.nextSong();
      }
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    };

    // Khi prev song
    // When prev song
    prevBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.prevSong();
      }
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    };

    // Xử lý bật / tắt random song
    // Handling on / off random song
    randomBtn.onclick = function (e) {
      _this.isRandom = !_this.isRandom;
      _this.setConfig("isRandom", _this.isRandom);
      randomBtn.classList.toggle("active", _this.isRandom);
    };

    // Xử lý lặp lại một song
    // Single-parallel repeat processing
    repeatBtn.onclick = function (e) {
      _this.isRepeat = !_this.isRepeat;
      _this.setConfig("isRepeat", _this.isRepeat);
      repeatBtn.classList.toggle("active", _this.isRepeat);
    };

    // Xử lý next song khi audio ended
    // Handle next song when audio ended
    audio.onended = function () {
      if (_this.isRepeat) {
        audio.play();
      } else {
        nextBtn.click();
      }
    };

    // Lắng nghe hành vi click vào playlist
    // Listen to playlist clicks
    playlist.onclick = function (e) {
      const songNode = e.target.closest(".song:not(.active)");

      if (songNode || e.target.closest(".option")) {
        // Xử lý khi click vào song
        // Handle when clicking on the song
        if (songNode) {
          _this.currentIndex = Number(songNode.dataset.index);
          _this.loadCurrentSong();
          _this.render();
          audio.play();
        }

        // Xử lý khi click vào song option
        // Handle when clicking on the song option
        if (e.target.closest(".option")) {
        }
      }
    };
  },
  scrollToActiveSong: function () {
    setTimeout(() => {
      $(".song.active").scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }, 300);
  },
  loadCurrentSong: function () {
    heading.textContent = this.currentSong.name;
    cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
    audio.src = this.currentSong.path;
  },
  loadConfig: function () {
    this.isRandom = this.config.isRandom;
    this.isRepeat = this.config.isRepeat;
  },
  nextSong: function () {
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0;
    }
    this.loadCurrentSong();
  },
  prevSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.songs.length - 1;
    }
    this.loadCurrentSong();
  },
  playRandomSong: function () {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.songs.length);
    } while (newIndex === this.currentIndex);

    this.currentIndex = newIndex;
    this.loadCurrentSong();
  },
  start: function () {
    // Gán cấu hình từ config vào ứng dụng
    // Assign configuration from config to application
    this.loadConfig();

    // Định nghĩa các thuộc tính cho object
    // Defines properties for the object
    this.defineProperties();

    // Lắng nghe / xử lý các sự kiện (DOM events)
    // Listening / handling events (DOM events)
    this.handleEvents();

    // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
    // Load the first song information into the UI when running the app
    this.loadCurrentSong();

    // Render playlist
    this.render();

    // Hiển thị trạng thái ban đầu của button repeat & random
    // Display the initial state of the repeat & random button
    randomBtn.classList.toggle("active", this.isRandom);
    repeatBtn.classList.toggle("active", this.isRepeat);
  }
};
app.start();

