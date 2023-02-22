import Layout from "@/components/layout";
import Link from "next/link";
import Guitarra from "@/components/guitarra";
import styles from "../styles/grid.module.css";

export default function Tienda({ guitarras }) {
  //console.log(guitarras);
  return (
    <>
      <Layout
        title="Tienda Virtual"
        description="Tienda virtual, instrumentos, Guitar Colombia"
      >
        <main className="contenedor">
          <h1 className="heading">Nuestras Guitarras</h1>
          <div className={styles.grid}>
            {guitarras?.map((guitarra) => (
              <Guitarra key={guitarra.id} guitarra={guitarra.attributes} />
            ))}
          </div>
        </main>
      </Layout>
    </>
  );
}

// export async function getStaticProps() {
//   const respuesta = await fetch(
//     `${process.env.API_URL}/guitarras?populate=imagen`
//   );
//   const { data: guitarras } = await respuesta.json();
//   //console.log(guitarras);

//   return {
//     props: { guitarras },
//   };
// }

export async function getServerSideProps() {
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?populate=imagen`
  );
  const { data: guitarras } = await respuesta.json();
  //console.log(guitarras);

  return {
    props: { guitarras },
  };
}
