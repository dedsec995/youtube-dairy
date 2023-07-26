// const article = document.querySelector("article");

// // `document.querySelector` may return null if the selector doesn't match anything.
// if (article) {
//   const text = article.textContent;
//   const wordMatchRegExp = /[^\s]+/g; // Regular expression
//   const words = text.matchAll(wordMatchRegExp);
//   // matchAll returns an iterator, convert to array to get word count
//   const wordCount = [...words].length;
//   const readingTime = Math.round(wordCount / 200);
//   const badge = document.createElement("p");
//   // Use the same styling as the publish information in an article's header
//   badge.classList.add("color-secondary-text", "type--caption");
//   badge.textContent = `⏱️ ${readingTime} minutess 2 read`;

//   // Support for API reference docs
//   const heading = article.querySelector("h1");
//   // Support for article docs with date
//   const date = article.querySelector("time")?.parentNode;

//   (date ?? heading).insertAdjacentElement("afterend", badge);
// }


// Function to replace the placeholder text
function replacePlaceholder() {
    const searchInput = document.querySelector('input#search');
    if (searchInput) {
      searchInput.placeholder = 'Amadeus';
    }
  }
  
  // MutationObserver configuration
  const observerConfig = {
    attributes: true, // Watch for attribute changes
    attributeFilter: ['placeholder'], // Only observe the 'placeholder' attribute
  };
  
  // Callback function for MutationObserver
  const observerCallback = function (mutationsList, observer) {
    for (const mutation of mutationsList) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'placeholder') {
        replacePlaceholder();
        observer.disconnect(); // Disconnect the observer after the change is made
      }
    }
  };
  
  // Start observing the input element for changes in the 'placeholder' attribute
  const searchInput = document.querySelector('input#search');
  if (searchInput) {
    const observer = new MutationObserver(observerCallback);
    observer.observe(searchInput, observerConfig);
  }
  
  // Call the function to replace the placeholder immediately
  replacePlaceholder();
  

// const searchInput = document.querySelector('input#search');
// if (searchInput) {
//     searchInput.placeholder = 'Amadeus';
//   }

