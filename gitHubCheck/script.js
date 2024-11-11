// "https://api.github.com/users/octocat"
const searchBtn = document.getElementById("search-btn");
const profileContainer = document.querySelector("#profileContainer");
const loading = document.getElementById("loading");

searchBtn.addEventListener("click", () => {
  profileContainer.innerHTML = "";
  let input = document.getElementById("searchInput");
  let a = input.value;
  getDetail(a);
});

let getDetail = async (username) => {
  try {
    loading.innerText = "loading.......";
    loading.style.color = "black";
    let a = await fetch(`https://api.github.com/users/${username}`);
    let data = await a.json();
    if (!a.ok) {
      loading.style.color = "red";
      throw new Error("API call failed");
    } else {
      loading.innerText = "";
      profileContainer.innerHTML = `
      <div class="profile-box">
          <div class="top-section">
            <div class="left">
              <div class="avatar">
                <img
                  id="myimg"
                  src=${data.avatar_url}
                  alt="avatar"
                />
              </div>
              <div class="self">
                <h1 id="name">${data.name ? data.name : "NULL"}</h1>
                <h1 id="userid">${data.login}</h1>
              </div>
            </div>
            <button class="primary-btn" id="getToGit" ">Check Profile</button>
          </div>
          <div class="about">
            <h2>About</h2>
            <p>${data.bio ? data.bio : "NULL"}</p>
          </div>
          <div class="status">
            <div class="status-item">
              <h3>Followers</h3>
              <p id="followers">${data.followers}</p>
            </div>
            <div class="status-item">
              <h3>Followings</h3>
              <p id="followings">${data.following}</p>
            </div>
            <div class="status-item">
              <h3>Repos</h3>
              <p id="repos">${data.public_repos}</p>
            </div>
          </div>
        </div>
      `;
      document.querySelector("#getToGit").addEventListener("click", () => {
        window.location.href = data.html_url;
      });
    }
  } catch (error) {
    loading.innerText = "";
    profileContainer.innerHTML = `
    <p> This id doesn't exists.</p>
    `;
    console.log(error);
  }
};
