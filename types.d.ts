export type Meta = {
  id: string;
  title: string;
  date: string;
  tags: string[];
  headings?: [];
  description: string;
  img?: string;
  company?: string;
  title?: string;
};

type ProjectPost = {
  meta: Meta;
  content: ReactElement<any, string | JSXElementConstructor<any>>;
};
