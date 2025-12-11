import { motion } from "framer-motion";

import Button from "@/components/Button";
import Section from "@/components/Section";

export const metadata = {
  title: "Gate Motors & Automation | ProGate",
};

export default function GateMotorsPage() {
  return (
    <>
    <Section title="Gate Motors & Automation">
      <div className="space-y-4 text-slate-700 text-sm">
        <p>
          We install, repair and upgrade sliding and swing gate motors for homes and small
          businesses. We work with popular brands like Centurion and ET Nice.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>New motor installations</li>
          <li>Motor repairs and fault finding</li>
          <li>Upgrading manual gates to automatic</li>
          <li>Backup battery installation</li>
          <li>Solar gate motor options</li>
          <li>Anti-theft motor cages</li>
          <li>Safety checks and settings</li>
        </ul>
      </div>
    </Section>
    <Section className="bg-slate-100" title="">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-700">
                         Not sure what you need? Send us a photo of your gate and motor, and we’ll advise on the best
          solution.
                    </p>
                    <div className="flex gap-3">
                      <Button href="/quote">Get a Free Quote</Button>
                      <Button href="/services" variant="outline">
                        Contact Us
                      </Button>
                    </div>
                  </div>
                </Section>
                </>
  );
}
