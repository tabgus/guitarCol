import Layout from "@/components/layout";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/nosotros.module.css";

export default function Nosotros() {
  return (
    <>
      <Layout
        title="Nosotros"
        description="Sobre nosotros, Guitarras Colombia, Tienda de música"
      >
        <main className="contenedor">
          <h2 className="heading">Nosotros</h2>
          <div className={styles.contenido}>
            <Image
              src="/img/nosotros.jpg"
              width={1000}
              height={800}
              alt="imagen sobre nosotros"
            />
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                tellus neque, viverra nec tempor sit amet, ornare vitae nibh.
                Aenean consequat volutpat ornare. Cras sed congue ex, a luctus
                purus. Nam non maximus dui. Curabitur eget nisl cursus, volutpat
                ligula vitae, sodales neque.
              </p>
              <p>
                Aenean dignissim lectus vel risus elementum interdum. Morbi
                laoreet diam in purus volutpat porttitor. Proin fermentum
                dignissim dolor, ut aliquam felis varius eu. Nunc eu blandit
                nisl, id viverra ex. Vestibulum ante ipsum primis in faucibus
                orci luctus et ultrices posuere cubilia curae; Sed vehicula leo
                massa, in cursus odio blandit et.
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
