import Image from "next/image";
import Link from "next/link";
import { formatFecha } from "@/utils";
import styles from "../styles/blog.module.css";

export default function Post({ post }) {
  const { contenido, titulo, imagen, url, publishedAt } = post;
  return (
    <article>
      <Image
        src={imagen.data.attributes.formats.medium.url}
        width={600}
        height={400}
        alt={`imagen blog ${titulo}`}
        className={styles.img}
      />
      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{formatFecha(publishedAt)}</p>
        <p className={styles.resumen}>{contenido}</p>
        <Link legacyBehavior href={`/blog/${url}`}>
          <a className={styles.enlace}>Leer post</a>
        </Link>
      </div>
    </article>
  );
}
