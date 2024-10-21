interface Subject {
  add(obs: Observer): void;
  remove(obs: Observer): void;
  notify(): void;
}

interface Observer {
  update(name: string): void;
}

class NewsBar implements Subject {
  private observers: Observer[] = [];
  private news: string = "";

  add(obs: Observer): void {
    this.observers.push(obs);
  }
  remove(obs: Observer): void {
    const obsIndex = this.observers.indexOf(obs);

    if (obsIndex != -1) {
      this.observers.splice(obsIndex, 1);
    }
  }
  notify(): void {
    for (const obs of this.observers) {
      obs.update(this.news);
    }
  }

  addNew(news: string) {
    this.news = news;
  }
}

class Subscriber implements Observer {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  update(name: string): void {
    console.log(`${this.name} got a new : ${name} `);
  }
}

const sub1 = new Subscriber("kinji");
const sub2 = new Subscriber("aymen");
const sub3 = new Subscriber("islam");

const newsbar = new NewsBar();

newsbar.add(sub1);
newsbar.add(sub2);
newsbar.add(sub3);
newsbar.addNew("marikan tga3ret xd");
newsbar.notify();
