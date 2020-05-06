interface IUser {
  id?: number;
  firstName: string;
  lastName: string;
}

interface IAuthor {
  name: string;
  penName: string;
  birthDate?: Date;
  books: string[];
  followers: IUser[];
}

interface IPublisher {
  authors: IAuthor[];
}

// export default Publisher;

const agatha: IAuthor = {
  name: 'Agatha Christie'
} as IAuthor;

const sayHello = (author: IAuthor, userId?: number, title?: string) => {
  console.log(author.penName);
};

sayHello(agatha);

export {};
