import { CustomButton } from "@/components/common/Button";
import Provider from "./Provider";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Provider>
        <Hero />
      </Provider>
    </>
  );
}
