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
                  <button class="category-btn">${item.category_name}</button>
    `;
    categoryNavbar.append(div);
  });
};

// step-03


// function invocation
loadCategory();
