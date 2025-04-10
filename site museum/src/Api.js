import exhibitImgUrl from "./assets/sample-exhibit.png";

class Api {
  constructor(url) {
    this.url = url;
  }

  requestExhibit(id) {
    return id != 1 ? null : {
      id: 1,

      modelSrc: exhibitImgUrl,

      description: {
        title: "Макет девушки, одетой в ненецкую ягушку",

        bits: [
          {
            name: "Описание",
            content: "Ягушка (нен. ной паны) - традиционная ненецкая одежда. В данном случае летний вариант.",
          },

          {
            name: "Материал",
            content: "Сукно",
          },
        ],

        filters: [
          {
            name: "Регион",
            value: "Ямало-Ненецкий автономный округ",
          },

          {
            name: "Район",
            value: "Тазовский",
          },

          {
            name: "Нас. пункт",
            value: "Тазовский",
          },

          {
            name: "Этнос",
            value: "Ненцы",
          },
        ],
      },
    };
  }

  requestExhibits() {
    return [this.requestExhibit(1)];
  }
}

const api = new Api('https://example.com');

export default api;
