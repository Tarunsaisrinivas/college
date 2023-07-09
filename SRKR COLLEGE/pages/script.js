
//Number increase starts 
function animateCounterNumbers() {
    var counterElements = document.querySelectorAll('.counter-numbers');
    
    counterElements.forEach(function(element) {
      var targetNumber = parseInt(element.getAttribute('data-number'));
      var startNumber = 0;
      var intervalDuration = 1; // Adjust the interval duration (in milliseconds) as needed

      var interval = setInterval(function() {
        if (startNumber >= targetNumber) {
          clearInterval(interval);
          return;
        }

        startNumber++;
        element.textContent = startNumber;
      }, intervalDuration);
    });
  }

  function handleIntersection(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        animateCounterNumbers();
        observer.unobserve(entry.target);
      }
    });
  }

  var sectionWorkData = document.querySelector('.section-work-data');
  var observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

  observer.observe(sectionWorkData);

  //Number increase ending

  //typing useEffect(() => {
    
  const text = document.querySelector(".second-text");

  const textLoad = () => {
    setTimeout(() => {
      text.textContent = "World of Inovation";

    },0);
    setTimeout(() => {
      text.textContent = "Blogg";

    },2000);
  }
  textLoad();
  setInterval(textLoad,2000);


  //navbar animation: 
  window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


// Flash news
var pace = 5000; //Pace show

//News and links
const news = [
  { news: "Lorem ipsum dolor sit ame  adipiscing elit. ",
    link: "https://www.lipsum.com/news1"
  },
  {
    news: "Mauris in euismod lacus, in elementum mauris nec sem sagittis",
     link: "https://www.lipsum.com/news1"
  },
    {
    news: "Fusce egestas orci elit, sed maximus dolor vestibulum nec.",
     link: "https://www.lipsum.com/news1"
  },
    {
    news: "In tincidunt ullamcorper justo, nec venenatis sapien dictum et. ",
    link: "https://www.lipsum.com/news1"
  },
];



const shownews = news.map((key) => key.news);
const newslink = news.map((key) => key.link);

//Show News and links
function allnews() {
  for (let i = 0; i < news.length; i++) {
    setTimeout(function () {
      $("#text").fadeOut("slow", function () {
        $("#text").html("<a href=" + newslink[i] + ">" + shownews[i] + "</a>");
      });
      $("#text").fadeIn();
    }, pace * i);
}
  }
allnews();
