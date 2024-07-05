// The debounce function receives our function as a parameter
const debounce = (fn) => {
    // This holds the requestAnimationFrame reference, so we can cancel it if we wish
    let frame;

    // The debounce function returns a new function that can receive a variable number of arguments
    return (...params) => {
        // If the frame variable has been defined, clear it now, and queue for next frame
        if (frame) {
            cancelAnimationFrame(frame);
        }

        // Queue our function call for the next frame
        frame = requestAnimationFrame(() => {
            // Call our function and pass any params we received
            fn(...params);
        });
    };
};
// Reads out the scroll position and stores it in the data attribute
// so we can use it in our stylesheets
const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
};

// Listen for new scroll events, here we debounce our `storeScroll` function
document.addEventListener('scroll', debounce(storeScroll));

// Update scroll position for first time
storeScroll();
document.addEventListener('scroll', debounce(storeScroll), { passive: true });
document.addEventListener(
 'DOMContentLoaded', () => {
  const addBookmarkBtn = document
   .getElementById('addBookmarkBtn');
  const bookmarkForm = document
   .getElementById('bookmarkForm');
  const saveBookmarkBtn = document
   .getElementById(
    'saveBookmarkBtn');
  const bookmarkUrl = document
   .getElementById('bookmarkUrl');
  const bookmarksList = document
   .getElementById('bookmarksList');

  // Show the form to add a bookmark
  addBookmarkBtn.addEventListener(
   'click', () => {
    bookmarkForm.style.display =
     'block';
   });

  // Save the bookmark
  saveBookmarkBtn.addEventListener(
   'click', () => {
    const url = bookmarkUrl.value;
    if (url) {
     saveBookmark(url);
     bookmarkUrl.value = '';
     bookmarkForm.style.display =
      'none';
     displayBookmarks();
    } else {
     alert(
      'Please enter a valid URL.');
    }
   });
     // Save bookmark to local storage
  function saveBookmark(url) {
   let bookmarks = JSON.parse(
    localStorage.getItem(
     'bookmarks')) || [];
   bookmarks.push(url);
   localStorage.setItem('bookmarks',
    JSON.stringify(bookmarks));
  }

  // Delete bookmark from local storage
  function deleteBookmark(url) {
   let bookmarks = JSON.parse(
    localStorage.getItem(
     'bookmarks')) || [];
   bookmarks = bookmarks.filter(
    bookmark => bookmark !== url);
   localStorage.setItem('bookmarks',
    JSON.stringify(bookmarks));
   displayBookmarks();
  }

  // Display bookmarks
  function displayBookmarks() {
   bookmarksList.innerHTML = '';
   let bookmarks = JSON.parse(
    localStorage.getItem(
     'bookmarks')) || [];
   bookmarks.forEach(bookmark => {
    const li = document
     .createElement('li');
    li.textContent = bookmark;
    const deleteBtn = document
     .createElement('button');
    deleteBtn.textContent =
     'Delete';
    deleteBtn.className =
     'deleteBookmarkBtn';
    deleteBtn.addEventListener(
     'click', () =>
     deleteBookmark(bookmark));
    li.appendChild(deleteBtn);
    bookmarksList.appendChild(li);
   });
  }

  // Initial display of bookmarks
  displayBookmarks();
 });
  //functions for navbar
document.getElementById("NavSearchBtn").onclick = function() {
    
document.getElementById("BookmarksPage").style.display = "none";
    document.getElementById("GeminiPage").style.display = "none";
    document.getElementById("translatePage").style.display = "none";
    };

document.getElementById("NavGeminiBtn").onclick = function() {
    
document.getElementById("BookmarksPage").style.display = "none";
    document.getElementById("GeminiPage").style.display = "block";
    document.getElementById("translatePage").style.display = "none";
    };

document.getElementById("NavBookmarksBtn").onclick = function() {
    
document.getElementById("BookmarksPage").style.display = "block";
    document.getElementById("GeminiPage").style.display = "none";
    document.getElementById("translatePage").style.display = "none";
    };

document.getElementById("NavTranslateBtn").onclick = function() {
    
document.getElementById("translatePage").style.display = "block";
    document.getElementById("GeminiPage").style.display = "none";

document.getElementById("BookmarksPage").style.display = "none";
    };

document.getElementById("NavAboutBtn").onclick = function() {
    
document.getElementById("aboutPage").style.display = "block";
};


// close btn
document.getElementById("ClosePagesOne").onclick = function() {
    document.getElementById("aboutPage").style.display = "none";
    document.getElementById("BookmarksPage").style.display = "none";
};
document.getElementById("ClosePagesTwo").onclick = function() {
    document.getElementById("aboutPage").style.display = "none";
    document.getElementById("BookmarksPage").style.display = "none";
};
