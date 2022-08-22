
import styles from './Tag.module.css'

const Tag = (props) => {
  const {tagText} = props
  return (
    <div className={styles.tag}>
    <span className={styles['tag-text']}>{tagText}</span>
    </div>
  )
}

export default Tag
