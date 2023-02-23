import Image from "next/image";
import Link from "next/link";
import styles from "../styles/footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.contenido}`}>
        <nav className={styles.navegacion}>
          <Link href="/">Inicio</Link>
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/tienda">Tienda</Link>
          <Link legacyBehavior href="/carrito">
            <a>
              <Image
                width={30}
                height={25}
                src="/img/carrito.png"
                alt="imagen carrito"
              />
            </a>
          </Link>
        </nav>
        <p className={styles.derechos}>
          Todos los derechos reservados {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
