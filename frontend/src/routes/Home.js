import PageContent from "../components/PageContent";

function HomePage() {
  return (
    <>
      <PageContent title="Welcome!">
        <p style={{ display: "flex", justifyContent: "center" }}>
          Browse all our amazing events!
        </p>
      </PageContent>
    </>
  );
}

export default HomePage;
