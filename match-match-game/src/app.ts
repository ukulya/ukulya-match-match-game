import {CardsField} from "./components/cards-field/cards-field";
import {Game} from "./components/game/game";
import {ImageCategoryModel} from "./models/image-category-model";

export class App{ // главный класс приложения
  // приватное поле - нельзя изменять ссылку на него - любой HTML елемент
  // private readonly rootElement: HTMLElement; // поле нужно инициализировать

  // дай поле
  /*constructor(element: HTMLElement) {
    this.rootElement = element
  }*/

  // private readonly cardsField: CardsField; // мы создали card-field в game - поэтому закоментируем ненужный код
  private readonly game: Game;
  // у тайпскрипта есть syntactic sugar - позволяет записать все в одну строчку
  constructor(private readonly rootElement: HTMLElement) {
    //this.cardsField = new CardsField();
    //this.rootElement.appendChild(this.cardsField.element)

    this.game = new Game();
    this.rootElement.appendChild(this.game.element)
  }

  async start(){
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json(); //должен автоматом замапиться

    const cat = categories[0];
    const images = cat.images.map((name) => `${cat.category}/${name}`);
    this.game.newGame(images)
  }
}
/* здесь app будет управлять страничками - можно прописать роутинг*/
