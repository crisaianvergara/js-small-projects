// Initialize variables
let currentIndex = 0;
const reviewerImage = document.querySelector(".card-img-top");
const reviewerName = document.querySelector(".card-title");
const reviewerJob = document.querySelector(".card-subtitle");
const reviewerText = document.querySelector(".card-text");

const reviewerInfos = [
  {
    image:
      "https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-2.jpg",
    name: "Anna Smith",
    job: "Web Developer",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, culpa soluta! Atque cupiditate ullam dolore saepe consequuntur natus corporis amet eligendi tenetur reiciendis incidunt, iure quaerat nam dolorum, placeat id.",
  },
  {
    image:
      "https://media.licdn.com/dms/image/D4E12AQG8rSR9BNDLuQ/article-inline_image-shrink_1500_2232/0/1680042487795?e=1713398400&v=beta&t=mghJbjDC_tSxZH2qC1QbHd-tBST0KqwVKjLqw10DX4k",
    name: "Jane Doe",
    job: "Web Designer",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, maiores quas alias reprehenderit, ad ipsum minus possimus soluta nesciunt odit magnam asperiores accusamus voluptas? Error fugiat ut magnam officia laborum.",
  },
  {
    image:
      "https://media.licdn.com/dms/image/D4D08AQE0CXu4hnoe7g/croft-frontend-shrinkToFit1024/0/1646754728586?e=2147483647&v=beta&t=ADkOVwOwmP-4rCH4y0g2_OBFlsszl01TpQPhCgt5SSc",
    name: "John Carter",
    job: "Project Manager",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas voluptatibus necessitatibus quasi ut est ullam nemo voluptatum autem quidem, perferendis corporis fuga maiores nesciunt, esse velit amet eum veniam ipsam.",
  },
  {
    image:
      "https://img.fixthephoto.com/blog/images/gallery/news_preview_mob_image__preview_11368.png",
    name: "Tine Krugger",
    job: "Tech Lead",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quibusdam laudantium a consequatur odit quo, aliquam laborum, veniam, perferendis placeat error quae unde eum asperiores suscipit similique excepturi. Similique, distinctio?",
  },
];

// Get random index
const getRandomIndex = (reviewerInfos) => {
  const randomIndex = Math.floor(Math.random() * reviewerInfos.length);
  return randomIndex;
};

// Change reviewer
const changeReviewer = (index) => {
  const reviewerInfo = reviewerInfos[index];
  reviewerImage.src = reviewerInfo.image;
  reviewerName.textContent = reviewerInfo.name;
  reviewerJob.textContent = reviewerInfo.job;
  reviewerText.textContent = reviewerInfo.text;
};

// Initialize default reviewer
changeReviewer(currentIndex);

document.querySelector(".btn-surprise-me").addEventListener("click", () => {
  const index = getRandomIndex(reviewerInfos);
  changeReviewer(index);
});

document
  .querySelector(".btn-carousel-control-prev")
  .addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = reviewerInfos.length - 1;
    }
    changeReviewer(currentIndex);
  });

document
  .querySelector(".btn-carousel-control-next")
  .addEventListener("click", () => {
    currentIndex++;
    if (currentIndex > reviewerInfos.length - 1) {
      currentIndex = 0;
    }
    changeReviewer(currentIndex);
  });
