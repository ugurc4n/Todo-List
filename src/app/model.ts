export class Model{
  user;
  items;

  constructor(){
    this.user = "Ugur";
    this.items = [
      new TodoItem("Okul",true),
      new TodoItem("Spor",false),
      new TodoItem("Sinema",false),
      new TodoItem("Sınav",true),
      new TodoItem("Kod",true),
      new TodoItem("Satranç",false),
      new TodoItem("Futbol",false),
      new TodoItem("Kitap Okuma",false),
      new TodoItem("Ders",true),
    ];
  }
}

export class TodoItem{
  description;
  action;

  constructor(description, action){
    this.description = description;
    this.action = action;
  }
}
