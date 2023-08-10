import Container from "@/components/ui/container";
import BackButton from "@/components/back-button";
import Words from "@/components/app/words";
import FeatureList from "@/components/app/feature-list";

export default function LearnWithVideos() {

  return (
    <Container as="main" size="full" className="m-auto min-w-[100vw] min-h-[calc(100vh - 32px)]">
      <BackButton href="/"/>
      <FeatureList />
    </Container>
  )
}