console.log("connected");
// step-01

const loadCategory = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
  );
  const data = await response.json();
  // console.log(data.data.news_category);

  // step-02
  const categoryNavbar = document.getElementById("category-navbar");
  const newsCategoryArray = data.data.news_category;
  newsCategoryArray.forEach((item) => {
    // console.log(item);
    const div = document.createElement("div");
    div.innerHTML = `
                  <button 
                          onclick=loadNews('${item.category_id}') class="category-btn">
                          ${item.category_name}
                  </button>
    `;
    categoryNavbar.append(div);
  });
};

// step-03
const loadNews = async (catId) => {
  console.log(catId);
  const response = await fetch(
    "https://openapi.programming-hero.com/api/news/category/01"
  );
  const data = await response.json();
  // console.log(data.data);

  // step-04
  const newsContainer = document.getElementById("news-container");
  // console.log(newsContainer);
  const newsCardArray = data.data;
  newsCardArray.forEach((element) => {
    // console.log(element);
    const div = document.createElement("div");
    div.classList.add("single-news");
    div.innerHTML = `
        <div class="news-photo">
            <img src="${element.image_url}" />
        </div>

        <div class="news-info">
            <div class="news-header">
                <h4>
                    ${element.title}
                </h4>
                <p class="news-badge">
                    ${element.rating.badge}
                    <sup>
                        <span class="news-rating">${
                          element.rating.number
                        }</span>
                    </sup>
                </p>
            </div>
            <p>${element.details.slice(0, 300)}</p>
            <div class="news-footer">
                <div class="author">
                    <img class="author-img" src="${element.author.img}" />
                    <div>
                        <h6>${element.author.name}</h6>
                        <p>Date: ${element.author.published_date}</p>
                    </div>
                </div>
                <div class="views">
                    <img class="eye-view"
                    src="https://uxwing.com/wp-content/themes/uxwing/download/health-sickness-organs/view-icon.png"/>
                    <p>${element.total_view}</p>
                </div>
                <div class="details-btn-container">
                    <button class="details-btn">Details</button>
                </div>
            </div>
        </div>
    `;
    newsContainer.append(div);
  });
};

// function invocation
loadCategory();
loadNews();
