const videoFrame = document.querySelector('.about__iframe-video-wrapper');
const playButton = videoFrame.querySelector('.about__video-button');
const videoImageWrapper = videoFrame.querySelector('.about__image');

const videoLink = videoFrame.dataset.video;

// const idVideo = videoLink.substring('https://www.youtube.com/embed/'.length, videoLink.length);


const generateUrl = () => {
  const query = '?rel=0&showinfo=0&autoplay=1';
  return videoLink + query;
};


const createIframe = () => {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('class', 'about__iframe-video');
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('aria-label', 'Видео HtmlAcademy Бесплатные интерактивные онлайн-курсы на Ютубе');
  iframe.setAttribute('allow', 'accelerometer; autoplay; encrypted-media');
  iframe.setAttribute('src', generateUrl());
  iframe.setAttribute('frameborder', '0');

  return iframe;
};

playButton.addEventListener ('click', () => {
  playButton.style.display = 'none';
  videoImageWrapper.style.display = 'none';

  videoFrame.appendChild(createIframe());

  // iframeVideo.addEventListener ('mousedown' ,()=> {
  //   videoImageWrapper.style.display = 'block';
  //   playButton.style.display = 'flex';

  // });
});
