export interface IPost {
  id: string;
  title: string;
  content: string;
}

export interface PostProps {
  params: {
    id: string;
  };
}
