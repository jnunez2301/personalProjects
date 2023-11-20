import { FooterSection, MainSection, NoEquipmentSection, Recommended } from "./HomeSections/"

export const MainPage = () => {
  return (
    <section className="main-section-container">
      <MainSection />
      <NoEquipmentSection />
      <Recommended />
      <FooterSection />
    </section>
  )
}
