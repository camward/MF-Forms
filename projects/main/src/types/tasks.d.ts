declare module 'Models' {
  export interface CurrentCarsProps {
    name: string;
    models: string[];
  }

  export interface CurrentTaskProps {
    name: string;
    email: string;
    cars: CurrentCarsProps[];
    comment: string;
  }

  export interface ActiveTaskProps {
    name: string;
    email: string;
    links: {
      link: string;
    }[];
    confirm: boolean;
  }
}
