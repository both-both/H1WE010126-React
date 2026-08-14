import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper";

export const ErrorPage = () => {
  return (
    <ContentWrapper title="Siden kunne ikke findes" showTitle={true}>
      <h3>Hov noget gik galt, gå tilbage tili forsiden</h3>
    </ContentWrapper>
  );
};
