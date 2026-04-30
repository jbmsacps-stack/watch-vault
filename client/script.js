const themeToggle = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    const isLight = document.body.classList.contains("light-mode");

    localStorage.setItem("theme", isLight ? "light" : "dark");

    themeToggle.setAttribute(
      "aria-label",
      isLight ? "Switch to dark mode" : "Switch to light mode"
    );

    document.body.classList.add("theme-switching");
    themeToggle.classList.add("clicked");

    setTimeout(() => {
      document.body.classList.remove("theme-switching");
      themeToggle.classList.remove("clicked");
    }, 450);
  });
}

const emailEl = document.querySelector(".email-display");

if (emailEl) {
  emailEl.addEventListener("click", () => {
    navigator.clipboard.writeText("jbmsacps@gmail.com").then(() => {
      emailEl.textContent = "Copied!";
    });

    setTimeout(() => {
      emailEl.textContent = "jbmsacps@gmail.com";
    }, 1200);
  });
}

const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const searchPanel = document.querySelector(".search-panel");
const exploreGrid = document.getElementById("exploreGrid");

if (searchInput && searchPanel) {
  searchInput.addEventListener("focus", () => {
    searchPanel.classList.add("active");
  });

  searchInput.addEventListener("blur", () => {
    searchPanel.classList.remove("active");
  });
}

if (searchForm && searchInput && exploreGrid) {
  searchForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const query = searchInput.value.trim();

    if (query === "") {
      exploreGrid.innerHTML = `<p class="empty-message">Type something to search.</p>`;
      return;
    }

    exploreGrid.innerHTML = `<p class="empty-message">Searching...</p>`;

    try {
      const response = await fetch(
<<<<<<< HEAD
        `/api/search?q=${encodeURIComponent(query)}`
=======
        `http://localhost:5000/api/search?q=${encodeURIComponent(query)}`
>>>>>>> 20f8f0b (Initial WatchVault project)
      );

      const data = await response.json();

      if (data.Response === "False") {
        exploreGrid.innerHTML = `<p class="empty-message">${data.Error}</p>`;
        return;
      }

      displayResults(data.Search);
    } catch (error) {
      exploreGrid.innerHTML = `<p class="empty-message">Something went wrong. Try again.</p>`;
      console.error(error);
    }
  });

  loadTrendingTitles();
}

async function displayResults(items) {
  if (!exploreGrid) return;

  exploreGrid.innerHTML = `<p class="empty-message">Loading details...</p>`;

  const detailedItems = await Promise.all(
    items.slice(0, 8).map(async (item) => {
      const res = await fetch(
<<<<<<< HEAD
        `/api/search?id=${item.imdbID}`
=======
        `http://localhost:5000/api/search?id=${item.imdbID}`
>>>>>>> 20f8f0b (Initial WatchVault project)
      );
      return res.json();
    })
  );

  exploreGrid.innerHTML = detailedItems
    .map((item) => {
      const poster =
        item.Poster !== "N/A" ? item.Poster : "images/no-poster.jpg";

      const plot = item.Plot !== "N/A" ? item.Plot : "No description available.";
      const genre = item.Genre !== "N/A" ? item.Genre : item.Type;

      return `
  <article 
  class="explore-card"
  data-id="${item.imdbID}"
  data-title="${item.Title}"
  data-year="${item.Year}"
  data-genre="${genre}"
  data-plot="${plot}"
  data-poster="${poster}"
  data-type="${item.Type}"
>
    <img src="${poster}" alt="${item.Title} poster">

    <div class="explore-card-body">
      <span>${item.Type}</span>
      <h3>${item.Title}</h3>
      <p>${item.Year} • ${genre}</p>
      <button class="add-list-btn" type="button">Add to List</button>
    </div>
  </article>
`;
    })
    .join("");
}

async function loadTrendingTitles() {
  if (!exploreGrid) return;

  exploreGrid.innerHTML = `<p class="empty-message">Loading trending picks...</p>`;

  try {
    const trendingQueries = ["batman", "naruto", "breaking bad", "dune"];
    const randomQuery =
      trendingQueries[Math.floor(Math.random() * trendingQueries.length)];

    const response = await fetch(
<<<<<<< HEAD
      `/api/search?q=${encodeURIComponent(randomQuery)}`
=======
      `http://localhost:5000/api/search?q=${encodeURIComponent(randomQuery)}`
>>>>>>> 20f8f0b (Initial WatchVault project)
    );

    const data = await response.json();

    if (data.Response === "False") {
      exploreGrid.innerHTML = `<p class="empty-message">No trending picks found.</p>`;
      return;
    }

    displayResults(data.Search);
  } catch (error) {
    exploreGrid.innerHTML = `<p class="empty-message">Could not load trending picks.</p>`;
    console.error(error);
  }
}

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.textContent.toLowerCase();
    const cards = document.querySelectorAll(".explore-card");

    cards.forEach((card) => {
      const type = card.dataset.type;

      if (filter === "all") {
        card.style.display = "flex";
      } else if (filter === "movies" && type === "movie") {
        card.style.display = "flex";
      } else if (filter === "series" && type === "series") {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});

const movieModal = document.getElementById("movieModal");
const modalClose = document.getElementById("modalClose");
const modalPoster = document.getElementById("modalPoster");
const modalType = document.getElementById("modalType");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
const modalPlot = document.getElementById("modalPlot");

document.addEventListener("click", (e) => {
  const card = e.target.closest(".explore-card");

  if (!card || !movieModal) return;

  if (e.target.classList.contains("add-list-btn")) {
    return;
  }

  if (!modalPoster || !modalTitle || !modalType || !modalMeta || !modalPlot) return;

  modalPoster.src = card.dataset.poster;
  modalTitle.textContent = card.dataset.title;
  modalType.textContent = card.dataset.type;
  modalMeta.textContent = `${card.dataset.year} • ${card.dataset.genre}`;
  modalPlot.textContent = card.dataset.plot;

  movieModal.classList.add("active");
  document.body.style.overflow = "hidden";
});

if (modalClose) {
  modalClose.addEventListener("click", () => {
    movieModal.classList.remove("active");
    document.body.style.overflow = "";
  });
}

if (movieModal) {
  movieModal.addEventListener("click", (e) => {
    if (e.target === movieModal) {
      movieModal.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
}

document.addEventListener("click", async (e) => {
  if (!e.target.classList.contains("add-list-btn")) return;

  const card = e.target.closest(".explore-card");
  if (!card) return;

  const token = localStorage.getItem("token");

  if (!token) {
    e.target.textContent = "Login Required";

    setTimeout(() => {
      e.target.textContent = "Add to List";
    }, 1200);

    return;
  }

  const item = {
    imdbId: card.dataset.id,
    title: card.dataset.title,
    year: card.dataset.year,
    type: card.dataset.type,
    completed: false
  };

  try {
<<<<<<< HEAD
    const res = await fetch("/api/saved-titles", {
=======
    const res = await fetch("http://localhost:5000/api/saved-titles", {
>>>>>>> 20f8f0b (Initial WatchVault project)
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(item)
    });

    const data = await res.json();

    if (res.ok) {
      e.target.textContent = "Added";
    } else {
      e.target.textContent = data.message || "Already Added";
    }
  } catch (error) {
    e.target.textContent = "Error";
  }

  setTimeout(() => {
    e.target.textContent = "Add to List";
  }, 1200);
});

const savedTitleList = document.getElementById("savedTitleList");

function renderSavedTitles(titles) {
  if (!savedTitleList) return;

  if (titles.length === 0) {
    savedTitleList.innerHTML = `<p class="empty-message">No titles added yet.</p>`;
    return;
  }

  savedTitleList.innerHTML = titles
    .map((item) => {
      return `
        <li class="saved-title-item">
          <input type="checkbox" ${item.completed ? "checked" : ""} data-id="${item._id}">

          <a href="https://www.imdb.com/title/${item.imdbId}" target="_blank">
            ${item.title}
          </a>

          <span>${item.year} • ${item.type}</span>

          <button class="delete-saved-btn" data-delete-saved="${item._id}" type="button">
            Delete
          </button>
        </li>
      `;
    })
    .join("");
}

fetchSavedTitles();

document.addEventListener("change", async (e) => {
  if (!e.target.matches(".saved-title-item input")) return;

  const id = e.target.dataset.id;
  const token = localStorage.getItem("token");

<<<<<<< HEAD
  await fetch(`/api/saved-titles/${id}`, {
=======
  await fetch(`http://localhost:5000/api/saved-titles/${id}`, {
>>>>>>> 20f8f0b (Initial WatchVault project)
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      completed: e.target.checked
    })
  });
});

const customListInput = document.getElementById("customListInput");
const createListBtn = document.getElementById("createListBtn");
const customLists = document.getElementById("customLists");

let lists = [];

function saveLists() {
  localStorage.setItem("watchVaultCustomLists", JSON.stringify(lists));
}

async function updateListInDB(list) {
  const token = localStorage.getItem("token");

<<<<<<< HEAD
  await fetch(`/api/lists/${list._id}`, {
=======
  await fetch(`http://localhost:5000/api/lists/${list._id}`, {
>>>>>>> 20f8f0b (Initial WatchVault project)
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(list)
  });

  fetchLists();
}

async function fetchLists() {
  const token = localStorage.getItem("token");

  if (!customLists || !token) return;
<<<<<<< HEAD
  const res = await fetch("/api/lists", {
=======
  const res = await fetch("http://localhost:5000/api/lists", {
>>>>>>> 20f8f0b (Initial WatchVault project)
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const data = await res.json();

  lists = data;
  renderLists();
}

function renderLists() {
  if (!customLists) return;

  customLists.innerHTML = lists
    .map((list, listIndex) => {
      return `
        <article class="list-card" style="background:${list.color}">
  <div class="list-card-header">
    <div>
      <h3>${list.name}</h3>
      <p>${list.type || "General"}</p>
    </div>

    <button class="list-menu-btn" data-menu="${list._id}" type="button">⋯</button>

    <div class="list-menu" id="menu-${list._id}">
      <button data-rename-list="${list._id}" type="button">Rename</button>
      <button data-change-type="${list._id}" type="button">Change Type</button>

      <div class="menu-colors">
        <span data-color="${list._id}|#1a1a1a" style="background:#1a1a1a"></span>
        <span data-color="${list._id}-#3a1111" style="background:#3a1111"></span>
        <span data-color="${list._id}-#251133" style="background:#251133"></span>
        <span data-color="${list._id}-#10251c" style="background:#10251c"></span>
      </div>

      <button data-delete-list="${list._id}" type="button">Delete List</button>
    </div>
  </div>

  <div class="list-tools">
    <input type="text" placeholder="Add movie or series..." data-list-input="${list._id}">
    <button type="button" data-add-item="${list._id}">Add</button>
  </div>

  <ul class="list-items">
    ${list.items.map((item, itemIndex) => `
      <li>
        <input type="checkbox" ${item.done ? "checked" : ""} data-check="${list._id}|${itemIndex}">
        <span>${item.name}</span>
        <button type="button" data-delete-item="${list._id}|${itemIndex}">Delete</button>
      </li>
    `).join("")}
  </ul>
</article>
      `;
    })
    .join("");
}

if (createListBtn && customListInput) {
  createListBtn.addEventListener("click", async () => {
    const name = customListInput.value.trim();

    if (!name) return;

    const token = localStorage.getItem("token");

<<<<<<< HEAD
    await fetch("/api/lists", {
=======
    await fetch("http://localhost:5000/api/lists", {
>>>>>>> 20f8f0b (Initial WatchVault project)
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        name,
        type: "General",
        color: "rgba(255,255,255,0.04)",
        items: []
      })
    });

    customListInput.value = "";
    fetchLists();
  });
}

document.addEventListener("click", async (e) => {
  if (e.target.dataset.menu) {
    const menu = document.getElementById(`menu-${e.target.dataset.menu}`);
    menu.classList.toggle("active");
  }

  if (e.target.dataset.renameList) {
    openEditModal("rename", e.target.dataset.renameList);
  }

  if (e.target.dataset.changeType) {
    openEditModal("type", e.target.dataset.changeType);
  }

  if (e.target.dataset.addItem) {
    const listId = e.target.dataset.addItem;
    const list = lists.find((l) => l._id === listId);
    if (!list) return;

    const input = document.querySelector(`[data-list-input="${listId}"]`);
    const value = input.value.trim();

    if (!value) return;

    list.items.push({
      name: value,
      done: false
    });

    input.value = "";
    updateListInDB(list);
  }

  if (e.target.dataset.deleteItem) {
    const [listId, itemIndex] = e.target.dataset.deleteItem.split("|");
    const list = lists.find((l) => l._id === listId);
    if (!list) return;

    list.items.splice(itemIndex, 1);
    updateListInDB(list);
  }

  if (e.target.dataset.deleteList) {
    const listId = e.target.dataset.deleteList;
    const token = localStorage.getItem("token");

<<<<<<< HEAD
    await fetch(`/api/lists/${listId}`, {
=======
    await fetch(`http://localhost:5000/api/lists/${listId}`, {
>>>>>>> 20f8f0b (Initial WatchVault project)
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    fetchLists();
  }

  if (e.target.dataset.color) {
    const [listId, color] = e.target.dataset.color.split("|");
    const list = lists.find((l) => l._id === listId);
    if (!list) return;

    list.color = color;
    updateListInDB(list);
  }
});

document.addEventListener("change", (e) => {
  if (e.target.dataset.check) {
    const [listId, itemIndex] = e.target.dataset.check.split("|");

    const list = lists.find((l) => l._id === listId);
    if (!list) return;

    list.items[itemIndex].done = e.target.checked;
    updateListInDB(list);
  }
});

const editListModal = document.getElementById("editListModal");
const editModalTitle = document.getElementById("editModalTitle");
const editListInput = document.getElementById("editListInput");
const cancelEditBtn = document.getElementById("cancelEditBtn");
const saveEditBtn = document.getElementById("saveEditBtn");

let editMode = null;
let editingListIndex = null;

function openEditModal(mode, listId) {
  editMode = mode;
  editingListIndex = listId;

  const list = lists.find((l) => l._id === listId);
  if (!list) return;

  if (mode === "rename") {
    editModalTitle.textContent = "Rename List";
    editListInput.value = list.name;
  }

  if (mode === "type") {
    editModalTitle.textContent = "Change List Type";
    editListInput.value = list.type || "General";
  }

  editListModal.classList.add("active");
  editListInput.focus();
}

function closeEditModal() {
  editListModal.classList.remove("active");
  editMode = null;
  editingListIndex = null;
}

fetchLists();

if (saveEditBtn) {
  saveEditBtn.addEventListener("click", () => {
    const value = editListInput.value.trim();

    if (!value || editingListIndex === null) return;

    const list = lists.find((l) => l._id === editingListIndex);
    if (!list) return;

    if (editMode === "rename") {
      list.name = value;
    }

    if (editMode === "type") {
      list.type = value;
    }

    updateListInDB(list);
    closeEditModal();
  });
}

if (cancelEditBtn) {
  cancelEditBtn.addEventListener("click", closeEditModal);
}

if (editListModal) {
  editListModal.addEventListener("click", (e) => {
    if (e.target === editListModal) {
      closeEditModal();
    }
  });
}

document.getElementById("clearAllBtn")?.addEventListener("click", async () => {
  const token = localStorage.getItem("token");

  const savedItems = document.querySelectorAll(".delete-saved-btn");

  for (const btn of savedItems) {
    const id = btn.dataset.deleteSaved;

<<<<<<< HEAD
    await fetch(`/api/saved-titles/${id}`, {
=======
    await fetch(`http://localhost:5000/api/saved-titles/${id}`, {
>>>>>>> 20f8f0b (Initial WatchVault project)
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  fetchSavedTitles();
});

document.addEventListener("click", async (e) => {
  if (!e.target.dataset.deleteSaved) return;

  const id = e.target.dataset.deleteSaved;
  const token = localStorage.getItem("token");

<<<<<<< HEAD
  await fetch(`/api/saved-titles/${id}`, {
=======
  await fetch(`http://localhost:5000/api/saved-titles/${id}`, {
>>>>>>> 20f8f0b (Initial WatchVault project)
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  fetchSavedTitles();
});
// page enters smoothly
window.addEventListener("load", () => {
  document.body.classList.add("page-in");

  requestAnimationFrame(() => {
<<<<<<< HEAD
    requestAnimationFrame(() => {
      document.body.classList.remove("page-in");
    });
=======
    document.body.classList.remove("page-in");
>>>>>>> 20f8f0b (Initial WatchVault project)
  });
});

// page leaves smoothly
document.querySelectorAll("a[href]").forEach((link) => {
  link.addEventListener("click", function (e) {
    const url = this.getAttribute("href");

    if (
      url.startsWith("http") ||
<<<<<<< HEAD
      url.startsWith("#")
=======
      url.startsWith("#") ||
      url.includes("#")
>>>>>>> 20f8f0b (Initial WatchVault project)
    ) {
      return;
    }

    e.preventDefault();

    document.body.classList.add("page-out");

    setTimeout(() => {
      window.location.href = url;
<<<<<<< HEAD
    }, 350);
=======
    }, 300);
>>>>>>> 20f8f0b (Initial WatchVault project)
  });
});

async function loginUser(email, password) {
<<<<<<< HEAD
  const res = await fetch("/api/auth/login", {
=======
  const res = await fetch("http://localhost:5000/api/auth/login", {
>>>>>>> 20f8f0b (Initial WatchVault project)
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();

  if (data.token) {
    localStorage.setItem("token", data.token);
    alert("Login successful");
    window.location.href = "index.html";
  } else {
    alert(data.message);
  }
}

const signinBtn = document.querySelector(".signin-btn");

if (signinBtn && localStorage.getItem("token")) {
  signinBtn.textContent = "Logout";
  signinBtn.addEventListener("click", () => {
    localStorage.removeItem("token");
    location.reload();
  });
}

const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
    const authMessage = document.getElementById("authMessage");

    try {
<<<<<<< HEAD
      const res = await fetch("/api/auth/login", {
=======
      const res = await fetch("http://localhost:5000/api/auth/login", {
>>>>>>> 20f8f0b (Initial WatchVault project)
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (data.token) {
        localStorage.setItem("token", data.token);
        window.location.href = "index.html";
      } else {
        authMessage.textContent = data.message || "Login failed";
      }
    } catch (error) {
      authMessage.textContent = "Server error. Try again.";
    }
  });
}

const registerForm = document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("registerUsername").value.trim();
    const email = document.getElementById("registerEmail").value.trim();
    const password = document.getElementById("registerPassword").value.trim();
    const msg = document.getElementById("registerMessage");

    try {
<<<<<<< HEAD
      const res = await fetch("/api/auth/register", {
=======
      const res = await fetch("http://localhost:5000/api/auth/register", {
>>>>>>> 20f8f0b (Initial WatchVault project)
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, email, password })
      });

      const data = await res.json();

      if (res.ok) {
        msg.textContent = "Account created! Redirecting...";
        setTimeout(() => {
          window.location.href = "login.html";
        }, 1000);
      } else {
        msg.textContent = data.message || "Something went wrong";
      }
    } catch (err) {
      msg.textContent = "Server error";
    }
  });
}

async function fetchSavedTitles() {
  const token = localStorage.getItem("token");
  if (!token || !savedTitleList) return;

<<<<<<< HEAD
  const res = await fetch("/api/saved-titles", {
=======
  const res = await fetch("http://localhost:5000/api/saved-titles", {
>>>>>>> 20f8f0b (Initial WatchVault project)
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const data = await res.json();

  renderSavedTitles(data);
}