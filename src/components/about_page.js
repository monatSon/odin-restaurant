const AppendAboutPage = () => {
  const Content = document.getElementById("Content");
  const Heading = document.createElement("h1");
  const PageContainer = document.createElement("div");

  PageContainer.classList.add("page-container");

  Heading.textContent = "About";
  Heading.classList.add("homepage-heading");

  PageContainer.append(Heading);
  Content.append(PageContainer);

  return AppendAboutPage;
};

export { AppendAboutPage };
