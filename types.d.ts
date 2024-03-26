export type Meta = {
  id: string;
  title: string;
  date: string;
  tags: string[];
  headings?: [];
};

type ProjectPost = {
  meta: Meta;
  content: ReactElement<any, string | JSXElementConstructor<any>>;
};
