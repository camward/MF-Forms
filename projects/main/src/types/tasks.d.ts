declare module 'Models' {
  export interface CurrentTaskProps {
    name: string;
    email: string;
    links: string[];
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
