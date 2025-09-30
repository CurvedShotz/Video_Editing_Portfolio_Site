// console.log("Welcome to my portfolio!");

const videos = [
    "https://youtube.com/embed/DDKrBUhWlgc?si=SCUe6A8dTysF7NJy",
    "https://youtube.com/embed/7S87uZthYsM?si=iNrgRreV6AIjDulZ",
    "https://youtube.com/embed/H8k1cBJ2QEU?si=5h1oCitHZdrhpRvf"
  ];
  
  let index = 0;
  const frame = document.getElementById('videoFrame');
  
  document.getElementById('nextBtn').onclick = () => {
    index = (index + 1) % videos.length;
    frame.src = videos[index];
  };
  
  document.getElementById('prevBtn').onclick = () => {
    index = (index - 1 + videos.length) % videos.length;
    frame.src = videos[index];
  };
  