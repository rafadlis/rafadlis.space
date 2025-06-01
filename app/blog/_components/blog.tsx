function Blog({ children }: { children: React.ReactNode }) {
  return <article>{children}</article>;
}

function BlogHeader({ children }: { children: React.ReactNode }) {
  return <header>{children}</header>;
}

function BlogTitle({ children }: { children: React.ReactNode }) {
  return <h1>{children}</h1>;
}

function BlogMeta({ date }: { date: string }) {
  return (
    <div>
      <time dateTime={date}>{date}</time>
    </div>
  );
}

function BlogAuthors({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

function BlogContent({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}

function BlogParagraph({ children }: { children: React.ReactNode }) {
  return <p>{children}</p>;
}

export {
  Blog,
  BlogHeader,
  BlogTitle,
  BlogMeta,
  BlogAuthors,
  BlogContent,
  BlogParagraph,
};
