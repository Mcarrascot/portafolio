"use client";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Home, Contact, Projects } from "../tabSection";

export default function TabMenu() {
  return (
    <>
      <Tabs className="flex justify-center mt-4 mb-8">
        <Tab
          key="home"
          title="Home"
        >
          <Home />
        </Tab>

        <Tab
          key="projects"
          title="Proyectoss"
        >
          <Projects />
        </Tab>

        <Tab
          key="contact"
          title="Contacto"
        >
          <Contact />
        </Tab>
      </Tabs>
    </>
  );
}
