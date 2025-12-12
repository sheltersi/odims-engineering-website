import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

export function ComparePricingTable() {
  const features = [
    {
      name: "Gate Installation Included",
      basic: true,
      premium: true,
      motor: false,
    },
    {
      name: "Motor-Ready Frame",
      basic: false,
      premium: true,
      motor: true,
    },
    {
      name: "Remote Programming",
      basic: false,
      premium: true,
      motor: true,
    },
    {
      name: "Safety Beams",
      basic: false,
      premium: true,
      motor: true,
    },
    {
      name: "Warranty",
      basic: "3 Months",
      premium: "6 Months",
      motor: "12 Months",
    },
  ];

  return (
    <section className="mt-20 max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-10">
        Compare Our Packages
      </h2>

      <div className="overflow-x-auto rounded-xl shadow-lg">
        <table className="w-full border-collapse bg-white">
          <thead className="bg-blue-600 text-white text-left">
            <tr>
              <th className="p-4 text-lg">Features</th>
              <th className="p-4 text-lg">Standard</th>
              <th className="p-4 text-lg">Premium</th>
              <th className="p-4 text-lg">Motor Package</th>
            </tr>
          </thead>

          <tbody>
            {features.map((row, i) => (
              <motion.tr
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="border-b hover:bg-blue-50 transition"
              >
                <td className="p-4 font-medium">{row.name}</td>

                <td className="p-4 text-center">
                  {row.basic === true ? (
                    <CheckCircle className="w-6 h-6 text-green-600 mx-auto" />
                  ) : row.basic === false ? (
                    <XCircle className="w-6 h-6 text-red-600 mx-auto" />
                  ) : (
                    row.basic
                  )}
                </td>

                <td className="p-4 text-center">
                  {row.premium === true ? (
                    <CheckCircle className="w-6 h-6 text-green-600 mx-auto" />
                  ) : row.premium === false ? (
                    <XCircle className="w-6 h-6 text-red-600 mx-auto" />
                  ) : (
                    row.premium
                  )}
                </td>

                <td className="p-4 text-center">
                  {row.motor === true ? (
                    <CheckCircle className="w-6 h-6 text-green-600 mx-auto" />
                  ) : row.motor === false ? (
                    <XCircle className="w-6 h-6 text-red-600 mx-auto" />
                  ) : (
                    row.motor
                  )}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
