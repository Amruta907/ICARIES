import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contacts: React.FC = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.name}>Dr. G. R. Bamnote</h2>
        <h3 style={styles.title}>Principal</h3>

        <p style={styles.text}>
          Prof Ram Meghe Institute of Technology & Research,
          Anjangaon Bari Road, Badnera-Amravati 444 701 (M.S.)
        </p>

        <p style={styles.text}>
          <strong>Phone No:</strong> 0721-2681246, 0721-2681337 (Ext. -202)
        </p>

        <p style={styles.text}>
          <strong>Email:</strong>{" "}
          <a href="mailto:principal@mitra.ac.in" style={styles.link}>
            principal@mitra.ac.in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contacts;

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    backgroundColor: "#0a0909",
    padding: "20px",
  },
  card: {
    backgroundColor: "#110f0f",
    padding: "20px",
    borderRadius: "4px",
    maxWidth: "900px",
  },
  name: {
    margin: 0,
    fontWeight: 600,
  },
  title: {
    marginTop: "5px",
    marginBottom: "15px",
    fontWeight: 600,
  },
  text: {
    margin: "5px 0",
    lineHeight: "1.5",
  },
  link: {
    color: "#0070f3",
    textDecoration: "underline",
  },
};