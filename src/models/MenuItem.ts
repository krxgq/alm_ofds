interface IMenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  availability: boolean;
  category: string;
}

class MenuItem implements IMenuItem {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public price: number,
    public availability: boolean,
    public category: string
  ) {}
}

export { MenuItem, IMenuItem };