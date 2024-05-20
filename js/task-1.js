const itemsCount = document.querySelectorAll(".item");
console.log("Categories count:" + itemsCount.length);
itemsCount.forEach((item) => {
  const itemH = item.querySelector("h2").textContent;
  console.log("Category: " + itemH);
  const itemsInCateg = item.querySelectorAll("ul li");
  console.log(`Elements:` + itemsInCateg.length);
});
