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

  async callMethod(name) {
    const result = await fetch(`${this.url}/api${name}`);
    return await result.json();
  }
}

const api = new Api(URL);

export default api;
