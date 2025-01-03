const AppendHomePage = () => {
  const Content = document.getElementById("Content");
  const Heading = document.createElement("h1");
  const PageContainer = document.createElement("div");

  PageContainer.classList.add("page-container");

  Heading.textContent = "Banh mi Anna";
  Heading.classList.add("homepage-heading");

  PageContainer.append(Heading);
  Content.append(PageContainer);

  return AppendHomePage;
};

export { AppendHomePage };
