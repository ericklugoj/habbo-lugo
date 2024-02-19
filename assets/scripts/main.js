const playButton = document.getElementById('play');

playButton.addEventListener('click', () => {
  const windowFeatures = 'width=750,height=560';
  const serverUrl = 'http://ec2-35-175-153-129.compute-1.amazonaws.com/';

  window.open(serverUrl, 'habboLugo', windowFeatures);
});
