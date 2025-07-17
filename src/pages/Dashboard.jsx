import React from "react";
import { motion } from "framer-motion";
import Card from "../components/Card";
const Dashboard = () => {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <Card title="Total Accessories" value={12} />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <Card title="Total Owners" value={8} />
      </motion.div>
    </div>
  );
};

export default Dashboard;
