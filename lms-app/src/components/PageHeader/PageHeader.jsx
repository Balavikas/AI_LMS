import styles from './PageHeader.module.css'

function PageHeader({ title, subtitle }) {
  return (
    <section className={styles.header}>
      <div className="container">
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </section>
  )
}

export default PageHeader
