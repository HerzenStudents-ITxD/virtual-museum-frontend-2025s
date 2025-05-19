import exhibitImgUrl from "./assets/sample-exhibit.png";

const URL = "http://localhost:8000";

class Api {
  constructor(url) {
    this.url = url;
  }

  async getCultureArticles() {
    return this.callMethod("/culture");
  }

  async getCultureArticle(id) {
    return this.callMethod(`/culture/${id}`);
  }

  async getExhibits() {
    return this.callMethod("/exhibits");
  }

  async getExhibit(id) {
    return this.callMethod(`/exhibits/${id}`);
  }

  async authenticate(username, password) {
    return this.callMethod("/auth/login", {
      method: "POST",

      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },

      body: new URLSearchParams({
        username,
        password
      }),
    });
  }

  async callMethod(name, options = {}) {
    const result = await fetch(`${this.url}/api${name}`, options);
    const body = await result.json();

    if (result.status !== 200) {
      throw new Error(JSON.stringify(body));
    }

    return body;
  }
}

const api = new Api(URL);

export default api;
