export default async function Docs({ params }: { params: { slug: string[] } }) {
const slug = await params.slug;
  if (slug.length === 0) {
    return <h1>Docs Homepage</h1>;
  }else if (slug.length === 1) {
    return (
      <>
        <h1>Docs Section: {slug[0]}</h1>
        <p>Content for section {slug[0]} will be displayed here.</p>
      </>
    );
  }else if (slug.length === 2) {
    return (
      <>
        <h1>Docs Section: {slug[0]}</h1>
        <h2>Subsection: {slug[1]}</h2>
        <p>Content for subsection {slug[1]} in section {slug[0]} will be displayed here.</p>
      </>
    );
  }
  
  return (
    <>
    <h1>This Is Docs Page</h1>    
    </>
  );
}