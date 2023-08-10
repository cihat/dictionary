import Container from "@/components/ui/container";

export default function Voscreen() {
  return (
    <Container as="main" size="large" className="min-h-[100vh]">
      <h1>Voscreen</h1>
      <iframe
        className="min-h-[100vh]"
        src="https://voscreen.com"
        width="100%"
        height="100%"
      />
    </Container>
  )
}