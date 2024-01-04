const closeImageEditorButton = document.querySelector(
  "#closeImageEditorButton"
);
const closeTextEditorButton = document.querySelector("#closeTextEditorButton");
const editMemeImageButton = document.querySelector("#editMemeImageButton");
const editMemeTextButton = document.querySelector("#editMemeTextButton");
const asideImageEditor = document.querySelector("#asideImageEditor");
const asideTextEditor = document.querySelector("#asideTextEditor");
const imageForm = document.querySelector("#imageForm");
const textForm = document.querySelector("#textForm");
const memeImage = document.querySelector(".meme-image");
const urlInput = document.querySelector("#url");
const imageBackgroundColorInput = document.querySelector(
  "#imageBackgroundColor"
);
const brightInput = document.querySelector("#bright");
const opacityInput = document.querySelector("#opacity");
const contrastInput = document.querySelector("#contrast");
const blurInput = document.querySelector("#blur");
const grayscaleInput = document.querySelector("#grayscale");
const sepiaInput = document.querySelector("#sepia");
const hueInput = document.querySelector("#hue");
const saturatedInput = document.querySelector("#saturated");
const negativeInput = document.querySelector("#negative");
const restoreFiltersButton = document.querySelector(".restore-filters-button");
const topTextEditor = document.querySelector("#topTextEditor");
const bottomTextEditor = document.querySelector("#bottomTextEditor");
const memeTopText = document.querySelector(".meme-top-text");
const memeBottomText = document.querySelector(".meme-bottom-text");
const withoutTopTextCheckbox = document.querySelector("#withoutTopText");
const withoutBottomTextCheckbox = document.querySelector("#withoutBottomText");
const fontFamiliesSelect = document.querySelector("#fontFamilies");
const fontSizeInput = document.querySelector("#fontSize");
const alignLeftButton = document.querySelector("#alignLeft");
const alignCenterButton = document.querySelector("#alignCenter");
const alignRightButton = document.querySelector("#alignRight");
const textColorInput = document.querySelector("#textColor");
const textBackgroundColorInput = document.querySelector("#textBackgroundColor");
const transparentBackgroundCheckbox = document.querySelector(
  "#transparentBackground"
);
const noOutlineButton = document.querySelector("#noOutline");
const lightOutlineButton = document.querySelector("#lightOutline");
const darkOutlineButton = document.querySelector("#darkOutline");
const textSpacingInput = document.querySelector("#textSpacing");
const textLineHeightSelect = document.querySelector("#textLineHeight");
const downloadButton = document.querySelector(".download-button");

imageForm.onsubmit = (e) => {
  e.preventDefault();
};

textForm.onsubmit = (e) => {
  e.preventDefault();
};

// Open and close aside forms

editMemeTextButton.classList.add("active");

const closeImageEditor = () => {
  asideImageEditor.classList.add("hidden");
  asideTextEditor.classList.remove("hidden");
  editMemeTextButton.classList.add("active");
  editMemeImageButton.classList.remove("active");
};

closeImageEditorButton.addEventListener("click", closeImageEditor);
editMemeTextButton.addEventListener("click", closeImageEditor);

const closeTextEditor = () => {
  asideTextEditor.classList.add("hidden");
  asideImageEditor.classList.remove("hidden");
  editMemeImageButton.classList.add("active");
  editMemeTextButton.classList.remove("active");
};

closeTextEditorButton.addEventListener("click", closeTextEditor);
editMemeImageButton.addEventListener("click", closeTextEditor);

// Image settings

urlInput.onchange = () => {
  const backgroundImage = urlInput.value;
  memeImage.style.backgroundImage = `url(${backgroundImage})`;
};

imageBackgroundColorInput.oninput = () => {
  const backgroundColor = imageBackgroundColorInput.value;
  memeImage.style.backgroundColor = backgroundColor;
};

const updateFilters = () => {
  memeImage.style.filter = `
    brightness(${brightInput.value}) 
    opacity(${opacityInput.value})
    contrast(${contrastInput.value})
    grayscale(${grayscaleInput.value}%)
    blur(${blurInput.value}px)
    sepia(${sepiaInput.value}%)
    hue-rotate(${hueInput.value}deg)
    saturate(${saturatedInput.value}%)
    invert(${negativeInput.value})
    `;
};

brightInput.addEventListener("change", updateFilters);
opacityInput.addEventListener("change", updateFilters);
contrastInput.addEventListener("change", updateFilters);
blurInput.addEventListener("change", updateFilters);
grayscaleInput.addEventListener("change", updateFilters);
sepiaInput.addEventListener("change", updateFilters);
hueInput.addEventListener("change", updateFilters);
saturatedInput.addEventListener("change", updateFilters);
negativeInput.addEventListener("change", updateFilters);

restoreFiltersButton.onclick = () => {
  memeImage.style.filter = "none";
  brightInput.value = 1;
  opacityInput.value = 1;
  contrastInput.value = 100;
  blurInput.value = 0;
  grayscaleInput.value = 0;
  sepiaInput.value = 0;
  hueInput.value = 0;
  saturatedInput.value = 100;
  negativeInput.value = 0;
};

// Text settings

topTextEditor.oninput = () => {
  memeTopText.textContent = topTextEditor.value;
};

withoutTopTextCheckbox.onchange = () => {
  if (withoutTopTextCheckbox.checked) {
    memeTopText.classList.add("hidden");
  } else {
    memeTopText.classList.remove("hidden");
  }
};

bottomTextEditor.oninput = () => {
  memeBottomText.textContent = bottomTextEditor.value;
};

withoutBottomTextCheckbox.onchange = () => {
  if (withoutBottomTextCheckbox.checked) {
    memeBottomText.classList.add("hidden");
  } else {
    memeBottomText.classList.remove("hidden");
  }
};

fontFamiliesSelect.onchange = () => {
  const fontFamily = fontFamiliesSelect.value;
  if (fontFamily === "arial") {
    memeTopText.style.fontFamily = "Arial";
    memeBottomText.style.fontFamily = "Arial";
  } else if (fontFamily === "montserrat") {
    memeTopText.style.fontFamily = "Montserrat";
    memeBottomText.style.fontFamily = "Montserrat";
  } else if (fontFamily === "american-typewriter") {
    memeTopText.style.fontFamily = "American Typewriter";
    memeBottomText.style.fontFamily = "American Typewriter";
  } else if (fontFamily === "monospace") {
    memeTopText.style.fontFamily = "Monospace";
    memeBottomText.style.fontFamily = "Monospace";
  } else if (fontFamily === "comic-sans") {
    memeTopText.style.fontFamily = "Comic Sans MS";
    memeBottomText.style.fontFamily = "Comic Sans MS";
  } else if (fontFamily === "impact") {
    memeTopText.style.fontFamily = "Impact";
    memeBottomText.style.fontFamily = "Impact";
  } else if (fontFamily === "verdana") {
    memeTopText.style.fontFamily = "Verdana";
    memeBottomText.style.fontFamily = "Verdana";
  }
};

fontSizeInput.oninput = () => {
  const fontSize = `${fontSizeInput.value}px`;
  memeTopText.style.fontSize = fontSize;
  memeBottomText.style.fontSize = fontSize;
};

alignLeftButton.onclick = () => {
  memeTopText.style.textAlign = "left";
  memeBottomText.style.textAlign = "left";
};

alignCenterButton.onclick = () => {
  memeTopText.style.textAlign = "center";
  memeBottomText.style.textAlign = "center";
};

alignRightButton.onclick = () => {
  memeTopText.style.textAlign = "right";
  memeBottomText.style.textAlign = "right";
};

textColorInput.oninput = () => {
  const textColor = textColorInput.value;
  memeTopText.style.color = textColor;
  memeBottomText.style.color = textColor;
};

textBackgroundColorInput.oninput = () => {
  const textBackgroundColor = textBackgroundColorInput.value;
  memeTopText.style.backgroundColor = textBackgroundColor;
  memeBottomText.style.backgroundColor = textBackgroundColor;
};

transparentBackgroundCheckbox.onchange = () => {
  const textBackgroundColor = textBackgroundColorInput.value;
  if (transparentBackgroundCheckbox.checked) {
    memeTopText.style.backgroundColor = "transparent";
    memeBottomText.style.backgroundColor = "transparent";
  } else {
    memeTopText.style.backgroundColor = textBackgroundColor;
    memeBottomText.style.backgroundColor = textBackgroundColor;
  }
};

textBackgroundColorInput.value = "#ffffff";

noOutlineButton.onclick = () => {
  memeTopText.style.textShadow = "none";
  memeBottomText.style.textShadow = "none";
};

lightOutlineButton.onclick = () => {
  memeTopText.style.textShadow = "1px 1px #fff";
  memeBottomText.style.textShadow = "1px 1px #fff";
};

darkOutlineButton.onclick = () => {
  memeTopText.style.textShadow = "1px 1px #000";
  memeBottomText.style.textShadow = "1px 1px #000";
};

textSpacingInput.onchange = () => {
  const textPadding = `${textSpacingInput.value}px`;
  memeTopText.style.padding = textPadding;
  memeBottomText.style.padding = textPadding;
};

textLineHeightSelect.onchange = () => {
  const lineHeight = textLineHeightSelect.value;
  if (lineHeight === "1") {
    memeTopText.style.lineHeight = "1";
    memeBottomText.style.lineHeight = "1";
  } else if (lineHeight === "1.2") {
    memeTopText.style.lineHeight = "1.2";
    memeBottomText.style.lineHeight = "1.2";
  } else if (lineHeight === "1.5") {
    memeTopText.style.lineHeight = "1.5";
    memeBottomText.style.lineHeight = "1.5";
  } else if (lineHeight === "2") {
    memeTopText.style.lineHeight = "2";
    memeBottomText.style.lineHeight = "2";
  } else if (lineHeight === "2.5") {
    memeTopText.style.lineHeight = "2.5";
    memeBottomText.style.lineHeight = "2.5";
  }
};

// Download function

downloadButton.onclick = () => {
  console.log("Download meme");
};
