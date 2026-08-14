import { Container } from "../../components/Container/Container";
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper";

export const FaqPage = () => {
  return (
    <ContentWrapper
      title="FAQ"
      description="Find svar på dine spørgsmål"
      showTitle={true}
    >
      <Container>
        <h1>FAQ</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          consectetur labore voluptas quisquam soluta dolore quis? Eum officia
          nihil velit quis recusandae est et, incidunt iure reprehenderit
          quisquam voluptates sint. Alias natus cupiditate corporis modi unde
          quisquam obcaecati vitae voluptas, sequi rerum officiis aut, aliquid,
          neque iusto ratione! Laborum, hic.
        </p>
      </Container>
    </ContentWrapper>
  );
};
