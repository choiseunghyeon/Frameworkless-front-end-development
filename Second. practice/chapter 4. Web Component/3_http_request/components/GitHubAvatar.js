const ERROR_IMAGE = "http://127.0.0.1:8080/Second.%20practice/chapter%204.%20Web%20Component/3_http_request/image/false.png";
const LOADING_IMAGE = "http://127.0.0.1:8080/Second.%20practice/chapter%204.%20Web%20Component/3_http_request/image/load.png";
const AVATAR_LOAD_COMPLETE = "AVATAR_LOAD_COMPLETE";
const AVATAR_LOAD_ERROR = "AVATAR_LOAD_ERROR";

export const EVENTS = {
  AVATAR_LOAD_COMPLETE,
  AVATAR_LOAD_ERROR,
};

const getGitHubAvatarUrl = async user => {
  if (!user) {
    return;
  }

  const url = `https://api.github.com/users/${user}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();
  return data.avatar_url;
};

export default class GitHubAvatar extends HTMLElement {
  constructor() {
    super();
    this.url = LOADING_IMAGE;
  }

  get user() {
    return this.getAttribute("user");
  }

  set user(value) {
    return this.setAttribute("user", value);
  }

  onLoadAvatarComplete() {
    const event = new CustomEvent(AVATAR_LOAD_COMPLETE, {
      detail: {
        avatar: this.url,
      },
    });

    this.dispatchEvent(event);
  }

  onLoadAvatarError(error) {
    const event = new CustomEvent(AVATAR_LOAD_ERROR, {
      detail: {
        error,
      },
    });

    this.dispatchEvent(event);
  }

  render() {
    window.requestAnimationFrame(() => {
      this.innerHTML = "";
      const img = document.createElement("img");
      img.src = this.url;
      this.appendChild(img);
    });
  }

  async loadNewAvatar() {
    const { user } = this;

    if (!user) {
      return;
    }

    try {
      this.url = await getGitHubAvatarUrl(user);
      this.onLoadAvatarComplete();
    } catch (e) {
      this.url = ERROR_IMAGE;
      this.onLoadAvatarError(e);
    }

    this.render();
  }

  connectedCallback() {
    this.render();
    this.loadNewAvatar();
  }
}
