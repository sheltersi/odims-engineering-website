import "@/styles/globals.css";
import "@/styles/custom-styles.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import "./fontawesome"; // <-- the config file you created above

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Providers from "@/components/Providers";

// import "@/styles/custom-styles.css";

export const metadata = {
  title:{
    default:  "ODIMS Welding & Automation",
    template: "%s | ProGate Welding & Automation",
  },
  description: "Gate Motors • Remote Coding • Welding • Garage Doors",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app-root">
          <Providers>
            <Header />
            <main className="main-content">{children}</main>
            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  );
}
