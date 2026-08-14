import { Container } from "../../components/Container/Container";
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper";

export const EducationPage = () => {
  return (
    <ContentWrapper
      title="Undervisning"
      description="Inspiration til undervisning i form af introducerende øvelser"
      showTitle={true}
    >
      <Container>
        <p>
          Her finder du inspiration til din undervisning i form af
          introducerende øvelser, der kan bruges til at sætte verdensmålene i
          spil sammen med dine elever. Øvelserne er udarbejdet på baggrund af
          bogen “Bliver verden bedre” og kernestof i fagene.
        </p>
      </Container>
    </ContentWrapper>
  );
};
